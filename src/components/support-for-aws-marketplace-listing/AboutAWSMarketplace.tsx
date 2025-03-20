import { Break } from 'components/common/Break'
import AWSMarketplace from 'images/aws-marketplace-logo.png'
import MonitoringIcon from 'images/monitoring-icon.svg'
import PersonOffIcon from 'images/person-off-icon.svg'
import PsychologyIcon from 'images/psychology-icon.svg'
import Image from 'next/image'

const About = () => {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-10 mx-4">
      <h2 className="text-2xl md:text-[34px] md:leading-tight text-[#0277BD] font-bold">
        AWS Marketplace とは
      </h2>
      <div className="flex items-center gap-4 md:gap-10 max-w-5xl flex-col md:flex-row">
        <div className="bg-[#263238] w-[358px] md:w-[400px] h-[215px] md:h-60 rounded-lg shrink-0 flex items-center justify-center">
          <Image
            src={AWSMarketplace}
            alt="AWS Marketplace"
            className="w-[258px] md:w-[321px] h-[50px] md:h-[57px]"
          />
        </div>
        <div className="flex flex-col gap-6 text-sm md:text-base">
          <p>
            AWS Marketplace
            は、AWS パートナーが提供するソリューションを検索、購入、デプロイ、管理するのに役立つ、ソフトウェアのオンラインストアです。AWS
            で請求と管理を一元化することができます。
          </p>
          <p>
            また、米国においては活用が進んでおり、日本円でプライベートオファーの作成ができるようになったことや、日本口座の対応が可能になったことから、日本でも同じような状態になっていくことが想定できます。
          </p>
        </div>
      </div>
    </div>
  )
}

const Recommended = () => {
  return (
    <section className="flex flex-col items-center gap-6 md:gap-10 mx-4">
      <h3 className="text-2xl md:text-[34px] md:leading-tight text-[#0277BD] font-bold">
        こんな方におすすめ
      </h3>
      <div className="flex max-w-5xl gap-4 md:gap-10 flex-col md:flex-row">
        <div className="flex-1 bg-white rounded-lg flex flex-col items-center gap-4 md:gap-6 p-6">
          <Image
            src={MonitoringIcon}
            alt=""
            className="w-20 md:w-[120px] h-20 md:h-[120px]"
          />
          <p className="text-center text-sm md:text-base flex-grow content-center">
            AWS Marketplace への SaaS 製品を掲載してビジネス拡大を図りたい方
          </p>
        </div>
        <div className="flex-1 bg-white rounded-lg flex flex-col items-center justify-between gap-4 md:gap-6 p-6">
          <Image
            src={PsychologyIcon}
            alt=""
            className="w-20 md:w-[120px] h-20 md:h-[120px]"
          />
          <p className="text-center text-sm md:text-base flex-grow content-center">
            クイックに掲載を実現していきたいが、AWS Marketplace
            への掲載に何が必要か深く理解していない方
          </p>
        </div>
        <div className="flex-1 bg-white rounded-lg flex flex-col items-center justify-between gap-4 md:gap-6 p-6">
          <Image
            src={PersonOffIcon}
            alt=""
            className="w-20 md:w-[120px] h-20 md:h-[120px]"
          />
          <p className="text-center text-sm md:text-base flex-grow content-center">
            コア機能開発に集中する必要があり、掲載のための設計や開発などにリソースを割くことが難しい方
          </p>
        </div>
      </div>
    </section>
  )
}

