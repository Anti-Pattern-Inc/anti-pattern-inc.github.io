import { CustomHead } from 'components/common/CustomHead'
import { BaseLayout } from 'components/layouts/BaseLayout'
import { AboutAWSMarketplace } from 'components/support-for-aws-marketplace-listing/AboutAWSMarketplace'
import { AboutSupportForAWSMarketplaceListing } from 'components/support-for-aws-marketplace-listing/AboutSupportForAWSMarketplaceListing'
import { Certifications } from 'components/support-for-aws-marketplace-listing/Certifications'
import { Contact } from 'components/support-for-aws-marketplace-listing/Contact'
import { FAQ } from 'components/support-for-aws-marketplace-listing/FAQ'
import { Hero } from 'components/support-for-aws-marketplace-listing/Hero'
import { ListSupportingService } from 'components/support-for-aws-marketplace-listing/ListSupportingService'
import { Strength } from 'components/support-for-aws-marketplace-listing/Strength'

const MarketplaceSupport: React.FC = () => {
  return (
    <>
      <CustomHead
        title="AWS Marketplace 掲載支援サービス | Anti-Pattern Inc."
        description="AWSアドバンストティアパートナー及び、SaaSコンピテンシーパートナーとして、お客様のSaaS製品をAWS Marketplaceにスムーズに掲載するためのサービスを提供しております。SaaS提供事業者として、自社SaaS製品を掲載した経験と実績に基づいたノウハウで、AWS Marketplaceへ掲載できる状態のプロダクト開発を支援し、販路拡大に寄与いたします。"
      />
      <BaseLayout headerBgColor="stone-100">
        <Hero />
        <ListSupportingService />
        <AboutAWSMarketplace />
        <AboutSupportForAWSMarketplaceListing />
        <Strength />
        <Contact />
        <FAQ />
        <Certifications />
      </BaseLayout>
    </>
  )
}

export default MarketplaceSupport
