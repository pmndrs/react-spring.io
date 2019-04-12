import React from 'react'
import NavPage from '../common/nav-page'
import ParseMD from '../utils/parse-md'
import raw from 'raw.macro'
import {FencedCode, RewindSpringProvider, RewindSpring} from '../common/components'
import {animated} from 'react-spring'
import DemoGrid from '../examples/components/DemoGrid'
import Demo from '../examples/components/Demo'
import examples from '../examples/components/examples-renderprops'

const content1 = raw('./md/Spring-1.md')
const content2 = raw('./md/Spring-2.md')

export default function UseSpringPage({path}) {
  return (
    <NavPage currentPath={path}>
      <ParseMD contents={content1} />

      <RewindSpringProvider>
        <div className="code-table">
          <FencedCode language="jsx">
            {`<Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}>
                {props => <div style={props}>hello</div>}
              </Spring>`}
          </FencedCode>
          <RewindSpring>{x => <animated.div style={{opacity: x}}>hello</animated.div>}</RewindSpring>
        </div>
        <p>Do with them whatever you like, animate attributes for instance,</p>
        <div className="code-table">
          <FencedCode language="jsx">
            {`<Spring
                from={{ x: 100 }}
                to={{ x: 0 }}>
                {props => (
                  <svg strokeDashoffset={props.x}>
                    <path d="..." />
                  </svg>
                )}
              </Spring>`}
          </FencedCode>
          <RewindSpring>
            {x => (
              <animated.svg
                style={{margin: 20, width: 80, height: 80, opacity: x.interpolate({range: [0, 0.05, 1], output: [0, 1, 1]})}}
                viewBox="0 0 45 44"
                strokeWidth="2"
                fill="white"
                stroke="rgb(45, 55, 71)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={156}
                strokeDashoffset={x.interpolate(x => (1 - x) * 156)}
              >
                <polygon points="22.5 35.25 8.68704657 42.5118994 11.3250859 27.1309497 0.150171867 16.2381006 15.5935233 13.9940503 22.5 0 29.4064767 13.9940503 44.8498281 16.2381006 33.6749141 27.1309497 36.3129534 42.5118994" />
              </animated.svg>
            )}
          </RewindSpring>
        </div>
        <p>or innerText,</p>
        <div className="code-table">
          <FencedCode language="jsx">
            {`<Spring
                from={{ number: 0 }}
                to={{ number: 1 }}>
                {props => <div>{props.number}</div>}
              </Spring>`}
          </FencedCode>
          <RewindSpring>{x => <animated.div>{x.interpolate(n => n.toFixed(2))}</animated.div>}</RewindSpring>
        </div>
        <p>or generic React-component props.</p>
        <div className="code-table">
          <FencedCode language="jsx">
            {`<Spring
                from={{ value: 0 }}
                to={{ value: 100 }}>
                {props => <Donut value={props.value} />}
              </Spring>`}
          </FencedCode>
          <RewindSpring>
            {x => (
              <animated.svg
                style={{margin: 20, width: 80, height: 80, opacity: x.interpolate({range: [0, 0.05, 1], output: [0, 1, 1]})}}
                viewBox="0 0 51 51"
                strokeWidth="2.5"
                fill="white"
                stroke="rgb(45, 55, 71)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={156}
                strokeDashoffset={x.interpolate(x => (1 - x) * 156)}
              >
                <circle transform="translate(25.500000, 25.500000) rotate(-270.000000) translate(-25.500000, -25.500000)" cx="25.5" cy="25.5" r="24.5" />
              </animated.svg>
            )}
          </RewindSpring>
        </div>
      </RewindSpringProvider>

      <ParseMD contents={content2} />

      <DemoGrid padding={0}>
        {examples
          .filter(data => data.tags.includes('springs'))
          .map(data => (
            <Demo key={data.name} {...data} import={import('../examples/demos/' + data.name)} />
          ))}
      </DemoGrid>
    </NavPage>
  )
}
