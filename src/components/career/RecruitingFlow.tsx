const RecruitingFlow = () => {
  return (
    <section className="my-28 text-gray-600">
      <h2 className="mb-4 md:mb-8 font-bold text-ap-green text-2xl text-center">
        採用フロー
      </h2>
      <div className="flex justify-center items-center flex-col md:flex-row gap-2 w-4/5 md:w-full m-auto px-4">
        <div className="flex items-center justify-center h-40 text-lg font-bold bg-ap-green bg-opacity-10 w-full md:w-48 text-center rounded-2xl px-1">
          <p>カジュアル面談</p>
        </div>
        <span className="border-l-[22px] border-t-[11px] border-b-[11px] box-border border-y-transparent border-l-ap-green transform rotate-90 md:rotate-0"></span>
        <div className="flex items-center justify-center h-40 text-lg font-bold bg-ap-green bg-opacity-10 w-full md:w-48 text-center rounded-2xl px-1">
          <p>応募意思確認</p>
        </div>
        <span className="border-l-[22px] border-t-[11px] border-b-[11px] box-border border-y-transparent border-l-ap-green transform rotate-90 md:rotate-0"></span>
        <div className="flex items-center justify-center h-40 text-lg font-bold bg-ap-green bg-opacity-10 w-full md:w-48 text-center rounded-2xl px-1">
          <p>
            面接
            <br />
            （2〜4回）
          </p>
        </div>
        <span className="border-l-[22px] border-t-[11px] border-b-[11px] box-border border-y-transparent border-l-ap-green transform rotate-90 md:rotate-0"></span>
        <div className="flex items-center justify-center h-40 text-lg font-bold bg-ap-green bg-opacity-10 w-full md:w-48 text-center rounded-2xl px-1">
          <p>内定</p>
        </div>
      </div>
      <div className="flex justify-end text-sm font-bold w-[90%] max-w-5xl m-auto mt-4">
        <p>※選考は全てWebで実施します</p>
      </div>
      <p className="text-lg md:text-2xl font-bold text-center mt-10 leading-8 md:leading-10 mx-2 md:mx-0">
        これからのアンチパターン社を一緒に創り、
        <br />
        共にソフトウェアエンジニアの生きる世界を変えませんか。
      </p>
    </section>
  )
}

export { RecruitingFlow }
