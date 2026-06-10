'use client'

import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { BRAND, IMAGES } from '@/lib/site'
import { useTranslations } from '@/hooks/use-translations'

export default function AboutPage() {
  const t = useTranslations()

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-dark pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
          style={{ backgroundImage: `url(${IMAGES.gallery[0].src})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/70 to-dark" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-16 sm:py-20">
          <Reveal>
            <p className="text-gold text-xs sm:text-sm tracking-[0.2em] uppercase font-light mb-4">
              {BRAND.name}
            </p>
            <h1 className="font-serif text-[clamp(2rem,5vw,4rem)] font-light text-beige mb-6 leading-[1.2] tracking-[0.02em]">
              {t.about.hero.h1}
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-serif text-[clamp(1.1rem,2vw,1.4rem)] font-light text-beige/90">
              {t.about.hero.subhead}
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Path */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-8 sm:mb-10">
              {t.about.path.heading}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              {t.about.path.para1}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed">
              {t.about.path.para2}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sound */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-8 sm:mb-10">
              {t.about.sound.heading}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              {t.about.sound.para1}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed">
              {t.about.sound.para2}
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Emerald Touch */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-8 sm:mb-10">
              {t.about.emeraldTouch.heading}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              {t.about.emeraldTouch.para1}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed">
              {t.about.emeraldTouch.para2}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Ibiza */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-8 sm:mb-10">
              {t.about.ibiza.heading}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              {t.about.ibiza.para1}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/60 text-base sm:text-lg font-light leading-relaxed italic">
              {t.about.ibiza.para2}
            </p>
          </Reveal>
        </div>
      </section>

      {/* A Musical Reflection */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-8 sm:mb-10">
              {t.about.musicalReflection.heading}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              {t.about.musicalReflection.para1}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-8">
              {t.about.musicalReflection.para2}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <a
              href="https://open.spotify.com/album/3HOTX8mNeh4Y6gqlM76TXn?si=mir-Bnk4TP2ls05htIxdtQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border border-gold text-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark"
            >
              {t.common.buttons.listenOnSpotify}
            </a>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <p className="text-beige/70 text-base sm:text-lg font-light mb-10">
              {t.about.closing.text}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/sound"
                className="inline-block px-8 py-4 bg-gold text-dark border border-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-transparent hover:text-gold w-full sm:w-auto text-center min-w-[240px]"
              >
                {t.common.buttons.soundExperiences}
              </Link>
              <Link
                href="/body"
                className="inline-block px-8 py-4 border border-gold text-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark w-full sm:w-auto text-center min-w-[240px]"
              >
                {t.common.buttons.theEmeraldTouch}
              </Link>
              <Link
                href="/signature"
                className="inline-block px-8 py-4 border border-gold text-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark w-full sm:w-auto text-center min-w-[240px]"
              >
                {t.common.buttons.signatureExperience}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
