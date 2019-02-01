import React from 'react'
import styled from 'styled-components'
import DownArrowSVG from './down-arrow-svg'
import ScrollPercentage from 'react-scroll-percentage'
import cx from 'classnames'

export default function ScrollIndicator() {
  return (
    <ScrollPercentage>
      {({percentage, inView}) => {
        console.log(percentage, inView)
        const classes = cx({
          'can-fade': true,
          'is-hidden': percentage > 0.2
        })
        return (
          <Container>
            <ArrowContainer className={classes}>
              <ArrowAnimationWrapper>
                <DownArrowSVG />
              </ArrowAnimationWrapper>
            </ArrowContainer>
            <LabelContainer className={classes}>
              <Label>
                building
                <br />
                blocks
              </Label>
            </LabelContainer>
          </Container>
        )
      }}
    </ScrollPercentage>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  background: #000;

  & > .can-fade {
    transition: opacity 250ms ease-in-out;
  }
  & > .is-hidden {
    opacity: 0;
  }
`

const ArrowContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`

const ArrowAnimationWrapper = styled.div`
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-15px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  animation-name: bounce;
  animation-duration: 1.8s;
  animation-iteration-count: 3;
`

const LabelContainer = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  padding-right: 60px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
`
const Label = styled.h3`
  font-size: 20px;
  text-align: right;
  font-weight: 500;
  color: white;
`
