import React from 'react'
import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-gap: ${props => props.gap || '20px'};
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  width: 100%;
`

export const Image = styled('a')`
  background-image: url(${props => props.url});
  background-size: ${props => props.size || 'contain'};
  background-repeat: no-repeat;
  background-position: center center;
`

export const FencedCode = function({language = 'javascript', children}) {
  return (
    <pre>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  )
}
