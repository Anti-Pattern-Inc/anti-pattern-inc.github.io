import { BaseLayout } from 'components/BaseLayout'
import { CustomHead } from 'components/CustomHead'
import { Tags } from 'components/hub/Tags'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getFormattedDate } from 'utils/date'

import { HubDocument } from '../../../.slicemachine/prismicio'
import { createClient } from '../../../prismicio'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export default function Hub({ pages }: PageProps) {
  const router = useRouter()
  const [sortedPages, setSortedPages] = useState<HubDocument<string>[]>([])

  useEffect(() => {
    if (!router.isReady) {
      return
    }
    const tag = router.query.tag
    const filteredPages = pages
      .filter((page) => {
        if (!tag) {
          return true
        }
        return page.tags.includes(tag as string)
      })
      .sort((a, b) => {
        if (!a.data.publication_date || !b.data.publication_date) {
          return 0
        }
        if (a.data.publication_date > b.data.publication_date) {
          return -1
        } else {
          return 1
        }
      })
    setSortedPages(filteredPages)
  }, [router])

  return (
    <>
      <CustomHead
        title="ANTI-PATTERN HUB | Anti-Pattern Inc."
        description="このページは株式会社アンチパターン(英名:Anti-Pattern Inc.)のコーポレートサイトです。経営理念や事業内容、会社概要などをご紹介しています。"
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
        <section className="px-6 py-16 lg:py-24 flex flex-wrap justify-center gap-10">
          {sortedPages.map((page, key) => {
            return (
              <div
                key={key}
                className="w-80 lg:w-96 mb-auto flex flex-col justify-center"
              >
                <Link href={`hub/${page.uid}`}>
                  <img
                    src={page.data.hero_image.url ?? ''}
                    alt={page.data.hero_image.alt ?? 'hero_img'}
                    className="w-full h-56 lg:h-64 object-cover"
                  ></img>
                </Link>
                <p className="flex justify-between mt-2 mb-3">
                  <span className="text-ap-green text-sm">
                    {getFormattedDate(page.data.publication_date)}
                  </span>
                  <span className="flex text-ap-green text-sm gap-2">
                    <Tags tags={page.tags} />
                  </span>
                </p>
                <Link href={`hub/${page.uid}`}>
                  <p className="text-sm font-bold table text-left mx-auto md:mx-0">
                    {page.data.title}
                  </p>
                </Link>
              </div>
            )
          })}
        </section>
      </BaseLayout>
    </>
  )
}

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData })

  const pages = await client.getAllByType('hub')

  return {
    props: {
      pages,
    },
  }
}
