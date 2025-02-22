import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

const Form = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <form className="mt-4 space-y-4 md:w-[648px] w-[310px]">
      <div className="flex justify-between md:items-center gap-2 md:gap-4 flex-col md:flex-row">
        <label className="block text-sm md:text-base font-medium text-gray-700">
          メールアドレス<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          className="block w-full border border-gray-300 rounded-md md:max-w-[500px] focus:outline-none h-14 placeholder:text-[black/60] placeholder:text-base placeholder:pl-2"
          placeholder="info@anti-pattern.co.jp"
          required
        />
      </div>
      <div className="space-y-2 md:flex md:justify-between md:items-center md:gap-4">
        <label className="block text-sm md:text-base font-medium text-gray-700">
          会社名<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="block w-full border border-gray-300 rounded-md md:max-w-[500px] focus:outline-none h-14 placeholder:text-[black/60] placeholder:text-base placeholder:pl-2"
          placeholder="株式会社アンチパターン"
          required
        />
      </div>
      <div className="space-y-2 md:flex md:justify-between md:items-center md:gap-4">
        <label className="block text-sm md:text-base font-medium text-gray-700">
          電話番号<span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          className="block w-full border border-gray-300 rounded-md md:max-w-[500px] focus:outline-none h-14 placeholder:text-[black/60] placeholder:text-base placeholder:pl-2"
          placeholder="0368856136"
          required
        />
      </div>
      <div className="space-y-2 md:flex md:justify-between md:items-center md:gap-4">
        <div className="flex flex-row gap-2">
          <p className="text-base md:text-lg font-medium text-gray-700">
            お名前
          </p>
          <span className="text-red-500">*</span>
        </div>
        <div className="flex gap-4 items-center">
          <label className="block text-sm md:text-base font-medium text-gray-700">
            性
          </label>
          <input
            type="text"
            className="block w-full border border-gray-300 rounded-md md:max-w-[500px] focus:outline-none h-14 placeholder:text-[black/60] placeholder:text-base placeholder:pl-2"
            placeholder="小笹"
            required
          />
        </div>
        <div className="flex gap-4 items-center">
          <label className="block text-sm md:text-base font-medium text-gray-700">
            名
          </label>
          <input
            type="text"
            className="block w-full border border-gray-300 rounded-md md:max-w-[500px] focus:outline-none h-14 placeholder:text-[black/60] placeholder:text-base placeholder:pl-2"
            placeholder="佑京"
            required
          />
        </div>
      </div>
      <div className="space-y-2 md:flex md:justify-between md:items-start md:gap-4">
        <label className="block text-sm md:text-base font-medium text-gray-700 md:pt-2">
          お問い合わせ内容<span className="text-red-500">*</span>
        </label>
        <textarea
          className="block w-full border border-gray-300 rounded-md md:max-w-[491px] focus:outline-none h-14 min-h-[160px]"
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
