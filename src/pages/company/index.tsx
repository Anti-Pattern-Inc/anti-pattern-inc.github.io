import { CustomHead } from 'components/common/CustomHead'
import { Members } from 'components/company/Members'
import { Outline } from 'components/company/Outline'
import { BaseLayout } from 'components/layouts/BaseLayout'
import AwsPartner from 'images/aws-partnernetwork-partner-advanced-tier-services-badge.png'
import ISMS from 'images/mark-of-trust-certified-ISOIEC-27001.png'
import Image from 'next/image'

const Company = () => {
  return (
    <>
      <CustomHead
        title="会社概要 | Anti-Pattern Inc."
        description="このページは株式会社アンチパターン(英名:Anti-Pattern Inc.)のコーポレートサイトです。経営理念や事業内容、会社概要などをご紹介しています。"
      />
      <BaseLayout headerBgColor="stone-100">
        <div className="bg-stone-100 pb-10 md:pb-20">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl text-center pt-8 md:pt-24">
            <span>WHAT IS </span>
            <br className="md:hidden" />
            <span>ANTI-PATTERN INC.</span>
          </h1>
          <p className="font-bold text-center mt-6 md:mt-10">会社概要</p>
        </div>
        <div className="bg-slate-50">
          <Outline />
          <Members />
          <section className="pb-28 md:pb-52 mt-32 md:mt-44">
            <h2 className="mb-6 md:mb-14 font-bold text-ap-green text-2xl text-center">
              CERTIFICATIONS
            </h2>
            <div className="flex flex-col items-center gap-16 mx-auto sm:flex-row sm:justify-center">
              <Image
                src={AwsPartner}
                alt="aws Partner Select Tier Services"
                className="h-32 w-auto"
              />
              <div>
                <Image
                  src={ISMS}
                  alt="ISOIEC 27001 Information Security Management System Certification"
                  className="h-32 w-auto"
                />
                <p className="text-center">IS 794005</p>
              </div>
            </div>
          </section>
        </div>
      </BaseLayout>
    </>
  )
}

export default Company
