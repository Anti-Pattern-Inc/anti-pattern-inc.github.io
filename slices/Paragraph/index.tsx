import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

export type ParagraphProps = SliceComponentProps<Content.ParagraphSlice>

const Paragraph = ({ slice }: ParagraphProps) => {
  switch (slice.variation) {
    case 'default':
      return (
        <section className="paragraph">
          <div>
            {slice.items.map((item, key) => {
              return (
                <div
                  key={key}
                  className={
                    key > 0 ? 'border-t-4 border-stone-100 mt-16 pt-12' : ''
                  }
                >
                  <PrismicRichText field={item.content}></PrismicRichText>
                </div>
              )
            })}
          </div>
        </section>
      )
    case 'interview':
      return (
        slice.variation === 'interview' && (
          <section className="interview">
            <div>
              {slice.items.map((item, key) => {
                return (
                  <div key={key}>
                    <h3>{item.title}</h3>
                    <PrismicRichText field={item.content}></PrismicRichText>
                  </div>
                )
              })}
            </div>
          </section>
        )
      )
  }
}

export default Paragraph
