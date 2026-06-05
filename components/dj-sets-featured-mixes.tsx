import { CompactSoundCloudMix } from '@/components/compact-soundcloud-mix'
import { FEATURED_MIXES } from '@/lib/site'

export function DjSetsFeaturedMixes() {
  return (
    <div className="pt-8 sm:pt-10 mt-6 border-t border-gold/15">
      <p className="text-gold/55 text-xs sm:text-sm tracking-[0.2em] uppercase font-light mb-6 sm:mb-8">
        Featured Mixes
      </p>

      <div className="space-y-4 sm:space-y-5">
        {FEATURED_MIXES.map((mix) => (
          <CompactSoundCloudMix
            key={mix.id}
            id={mix.id}
            title={mix.title}
            genres={mix.genres}
            duration={mix.duration}
            soundcloudUrl={mix.soundcloudUrl}
          />
        ))}
      </div>
    </div>
  )
}
