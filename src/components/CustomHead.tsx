import Head from 'next/head'
import { useRouter } from 'next/router'

type Props = {
  title: string
  description: string
  image?: string
  ogType?: 'website' | 'article'
}

const CustomHead = ({
  title,
  description,
  image = 'https://anti-pattern.co.jp/og-image.jpg',
  ogType = 'website',
}: Props) => {
  const ROOT_URL = 'https://anti-pattern.co.jp'
  const router = useRouter()

  return (
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="format-detection" content="telephone=no" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta
        property="og:url"
        content={
          ROOT_URL + (router.locale === 'en' ? '/en' : '') + router.asPath
        }
      />
      <meta property="og:description" content={description} />
      <meta
        property="og:locale"
        content={router.locale === 'ja' ? 'ja_JP' : 'en_US'}
      />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Anti-Pattern Inc." />
      <meta property="fb:app_id" content="298795375424024" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@antipatterninc" />
      <link rel="icon" href="/favicon.png" />
      <link rel="shortcut icon" href="/favicon.png" />
      {router.locale === 'en' && <meta name="robots" content="noindex" />}
    </Head>
  )
}

export { CustomHead }
