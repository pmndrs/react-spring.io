import React from 'react'
import { isElement } from 'react-is'
import styled from '@emotion/styled'

import CodeBlock from './codeBlock'
import AnchorTag from './anchor'

const StyledPre = styled('pre')`
  padding: 16px;
  background: ${props => props.theme.colors.preFormattedText};
`

function createCanonicalHash(children) {
  if (!Array.isArray(children)) {
    children = [children]
  }
  children = children.reduce((text, child) => {
    if (isElement(child)) {
      child = createCanonicalHash(child.props.children)
    }
    return text + child
  }, '')
  return children.replace(/\s+/g, '').toLowerCase()
}

export default {
  h1: props => (
    <h1
      className="heading1"
      id={createCanonicalHash(props.children)}
      {...props}
    />
  ),
  h2: props => (
    <h2
      className="heading2"
      id={createCanonicalHash(props.children)}
      {...props}
    />
  ),
  h3: props => (
    <h3
      className="heading3"
      id={createCanonicalHash(props.children)}
      {...props}
    />
  ),
  h4: props => (
    <h4
      className="heading4"
      id={createCanonicalHash(props.children)}
      {...props}
    />
  ),
  h5: props => (
    <h5
      className="heading5"
      id={createCanonicalHash(props.children)}
      {...props}
    />
  ),
  h6: props => (
    <h6
      className="heading6"
      id={createCanonicalHash(props.children)}
      {...props}
    />
  ),
  p: props => <p className="paragraph" {...props} />,
  pre: props => (
    <StyledPre>
      <pre {...props} />
    </StyledPre>
  ),
  code: CodeBlock,
  a: AnchorTag,
  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
}
