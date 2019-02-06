import React from 'react'
import {Link} from '@reach/router'
import NavPage from '../../common/nav-page'
import ParseMD from '../../utils/parse-md'
import raw from 'raw.macro'
import {FencedCode, RewindSpringProvider, RewindSpring} from '../../common/components'
import {animated} from 'react-spring/hooks'

const StyledComponentsCodeMD = raw('./basics/styled-components-code.md')
const ViewInterpolationCodeMD = raw('./basics/view-interpolation-code.md')
const EmulatingCSSKeyframesCodeMD = raw('./basics/emulating-css-keyframes-code.md')

export default function BasicsDocsPage({path}) {
  return (
    <NavPage currentPath={path}>
      <section>
        <h1>Basics</h1>
        <h2>Installation</h2>
        <FencedCode language="text">npm install react-spring</FencedCode>
      </section>

      <section>
        <h2>Primitives</h2>
        <p>There are 5 hooks in react-spring currently: </p>
        <ul>
          <li>
            <code>useSpring</code> a single spring, moves data from a -> b
          </li>
          <li>
            <code>useSprings</code> multiple springs, for lists, where each spring moves data from a -> b
          </li>
          <li>
            <code>useTrail</code> multiple springs with a single dataset, one spring follows or trails behind the other
          </li>
          <li>
            <code>useTransition</code> for mount/unmount transitions (lists where items are added/removed/updated)
          </li>
          <li>
            <code>useChain</code> to queue or chain multiple animations together
          </li>
        </ul>
        <p>
          The easiest is <Link to="/docs/use-spring">useSpring</Link>. Let's have a look ...
        </p>
      </section>

      <section>
        <h3>First, you fetch your imports</h3>
        <FencedCode>{`import {(useSpring, animated)} from 'react-spring'`}</FencedCode>
        <p>
          You need the primitive itself, and a special factory called <code>animated</code>. This library animates outside React (for performance reasons). Your view has to know
          how to handle the animated props you pass to it. This is what <code>animated</code> is there for, it extends native elements to receive animated values.
        </p>
      </section>

      <section>
        <h3>Next, define your spring</h3>
        <FencedCode>{`const props = useSpring({ opacity: 1, from: { opacity: 0 } })`}</FencedCode>
        <p>
          A spring simply animates values from one state to another. Updates are accumulative, sorings remember all the values you ever pass. You can use arbitrary names. There are
          a couple of reserved keywords like "from" (for base values). <Link to="/docs/shared-api">You can learn about the api here</Link>. The received props are not static
          values! These props are self-updating, you cannot use them in regular divs and such.
        </p>
      </section>

      <section>
        <h3>Finally, tie the animated values to your view</h3>
        <FencedCode>{`return <animated.div style={props}>I will fade in</animated.div>`}</FencedCode>
        <p>
          In the view part of your component you simply wire these props in. Make sure to extend the native element you want to animate using <code>animated</code>. If your target
          is the web then <code>animated</code> contains all valid html elements (divs, spans, svgs, etc). If you want to animate React components, styled-components, or elements
          on other platforms, then do this:
        </p>
        <ParseMD contents={StyledComponentsCodeMD} />
      </section>

      <section>
        <h3>Do not think of the values you pass as "styles" per se</h3>

        <RewindSpringProvider>
          <p>Although you can use them as such.</p>
          <div className="code-table">
            <FencedCode>
              {`const props = useSpring({
  opacity: 1,
  from: { opacity: 0 }
})
return <animated.h1 style={props}>hello</animated.h1>`}
            </FencedCode>
            <RewindSpring>{x => <animated.div style={{opacity: x}}>hello</animated.div>}</RewindSpring>
          </div>

          <p>Do with them whatever you like, animate attributes for instance,</p>

          <div className="code-table">
            <FencedCode>
              {`const props = useSpring({
  x: 100,
  from: { x: 0 }
})
return (
  <animated.svg strokeDashoffset={props.x}>
    <path d="..." />
  </animated.svg>
)`}
            </FencedCode>
            <RewindSpring>
              {x => (
                <animated.svg
                  style={{width: 120, height: 120, opacity: x.interpolate({range: [0, 0.05, 1], output: [0, 1, 1]})}}
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
            <FencedCode>
              {`const props = useSpring({
  number: 1,
  from: { number: 0 }
})
return <animated.span>{props.number}</animated.span>`}
            </FencedCode>
            <RewindSpring>{x => <animated.div style={{fontFamily: 'monospace'}}>{x.interpolate(n => n.toFixed(2))}</animated.div>}</RewindSpring>
          </div>

          <p>or generic React-component props.</p>

          <div className="code-table">
            <FencedCode>
              {`const AnimatedDonut = animated(Donut)
// ...
const props = useSpring({
  value: 100,
  from: { value: 0 }
})
return <AnimatedDonut percent={props.value} />`}
            </FencedCode>
            <RewindSpring>
              {x => (
                <animated.svg
                  style={{width: 120, height: 120, opacity: x.interpolate({range: [0, 0.05, 1], output: [0, 1, 1]})}}
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
      </section>

      <section>
        <h2>Up-front interpolation</h2>
        <p>Springs take pretty much everything, they don't just handle numbers.</p>
        <ul>
          <li>colors (names, rgb, rgba, hsl, hsla, gradients)</li>
          <li>absolute lengths (cm, mm, in, px, pt, pc)</li>
          <li>relative lengths (em, ex, ch, rem, vw, vh, vmin, vmax, %)</li>
          <li>angles (deg, rad, grad, turn)</li>
          <li>flex and grid units (fr, etc)</li>
          <li>all HTML attributes</li>
          <li>
            SVG paths (as long as the number of points matches, otherwise use{' '}
            <a href="https://codesandbox.io/embed/lwpkp46om" target="_blank">
              custom interpolation
            </a>
            )
          </li>
          <li>arrays</li>
          <li>string patterns (transform, border, boxShadow, etc)</li>
          <li>non-animatable string values (visibility, pointerEvents, etc)</li>
          <li>scrollTop/scrollLeft</li>
        </ul>

        <FencedCode language="jsx">
          {`const props = useSpring({
  vector: [0, 10, 30],
  display: 'block',
  padding: 20, 
  background:
    'linear-gradient(to right, #009fff, #ec2f4b)', 
  transform: 
    'translate3d(0px,0,0) scale(1) rotateX(0deg)', 
  boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.4)', 
  borderBottom: '10px solid #2D3747', 
  shape: 'M20,20 L20,380 L380,380 L380,20 L20,20 Z', 
  textShadow: '0px 5px 15px rgba(255,255,255,0.5)',
})`}
        </FencedCode>
      </section>

      <section>
        <h2>View interpolation</h2>
        <p>
          In cases where you need to clamp or extrapolate, each animated value can `interpolate` inside the view, which is a powerful tool to have. The interpolate function either
          takes a function or a an object which forms a range. Interpolations can also form chains which allows you to route one calculation into another or reuse them.{' '}
          <Link to="/docs/shared-api">Look into the shared-api</Link> for a object description.
        </p>

        <p>You may wonder why you wouldn't interpolate always inside the spring. View interpolation can be a little faster, and it takes up less space.</p>

        <ParseMD contents={ViewInterpolationCodeMD} />
      </section>

      <section>
        <h2>Emulating css-keyframes</h2>
        <ParseMD contents={EmulatingCSSKeyframesCodeMD} />
      </section>
    </NavPage>
  )
}
