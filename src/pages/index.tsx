import { CustomHead } from 'components/common/CustomHead'
import { BaseLayout } from 'components/layouts/BaseLayout'
import { Customers } from 'components/top/Customers'
import { Hero } from 'components/top/Hero'
import { Recruit } from 'components/top/Recruit'
import { Services } from 'components/top/Services'
import { useLocale } from 'hooks/useLocale'

const Home = () => {
  const { t } = useLocale()

  return (
    <>
      <CustomHead
        title="Anti-Pattern Inc."
        description={t.common.head.description}
      />
      <BaseLayout>
        <Hero />
        <Services />
        <Customers />
        <Recruit />
      </BaseLayout>
    </>
  )
}

export default Home
