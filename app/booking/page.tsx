'use client'

import { MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { whatsappUrl } from '@/lib/site'
import { useTranslations } from '@/hooks/use-translations'

export default function BookingPage() {
  const t = useTranslations()

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-dark pt-20">
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-2xl mx-auto py-16 sm:py-20">
        <Reveal>
          <h1 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-beige tracking-[0.02em] mb-6">
            {t.booking.h1}
          </h1>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-beige/75 font-light text-base sm:text-lg leading-relaxed mb-6">
            {t.booking.para1}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-gold/50 text-sm font-light tracking-wide mb-10">
            {t.booking.services}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <a
            href={whatsappUrl(t.whatsappPrefills.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gold text-dark border border-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-transparent hover:text-gold hover:-translate-y-0.5 shadow-[0_0_20px_rgba(201,169,97,0.12)] hover:shadow-[0_4px_24px_rgba(201,169,97,0.22)]"
          >
            <MessageCircle className="h-4 w-4" />
            {t.common.buttons.contactDirectlyViaWhatsapp}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
