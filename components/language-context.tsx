'use client'

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
  type ReactNode,
} from 'react'
import { usePathname, useRouter } from 'next/navigation'
import {
  DEFAULT_LOCALE,
  LOCALE_HTML_LANG,
  LOCALE_STORAGE_KEY,
  LOCALE_TEXT_DIRECTION,
  getLocaleFromPath,
  getLocalePath,
  isLocaleHomePath,
  type Locale,
  isLocale,
} from '@/lib/i18n'
import { getTranslations, type Translations } from '@/lib/translations'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readStoredLocale(): Locale | null {
  if (typeof window === 'undefined') return null
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
  return stored && isLocale(stored) ? stored : null
}

function readCookieLocale(): Locale | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(/(?:^|;\s*)pranarta-locale=([^;]+)/)
  const value = match?.[1]?.toUpperCase()
  return value && isLocale(value) ? value : null
}

function resolveLocale(pathname: string): Locale {
  return (
    getLocaleFromPath(pathname) ??
    readStoredLocale() ??
    readCookieLocale() ??
    DEFAULT_LOCALE
  )
}

function applyLocaleAttributes(locale: Locale) {
  document.documentElement.lang = LOCALE_HTML_LANG[locale]
  document.documentElement.dir = LOCALE_TEXT_DIRECTION[locale]
}

const PAGE_META_KEYS: Record<string, keyof Translations['meta']> = {
  '/': 'home',
  '/sound': 'sound',
  '/body': 'body',
  '/gallery': 'gallery',
  '/about': 'about',
  '/booking': 'booking',
  '/teachings': 'teachings',
  '/signature': 'signature',
}

function applyDocumentTitle(locale: Locale, pathname: string) {
  const normalizedPath = getLocaleFromPath(pathname) ? '/' : pathname
  const metaKey = PAGE_META_KEYS[normalizedPath]
  if (!metaKey) return
  const title = getTranslations(locale).meta[metaKey].title
  document.title = title
  requestAnimationFrame(() => {
    document.title = title
  })
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)

  useLayoutEffect(() => {
    const next = resolveLocale(pathname)
    setLocaleState(next)
    localStorage.setItem(LOCALE_STORAGE_KEY, next)
    applyLocaleAttributes(next)
    applyDocumentTitle(next, pathname)
  }, [pathname])

  const setLocale = useCallback(
    (next: Locale) => {
      setLocaleState(next)
      localStorage.setItem(LOCALE_STORAGE_KEY, next)
      applyLocaleAttributes(next)
      applyDocumentTitle(next, pathname)

      if (isLocaleHomePath(pathname)) {
        router.replace(getLocalePath(next))
      }
    },
    [pathname, router]
  )

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
