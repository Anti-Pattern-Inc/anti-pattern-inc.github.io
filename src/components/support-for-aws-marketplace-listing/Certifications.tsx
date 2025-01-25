import ISMS from 'images/isms.png'
import SaaSCompetency from 'images/saas-competency.png'
import Image from 'next/image'

const Certifications = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 md:gap-10 py-10 md:py-20">
      <h2 className="text-2xl md:text-[34px] md:leading-tight text-[#0277BD] font-bold">
        Certifications
      </h2>
      <div className="flex gap-6 md:gap-20 flex-col md:flex-row">
        <Image
          src={SaaSCompetency}
          alt="saas-competency"
          width={385}
          height={170}
          className="h-full hidden lg:block"
        />
        <Image
          src={SaaSCompetency}
          alt="saas-competency"
          width={280}
          height={124}
          className="h-full lg:hidden"
        />
        <div className="flex flex-col items-center gap-2 md:gap-3">
          <Image
            src={ISMS}
            alt="isms"
            width={335}
            height={170}
            className="hidden lg:block"
          />
          <Image
            src={ISMS}
            alt="isms"
            width={280}
            height={142}
            className="lg:hidden"
          />
          <div className="text-xl leading-8">IS 794005</div>
        </div>
      </div>
    </div>
  )
}

export { Certifications }
