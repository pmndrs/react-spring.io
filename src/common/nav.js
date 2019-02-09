import React from 'react'
import styled from 'styled-components'
import {Link} from '@reach/router'
import cx from 'classnames'

function MenuLink({label, to, currentPath, ...rest}) {
  const classes = cx({
    'is-active': to === currentPath
  })
  return (
    <Link to={to} className={classes} {...rest}>
      {label}
    </Link>
  )
}

function MenuHeader({label, expanded, ...rest}) {
  const classes = cx({
    'can-expand': true,
    'is-expanded': expanded
  })
  return (
    <Link to={''} className={classes} {...rest}>
      {label}
    </Link>
  )
}

function CollapsibleMenu({label, pathPrefix, currentPath, children}) {
  const [expanded, setExpanded] = React.useState(currentPath.startsWith(pathPrefix))
  const handleClick = React.useCallback(e => {
    e.preventDefault()
    setExpanded(prevExpanded => !prevExpanded)
  })
  return (
    <>
      <MenuHeader expanded={expanded} label={label} onClick={handleClick} />
      {expanded ? children : null}
    </>
  )
}

export default function Nav({currentPath}) {
  return (
    <NavContainer>
      <MainMenuUl>
        <li>
          <MenuLink to="/" label="Introduction" currentPath={currentPath} />
        </li>
        <li>
          <MenuLink to="/docs/basics" label="Basics" currentPath={currentPath} />
        </li>
        <li>
          <MenuLink to="/docs/shared-api" label="Shared API" currentPath={currentPath} />
        </li>
        <li>
          <CollapsibleMenu pathPrefix="/docs/hooks" label="Hooks API" currentPath={currentPath}>
            <SubMenuUl>
              <li>
                <MenuLink to="/docs/hooks/use-spring" label="useSpring" currentPath={currentPath} />
              </li>
              <li>
                <MenuLink to="/docs/hooks/use-springs" label="useSprings" currentPath={currentPath} />
              </li>
              <li>
                <MenuLink to="/docs/hooks/use-trail" label="useTrail" currentPath={currentPath} />
              </li>
              <li>
                <MenuLink to="/docs/hooks/use-transition" label="useTransition" currentPath={currentPath} />
              </li>
              <li>
                <MenuLink to="/docs/hooks/use-chain" label="useChain" currentPath={currentPath} />
              </li>
            </SubMenuUl>
          </CollapsibleMenu>
        </li>
        <li>
          <CollapsibleMenu pathPrefix="/docs/props" label="Render Props API" currentPath={currentPath}>
            <SubMenuUl>
              <li>
                <MenuLink to="/docs/props/spring" label="Spring" currentPath={currentPath} />
              </li>
              <li>
                <MenuLink to="/docs/props/trail" label="Trail" currentPath={currentPath} />
              </li>
              <li>
                <MenuLink to="/docs/props/transition" label="Transition" currentPath={currentPath} />
              </li>
              <li>
                <MenuLink to="/docs/props/keyframes" label="Keyframes" currentPath={currentPath} />
              </li>
              <li>
                <MenuLink to="/docs/props/parallax" label="Parallax" currentPath={currentPath} />
              </li>
              <li>
                <MenuLink to="/docs/props/performance" label="Better Performance" currentPath={currentPath} />
              </li>
              <li>
                <MenuLink to="/docs/props/gotchas" label="Gotchas" currentPath={currentPath} />
              </li>
              <li>
                <MenuLink to="/docs/props/platforms" label="Other Platforms" currentPath={currentPath} />
              </li>
            </SubMenuUl>
          </CollapsibleMenu>
        </li>
        <li>
          <MenuLink to="/examples" label="Examples" currentPath={currentPath} />
        </li>
        <li>
          <MenuLink to="/log" label="Change Log" currentPath={currentPath} />
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
  max-height: calc(100vh - 40px);
  overflow: auto;

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

  li a.can-expand::after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;

    border-width: 4px 6px 4px 0;
    border-color: transparent #6a6a7b transparent transparent;

    border-radius: 1px;
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    margin-left: 5px;
    margin-bottom: 2px;
  }

  li a.can-expand.is-expanded::after {
    border-width: 6px 4px 0 4px;
    border-color: #6a6a7b transparent transparent transparent;
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
