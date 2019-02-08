import React from 'react'
import NavPage from '../../common/nav-page'
import {Link} from '@reach/router'
import {FencedCode} from '../../common/components'

import DemoGrid from '../../examples/components/DemoGrid'
import Demo from '../../examples/components/Demo'
import examples from '../../examples/components/examples-hooks'

export default function UseTrail({path}) {
  return (
    <NavPage currentPath={path}>
      <section>
        <h1>useTrail</h1>

        <FencedCode>{`import { useTrail, animated } from 'react-spring'`}</FencedCode>

        <p>Creates multiple springs with a single config, each spring will follow the previous one. Use it for staggered animations.</p>

        <h3>Either: overwrite values to change the animation</h3>

        <p>If you re-render the component with changed props, the animation will update.</p>

        <FencedCode language="jsx">{`const trail = useTrail(number, { opacity: 1 })`}</FencedCode>

        <h3>Or: pass a function that returns values, and update using "set"</h3>

        <p>
          You will get a <code>set</code> function back. It will not cause the component to render like an overwrite would (still the animation executes of course). Handling
          updates like this is useful for fast-occurring updates, but you should generally prefer it.
        </p>

        <FencedCode language="jsx">{`const [trail, set] = useTrail(number, () => ({ opacity: 1 }))
// ...
set({ opacity: 0 })`}</FencedCode>

        <h3>Finally: distribute animated props among the view</h3>

        <p>The return value is an array containing animated props.</p>

        <FencedCode language="jsx">{`return trail.map(props => <animated.div style={props} />)`}</FencedCode>
      </section>

      <section>
        <h2>Properties</h2>

        <p>
          All properties of the <Link to="/docs/shared-api">shared-api</Link> apply.
        </p>
      </section>

      <div id="demos">
        <h2>Demos</h2>

        <DemoGrid padding={0}>
          {examples
            .filter(data => data.tags.includes('useTrail'))
            .map(data => (
              <Demo key={data.name} {...data} import={import('../../examples/demos/' + data.name)} />
            ))}
        </DemoGrid>
      </div>
    </NavPage>
  )
}
