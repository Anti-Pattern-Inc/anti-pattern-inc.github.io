import Footer from 'components/Footer'
import Header from 'components/Header'
import AwsPartnerNetwork from 'images/aws-partnernetwork-consluting-paetner-select-badge.jpg'
import Ctoa from 'images/ctoa.svg'
import Options from 'images/options.svg'
import SaasusConsultingLogo from 'images/saasus_consulting_logo_420.svg'
import SaasusDiagnose from 'images/saasus_diagnose.png'
import SaasusDiagnoseSp from 'images/saasus_diagnose_sp.png'
import SaasusEngineed from 'images/saasus_engineed.png'
import SaasusEngineedSp from 'images/saasus_engineed_sp.png'
import SaasusExecution from 'images/saasus_execution.png'
import SaasusExecutionSp from 'images/saasus_execution_sp.png'
import SaasusSharedSre from 'images/saasus_shared_sre.png'
import SaasusSharedSreSp from 'images/saasus_shared_sre_sp.png'
import ServiceLinkIcon from 'images/service-link-icon.png'
import Subscription from 'images/subscription.svg'
import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'

export default function SaasusConsulting() {
  type props = {
    src: string | StaticImageData
    alt: string
    title: string
    description: string
  }
  function Service({ props }: { props: props }) {
    return (
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 max-w-3xl lg:max-w-5xl mx-auto">
        <div className="mx-auto flex justify-center items-center border-[1px] col-span-1 w-48 md:w-full h-52 md:h-64">
          <Image src={props.src} alt={props.alt} className="w-32 md:w-48" />
        </div>
        <div className="flex flex-col justify-center col-span-1">
          <h3 className="font-bold text-sm">{props.title}</h3>
          <p className="text-sm mt-5 leading-6">{props.description}</p>
        </div>
      </div>
    )
  }
  return (
    <>
      <Head>
        <title>SaaSus Consulting | Anti-Pattern Inc.</title>
        <meta
          name="description"
          content="内製化支援サービスSaaSus Consultingのページです。内製化の必要性を診断、アクションプランの策定からプロトタイピング・開発・人材採用・運用までをトータルサポートいたします。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <div className="bg-stone-100 pb-10 md:pb-20">
          <Header />
          <h1 className="mt-8 md:mt-24">
            <Image
              src={SaasusConsultingLogo}
              alt="SaaSus Consulting"
              className="w-72 md:w-96 mx-auto"
            />
          </h1>
          <p className="font-bold text-center mt-6 md:mt-10">
            内製化支援サービス
          </p>
        </div>
        <div className="max-w-3xl md:max-w-5xl mx-auto">
          <section className="px-6 pt-24">
            <h2 className="mb-4 md:mb-8 font-bold text-ap-green text-2xl text-center">
              こんなことでお困りではないですか？
            </h2>
            <div className="flex flex-col gap-6 lg:gap-10 font-bold text-center text-lg lg:text-2xl">
              <p>
                ソフトウェア開発・運用を外注しているが、
                <br className="hidden lg:block" />
                都度見積もりが必要で事業計画が立てづらく、また開発速度が上がらない
              </p>
              <p>
                SaaSのアイデアはあるが、どのように開発計画を立てて、
                <br className="hidden lg:block" />
                どのように作っていけばよいかわからない
              </p>
              <p>
                ソフトウェア開発・運用の内製化を検討しているが、
                <br className="hidden lg:block" />
                何から始めていいか分からない
              </p>
              <p>
                自社で開発しているがSaaSのノウハウが無く、
                <br className="hidden lg:block" />
                料金体系や価格設定をどうしてよいかわからない
              </p>
              <p>
                ソフトウェア開発はできるが、
                <br className="hidden lg:block" />
                インフラも含めたSaaS運用の経験がなくて不安
              </p>
            </div>
          </section>
          <section className="px-6 pt-24 text-center">
            <h2 className="mb-4 md:mb-8 font-bold text-ap-green text-2xl text-center">
              SaaSus Consultingが解決します。
            </h2>
            <p className="font-bold text-center text-lg lg:text-2xl">
              内製化の必要性を診断、アクションプランの策定から
              <br className="hidden lg:block" />
              プロトタイピング・開発・人材採用・運用までをトータルサポート
            </p>
            <a
              href="https://anti-pattern.typeform.com/to/sRfoU8TK?typeform-source=anti-pattern.co.jp"
              className="mt-10 max-w-xs sm:max-w-none inline-flex items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-[#ff9b33] px-8 py-3 text-sm font-bold text-white hover:text-black tracking-widest shadow-sm"
              target="_blank"
              rel="noreferrer"
            >
              SaaSus Consultingに関するお問い合わせ
            </a>
          </section>
          <section className="px-6 pt-32 max-w-3xl lg:max-w-5xl mx-auto">
            <h2 className="mb-8 md:mb-8 font-bold text-ap-green text-2xl text-center">
              SERVICE MENU
            </h2>
            <div>
              <p className="mb-6 text-center font-bold text-sm">診断</p>
              <Image
                src={SaasusDiagnose}
                alt="DX Criteria"
                className="hidden sm:block"
              />
              <Image
                src={SaasusDiagnoseSp}
                alt="DX Criteria"
                className="sm:hidden"
              />
              <h3 className="mt-6 font-bold text-2xl">
                SaaSus Consulting診断(DX Criteria診断 + サービス診断)
              </h3>
              <p className="mt-4 text-sm leading-6">
                <span className="inline-block">
                  日本CTO協会が提供するデジタル化とソフトウェア活用のためのガイドラインが「DX
                  Criteria」です。この「DX
                  Criteria」やサービスの簡易的な診断を行い、内製化の必要性を診断させていただきます。
                </span>
                <span className="inline-block mb-4">
                  内製化を進めていく中においては継続的に繰り返し診断を行うことによりアクションプランの策定と見直しを行います。
                </span>
                <span>
                  なお、株式会社アンチパターンは、日本CTO協会の法人会員であり、代表の小笹はDX
                  Criteriaの改訂プロジェクトに参画しておりますため、DX
                  Criteriaに対する深い理解を活かしたご支援させて頂きます。
                </span>
              </p>
            </div>
            <div className="mt-20">
              <p className="mb-6 text-center font-bold text-sm">実行支援</p>
              <Image
                src={SaasusExecution}
                alt="実行支援の図"
                className="hidden sm:block"
              />
              <Image
                src={SaasusExecutionSp}
                alt="実行支援の図"
                className="sm:hidden"
              />
              <h3 className="mt-6 font-bold text-2xl">プロトタイピング</h3>
              <p className="mt-4 text-sm leading-6">
                プログラミング学習コミュニティPOSSEの選抜された学生チームの参画により、ライトにプロトタイピング開発を実施することで、サービスの仮説検証を行いながら、貴社プロダクト担当の方に一緒にスクラムチームに入っていただくことで、スクラムを体験していただきながら、内製化の体制作りを支援いたします。
              </p>
              <h3 className="mt-6 font-bold text-2xl">
                スクラムチーム立ち上げ支援
              </h3>
              <p className="mt-4 text-sm leading-6">
                各所で弊社メンバー（認定スクラムマスター、認定プロダクトオーナー）が参画させて頂き、貴社スクラムチームと並走することでチームの立ち上げを支援します。場合によっては、一時的に弊社開発チームのエンジニアが参画させて頂くことも可能です。
              </p>
            </div>
            <div className="mt-20">
              <p className="mb-6 text-center font-bold text-sm">採用支援</p>
              <Image
                src={SaasusEngineed}
                alt="engineedのビジネスモデル図"
                className="hidden sm:block"
              />
              <Image
                src={SaasusEngineedSp}
                alt="engineedのビジネスモデル図"
                className="sm:hidden"
              />
              <h3 className="mt-6 font-bold text-2xl">
                engineedを活用した採用支援
              </h3>
              <p className="mt-4 text-sm leading-6">
                <span className="inline-block mb-4">
                  engineedは、AWSエンジニア特化型のスカウトサービスです。AWS認定資格を保有しているAWSエンジニアを、弊社独自の実技試験にて実力を見極めた上で、副業や正社員など様々な契約形態で採用することができます。
                </span>
                <span>
                  SaaSusにおいてはengineedを活用して、AWSエンジニアの採用支援を実施いたします。選考前の候補者ピックアップの段階から、選考過程のあらゆる場面に参画しエンジニア採用をご支援いたします。
                </span>
              </p>
              <p className="text-ap-green mt-6">
                <a
                  href="https://info.engineed.io/"
                  className="border-b-[1px] border-ap-green pb-1 px-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>SERVICE SITE</span>
                  <Image
                    src={ServiceLinkIcon}
                    alt="サイトリンク"
                    className="w-3 inline mb-1 ml-1"
                  />
                </a>
              </p>
            </div>
            <div className="mt-20">
              <p className="mb-6 text-center font-bold text-sm">運用支援</p>
              <Image
                src={SaasusSharedSre}
                alt="共有SREサービスのビジネスモデル図"
                className="hidden sm:block"
              />
              <Image
                src={SaasusSharedSreSp}
                alt="共有SREサービスのビジネスモデル図"
                className="sm:hidden"
              />
              <h3 className="mt-6 font-bold text-2xl">共有SREサービス</h3>
              <p className="mt-4 text-sm leading-6">
                本番サービス運用中の企業では、内製化による体制変更時に内部で対応しきれない過渡期にトラブルが発生するリスクがあります。そういった社内のみでは対応できない事象を共有SREチームがカバーいたします。
              </p>
            </div>
          </section>
          <section className="px-6 pt-32 max-w-3xl mx-auto lg:max-w-none">
            <h2 className="mb-8 md:mb-8 font-bold text-ap-green text-2xl text-center">
              PLANS
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-5 justify-center">
              <div className="bg-[#F8F8F8] w-72 text-center font-bold flex flex-col gap-4 py-6 rounded-lg">
                <h3>STARTER KIT</h3>
                <p>
                  <span className="text-3xl">98万円</span>
                  <span className="text-sm">(税込)</span>
                </p>
                <p className="text-sm">(期間は約2ヶ月を想定)</p>
                <p className="text-sm">※買い切り</p>
                <p className="text-sm">・DX Criteria初期診断</p>
                <p className="text-sm">・サービス簡易診断</p>
              </div>
              <div className="bg-[#F8F8F8] w-72 text-center font-bold flex flex-col gap-4 py-6 rounded-lg">
                <h3>STANDARD</h3>
                <p>
                  <span className="text-3xl">80万円</span>
                  <span className="text-sm">/月 (税込)</span>
                </p>
                <p className="text-sm">※サブスクリプション</p>
                <p className="text-sm">・DX Criteria定期診断</p>
                <p className="text-sm">・内製化推進</p>
                <p className="text-sm">・週次での推進ミーティング</p>
              </div>
              <div className="bg-[#F8F8F8] w-72 text-center font-bold flex flex-col gap-4 py-6 rounded-lg">
                <h3>OPTIONS</h3>
                <p>
                  <span className="text-3xl">個別見積もり</span>
                </p>
                <p className="text-sm">
                  ※STANDARDプラン
                  <br />
                  ご契約のお客様に限り提供
                </p>
                <p className="text-sm">・プロトタイピング支援</p>
                <p className="text-sm">・スクラムチーム立ち上げ支援</p>
                <p className="text-sm">・engineedを活用した採用支援</p>
                <p className="text-sm">・共有SREサービス</p>
              </div>
            </div>
            <div className="text-center mt-6">
              <a
                href="https://anti-pattern.typeform.com/to/sRfoU8TK?typeform-source=anti-pattern.co.jp"
                className="mt-6 max-w-xs sm:max-w-none inline-flex items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-[#ff9b33] px-8 py-3 text-sm font-bold text-white hover:text-black tracking-widest shadow-sm"
                target="_blank"
                rel="noreferrer"
              >
                SaaSus Consultingに関するお問い合わせ
              </a>
            </div>
          </section>
          <section className="px-6 pt-32 pb-24 md:pb-36">
            <h2 className="mb-8 md:mb-8 font-bold text-ap-green text-2xl text-center">
              SaaSus Consultingが選ばれる理由
            </h2>
            <div className="flex flex-col gap-16 pt-4">
              <Service
                props={{
                  src: Subscription,
                  alt: 'サブスクリプションモデル',
                  title: 'サブスクリプションモデル',
                  description:
                    'SaaSus Consultingはサブスクリプションモデルで契約いただけますので、「まずは始めてみる」ということのハードルが低く設計されています。内製化が完了したりニーズがなくなった場合にはすぐにアンサブスクライブすることができます。',
                }}
              />
              <Service
                props={{
                  src: Ctoa,
                  alt: '日本CTO協会',
                  title:
                    'DX Criteria改訂プロジェクトに参画のメンバーが診断を監修',
                  description:
                    '株式会社アンチパターンは、日本CTO協会の法人会員であり、代表の小笹はDX Criteriaの改訂プロジェクトに参画しております。',
                }}
              />
              <Service
                props={{
                  src: Options,
                  alt: '豊富なオプションサービス',
                  title: '豊富なオプションサービス',
                  description:
                    '株式会社アンチパターンが保有するサービスを用いて内製化実行に必要なアクションを支援しています。開発や運用だけでなく採用支援まで実行し、ソフトウェア開発の内製化をトータルサポートいたします。',
                }}
              />
              <Service
                props={{
                  src: AwsPartnerNetwork,
                  alt: 'AWSコンサルティングパートナー・セレクトティア',
                  title: '確かな技術力',
                  description:
                    '株式会社アンチパターンは、アマゾン ウェブ サービス（AWS）が提供するパートナープログラム「AWSパートナーネットワーク（APN）」におけるAWSコンサルティングパートナー・セレクトティアの認定を取得しております。また、弊社のエンジニアの8割以上は、自社サービスを内製で開発・運用してきたメンバーで内製の経験が豊富です。',
                }}
              />
            </div>
            <div className="text-center mt-8">
              <a
                href="https://anti-pattern.typeform.com/to/sRfoU8TK?typeform-source=anti-pattern.co.jp"
                className="mt-6 max-w-xs sm:max-w-none inline-flex items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-[#ff9b33] px-8 py-3 text-sm font-bold text-white hover:text-black tracking-widest shadow-sm"
                target="_blank"
                rel="noreferrer"
              >
                SaaSus Consultingに関するお問い合わせ
              </a>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  )
}
