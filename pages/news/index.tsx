import Footer from 'components/Footer'
import Header from 'components/Header'
import { getFormattedDate } from 'functions'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { createClient } from '../../prismicio'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export default function News({ pages }: PageProps) {
  return (
    <>
      <Head>
        <title>ニュース | Anti-Pattern Inc.</title>
        <meta
          name="description"
          content="このページは株式会社アンチパターン(英名:Anti-Pattern Inc.)のコーポレートサイトです。経営理念や事業内容、会社概要などをご紹介しています。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="text-center min-h-screen flex flex-col justify-between">
        <div>
          <div className="bg-stone-100 pb-10 md:pb-20">
            <Header />
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl text-center mt-8 md:mt-24">
              NEWS
            </h1>
            <p className="font-bold text-center mt-6 md:mt-10">お知らせ</p>
          </div>
          <section className="px-6">
            <div className="flex flex-col mt-12 md:mt-20 pb-12 md:pb-20 border-t-4 border-stone-100">
              {pages.map((page, key) => {
                return (
                  <Link
                    href={`news/${page.uid}`}
                    key={key}
                    className="border-b-4 border-stone-100 py-4 md:py-10 flex flex-col md:flex-row justify-center gap-4"
                  >
                    <span className="text-ap-green text-sm">
                      {getFormattedDate(page.data.publication_date)}
                    </span>
                    <span className="text-sm font-bold">{page.data.title}</span>
                  </Link>
                )
              })}
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  )
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData })

  const pages = await client.getAllByType('news')

  return {
    props: {
      pages,
    },
  }
}
