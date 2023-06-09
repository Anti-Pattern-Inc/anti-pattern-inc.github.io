import { NextApiRequest, NextApiResponse } from 'next'
import { SitemapStream, streamToPromise } from 'sitemap'

import { createClient } from '@/prismicio'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const client = createClient()

  const pages = await client.getAllByType('news')

  const links = [{ url: '/news' }]

  pages.forEach((page) => {
    links.push({
      url: `/news/${page.uid}`,
    })
  })

  const stream = new SitemapStream({
    hostname:
      process.env.NEXT_PUBLIC_ANTIPATTERN_CORPORATE_SITE_URL ||
      'https://anti-pattern.co.jp',
  })

  links.forEach((link) => {
    stream.write(link)
  })

  stream.end()

  const sitemap = await streamToPromise(stream).then((sm) => sm.toString())

  res.setHeader('Content-Type', 'application/xml')
  res.write(sitemap)
  res.end()
}
