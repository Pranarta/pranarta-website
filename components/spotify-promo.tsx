'use client'

import { Reveal } from '@/components/reveal'
import { LINKS } from '@/lib/site'
import { useTranslations } from '@/hooks/use-translations'

export function SpotifyPromo() {
  const t = useTranslations()

  return (
    <section className="py-12 sm:py-16 bg-dark border-t border-gold/10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <Reveal>
          <h2 className="font-serif text-[clamp(1.25rem,2.2vw,1.75rem)] font-light text-beige tracking-[0.02em] mb-3">
            {t.sound.spotify.heading}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-beige/70 font-light text-base sm:text-lg leading-relaxed mb-6">
            {t.sound.spotify.text}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <a
            href={LINKS.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border border-gold text-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark"
          >
            {t.common.buttons.openSpotify}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
