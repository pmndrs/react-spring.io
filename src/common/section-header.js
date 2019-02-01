import React from 'react'
import styled from 'styled-components'

export default function SectionHeader({children, ...props}) {
  return <H2 {...props}>{children}</H2>
}

const H2 = styled.h2`
  font-size: 50px;
  line-height: 54px;
  // font-size: 3.47vw;
  // line-height: 3.75vw;
  font-weight: 600;
  text-align: right;
  width: calc(50% - 1vw);
  margin-top: 100px;
`
