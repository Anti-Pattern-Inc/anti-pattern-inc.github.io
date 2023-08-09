type Props = {
  title: string
  content: string
}

const PolicyContent = ({ title, content }: Props) => {
  return (
    <>
      <h3 className="pt-7 pb-3 text-lg font-bold">{title}</h3>
      <p className="text-sm leading-6 text-gray-700">{content}</p>
    </>
  )
}

export { PolicyContent }
