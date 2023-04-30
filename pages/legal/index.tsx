import { SliceZone } from '@prismicio/react'
import { BaseLayout } from 'components/BaseLayout'
import { CustomHead } from 'components/CustomHead'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

import { createClient } from '../../prismicio'
import { components } from '../../slices'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Legal = ({ legal_policy }: PageProps) => {
  return (
    <>
      <CustomHead
        title="個人情報の取り扱い等 | Anti-Pattern Inc."
        description="このページは株式会社アンチパターン(英名:Anti-Pattern Inc.)のコーポレートサイトです。経営理念や事業内容、会社概要などをご紹介しています。"
      />
      <BaseLayout headerBgColor="stone-100">
        <div className="bg-stone-100 pb-10 md:pb-20">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl text-center pt-8 md:pt-24">
            LEGAL POLICY
          </h1>
          <p className="font-bold text-center mt-6 md:mt-10">
            個人情報の取り扱い等
          </p>
        </div>
        <div className="bg-slate-50 pt-10 pb-24 md:pt-16 md:pb-36">
          <article className="mx-6 px-6 pt-6 pb-24 max-w-6xl xl:mx-auto lg:px-32 md:pt-16 md:pb-36 bg-white">
            <p className="text-ap-green text-sm"></p>
            <section className="pt-6 md:pt-12">
              <SliceZone
                slices={legal_policy.data.slices}
                components={components}
              />
            </section>
          </article>
        </div>
      </BaseLayout>
    </>
  )
}

export const getStaticProps = async ({
  previewData,
}: GetStaticPropsContext) => {
  const client = createClient({ previewData })

  const legal_policy = await client.getSingle('legal_policy')

  return {
    props: {
      legal_policy,
    },
  }
}

export default Legal
