import Arrow from 'images/arrow.svg'
import CloudDriver from 'images/clouddriver.png'
import Engineed from 'images/engineed.svg'
import Gateway from 'images/gateway.png'
import Harbors from 'images/harbors.svg'
import Posse from 'images/posse.svg'
import Saasus from 'images/saasus_logo_420.svg'
import Image from 'next/image'
import Link from 'next/link'

const images = [
  { src: Gateway, alt: 'gateway' },
  { src: Harbors, alt: 'harbors' },
  { src: Saasus, alt: 'saasus' },
  { src: Engineed, alt: 'engineed' },
  { src: CloudDriver, alt: 'clouddriver' },
  { src: Posse, alt: 'posse' },
] as const

const Services = ({ lang }: { lang: string }) => {
  return (
    <div className="bg-slate-50 px-10">
      <div className="mx-auto max-w-7xl pt-24 px-6 sm:pt-32 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-ap-green">
          OUR SERVICES
        </h2>
        <p className="mt-5 text-center mb-10 font-bold">
          {lang === 'ja' ? (
            <>
              <span>理念実現に向けて</span>
              <span className="hidden md:inline">、</span>
              <br className="md:hidden" />
              <span>様々な事業を展開しています</span>
            </>
          ) : (
            <span>
              We are working to achieve our ideals through various business
              activities.
            </span>
          )}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5 max-w-lg mx-auto">
          {images.map((img, key) => {
            return (
              <Image
                src={img.src}
                alt={img.alt}
                className="w-32 max-h-10"
                key={key}
              />
            )
          })}
        </div>
        <div>
          <Link
            href="/services"
            className="text-ap-green font-bold mx-auto table mt-10 px-1 pb-1 border-b-[1px] border-ap-green"
          >
            <span>VIEW DETAILS</span>
            <Image src={Arrow} alt="→" className="inline w-8 pb-1 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export { Services }
