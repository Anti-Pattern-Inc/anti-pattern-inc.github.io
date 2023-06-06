module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_ANTIPATTERN_CORPORATE_SITE_URL ||
    'https://anti-pattern.co.jp',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      `${
        process.env.NEXT_PUBLIC_ANTIPATTERN_CORPORATE_SITE_URL ||
        'https://anti-pattern.co.jp'
      }/top-sitemap.xml`, // トップページのサイトマップ
      `${
        process.env.NEXT_PUBLIC_ANTIPATTERN_CORPORATE_SITE_URL ||
        'https://anti-pattern.co.jp'
      }/news-sitemap.xml`, // ニュースページのサイトマップ
      `${
        process.env.NEXT_PUBLIC_ANTIPATTERN_CORPORATE_SITE_URL ||
        'https://anti-pattern.co.jp'
      }/hub-sitemap.xml`, // ハブページのサイトマップ
    ],
  },
}
