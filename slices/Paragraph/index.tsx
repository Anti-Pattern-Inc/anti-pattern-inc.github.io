import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

export type ParagraphProps = SliceComponentProps<Content.ParagraphSlice>

const Paragraph = ({ slice }: ParagraphProps) => (
  <section>
    <h3 className="font-bold">{slice.primary.title}</h3>
    <div className="flex flex-col">
      {slice.items.map((item, key) => {
        return (
          <PrismicRichText field={item.content} key={key}></PrismicRichText>
        )
      })}
    </div>
  </section>
)

export default Paragraph
