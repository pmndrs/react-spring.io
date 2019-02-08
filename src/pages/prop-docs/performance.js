import React from 'react'
import NavPage from '../../common/nav-page'
import {FencedCode} from '../../common/components'
import ParseMD from '../../utils/parse-md'
import raw from 'raw.macro'

import WithoutNativeJPG from './performance/without-native.jpg'
import WithNativeJPG from './performance/with-native.jpg'

const InterpolationCodeMD = raw('./performance/interpolation-code.md')
const InterpolateShapeTableMD = raw('./performance/interpolate-shape-table.md')

export default function PerformancePage({path}) {
  return (
    <NavPage currentPath={path}>
      <section>
        <h1>Better Performance</h1>

        <FencedCode>{`import { animated, interpolate } from 'react-spring/renderprops'`}</FencedCode>

        <p>
          One of the strengths of react-spring is that it can <mark>apply animations without relying on React</mark> to render updates frame by frame like most React animation
          libraries do. The difference may not be apparent in simple situations, but try a nested chart or routes and the difference will be quite drastic.
        </p>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr auto', gridGap: 20, fontSize: '0.8em', marginBottom: 40, marginTop: 40}}>
          <img src={WithoutNativeJPG} style={{width: '100%'}} />
          <img src={WithNativeJPG} style={{width: '100%'}} />
          <div>
            Libraries animate by having React recalculate the component-tree on every frame. Here it attempts to animate a component consisting of ~300 sub-components, plowing
            through the frame budget and causing jank.
          </div>
          <div>
            React-spring with the "native" property renders the component <i>only once</i>, from then on the animation will be applied directly to the dom in a
            requestAnimationFrame-loop, similar to how gsap and d3 do it.
          </div>
        </div>

        <p>
          By default we'll render every frame (like in the image on the left) as it gives you more freedom (for instance this is the only way that you can animate React-component
          props). In situations where that becomes expensive use the <code>native</code> flag. The flag is available for all primitives (Spring, Transition & Trail, Keyframes,
          Parallax is native by design). <mark>Try doing this in all situations where you can</mark>, the benefits are worth it. Especially if your animated component consists of
          large subtrees, routes, etc.
        </p>

        <p>Just be aware of the following conditions:</p>

        <ul>
          <li>
            <code>native</code> only animates styles, attributes and children (as textContent)
          </li>
          <li>
            The values you receive are <em>opaque objects, not regular values</em>
          </li>
          <li>
            Receiving elements must be <code>animated.[elementName]</code>, for instance <code>div</code> becomes <code>animated.div</code>
          </li>
          <li>
            If you use styled-components or custom components do: <code>animated(component)</code>
          </li>
          <li>
            If you need to interpolate styles use <code>interpolate</code>
          </li>
        </ul>

        <p>
          You can natively animate <mark>styles</mark>
        </p>
        <FencedCode language="jsx">{`<Spring
  native
  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props =>
    <animated.div style={props}>hello</animated.div>}
</Spring>`}</FencedCode>

        <p>
          <mark>attributes</mark>,
        </p>
        <FencedCode language="jsx">{`<Spring
  native
  from={{ x: 100 }}
  to={{ x: 0 }}>
  {props => (
    <animated.svg strokeDashoffset={props.x}>
      <path d="..." />
    </animated.svg>
  )}
</Spring>`}</FencedCode>

        <p>
          <mark>innerText</mark>,
        </p>
        <FencedCode language="jsx">{`<Spring
  native
  from={{ number: 0 }}
  to={{ number: 1 }}>
  {props =>
    <animated.div>{props.number}</animated.div>}
</Spring>`}</FencedCode>

        <p>
          and <mark>scrollTop/Left</mark>.
        </p>
        <FencedCode language="jsx">{`<Spring
  native
  from={{ scroll: 0 }}
  to={{ scroll: 250 }}>
  {props =>
    <animated.div scrollTop={props.scroll} />}
</Spring>`}</FencedCode>
      </section>

      <section>
        <h2>Interpolation</h2>

        <p>
          In cases where you need to clamp or extrapolate, each animated value can <code>interpolate</code>, which is a powerful tool to have. The interpolate function either takes
          a function or a an object which forms a range. Interpolations can also form chains which allows you to route one calculation into another or reuse them.
        </p>

        <ParseMD contents={InterpolationCodeMD} />
      </section>

      <section>
        <h2>Emulating css-keyframes</h2>

        <p>Interplations are also a good way in order to emulate css-keyframes since you can form a range that interpolates a number of stops, mapping it to a specific output.</p>

        <br />

        <iframe
          src="https://codesandbox.io/embed/8nnwo7k08j?fontsize=13&editorsize=60&hidenavigation=1&codemirror=1&module=%2Fsrc%2FDemo.js"
          style={{width: '100%', height: 500, border: 0, borderRadius: 4, overflow: 'hidden'}}
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        />
      </section>

      <section>
        <h2>animatedValue.interpolate()</h2>
        <p>
          <code>interpolate</code> either takes an object of the following shape:
        </p>

        <ParseMD contents={InterpolateShapeTableMD} />

        <p>
          A range shortcut: <code>val.interpolate([...inputRange], [...outputRange])</code>
        </p>
        <p>
          Or a function: <code>val.interpolate(v => ...)</code>{' '}
        </p>
      </section>
    </NavPage>
  )
}
