import ServiceImg from 'images/anti-pattern_service_2022.png'
import ServiceImgSp from 'images/anti-pattern_service_2022-sp.png'
import Image from 'next/image'

const BusinessConcept = () => {
  return (
    <section className="mt-16 md:mt-32">
      <h2 className="mb-4 md:mb-8 font-bold text-ap-green text-2xl text-center">
        BUSINESS CONCEPT
      </h2>
      <div className="max-w-md lg:max-w-6xl mx-auto px-10">
        <Image
          src={ServiceImg}
          alt="ビジネスコンセプト"
          className="hidden lg:block"
        />
        <Image
          src={ServiceImgSp}
          alt="ビジネスコンセプト"
          className="lg:hidden"
        />
      </div>
    </section>
  )
}

export { BusinessConcept }
