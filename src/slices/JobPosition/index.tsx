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
  <div className="flex border-4 border-black rounded my-4">
    <PrismicImage field={slice.primary.image} className="h-40" />
    <div>
      <PrismicRichText field={slice.primary.positionname} />
      <PrismicRichText field={slice.primary.description} />
    </div>
  </div>
)

export default JobPosition
