import React from 'react'

import NavPage from '../common/nav-page'
import {Grid, Image} from '../common/components'

import DemoGrid from '../examples/components/DemoGrid'
import Demo from '../examples/components/Demo'
import examples from '../examples/components/examples-hooks'

export default function ExamplesPage({path}) {
  return (
    <NavPage currentPath={path}>
      <section>
        <h1>Examples</h1>
      </section>

      <div id="demos">
        <DemoGrid padding={0}>
          {examples.map(data => (
            <Demo key={data.name} {...data} import={import('../examples/demos/' + data.name)} />
          ))}
        </DemoGrid>
      </div>
    </NavPage>
  )
}
