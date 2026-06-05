'use client'

import type { CSSProperties } from 'react'
import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useAudioPlayer } from '@/components/audio-player-context'

type NavAudioTriggerProps = {
  className?: string
  style?: CSSProperties
  iconClassName?: string
}

export function NavAudioTrigger({ className, style, iconClassName }: NavAudioTriggerProps) {
  const { isPlaying, playTrack, activeSource, currentTrack } = useAudioPlayer()
  const isActive = activeSource === 'local' && currentTrack !== null && isPlaying

  return (
    <button
      type="button"
      onClick={() => playTrack('vacuum-master')}
      aria-label="Play music"
      style={style}
      className={cn(
        'inline-flex items-center justify-center transition-all duration-300',
        'text-beige hover:text-gold hover:drop-shadow-[0_0_10px_rgba(201,169,97,0.25)]',
        'focus:outline-none',
        isActive && 'text-gold drop-shadow-[0_0_8px_rgba(201,169,97,0.18)]',
        className
      )}
    >
      <Play
        className={cn('h-[0.95rem] w-[0.95rem] ml-0.5', iconClassName)}
        strokeWidth={1.5}
      />
    </button>
  )
}
