'use client'

import Link from 'next/link'
import { Instagram, MessageCircle, Mail, MapPin } from 'lucide-react'
import { BRAND, LINKS } from '@/lib/site'
import { useTranslations } from '@/hooks/use-translations'
import { interpolate } from '@/lib/translation-helpers'

export function Footer() {
  const t = useTranslations()

  const navigation = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.sound, href: '/sound' },
    { name: t.nav.body, href: '/body' },
    { name: t.nav.signature, href: '/signature' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.gallery, href: '/gallery' },
    { name: t.nav.teachings, href: '/teachings' },
    { name: t.nav.booking, href: '/booking' },
  ]
  return (
    <footer className="bg-dark border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-gold text-sm tracking-[0.15em] uppercase font-light mb-1">
              {BRAND.name}
            </h3>
            <p className="text-beige/50 text-xs tracking-[0.08em] font-light mb-4 normal-case">
              {t.common.byline}
            </p>
            <p className="text-beige/70 font-light leading-relaxed mb-2 max-w-md text-sm italic">
              {t.brand.tagline}
            </p>
            <p className="text-beige/70 font-light leading-relaxed mb-6 max-w-md text-sm">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-2 text-beige/50 text-sm">
              <MapPin className="h-4 w-4" />
              <span>{t.common.ibizaSpain}</span>
            </div>
          </div>

          <div>
            <h4 className="text-gold text-xs tracking-[0.15em] uppercase font-light mb-6">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-beige/70 hover:text-gold transition-colors duration-300 text-sm font-light"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-xs tracking-[0.15em] uppercase font-light mb-6">
              {t.footer.connect}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-beige/70 hover:text-gold transition-colors duration-300 text-sm"
                >
                  <Instagram className="h-4 w-4 shrink-0" />
                  @pranarta7
                </a>
              </li>
              <li>
                <a
                  href={LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-beige/70 hover:text-gold transition-colors duration-300 text-sm"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  {t.common.buttons.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={LINKS.email}
                  className="flex items-center gap-3 text-beige/70 hover:text-gold transition-colors duration-300 text-sm break-all"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {t.common.buttons.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-beige/40 text-xs font-light text-center md:text-left">
              {interpolate(t.footer.copyright, { year: new Date().getFullYear() })}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gold/20 text-beige/70 hover:border-gold hover:text-gold transition-all duration-300"
                aria-label={t.a11y.instagram}
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gold/20 text-beige/70 hover:border-gold hover:text-gold transition-all duration-300"
                aria-label={t.a11y.whatsapp}
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={LINKS.email}
                className="p-2 border border-gold/20 text-beige/70 hover:border-gold hover:text-gold transition-all duration-300"
                aria-label={t.a11y.email}
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
