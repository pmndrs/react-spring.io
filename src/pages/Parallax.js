import React from 'react'
import NavPage from '../common/nav-page'
import ParseMD from '../utils/parse-md'
import raw from 'raw.macro'

const content = raw('./md/Parallax.md')

export default function ParallaxPage({path}) {
  return (
    <NavPage currentPath={path}>
      <ParseMD contents={content} />
    </NavPage>
  )
}
