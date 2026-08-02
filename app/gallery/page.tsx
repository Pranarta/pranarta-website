'use client'

import { Reveal } from '@/components/reveal'
import { Instagram } from 'lucide-react'
import { BRAND, IMAGES, LINKS } from '@/lib/site'
import { useTranslations } from '@/hooks/use-translations'

export default function GalleryPage() {
  const t = useTranslations()

  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-dark pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${IMAGES.gallery[0].src})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/70 to-dark" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-16">
          <Reveal>
            <p className="text-gold text-xs sm:text-sm tracking-[0.2em] uppercase font-light mb-4">
              {BRAND.name}
            </p>
            <h1 className="font-serif text-[clamp(1.25rem,2.2vw,1.75rem)] font-light text-beige tracking-[0.02em]">
              {t.gallery.hero.h1}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-dark">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {IMAGES.gallery.map((image, index) => (
              <Reveal key={image.src} delay={index * 100}>
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-[4/5] bg-dark-lighter border border-gold/20 overflow-hidden transition-all duration-300 hover:border-gold"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-center">
                      <Instagram className="h-6 w-6 text-beige mx-auto" />
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.25rem,2.2vw,1.75rem)] font-light text-beige tracking-[0.02em] text-center mb-8">
              {t.gallery.liveMoments.heading}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <Reveal delay={100}>
              <a
                href="https://www.instagram.com/reel/DLmRftORSh9/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-gold/25 transition-all duration-400 hover:border-gold overflow-hidden h-full"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={IMAGES.liveShow}
                    alt={t.gallery.cards.handpan.imageAlt}
                    className="w-full h-full object-cover opacity-75 transition-all duration-500 group-hover:opacity-90 group-hover:scale-105"
                  />
                </div>
                <div className="p-7 sm:p-8 text-center">
                  <h3 className="font-serif text-gold text-xl sm:text-2xl font-light mb-3 group-hover:tracking-wide transition-all duration-300">
                    {t.gallery.cards.handpan.imageAlt}
                  </h3>
                  <p className="text-beige/70 font-light text-sm sm:text-base mb-6">
                    {t.gallery.cards.handpan.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.15em] uppercase font-light group-hover:tracking-[0.2em] transition-all duration-300">
                    <Instagram className="h-4 w-4" />
                    {t.common.buttons.watchOnInstagram}
                  </span>
                </div>
              </a>
            </Reveal>

            <Reveal delay={200}>
              <a
                href="https://www.instagram.com/p/DQCUhv_CJby/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-gold/25 transition-all duration-400 hover:border-gold overflow-hidden h-full"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={IMAGES.headMassage}
                    alt={t.gallery.cards.emeraldTouch.imageAlt}
                    className="w-full h-full object-cover opacity-75 transition-all duration-500 group-hover:opacity-90 group-hover:scale-105"
                  />
                </div>
                <div className="p-7 sm:p-8 text-center">
                  <h3 className="font-serif text-gold text-xl sm:text-2xl font-light mb-3 group-hover:tracking-wide transition-all duration-300">
                    {t.gallery.cards.emeraldTouch.imageAlt}
                  </h3>
                  <p className="text-beige/70 font-light text-sm sm:text-base mb-6">
                    {t.gallery.cards.emeraldTouch.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.15em] uppercase font-light group-hover:tracking-[0.2em] transition-all duration-300">
                    <Instagram className="h-4 w-4" />
                    {t.common.buttons.viewOnInstagram}
                  </span>
                </div>
              </a>
            </Reveal>

            <Reveal delay={300}>
              <div className="block border border-gold/25 overflow-hidden h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={IMAGES.aboutVilla}
                    alt={t.gallery.cards.comingSoon.imageAlt}
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>
                <div className="p-7 sm:p-8 text-center">
                  <h3 className="font-serif text-gold text-xl sm:text-2xl font-light mb-3">
                    {t.gallery.cards.comingSoon.imageAlt}
                  </h3>
                  <p className="text-beige/50 font-light text-sm sm:text-base italic">
                    {t.gallery.cards.comingSoon.text}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <p className="text-beige/70 text-base sm:text-lg font-light leading-relaxed mb-8">
              {t.gallery.followCta.text}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-gold text-gold text-[0.9rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark"
            >
              <Instagram className="h-4 w-4" />
              {t.common.buttons.instagram}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
