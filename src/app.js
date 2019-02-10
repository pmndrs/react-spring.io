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
import Spring from './pages/prop-docs/spring'
import Transition from './pages/prop-docs/transition'
import Trail from './pages/prop-docs/trail'
import Keyframes from './pages/prop-docs/keyframes'
import Parallax from './pages/prop-docs/parallax'
import Gotchas from './pages/prop-docs/gotchas'
import OtherPlatforms from './pages/prop-docs/other-platforms'
import Performance from './pages/prop-docs/performance'
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
              <Api path="/api" />
              <UseSpring path="/docs/hooks/use-spring" />
              <UseSprings path="/docs/hooks/use-springs" />
              <UseChain path="/docs/hooks/use-chain" />
              <UseTrail path="/docs/hooks/use-trail" />
              <UseTransition path="/docs/hooks/use-transition" />
              <Spring path="/docs/props/spring" />
              <Transition path="/docs/props/transition" />
              <Trail path="/docs/props/trail" />
              <Keyframes path="/docs/props/keyframes" />
              <Parallax path="/docs/props/parallax" />
              <Performance path="/docs/props/performance" />
              <Gotchas path="/docs/props/gotchas" />
              <OtherPlatforms path="/docs/props/platforms" />
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
`

const NavColumn = styled.aside`
  padding: 20px;
  width: 300px;
`

const ContentColumn = styled.aside`
  width: 60vw;
  padding: 0 40px;
`
