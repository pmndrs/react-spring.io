const config = {
  googleFonts: [
    {
      family: `Roboto Mono`,
      variants: [`400`, `600`],
    },
  ],
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://react-spring.io',
    gaTrackingId: null,
    trailingSlash: true,
  },
  header: {
    githubUrl: 'https://github.com/react-spring/react-spring',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [],
    collapsedNav: [],
    links: [
      {
        text: 'Spring Visualizer',
        link: 'https://react-spring-visualizer.com/',
      },
    ],
    frontline: false,
    ignoreIndex: true,
    title: '',
  },
  siteMetadata: {
    title: 'React Spring',
    description:
      'Bring your components to life with simple spring animation primitives for React',
    ogImage: 'https://www.react-spring.io/share.jpg',
    docsLocation:
      'https://github.com/react-spring/react-spring.io/tree/master/content',
    favicon: '',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: '',
      short_name: '',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
}

module.exports = config
