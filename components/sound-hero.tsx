'use client'

import { Reveal } from '@/components/reveal'
import { SoundHeroTracks } from '@/components/sound-hero-tracks'
import { IMAGES } from '@/lib/site'

export function SoundHero() {
  return (
    <section className="relative min-h-[38vh] flex items-center justify-center overflow-hidden bg-dark pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
        style={{ backgroundImage: `url(${IMAGES.liveShow})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/70 to-dark" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto py-8 sm:py-10">
        <Reveal>
          <h1 className="font-serif text-[clamp(2rem,5vw,4rem)] font-light text-beige mb-3 leading-[1.2] tracking-[0.02em]">
            Handpan &amp; Organic Electronic
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-beige/80 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Live handpan and electronic sound journeys for weddings, ceremonies, retreats,
            festivals, sunset celebrations and meaningful gatherings.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <SoundHeroTracks />
        </Reveal>
      </div>
    </section>
  )
}
