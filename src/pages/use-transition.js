import React from 'react'
import {Link} from '@reach/router'
import NavPage from '../common/nav-page'
import ParseMD from '../utils/parse-md'
import raw from 'raw.macro'
import {FencedCode, RewindSpringProvider, RewindSpring} from '../common/components'
import {animated} from 'react-spring'
import DemoGrid from '../examples/components/DemoGrid'
import Demo from '../examples/components/Demo'
import examples from '../examples/components/examples-hooks'

const content1 = raw('./md/useTransition-1.md')
const content2 = raw('./md/useTransition-2.md')

export default function UseTransitionPage({path}) {
  return (
    <NavPage currentPath={path}>
      <ParseMD contents={content1} />
      <RewindSpringProvider>
        <p>You can transition arrays,</p>
        <div className="code-table">
          <FencedCode language="jsx">{`const [items, set] = useState([...])
const transitions = useTransition(items, item => item.key, {
  from: { transform: 'translate3d(0,-40px,0)' },
  enter: { transform: 'translate3d(0,0px,0)' },
  leave: { transform: 'translate3d(0,-40px,0)' },
})
return transitions.map(({ item, props, key }) =>
  <animated.div key={key} style={props}>{item.text}</animated.div>
)`}</FencedCode>
          <RewindSpring>
            {x => (
              <>
                <animated.div
                  style={{
                    opacity: x.interpolate({range: [0.75, 1.0], output: [0, 1]}),
                    transform: x.interpolate({range: [0.75, 1.0], output: [-40, 0], extrapolate: 'clamp'}).interpolate(x => `translate3d(0,${x}px,0)`)
                  }}
                >
                  1
                </animated.div>
                <animated.div
                  style={{
                    opacity: x.interpolate({range: [0.25, 0.5], output: [0, 1]}),
                    transform: x.interpolate({range: [0.25, 0.5], output: [-40, 0], extrapolate: 'clamp'}).interpolate(x => `translate3d(0,${x}px,0)`)
                  }}
                >
                  2
                </animated.div>
                <animated.div
                  style={{
                    opacity: x.interpolate({range: [0.0, 0.25], output: [0, 1]}),
                    transform: x.interpolate({range: [0.0, 0.25], output: [-40, 0], extrapolate: 'clamp'}).interpolate(x => `translate3d(0,${x}px,0)`)
                  }}
                >
                  3
                </animated.div>
                <animated.div
                  style={{
                    opacity: x.interpolate({range: [0.5, 0.75], output: [0, 1]}),
                    transform: x.interpolate({range: [0.5, 0.75], output: [-40, 0], extrapolate: 'clamp'}).interpolate(x => `translate3d(0,${x}px,0)`)
                  }}
                >
                  4
                </animated.div>
              </>
            )}
          </RewindSpring>
        </div>
        <p>toggle between components,</p>
        <div className="code-table">
          <FencedCode language="jsx">{`const [toggle, set] = useState(false)
const transitions = useTransition(toggle, null, {
  from: { position: 'absolute', opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 },
})
return transitions.map(({ item, key, props }) => 
  item
    ? <animated.div style={props}>😄</animated.div>
    : <animated.div style={props}>🤪</animated.div>
)`}</FencedCode>
          <RewindSpring>
            {x => (
              <>
                <animated.div style={{position: 'absolute', opacity: x.interpolate({range: [0.0, 1.0], output: [0, 1]})}}>😄</animated.div>
                <animated.div style={{position: 'absolute', opacity: x.interpolate({range: [1.0, 0.0], output: [0, 1]})}}>🤪</animated.div>
              </>
            )}
          </RewindSpring>
        </div>
        <p>mount/unmount single-component reveals,</p>
        <div className="code-table">
          <FencedCode language="jsx">{`const [show, set] = useState(false)
const transitions = useTransition(show, null, {
  from: { position: 'absolute', opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 },
})
return transitions.map(({ item, key, props }) =>
  item && <animated.div key={key} style={props}>✌️</animated.div>
)`}</FencedCode>
          <RewindSpring>{x => <animated.div style={{opacity: x}}>✌️</animated.div>}</RewindSpring>
        </div>
      </RewindSpringProvider>
      <ParseMD contents={content2} />
      <DemoGrid padding={0}>
        {examples
          .filter(data => data.tags.includes('useTransition'))
          .map(data => (
            <Demo key={data.name} {...data} import={import('../examples/demos/' + data.name)} />
          ))}
      </DemoGrid>
    </NavPage>
  )
}
