import React from 'react'
import { isElement } from 'react-is'
import ScrollableSection, { configureAnchors } from 'react-update-url-on-scroll'
import styled from '@emotion/styled'

import CodeBlock from './codeBlock'
import AnchorTag from './anchor'

configureAnchors({
  trailingSlash: true,
  scrollThrottle: 16,
  scrollDelay: 1200,
})

const StyledPre = styled('pre')`
  margin: 20px 0;
  padding: 6px;
  background: ${props => props.theme.colors.preFormattedText};
  border: 2px solid rgba(0, 0, 0, 0) !important;
`

function computeHash(children) {
  if (!Array.isArray(children)) {
    children = [children]
  }
  children = children.reduce((text, child) => {
    if (isElement(child)) {
      child = computeHash(child.props.children)
    }
    return text + (child || '')
  }, '')
  return children.replace(/\s+/g, '-').replace(/[():]/g, '')
}

const Heading = ({ level, ...props }) => {
  const Heading = 'h' + level
  const hash = computeHash(props.children)
  return (
    <>
      {level == 2 && <hr />}
      <ScrollableSection hash={hash}>
        <Heading {...props} className={'heading' + level} />
      </ScrollableSection>
    </>
  )
}

export default {
  h1: props => <Heading {...props} level={1} />,
  h2: props => <Heading {...props} level={2} />,
  h3: props => <Heading {...props} level={3} />,
  h4: props => <Heading {...props} level={4} />,
  h5: props => <Heading {...props} level={5} />,
  h6: props => <Heading {...props} level={6} />,
  p: props => <p className="paragraph" {...props} />,
  pre: props => <StyledPre {...props} />,
  code: CodeBlock,
  a: AnchorTag,
  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
}
