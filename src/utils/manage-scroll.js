//https://gist.github.com/ryanflorence/39a37a85254159fd7a5ca54027e175dc

import React from 'react'
import {Location} from '@reach/router'

let scrollPositions = {}

class ManageScrollImpl extends React.Component {
  componentDidMount() {
    try {
      let storage = JSON.parse(sessionStorage.getItem('scrollPositions'))
      if (storage) {
        scrollPositions = JSON.parse(storage) || {}
        let {key} = this.props.location
        if (scrollPositions[key]) {
          window.scrollTo(0, scrollPositions[key])
        }
      }
    } catch (e) {}

    window.addEventListener('scroll', this.listener)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listener)
  }

  componentDidUpdate() {
    const {key} = this.props.location
    if (!scrollPositions[key]) {
      // never seen this location before
      setTimeout(() => {
        // scroll just past the splash
        document.getElementById('router').scrollIntoView()
      }, 1)
    } else {
      // seen it
      window.scrollTo(0, scrollPositions[key])
    }
  }

  listener = () => {
    scrollPositions[this.props.location.key] = window.scrollY
    try {
      sessionStorage.setItem('scrollPositions', JSON.stringify(scrollPositions))
    } catch (e) {}
  }

  render() {
    return null
  }
}

const Loc = () => <Location>{({location}) => <ManageScrollImpl location={location} />}</Location>

export default Loc
