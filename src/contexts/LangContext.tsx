import { LANGUAGE_TYPE } from 'const/language-type'
import { useRouter } from 'next/router'
import { createContext, ReactNode, useEffect, useState } from 'react'

export const LangContext = createContext<{
  lang: LANGUAGE_TYPE
}>({ lang: LANGUAGE_TYPE.JAPANESE })

type LangContextProviderProps = {
  children?: ReactNode
}

export const LangContextProvider = ({ children }: LangContextProviderProps) => {
  const router = useRouter()
  const locale = router.locale
  const [lang, setLang] = useState<LANGUAGE_TYPE>(LANGUAGE_TYPE.JAPANESE)

  useEffect(() => {
    setLang(locale === 'ja' ? LANGUAGE_TYPE.JAPANESE : LANGUAGE_TYPE.ENGLISH)
  }, [locale])

  return (
    <LangContext.Provider value={{ lang }}>{children}</LangContext.Provider>
  )
}
