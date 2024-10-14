import { LANGUAGE_TYPE } from 'const/language-type'
import { useRouter } from 'next/router'

import * as commonEn from '../../public/locales/en/common.json'
import * as companyEn from '../../public/locales/en/company.json'
import * as servicesEn from '../../public/locales/en/services.json'
import * as commonJa from '../../public/locales/ja/common.json'
import * as companyJa from '../../public/locales/ja/company.json'
import * as servicesJa from '../../public/locales/ja/services.json'

const ja = {
  common: commonJa,
  company: companyJa,
  services: servicesJa,
}

const en = {
  common: commonEn,
  company: companyEn,
  services: servicesEn,
}

export const useLocale = () => {
  const router = useRouter()
  const locale = router.locale
  const lang = locale === 'ja' ? LANGUAGE_TYPE.JAPANESE : LANGUAGE_TYPE.ENGLISH
  const t = lang === LANGUAGE_TYPE.JAPANESE ? ja : en

  return { t, lang }
}
