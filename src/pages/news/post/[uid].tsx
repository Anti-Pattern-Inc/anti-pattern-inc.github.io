import { SliceZone } from '@prismicio/react'
import { CustomHead } from 'components/common/CustomHead'
import { ShareButtons } from 'components/common/ShareButtons'
import { BaseLayout } from 'components/layouts/BaseLayout'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { components } from 'slices'
import { getFormattedDate } from 'utils/date'

import { createClient } from '@/prismicio'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const News = ({ page }: PageProps) => {
  return (
    <>
      <CustomHead
        title={page.data.title || 'ニュース | Anti-Pattern Inc.'}
        description={
          page.data.description ||
          'このページは株式会社アンチパターン(英名:Anti-Pattern Inc.)のコーポレートサイトです。経営理念や事業内容、会社概要などをご紹介しています。'
        }
        image={page.data.hero_image.url || undefined}
        ogType="article"
      />
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
            <section className="border-t-4 border-stone-100">
              <ShareButtons type={page.type} slug={page.uid} />
              {page.data.hero_image.url && (
                <img
                  src={page.data.hero_image.url}
                  alt={page.data.hero_image.alt ?? 'hero_img'}
                  width="100%"
                  className="pb-6"
                />
              )}
              <SliceZone slices={page.data.slices} components={components} />
              <ShareButtons type={page.type} slug={page.uid} />
            </section>
          </article>
        </div>
      </BaseLayout>
    </>
  )
}

export default News

type PageParams = { uid: string }

export const getStaticProps = async ({
  params,
  previewData,
}: GetStaticPropsContext<PageParams>) => {
  const client = createClient({ previewData })

  if (!params) {
    return
  }
  const page = await client.getByUID('news', params.uid)

  return {
    props: { page },
  }
}

export const getStaticPaths = async () => {
  const client = createClient()

  const pages = await client.getAllByType('news')

  type Path = {
    params: {
      uid: string
    }
    locale: string
  }
  const paths: Array<Path> = []
  pages.forEach((page) => {
    // localeに"en"を追加する場合は以下のコメントアウトを外す
    // paths.push({
    //   params: {
    //     uid: page.uid,
    //   },
    //   locale: 'en',
    // })
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
