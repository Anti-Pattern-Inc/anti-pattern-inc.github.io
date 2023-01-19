import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Logo from 'images/anti-pattern_logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

const resources = [
  {
    name: 'サービス',
    href: 'services',
    icon: ChartBarIcon,
  },
  {
    name: '会社概要',
    href: 'company',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'ニュース',
    href: '/news',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Hub',
    href: 'hub',
    icon: Squares2X2Icon,
  },
]

export default function Header() {
  const router = useRouter()
  const isCurrentPage = (href: string) => {
    return router.pathname.startsWith(href)
  }
  return (
    <Popover className="relative z-50 max-w-7xl mx-auto">
      <div className="flex items-center justify-between p-6 md:justify-start md:space-x-10">
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
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden space-x-10 md:flex mt-1">
          {resources.map((resource) => {
            return (
              <Link
                key={resource.name}
                href={resource.href}
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
        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <a
            href="#"
            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-ap-green px-4 py-2 text-sm text-white shadow-sm"
          >
            お問い合わせ
          </a>
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
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
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
                    <a
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
                    </a>
                  ))}
                </nav>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-full border border-transparent bg-ap-green px-4 py-2 text-base font-medium text-white shadow-sm"
                >
                  お問い合わせ
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  <a href="#" className="text-ap-green">
                    プライバシーポリシー
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
