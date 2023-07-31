type PhilosophyLists = {
  title: string
  description: string
}

const philosophyLists: ReadonlyArray<PhilosophyLists> = [
  {
    title: '価値観または「仁」 - 仕事も遊びのうち(Work as Play)',
    description:
      '私たちはポジティブな就労観もしくは、就労しているという感覚ではなく活動をしていくことが、創造的な営みに繋がると認識しています。また、人によってはどう仕事を面白くできるか、高杉晋作の「おもしろきこともなき世をおもしろく」という観点でこの言葉と向き合うことも想像できます。',
  },
  {
    title: '価値観または「仁」 - 信頼(Trust)',
    description:
      '物事を成し遂げるのには多くのステークホルダーと関係を持つ必要があります。その中で、集団としての活動を行う前提には信頼が必要である。私たちはお互いをまず信頼し、信頼されるという真のパートナーシップによって、信頼が前提にない集団において発生してしまうようなあらゆるコストを下げ、アジリティを持って活動を行うことができます。しかし、人間は過ちを犯す生き物であるため、無為に信用をするようなシステムであってはならないことに注意しておく必要があります。また、多くの場合、1対1の信頼関係を構築するのには継続的な行為による蓄積が必要であるため時間を要することを念頭に置かなければなりません。集団においては信頼できる個人が信頼している個人を信頼できる、というような信頼のバトンパスが可能になるため、一定規模の信頼を得た個人同士の繋がりがあれば時間を要せず関係を構築できる場合もあります。何にせよまずは礼を重んじ、対象者を尊重するような行為を心がけ信頼をし合える関係を作ることが重要です。',
  },
  {
    title: '価値観または「仁」 - 平等(Equality)',
    description:
      '私たちの理想を実現する世界においては、実力がある人がしっかりとその評価や報酬を受け取れるような正しさを求めた自然的な「階級」もしくは「差」が生まれることを目指していきます。その過程で人種などによる差別や政治的な理由のみによる評価などが入り込まず、平等であることが求められます。平等とは同じことではなく、正しさを求めてお互いが違うということを認め合える状態です。',
  },
  {
    title: '行動指針または「礼」 - 主体性を発揮する(Ownership)',
    description:
      '理念実現に向けては、朝令暮改やお互いの責任範囲が曖昧な状態というのは発生し得ます。それでも何かを成し遂げる、もしくはチームとしての全体最適を行えるだけの行動を一人一人が取れるようにこの指針はあります。',
  },
  {
    title: '行動指針または「礼」 - 学び続ける',
    description:
      '世の中は変化し続けるものであるし、私たち自身が変化を起こしていくようなものです。その中において、常に自らも変化させていき適応していくことが重要になる。哲学者の千葉雅也氏も言うように「勉強とは、自己破壊」であり、養老孟司氏でいえば「知ることは自分が変わること」なのであり、特に「Work as Play」でいるには重要な指針です。「自ら機会を作り出し、自らを変えよ」とはリクルート創業者である江添氏の言葉でありますが、これらを鑑みるにまずは自らが変わることが求められているのです。',
  },
  {
    title: '行動指針または「礼」 - 愛すべきプロダクトを作り続ける',
    description:
      '愛は尊いものですが、不断の努力が必要なものでもあります。私たちはプロダクトを介して世の中を変革していきますが、そのプロダクトとその先にいるユーザーに対して誠実であるためにも愛すべきプロダクトを作り、そして、届け続ける意識が必要です。',
  },
  {
    title: '行動指針または「礼」 - 透明性を保つ',
    description:
      'スクラムの3本柱として「透明性・検査・適応」というものがあります。始まりは透明性であり、見える化されることによってカイゼンが進む上、健全性を保ちリスクを低減することができます。しかし、あらゆる情報がオープンでなくてはならないということを意味しない。人事情報や個人のプライバシーに関わる情報など当然秘匿される必要があるものも存在します。また、思考の途中段階のもので、精査のされていない語弊を生むリスクのある情報なども適切に管理される必要があります(当然それを承知の上でオープンにすることもあり得る)。重要なのは、オープンであればそれが正しく伝わるというものではなく、発信には受け取り手の視点を意識する必要があるということを理解することdす。多くの情報はオープンであることの方が効果的なものであることを認めつつも、情報の取り扱いについては少なくともその情報を抱えるメンバー同士でどう取り合うべきか議論する必要があります。その上で、透明性を保つ努力をしなくてはなりません。',
  },
  {
    title: '行動指針または「礼」 - 個人よりチーム',
    description:
      '「早く行きたければ、一人で進め。 遠くまで行きたければ、みんなで進め」（if you want to go fast, go alone; if you want to go far, go together）、これはアフリカの諺です。私たちは遠き理想を追い求めるためチームで活動をします。チームファーストであるということは個人の利益よりもチームの利益を優先することです。',
  },
  {
    title: '行動指針または「礼」 - 100倍速',
    description:
      '理念の実現した姿を具現化していくのには、現実の延長戦から大きく離れて思考をし、時には夢想家でなくてはなりません。100倍速で何かを実現するのにはどうすればいいのか逆算して思考していくのが重要です。近い言葉を挙げるなら「楽観的に大きく構想し、悲観的に計画し、楽観的に実行せよ」でしょう。京セラや第二電電(現KDDI)の創業者である稲盛和夫氏の経営哲学の一つであります。夢想家として100倍速を思考しながら、しかし、それを事業として象っていく過程では自社と外的環境とを見回しながら、十分かつ冷静に打ち手の検討が必要となるのです。そうやって夢を実現するための計画を作ったとしても、実際には多くの場面に遭遇します。その際に、それでも折れずに邁進するのには夢を見ながら実直に活動のできるレンガ積み職人の心が必要です。',
  },
  {
    title: '行動指針または「礼」 - 迷ったらチャレンジする',
    description:
      '私たちの理念は実現するのに多くの障害を乗り越える必要があり、前例を疑い新しいものへとチャレンジする必要があります。しかしながら、チャレンジには時には理性ではなく直感を信じなければならない時があり、難しさを生んでいます。誰にとっても明確に分かっているようなことは世の中を変えるイノベーションに成り得ないのです。加えて、一朝一夕では成し得ません。長期間チャレンジし続けるにはチャレンジをする習慣を身につけることが重要であり、そしてその先にある失敗から学ぶことはアンチパターンの社名の意味合いにも近いニュアンスがあります。',
  },
  {
    title: '行動指針または「礼」 - 天に顔向けできないことはしない',
    description:
      '倫理を端的に表現した指針です。否定系を使い、最も強い言葉で自らを律するものであります。天というのは日本的な宗教観でもあるので、「家族」に置き換えて読んでも良いでしょう。',
  },
]

