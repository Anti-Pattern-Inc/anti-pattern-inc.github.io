// Form.tsx
import Image from 'next/image'
import React from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface FormProps {
  register: UseFormRegister<any>
  errors: FieldErrors
  isSubmitting: boolean
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
  isValid: boolean
}

const FormPresentation: React.FC<FormProps> = ({
  register,
  errors,
  isSubmitting,
  setIsOpen,
  isValid,
}) => {
  return (
    <form
      className="mt-4 space-y-4 md:w-[648px] w-[310px]"
      method="POST"
      action="https://account-engagement.anti-pattern.co.jp/l/985311/2025-01-14/2fdw8b"
    >
      <div className="flex justify-between md:items-center gap-2 md:gap-4 flex-col md:flex-row">
        <label className="block text-sm md:text-base font-medium text-gray-700">
          メールアドレス<span className="text-red-500">*</span>
        </label>
        <div className="flex flex-col flex-1 md:max-w-[500px]">
          <input
            type="email"
            className="block w-full border border-gray-300 rounded-md focus:outline-none h-14 placeholder:text-[black/60] placeholder:text-base pl-2"
            placeholder="info@anti-pattern.co.jp"
            {...register('email')}
          />
          {errors?.email && (
            <span className="text-[#D32F2F] text-xs">
              {errors.email.message?.toString()}
            </span>
          )}
        </div>
      </div>
      <div className="space-y-2 md:flex md:justify-between md:items-center md:gap-4">
        <label className="block text-sm md:text-base font-medium text-gray-700">
          会社名<span className="text-red-500">*</span>
        </label>
        <div className="flex flex-col flex-1 md:max-w-[500px]">
          <input
            type="text"
            className="block w-full border border-gray-300 rounded-md focus:outline-none h-14 placeholder:text-[black/60] placeholder:text-base pl-2"
            placeholder="株式会社アンチパターン"
            {...register('Company')}
          />
          {errors?.Company && (
            <p className="text-[#D32F2F] text-xs">
              {errors.Company.message?.toString()}
            </p>
          )}
        </div>
      </div>
      <div className="space-y-2 md:flex md:justify-between md:items-center md:gap-4">
        <label className="block text-sm md:text-base font-medium text-gray-700">
          電話番号<span className="text-red-500">*</span>
        </label>
        <div className="flex flex-col flex-1 md:max-w-[500px]">
          <input
            type="tel"
            className="block w-full border border-gray-300 rounded-md focus:outline-none h-14 placeholder:text-[black/60] placeholder:text-base pl-2"
            placeholder="0312345678"
            {...register('phone')}
          />
          {errors?.phone && (
            <p className="text-[#D32F2F] text-xs">
              {errors.phone.message?.toString()}
            </p>
          )}
        </div>
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
          <div className="flex flex-col flex-1">
            <input
              type="text"
              className="block w-full border border-gray-300 rounded-md md:max-w-[500px] focus:outline-none h-14 placeholder:text-[black/60] placeholder:text-base pl-2"
              placeholder="山田"
              {...register('last_name')}
            />
            {errors?.last_name && (
              <p className="text-[#D32F2F] text-xs">
                {errors.last_name.message?.toString()}
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <label className="block text-sm md:text-base font-medium text-gray-700">
            名
          </label>
          <div className="flex flex-col flex-1">
            <input
              type="text"
              className="block w-full border border-gray-300 rounded-md md:max-w-[500px] focus:outline-none h-14 placeholder:text-[black/60] placeholder:text-base pl-2"
              placeholder="太郎"
              {...register('first_name')}
            />
            {errors?.first_name && (
              <p className="text-[#D32F2F] text-xs">
                {errors.first_name.message?.toString()}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="space-y-2 md:flex md:justify-between md:items-start md:gap-4">
        <label className="block text-sm md:text-base font-medium text-gray-700 md:pt-2">
          お問い合わせ内容<span className="text-red-500">*</span>
        </label>
        <div className="flex flex-col flex-1">
          <textarea
            className="block w-full border border-gray-300 rounded-md md:max-w-[491px] focus:outline-none h-14 min-h-[160px] pl-2"
            {...register('comments')}
          ></textarea>
          {errors?.comments && (
            <p className="text-[#D32F2F] text-xs">
              {errors.comments.message?.toString()}
            </p>
          )}
        </div>
      </div>
      <div
        className={`flex gap-4 items-start ${
          setIsOpen ? 'justify-between' : 'justify-center'
        } `}
      >
        {setIsOpen && (
          <button
            type="button"
            className="py-2 px-4 text-[#2196F3] hover:bg-[#E3F2FD]"
            onClick={() => setIsOpen(false)}
            disabled={isSubmitting}
          >
            キャンセル
          </button>
        )}
        {isSubmitting ? (
          <button
            type="submit"
            className="bg-[#0000001F/12] text-white py-2 px-4 rounded-full hover:bg-orange-600 flex items-center gap-2"
            disabled={isSubmitting || !isValid}
          >
            <div className="inline-block w-6 h-6 animate-spin">
              <Image src="/loading.svg" alt="送信" width={24} height={24} />
            </div>
            送信
          </button>
        ) : (
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 flex items-center gap-2"
            disabled={isSubmitting || !isValid}
          >
            <Image src="/send-icon.png" alt="送信" width={24} height={24} />
            送信
          </button>
        )}
      </div>
    </form>
  )
}

export { FormPresentation }
