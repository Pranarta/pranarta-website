'use client'

import Link from 'next/link'
import { MessageCircle, Instagram } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { IMAGES, LINKS, whatsappUrl } from '@/lib/site'
import { useTranslations } from '@/hooks/use-translations'

export default function BodyPage() {
  const t = useTranslations()

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[56vh] flex items-center justify-center overflow-hidden bg-dark pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
          style={{ backgroundImage: `url(${IMAGES.headMassage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/70 to-dark" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-14 sm:py-16">
          <Reveal>
            <h1 className="font-serif text-[clamp(2rem,5vw,4rem)] font-light text-beige mb-5 leading-[1.2] tracking-[0.02em]">
              {t.body.hero.h1}
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-serif text-[clamp(1.1rem,2vw,1.4rem)] font-light text-beige/90 mb-4">
              {t.body.hero.subhead}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/80 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              {t.body.hero.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* What Is The Emerald Touch? */}
      <section className="py-20 sm:py-28 bg-dark">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-8 sm:mb-10">
              {t.body.whatIs.heading}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              {t.body.whatIs.para1}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              {t.body.whatIs.para2}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              {t.body.whatIs.para3}
            </p>
          </Reveal>
          <Reveal delay={400}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed">
              {t.body.whatIs.para4}
            </p>
          </Reveal>
        </div>
      </section>

      {/* An Inner Journey */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-8 sm:mb-10">
              {t.body.innerJourney.heading}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              {t.body.innerJourney.para1}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              {t.body.innerJourney.para2}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-beige/60 text-base sm:text-lg font-light leading-relaxed italic">
              {t.body.innerJourney.para3}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Visual interlude */}
      <section className="py-12 sm:py-16 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden border border-gold/20">
              <img
                src={IMAGES.gallery[2].src}
                alt={IMAGES.gallery[2].alt}
                className="w-full h-full object-cover opacity-85"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Story Behind The Emerald Touch */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-8 sm:mb-10">
              {t.body.story.heading}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              {t.body.story.para1}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              {t.body.story.para2}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-beige/60 text-base sm:text-lg font-light leading-relaxed italic">
              {t.body.story.para3}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sound & Touch Experience */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-6">
              {t.body.soundAndTouch.heading}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-beige/70 font-light text-base sm:text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
              {t.body.soundAndTouch.para1}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/60 font-light text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto italic">
              {t.body.soundAndTouch.para2}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/sound"
                className="inline-block px-8 py-4 border border-gold text-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark"
              >
                {t.common.buttons.exploreSoundExperiences}
              </Link>
              <Link
                href="/signature"
                className="inline-block px-8 py-4 border border-gold text-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark"
              >
                {t.common.buttons.signatureExperience}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Book The Emerald Touch */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-6">
              {t.body.bookCta.heading}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/70 text-base sm:text-lg font-light mb-10">
              {t.body.bookCta.text}
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href={whatsappUrl(t.whatsappPrefills.emeraldTouch)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-10 py-4 bg-gold text-dark border border-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-transparent hover:text-gold w-full sm:w-auto min-w-[220px]"
              >
                <MessageCircle className="h-4 w-4" />
                {t.common.buttons.whatsapp}
              </a>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-10 py-4 border border-gold text-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark w-full sm:w-auto min-w-[220px]"
              >
                <Instagram className="h-4 w-4" />
                {t.common.buttons.instagram}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
