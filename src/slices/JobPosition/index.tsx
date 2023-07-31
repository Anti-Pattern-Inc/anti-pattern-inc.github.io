import { Content } from '@prismicio/client'
import {
  PrismicImage,
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react'
import RightUpArrow from 'images/right_up_arrow_icon.svg'
import Image from 'next/image'
import React from 'react'

/**
 * @typedef {import("@prismicio/client").Content.JobPositionSlice} JobPositionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<JobPositionSlice>} JobPositionProps
 * @param { JobPositionProps }
 */

export type JobPositionProps = SliceComponentProps<Content.JobPositionSlice>

const JobPosition = ({ slice }: JobPositionProps) => (
  <PrismicLink
    field={slice.primary.detail_link}
    className="flex flex-col-reverse md:flex-row items-end md:items-start md:justify-between w-4/5 md:w-[750px] mx-auto p-4 first:border-t-2 border-b-2 hover:bg-gray-100 duration-300 group"
  >
    <div className="flex flex-col md:flex-row w-full gap-4 items-center">
      <PrismicImage
        field={slice.primary.image}
        className="w-36 object-contain"
      />
      <div className="break-words md:text-unset text-gray-500">
        <div className="text-xl md:text-2xl text-center md:text-left font-bold">
          <PrismicRichText field={slice.primary.positionname} />
        </div>
        <div className="text-base md:text-lg mt-4 line-clamp-3">
          <PrismicRichText field={slice.primary.description} />
        </div>
      </div>
    </div>
    <Image
      src={RightUpArrow}
      alt=""
      className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition duration-300"
    />
  </PrismicLink>
)

export default JobPosition
