import React from 'react'
import styled from 'styled-components'
import {Link} from '@reach/router'
import cx from 'classnames'

function MenuLink({label, to, currentPath}) {
  const classes = cx({
    'is-active': to === currentPath
  })
  return (
    <Link to={to} className={classes}>
      {label}
    </Link>
  )
}

export default function Nav({currentPath}) {
  console.log(currentPath)
  return (
    <NavContainer>
      <MainMenuUl>
        <li>
          <MenuLink to="/" label="Introduction" currentPath={currentPath} />
        </li>
        <li>
          <MenuLink to="/examples" label="Examples" currentPath={currentPath} />
        </li>
        <li>
          <MenuLink to="/docs/basics" label="Basics" currentPath={currentPath} />
        </li>
        <li>
          <MenuLink to="/docs/shared-api" label="Shared API" currentPath={currentPath} />
        </li>
        <li>
          <MenuLink to="/docs/primitives" label="Primitives" currentPath={currentPath} />
          <SubMenuUl>
            <li>
              <MenuLink to="/docs/primitives/use-spring" label="useSpring" currentPath={currentPath} />
            </li>
            <li>
              <MenuLink to="/docs/primitives/use-springs" label="useSprings" currentPath={currentPath} />
            </li>
            <li>
              <MenuLink to="/docs/primitives/use-trail" label="useTrail" currentPath={currentPath} />
            </li>
            <li>
              <MenuLink to="/docs/primitives/use-transition" label="useTransition" currentPath={currentPath} />
            </li>
            <li>
              <MenuLink to="/docs/primitives/use-chain" label="useChain" currentPath={currentPath} />
            </li>
          </SubMenuUl>
        </li>
        <li>
          <MenuLink to="/about" label="About" currentPath={currentPath} />
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

  background: rgba(54, 54, 69, 0.05);
  border-radius: 20px;
`

const MainMenuUl = styled.ul`
  padding: 20px 30px;
  li a {
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    color: #000;
  }

  li a.is-active {
    color: #ff4f4f;
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

  li a.is-active {
    color: #ff4f4f;
  }

  li {
    margin-top: 10px;
    margin-left: 20px;
  }
`
