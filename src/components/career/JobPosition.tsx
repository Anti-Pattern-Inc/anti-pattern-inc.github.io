import { SliceZone } from '@prismicio/react'
import { components } from 'slices'

import { JobPositionDocument } from '@/.slicemachine/prismicio'

const JobPosition = ({
  job_position,
}: {
  job_position: JobPositionDocument
}) => {
  return (
    <section className="py-20">
      <h2 className="mb-4 md:mb-8 font-bold text-ap-green text-2xl text-center">
        募集職種一覧
      </h2>
      <SliceZone slices={job_position.data.slices} components={components} />
    </section>
  )
}

export { JobPosition }
