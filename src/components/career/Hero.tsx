import HeroImg from 'images/anti-pattern_career_hero.jpg'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative h-[400px] sm:h-[520px] w-full overflow-x-clip">
      <div className="absolute inset-0">
        <Image src={HeroImg} alt="hero_img" className="h-full object-cover" />
      </div>
      <div className="absolute flex items-center h-full mx-auto max-w-7xl px-6 lg:px-8">
        <h2>
          <span className="text-white block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            「ソフトウェアエンジニアリングを通じて
            <br />
            人や企業の成長を促進し、日本の発展を加速させる」
            <br />
            <span className="block mt-10">
              アンチパターンでは一緒に働く仲間を募集しています。
            </span>
          </span>
        </h2>
      </div>
    </div>
  )
}

export { Hero }
