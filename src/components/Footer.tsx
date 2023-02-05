import BlogLink from 'images/blog-link-icon.png'
import Facebook from 'images/fb-w.png'
import Linkedin from 'images/li-w.png'
import Twitter from 'images/tw-w.png'
import Image from 'next/image'

const images = [
  {
    src: Facebook,
    alt: 'Facebook',
    href: 'https://www.facebook.com/people/Anti-Pattern-Inc/100039176570521/',
  },
  {
    src: Twitter,
    alt: 'Twitter',
    href: 'https://twitter.com/antipatterninc',
  },
  {
    src: Linkedin,
    alt: 'LinkedIn',
    href: 'https://www.linkedin.com/company/anti-pattern/',
  },
] as const

const Footer = () => {
  return (
    <div className="bg-ap-green pt-10 pb-20 px-6 flex flex-wrap justify-between">
      <div className="pr-6">
        <a
          href="https://tech.anti-pattern.co.jp/"
          target={'_blank'}
          rel="noreferrer"
        >
          <span className="text-white text-sm">エンジニアブログ</span>
          <span>
            <Image
              src={BlogLink}
              alt="blog"
              className="w-2 inline ml-1 pb-0.5"
            />
          </span>
        </a>
        <div className="flex flex-wrap gap-5 mt-5">
          {images.map((img, key) => {
            return (
              <a href={img.href} target="_blank" key={key} rel="noreferrer">
                <span>
                  <Image src={img.src} alt={img.alt} className="w-6 inline" />
                </span>
                <span className="text-white text-xs ml-2">{img.alt}</span>
              </a>
            )
          })}
        </div>
      </div>
      <div className="pt-10">
        <a href="#" className="text-white text-sm">
          プライバシーポリシー
        </a>
        <p className="mt-5 text-xs text-gray-600">© 2022 Anti-Pattern Inc.</p>
      </div>
    </div>
  )
}

export { Footer }
