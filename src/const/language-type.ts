export const LANGUAGE_TYPE = {
  ENGLISH: 'en',
  JAPANESE: 'ja',
} as const

export type LANGUAGE_TYPE = typeof LANGUAGE_TYPE[keyof typeof LANGUAGE_TYPE]
