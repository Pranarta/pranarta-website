'use client'

import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useAudioPlayer } from '@/components/audio-player-context'
import { soundcloudEmbedUrl } from '@/lib/site'
import { useTranslations } from '@/hooks/use-translations'
import { interpolate } from '@/lib/translation-helpers'

type CompactSoundCloudMixProps = {
  id: string
  title: string
  genres: string
  duration: string
  soundcloudUrl: string
}

export function CompactSoundCloudMix({
  id,
  title,
  genres,
  duration,
  soundcloudUrl,
}: CompactSoundCloudMixProps) {
  const { currentTrack, isPlaying, playDjMix, activeSource } = useAudioPlayer()
  const isActive = currentTrack?.id === id && activeSource === 'soundcloud'
  const isCurrentlyPlaying = isActive && isPlaying
  const embedSrc = `${soundcloudEmbedUrl(soundcloudUrl)}&auto_play=false`
  const t = useTranslations()

  return (
    <div
      className={cn(
        'p-4 sm:p-5 border transition-all duration-400',
        isActive
          ? 'border-gold/45 shadow-[0_0_24px_rgba(201,169,97,0.12)]'
          : 'border-gold/20 hover:border-gold/35'
      )}
    >
      <button
        type="button"
        onClick={() => playDjMix(id)}
        aria-label={isCurrentlyPlaying ? interpolate(t.a11y.pauseTrack, { title }) : interpolate(t.a11y.playTrack, { title })}
        className="group mb-4 w-full text-left transition-all duration-400 hover:-translate-y-0.5"
      >
        <div className="flex items-start gap-4 sm:gap-5">
          <div
            className={cn(
              'shrink-0 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 border text-gold transition-all duration-400',
              isActive
                ? 'border-gold bg-gold/10 shadow-[0_0_12px_rgba(201,169,97,0.15)]'
                : 'border-gold/50 group-hover:border-gold group-hover:bg-gold/10'
            )}
          >
            <Play className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-0.5" />
          </div>

          <div className="flex-1 min-w-0">
            <h4
              className={cn(
                'font-serif text-lg sm:text-xl font-light transition-colors duration-400 mb-1.5',
                isActive ? 'text-gold' : 'text-beige/90 group-hover:text-gold'
              )}
            >
              {title}
            </h4>
            <p className="text-beige/75 font-light text-sm sm:text-base tracking-wide mb-1">
              {genres}
            </p>
            <p className="text-gold/50 text-xs tracking-[0.12em] uppercase font-light">
              {duration}
            </p>
          </div>
        </div>
      </button>

      <div className="border border-gold/20 bg-dark overflow-hidden">
        <iframe
          title={`${title} — SoundCloud`}
          width="100%"
          height="120"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={embedSrc}
          className="w-full block"
        />
      </div>

      <a
        href={soundcloudUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-gold/60 text-xs tracking-[0.1em] font-light transition-colors duration-300 hover:text-gold"
      >
        {t.sound.compactSoundcloud.openLink}
      </a>
    </div>
  )
}
