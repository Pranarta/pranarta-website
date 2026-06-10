export const LOCALES = ['EN', 'ES', 'FR', 'DE', 'NL', 'IT', 'RU', 'HE'] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'EN'

export const LOCALE_STORAGE_KEY = 'pranarta-locale'

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  EN: 'en',
  ES: 'es',
  FR: 'fr',
  DE: 'de',
  NL: 'nl',
  IT: 'it',
  RU: 'ru',
  HE: 'he',
}

export const LOCALE_TEXT_DIRECTION: Record<Locale, 'ltr' | 'rtl'> = {
  EN: 'ltr',
  ES: 'ltr',
  FR: 'ltr',
  DE: 'ltr',
  NL: 'ltr',
  IT: 'ltr',
  RU: 'ltr',
  HE: 'rtl',
}

export const LOCALE_PATH_PREFIX: Record<Locale, string> = {
  EN: '/',
  ES: '/es',
  FR: '/fr',
  DE: '/de',
  NL: '/nl',
  IT: '/it',
  RU: '/ru',
  HE: '/he',
}

const PATH_SEGMENT_TO_LOCALE: Record<string, Locale> = {
  es: 'ES',
  fr: 'FR',
  de: 'DE',
  nl: 'NL',
  it: 'IT',
  ru: 'RU',
  he: 'HE',
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}

export function getLocaleFromPath(pathname: string): Locale | null {
  const segment = pathname.split('/').filter(Boolean)[0]?.toLowerCase()
  if (!segment) return null
  return PATH_SEGMENT_TO_LOCALE[segment] ?? null
}

export function isLocaleHomePath(pathname: string): boolean {
  return pathname === '/' || Object.keys(PATH_SEGMENT_TO_LOCALE).some((code) => pathname === `/${code}`)
}

export function getLocalePath(locale: Locale): string {
  return LOCALE_PATH_PREFIX[locale]
}
