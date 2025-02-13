import React, { Dispatch, SetStateAction } from 'react';
import { Break } from 'components/common/Break';
import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle, Input, } from '@headlessui/react';
import Image from 'next/image';

const ListSupportingService: React.FC = ({ children }: { children?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="bg-white max-w-lg md:max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-[#0277BD] mb-8 text-center">
          AWS Marketplace
          <Break type="md-pc-none" />
          掲載支援サービスとは
        </h2>
        <div className="px-8 mx-auto">
          <p className="text-gray-700 mb-6 text-left">
            AWS アドバンストティアサービスパートナー及び、SaaS コンピテンシーパートナーとして、
            お客様の SaaS 製品を AWS Marketplace にスムーズに掲載するためサービスを提供しております。
            SaaS 導入事業者として、自社 SaaS 製品を掲載した経験と実績に基づいたノウハウで、
            AWS Marketplace へ掲載できる状態のプロダクト開発を支援し、販売拡大に寄与いたします。
          </p>
        </div>
        {children}
        <div className="flex justify-center px-8">
          <button className="bg-orange-500 text-white py-3 px-8 rounded-full hover:bg-orange-[#EF6C00] w-[358px] h-[56px] md:w-[322px] md:h-[64px] flex items-center justify-center gap-3" onClick={() => setIsOpen(true)}>
            <Image src="/mail-icon.png" alt="お問い合わせ" width={24} height={24} />
            <span className="text-xl">お問い合わせはこちら</span>
          </button>
        </div>
      </div>
      <ContactForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export { ListSupportingService }

const ContactForm = ({ isOpen, setIsOpen }: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-10">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
            <DialogTitle className="text-lg font-medium text-[#0277BD]">
              お問い合わせ
            </DialogTitle>
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
                <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 flex items-center gap-2">
                  <Image src="/send-icon.png" alt="送信" width={24} height={24} />
                  送信
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
