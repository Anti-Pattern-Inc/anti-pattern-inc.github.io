import * as prismicH from '@prismicio/helpers'
import { SliceZone } from '@prismicio/react'
import { BaseLayout } from 'components/BaseLayout'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { getFormattedDate } from 'utils/date'

import { createClient } from '../../prismicio'
import { components } from '../../slices'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export default function News({ page }: PageProps) {
  return (
    <>
      <Head>
        <title>{page.data.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BaseLayout headerBgColor="stone-100">
        <div className="bg-stone-100 pb-10 md:pb-20">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl text-center pt-8 md:pt-24">
            NEWS
          </h1>
          <p className="font-bold text-center mt-6 md:mt-10">お知らせ</p>
        </div>
        <div className="bg-slate-50 pt-10 pb-24 md:pt-16 md:pb-36">
          <article className="mx-6 px-6 pt-6 pb-24 max-w-6xl xl:mx-auto lg:px-32 md:pt-16 md:pb-36 bg-white">
            <p className="text-ap-green text-sm">
              {getFormattedDate(page.data.publication_date)}
            </p>
            <h2 className="text-2xl lg:text-4xl font-bold mb-6 md:mb-8 mt-6">
              {page.data.title}
            </h2>
            <section className="pt-6 md:pt-12 border-t-4 border-stone-100">
              {page.data.hero_image.url && (
                <img
                  src={page.data.hero_image.url}
                  alt={page.data.hero_image.alt ?? 'hero_img'}
                  width="100%"
                  className="pb-6"
                />
              )}
              <SliceZone slices={page.data.slices} components={components} />
            </section>
          </article>
        </div>
      </BaseLayout>
    </>
  )
}

type PageParams = { uid: string }

export async function getStaticProps({
  params,
  previewData,
}: GetStaticPropsContext<PageParams>) {
  const client = createClient({ previewData })

  if (!params) {
    return
  }
  const page = await client.getByUID('news', params.uid)

  return {
    props: { page },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('news')

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: false,
  }
}
