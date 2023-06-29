const RecruitingFlow = () => {
  return (
    <section className="py-20">
      <h2 className="mb-4 md:mb-8 font-bold text-ap-green text-2xl text-center">
        採用フロー
      </h2>
      <div className="flex justify-center items-center gap-2 w-4/5 m-auto">
        <div className="flex items-center justify-center h-40 text-3xl bg-ap-green bg-opacity-40 w-1/5 text-center rounded-2xl">
          <p>カジュアル面談</p>
        </div>
        <span className="h-6 border-l-[48px] border-t-[24px] border-b-[24px] box-border border-y-transparent border-l-ap-green transform rotate-90 md:rotate-0"></span>
        <div className="flex items-center justify-center h-40 text-3xl bg-ap-green bg-opacity-40 w-1/5 text-center rounded-2xl">
          <p>応募意思確認</p>
        </div>
        <span className="h-6 border-l-[48px] border-t-[24px] border-b-[24px] box-border border-y-transparent border-l-ap-green transform rotate-90 md:rotate-0"></span>
        <div className="flex items-center justify-center h-40 text-3xl bg-ap-green bg-opacity-40 w-1/5 text-center rounded-2xl">
          <p>
            面接
            <br />
            (2〜4回)
          </p>
        </div>
        <span className="h-6 border-l-[48px] border-t-[24px] border-b-[24px] box-border border-y-transparent border-l-ap-green transform rotate-90 md:rotate-0"></span>
        <div className="flex items-center justify-center h-40 text-3xl bg-ap-green bg-opacity-40 w-1/5 text-center rounded-2xl">
          <p>内定</p>
        </div>
      </div>
      <div className="flex justify-end">
        <p>※選考は全てWebで実施します</p>
      </div>
      <p className="text-5xl text-center">
        これからアンチパターンを一緒に創り、
        <br />
        共にソフトウェアエンジニアの生きる世界を変えませんか。
      </p>
    </section>
  )
}

export { RecruitingFlow }
