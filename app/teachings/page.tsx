'use client'

import { MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { BRAND, whatsappUrl } from '@/lib/site'
import { useTranslations } from '@/hooks/use-translations'

export default function TeachingsPage() {
  const t = useTranslations()

  const teachings = [
    {
      title: t.teachings.cards.handpanDjembe.title,
      subtitle: t.teachings.cards.handpanDjembe.subtitle,
      body: t.teachings.cards.handpanDjembe.body,
      features: t.teachings.cards.handpanDjembe.features,
    },
    {
      title: t.teachings.cards.djPerformance.title,
      subtitle: t.teachings.cards.djPerformance.subtitle,
      body: t.teachings.cards.djPerformance.body,
      features: t.teachings.cards.djPerformance.features,
    },
    {
      title: t.teachings.cards.musicProduction.title,
      subtitle: t.teachings.cards.musicProduction.subtitle,
      body: t.teachings.cards.musicProduction.body,
      features: t.teachings.cards.musicProduction.features,
    },
    {
      title: t.teachings.cards.mentorship.title,
      subtitle: t.teachings.cards.mentorship.subtitle,
      body: t.teachings.cards.mentorship.body,
    },
    {
      title: t.teachings.cards.emeraldTouchTraining.title,
      subtitle: t.teachings.cards.emeraldTouchTraining.subtitle,
      body: t.teachings.cards.emeraldTouchTraining.body,
    },
    {
      title: t.teachings.cards.reikiInitiations.title,
      subtitle: t.teachings.cards.reikiInitiations.subtitle,
      body: t.teachings.cards.reikiInitiations.body,
    },
  ]

  const credibility = [
    t.teachings.credibility.years,
    t.teachings.credibility.international,
    t.teachings.credibility.ableton,
    t.teachings.credibility.creator,
  ]

  return (
    <>
      <section className="relative flex items-center justify-center overflow-hidden bg-dark pt-20">
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto py-10 sm:py-12">
          <Reveal>
            <p className="text-gold text-xs sm:text-sm tracking-[0.2em] uppercase font-light mb-3">
              {BRAND.name}
            </p>
            <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light text-beige mb-5 leading-[1.2] tracking-[0.02em]">
              {t.teachings.hero.h1}
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              {t.teachings.hero.intro}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {teachings.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="p-8 sm:p-10 border border-gold/25 transition-all duration-400 hover:border-gold h-full flex flex-col text-center">
                  <h2 className="font-serif text-[clamp(1.3rem,2.2vw,1.75rem)] font-light text-gold tracking-[0.02em] mb-3">
                    {item.title}
                  </h2>
                  <p className="text-beige/50 text-xs sm:text-sm tracking-[0.12em] uppercase font-light mb-5">
                    {item.subtitle}
                  </p>
                  <p className="text-beige/75 text-sm sm:text-base font-light leading-relaxed mb-6 flex-grow">
                    {item.body}
                  </p>
                  {item.features && (
                    <p className="text-gold/55 text-sm font-light tracking-wide">
                      {item.features}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <Reveal>
            <div className="space-y-4">
              {credibility.map((line) => (
                <p
                  key={line}
                  className="text-beige/60 text-sm sm:text-base font-light tracking-wide"
                >
                  {line}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-6">
              {t.teachings.bookCta.heading}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/70 text-base sm:text-lg font-light mb-10">
              {t.teachings.bookCta.text}
            </p>
          </Reveal>
          <Reveal delay={400}>
            <a
              href={whatsappUrl(t.whatsappPrefills.teachings)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gold text-dark border border-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold/90 hover:border-gold/90 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(201,169,97,0.12)] hover:shadow-[0_4px_24px_rgba(201,169,97,0.22)]"
            >
              <MessageCircle className="h-4 w-4" />
              {t.common.buttons.contactViaWhatsapp}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
