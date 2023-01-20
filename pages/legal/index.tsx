import { SliceZone } from '@prismicio/react'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import { createClient } from '../../prismicio'
import { components } from '../../slices'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export default function Legal({ legal_policy }: PageProps) {
  return (
    <>
      <Head>
        <title>個人情報の取り扱い等 | Anti-Pattern Inc.</title>
        <meta
          name="description"
          content="このページは株式会社アンチパターン(英名:Anti-Pattern Inc.)のコーポレートサイトです。経営理念や事業内容、会社概要などをご紹介しています。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-slate-50">
        <div className="bg-stone-100 pb-10 md:pb-20">
          <Header />
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl text-center mt-8 md:mt-24">
            LEGAL POLICY
          </h1>
          <p className="font-bold text-center mt-6 md:mt-10">
            個人情報の取り扱い等
          </p>
        </div>
        <article className="mx-6 px-6 mt-10 pt-6 mb-24 pb-24 max-w-6xl xl:mx-auto lg:px-32 md:mt-16 md:pt-16 md:mb-36 md:pb-36 bg-white">
          <p className="text-ap-green text-sm"></p>
          <section className="pt-6 md:pt-12">
            <SliceZone
              slices={legal_policy.data.slices}
              components={components}
            />
          </section>
        </article>
        <Footer />
      </main>
    </>
  )
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData })

  const legal_policy = await client.getSingle('legal_policy')

  return {
    props: {
      legal_policy,
    },
  }
}
