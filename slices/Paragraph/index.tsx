import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

export type ParagraphProps = SliceComponentProps<Content.ParagraphSlice>

const Paragraph = ({ slice }: ParagraphProps) => (
  <section className="paragraph">
    <div>
      {slice.items.map((item, key) => {
        return (
          <div
            key={key}
            className={key > 0 ? 'border-t-4 border-stone-100 mt-16 pt-12' : ''}
          >
            <PrismicRichText field={item.content}></PrismicRichText>
          </div>
        )
      })}
    </div>
  </section>
)

export default Paragraph
