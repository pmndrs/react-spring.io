import React from 'react'
import NavPage from '../../common/nav-page'
import ParseMD from '../../utils/parse-md'
import raw from 'raw.macro'
import {FencedCode} from '../../common/components'

import DemoGrid from '../../examples/components/DemoGrid'
import Demo from '../../examples/components/Demo'
import examples from '../../examples/components/examples-hooks'

const BasicExampleCodeMD = raw('./use-chain/basic-example-code.md')
const TimeStepsFrameCodeMD = raw('./use-chain/time-steps-frame-code.md')

export default function UseChain({path}) {
  return (
    <NavPage currentPath={path}>
      <section>
        <h1>useChain</h1>

        <FencedCode>{`import { useChain, animated } from 'react-spring'`}</FencedCode>

        <p>
          Set the execution order of previously defined animation-hooks, where one animation starts after the other in sequence. You need to collect refs off the animations you
          want to chain, which blocks the animation from starting on its own. The order can be changed in subsequent render passes.{' '}
        </p>

        <ParseMD contents={BasicExampleCodeMD} />

        <p>
          You can optionally define timeSteps and a timeFrame (which defaults to a second). timeSteps is just an array with offsets between 0-1 that correspend to beginning and the
          end of the timeFrame.
        </p>

        <ParseMD contents={TimeStepsFrameCodeMD} />
      </section>

      <section>
        <h2>Demos</h2>

        <DemoGrid padding={0}>
          {examples
            .filter(data => data.tags.includes('useChain'))
            .map(data => (
              <Demo key={data.name} {...data} import={import('../../examples/demos/' + data.name)} />
            ))}
        </DemoGrid>
      </section>
    </NavPage>
  )
}
