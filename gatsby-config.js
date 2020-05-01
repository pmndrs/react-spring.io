require('dotenv').config()
const queries = require('./src/utils/algolia')
const config = require('./config')
const { Link } = require('styled-icons/fa-solid/Link')

const autolink = {
  resolve: `gatsby-remark-autolink-headers`,
  options: {
    offsetY: 100,
    className: 'autolink',
    maintainCase: true,
    removeAccents: true,
    enableCustomId: true,
    isIconAfterHeader: true,
    elements: [`h1`, `h2`, `h3`],
  },
}

const remarkPlugins = [
  {
    resolve: 'gatsby-remark-images',
    options: {
      maxWidth: 1035,
      sizeByPixelDensity: true,
    },
  },
  {
    resolve: 'gatsby-remark-copy-linked-files',
  },
  autolink,
]

const gatsbyPlugins = [
  // autolink,
  'gatsby-plugin-sitemap',
  'gatsby-plugin-sharp',
  {
    resolve: `gatsby-plugin-layout`,
    options: {
      component: require.resolve(`./src/templates/docs.js`),
    },
  },
  {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: config.googleFonts,
    },
  },
  'gatsby-plugin-emotion',
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'docs',
      path: `${__dirname}/content/`,
    },
  },
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      gatsbyRemarkPlugins: remarkPlugins,
      extensions: ['.mdx', '.md'],
    },
  },
  {
    resolve: `gatsby-plugin-gtag`,
    options: {
      // your google analytics tracking id
      trackingId: config.gatsby.gaTrackingId,
      // Puts tracking script in the head instead of the body
      head: true,
      // enable ip anonymization
      anonymize: false,
    },
  },
]

// check and add algolia
if (
  config.header.search &&
  config.header.search.enabled &&
  config.header.search.algoliaAppId &&
  config.header.search.algoliaAdminKey
) {
  gatsbyPlugins.push({
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: config.header.search.algoliaAppId, // algolia application id
      apiKey: config.header.search.algoliaAdminKey, // algolia admin key to index
      queries,
      chunkSize: 10000, // default: 1000
    },
  })
}

// check and add pwa functionality
if (config.pwa && config.pwa.enabled && config.pwa.manifest) {
  gatsbyPlugins.push(
    {
      resolve: `gatsby-plugin-manifest`,
      options: { ...config.pwa.manifest },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        appendScript: require.resolve(`./src/custom-sw-code.js`),
      },
    }
  )
} else {
  gatsbyPlugins.push('gatsby-plugin-remove-serviceworker')
}

// check and remove trailing slash
if (config.gatsby && !config.gatsby.trailingSlash) {
  gatsbyPlugins.push('gatsby-plugin-remove-trailing-slashes')
}

module.exports = {
  plugins: gatsbyPlugins,
  pathPrefix: config.gatsby.pathPrefix,
  siteMetadata: {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
    docsLocation: config.siteMetadata.docsLocation,
    ogImage: config.siteMetadata.ogImage,
    favicon: config.siteMetadata.favicon,
    logo: {
      link: config.header.logoLink ? config.header.logoLink : '/',
      image: config.header.logo,
    }, // backwards compatible
    headerTitle: config.header.title,
    githubUrl: config.header.githubUrl,
    helpUrl: config.header.helpUrl,
    tweetText: config.header.tweetText,
    headerLinks: config.header.links,
    siteUrl: config.gatsby.siteUrl,
  },
}
