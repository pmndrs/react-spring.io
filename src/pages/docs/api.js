import React from 'react'
import NavPage from '../../common/nav-page'
import ParseMD from '../../utils/parse-md'
import raw from 'raw.macro'
import {FencedCode} from '../../common/components'

const SpringConfigTableMD = raw('./api/spring-config-table.md')
const PresetsCodeMD = raw('./api/presets-code.md')
const PresetsTableMD = raw('./api/presets-table.md')
const PropertiesTableMD = raw('./api/properties-table.md')
const InterpolationsTableMD = raw('./api/interpolations-table.md')

export default function APIDocsPage({path}) {
  return (
    <NavPage currentPath={path}>
      <section>
        <h1>Shared API</h1>
        <h2>Configs</h2>
        <p>Spring are configurable and can be tuned.</p>
        <ParseMD contents={SpringConfigTableMD} />
        <p>
          <mark>TODO: demo here</mark>
        </p>
      </section>

      <section>
        <h2>Presets</h2>
        <p>There are also a couple of generic presets that will cover some common ground.</p>
        <ParseMD contents={PresetsCodeMD} />
        <br />
        <ParseMD contents={PresetsTableMD} />
      </section>

      <section>
        <h2>Properties</h2>
        <FencedCode language="jsx">{`useSpring({ from: { ... }, to: { ... }, delay: 100, onRest: () => ... })`}</FencedCode>
        <p>All primitives inherit the following properties (though some of them may bring their own additionally):</p>
        <ParseMD contents={PropertiesTableMD} />
      </section>

      <section>
        <h2>Interpolations</h2>
        <p>
          <code>value.interpolate</code> either takes an object of the following shape:
        </p>
        <ParseMD contents={InterpolationsTableMD} />
        <p>
          A range shortcut: <code>value.interpolate([...inputRange], [...outputRange])</code>
        </p>
      </section>
    </NavPage>
  )
}
