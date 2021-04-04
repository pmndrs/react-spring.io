import { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { DefaultSeo } from 'next-seo'

import { GLOBAL } from 'styles/global'
import { RESET } from 'styles/reset'

import { Splash } from 'components/Splash'
import { ScrollIndicator } from 'components/ScrollIndicator'
import { PageContainer } from 'components/PageContainer'
import Footer from 'components/Footer'

import { useManageScroll } from 'hooks/useManageScroll'

import { DEFAULT_SEO } from 'references/defaultSeo'

const GlobalStyle = createGlobalStyle`
  ${GLOBAL}
  ${RESET}
`

interface MyAppProps extends AppProps {}

function App({ Component, pageProps }: MyAppProps) {
  useManageScroll()

  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <Splash />
      <ScrollIndicator />
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
      <Footer />
      <GlobalStyle />
    </>
  )
}

export default App