const Philosophy = () => {
  return (
    <section className="mt-28">
      <h2 className="mb-2 md:mb-4 font-bold text-ap-green text-2xl text-center">
        理念
      </h2>
      <h3 className="text-base sm:text-xl md:text-3xl font-bold text-center text-gray-600">
        日本のソフトウェアエンジニアを 憧れの職業へ
      </h3>
      <ul>
        {philosophyLists.map((philosophyList) => {
          return (
            <li
              key={philosophyList.title}
              className="md:max-w-[960px] my-5 mx-auto px-6 md:px-12"
            >
              <h2 className="text-ap-green md:text-2xl font-bold text-center mt-12">
                {philosophyList.title}
              </h2>
              <p className="text-gray-600 text-sm leading-8 font-bold text-center mt-2">
                {philosophyList.description}
              </p>
            </li>
          )
        })}
      </ul>
      <div className="flex justify-center md:justify-end md:max-w-[960px] mx-auto mt-4">
        <a
          href="https://miro.com/app/board/uXjVM5dO3UA=/?moveToWidget=3458764558645403355&cot=14"
          target="_blank"
          className="whitespace-nowrap rounded-full border border-transparent bg-ap-green md:mr-4 px-4 py-4 text-white shadow-sm"
          rel="noreferrer"
        >
          価値観と行動指針の構造を確認する
        </a>
      </div>
    </section>
  )
}

export { Philosophy }
