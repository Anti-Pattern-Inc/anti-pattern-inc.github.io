import { useLocale } from 'hooks/useLocale'
import Kotani from 'images/kotani.jpg'
import Ozasa from 'images/ozasa.jpg'
import Shinoda from 'images/shinoda.jpg'
import Tsukamoto from 'images/tsukamoto.jpg'
import Yagasaki from 'images/yagasaki.jpg'
import Yamazaki from 'images/yamazaki.jpg'
import Image, { StaticImageData } from 'next/image'

const images: { [key: string]: StaticImageData } = {
  Kotani: Kotani,
  Ozasa: Ozasa,
  Shinoda: Shinoda,
  Tsukamoto: Tsukamoto,
  Yagasaki: Yagasaki,
  Yamazaki: Yamazaki,
}

const Members = () => {
  const { t } = useLocale()

  return (
    <section className="mt-28">
      <h2 className="mt-10 mb-8 font-bold text-ap-green text-2xl text-center">
        MEMBERS
      </h2>
      <div className="flex flex-wrap gap-x-16 gap-y-16 sm:gap-y-32 justify-evenly px-6 max-w-5xl mx-auto">
        {t.company.members.map((member) => {
          return (
            <div className="w-64 " key={member.name}>
              <div className="relative">
                <Image src={images[member.img]} alt={member.name} />
                <h3 className="absolute -bottom-4 ml-0.5 font-bold text-3xl text-ap-green w-32 tracking-widest">
                  {member.en_name}
                </h3>
              </div>
              <p className="text-sm font-bold mt-8">{member.position}</p>
              <p className="font-bold mt-3">{member.name}</p>
              <p className="whitespace-pre-line text-sm leading-6 mt-3 text-neutral-500">
                {member.content}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export { Members }
