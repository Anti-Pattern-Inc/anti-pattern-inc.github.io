import { SliceZone } from '@prismicio/react'
import { BaseLayout } from 'components/BaseLayout'
import { CustomHead } from 'components/CustomHead'
import { Tags } from 'components/hub/Tags'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { components } from 'slices'
import { getFormattedDate } from 'utils/date'

import { createClient } from '@/prismicio'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Hub = ({ page }: PageProps) => {
  return (
    <>
      <CustomHead
        title={page.data.title || 'ANTI-PATTERN HUB | Anti-Pattern Inc.'}
        description={
          page.data.description ||
          'このページは株式会社アンチパターン(英名:Anti-Pattern Inc.)のコーポレートサイトです。経営理念や事業内容、会社概要などをご紹介しています。'
        }
        image={page.data.hero_image.url || undefined}
        ogType="article"
      />
      <BaseLayout headerBgColor="stone-100">
        <div className="bg-stone-100 pb-10 md:pb-20 pt-8 md:pt-24">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl text-center">
            ANTI-PATTERN HUB
          </h1>
          <p className="font-bold text-center mt-6 md:mt-10">
            アンチパターン情報ポータルサイト
          </p>
        </div>
        <article className="min-h-screen flex flex-col justify-between px-6 pt-6 mb-16 max-w-3xl mx-auto md:pt-16 md:mb-24">
          <div className="flex justify-between">
            <p className="text-ap-green text-sm font-bold">
              {getFormattedDate(page.data.publication_date)}
            </p>
            <p className="flex gap-2 text-ap-green text-sm font-bold">
              <Tags tags={page.tags} />
            </p>
          </div>
          <h2 className="text-xl lg:text-2xl font-bold mb-6 md:mb-8 mt-6">
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
          <p className="flex justify-end gap-2 text-ap-green text-sm font-bold mt-24 md:mt-36">
            <Tags tags={page.tags} />
          </p>
        </article>
      </BaseLayout>
    </>
  )
}

export default Hub

type PageParams = { uid: string }

export const getStaticProps = async ({
  params,
  previewData,
}: GetStaticPropsContext<PageParams>) => {
  const client = createClient({ previewData })

  if (!params) {
    return
  }
  const page = await client.getByUID('hub', params.uid)

  return {
    props: { page },
  }
}

export const getStaticPaths = async () => {
  const client = createClient()

  const pages = await client.getAllByType('hub')

  type Path = {
    params: {
      uid: string
    }
    locale: string
  }
  const paths: Path[] = []
  pages.forEach((page) => {
    paths.push({
      params: {
        uid: page.uid,
      },
      locale: 'en',
    })
    paths.push({
      params: {
        uid: page.uid,
      },
      locale: 'ja',
    })
  })

  return {
    paths: paths,
    fallback: false,
  }
}
