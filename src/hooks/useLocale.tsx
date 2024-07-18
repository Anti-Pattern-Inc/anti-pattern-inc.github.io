import { LANGUAGE_TYPE } from 'const/language-type'
import { useLanguage } from 'contexts/LangContext'

import * as companyEn from '../../public/locales/en/company.json'
import * as servicesEn from '../../public/locales/en/services.json'
import * as company from '../../public/locales/ja/company.json'
import * as services from '../../public/locales/ja/services.json'

const ja = {
  company: company,
  services: services,
}

const en = {
  company: companyEn,
  services: servicesEn,
}

export const useLocale = () => {
  const lang = useLanguage()
  const t = lang === LANGUAGE_TYPE.JAPANESE ? ja : en
  return t
}
