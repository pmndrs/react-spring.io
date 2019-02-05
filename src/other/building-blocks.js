import React from 'react'
import styled from 'styled-components'

export default function BlocksGrid() {
  return (
    <Grid>
      <UseChainCell>useChain</UseChainCell>
      <UseTransitionCell>useTransition</UseTransitionCell>
      <UseTrailCell>useTrail</UseTrailCell>
      <UseSpringCell>useSpring</UseSpringCell>
      <UseSpringsCell>useSprings</UseSpringsCell>
    </Grid>
  )
}

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(16, 5.625vw);
  grid-auto-rows: 5.625vw;
`

const Cell = styled.div`
  border-radius: 2vw;
  margin: 1vw;
  overflow: hidden;
  padding: 1.6vw 2vw;
  font-weight: bold;
  font-size: calc(10px + 0.8vw);
  font-weight: 600;
  cursor: help;
`

const UseChainCell = styled(Cell)`
  grid-column: 7 / 10;
  grid-row: 2 / 4;
  background-color: #ff6d6d;
`

const UseTransitionCell = styled(Cell)`
  grid-column: 6 / 10;
  grid-row: 4 / 9;
  background-color: #089b53;
`

const UseTrailCell = styled(Cell)`
  grid-column: 10 / 13;
  grid-row: 1 / 3;
  background-color: #ffc016;
`

const UseSpringCell = styled(Cell)`
  grid-column: 10 / 15;
  grid-row: 3 / 7;
  background-color: #43a8e9;
`

const UseSpringsCell = styled(Cell)`
  grid-column: 10 / 14;
  grid-row: 7 / 10;
  background-color: #944ed2;
`
