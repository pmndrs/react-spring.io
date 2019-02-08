import React from 'react'
import NavPage from '../../common/nav-page'
import {animated} from 'react-spring'
import {FencedCode, RewindSpringProvider, RewindSpring} from '../../common/components'
import ParseMD from '../../utils/parse-md'
import raw from 'raw.macro'

import DemoGrid from '../../examples/components/DemoGrid'
import Demo from '../../examples/components/Demo'
import examples from '../../examples/components/examples-legacy'

const TrailPropsTableMD = raw('./trail/trail-props-table.md')

export default function TrailPage({path}) {
  return (
    <NavPage currentPath={path}>
      <RewindSpringProvider>
        <section>
          <h1>Trail</h1>

          <FencedCode>{`import { Trail } from 'react-spring/renderprops'`}</FencedCode>

          <p>
            A <code>Trail</code> animates the first item of a list of elements, the rest form a natural trail and follow their previous sibling.
          </p>
          <p>
            <mark>It takes a list of items of any type, and their keys</mark>. The latter defaults to <code>item => item</code>, which, if your items are self-sufficient as a key
            is often good enough.
          </p>
          <p>
            <mark>You provide a single function-child</mark> that receives an item and additionally its index. The full signature looks like:
          </p>

          <FencedCode>{`(item, index) => props => ReactNode`}</FencedCode>

          <p>
            <mark>TLDR</mark>, items in, keys if necessary, present the item that comes out and apply the animated props you receive.
          </p>

          <div className="code-table">
            <FencedCode language="jsx">{`const items = [...]
  
  <Trail
    items={items} keys={item => item.key}
    from={{ transform: 'translate3d(0,-40px,0)' }}
    to={{ transform: 'translate3d(0,0px,0)' }}>
    {item => props =>
      <span style={props}>{item.text}</span>
    }
  </Trail>`}</FencedCode>

            <RewindSpring>
              {x => (
                <>
                  <animated.div
                    style={{
                      opacity: x.interpolate({range: [0.0, 1.0], output: [0, 1]}),
                      transform: x.interpolate({range: [0.0, 1.0], output: [-40, 0], extrapolate: 'clamp'}).interpolate(x => `translate3d(0,${x}px,0)`)
                    }}
                  >
                    h
                  </animated.div>
                  <animated.div
                    style={{
                      opacity: x.interpolate({range: [0.2, 1.0], output: [0, 1]}),
                      transform: x.interpolate({range: [0.2, 1.0], output: [-40, 0], extrapolate: 'clamp'}).interpolate(x => `translate3d(0,${x}px,0)`)
                    }}
                  >
                    e
                  </animated.div>
                  <animated.div
                    style={{
                      opacity: x.interpolate({range: [0.4, 1.0], output: [0, 1]}),
                      transform: x.interpolate({range: [0.4, 1.0], output: [-40, 0], extrapolate: 'clamp'}).interpolate(x => `translate3d(0,${x}px,0)`)
                    }}
                  >
                    l
                  </animated.div>
                  <animated.div
                    style={{
                      opacity: x.interpolate({range: [0.6, 1.0], output: [0, 1]}),
                      transform: x.interpolate({range: [0.6, 1.0], output: [-40, 0], extrapolate: 'clamp'}).interpolate(x => `translate3d(0,${x}px,0)`)
                    }}
                  >
                    l
                  </animated.div>
                  <animated.div
                    style={{
                      opacity: x.interpolate({range: [0.8, 1.0], output: [0, 1]}),
                      transform: x.interpolate({range: [0.8, 1.0], output: [-40, 0], extrapolate: 'clamp'}).interpolate(x => `translate3d(0,${x}px,0)`)
                    }}
                  >
                    o
                  </animated.div>
                </>
              )}
            </RewindSpring>
          </div>
        </section>
      </RewindSpringProvider>

      <section>
        <h2>Props</h2>

        <p>
          <mark>
            Trail accepts <em>all</em> spring properties
          </mark>
          : native, from, immediate, onRest, and so on.
        </p>

        <ParseMD contents={TrailPropsTableMD} />
      </section>

      <div id="demos">
        <h2>Demos</h2>

        <DemoGrid padding={0}>
          {examples
            .filter(data => data.tags.includes('trails'))
            .map(data => (
              <Demo
                key={data.name}
                {...data}
                link={`https://github.com/drcmda/react-spring/blob/v7.2.10/examples/demos/${data.name}`}
                import={import('../../examples/demos-legacy/' + data.name)}
              />
            ))}
        </DemoGrid>
      </div>
    </NavPage>
  )
}
