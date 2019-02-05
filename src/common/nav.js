import React from 'react'
import styled from 'styled-components'

export default function Nav() {
  return (
    <NavContainer>
      <MainMenuUl>
        <li>
          <a href="#" className="active">
            Introduction
          </a>
        </li>
        <li>
          <a href="#">Examples</a>
        </li>
        <li>
          <a href="#">Basics</a>
        </li>
        <li>
          <a href="#">Shared API</a>
        </li>
        <li>
          <a href="#">Primitives</a>
          <SubMenuUl>
            <li>
              <a href="#">useSpring</a>
            </li>
            <li>
              <a href="#">useSprings</a>
            </li>
            <li>
              <a href="#">useTrail</a>
            </li>
            <li>
              <a href="#">useTransition</a>
            </li>
            <li>
              <a href="#">useChain</a>
            </li>
          </SubMenuUl>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </MainMenuUl>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  position: sticky;
  top: 20px;
  left: 20px;
  width: 260px;

  background: #f0f3ff;
  border-radius: 20px;
`

const MainMenuUl = styled.ul`
  padding: 20px;
  li a {
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    color: #000;
  }

  li a.active {
    color: #0067df;
  }

  li {
    margin-top: 10px;
  }
`
const SubMenuUl = styled.ul`
  li a {
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    color: #000;
  }

  li a.active {
    color: #0067df;
  }

  li {
    margin-top: 10px;
    margin-left: 20px;
  }
`
