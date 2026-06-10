import type { Locale } from '../i18n'
import type { Translations } from './types'
import { en } from './en'
import { es } from './es'
import { fr } from './fr'
import { de } from './de'
import { nl } from './nl'
import { it } from './it'
import { ru } from './ru'
import { he } from './he'

export type { Translations }
export { en, es, fr, de, nl, it, ru, he }

export const translations: Record<Locale, Translations> = {
  EN: en,
  ES: es,
  FR: fr,
  DE: de,
  NL: nl,
  IT: it,
  RU: ru,
  HE: he,
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? en
}
