import React from 'react'
import {Link} from '@reach/router'
import NavPage from '../../common/nav-page'
import ParseMD from '../../utils/parse-md'
import raw from 'raw.macro'
import {FencedCode} from '../../common/components'

import DemoGrid from '../../examples/components/DemoGrid'
import Demo from '../../examples/components/Demo'
import examples from '../../examples/components/examples-hooks'

const BasicExampleCodeMD = raw('./use-transition/basic-example-code.md')
const PropertiesTableMD = raw('./use-transition/properties-table.md')
const MultiStageTransitionCOdeMD = raw('./use-transition/multi-stage-transition-code.md')

export default function UseTransition({path}) {
  return (
    <NavPage currentPath={path}>
      <section>
        <h1>useTransition</h1>

        <FencedCode>{`import { useTransition, animated } from 'react-spring'`}</FencedCode>

        <p>
          An animated TransitionGroup. Feed it your items, keys (which can be <code>null</code> if items are atomic), and lifecycles. Whenever items are added or removed, it will
          animate these changes.
        </p>

        <ParseMD contents={BasicExampleCodeMD} />
      </section>

      <section>
        <h2>Properties</h2>
        <p>
          All properties of the <Link to="/docs/shared-api">shared-api</Link> apply.
        </p>
        <ParseMD contents={PropertiesTableMD} />
      </section>

      <section>
        <h2>Additional notes</h2>
        <p>
          The initial/from/enter/update/leave lifecycles can be objects, arrays or functions. When you provide a function you have access to individual items. The function is
          allowed to return plain objects, or either an array or a function for multi-stage transitions. When you provide a plain array you also can form a basic multi-stage
          transition (without access to the item).
        </p>

        <ParseMD contents={MultiStageTransitionCOdeMD} />
      </section>

      <section>
        <h2>Demos</h2>
        <DemoGrid padding={0}>
          {examples
            .filter(data => data.tags.includes('useTransition'))
            .map(data => (
              <Demo key={data.name} {...data} import={import('../../examples/demos/' + data.name)} />
            ))}
        </DemoGrid>
      </section>
    </NavPage>
  )
}
