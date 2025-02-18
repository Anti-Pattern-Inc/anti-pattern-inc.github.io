import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { Break } from 'components/common/Break'
import AvailableInAWSMarketplace from 'images/available_in_aws_marketplace.png'
import Image from 'next/image'

const About = () => {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-10 max-w-5xl">
      <h2 className="text-2xl md:text-[34px] md:leading-tight text-[#0277BD] font-bold text-center">
        AWS Marketplace
        <span className="w-2 hidden sm:inline-block" />
        <Break type="sm-pc-none" />
        掲載支援サービスとは
      </h2>
      <div className="flex items-center gap-6 md:gap-10 flex-col">
        <p className="text-sm md:text-xl md:leading-8">
          AWS アドバンストティアサービスパートナー及び、SaaS
          コンピテンシーパートナーとして、お客様の SaaS 製品を AWS Marketplace
          にスムーズに掲載するためのサービスを提供しております。SaaS
          提供事業者として、自社 SaaS
          製品を掲載した経験と実績に基づいたノウハウで、AWS Marketplace
          へ掲載できる状態のプロダクト開発を支援し、販路拡大に寄与いたします。
        </p>
        <div className="font-bold text-2xl">
          費用対効果の高い実装方針の提案によりスムーズな掲載を実現
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="h-40 bg-[#039BE5] text-white text-base lg:text-xl lg:leading-8 font-bold flex items-center justify-center flex-1 p-4 md:pl-8 md:pr-0 md:py-0 text-center">
          AWS Marketplace
          掲載によるお客様のビジネスメリット（期待）についてヒアリングし、費用対効果のより良い実装方針を提案
        </div>
        <div className="flex items-center justify-center flex-col md:flex-row w-full md:w-auto">
          {/* pc版の矢印の実装, borderでの実装 */}
          <span className="w-0 h-0 hidden md:block border-l-[44px] border-t-[80px] border-b-[80px] border-y-transparent border-l-[#039BE5]"></span>
          <span className="w-0 h-0 hidden md:block border-l-[44px] border-t-[80px] border-b-[80px] border-x-transparent border-t-[#0277BD] border-b-[#0277BD] -ml-6"></span>
          {/* sp版での矢印の実装, clip-pathを用いた実装 */}
          <span className="md:hidden bg-[#039BE5] w-full h-8 [clip-path:polygon(0%_0%,50%_100%,100%_0%)]" />
          <span className="md:hidden bg-[#0277BD] w-full h-8 [clip-path:polygon(50%_100%,0%_0%,0%_100%,100%_100%,100%_0%)] -mt-5" />
        </div>
        <div className="w-full h-40 bg-[#0277BD] text-white text-base lg:text-xl lg:leading-8 font-bold flex items-center justify-center flex-1 p-4 md:p-2 text-center">
          提案の内容をもとに
          <Break type="md-pc-none" />
          インテグレーションを実装
        </div>
        {/* pc版の矢印の実装, borderでの実装 */}
        <span className="w-0 h-0 hidden md:block border-l-[44px] border-t-[80px] border-b-[80px] border-y-transparent border-l-[#0277BD]"></span>
        {/* sp版での矢印の実装, clip-pathを用いた実装 */}
        <span className="md:hidden bg-[#0277BD] w-full h-8 [clip-path:polygon(0%_0%,50%_100%,100%_0%)]" />
      </div>
      <button className="flex justify-center items-center gap-2 bg-[#EF6C00] text-white text-bold text-xl leading-8 py-4 px-10 rounded-full hover:bg-[#E65100]">
        <EnvelopeIcon className="h-6 w-6 inline" />
        お問い合わせはこちら
      </button>
    </div>
  )
}

