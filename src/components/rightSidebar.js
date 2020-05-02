import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ScrollableLink } from 'react-update-url-on-scroll'
import { RightSidebar } from './styles/RightSidebar'
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
              headings {
                value
                depth
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      let navItems = []
      let finalNavItems

      function matchEdge(test) {
        if (allMdx.edges && allMdx.edges.length) {
          for (const edge of allMdx.edges) {
            if (edge && test(edge)) {
              return edge
            }
          }
        }
      }

      // Find the edge matching our pathname.
      const edge = matchEdge(edge => {
        let { slug } = edge.node.fields
        if (config.gatsby && !config.gatsby.trailingSlash) {
          slug += '/'
        }
        return (
          slug === location.pathname ||
          config.gatsby.pathPrefix + slug === location.pathname
        )
      })

      const { headings } = edge ? edge.node : { headings: [] }

      const usedHeadings = React.useRef(headings)
      React.useEffect(() => {
        usedHeadings.current = headings
      })

      const getHash =
        typeof window !== 'undefined'
          ? () => window.location.hash.slice(1)
          : () => ''

      const [activeId, setActiveId] = React.useState(getActiveId)
      function getActiveId() {
        let activeId = getHash()

        const headings = usedHeadings.current
        for (let i = 0; i < headings.length; i++) {
          const h = headings[i]

          if (!h.id) {
            let { value } = h
            if (!value) {
              continue
            }

            const customIdRegex = /\{\#([^\}]+)\}$/
            const match = value.match(customIdRegex)
            const title = value.replace(customIdRegex, '')

            h.title = title
            h.id =
              (match && match[1]) ||
              title.replace(/\s+/g, '-').replace(/[():]/g, '')
          }

          if (h.id === activeId && h.depth > 1) {
            // Find the nearest preceding <h1>
            for (let j = i; --j >= 0; ) {
              const h = headings[j]
              if (h.depth == 1) {
                activeId = h.id
                break
              }
            }
          }
        }

        return activeId
      }

      if (headings.length) {
        finalNavItems = headings.map(({ id, title, depth }, index) => {
          if (!title || depth > 1) {
            return null
          }
          return (
            <li key={index}>
              <ScrollableLink href={'#' + id}>
                <a
                  href={'#' + id}
                  className={[
                    'level-' + depth,
                    id === activeId ? 'active' : '',
                  ].join(' ')}>
                  {title}
                </a>
              </ScrollableLink>
            </li>
          )
        })
      }

      React.useEffect(() => {
        if (typeof window !== 'undefined') {
          const effect = () => setActiveId(getActiveId())
          window.addEventListener('hashchange', effect)
          return () => {
            window.removeEventListener('hashchange', effect)
          }
        }
      }, [])

      if (finalNavItems) {
        return (
          <RightSidebar>
            <ul className={'rightSideBarUL'}>
              <li className={'rightSideTitle'}>CONTENTS</li>
              {finalNavItems}
            </ul>
          </RightSidebar>
        )
      } else {
        return (
          <RightSidebar>
            <ul></ul>
          </RightSidebar>
        )
      }
    }}
  />
)

export default SidebarLayout
