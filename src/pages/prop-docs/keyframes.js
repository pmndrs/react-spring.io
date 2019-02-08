import React from 'react'
import NavPage from '../../common/nav-page'
import {FencedCode} from '../../common/components'
import ParseMD from '../../utils/parse-md'
import raw from 'raw.macro'

const CreateCodeMD = raw('./keyframes/create-code.md')
const UseCodeMD = raw('./keyframes/use-code.md')
const ShortcutFnCodeMD = raw('./keyframes/shortcut-fn-code.md')
const ShortcutArrCodeMD = raw('./keyframes/shortcut-arr-code.md')
const KeyframesPropsTableMD = raw('./keyframes/keyframes-props-table.md')

export default function KeyframesPage({path}) {
  return (
    <NavPage currentPath={path}>
      <section>
        <h1>Keyframes</h1>

        <FencedCode>{`import { Keyframes } from 'react-spring/renderprops'`}</FencedCode>

        <p>
          <code>Keyframes</code> allow you to chain, compose and orchestrate animations.
        </p>
        <p>
          <mark>Keyframes is a factory that extends either springs or trails.</mark> You start by defining one or many named-slots in which you place the properties you want to
          animate. By default all unknown props are interpolate as "to". You can use <em>all</em> spring props otherwise: from, config, reset, etc. It creates a component that
          bears a special "state" prop, which receives the name of one of the slots. It will execute it and run its animations.
        </p>
        <p>A slot can take:</p>
        <ul>
          <li>An object consisting of properties</li>
          <li>An array of objects, which then forms a chained animation</li>
          <li>A function that allows you to script or form loops</li>
        </ul>

        <p>
          <mark>TLDR</mark>, first, you define a Keyframe-object with named-slots.
        </p>
        <FencedCode>{`(item, index) => props => ReactNode`}</FencedCode>

        <p>
          <mark>TLDR</mark>, items in, keys if necessary, present the item that comes out and apply the animated props you receive.
        </p>
        <ParseMD contents={CreateCodeMD} />

        <p>Now use it anywhere you want, set the named-slot of your choice to animate towards.</p>
        <ParseMD contents={UseCodeMD} />

        <p>
          There is a shortcut for low-level scripting by giving it a function instead of an object consisting of slots (good for loops and such). In this case the state-prop on the
          resulting primitive can be omitted.
        </p>
        <ParseMD contents={ShortcutFnCodeMD} />

        <p>And another shortcut for arrays:</p>
        <ParseMD contents={ShortcutArrCodeMD} />
      </section>

      <section>
        <h2>Props</h2>

        <p>
          <mark>
            The resulting component accepts <em>all</em> spring properties
          </mark>
          : native, from, immediate, onRest, and so on.
        </p>
        <br />
        <ParseMD contents={KeyframesPropsTableMD} />
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
