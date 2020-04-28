import React from 'react'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'
import Loadable from 'react-loadable'
import { GithubLink } from './GithubLink'
import Link from './link'
import Logo from './Logo'

import config from '../../config.js'
import LoadingProvider from './mdxComponents/loading'

const help = require('./images/help.svg')

const isSearchEnabled =
  config.header.search && config.header.search.enabled ? true : false

let searchIndices = []

if (isSearchEnabled && config.header.search.indexName) {
  searchIndices.push({
    name: `${config.header.search.indexName}`,
    title: `Results`,
    hitComp: `PageHit`,
  })
}

import Sidebar from './sidebar'

const LoadableComponent = Loadable({
  loader: () => import('./search/index'),
  loading: LoadingProvider,
})

function myFunction() {
  var x = document.getElementById('navbar')

  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}

const StyledBgDiv = styled('div')`
  height: 60px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #f8f8f8;
  position: relative;
  display: none;
  background: ${props => (props.isDarkThemeActive ? '#001932' : undefined)};

  @media (max-width: 767px) {
    display: block;
  }
`

const Header = ({ location, isDarkThemeActive, toggleActiveTheme }) => (
  <StaticQuery
    query={graphql`
      query headerTitleQuery {
        site {
          siteMetadata {
            githubUrl
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { githubUrl },
      },
    }) => (
      <div className={'navBarWrapper'}>
        <nav className={'navBarDefault'}>
          <div className={'navBarHeader'}>
            <Logo />
          </div>
        </nav>
        <GithubLink url={githubUrl} />
      </div>
    )}
  />
)

export default Header
