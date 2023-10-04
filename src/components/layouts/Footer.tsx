import { Square2StackIcon } from '@heroicons/react/24/outline'
import Facebook from 'images/fb-w.png'
import Linkedin from 'images/li-w.png'
import X from 'images/x-logo-white.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const images = [
  {
    src: Facebook,
    alt: 'Facebook',
    href: 'https://www.facebook.com/people/Anti-Pattern-Inc/100039176570521/',
  },
  {
    src: X,
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
  const { locale } = useRouter()
  return (
    <div className="bg-ap-green w-screen">
      <div className="pt-10 pb-20 px-6 flex flex-wrap justify-between max-w-7xl mx-auto">
        <div className="pr-6">
          <a
            href="https://tech.anti-pattern.co.jp/"
            target={'_blank'}
            rel="noreferrer"
            className="flex items-center gap-1"
          >
            <span className="text-white text-sm">
              {locale === 'ja' ? 'エンジニアブログ' : 'Engineer Blog'}
            </span>
            <span>
              <Square2StackIcon stroke="white" className="w-4 rotate-90" />
            </span>
          </a>
          <div className="flex flex-wrap gap-5 mt-5">
            {images.map((img, key) => {
              return (
                <a href={img.href} target="_blank" key={key} rel="noreferrer">
                  <span>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      className={
                        img.alt == 'Twitter' ? 'w-4 inline' : 'w-6 inline'
                      }
                    />
                  </span>
                  <span className="text-white text-xs ml-2">{img.alt}</span>
                </a>
              )
            })}
          </div>
        </div>
        <div className="pt-10">
          <Link href="/legal" className="block text-white text-sm">
            {locale === 'ja' ? 'プライバシーポリシー' : 'Privacy Policy'}
          </Link>
          <Link
            href="/information-security-policy"
            className="block text-white text-sm"
          >
            {locale === 'ja'
              ? '情報セキュリティ方針'
              : 'Information Security Policy'}
          </Link>
          <p className="mt-5 text-xs text-gray-600">© 2023 Anti-Pattern Inc.</p>
        </div>
      </div>
    </div>
  )
}

export { Footer }
