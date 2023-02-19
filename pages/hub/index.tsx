import { BaseLayout } from 'components/BaseLayout'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getFormattedDate } from 'utils/date'

import { createClient } from '../../prismicio'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

export default function Hub({ pages }: PageProps) {
  const router = useRouter()
  const tag = router.query.tag
  let sorted_pages = pages.sort((a, b) => {
    if (!a.data.publication_date || !b.data.publication_date) {
      return 0
    }
    if (a.data.publication_date > b.data.publication_date) {
      return -1
    } else {
      return 1
    }
  })
  if (tag) {
    sorted_pages = sorted_pages.filter((page) => {
      return page.tags.includes(tag as string)
    })
  }
  return (
    <>
      <Head>
        <title>ANTI-PATTERN HUB | Anti-Pattern Inc.</title>
        <meta
          name="description"
          content="このページは株式会社アンチパターン(英名:Anti-Pattern Inc.)のコーポレートサイトです。経営理念や事業内容、会社概要などをご紹介しています。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
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
          {sorted_pages.map((page, key) => {
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
                    {page.tags.map((tag) => {
                      return (
                        <Link href={`/hub?tag=${tag}`} key={tag}>
                          #{tag}
                        </Link>
                      )
                    })}
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
