import { Break } from 'components/common/Break'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

import { Dialog } from './Contact/Dialog'

const ListSupportingService: React.FC = ({
  children,
}: {
  children?: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="bg-white max-w-lg md:max-w-5xl mx-auto md:my-20 my-10">
        <h2 className="md:text-[34px] font-bold text-[#0277BD] md:mb-8 mb-6 text-center text-2xl">
          AWS Marketplace 掲載支援
          <Break type="md-pc-none" />
          サービスとは
        </h2>
        <div className="md:mx-auto mx-4">
          <p className="text-gray-700 md:mb-6 mb-4 text-left md:text-xl md:leading-8 text-base leading-6">
            AWS アドバンストティアサービスパートナー及び、SaaS
            コンピテンシーパートナーとして、 お客様の SaaS 製品を AWS
            Marketplace にスムーズに掲載するためサービスを提供しております。
            SaaS 提供事業者として、自社 SaaS
            製品を掲載した経験と実績に基づいたノウハウで、 AWS Marketplace
            へ掲載できる状態のプロダクト開発を支援し、販売拡大に寄与いたします。
          </p>
        </div>
        {children}
        <div className="flex justify-center px-8 md:mt-10 mt-6">
          <button
            className="bg-[#EF6C00] text-white py-3 px-8 rounded-full hover:bg-[#E65100] w-[274px] h-[56px] md:w-[322px] md:h-[64px] flex items-center justify-center md:gap-3 gap-2"
            onClick={() => setIsOpen(true)}
          >
            <Image
              src="/mail-icon.png"
              alt="お問い合わせ"
              width={30}
              height={30}
              className="hidden md:block"
            />
            <Image
              src="/mail-icon.png"
              alt="お問い合わせ"
              width={24}
              height={24}
              className="md:hidden"
            />
            <span className="md:text-xl text-base">お問い合わせはこちら</span>
          </button>
        </div>
      </div>
      <Dialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export { ListSupportingService }
