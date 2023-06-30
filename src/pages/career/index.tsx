import { EngineeringBlog } from 'components/career/EngineeringBlog'
import { Hero } from 'components/career/Hero'
import { JobPosition } from 'components/career/JobPosition'
import { Philosophy } from 'components/career/Philosophy'
import { RecruitingFlow } from 'components/career/RecruitingFlow'
import { WorkEnvironment } from 'components/career/WorkEnvironment'
import { CustomHead } from 'components/common/CustomHead'
import { BusinessConcept } from 'components/features/BusinessConcept'
import { ServiceList } from 'components/features/ServiceList'
import { BaseLayout } from 'components/layouts/BaseLayout'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

import { createClient } from '@/prismicio'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Career = ({ job_position }: PageProps) => {
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
        <JobPosition job_position={job_position} />
        <RecruitingFlow />
      </BaseLayout>
    </>
  )
}
export const getStaticProps = async ({
  previewData,
}: GetStaticPropsContext) => {
  const client = createClient({ previewData })

  const job_position = await client.getSingle('job_position')
  return {
    props: {
      job_position,
    },
  }
}

export default Career
