'use client'

import Link from 'next/link'
import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useAudioPlayer } from '@/components/audio-player-context'

const linkClass =
  'text-[0.9rem] font-light tracking-[0.1em] uppercase text-beige transition-all duration-300 hover:text-gold active:scale-[0.98]'

export function HomeHeroQuickNav() {
  const { isPlaying, playTrack, activeSource, currentTrack } = useAudioPlayer()
  const isActive = activeSource === 'local' && currentTrack !== null && isPlaying

  return (
    <nav
      aria-label="Quick access"
      className="lg:hidden flex items-center justify-between w-full max-w-xs sm:max-w-sm mx-auto mb-8 px-2"
    >
      <div className="flex items-center gap-8 sm:gap-10">
        <Link href="/sound" className={linkClass}>
          Sound
        </Link>
        <Link href="/body" className={linkClass}>
          Body
        </Link>
      </div>

      <button
        type="button"
        onClick={() => playTrack('vacuum-master')}
        aria-label="Play music"
        className={cn(
          'inline-flex items-center justify-center transition-all duration-300',
          'text-beige hover:text-gold hover:drop-shadow-[0_0_10px_rgba(201,169,97,0.25)]',
          'active:scale-95 focus:outline-none',
          isActive && 'text-gold drop-shadow-[0_0_8px_rgba(201,169,97,0.18)]'
        )}
      >
        <Play className="h-4 w-4 ml-0.5" strokeWidth={1.5} />
      </button>
    </nav>
  )
}
