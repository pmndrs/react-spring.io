import React from 'react'
import styled from 'styled-components'
import {Link} from '@reach/router'
import cx from 'classnames'
import {useSpring, animated} from 'react-spring'
import ResizeObserver from 'resize-observer-polyfill'

function useMeasure() {
  const ref = React.useRef()
  const [bounds, set] = React.useState({left: 0, top: 0, width: 0, height: 0})
  const [ro] = React.useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)))
  React.useEffect(() => {
    if (ref.current) ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])
  return [{ref}, bounds]
}

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
  const [bind, {height}] = useMeasure()
  const [expanded, setExpanded] = React.useState(currentPath.startsWith(pathPrefix))
  const props = useSpring({height: expanded ? height : 0})
  const handleClick = React.useCallback(e => {
    e.preventDefault()
    setExpanded(prevExpanded => !prevExpanded)
  })

  return (
    <>
      <MenuHeader expanded={expanded} label={label} onClick={handleClick} />
      <animated.div style={{overflow: 'hidden', ...props}}>
        <div {...bind}>{children}</div>
      </animated.div>
    </>
  )
}

export default function Nav({ currentPath }) {
  return (
    <NavContainer>
      <MainMenuUl>
        <li>
          <MenuLink to="/" label="Introduction" currentPath={currentPath} />
        </li>
        <li>
          <CollapsibleMenu pathPrefix="/docs/hooks" label="Hooks api" currentPath={currentPath}>
            <SubMenuUl>
              <li>
                <MenuLink to="/docs/hooks/basics" label="Basics" currentPath={currentPath} />
              </li>
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
              <li>
                <MenuLink to="/docs/hooks/examples" label="Examples" currentPath={currentPath} />
              </li>
            </SubMenuUl>
          </CollapsibleMenu>
        </li>
        <li>
          <CollapsibleMenu pathPrefix="/docs/props" label="Render-props api" currentPath={currentPath}>
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
          <MenuLink to="/api" label="Common api" currentPath={currentPath} />
        </li>
        <li>
          <MenuLink to="/log" label="Changelog" currentPath={currentPath} />
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
    margin-left: 10px;
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
  overflow: hidden;
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
