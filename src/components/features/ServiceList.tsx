import { LANGUAGE_TYPE } from 'const/language-type'
import { useLocale } from 'hooks/useLocale'
import CloudDriver from 'images/clouddriver.png'
import Engineed from 'images/engineed.svg'
import Gateway from 'images/gateway.png'
import HarborS from 'images/harbors.svg'
import Posse from 'images/posse.svg'
import SaasusConsulting from 'images/saasus_consulting_logo_420.svg'
import SaasusPlatform from 'images/saasus_platform_logo_420.svg'
import ServiceLinkIcon from 'images/service-link-icon.png'
import SupportForAwsMarketplaceListing from 'images/support_for_aws_marketplace_listing.png'
import SupportForAwsMarketplaceListingEn from 'images/support_for_aws_marketplace_listing_en.png'
import Image, { StaticImageData } from 'next/image'

type Props = {
  src: StaticImageData
  name: string
  ja_name: string | null
  description: string
  url: string | null
  isBlank: boolean
}

const Service = ({ src, name, ja_name, description, url, isBlank }: Props) => {
  const { t, lang } = useLocale()

  return (
    <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 mt-6 mx-6">
      <div className="flex justify-center items-center border-[1px] h-[calc(50vw)] max-h-64 px-5 col-span-1">
        <Image src={src} alt={name} className="w-48" />
      </div>
      <div className="flex flex-col justify-center col-span-1">
        <h4 className="flex flex-wrap items-end">
          <span className="font-bold text-xl mr-4">{name}</span>
          {lang === LANGUAGE_TYPE.JAPANESE && (
            <span className="font-bold text-sm">{ja_name}</span>
          )}
        </h4>
        <p className="text-sm my-4">{description}</p>
        {url && (
          <p className="text-ap-green">
            <a
              href={url}
              className="border-b-[1px] border-ap-green pb-1 px-1"
              target={isBlank ? '_blank' : '_self'}
              rel="noreferrer"
            >
              <span>SERVICE SITE</span>
              {isBlank && (
                <Image
                  src={ServiceLinkIcon}
                  alt={t.services.service_site.img_alt}
                  className="w-3 inline mb-1 ml-1"
                />
              )}
            </a>
          </p>
        )}
      </div>
    </div>
  )
}

const ServiceList = () => {
  const { t, lang } = useLocale()

  const images: { [key: string]: StaticImageData } = {
    Engineed: Engineed,
    SaasusPlatform: SaasusPlatform,
    SaasusConsulting: SaasusConsulting,
    SupportForAwsMarketplaceListing:
      lang === LANGUAGE_TYPE.JAPANESE
        ? SupportForAwsMarketplaceListing
        : SupportForAwsMarketplaceListingEn,
    Gateway: Gateway,
    HarborS: HarborS,
    Posse: Posse,
    CloudDriver: CloudDriver,
  }

  return (
    <section className="mt-32 mb-32">
      <h2 className="mb-4 md:mb-8 font-bold text-ap-green text-2xl text-center">
        SERVICE LIST
      </h2>
      {t.services.services.map((service, index) => (
        <div
          key={index}
          className={`max-w-lg md:max-w-6xl mx-auto ${index !== 0 && 'mt-24'}`}
        >
          <h3 className="text-center text-sm font-bold">{service.title}</h3>
          {service.detail.map((service, index) => (
            <Service
              key={index}
              src={images[service.src]}
              name={service.name}
              ja_name={service.ja_name}
              description={service.description}
              url={service.url}
              isBlank={service.isBlank}
            />
          ))}
        </div>
      ))}
    </section>
  )
}

export { ServiceList }
