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
    title: 'Common Api',
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
        title: 'Interpolations',
        url: '/common/interpolation',
      },
    ],
  },
  {
    title: 'hooks',
    routes: [
      {
        title: 'useSpring',
        url: '/hooks/usespring',
      },
    ],
  },
  {
    title: 'Accessibility',
    url: '/accessibility',
  },
  {
    title: 'Changelog',
    url: '/changelog',
  },
]
