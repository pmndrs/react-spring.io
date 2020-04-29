import * as React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { a, useSpring } from 'react-spring'
import VisibilitySensor from 'react-visibility-sensor'
import nebu from 'nebu'
import prismTheme from '../theme/prism'

/** Use a value from the previous render */
export function usePrev(value) {
  const prevRef = React.useRef()
  React.useEffect(() => {
    prevRef.current = value
  })
  return prevRef.current
}

const scope = {
  // Create and render a component that uses the example code.
  __r: useExample => {
    const Example = ({ visible }) => {
      const wasVisible = usePrev(visible)

      let style
      try {
        style = useExample({
          reset: !wasVisible && visible,
          cancel: !visible,
        })
      } catch (e) {}

      return (
        <a.div
          style={{
            width: 80,
            height: 80,
            marginTop: 20,
            backgroundColor: 'purple',
            borderRadius: 16,
            ...style,
          }}
        />
      )
    }
    return (
      <VisibilitySensor>
        {props => <Example visible={props.isVisible} />}
      </VisibilitySensor>
    )
  },
  useSpring,
}

const buble = {
  transforms: {
    arrow: false,
    asyncAwait: false,
  },
}

const ReactLiveProvider = ({ code, type }) => {
  return (
    <LiveProvider
      code={code.trim()}
      scope={scope}
      buble={buble}
      transformCode={transform}>
      <LiveEditor theme={prismTheme} />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  )
}

export default ReactLiveProvider

const hookIds = ['useSpring']

function transform(input) {
  const plugins = [
    {
      Program(node) {
        const lastStmt = node.body[node.body.length - 1]
        if (lastStmt && lastStmt.type !== 'ReturnStatement') {
          if (lastStmt.type == 'ExpressionStatement') {
            const expr = lastStmt.expression
            if (
              expr.type == 'CallExpression' &&
              hookIds.indexOf(expr.callee.name) >= 0
            ) {
              const objExpr = expr.arguments.find(
                e => e.type == 'ObjectExpression'
              )
              if (objExpr) {
                objExpr.unshift('properties', '...props,\n')
              }
            }
            expr.before('return ')
          }
        }
      },
    },
  ]
  try {
    const output = nebu.process(input, { plugins })
    return `__r(props => {\n${output}\n})`
  } catch (e) {
    return '__r(() => false)'
  }
}
