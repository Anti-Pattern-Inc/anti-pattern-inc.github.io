import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'
import { Break } from 'components/common/Break'
import ThanksHero from 'images/thanks_hero.png'
import Image from 'next/image'
import Link from 'next/link'

const Thanks = () => {
  return (
    <section className="flex flex-col items-center gap-6 md:gap-10 py-10 md:py-20 mx-10">
      <Image
        src={ThanksHero}
        alt="Thank you for your inquiry"
        className="max-w-[500px] w-full"
      />
      <h1 className="text-[#01579B] text-2xl md:text-[34px] md:leading-tight font-bold">
        送信が完了しました
      </h1>
      <p className="text-center text-xl leading-8 tracking-[0.15px]">
        お問い合わせ頂き誠にありがとうございます。
        <br />
        お送り頂きました内容を確認の上、
        <Break type="md-sp-none" />
        通常1営業日以内に折り返しご連絡させて頂きます。
      </p>
      <Link
        href="/services/support-for-aws-marketplace-listing"
        className="flex justify-center items-center gap-2 bg-[#EF6C00] text-white text-bold text-base md:text-xl md:leading-8 py-4 px-10 rounded-full hover:bg-[#E65100]"
      >
        <ArrowUturnLeftIcon className="h-6 w-6 inline" />
        サービスページに戻る
      </Link>
    </section>
  )
}

export { Thanks }
