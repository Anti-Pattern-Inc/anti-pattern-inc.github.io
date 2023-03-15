import HeroBoxes from 'images/hero_boxes.png'
import HeroBoxesSp from 'images/hero_boxes_sp.png'
import HeroImg from 'images/hero_img.png'
import Image from 'next/image'

const Hero = ({ lang }: { lang: string }) => {
  return (
    <div className="relative h-[520px] w-full overflow-x-clip z-50">
      <div className="absolute inset-0">
        <Image src={HeroImg} alt="hero_img" className="h-full object-cover" />
      </div>
      <Image
        src={HeroBoxes}
        alt="hero_boxes"
        className="hidden sm:block absolute left-1/2 top-16 md:top-5 -translate-x-1/2 sm:max-w-[1000px] md:max-w-[1200px] xl:max-w-[1600px]"
      />
      <Image
        src={HeroBoxesSp}
        alt="hero_boxes_sp"
        className="sm:hidden absolute left-1/2 top-5 -translate-x-1/2 max-w-[500px]"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-52">
        <h1>
          <span className="block mb-4 text-3xl font-bold text-center">
            {lang === 'ja'
              ? '日本のソフトウェアエンジニアを'
              : 'BRINGING JAPANESE SOFTWARE ENGINEERING TO'}
          </span>
          <span className="block text-4xl font-bold sm:text-5xl lg:text-6xl text-center">
            {lang === 'ja'
              ? '憧れの職業へ'
              : 'THE NEXT ASPIRATIONAL OCCUPATION'}
          </span>
        </h1>
      </div>
    </div>
  )
}

export { Hero }
