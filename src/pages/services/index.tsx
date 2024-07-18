import { CustomHead } from 'components/common/CustomHead'
import { BusinessConcept } from 'components/features/BusinessConcept'
import { ServiceList } from 'components/features/ServiceList'
import { BaseLayout } from 'components/layouts/BaseLayout'
import { useLocale } from 'hooks/useLocale'

const Services = () => {
  const t = useLocale()

  return (
    <>
      <CustomHead
        title={t.services.head.title}
        description={t.services.head.description}
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
