import { Content } from '@prismicio/client'
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react'
import React from 'react'

/**
 * @typedef {import("@prismicio/client").Content.JobPositionSlice} JobPositionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<JobPositionSlice>} JobPositionProps
 * @param { JobPositionProps }
 */

export type JobPositionProps = SliceComponentProps<Content.JobPositionSlice>

const JobPosition = ({ slice }: JobPositionProps) => (
  <div className="flex flex-col md:flex-row items-center gap-2 max-w-3xl border-4 border-black rounded-3xl my-4 mx-4 md:mx-auto p-4 ">
    <PrismicImage
      field={slice.primary.image}
      className="h-48 w-full md:w-1/3 object-contain"
    />
    <div className="w-full md:w-2/3 break-words text-center md:text-unset">
      <div className="text-xl  md:text-3xl">
        <PrismicRichText field={slice.primary.positionname} />
      </div>
      <div className="text-base md:text-xl">
        <PrismicRichText field={slice.primary.description} />
      </div>
    </div>
  </div>
)

export default JobPosition
