type FAQType = {
  question: string
  answer: string
}

const FAQList: FAQType[] = [
  {
    question: 'AWS Marketplace 出品支援では何をどこまで委託可能か？',
    answer:
      'フェーズが2つに分かれていますが、最終的には「掲載可能な状態のプロダクトへ改修すること」をゴールとし、プロダクト開発のご支援が中心的な支援範囲となります。',
  },
  {
    question:
      '請求プロセスなど事務的な業務プロセスの改善は支援の中に含まれるか？',
    answer:
      'プロダクト開発が支援範囲のため含まれません。仮にご質問いただいた場合にはベストエフォートでの回答となります。また、場合によっては AWS 社の貴社担当者へ対応を引き継がせていただくこともございます。',
  },
  {
    question: '委託する際の範囲や単位は？',
    answer:
      'SaaS 製品一つに対してご契約をいただくことになります。複数製品の掲載支援をご相談いただく場合には、対象製品ごとに契約が発生いたします。',
  },
  {
    question: '委託開始のどれくらい前に発注する必要があるか？',
    answer:
      'ご発注いただいてから1週間後にはプロジェクトが開始できるよう努めますが、時期に応じてリソースの調整により対応可否が変わりますため明言することが叶いません。ご容赦ください。',
  },
  {
    question: '開発にどれくらいの期間かかるか？',
    answer:
      'オンボーディング処理の自動化状況や料金プランの複雑性など、貴社 SaaS のコンディションにより開発ボリュームは大きく異なります。「ヒアリング/設計フェーズ」の成果物において改めてご提案させていただきます。',
  },
  {
    question: '掲載作業（AWS Marketplace ポータルサイトの操作）を委託可能か？',
    answer:
      'プロダクト開発が支援範囲のため含まれません。但し、公開作業のドキュメントを送付した上で、画面共有いただきながら、適宜サポートをすることについては、ご要望いただけましたら個別に対応を検討いたします。',
  },
]

const FAQ = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 md:gap-10 py-10 md:py-20 bg-stone-100">
      <h2 className="text-2xl md:text-[34px] md:leading-tight text-[#0277BD] font-bold">
        よくあるご質問
      </h2>
      <dl className="flex flex-col gap-4 md:gap-6">
        {FAQList.map((faq, index) => (
          <div key={index} className="max-w-5xl rounded-lg tracking-[0.15px]">
            <dl className="md:text-xl md:leading-8 text-white font-bold bg-[#263238] p-6 rounded-t-lg">
              {faq.question}
            </dl>
            <dd className="text-sm md:text-base text-[#263238] bg-white p-6 rounded-b-lg">
              {faq.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export { FAQ }
