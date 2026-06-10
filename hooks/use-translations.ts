'use client'

import { useMemo } from 'react'
import { useLanguage } from '@/components/language-context'
import { getTranslations } from '@/lib/translations'

export function useTranslations() {
  const { locale } = useLanguage()
  return useMemo(() => getTranslations(locale), [locale])
}
