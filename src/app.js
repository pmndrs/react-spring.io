import React from 'react'
import {Router} from '@reach/router'

import Splash from './splash'
import Introduction from './pages/introduction'
import Examples from './pages/examples'

import Footer from './footer'

export default function App() {
  return (
    <>
      <Splash />
      <Router id="router">
        <Introduction path="/" default />
        <Examples path="/examples" />
      </Router>
      <Footer />
    </>
  )
}
