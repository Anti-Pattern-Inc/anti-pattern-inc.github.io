import RecruitImg from 'images/top_recruit.jpg'
import Image from 'next/image'

export default function Recruit({ lang }: { lang: string }) {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <Image src={RecruitImg} alt="recruit" className="object-cover h-full" />
        <div
          className="absolute inset-0 mix-blend-multiply bg-neutral-900 opacity-30"
          aria-hidden="true"
        />
      </div>
      <div className="relative py-20 px-6 sm:py-28 lg:px-8">
        <h2 className="text-2xl font-bold text-white text-center">RECRUIT</h2>

        <p className="mt-6 text-white font-bold text-center pb-5">
          {lang === 'ja'
            ? '私たちは一緒に理念達成に向けて活動してくれる仲間を探しています。'
            : 'We are looking for partners who will work together to achieve our ideals.'}
        </p>
        <div className="flex justify-center">
          <a
            href="https://www.wantedly.com/companies/company_9083588"
            target="_blank"
            type="button"
            className="rounded-full border border-transparent bg-gradient-to-r from-[#0d93e0] to-[#00c4c4] w-96 py-3 text-base text-center font-medium text-white shadow-sm"
            rel="noreferrer"
          >
            WANTEDLY
          </a>
        </div>
      </div>
    </div>
  )
}
