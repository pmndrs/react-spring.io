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
            url: '/hooks/usespring',
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
    title: 'Accessibility',
    url: '/accessibility',
  },
  {
    title: 'Testing',
    url: '/testing',
  },
  {
    title: 'Guides',
    url: '/guides',
  },
  {
    title: 'Changelog',
    url: '/changelog',
  },
]
