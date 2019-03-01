import React from 'react'
import {Router, Location} from '@reach/router'
import styled from 'styled-components'
import Splash from './common/splash'
import Introduction from './pages/introduction'
import Examples from './pages/examples'
import Basics from './pages/basics'
import Api from './pages/api'
import UseSpring from './pages/use-spring'
import UseSprings from './pages/use-springs'
import UseChain from './pages/use-chain'
import UseTrail from './pages/use-trail'
import UseTransition from './pages/use-transition'
import Spring from './pages/Spring'
import Parallax from './pages/Parallax'
import Trail from './pages/Trail'
import Gotchas from './pages/Gotchas'
import Performance from './pages/Performance'
import Keyframes from './pages/Keyframes'
import Transition from './pages/Transition'
import Log from './pages/log'
import Footer from './common/footer'
import Nav from './common/nav'

export default function App() {
  return (
    <>
      <Splash />
      <PageContainer>
        <Main>
          <NavColumn>
            <Location>{props => <Nav currentPath={props.location.pathname} />}</Location>
          </NavColumn>
          <ContentColumn>
            <Router id="router">
              <Introduction path="/" default />
              <Examples path="/docs/hooks/examples" />
              <Basics path="/docs/hooks/basics" />
              <Api path="/docs/hooks/api" />
              <UseSpring path="/docs/hooks/use-spring" />
              <UseSprings path="/docs/hooks/use-springs" />
              <UseChain path="/docs/hooks/use-chain" />
              <UseTrail path="/docs/hooks/use-trail" />
              <UseTransition path="/docs/hooks/use-transition" />
              <Spring path="/docs/props/spring" />
              <Parallax path="/docs/props/parallax" />
              <Trail path="/docs/props/trail" />
              <Gotchas path="/docs/props/gotchas" />
              <Performance path="/docs/props/performance" />
              <Keyframes path="/docs/props/keyframes" />
              <Transition path="/docs/props/transition" />
              <Log path="/log" />
            </Router>
          </ContentColumn>
        </Main>
      </PageContainer>
      <Footer />
    </>
  )
}

export const PageContainer = styled.article``

export const Main = styled.main`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  
  @media(max-width: 899px) {
    flex-direction: column;
  }
`

const NavColumn = styled.aside`
  padding: 20px;
  width: 300px;
`

const ContentColumn = styled.aside`
  width: 60vw;
  padding: 0 40px;
  
  @media(max-width: 899px) {
    width: 100vw;
    padding: 0 12px;
  }
`
