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

  #demos {
    width: 100%;
    margin-top: 40px;
    h2 {
      margin-bottom: 30px;
      text-align: center;
    }
  }
  section {
    width: 100%;
    margin-bottom: 1em;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;

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
      margin-block-end: 0em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;

      text-align: center;
    }

    p {
      width: auto;

      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }

    p strong {
      font-weight: 600;
    }

    p > code,
    li > code {
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

    mark {
      background: #fffcd3;
      margin: 0 3px;
      border-radius: 3px;
      padding: 2px 5px;
      border: 1px solid #f5f1bc;
    }

    pre {
      display: block;
      width: auto;
      max-width: 100%;
      padding: 15px 20px;

      background: #363645;
      color: #fff;
      font-family: monospace;
      font-size: 1em;
      border: 1px solid rgba(0, 0, 0, 0.02);
      border-radius: 3px;
      overflow: auto;
    }

    ul {
      padding: 0px;
    }

    li {
      list-style-type: circle;
      margin: 5px 0;
      line-height: 1.8em;
    }

    // TODO extract CodeTable component
    .code-table {
      display: flex;
      flex-flow: row nowrap;
      width: 100%;
      min-height: 200px;
      margin-bottom: 1em;
      pre {
        width: 65%;
        margin: 0 5px;
        display: flex;
        align-items: center;
      }
    }
    .code-table > div:first-of-type {
      flex: 1.5;
    }
    .code-table > div:last-of-type {
      flex: 1;
      overflow: hidden;
      background: #f0f0f0;
      color: rgba(45, 55, 71, 1);
      border-radius: 3px;
    }
    .code-table > div:last-child {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f4f6f9;
      font-size: 4em;
      font-weight: 600;
      color: white;
    }

    table th {
      font-weight: 600;
    }

    table td,
    table th {
      border: 1px solid #dfe2e5;
      padding: 6px 13px;
    }

    table tr {
      background-color: #fff;
      border-top: 1px solid #c6cbd1;
    }

    table tr:nth-child(2n) {
      background-color: #f6f8fa;
    }
  }
`
