import Innovation from 'images/innovation_logo.png'
import Mercury from 'images/mercury_logo.png'
import Image from 'next/image'

const images = [
  { src: Innovation, alt: 'innovation' },
  { src: Mercury, alt: 'mercury' },
] as const

const Customers = () => {
  return (
    <div className="py-24 px-6 sm:py-32 bg-slate-50">
      <h2 className="text-2xl font-bold text-center mb-10 text-ap-green">
        OUR CUSTOMERS
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {images.map((img, key) => {
          return (
            <div
              className="bg-white w-96 h-48 flex items-center justify-center"
              key={key}
            >
              <Image src={img.src} alt={img.alt} className="w-60" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { Customers }
