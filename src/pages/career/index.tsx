import { EngineeringBlog } from 'components/career/EngineeringBlog'
import { Hero } from 'components/career/Hero'
import { Philosophy } from 'components/career/Philosophy'
import { RecruitingFlow } from 'components/career/RecruitingFlow'
import { WorkEnvironment } from 'components/career/WorkEnvironment'
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
        <EngineeringBlog />
        <WorkEnvironment />
        <RecruitingFlow />
      </BaseLayout>
    </>
  )
}

export default Career
