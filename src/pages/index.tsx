import { BaseLayout } from 'components/BaseLayout'
import { CustomHead } from 'components/CustomHead'
import { Customers } from 'components/top/Customers'
import { Hero } from 'components/top/Hero'
import { Recruit } from 'components/top/Recruit'
import { Services } from 'components/top/Services'
import { useRouter } from 'next/router'

const Home = () => {
  const { locale } = useRouter()
  const lang = locale === 'ja' ? 'ja' : 'en'

  return (
    <>
      <CustomHead
        title="Anti-Pattern Inc."
        description={
          locale === 'ja'
            ? 'このページは株式会社アンチパターン(英名:Anti-Pattern Inc.)のコーポレートサイトです。経営理念や事業内容、会社概要などをご紹介しています。'
            : 'This is the corporate website of Anti-Pattern Inc. We introduce our management philosophy, business content, and company profile.'
        }
      />
      <BaseLayout>
        <Hero lang={lang} />
        <Services lang={lang} />
        <Customers />
        <Recruit lang={lang} />
      </BaseLayout>
    </>
  )
}

export default Home
