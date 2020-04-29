import React from 'react'
import Tree from './tree'
import { animated, useSpring } from 'react-spring'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { ExternalLink } from 'react-feather'
import fadeOut from './fade-out.svg'
import config from '../../../config'

const ListItem = styled(({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a href={props.to} {...props} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    </li>
  )
})`
  a {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 19px !important;
  }
`

const Sidebar = styled('aside')`
  width: 100%;
  height: 385px;
  border: 1px solid hsl(216, 20%, 94%);
  border-radius: 15px;
  box-shadow: hsl(216, 20%, 96%) 0px 2px 6px 0px;
  overflow: hidden;

  position: fixed;
  position: sticky;
  top: 20px;

  @media only screen and (max-width: 1023px) {
    width: 100%;
    /* position: relative; */
    height: 100vh;
  }

  @media (min-width: 767px) and (max-width: 1023px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 767px) {
    padding-left: 0px;
    height: auto;
  }
`

const EdgeGradient = styled('div')`
  pointer-events: none;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
  background: url('${fadeOut}') repeat-x;
`

const Scroller = styled('div')`
  height: 100%;
  overflow: auto;
  padding: 15px 0 20px;
`

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      const minOpacity = 0.25
      const [{ opacity }] = useSpring(() => ({
        to: { opacity: minOpacity },
        from: { opacity: 1 },
        config: { frequency: 1.2 },
        delay: 2000,
      }))
      const AnimatedSidebar = animated(Sidebar)
      return (
        <AnimatedSidebar
          style={{ opacity }}
          onMouseEnter={() => opacity.start(1, { delay: 200 })}
          onMouseLeave={() => opacity.start(minOpacity, { delay: 200 })}>
          <Scroller>
            {config.sidebar.title ? (
              <div
                className={'sidebarTitle hiddenMobile'}
                dangerouslySetInnerHTML={{ __html: config.sidebar.title }}
              />
            ) : null}
            <ul className={'sideBarUL'}>
              <Tree edges={allMdx.edges} />
              {config.sidebar.links.map((link, key) => {
                if (link.link !== '' && link.text !== '') {
                  return (
                    <ListItem key={key} to={link.link}>
                      {link.text}
                      <ExternalLink size={14} />
                    </ListItem>
                  )
                }
              })}
            </ul>
          </Scroller>
          <EdgeGradient />
        </AnimatedSidebar>
      )
    }}
  />
)

export default SidebarLayout
