import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'
import { Break } from 'components/common/Break'
import UnknownErrorHero from 'images/unknown_error_hero.png'
import Image from 'next/image'
import Link from 'next/link'

const UnknownError = () => {
  return (
    <section className="flex flex-col items-center gap-6 md:gap-10 py-10 md:py-20 mx-10">
      <Image
        src={UnknownErrorHero}
        alt="Thank you for your inquiry"
        className="max-w-[500px] w-full"
      />
      <h1 className="text-[#01579B] text-2xl md:text-[34px] md:leading-tight font-bold text-center">
        予期せぬエラーが
        <Break type="sm-pc-none" />
        発生しました
      </h1>
      <p className="text-center text-xl leading-8 tracking-[0.15px]">
        大変申し訳ありませんが、
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSd0kJB1wJCNdXCi9NDz9OTKuuBllPPylh_jTCNaVZfSdra2RQ/viewform"
          className="text-[#0277BD] hover:text-[#039BE5] underline"
        >
          こちらのフォーム
        </Link>
        より
        <Break type="md-sp-none" />
        ご連絡いただけますと幸いです。
      </p>
      <Link
        href="/services/support-for-aws-marketplace-listing"
        className="flex justify-center items-center gap-2 bg-[#263238] text-white text-bold text-base md:text-xl md:leading-8 py-4 px-10 rounded-full hover:bg-[#37474F]"
      >
        <ArrowUturnLeftIcon className="h-6 w-6 inline" />
        サービスページに戻る
      </Link>
    </section>
  )
}

export { UnknownError }
