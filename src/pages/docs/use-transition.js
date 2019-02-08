import React from 'react'
import {Link} from '@reach/router'
import NavPage from '../../common/nav-page'
import ParseMD from '../../utils/parse-md'
import raw from 'raw.macro'
import {FencedCode, RewindSpringProvider, RewindSpring} from '../../common/components'
import {animated} from 'react-spring'

import DemoGrid from '../../examples/components/DemoGrid'
import Demo from '../../examples/components/Demo'
import examples from '../../examples/components/examples-hooks'

const PropertiesTableMD = raw('./use-transition/properties-table.md')
const MultiStageTransitionCodeMD = raw('./use-transition/multi-stage-transition-code.md')
const TransitionBetweenRoutesCodeMD = raw('./use-transition/transition-between-routes-code.md')

export default function UseTransition({path}) {
  return (
    <NavPage currentPath={path}>
      <RewindSpringProvider>
        <section>
          <h1>useTransition</h1>

          <FencedCode>{`import { useTransition, animated } from 'react-spring'`}</FencedCode>

          <p>
            An animated TransitionGroup. Feed it your items, keys (which can be <code>null</code> if items are atomic), and lifecycles. Whenever items are added or removed, it will
            animate these changes.
          </p>

          <p>You can transition arrays,</p>

          <div className="code-table">
            <FencedCode language="jsx">{`const [items, set] = useState([1,2,3,4])
const trans = useTransition(items, item => item.key, {
  from: { transform: 'translate3d(0,-40px,0)' },
  enter: { transform: 'translate3d(0,0px,0)' },
  leave: { transform: 'translate3d(0,-40px,0)' },
})
return trans.map(({ item, props, key }) => (
  <animated.div
    key={key} style={props}>{item}</animated.div>
))`}</FencedCode>
            />
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
const trans = useTransition(toggle, null, { ... })
return trans.map(({ item, key, props }) => 
  toggle
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
const trans = useTransition(show, null, { ... })
return trans.map(({ item, key, props }) =>
  item &&
    <animated.div style={props}>✌️</animated.div>
)`}</FencedCode>
            <RewindSpring>{x => <animated.div style={{opacity: x}}>✌️</animated.div>}</RewindSpring>
          </div>
        </section>
      </RewindSpringProvider>
      <section>
        <h2>Properties</h2>
        <p>
          All properties of the <Link to="/docs/shared-api">shared-api</Link> apply.
        </p>
        <ParseMD contents={PropertiesTableMD} />
      </section>

      <section>
        <h2>Additional notes</h2>
        <h3>Multi-stage transitions</h3>
        <p>
          The initial/from/enter/update/leave lifecycles can be objects, arrays or functions. When you provide a function you have access to individual items. The function is
          allowed to return plain objects, or either an array or a function for multi-stage transitions. When you provide a plain array you also can form a basic multi-stage
          transition (without access to the item).
        </p>

        <ParseMD contents={MultiStageTransitionCodeMD} />

        <h3>
          Transitioning <a href="https://twitter.com/0xca0a/status/1092772431087964161">between routes</a>
        </h3>

        <ParseMD contents={TransitionBetweenRoutesCodeMD} />
      </section>

      <div id="demos">
        <h2>Demos</h2>
        <DemoGrid padding={0}>
          {examples
            .filter(data => data.tags.includes('useTransition'))
            .map(data => (
              <Demo key={data.name} {...data} import={import('../../examples/demos/' + data.name)} />
            ))}
        </DemoGrid>
      </div>
    </NavPage>
  )
}
