// ContainerComponent.tsx
import { zodResolver } from '@hookform/resolvers/zod'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { FormPresentation } from './presentation'

type FormData = {
  email: string
  Company: string
  phone: string
  last_name: string
  first_name: string
  comments: string
}

const schema: z.ZodType<FormData> = z.object({
  email: z
    .string()
    .email({ message: 'メールアドレスが不正です' })
    .min(1, { message: '必須項目です' }),
  Company: z.string().min(1, { message: '必須項目です' }),
  phone: z
    .string()
    .min(1, { message: '必須項目です' })
    .regex(/^\d{10,11}$/, {
      message:
        '電話番号は、ハイフン（-）を入れずに10桁か11桁で記入してください',
    }),
  last_name: z.string().min(1, { message: '必須項目です' }),
  first_name: z.string().min(1, { message: '必須項目です' }),
  comments: z
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
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      Company: '',
      phone: '',
      last_name: '',
      first_name: '',
      comments: '',
    },
  })

  return (
    <FormPresentation
      register={register}
      errors={errors}
      isSubmitting={isSubmitting}
      setIsOpen={setIsOpen}
      isValid={isValid}
    />
  )
}

export { FormContainer }
