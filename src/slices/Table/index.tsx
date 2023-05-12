import { Content } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import React from 'react'

export type TableProps = SliceComponentProps<Content.TableSlice>

const Table = ({ slice }: TableProps) => (
  <>
    <h4 className="font-bold text-xl md:text-2xl mt-8 mb-3 pb-1 border-b-ap-green border-b-[3px]">
      {slice.primary.title}
    </h4>
    <table className="text-left w-full mb-3">
      <tbody>
        {slice.items.map((item, index) => (
          <tr key={index} className="border-[1px]">
            <th className="bg-gray-100 border-r-[1px] px-3 py-2">
              {item.table_header}
            </th>
            <td className="px-3 py-2 table-data">
              <PrismicRichText field={item.table_data} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="leading-6 min-h-[12px] text-sm text-[#333333]">
      <PrismicRichText field={slice.primary.description} />
    </div>
  </>
)

export default Table
