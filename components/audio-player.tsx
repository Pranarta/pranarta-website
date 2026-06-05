'use client'

import { Pause, Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useAudioPlayer } from '@/components/audio-player-context'

export type AudioPlayerProps = {
  id: string
  title: string
  description?: string
  className?: string
  previewLabel?: boolean
  compact?: boolean
}

export function AudioPlayer({
  id,
  title,
  description,
  className,
  previewLabel,
  compact = false,
}: AudioPlayerProps) {
  const { currentTrack, isPlaying, playTrack, activeSource } = useAudioPlayer()
  const isActive = currentTrack?.id === id && activeSource === 'local'
  const isCurrentlyPlaying = isActive && isPlaying

  return (
    <div
      className={cn(
        'group border border-gold/25 transition-all duration-400 hover:border-gold',
        isActive && 'border-gold/40 shadow-[0_0_20px_rgba(201,169,97,0.08)]',
        compact ? 'p-5 sm:p-6' : 'p-7 sm:p-8',
        className
      )}
    >
      <div className={cn('flex items-start', compact ? 'gap-4' : 'gap-5 sm:gap-6')}>
        <div className="shrink-0 flex flex-col items-center gap-2">
          <button
            type="button"
            onClick={() => playTrack(id)}
            aria-label={
              isCurrentlyPlaying
                ? `Pause ${title}`
                : previewLabel
                  ? `Play preview of ${title}`
                  : `Play ${title}`
            }
            className={cn(
              'flex items-center justify-center border border-gold/60 text-gold transition-all duration-400 hover:border-gold hover:bg-gold/10',
              compact ? 'w-10 h-10' : 'w-12 h-12 sm:w-14 sm:h-14'
            )}
          >
            {isCurrentlyPlaying ? (
              <Pause className={cn(compact ? 'h-3.5 w-3.5' : 'h-4 w-4 sm:h-5 sm:w-5')} />
            ) : (
              <Play className={cn('ml-0.5', compact ? 'h-3.5 w-3.5' : 'h-4 w-4 sm:h-5 sm:w-5')} />
            )}
          </button>
          {previewLabel && (
            <span className="text-gold/70 text-[0.6rem] tracking-[0.15em] uppercase font-light">
              {isCurrentlyPlaying ? 'Pause' : 'Play Preview'}
            </span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3
            className={cn(
              'font-serif text-gold font-light group-hover:tracking-wide transition-all duration-300',
              compact ? 'text-lg sm:text-xl mb-1.5' : 'text-xl sm:text-2xl mb-2'
            )}
          >
            {title}
          </h3>
          {description && (
            <p
              className={cn(
                'text-beige/70 font-light text-sm leading-relaxed',
                compact ? '' : 'sm:text-base'
              )}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
