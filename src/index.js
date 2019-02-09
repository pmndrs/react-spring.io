import React from 'react'
import ReactDOM from 'react-dom'

import IntersectionObserver from 'intersection-observer' // eslint-disable-line no-unused-vars
import App from './app'
import './css/reset.css'
import './css/styles.css'
import * as serviceWorker from './other/service-worker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
