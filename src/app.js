import React from 'react'
import {Router} from '@reach/router'

import Splash from './common/splash'
import Introduction from './pages/introduction'
import Examples from './pages/examples'
import Basics from './pages/docs/basics'
import API from './pages/docs/api'

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
      </Router>
      <Footer />
    </>
  )
}
