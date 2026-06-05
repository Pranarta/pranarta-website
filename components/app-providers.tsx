'use client'

import type { ReactNode } from 'react'
import { AudioPlayerProvider } from '@/components/audio-player-context'
import { GlobalAudioPlayer } from '@/components/global-audio-player'

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AudioPlayerProvider>
      {children}
      <GlobalAudioPlayer />
    </AudioPlayerProvider>
  )
}
