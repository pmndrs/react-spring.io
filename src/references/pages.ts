export type Page = {
  title: string
  url?: string
  routes?: Page[]
}

export const PAGES: Page[] = [
  {
    title: 'index',
    url: '/',
  },
  {
    title: 'mypage',
    url: '/mypage',
  },
  {
    title: 'hooks',
    routes: [
      {
        title: 'hook1',
        url: '/hooks/hook1',
      },
      {
        title: 'hook2',
        url: '/hooks/hook2',
      },
    ],
  },
]
