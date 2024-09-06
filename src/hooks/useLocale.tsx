import { LANGUAGE_TYPE } from 'const/language-type'
import { useRouter } from 'next/router'

import * as companyEn from '../../public/locales/en/company.json'
import * as companyJa from '../../public/locales/ja/company.json'

const ja = {
  company: companyJa,
}

const en = {
  company: companyEn,
}

export const useLocale = () => {
  const router = useRouter()
  const locale = router.locale
  const lang = locale === 'ja' ? LANGUAGE_TYPE.JAPANESE : LANGUAGE_TYPE.ENGLISH
  const t = lang === LANGUAGE_TYPE.JAPANESE ? ja : en

  return { t, lang }
}
