import Image from 'next/image'

import HeroImg from '../images/hero_img.png'

export default function Hero() {
  return (
    <div className="relative h-[520px]">
      <div className="absolute inset-0">
        <Image src={HeroImg} alt="hero_img" className="h-full object-cover" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-52">
        <p className="mb-4 text-3xl font-bold text-center">
          日本のソフトウェアエンジニアを
        </p>
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl text-center">
          憧れの職業へ
        </h1>
      </div>
    </div>
  )
}
