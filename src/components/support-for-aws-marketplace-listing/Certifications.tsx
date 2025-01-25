import ISMS from 'images/isms.png'
import SaaSCompetency from 'images/saas-competency.png'
import Image from 'next/image'

const Certifications = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-20">
      <h2 className="text-[34px] text-[#0277BD] font-bold">Certifications</h2>
      <div className="flex gap-20">
        <Image
          src={SaaSCompetency}
          alt="saas-competency"
          width={385}
          height={170}
          className="h-full"
        />
        <div className="flex flex-col items-center gap-3">
          <Image src={ISMS} alt="isms" width={335} height={170} className="" />
          <div className="text-xl leading-8">IS 794005</div>
        </div>
      </div>
    </div>
  )
}

export { Certifications }
