'use client'

import { Reveal } from '@/components/reveal'
import { AudioPlayer } from '@/components/audio-player'
import { AUDIO_TRACKS } from '@/lib/site'
import { useTranslations } from '@/hooks/use-translations'
import { getAudioTrackTranslation } from '@/lib/translation-helpers'

export function FeaturedCreations() {
  const t = useTranslations()

  return (
    <section
      id="featured-creations"
      className="py-11 sm:py-16 bg-dark border-t border-gold/10 scroll-mt-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <h2 className="font-serif text-[clamp(1.25rem,2.2vw,1.75rem)] font-light text-beige tracking-[0.02em] text-center mb-6">
            {t.sound.featuredCreations.heading}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-3.5 sm:gap-4">
          {AUDIO_TRACKS.map((track, index) => {
            const translated = getAudioTrackTranslation(t, track.id)
            return (
              <Reveal key={track.id} delay={index * 100}>
                <div id={track.id} className="scroll-mt-24">
                  <AudioPlayer
                    id={track.id}
                    title={translated?.title ?? track.title}
                    description={translated?.description ?? track.description}
                    compact
                  />
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
