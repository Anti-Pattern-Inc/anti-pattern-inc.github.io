import { Form } from './Contact/index'

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 md:gap-10 py-10 md:py-20 bg-white">
      <h2 className="text-2xl md:text-[34px] md:leading-tight text-[#0277BD] font-bold">
        お問い合わせ
      </h2>
      <Form />
    </section>
  )
}

export { Contact }
