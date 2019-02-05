import React from 'react'
import styled from 'styled-components'

import Nav from '../common/nav'

export default function ExamplesPage(props) {
  console.log(props)
  return <Nav currentPath={props.path} />
}
