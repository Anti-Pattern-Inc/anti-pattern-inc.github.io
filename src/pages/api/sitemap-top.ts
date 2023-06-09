import { NextApiRequest, NextApiResponse } from 'next'
import { SitemapStream, streamToPromise } from 'sitemap'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const stream = new SitemapStream({
    hostname:
      process.env.NEXT_PUBLIC_ANTIPATTERN_CORPORATE_SITE_URL ||
      'https://anti-pattern.co.jp',
  })

  stream.write({ url: '/' })

  stream.end()

  const sitemap = await streamToPromise(stream).then((sm) => sm.toString())

  res.setHeader('Content-Type', 'application/xml')
  res.write(sitemap)
  res.end()
}
