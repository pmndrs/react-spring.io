import React from 'react'
import NavPage from '../common/nav-page'
import ParseMD from '../utils/parse-md'
import raw from 'raw.macro'
import {FencedCode} from '../common/components'
import Demo from '../examples/components/Demo'

const content1 = raw('./md/api-1.md')
const content2 = raw('./md/api-2.md')

export default function APIDocsPage({path}) {
  return (
    <NavPage currentPath={path}>
      <ParseMD contents={content1} />
      <Demo import={import('../examples/demos/hooks/configs')} />
      <ParseMD contents={content2} />
    </NavPage>
  )
}
