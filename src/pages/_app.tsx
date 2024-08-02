import '../styles/globals.scss'

import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'
import { LangContextProvider } from 'contexts/LangContext'
import type { AppProps } from 'next/app'
import Link from 'next/link'

import { repositoryName } from '@/prismicio'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <PrismicProvider
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <LangContextProvider>
          <Component {...pageProps} />
        </LangContextProvider>
      </PrismicPreview>
    </PrismicProvider>
  )
}

export default App
