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
      <main className="text-center mt-5">
        <h1 className="font-bold text-3xl">NEWS</h1>
        <ul className="mt-5 flex flex-col gap-2">
          {pages.map((page, key) => {
            return (
              <Link href={`news/${page.uid}`} key={key}>
                {page.data.title}
              </Link>
            )
          })}
        </ul>
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
