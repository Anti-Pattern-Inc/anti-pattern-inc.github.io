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
        <div className="bg-stone-100 h-[228px] md:h-[350px] flex flex-col justify-center items-center gap-6 md:gap-8">
          <h1 className="flex flex-col md:flex-row justify-center items-center md:gap-2 text-[30px] lg:text-5xl font-bold text-center">
            AWS Marketplace
            <span className="inline-block text-white bg-[#0073BB] px-4 md:px-8 lg:py-[10px] text-[28px] lg:text-[40px] rounded-full">
              掲載支援サービス
            </span>
          </h1>
          <p className="font-bold text-center md:text-xl leading-normal">
            スムーズに費用対効果の高い
            <br className="md:hidden" />
            AWS Marketplace掲載を実現
          </p>
        </div>
      </BaseLayout>
    </>
  )
}

export default MarketplaceSupport
