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
    title: 'Common API',
    url: '/common-api',
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
    title: 'Changelog',
    url: '/changelog',
  },
]
