import { BaseLayout } from 'components/BaseLayout'
import { CustomHead } from 'components/CustomHead'
import ServiceImg from 'images/anti-pattern_service_2022.png'
import ServiceImgSp from 'images/anti-pattern_service_2022-sp.png'
import CloudDriver from 'images/clouddriver.png'
import Engineed from 'images/engineed.svg'
import Gateway from 'images/gateway.png'
import Harbors from 'images/harbors.svg'
import Posse from 'images/posse.svg'
import SaasusConsulting from 'images/saasus_consulting_logo_420.svg'
import SaasusPlatform from 'images/saasus_platform_logo_420.svg'
import ServiceLinkIcon from 'images/service-link-icon.png'
import Image, { StaticImageData } from 'next/image'

type Props = {
  src: string | StaticImageData
  name: string
  ja_name: string
  description: string
  url: string | null
  blank: boolean
}

const Service = ({ src, name, ja_name, description, url, blank }: Props) => {
  return (
    <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 mt-6 mx-6">
      <div className="flex justify-center items-center border-[1px] h-[calc(50vw)] max-h-64 px-5 col-span-1">
        <Image src={src} alt={name} className="w-48" />
      </div>
      <div className="flex flex-col justify-center col-span-1">
        <h4 className="flex flex-wrap items-end">
          <span className="font-bold text-xl mr-4">{name}</span>
          <span className="font-bold text-sm">{ja_name}</span>
        </h4>
        <p className="text-sm my-4">{description}</p>
        {url && (
          <p className="text-ap-green">
            <a
              href={url}
              className="border-b-[1px] border-ap-green pb-1 px-1"
              target={blank ? '_blank' : '_self'}
              rel="noreferrer"
            >
              <span>SERVICE SITE</span>
              {blank && (
                <Image
                  src={ServiceLinkIcon}
                  alt="サイトリンク"
                  className="w-3 inline mb-1 ml-1"
                />
              )}
            </a>
          </p>
        )}
      </div>
    </div>
  )
}

const Services = () => {
  return (
    <>
      <CustomHead
        title="サービス | Anti-Pattern Inc."
        description="このページは株式会社アンチパターン(英名:Anti-Pattern Inc.)のコーポレートサイトです。経営理念や事業内容、会社概要などをご紹介しています。"
      />
      <BaseLayout headerBgColor="stone-100">
        <div className="bg-stone-100 pb-10 md:pb-20">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl text-center pt-8 md:pt-24">
            SERVICES
          </h1>
          <p className="font-bold text-center mt-6 md:mt-10">サービス</p>
        </div>
        <div>
          <section className="mt-16 md:mt-32">
            <h2 className="mb-4 md:mb-8 font-bold text-ap-green text-2xl text-center">
              BUSINESS CONCEPT
            </h2>
            <div className="max-w-md lg:max-w-6xl mx-auto px-10">
              <Image
                src={ServiceImg}
                alt="ビジネスコンセプト"
                className="hidden lg:block"
              />
              <Image
                src={ServiceImgSp}
                alt="ビジネスコンセプト"
                className="lg:hidden"
              />
            </div>
          </section>
          <section className="mt-32 mb-32">
            <h2 className="mb-4 md:mb-8 font-bold text-ap-green text-2xl text-center">
              SERVICE LIST
            </h2>
            <div className="max-w-lg md:max-w-6xl mx-auto">
              <h3 className="text-center text-sm font-bold">マッチング</h3>
              <Service
                src={Engineed}
                name="engineed"
                ja_name="エンジニード"
                description="engineedは、AWSエンジニア特化型のスカウトサービスです。公式資格を有しているAWSエンジニアを副業や正社員など様々な契約形態で採用することができます。"
                url="https://info.engineed.io/"
                blank={true}
              />
            </div>
            <div className="max-w-lg md:max-w-6xl mx-auto mt-24">
              <h3 className="text-center text-sm font-bold">BizDevOps支援</h3>
              <div className="flex flex-col gap-10">
                <Service
                  src={SaasusPlatform}
                  name="SaaSus Platform"
                  ja_name="サースアス プラットフォーム"
                  description="BtoB SaaSを作ることを支援するSaaS。"
                  url="https://saasus.io/"
                  blank={true}
                />
                <Service
                  src={SaasusConsulting}
                  name="SaaSus Consulting"
                  ja_name="サースアス コンサルティング"
                  description="組織内製化診断から実行までを包括的に支援するサービス。"
                  url="/services/saasus-consulting"
                  blank={false}
                />
                <Service
                  src={Gateway}
                  name="Gateway"
                  ja_name="ゲートウェイ"
                  description="様々な企業に対して、ソフトウェア開発の支援事業を行なっております。これまで、上場企業の自社プロダクトとしてSaaSの開発やメディアの開発で培った経験から、 主にWebサービスの開発経験に強みがあります。また、インフラ構築の技術にも定評があります。"
                  url={null}
                  blank={false}
                />
              </div>
            </div>
            <div className="max-w-lg md:max-w-6xl mx-auto mt-24">
              <h3 className="text-center text-sm font-bold">
                コミュニティ形成支援
              </h3>
              <Service
                src={Harbors}
                name="HarborS"
                ja_name="ハーバーズ"
                description="表参道のエンジニア特化型コミュニティスペース。コワーキング会員のみならず、ドロップインの利用も可能。渋谷からも近い距離にあり、多くのエンジニアにとって、足を運びやすい場所に位置しています。勉強会やイベントも多数開催中。"
                url="https://harbors.anti-pattern.co.jp/"
                blank={true}
              />
            </div>
            <div className="max-w-lg md:max-w-6xl mx-auto mt-24">
              <h3 className="text-center text-sm font-bold">スキルアップ</h3>
              <Service
                src={Posse}
                name="POSSE"
                ja_name="ポッセ"
                description="プログラミング未経験の大学生が仲間と共に学ぶコミュニティ。大学生のうちから、「人格」+「プログラミング」を学ぶコミュニティを形成し、将来に渡って長期的に人生を豊かにし合う仲間を熟成します。 また、それにより新卒就職時に即戦力人材を目指します。"
                url="https://posse-ap.com/"
                blank={true}
              />
              <Service
                src={CloudDriver}
                name="CloudDriver"
                ja_name="クラウドドライバー"
                description="AWSエンジニアのスキル可視化、実力向上を実現する実技型試験サービス"
                url="https://clouddriver.net/"
                blank={true}
              />
            </div>
          </section>
        </div>
      </BaseLayout>
    </>
  )
}

export default Services
