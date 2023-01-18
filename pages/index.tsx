import Head from 'next/head'

import Customers from '../src/components/Customers'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import Recruit from '../src/components/Recruit'
import Services from '../src/components/Services'

export default function Home() {
  return (
    <>
      <Head>
        <title>Anti-Pattern Inc.</title>
        <meta
          name="description"
          content="このページは株式会社アンチパターン(英名:Anti-Pattern Inc.)のコーポレートサイトです。経営理念や事業内容、会社概要などをご紹介しています。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Header />
        <Hero />
        <Services />
        <Customers />
        <Recruit />
        <Footer />
      </main>
    </>
  )
}
