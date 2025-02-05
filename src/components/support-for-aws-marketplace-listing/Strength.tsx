import { Break } from 'components/common/Break'
import AwsPartnerAndSaasCompetency from 'images/advanced_tier-saas_competency.png'
import ProprietaryResources from 'images/proprietary-resources.png'
import SaaSusPlatform from 'images/saasus_platform_logo_420.svg'
import Image from 'next/image'

const Strength = () => {
  return (
    <section className="py-10 md:py-20 bg-[#ECEFF1] flex flex-col items-center justify-center">
      <ul className="flex flex-col items-center justify-center gap-6 md:gap-10 max-w-5xl mx-4 tracking-[0.15px]">
        <li className="flex gap-4 md:gap-10 flex-col lg:flex-row items-center lg:items-start">
          <div className="w-[360px] h-60 bg-white rounded-lg flex flex-col items-center justify-center shrink-0">
            <Image
              src={ProprietaryResources}
              alt="Proprietary Resources"
              className="w-[296px] h-[176px]"
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-6">
            <div className="font-bold text-xl leading-8 md:text-2xl text-[#0277BD] text-center md:text-start">
              独自開発されたヒアリングシート / 結果報告書 / アーキテクチャ図
            </div>
            <p className="text-sm md:text-xl md:leading-8 text-[#263238]">
              実際に掲載した経験をもとに独自開発した「ヒアリングシート」と「結果報告書」など、各種リソースを保有
            </p>
          </div>
        </li>
        <li className="flex gap-4 md:gap-10 flex-col lg:flex-row items-center lg:items-start">
          <div className="w-[360px] h-60 bg-white rounded-lg flex flex-col items-center justify-center shrink-0">
            <Image
              src={AwsPartnerAndSaasCompetency}
              alt="Proprietary Resources"
              className="w-[296px] h-[130px]"
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-6">
            <div className="font-bold text-xl leading-8 md:text-2xl text-[#0277BD] text-center md:text-start">
              AWS アドバンストティアサービスパートナー / SaaS コンピテンシー取得
            </div>
            <p className="text-sm md:text-xl md:leading-8 text-[#263238]">
              AWSによる認定ソフトウェアを所有するスタートアップ企業として、国内初の
              AWS アドバンストティア サービスパートナー。国内2社目の SaaS
              コンピテンシーパートナー。
            </p>
          </div>
        </li>
        <li className="flex gap-4 md:gap-10 flex-col lg:flex-row items-center lg:items-start">
          <div className="w-[360px] h-60 bg-white rounded-lg flex flex-col items-center justify-center shrink-0">
            <Image
              src={SaaSusPlatform}
              alt="Proprietary Resources"
              className="w-[296px] h-[78px]"
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-6">
            <div className="font-bold text-xl leading-8 md:text-2xl text-[#0277BD] text-center md:text-start">
              自社製品の掲載実績
              <Break type="md-pc-none" />
              (SaaSus Platform)
            </div>
            <p className="text-sm md:text-xl md:leading-8 text-[#263238]">
              自社SaaS製品の掲載を実施済み。実装だけでなく事務的な手続きについても把握しドキュメント化済み。
            </p>
            <div className="text-[#263238] text-sm md:text-xl md:leading-8">
              <div className="font-bold">掲載による販売効果</div>
              <ul className="list-disc list-inside -indent-7 pl-7">
                <li>
                  契約手続きの簡素化(特に新規購買先登録をスキップできるのがメリットとして感じていただける)
                </li>
                <li>支払い手続きの簡素化</li>
                <li>
                  予算確保の簡素化(クラウド予算で決裁できるので個別の予算化が不要なケースがある)
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}

export { Strength }
