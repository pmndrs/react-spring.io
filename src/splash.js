import React from 'react'
import styled from 'styled-components'
import LogoSVG from './splash/logo-svg'
import ScrollIndicator from './splash/scroll-indicator'

export default function Splash() {
  return (
    <>
      <Container>
        <Column>
          <TitleContainer>
            <Title>react-spring</Title>
            <Tagline>
              bring your components to life with performant spring animation
              primitives
            </Tagline>
            <QuickNav>
              <a href="#">source</a>
              <a href="#">documentation</a>
              <a href="#">examples</a>
            </QuickNav>
          </TitleContainer>
        </Column>
        <Column>
          <LogoContainer>
            <LogoSVG width={'100%'} />
          </LogoContainer>
        </Column>
      </Container>
      <ScrollIndicator />
    </>
  )
}

const Container = styled.div`
  position: relative;
  background: #0067df;
  color: white;
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  flex-flow: row nowrap;
  align-items: space-around;
  justify-content: center;
  border-radius: 0 0 20px 20px;
  overflow: hidden;

  background-size: 40px 40px;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
`

const Column = styled.div`
  height: 100%;
  width: 400px;
  &:first-child {
    margin-right: 120px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`

const QuickNav = styled.div`
  margin-top: 20px;
  & a {
    display: inline-block;
    background: #000;
    color: white;
    text-decoration: none;
    font-weight: 18px;
    line-height: 20px;
    padding: 10px 15px;
    border-radius: 18px;
    margin-top: 8px;
    margin-left: 8px;
    &:first-child {
      margin-left: 0;
    }
  }
`

const LogoContainer = styled.div`
  width: 100%;
  user-select: none;
`

const TitleContainer = styled.div`
  text-align: right;
`

const Title = styled.h1`
  font-size: 65px;
  font-weight: 600;
`

const Tagline = styled.p`
  font-size: 20px;
  line-height: 29px;
  font-weight: 400;
  margin-top: 12px;
`
