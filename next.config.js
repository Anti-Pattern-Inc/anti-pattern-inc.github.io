/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ja'],
    // locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  webpack(config) {
    config.resolve.alias['pages'] = path.join(__dirname, 'src/pages')
    return config
  },
  async rewrites() {
    return [
      {
        source: '/top-sitemap.xml',
        destination: '/api/sitemap-top',
      },
      {
        source: '/news-sitemap.xml',
        destination: '/api/sitemap-news',
      },
      {
        source: '/hub-sitemap.xml',
        destination: '/api/sitemap-hub',
      },
    ]
  },
}

module.exports = nextConfig
