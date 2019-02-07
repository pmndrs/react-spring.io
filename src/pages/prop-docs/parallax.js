import React from 'react'
import NavPage from '../../common/nav-page'
import {FencedCode} from '../../common/components'
import ParseMD from '../../utils/parse-md'
import raw from 'raw.macro'

const BasicCodeMD = raw('./parallax/basic-code.md')

export default function ParallaxPage({path}) {
  return (
    <NavPage currentPath={path}>
      <section>
        <h1>Parallax</h1>

        <FencedCode>{`import { Parallax, ParallaxLayer } from 'react-spring/addons'`}</FencedCode>

        <h2>Basics</h2>
        <p>
          <code>Parallax</code> creates a scroll container. Throw in any amount of layers and it will take care of moving them in accordance to their offsets and speeds.
        </p>

        <ParseMD contents={BasicCodeMD} />
      </section>
      <section>
        <iframe
          src="https://codesandbox.io/embed/nwq4j1j6lm?fontsize=13&editorsize=60&hidenavigation=1&codemirror=1&preview=preview"
          style={{width: '100%', height: 500, border: 0, borderRadius: 4, overflow: 'hidden'}}
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        />
      </section>
      <section>
        <iframe
          src="https://codesandbox.io/embed/3yj75r4j5m?fontsize=13&editorsize=60&hidenavigation=1&codemirror=1&preview=preview"
          style={{width: '100%', height: 500, border: 0, borderRadius: 4, overflow: 'hidden'}}
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        />
      </section>

      <section>
        <h2>Props</h2>

        <p>
          <mark>TODO: recreate props table</mark>
        </p>
      </section>
    </NavPage>
  )
}
