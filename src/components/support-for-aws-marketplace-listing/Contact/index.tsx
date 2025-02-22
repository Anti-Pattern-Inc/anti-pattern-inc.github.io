import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

const Form = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <form className="mt-4 space-y-4 md:w-[648px]">
      <div className="space-y-2 flex justify-between items-center gap-4">
        <label className="block text-sm md:text-base font-medium text-gray-700">
          メールアドレス<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm md:max-w-[500px]"
          placeholder="info@anti-pattern.co.jp"
          required
        />
      </div>
      <div className="space-y-2 flex justify-between items-center gap-4">
        <label className="block text-sm md:text-base font-medium text-gray-700">
          会社名<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm md:max-w-[500px]"
          placeholder="株式会社アンチパターン"
          required
        />
      </div>
      <div className="space-y-2 flex justify-between items-center gap-4">
        <label className="block text-sm md:text-base font-medium text-gray-700">
          電話番号<span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm md:max-w-[500px]"
          placeholder="0368856136"
          required
        />
      </div>
      <div className="flex space-x-2">
        <div className="flex-1">
          <label className="block text-sm md:text-base font-medium text-gray-700">
            お名前<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm md:max-w-[500px]"
            placeholder="小笹"
            required
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm md:text-base font-medium text-gray-700">
            名<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm md:max-w-[500px]"
            placeholder="佑京"
            required
          />
        </div>
      </div>
      <div className="space-y-2 flex">
        <label className="block text-sm md:text-base font-medium text-gray-700">
          お問い合わせ内容<span className="text-red-500">*</span>
        </label>
        <textarea
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm md:max-w-[500px]"
          placeholder="お問い合わせ内容を入力してください"
          required
        ></textarea>
      </div>
      <div className="flex gap-4 items-start justify-between">
        <button
          type="button"
          className="py-2 px-4 text-[#2196F3] hover:bg-[#E3F2FD]"
          onClick={() => setIsOpen(false)}
        >
          キャンセル
        </button>
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 flex items-center gap-2"
        >
          <Image src="/send-icon.png" alt="送信" width={24} height={24} />
          送信
        </button>
      </div>
    </form>
  )
}

export { Form }
