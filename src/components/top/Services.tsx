import Arrow from 'images/arrow.svg'
import Engineed from 'images/engineed.svg'
import Gateway from 'images/gateway.png'
import Harbors from 'images/harbors.svg'
import Posse from 'images/posse.svg'
import Saasus from 'images/saasus_logo_420.svg'
import Image from 'next/image'

const images = [
  { src: Gateway, alt: 'gateway' },
  { src: Engineed, alt: 'engineed' },
  { src: Posse, alt: 'posse' },
  { src: Harbors, alt: 'harbors' },
  { src: Saasus, alt: 'saasus' },
] as const

const Services = () => {
  return (
    <div className="bg-slate-50 px-10">
      <div className="mx-auto max-w-7xl pt-24 px-6 sm:pt-32 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-ap-green">
          OUR SERVICES
        </h2>
        <p className="mt-5 text-center mb-10 font-bold">
          <span>理念実現に向けて</span>
          <span className="hidden md:inline">、</span>
          <br className="md:hidden" />
          <span>様々な事業を展開しています。</span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5 max-w-3xl mx-auto">
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
          <a
            href="#"
            className="text-ap-green font-bold mx-auto table mt-10 px-1 pb-1 border-b-[1px] border-ap-green"
          >
            <span>VIEW DETAILS</span>
            <Image src={Arrow} alt="→" className="inline w-8 pb-1 ml-1" />
          </a>
        </div>
      </div>
    </div>
  )
}

export { Services }
