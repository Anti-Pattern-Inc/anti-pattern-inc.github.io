import { Content } from '@prismicio/client'
import {
  PrismicImage,
  PrismicLink,
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
  <div className="mx-4">
    <div className="flex flex-col md:flex-row items-center gap-2 max-w-xl md:max-w-3xl border-4 border-gray-500 rounded-3xl mx-auto my-4 p-4 ">
      <PrismicImage
        field={slice.primary.image}
        className="h-48 w-full md:w-1/3 object-contain"
      />
      <div className="w-full md:w-2/3 break-words md:text-unset">
        <div className="text-xl  md:text-3xl text-center md:text-left">
          <PrismicRichText field={slice.primary.positionname} />
        </div>
        <div className="text-base md:text-xl mt-4">
          <PrismicRichText field={slice.primary.description} />
        </div>
        <div className="flex justify-end mt-4">
          <PrismicLink
            field={slice.primary.detail_link}
            className="bg-ap-green px-4 py-2 rounded text-white inline-block "
          >
            詳細を確認する
          </PrismicLink>
        </div>
      </div>
    </div>
  </div>
)

export default JobPosition
