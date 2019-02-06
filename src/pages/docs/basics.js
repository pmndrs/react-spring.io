import React from 'react'
import {Link} from '@reach/router'
import NavPage from '../../common/nav-page'
import ParseMD from '../../utils/parse-md'
import raw from 'raw.macro'
import {FencedCode} from '../../common/components'
const StyledComponentsCodeMD = raw('./basics/styled-components-code.md')

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
        <h2>First, you fetch your imports</h2>
        <FencedCode>{`import {(useSpring, animated)} from 'react-spring'`}</FencedCode>
        <p>
          You need the primitive itself, and a special factory called <code>animated</code>. This library animates outside React (for performance reasons). Your view has to know
          how to handle the animated props you pass to it. This is what <code>animated</code> is there for, it extends native elements to receive animated values.
        </p>
      </section>

      <section>
        <h2>Next, define your spring</h2>
        <FencedCode>{`const props = useSpring({ opacity: 1, from: { opacity: 0 } })`}</FencedCode>
        <p>
          A spring simply animates values from one state to another. Updates are accumulative, sorings remember all the values you ever pass. You can use arbitrary names. There are
          a couple of reserved keywords like "from" (for base values). <Link to="/docs/shared-api">You can learn about the api here</Link>. The received props are not static
          values! These props are self-updating, you cannot use them in regular divs and such.
        </p>
      </section>

      <section>
        <h2>Finally, tie the animated values to your view</h2>
        <FencedCode>{`return <animated.div style={props}>I will fade in</animated.div>`}</FencedCode>
        <p>
          In the view part of your component you simply wire these props in. Make sure to extend the native element you want to animate using <code>animated</code>. If your target
          is the web then <code>animated</code> contains all valid html elements (divs, spans, svgs, etc). If you want to animate React components, styled-components, or elements
          on other platforms, then do this:
        </p>
        <ParseMD contents={StyledComponentsCodeMD} />
      </section>

      <section>
        <h2>Do not think of the values you pass as "styles" per se</h2>
      </section>
    </NavPage>
  )
}
