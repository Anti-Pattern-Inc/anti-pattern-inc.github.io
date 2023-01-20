import Kotani from 'images/kotani.jpg'
import Ozasa from 'images/ozasa.jpg'
import Shinoda from 'images/shinoda.jpg'
import Tsukamoto from 'images/tsukamoto.jpg'
import Yagasaki from 'images/yagasaki.jpg'
import Yamazaki from 'images/yamazaki.jpg'
import Image from 'next/image'

const members = [
  {
    img: Ozasa,
    name: '小笹 佑京',
    en_name: 'YUKI OZASA',
    position: '代表取締役 CEO 兼 VPoE',
    content: `立教大学卒業後、2014年に (株)イノベーションに入社
    イノベーションでは、マーケティングオートメーション ツール開発業務に従事
    2015年全社MVPを受賞 2017年よりマネジャー職 2018年より開発本部⻑歴任
    2019年7月当社を起業`,
  },
  {
    img: Shinoda,
    name: '信田 健児',
    en_name: 'KENJI SHINODA',
    position: '取締役',
    content: `2002年に(株)日立システム アンドサービス(現日立 ソリューションズ)に入社
    2008年にアクセンチュア (株)に入社 2014年よりマネジャー職
    2017年10月に(株) イノベーションに入社
    2018年より同社執行役員及び 同社取締役を歴任
    2019年7月当社取締役に就任
    `,
  },
  {
    img: Kotani,
    name: '小谷 悠一',
    en_name: 'YUICHI KOTANI',
    position: '取締役',
    content: `14歳の時、初めて手にしたコンピュータをキッカケにソフトウェアエンジニアとして活躍。
    2017年夏、知人の紹介で株式会社イノベーションへ参画。
    2019年7月株式会社アンチパターン入社。
    2020年5月当社取締役に就任。`,
  },
  {
    img: Tsukamoto,
    name: '塚本 岳史',
    en_name: 'TAKESHI TSUKAMOTO',
    position: '取締役',
    content: `理工学部出身。プログラミングは大学で習得し、エンジニアとしてキャリアをスタート。
    2017年夏、知人の紹介で株式会社イノベーションへ参画。
    2019年7月株式会社アンチパターン入社。
    2020年5月当社取締役に就任。`,
  },
  {
    img: Yagasaki,
    name: '矢ヶ崎 哲宏',
    en_name: 'AKIHIRO YAGASAKI',
    position: '取締役 CTO 兼 COO',
    content: `幼少時のマイコン時代からプログラミングを続け、近年ではWebメディア・SaaS ベンダーでの技術責任者・ボードメンバーとしてマザーズ上場時を経験。
    直近では、アマゾン ウェブ サービス ジャパン株式会社にてSaaSを専門領域としたシニアパートナーソリューションアーキテクトとして、アーキテクティング支援とともにイベントでの登壇やトレーニングも多数実施。
    2021年6月、株式会社アンチパターンの取締役CTO兼COOに就任。`,
  },
  {
    img: Yamazaki,
    name: '山﨑 浩史',
    en_name: 'HIROFUMI YAMAZAKI',
    position: '監査役',
    content: `1990年(株)クラレ入社。
    2000年トランス・コスモス株式会社入社。
    2005年株式会社ザッパラス取締役就任。2010年同社監査役就任。
    2013年株式会社バロックジャパンリミテッド入社。
    2018年株式会社イノベーション取締役就任。
    2019年7月当社監査役に就任。`,
  },
]

export default function Members() {
  return (
    <section className="mt-28">
      <h2 className="mt-10 mb-8 font-bold text-ap-green text-2xl text-center">
        MEMBERS
      </h2>
      <div className="flex flex-wrap gap-16 justify-evenly px-6 max-w-5xl mx-auto">
        {members.map((member) => {
          return (
            <div className="w-64 mb-16" key={member.name}>
              <div className="relative">
                <Image src={member.img} alt={member.name} />
                <h3 className="absolute -bottom-4 ml-0.5 font-bold text-3xl text-ap-green w-32 tracking-widest">
                  {member.en_name}
                </h3>
              </div>
              <p className="text-sm font-bold mt-8">{member.position}</p>
              <p className="font-bold mt-3">{member.name}</p>
              <p className="whitespace-pre-line text-sm leading-6 mt-3 text-neutral-500">
                {member.content}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
