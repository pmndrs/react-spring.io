import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <Container>
      <Cap />
    </Container>
  )
}

const Cap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background: #000;
  border-radius: 0 0 20px 20px;
`
const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 300px;
  background: #202020;
  margin-top: 100px;
`
