import { CustomHead } from 'components/common/CustomHead'
import { BusinessConcept } from 'components/features/BusinessConcept'
import { ServiceList } from 'components/features/ServiceList'
import { BaseLayout } from 'components/layouts/BaseLayout'

const Services = () => {
  return (
    <>
      <CustomHead
        title="サービス | Anti-Pattern Inc."
        description="このページは株式会社アンチパターン(英名:Anti-Pattern Inc.)のコーポレートサイトです。経営理念や事業内容、会社概要などをご紹介しています。"
      />
      <BaseLayout headerBgColor="stone-100">
        <div className="bg-stone-100 pb-10 md:pb-20">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl text-center pt-8 md:pt-24">
            SERVICES
          </h1>
          <p className="font-bold text-center mt-6 md:mt-10">サービス</p>
        </div>
        <BusinessConcept />
        <ServiceList />
      </BaseLayout>
    </>
  )
}

export default Services
