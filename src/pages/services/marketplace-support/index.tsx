import { CustomHead } from 'components/common/CustomHead'
import { BaseLayout } from 'components/layouts/BaseLayout'

const MarketplaceSupport: React.FC = () => {
  return (
    <>
      <CustomHead
        title="AWS Marketplace 掲載支援サービス | Anti-Pattern Inc."
        description="AWSアドバンストティアパートナー及び、SaaSコンピテンシーパートナーとして、お客様のSaaS製品をAWS Marketplaceにスムーズに掲載するためのサービスを提供しております。SaaS提供事業者として、自社SaaS製品を掲載した経験と実績に基づいたノウハウで、AWS Marketplaceへ掲載できる状態のプロダクト開発を支援し、販路拡大に寄与いたします。"
      />
      <BaseLayout headerBgColor="stone-100">
        <div className="bg-stone-100 h-[350px] flex flex-col justify-center items-center gap-8">
          <h1 className="text-5xl font-bold text-center">
            AWS Marketplace
            <span className="inline-block text-white bg-[#0073BB] ml-2 py-[10px] px-8 text-[40px] rounded-full">
              掲載支援サービス
            </span>
          </h1>
          <p className="font-bold text-center text-xl leading-normal">
            スムーズに費用対効果の高い AWS Marketplace掲載を実現
          </p>
        </div>
      </BaseLayout>
    </>
  )
}

export default MarketplaceSupport
