import React, { Dispatch, SetStateAction } from 'react';
import { Break } from 'components/common/Break';
import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle, Button } from '@headlessui/react';
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
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} as="div" className="relative z-10 focus:outline-none">
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle as="h3" className="text-base/7 font-medium text-white">
              お問い合わせ
            </DialogTitle>
            <p className="mt-2 text-sm/6 text-white/50">
              Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
              order.
            </p>
            <div className="mt-4">
              <Button
                className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Got it, thanks!
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
