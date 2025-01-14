import { useLocale } from 'hooks/useLocale'
import HeroBoxes from 'images/hero_boxes.png'
import HeroBoxesSp from 'images/hero_boxes_sp.png'
import HeroImg from 'images/hero_img.png'
import Image from 'next/image'
import { SmBreak } from 'components/common/break/smbreak'

const Hero = () => {
  const { t } = useLocale()

  return (
    <div className="relative h-[520px] w-full overflow-x-clip">
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
        className="sm:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[320px] w-[500px]"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-52">
        <h1>
          <span className="block sm:mb-4 text-xl sm:text-3xl font-bold text-center">
            {t.common.hero.title.line1}
            <SmBreak />
            {t.common.hero.title.line2}
          </span>
          <span className="block text-[44px] font-bold sm:text-5xl lg:text-6xl text-center">
            {t.common.hero.subtitle}
          </span>
        </h1>
      </div>
    </div>
  )
}

export { Hero }
