import React from 'react'
import NavPage from '../../common/nav-page'
import ParseMD from '../../utils/parse-md'
import {Link} from '@reach/router'
import raw from 'raw.macro'
import {FencedCode} from '../../common/components'

import DemoGrid from '../../examples/components/DemoGrid'
import Demo from '../../examples/components/Demo'
import examples from '../../examples/components/examples-hooks'

const CreateScriptCodeMD = raw('./use-spring/create-script-code.md')
const CreateChainCodeMD = raw('./use-spring/create-chain-code.md')

export default function UseSpringPage({path}) {
  return (
    <NavPage currentPath={path}>
      <section>
        <h1>useSpring</h1>
        <FencedCode>{`import { useSpring, animated } from 'react-spring'`}</FencedCode>

        <p>Turns values into animated-values.</p>

        <h3>Either: overwrite values to change the animation</h3>

        <p>If you re-render the component with changed props, the animation will update.</p>

        <FencedCode language="jsx">{`const props = useSpring({ opacity: toggle ? 1 : 0 })`}</FencedCode>

        <h3>Or: pass a function that returns values, and update using "set"</h3>

        <p>
          You will get a <code>set</code> function back. It will not cause the component to render like an overwrite would (still the animation executes of course). Handling
          updates like this is useful for fast-occurring updates, but you should generally prefer it.
        </p>
        <FencedCode language="jsx">{`const [props, set] = useSpring(() => ({ opacity: 1 }))
// ...
set({ opacity: toggle ? 1 : 0 })`}</FencedCode>

        <h3>Finally: distribute animated props among the view</h3>

        <p>The return value is an object containing animated props.</p>

        <FencedCode language="jsx">{`return <animated.div style={props}>i will fade</animated.div>`}</FencedCode>
      </section>

      <section>
        <h2>Properties</h2>

        <p>
          All properties of the <Link to="/docs/shared-api">shared-api</Link> apply.
        </p>
      </section>

      <section>
        <h2>Additional notes</h2>

        <h3>To-prop shortcut</h3>

        <p>
          Any property that useSpring does not recognize will be combined into "to", for instance <code>{`opacity: 1`}</code> will become <code>{`to: { opacity: 1 }`}</code>.
        </p>

        <p>There are also a couple of generic presets that will cover some common ground.</p>

        <FencedCode language="jsx">
          {`// This ...
const props = useSpring({ opacity: 1, color: 'red' })
// is a shortcut for this ...
const props = useSpring({ to: { opacity: 1, color: 'red' } })`}
        </FencedCode>

        <h3>Async chains/scripts</h3>

        <p>
          The to-property also allows you to either script your animation, or chain multiple animations together. Since these animations will execute asynchroneously make sure to
          provide a "from" property for base values, otherwise props will be empty.
        </p>

        <p>
          <strong>This is how you create a script</strong>
        </p>

        <ParseMD contents={CreateScriptCodeMD} />

        <p>
          <strong>And this is how you create a chain</strong>
        </p>

        <ParseMD contents={CreateChainCodeMD} />
      </section>

      <section>
        <h2>Demos</h2>

        <DemoGrid padding={0}>
          {examples
            .filter(data => data.tags.includes('useSpring'))
            .map(data => (
              <Demo key={data.name} {...data} import={import('../../examples/demos/' + data.name)} />
            ))}
        </DemoGrid>
      </section>
    </NavPage>
  )
}
