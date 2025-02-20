import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

const ContactDialog = ({
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

export { ContactDialog }
