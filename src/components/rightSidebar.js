import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Sidebar } from './styles/Sidebar'
import config from '../../config'

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              tableOfContents
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      let navItems = []

      let finalNavItems

      if (allMdx.edges !== undefined && allMdx.edges.length > 0) {
        for (const edge of allMdx.edges) {
          if (!edge) continue

          let { slug } = edge.node.fields
          if (config.gatsby && !config.gatsby.trailingSlash) {
            slug += '/'
          }

          const isMatch =
            slug === location.pathname ||
            config.gatsby.pathPrefix + slug === location.pathname

          if (!isMatch) continue

          const { tableOfContents } = edge.node
          if (tableOfContents && tableOfContents.items) {
            finalNavItems = tableOfContents.items.map((item, index) => {
              const itemId = item.title
                ? item.title.replace(/\s+/g, '').toLowerCase()
                : ``

              return (
                <li key={index}>
                  <a href={'#' + itemId} level={1}>
                    {item.title}
                  </a>
                </li>
              )
            })
          }
        }
      }

      if (finalNavItems && finalNavItems.length) {
        return (
          <Sidebar>
            <ul className={'rightSideBarUL'}>
              <li className={'rightSideTitle'}>CONTENTS</li>
              {finalNavItems}
            </ul>
          </Sidebar>
        )
      } else {
        return (
          <Sidebar>
            <ul></ul>
          </Sidebar>
        )
      }
    }}
  />
)

export default SidebarLayout
