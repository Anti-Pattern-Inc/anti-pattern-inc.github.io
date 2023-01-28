import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Customers } from 'components/top/Customers'
import { Hero } from 'components/top/Hero'
import { Recruit } from 'components/top/Recruit'
import { Services } from 'components/top/Services'
import Head from 'next/head'

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