const Procedure = () => {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-10 max-w-5xl">
      <h3 className="text-2xl md:text-[34px] md:leading-tight text-[#0277BD] font-bold">
        進め方
      </h3>
      <p className="text-sm md:text-xl md:leading-8">
        フェーズが2つに分かれていますが、最終的には「掲載可能な SaaS
        製品を準備すること」をゴールとし、プロダクト開発のご支援が中心的な支援範囲となります。
      </p>
      <div className="w-full flex items-stretch gap-4 md:gap-10 max-w-5xl flex-col md:flex-row">
        <div className="flex-1 flex flex-col">
          <div className="text-xl md:text-2xl text-white font-bold bg-[#263238] p-4 md:p-6 rounded-t-lg text-center">
            ヒアリング/設計フェーズ
          </div>
          <div className="text-sm md:text-base text-[#263238] bg-white p-4 md:p-6 rounded-b-lg border-x-2 border-b-2 border-[#263238] flex flex-col gap-4 flex-grow">
            <div className="flex flex-col gap-2">
              <div className="bg-[#ECEFF1] rounded-full text-xl leading-8 font-bold text-center p-1">
                実装内容
              </div>
              <ul className="list-disc list-inside pl-2">
                <li>ヒアリングシートの提示</li>
                <li>貴社資料の内容確認及び解析</li>
                <li>ヒアリング</li>
                <li>設計</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-[#ECEFF1] rounded-full text-xl leading-8 font-bold text-center p-1">
                アウトプットイメージ
              </div>
              <ul className="list-disc list-inside pl-2">
                <li>プロダクトバックログアイテム</li>
                <li>インフラアーキテクチャ図</li>
                <li>作業工数</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="text-xl md:text-2xl text-white font-bold bg-[#263238] p-4 md:p-6 rounded-t-lg text-center">
            実装フェーズ
          </div>
          <div className="text-sm md:text-base text-[#263238] bg-white p-4 md:p-6 rounded-b-lg border-x-2 border-b-2 border-[#263238] flex flex-col gap-4 flex-grow">
            <div className="flex flex-col gap-2">
              <div className="bg-[#ECEFF1] rounded-full text-xl leading-8 font-bold text-center p-1">
                実務内容
              </div>
              <ul className="list-disc list-inside pl-2">
                <li>実装</li>
                <li>テスト</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-[#ECEFF1] rounded-full text-xl leading-8 font-bold text-center p-1">
                アウトプット
              </div>
              <ul className="list-disc list-inside pl-2">
                <li>AWS Marketplace へ掲載できる状態のプロダクト</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-[#ECEFF1] rounded-full text-xl leading-8 font-bold text-center p-1">
                契約形式
              </div>
              <ul className="list-disc list-inside pl-2">
                <li>ラボ型開発(準委任 + 再委託有)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Purchase = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6 md:gap-10 max-w-5xl">
      <h3 className="text-2xl md:text-[34px] md:leading-tight text-[#0277BD] font-bold">
        料金プラン/購入方法
      </h3>
      <div className="w-full flex flex-col gap-4 md:gap-6">
        <div className="w-full flex flex-col justify-center items-center rounded-lg border-2 border-[#263238]">
          <div className="text-xl leading-8 md:text-2xl bg-[#263238] text-white font-bold rounded-b-lg px-5 py-4 md:px-8 md:py-5">
            ヒアリング/設計フェーズ
          </div>
          <div className="flex flex-col justify-center items-center gap-4 py-4 md:pt-8 md:pb-10">
            <div className="text-2xl leading-8 md:text-[34px] md:leading-[42px] font-bold tracking-[0.25px]">
              180万<span className="text-base md:text-xl">(税別)</span> +
              2ヶ月程度固定
            </div>
            <div className="text-sm md:text-base">AWS Marketplace での購買</div>
          </div>
          <div className="w-full bg-[#263238] p-4 md:p-6">
            <Image
              src={AvailableInAWSMarketplace}
              alt="Available in AWS Marketplace"
              className="w-[212px] h-10 mx-auto"
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center rounded-lg border-2 border-[#263238]">
          <div className="text-xl leading-8 md:text-2xl bg-[#263238] text-white font-bold rounded-b-lg px-5 py-4 md:px-8 md:py-5">
            実装フェーズ
          </div>
          <div className="flex flex-col justify-center items-center gap-4 py-4 md:pt-8 md:pb-10 px-4">
            <div className="text-2xl leading-8 md:text-[34px] md:leading-[42px] font-bold tracking-[0.25px]">
              準委任型ラボ契約を締結
            </div>
            <div className="text-sm md:text-base">
              想定工数及び金額は、ヒアリング/設計フェーズ終了時の成果物にて改めてご提案
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const AboutSupportForAWSMarketplaceListing = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 md:gap-20 py-10 md:py-20 tracking-[0.15px] mx-4 text-[#263238]">
      <About />
      <Procedure />
      <Purchase />
    </section>
  )
}

export { AboutSupportForAWSMarketplaceListing }
