import { BaseLayout } from 'components/BaseLayout'
import { CustomHead } from 'components/CustomHead'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { getFormattedDate } from 'utils/date'

import { createClient } from '@/prismicio'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const News = ({ pages }: PageProps) => {
  const sorted_pages = pages.sort((a, b) => {
    if (!a.data.publication_date || !b.data.publication_date) {
      return 0
    }
    if (a.data.publication_date > b.data.publication_date) {
      return -1
    } else {
      return 1
    }
  })
  return (
    <>
      <CustomHead
        title="ニュース | Anti-Pattern Inc."
        description="このページは株式会社アンチパターン(英名:Anti-Pattern Inc.)のコーポレートサイトです。経営理念や事業内容、会社概要などをご紹介しています。"
      />
      <BaseLayout headerBgColor="stone-100">
        <div className="bg-stone-100 pb-10 md:pb-20">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl text-center pt-8 md:pt-24">
            NEWS
          </h1>
          <p className="font-bold text-center mt-6 md:mt-10">お知らせ</p>
        </div>
        <div className="text-center flex flex-col justify-between">
          <section className="px-6">
            <div className="flex flex-col mt-12 md:mt-20 pb-12 md:pb-20 border-t-4 border-stone-100">
              {sorted_pages.map((page, key) => {
                return (
                  <Link
                    href={`news/${page.uid}`}
                    key={key}
                    className="border-b-4 border-stone-100 py-4 md:py-10 flex flex-col justify-center md:flex-row gap-4"
                  >
                    <span className="text-ap-green text-sm">
                      {getFormattedDate(page.data.publication_date)}
                    </span>
                    <span className="text-sm font-bold table text-left mx-auto md:mx-0">
                      {page.data.title}
                    </span>
                  </Link>
                )
              })}
            </div>
          </section>
        </div>
      </BaseLayout>
    </>
  )
}

export default News

export const getStaticProps = async ({
  previewData,
}: GetStaticPropsContext) => {
  const client = createClient({ previewData })

  const pages = await client.getAllByType('news')

  return {
    props: {
      pages,
    },
  }
}
