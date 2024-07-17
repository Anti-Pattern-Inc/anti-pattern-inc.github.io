import { LANGUAGE_TYPE } from 'const/language-type'
import { useLanguage } from 'contexts/LangContext'

import * as companyEn from '../../public/locales/en/company.json'
import * as company from '../../public/locales/ja/company.json'

const ja = {
  company: company,
}

const en = {
  company: companyEn,
}

export const useLocale = () => {
  const lang = useLanguage()
  const t = lang === LANGUAGE_TYPE.JAPANESE ? ja : en
  return t
}
