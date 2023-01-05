import * as prismicH from '@prismicio/helpers'
import { SliceZone } from '@prismicio/react'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'

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
      <main className="text-center mt-5">
        <h1 className="font-bold text-3xl">
          <Link href={'/news'}>NEWS</Link>
        </h1>
        <h2 className="mt-5 text-2xl mb-5">{page.data.title}</h2>
        <section className="flex flex-col gap-3">
          <SliceZone slices={page.data.slices} components={components} />
        </section>
      </main>
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
