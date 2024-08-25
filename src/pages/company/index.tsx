import { CustomHead } from 'components/common/CustomHead'
import { Members } from 'components/company/Members'
import { Outline } from 'components/company/Outline'
import { BaseLayout } from 'components/layouts/BaseLayout'
import { LANGUAGE_TYPE } from 'const/language-type'
import { useLanguage } from 'contexts/LangContext'
import { useLocale } from 'hooks/useLocale'
import AwsPartnerAndSaasCompetency from 'images/advanced_tier-saas_competency.png'
import ISMS from 'images/mark-of-trust-certified-ISOIEC-27001.png'
import Image from 'next/image'

const Company = () => {
  const lang = useLanguage()
  const t = useLocale()

  return (
    <>
      <CustomHead
        title={t.company.head.title}
        description={t.company.head.description}
      />
      <BaseLayout headerBgColor="stone-100">
        <div className="bg-stone-100 pb-10 md:pb-20">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl text-center pt-8 md:pt-24">
            <span>WHAT IS </span>
            <br className="md:hidden" />
            <span>ANTI-PATTERN INC.</span>
          </h1>
          {lang === LANGUAGE_TYPE.JAPANESE && (
            <p className="font-bold text-center mt-6 md:mt-10">会社概要</p>
          )}
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
                src={AwsPartnerAndSaasCompetency}
                alt="AWS Partner Select Tier Services and SaaS Services Competency"
                className="h-32 w-auto"
              />
              <div>
                <Image
                  src={ISMS}
                  alt="ISO/IEC 27001 Information Security Management System Certification"
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
