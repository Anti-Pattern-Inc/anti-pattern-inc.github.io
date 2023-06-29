import { Hero } from 'components/career/Hero'
import { Philosophy } from 'components/career/Philosophy'
import { CustomHead } from 'components/common/CustomHead'
import { BusinessConcept } from 'components/features/BusinessConcept'
import { ServiceList } from 'components/features/ServiceList'
import { BaseLayout } from 'components/layouts/BaseLayout'

const Career = () => {
  return (
    <>
      <CustomHead
        title="採用ページ | Anti-Pattern Inc."
        description="Anti-Pattern Inc.の採用ページです。"
      />
      <BaseLayout headerBgColor="stone-100">
        <Hero />
        <Philosophy />
        <BusinessConcept />
        <ServiceList />
      </BaseLayout>
    </>
  )
}

export default Career
