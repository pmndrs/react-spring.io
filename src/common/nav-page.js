import React, {useEffect} from 'react'
import styled from 'styled-components'

export default function NavPage({currentPath, children}) {
  useEffect(() => {
    if (window.Prism) window.Prism.highlightAll()
  }, [])
  return (
    <Wrapper>
      <div className="markdown-body">{children}</div>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  padding-top: 20px;
`
