'use client'

import { useRef } from 'react'
import { Pause, Play, SkipBack, SkipForward, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useAudioPlayer } from '@/components/audio-player-context'
import { DJ_PLAYLIST } from '@/lib/audio-playlist'
import { soundcloudEmbedUrl } from '@/lib/site'
import { useTranslations } from '@/hooks/use-translations'
import { getAudioTrackTranslation, getDjMixTranslation } from '@/lib/translation-helpers'

const SC_IFRAME_SRC = `${soundcloudEmbedUrl(DJ_PLAYLIST[0].soundcloudUrl!)}&auto_play=false`

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const minutes = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${minutes}:${secs.toString().padStart(2, '0')}`
}

export function GlobalAudioPlayer() {
  const progressRef = useRef<HTMLDivElement>(null)
  const {
    audioRef,
    scIframeRef,
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    trackCounter,
    queueIndex,
    queueLength,
    isPlayerVisible,
    activeSource,
    togglePlay,
    nextTrack,
    prevTrack,
    seek,
    close,
  } = useAudioPlayer()
  const t = useTranslations()

  const translatedTitle = currentTrack?.id
    ? (activeSource === 'soundcloud'
        ? getDjMixTranslation(t, currentTrack.id)?.title
        : getAudioTrackTranslation(t, currentTrack.id)?.title)
    : undefined
  const displayTitle = translatedTitle ?? currentTrack?.title

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0
  const canGoPrev = queueIndex > 0 || currentTime > 3
  const canGoNext = queueIndex < queueLength - 1

  const handleSeek = (clientX: number) => {
    const bar = progressRef.current
    if (!bar || !duration) return
    const rect = bar.getBoundingClientRect()
    const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1)
    seek(ratio * duration)
  }

  return (
    <>
      <audio ref={audioRef} preload="metadata" />
      <iframe
        ref={scIframeRef}
        title="SoundCloud persistent player"
        src={SC_IFRAME_SRC}
        width="1"
        height="1"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        className="pointer-events-none fixed opacity-0"
        style={{ left: '-9999px', top: '-9999px' }}
      />

      <div
        className={cn(
          'fixed bottom-0 left-0 right-0 z-50 h-14 sm:h-[60px]',
          'border-t border-gold/20 bg-dark/96 backdrop-blur-md',
          'shadow-[0_-4px_24px_rgba(0,0,0,0.35)]',
          'transition-all duration-500 ease-out',
          isPlayerVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-full opacity-0 pointer-events-none',
          isPlaying && 'shadow-[0_-4px_28px_rgba(201,169,97,0.12)] border-gold/30'
        )}
        aria-hidden={!isPlayerVisible}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center gap-2 sm:gap-3 px-3 sm:px-5">
          <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
            <button
              type="button"
              onClick={prevTrack}
              disabled={!currentTrack || !canGoPrev}
              aria-label={t.a11y.previousTrack}
              className="flex h-7 w-7 items-center justify-center text-beige/45 transition-all duration-300 hover:text-gold hover:drop-shadow-[0_0_8px_rgba(201,169,97,0.35)] disabled:opacity-25 disabled:hover:text-beige/45 disabled:hover:drop-shadow-none"
            >
              <SkipBack className="h-3.5 w-3.5" />
            </button>

            <button
              type="button"
              onClick={togglePlay}
              disabled={!currentTrack}
              aria-label={isPlaying ? t.a11y.pause : t.a11y.play}
              className={cn(
                'flex h-8 w-8 items-center justify-center border text-gold transition-all duration-300',
                'hover:border-gold hover:bg-gold/10 hover:drop-shadow-[0_0_10px_rgba(201,169,97,0.25)]',
                'disabled:opacity-30',
                isPlaying ? 'border-gold/70 bg-gold/8' : 'border-gold/45'
              )}
            >
              {isPlaying ? (
                <Pause className="h-3.5 w-3.5" />
              ) : (
                <Play className="h-3.5 w-3.5 ml-0.5" />
              )}
            </button>

            <button
              type="button"
              onClick={nextTrack}
              disabled={!currentTrack || !canGoNext}
              aria-label={t.a11y.nextTrack}
              className="flex h-7 w-7 items-center justify-center text-beige/45 transition-all duration-300 hover:text-gold hover:drop-shadow-[0_0_8px_rgba(201,169,97,0.35)] disabled:opacity-25 disabled:hover:text-beige/45 disabled:hover:drop-shadow-none"
            >
              <SkipForward className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="hidden min-w-[7rem] shrink-0 sm:block md:min-w-[9rem]">
            <p className="truncate font-serif text-sm text-gold font-light leading-tight">
              {displayTitle}
            </p>
            <p className="text-[0.65rem] text-gold/45 font-light tracking-wide">
              {trackCounter}
            </p>
          </div>

          <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
            <span className="hidden shrink-0 text-[0.65rem] text-beige/40 font-light tabular-nums sm:inline">
              {formatTime(currentTime)}
            </span>

            <div
              ref={progressRef}
              role="slider"
              aria-label={t.a11y.playbackProgress}
              aria-valuemin={0}
              aria-valuemax={duration}
              aria-valuenow={currentTime}
              tabIndex={0}
              onClick={(e) => handleSeek(e.clientX)}
              onTouchEnd={(e) => {
                const touch = e.changedTouches[0]
                if (touch) handleSeek(touch.clientX)
              }}
              onKeyDown={(e) => {
                if (!duration) return
                if (e.key === 'ArrowRight') seek(Math.min(currentTime + 5, duration))
                if (e.key === 'ArrowLeft') seek(Math.max(currentTime - 5, 0))
              }}
              className="relative h-1 flex-1 cursor-pointer bg-gold/12 transition-colors duration-300 hover:bg-gold/18"
            >
              <div
                className="absolute inset-y-0 left-0 bg-gold/65 transition-[width] duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="hidden shrink-0 text-[0.65rem] text-beige/40 font-light tabular-nums sm:inline">
              {duration > 0 ? formatTime(duration) : '--:--'}
            </span>
          </div>

          <div className="min-w-0 shrink sm:hidden">
            <p className="truncate font-serif text-xs text-gold font-light">
              {displayTitle}
            </p>
            <p className="text-[0.6rem] text-gold/45 font-light">{trackCounter}</p>
          </div>

          <button
            type="button"
            onClick={close}
            aria-label={t.a11y.closePlayer}
            className="flex h-7 w-7 shrink-0 items-center justify-center text-beige/40 transition-colors duration-300 hover:text-gold"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </>
  )
}
