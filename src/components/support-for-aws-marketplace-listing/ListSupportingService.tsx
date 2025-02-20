import { Dialog } from '@headlessui/react'
import { Break } from 'components/common/Break'
import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'

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
          AWS Marketplace掲載支援
          <Break type="md-pc-none" />
          サービスとは
        </h2>
        <div className="md:mx-auto mx-4">
          <p className="text-gray-700 md:mb-6 mb-4 text-left md:text-xl md:leading-8 text-base leading-6">
            AWS アドバンストティアサービスパートナー及び、SaaS
            コンピテンシーパートナーとして、 お客様の SaaS 製品を AWS
            Marketplace にスムーズに掲載するためサービスを提供しております。
            SaaS 導入事業者として、自社 SaaS
            製品を掲載した経験と実績に基づいたノウハウで、 AWS Marketplace
            へ掲載できる状態のプロダクト開発を支援し、販売拡大に寄与いたします。
          </p>
        </div>
        {children}
        <div className="flex justify-center px-8 md:mt-10 mt-6">
          <button
            className="bg-orange-500 text-white py-3 px-8 rounded-full hover:bg-orange-[#EF6C00] w-[274px] h-[56px] md:w-[322px] md:h-[64px] flex items-center justify-center md:gap-3 gap-2"
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
      <ContactForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export { ListSupportingService }

const ContactForm = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-10"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
            <Dialog.Title className="text-lg font-medium text-[#0277BD]">
              お問い合わせ
            </Dialog.Title>
            <form className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  メールアドレス<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                  placeholder="info@anti-pattern.co.jp"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  会社名<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                  placeholder="株式会社アンチパターン"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  電話番号<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                  placeholder="0368856136"
                  required
                />
              </div>
              <div className="flex space-x-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    姓<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    placeholder="小笹"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    名<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    placeholder="佑京"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  お問い合わせ内容<span className="text-red-500">*</span>
                </label>
                <textarea
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                  placeholder="お問い合わせ内容を入力してください"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 flex items-center gap-2"
                >
                  <Image
                    src="/send-icon.png"
                    alt="送信"
                    width={24}
                    height={24}
                  />
                  送信
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}
