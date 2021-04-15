export type Page = {
  title: string
  url?: string
  routes?: Page[]
}

export const PAGES: Page[] = [
  {
    title: 'Introduction',
    url: '/',
  },
  {
    title: 'Basics',
    url: '/basics',
  },
  {
    title: 'API',
    routes: [
      {
        title: 'Common',
        routes: [
          {
            title: 'Props',
            url: '/common/props',
          },
          {
            title: 'Configs',
            url: '/common/configs',
          },
          {
            title: 'Imperatives & Refs',
            url: '/common/imperatives-and-refs',
          },
          {
            title: 'Interpolations',
            url: '/common/interpolation',
          },
        ],
      },
      {
        title: 'Hooks',
        routes: [
          {
            title: 'useSpring',
            url: '/hooks/use-spring',
          },
          {
            title: 'useSprings',
            url: '/hooks/use-springs',
          },
        ],
      },
      {
        title: 'Render Props',
        routes: [
          // {
          //   title: 'useSpring',
          //   url: '/hooks/usespring',
          // },
        ],
      },
    ],
  },
  {
    title: 'Guides',
    routes: [
      {
        title: 'Accessibility',
        url: '/guides/accessibility',
      },
      {
        title: 'Testing',
        url: '/guides/testing',
      },
    ],
  },
  {
    title: 'Changelog',
    url: '/changelog',
  },
]
