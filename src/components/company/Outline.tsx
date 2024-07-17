import { useLocale } from 'hooks/useLocale'

type OutlineContent = {
  title: string
  content: string
}

type Props = {
  outline: ReadonlyArray<OutlineContent>
}

const OutlineFrag = ({ outline }: Props) => {
  return (
    <div>
      {outline.map((item, key) => (
        <div key={key} className="border-b-2 border-stone-200">
          <div className="h-28 max-w-sm lg:max-w-none mx-auto grid grid-cols-5 items-center px-6">
            <p className="col-span-2 lg:col-span-1 text-sm font-bold pl-3">
              {item.title}
            </p>
            <p className="col-span-3 lg:col-span-4 text-sm font-bold pr-3">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

const Outline = () => {
  const t = useLocale()

  return (
    <section className="px-6">
      <h2 className="pt-10 mb-8 font-bold text-ap-green text-2xl text-center">
        OUTLINE
      </h2>
      <div className="lg:grid grid-cols-2 gap-16 max-w-2xl lg:max-w-5xl mx-auto">
        <div className="border-t-2 border-stone-200">
          <OutlineFrag outline={t.company.outline.outline1} />
        </div>
        <div className="lg:border-t-2 border-stone-200">
          <OutlineFrag outline={t.company.outline.outline2} />
        </div>
      </div>
    </section>
  )
}

export { Outline }
