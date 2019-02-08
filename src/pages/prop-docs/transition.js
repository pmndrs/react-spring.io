import React from 'react'
import NavPage from '../../common/nav-page'
import {Link} from '@reach/router'
import raw from 'raw.macro'
import {animated} from 'react-spring'
import {FencedCode, RewindSpringProvider, RewindSpring} from '../../common/components'
import ParseMD from '../../utils/parse-md'

const TransitionPropsTableMD = raw('./transition/transition-props-table.md')

export default function TransitionPage({path}) {
  return (
    <NavPage currentPath={path}>
      <RewindSpringProvider>
        <section>
          <h1>Transition</h1>

          <FencedCode>{`import { Transition } from 'react-spring/renderprops'`}</FencedCode>

          <p>
            A <code>Transition</code> animates component lifecycles as components mount, unmount or otherwise change.
          </p>

          <p>
            <mark>It takes a list of items of any type, and their keys</mark>. The latter defaults to <code>item => item</code>, which, if your items are self-sufficient as a key
            is often good enough. Whenever items are added, removed, reordered or updated, it will help you to animate these changes.
          </p>
          <p>
            <mark>You provide a single function-child</mark> that receives an item and additionally its transition state (enter/leave/update), followed by its index. The full
            signature looks like:
          </p>

          <FencedCode>{`(item, state, index) => props => ReactNode`}</FencedCode>

          <p>
            <mark>You should always rely on the item that you receive</mark> instead of reading from scope, since you could be rendering an item that has already been deleted, but
            is retained inside Transition until its fade-out is complete. This is especially important for routes.
          </p>
          <p>
            <mark>TLDR</mark>, items in, keys if necessary, present the item that comes out and apply the animated props you receive.
          </p>

          <p>
            The primary task of a <code>Spring</code> is to move data from one state to another. The optional from-prop only plays a role when the component renders first, use the
            to-prop to update the spring with new values.
          </p>

          <div className="code-table">
            <FencedCode language="jsx">{`const items = [...]
  
  <Transition
    items={items} keys={item => item.key}
    from={{ transform: 'translate3d(0,-40px,0)' }}
    enter={{ transform: 'translate3d(0,0px,0)' }}
    leave={{ transform: 'translate3d(0,-40px,0)' }}>
    {item => props =>
      <div style={props}>{item.text}</div>
    }
  </Transition>`}</FencedCode>

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
          <p>
            <mark>Transitions can also take a single item</mark>, which can be anything. You can use it to toggle between components.
          </p>

          <div className="code-table">
            <FencedCode language="jsx">{`<Transition
  items={toggle}
  from={{ position: 'absolute', opacity: 0 }}
  enter={{ opacity: 1 }}
  leave={{ opacity: 0 }}>
  {toggle =>
    toggle
      ? props => <div style={props}>😄</div>
      : props => <div style={props}>🤪</div>
  }
</Transition>`}</FencedCode>
            <RewindSpring>
              {x => (
                <>
                  <animated.div style={{position: 'absolute', opacity: x.interpolate({range: [0.0, 1.0], output: [0, 1]})}}>😄</animated.div>
                  <animated.div style={{position: 'absolute', opacity: x.interpolate({range: [1.0, 0.0], output: [0, 1]})}}>🤪</animated.div>
                </>
              )}
            </RewindSpring>
          </div>

          <p>
            It also comes in handy for <mark>single-component mount/unmount reveals</mark>.
          </p>

          <div className="code-table">
            <FencedCode language="jsx">{`<Transition
  items={show}
  from={{ opacity: 0 }}
  enter={{ opacity: 1 }}
  leave={{ opacity: 0 }}>
  {show =>
    show && (props => <div style={props}>✌️</div>)
  }
</Transition>`}</FencedCode>

            <RewindSpring>{x => <animated.div style={{opacity: x}}>✌️</animated.div>}</RewindSpring>
          </div>
        </section>
      </RewindSpringProvider>

      <section>
        <h2>Multistage transitions</h2>

        <p>
          <mark>
            Transitions inherit from <Link to="/docs/api/props/keyframes">Keyframes</Link>
          </mark>
          , so its slots (initial, from, enter, leave and update) can take the same types that Keyframe slots can take, namely: objects, functions, object-arrays. This gives you
          the ability to handle complex multistage, chained or scripted animations.
        </p>

        <iframe
          src="https://codesandbox.io/embed/jjkj3x9o55?fontsize=13&editorsize=60&hidenavigation=1&codemirror=1"
          style={{width: '100%', height: 500, border: 0, borderRadius: 4, overflow: 'hidden'}}
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        />
      </section>

      <section>
        <h2>Props</h2>

        <p>
          <mark>
            Transition accepts <em>all</em> spring properties
          </mark>
          : native, from, immediate, onRest, and so on.
        </p>
        <ParseMD contents={TransitionPropsTableMD} />
      </section>

      <section>
        <h2>Demos</h2>

        <p>
          <mark>TODO: demos here</mark>
        </p>
      </section>
    </NavPage>
  )
}
