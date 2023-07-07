import HeroImg from 'images/anti-pattern_career_hero.jpg'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative h-[400px] sm:h-[520px] w-full overflow-x-clip">
      <div className="absolute inset-0">
        <Image src={HeroImg} alt="hero_img" className="h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute flex items-center h-full w-full mx-auto px-6">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-white block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            「ソフトウェアエンジニアリングを通じて
            <br />
            人や企業の成長を促進し、日本の発展を加速させる」
          </p>
          <h1 className="text-white block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-10">
            アンチパターンでは一緒に働く仲間を募集しています。
          </h1>
        </div>
      </div>
    </div>
  )
}

export { Hero }
