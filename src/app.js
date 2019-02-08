import React from 'react'
import {Router} from '@reach/router'

import Splash from './common/splash'
import Introduction from './pages/introduction'
import Examples from './pages/examples'
import Basics from './pages/docs/basics'
import API from './pages/docs/api'
import UseSpring from './pages/docs/use-spring'
import UseSprings from './pages/docs/use-springs'
import UseChain from './pages/docs/use-chain'
import UseTrail from './pages/docs/use-trail'
import UseTransition from './pages/docs/use-transition'
//props api
import Spring from './pages/prop-docs/spring'
import Transition from './pages/prop-docs/transition'
import Trail from './pages/prop-docs/trail'
import Keyframes from './pages/prop-docs/keyframes'
import Parallax from './pages/prop-docs/parallax'
import Gotchas from './pages/prop-docs/gotchas'
import OtherPlatforms from './pages/prop-docs/other-platforms'
import Performance from './pages/prop-docs/performance'

import Footer from './common/footer'

export default function App() {
  return (
    <>
      <Splash />
      <Router id="router">
        <Introduction path="/" default />
        <Examples path="/examples" />
        <Basics path="/docs/basics" />
        <API path="/docs/shared-api" />
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
      </Router>
      <Footer />
    </>
  )
}
