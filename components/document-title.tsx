'use client'

import { useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/components/language-context'
import { useTranslations } from '@/hooks/use-translations'
import { getLocaleFromPath, isLocaleHomePath } from '@/lib/i18n'
import type { Translations } from '@/lib/translations'

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

function resolveMetaPath(pathname: string) {
  if (isLocaleHomePath(pathname) && getLocaleFromPath(pathname)) {
    return '/'
  }
  return pathname
}

export function DocumentTitle() {
  const pathname = usePathname()
  const { locale } = useLanguage()
  const t = useTranslations()

  useLayoutEffect(() => {
    const metaKey = PAGE_META_KEYS[resolveMetaPath(pathname)]
    if (metaKey && t.meta[metaKey]) {
      document.title = t.meta[metaKey].title
    }
  }, [pathname, locale, t])

  return null
}
