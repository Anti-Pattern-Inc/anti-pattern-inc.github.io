type OutlineContent = {
  title: string
  content: string
}

const outline1: ReadonlyArray<OutlineContent> = [
  {
    title: '会社名',
    content: '株式会社アンチパターン Anti-Pattern Inc.',
  },
  {
    title: '設立',
    content: '2019年7月1日',
  },
  {
    title: '代表者名',
    content: '小笹佑京 Yuki Ozasa',
  },
  {
    title: '所在地',
    content: '東京都港区南⻘山3-15-9 MINOWA表参道3階',
  },
  {
    title: '代表番号',
    content: '03-6885-6136',
  },
]

const outline2: ReadonlyArray<OutlineContent> = [
  {
    title: '社員数',
    content: '25名 (2021年8月1日時点)',
  },
  {
    title: '資本金',
    content: '64,500千円',
  },
  {
    title: '主要株主',
    content: '小笹佑京',
  },
  {
    title: '労働者派遣',
    content: '派13-314618',
  },
  {
    title: '職業紹介',
    content: '13-ユ-311813',
  },
]

type Props = {
  outline: ReadonlyArray<OutlineContent>
}

const OutlineFrag = ({ outline }: Props) => {
  return (
    <div>
      {outline.map((item, key) => {
        return (
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
        )
      })}
    </div>
  )
}

const Outline = () => {
  return (
    <section className="px-6">
      <h2 className="pt-10 mb-8 font-bold text-ap-green text-2xl text-center">
        OUTLINE
      </h2>
      <div className="lg:grid grid-cols-2 gap-16 max-w-2xl lg:max-w-5xl mx-auto">
        <div className="border-t-2 border-stone-200">
          <OutlineFrag outline={outline1} />
        </div>
        <div className="lg:border-t-2 border-stone-200">
          <OutlineFrag outline={outline2} />
        </div>
      </div>
    </section>
  )
}

export { Outline }
