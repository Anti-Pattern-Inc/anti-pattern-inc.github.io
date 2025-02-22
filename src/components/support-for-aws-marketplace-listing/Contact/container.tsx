// ContainerComponent.tsx
import { zodResolver } from '@hookform/resolvers/zod'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { FormPresentation } from './presentation'

const schema = z.object({
  email: z
    .string()
    .email({ message: 'メールアドレスが不正です' })
    .min(1, { message: '必須項目です' }),
  companyName: z.string().min(1, { message: '必須項目です' }),
  phoneNumber: z
    .string()
    .min(1, { message: '必須項目です' })
    .regex(/^\d{10,11}$/, {
      message:
        '電話番号は、ハイフン（-）を入れずに10桁か11桁で記入してください',
    }),
  lastName: z.string().min(1, { message: '必須項目です' }),
  firstName: z.string().min(1, { message: '必須項目です' }),
  inquiry: z
    .string()
    .min(1, { message: '必須項目です' })
    .max(32000, { message: '32000文字以内で入力してください' }),
})

const FormContainer = ({
  setIsOpen,
}: {
  setIsOpen?: Dispatch<SetStateAction<boolean>>
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: any) => {
    // フォーム送信処理
    console.log(data)
  }

  return (
    <FormPresentation
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
      isSubmitting={isSubmitting}
      setIsOpen={setIsOpen}
    />
  )
}

export { FormContainer }
