'use client'

import { useEffect, useRef, useState } from 'react'
import { Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/components/language-context'
import { LOCALES, type Locale } from '@/lib/i18n'
import { useTranslations } from '@/hooks/use-translations'

type LanguageSelectorProps = {
  className?: string
  iconClassName?: string
  dropdownAlign?: 'left' | 'right' | 'center'
}

export function LanguageSelector({
  className,
  iconClassName,
  dropdownAlign = 'right',
}: LanguageSelectorProps) {
  const [open, setOpen] = useState(false)
  const { locale, setLocale } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const t = useTranslations()

  useEffect(() => {
    if (!open) return

    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const handleSelect = (code: Locale) => {
    setLocale(code)
    setOpen(false)
  }

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={t.a11y.selectLanguage}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={cn(
          'inline-flex items-center justify-center transition-all duration-300',
          'text-beige hover:text-gold hover:drop-shadow-[0_0_8px_rgba(201,169,97,0.2)]',
          'focus:outline-none active:scale-95',
          open && 'text-gold drop-shadow-[0_0_6px_rgba(201,169,97,0.15)]'
        )}
      >
        <Globe
          className={cn('h-[0.95rem] w-[0.95rem]', iconClassName)}
          strokeWidth={1.5}
        />
      </button>

      {open && (
        <div
          dir="ltr"
          role="listbox"
          aria-label={t.a11y.languages}
          className={cn(
            'absolute top-full mt-2 z-[60] min-w-[4.25rem]',
            'border border-gold/20 bg-dark/98 backdrop-blur-[10px]',
            'py-1 shadow-lg shadow-black/25',
            dropdownAlign === 'right' && 'right-0',
            dropdownAlign === 'left' && 'left-0',
            dropdownAlign === 'center' && 'left-1/2 -translate-x-1/2'
          )}
        >
          {LOCALES.map((code) => (
            <button
              key={code}
              type="button"
              role="option"
              aria-selected={locale === code}
              onClick={() => handleSelect(code)}
              className={cn(
                'block w-full px-4 py-1.5 text-left text-[0.72rem] font-light tracking-[0.14em]',
                'transition-colors duration-200',
                locale === code
                  ? 'text-gold'
                  : 'text-beige/75 hover:text-gold hover:bg-gold/5'
              )}
            >
              {code}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
