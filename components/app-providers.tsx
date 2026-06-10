'use client'

import type { ReactNode } from 'react'
import { AudioPlayerProvider } from '@/components/audio-player-context'
import { GlobalAudioPlayer } from '@/components/global-audio-player'
import { DocumentTitle } from '@/components/document-title'
import { LanguageProvider } from '@/components/language-context'

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <DocumentTitle />
      <AudioPlayerProvider>
        {children}
        <GlobalAudioPlayer />
      </AudioPlayerProvider>
    </LanguageProvider>
  )
}
