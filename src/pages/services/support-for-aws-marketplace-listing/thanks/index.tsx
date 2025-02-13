import { CustomHead } from 'components/common/CustomHead'
import { BaseLayout } from 'components/layouts/BaseLayout'
import { Thanks } from 'components/support-for-aws-marketplace-listing/Thanks'

const MarketplaceSupport: React.FC = () => {
  return (
    <>
      <CustomHead
        title="送信が完了しました - AWS Marketplace 掲載支援サービス | Anti-Pattern Inc."
        description="AWSアドバンストティアパートナー及び、SaaSコンピテンシーパートナーとして、お客様のSaaS製品をAWS Marketplaceにスムーズに掲載するためのサービスを提供しております。SaaS提供事業者として、自社SaaS製品を掲載した経験と実績に基づいたノウハウで、AWS Marketplaceへ掲載できる状態のプロダクト開発を支援し、販路拡大に寄与いたします。"
      />
      <BaseLayout headerBgColor="stone-100">
        <Thanks />
      </BaseLayout>
    </>
  )
}

export default MarketplaceSupport
