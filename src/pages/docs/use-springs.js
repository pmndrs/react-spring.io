import React from 'react'
import NavPage from '../../common/nav-page'
import {Link} from '@reach/router'
import {FencedCode} from '../../common/components'

export default function UseSpringsPage({path}) {
  return (
    <NavPage currentPath={path}>
      <section>
        <h1>useSprings</h1>
        <FencedCode>{`import { useSprings, animated } from 'react-spring'`}</FencedCode>

        <p>Creates multiple springs, each with its own config. Use it for static lists, etc.</p>

        <h3>Either: overwrite values to change the animation</h3>

        <p>If you re-render the component with changed props, the animation will update.</p>

        <FencedCode language="jsx">{`const springs = useSprings(number, items.map(item => ({ opacity: item.opacity }))`}</FencedCode>

        <h3>Or: pass a function that returns values, and update using "set"</h3>

        <p>
          You will get a <code>set</code> function back. It will not cause the component to render like an overwrite would (still the animation executes of course). Handling
          updates like this is useful for fast-occurring updates, but you should generally prefer it.
        </p>
        <FencedCode language="jsx">{`const [springs, set] = useSprings(number, index => ({ opacity: 1 }))
// ...
set(index => ({ opacity: 0 }))`}</FencedCode>

        <h3>Finally: distribute animated props among the view</h3>

        <p>The return value is an object containing animated props.</p>

        <FencedCode language="jsx">{`return springs.map(props => <animated.div style={props} />)`}</FencedCode>
      </section>

      <section>
        <h2>Properties</h2>

        <p>
          All properties of the <Link to="/docs/shared-api">shared-api</Link> apply.
        </p>
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
