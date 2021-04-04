import React, { useEffect } from 'react'
import styled from 'styled-components'
import Prism from 'prismjs'

import { Nav } from 'components/Navigation'

interface PageContainerProps {}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <Wrapper id="router">
      <NavSpace>
        <Nav />
      </NavSpace>
      <Content>{children}</Content>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  padding-top: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  @media (max-width: 899px) {
    flex-direction: column;
  }
`

const NavSpace = styled.aside`
  padding: 20px;
  width: 300px;
`

const Content = styled.aside`
  width: 60vw;
  padding: 0 40px;

  @media (max-width: 899px) {
    width: 100vw;
    padding: 0 12px;
  }
`