const Consideration = () => {
  return (
    <section className="flex flex-col items-center gap-6 md:gap-10">
      <h3 className="text-2xl md:text-[34px] md:leading-tight text-[#0277BD] font-bold text-center">
        AWS Marketplace 掲載にあたり
        <Break type="lg-pc-none" />
        検討すべきこと
      </h3>
      <div className="flex flex-col gap-6 md:gap-10">
        <p className="mx-4 max-w-5xl text-sm md:text-base">
          掲載にあたりインテグレーションが必要となるため、AWS Marketplace
          への理解度を高めて事業的な効果を把握し、掲載によるお客様のビジネスメリット(期待)によって、どこまで作り込むかを検討する必要があります。
        </p>
        <div className="w-full flex flex-col gap-6 items-center justify-center px-4">
          <h4 className="font-bold text-xl leading-8 md:text-2xl text-center">
            インテグレーションの実装が
            <Break type="sm-pc-none" />
            必要な主な事柄
          </h4>
          <div className="w-full flex gap-4 md:gap-10 items-center justify-center flex-col lg:flex-row mx-4 md:mx-0">
            <div className="w-full bg-white flex flex-col items-center justify-center gap-4 md:gap-6 p-6 rounded-lg flex-grow">
              <div className="text-[#0277BD] font-bold text-base md:text-xl md:leading-8 text-center">
                SaaS の「テナント管理や
                <Break type="md-sp-none" />
                オンボーディング/オフボーディング処理」
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="w-[198px] h-[75px] bg-[#263238] rounded flex items-center justify-center">
                  <Image
                    src={AWSMarketplace}
                    alt="AWS Marketplace"
                    className="w-[150px] h-[27px]"
                  />
                </div>
                <span className="w-3 h-4 bg-[#263238]" />
                <ul className="w-[130px] border-2 border-[#263238] rounded pl-6 pr-1 py-1.5 text-sm list-disc list-inside -indent-4 font-bold">
                  <li>契約者情報</li>
                  <li>
                    契約情報
                    <br />
                    (料金プラン等)
                  </li>
                </ul>
                <span className="w-3 h-3 bg-[#263238]" />
                <span className="w-0 h-0 border-t-[16px] border-x-[16px] border-x-transparent border-t-[#263238]"></span>
                <div className="w-[198px] h-[75px] text-2xl font-bold text-white bg-[#0288D1] rounded flex items-center justify-center">
                  SaaS 製品
                </div>
              </div>
              <div className="text-[#263238] text-center text-sm md:text-base">
                購入や契約変更の窓口が
                <Break type="md-pc-none" />
                <span className="w-1 hidden md:inline-block" />
                AWS Marketplace になるため
              </div>
            </div>
            <div className="w-full bg-white flex flex-col items-center justify-center gap-6 p-6 rounded-lg flex-grow">
              <div className="text-[#0277BD] font-bold text-base md:text-xl md:leading-8 text-center">
                SaaS の<br />
                「料金プラン(メータリング / 認可)」
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="w-[198px] h-[75px] bg-[#263238] rounded flex items-center justify-center">
                  <Image
                    src={AWSMarketplace}
                    alt="AWS Marketplace"
                    className="w-[150px] h-[27px]"
                  />
                </div>
                <span className="w-0 h-0 border-b-[16px] border-x-[16px] border-x-transparent border-b-[#0288D1]"></span>
                <span className="w-3 h-3 bg-[#0288D1]" />
                <div className="border-2 border-[#0288D1] rounded px-0.5 py-1.5 text-sm text-[#0288D1] font-bold">
                  <span className="pl-1">ex)</span>
                  <ul className="list-disc list-inside -indent-4 pl-6 pr-1 ">
                    <li className="">ユーザ数</li>
                    <li className="">使用料</li>
                  </ul>
                </div>
                <span className="w-3 h-4 bg-[#0288D1]" />
                <div className="w-[198px] h-[75px] text-2xl font-bold text-white bg-[#0288D1] rounded flex items-center justify-center">
                  SaaS 製品
                </div>
              </div>
              <div className="text-[#263238] text-center text-sm md:text-base">
                顧客への請求が
                <Break type="md-pc-none" />
                <span className="w-1 hidden md:inline-block" />
                AWS Marketplace 経由になるため
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Problems = () => {
  return (
    <section className="flex flex-col items-center gap-6 md:gap-10 mx-4">
      <h3 className="text-2xl md:text-[34px] md:leading-tight text-[#0277BD] font-bold text-center">
        SaaS 製品を掲載したい企業に
        <Break type="lg-pc-none" />
        おいて発生する課題
      </h3>
      <div className="flex gap-4 md:gap-10 max-w-5xl flex-col md:flex-row">
        <div className="flex-1">
          <div className="text-xl md:text-2xl text-white font-bold bg-[#263238] p-4 md:p-6 rounded-t-lg text-center">
            リソースの問題
          </div>
          <p className="text-sm md:text-base text-[#263238] bg-white p-4 md:p-6 rounded-b-lg border-2 border-[#263238]">
            テナント管理(オンボーディング/オフボーディング)や料金プラン(メータリング/認可)の構築など、AWS
            Marketplace
            掲載のために検討するべき作業項目は多く、自社内に十分なリソースがない場合、スムーズに進めることが困難です。
          </p>
        </div>
        <div className="flex-1">
          <div className="text-xl md:text-2xl text-white font-bold bg-[#263238] p-4 md:p-6 rounded-t-lg text-center">
            ナレッジの問題
          </div>
          <p className="text-sm md:text-base text-[#263238] bg-white p-4 md:p-6 rounded-b-lg border-2 border-[#263238]">
            バイヤーの契約状況やセラーの SaaS
            の利用状況などをお互いに連携する必要があり、自社製品に最適な構成を設計するためには、AWS
            Marketplace の仕組みを十分に理解する必要があります。
          </p>
        </div>
      </div>
    </section>
  )
}

const AboutAWSMarketplace = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 md:gap-20 py-10 md:py-20 bg-[#ECEFF1] tracking-[0.15px]">
      <About />
      <Recommended />
      <Consideration />
      <Problems />
    </section>
  )
}

export { AboutAWSMarketplace }
