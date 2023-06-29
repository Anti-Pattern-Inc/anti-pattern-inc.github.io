import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  CubeTransparentIcon,
  CursorArrowRaysIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  NewspaperIcon,
  Squares2X2Icon,
  XMarkIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import Logo from 'images/anti-pattern_logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

const Header = () => {
  const { pathname, locale, asPath } = useRouter()
  const isCurrentPage = (href: string) => {
    return pathname.startsWith(href)
  }

  const LanguageSwitchButton = () => {
    return (
      <Link
        href={asPath}
        locale={locale === 'ja' ? 'en' : 'ja'}
        type="button"
        className="hidden inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ap-green focus:ring-offset-2"
      >
        <GlobeAltIcon
          className="h-5 w-5 text-gray-700 mr-1"
          aria-hidden="true"
        />
        {locale === 'ja' ? 'English' : '日本語'}
      </Link>
    )
  }

  type Resources = {
    name: string
    href: string
    icon: (
      props: React.ComponentProps<'svg'> & { title?: string; titleId?: string },
    ) => JSX.Element
    isTargetBlank?: boolean
  }

  const resources: ReadonlyArray<Resources> = [
    {
      name: locale === 'ja' ? 'サービス' : 'Services',
      href: '/services',
      icon: CubeTransparentIcon,
    },
    {
      name: locale === 'ja' ? '会社概要' : 'Company',
      href: '/company',
      icon: CursorArrowRaysIcon,
    },
    {
      name: locale === 'ja' ? 'ニュース' : 'News',
      href: '/news/1',
      icon: NewspaperIcon,
    },
    {
      name: 'Hub',
      href: '/hub/1',
      icon: Squares2X2Icon,
    },
    {
      name: 'ブログ',
      href: 'https://tech.anti-pattern.co.jp/',
      icon: DocumentTextIcon,
      isTargetBlank: true,
    },
    {
      name: locale === 'ja' ? 'キャリア' : 'Career',
      href: '/career',
      icon: UserGroupIcon,
    },
  ] as const

  return (
    <Popover className="relative z-50 max-w-7xl mx-auto">
      <div className="flex items-center justify-between p-6 lg:justify-start lg:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            <span className="sr-only">Anti-Pattern Inc.</span>
            <Image
              src={Logo}
              alt="anti-pattern"
              className="h-6 w-auto sm:h-8"
            />
          </Link>
        </div>
        <div className="lg:hidden flex items-center gap-5">
          <LanguageSwitchButton />
          <div className="-my-2 -mr-2">
            <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
        <Popover.Group as="nav" className="hidden space-x-10 lg:flex mt-1">
          {resources.map((resource) => {
            return (
              <Link
                key={resource.name}
                href={resource.href}
                target={resource.isTargetBlank ? '_blank' : ''}
                className={
                  'text-base font-medium text-gray-500 hover:text-gray-900 pb-1 ' +
                  (isCurrentPage(resource.href)
                    ? 'border-b-2 border-gray-500'
                    : '')
                }
              >
                {resource.name}
              </Link>
            )
          })}
        </Popover.Group>
        <div className="hidden items-center justify-end lg:flex gap-6 lg:flex-1 lg:w-0">
          <LanguageSwitchButton />
          <div className="block">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd0kJB1wJCNdXCi9NDz9OTKuuBllPPylh_jTCNaVZfSdra2RQ/viewform"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-ap-green px-4 py-2 text-sm text-white shadow-sm"
            >
              {locale === 'ja' ? 'お問い合わせ' : 'Contact'}
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image src={Logo} alt="anti-pattern" className="h-8 w-auto" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  {resources.map((resource) => (
                    <Link
                      key={resource.name}
                      href={resource.href}
                      className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-ap-green text-white">
                        <resource.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        {resource.name}
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="mt-6">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd0kJB1wJCNdXCi9NDz9OTKuuBllPPylh_jTCNaVZfSdra2RQ/viewform"
                  className="flex w-full items-center justify-center rounded-full border border-transparent bg-ap-green px-4 py-2 text-base font-medium text-white shadow-sm"
                >
                  {locale === 'ja' ? 'お問い合わせ' : 'Contact'}
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  <Link href="/legal" className="text-ap-green">
                    {locale === 'ja'
                      ? 'プライバシーポリシー'
                      : 'Privacy Policy'}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export { Header }
