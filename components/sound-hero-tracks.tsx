'use client'

import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useAudioPlayer } from '@/components/audio-player-context'
import { AUDIO_TRACKS } from '@/lib/site'
import { useTranslations } from '@/hooks/use-translations'
import { getAudioTrackTranslation, interpolate } from '@/lib/translation-helpers'

export function SoundHeroTracks() {
  const { currentTrack, isPlaying, playTrack, activeSource } = useAudioPlayer()
  const t = useTranslations()

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12 mt-6 sm:mt-7">
      {AUDIO_TRACKS.map((track) => {
        const isActive = currentTrack?.id === track.id && activeSource === 'local'
        const isCurrentlyPlaying = isActive && isPlaying
        const translated = getAudioTrackTranslation(t, track.id)
        const title = translated?.title ?? track.title

        return (
          <button
            key={track.id}
            type="button"
            onClick={() => playTrack(track.id)}
            className={cn(
              'group relative px-3 py-2 sm:px-4 sm:py-2.5 transition-all duration-500',
              'hover:-translate-y-0.5 hover:drop-shadow-[0_0_20px_rgba(201,169,97,0.26)]',
              'hover:border hover:border-gold/25',
              isActive && 'drop-shadow-[0_0_16px_rgba(201,169,97,0.2)] border border-gold/30'
            )}
            aria-label={
              isCurrentlyPlaying
                ? interpolate(t.a11y.pauseTrack, { title })
                : interpolate(t.a11y.playTrack, { title })
            }
          >
            <span
              className={cn(
                'inline-flex items-center gap-3 sm:gap-3.5 font-serif text-lg sm:text-xl lg:text-[1.4rem] font-light transition-all duration-500 whitespace-nowrap',
                isActive ? 'text-gold' : 'text-beige/85 hover:text-gold'
              )}
            >
              <Play
                className={cn(
                  'h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 transition-all duration-500',
                  isActive
                    ? 'text-gold opacity-100'
                    : 'text-gold/65 opacity-90 group-hover:text-gold group-hover:opacity-100 group-hover:scale-110'
                )}
              />
              <span className="relative tracking-[0.02em]">
                {title}
                <span
                  className={cn(
                    'absolute -bottom-0.5 left-0 h-px bg-gold/70 transition-all duration-500 ease-out',
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </span>
            </span>
          </button>
        )
      })}
    </div>
  )
}
