import React, {useEffect} from 'react'
import styled from 'styled-components'
import Nav from '../common/nav'

export default function NavPage({currentPath, children}) {
  useEffect(() => {
    if (window.Prism) {
      window.Prism.highlightAll()
    }
  }, [])

  return (
    <PageLayout>
      <NavColumn>
        <Nav currentPath={currentPath} />
      </NavColumn>
      <ContentColumn>{children}</ContentColumn>
    </PageLayout>
  )
}

const PageLayout = ({children, ...props}) => {
  return (
    <PageContainer {...props}>
      <Main>{children}</Main>
    </PageContainer>
  )
}

export const PageContainer = styled.article``

export const Main = styled.main`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`

const NavColumn = styled.aside`
  padding: 20px;
  width: 300px;
`

const ContentColumn = styled.aside`
  width: 60vw;
  padding: 0 40px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  section {
    width: 100%;
    margin-bottom: 1em;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  ul,
  p,
  h1,
  h2,
  h3 {
    max-width: 600px;
  }

  h1 {
    font-size: 50px;
    font-weight: 600;
    text-align: center;

    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    letter-spacing: -0.03em;
    line-height: 1em;
    text-indent: -2px;
  }

  h2 {
    font-size: 22px;
    line-height: 34px;
    font-weight: 600;

    width: 100%;
    margin: 0 auto;

    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    text-align: center;
  }

  h3 {
    font-size: 18px;
    line-height: 34px;
    font-weight: 600;

    width: 100%;
    margin: 0 auto;

    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    text-align: center;
  }

  p {
    width: 100%;

    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  p strong {
    font-weight: 600;
  }

  p code,
  li code {
    background: #f4f6f9;
    margin: 0 3px;
    border-radius: 3px;
    font-family: monospace;
    padding: 2px 5px;
    font-size: inherit;
    border: 1px solid rgba(0, 0, 0, 0.02);
  }

  p em,
  p strong,
  p code {
    font-size: inherit;
    line-height: inherit;
  }

  p.large {
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0px;
  }

  a {
    color: #ff4f4f;
    text-decoration: none;
  }

  pre {
    display: block;
    width: 100%;
    background: #363645;
    color: #fff;
    margin: 0 3px;
    border-radius: 3px;
    font-family: monospace;
    padding: 15px 20px;
    font-size: 1em;
    border: 1px solid rgba(0, 0, 0, 0.02);
    overflow: scroll;

    max-width: 640px; // 600px max text column + 20px padding
  }

  ul {
    padding: 0px;
    // margin: 1em 0px;
  }

  li {
    list-style-type: circle;
    margin: 5px 0;
    line-height: 1.8em;
  }
`
