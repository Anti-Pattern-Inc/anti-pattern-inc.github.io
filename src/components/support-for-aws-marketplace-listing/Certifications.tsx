import AwsPartnerAndSaasCompetency from 'images/advanced_tier-saas_competency.png'
import ISMS from 'images/mark-of-trust-certified-ISOIEC-27001.png'
import Image from 'next/image'

const Certifications = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 md:gap-10 py-10 md:py-20">
      <h2 className="text-2xl md:text-[34px] md:leading-tight text-[#0277BD] font-bold">
        Certifications
      </h2>
      <div className="flex gap-6 md:gap-20 flex-col md:flex-row">
        <Image
          src={AwsPartnerAndSaasCompetency}
          alt="AWS Partner Select Tier Services and SaaS Services Competency"
          className="h-[124px] lg:h-[170px] w-auto"
        />
        <div className="flex flex-col items-center gap-2 md:gap-3">
          <Image
            src={ISMS}
            alt="ISO/IEC 27001 Information Security Management System Certification"
            className="h-[142px] lg:h-[170px] w-auto"
          />
          <div className="text-xl leading-8">IS 794005</div>
        </div>
      </div>
    </div>
  )
}

export { Certifications }
