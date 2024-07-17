import { LANGUAGE_TYPE } from 'const/language-type'
import { createContext, useContext } from 'react'

export const LangContext = createContext<{
  lang: LANGUAGE_TYPE
}>({ lang: LANGUAGE_TYPE.JAPANESE })

export const useLanguage = () => {
  const { lang } = useContext(LangContext)
  return lang
}
