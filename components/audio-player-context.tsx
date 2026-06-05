'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from 'react'
import {
  DJ_PLAYLIST,
  FEATURED_PLAYLIST,
  findTrackInPlaylist,
  type PlaylistTrack,
  type TrackSource,
} from '@/lib/audio-playlist'
import {
  loadSoundCloudApi,
  SC_EVENTS,
  type SoundCloudWidget,
} from '@/lib/soundcloud-api'

type AudioPlayerContextValue = {
  audioRef: RefObject<HTMLAudioElement | null>
  scIframeRef: RefObject<HTMLIFrameElement | null>
  currentTrack: PlaylistTrack | null
  activeSource: TrackSource | null
  isPlaying: boolean
  currentTime: number
  duration: number
  queueIndex: number
  queueLength: number
  trackCounter: string
  isPlayerVisible: boolean
  activeId: string | null
  playTrack: (id: string) => Promise<void>
  playDjMix: (id: string) => Promise<void>
  togglePlay: () => Promise<void>
  nextTrack: () => Promise<void>
  prevTrack: () => Promise<void>
  seek: (time: number) => void
  close: () => void
}

const AudioPlayerContext = createContext<AudioPlayerContextValue | null>(null)

export function AudioPlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const scIframeRef = useRef<HTMLIFrameElement>(null)
  const scWidgetRef = useRef<SoundCloudWidget | null>(null)
  const scReadyRef = useRef(false)
  const pendingScUrlRef = useRef<string | null>(null)
  const activeQueueRef = useRef<PlaylistTrack[]>([])
  const queueIndexRef = useRef(0)
  const isPlayingRef = useRef(false)
  const activeSourceRef = useRef<TrackSource | null>(null)

  const [activeQueue, setActiveQueue] = useState<PlaylistTrack[]>([])
  const [queueIndex, setQueueIndex] = useState(0)
  const [currentTrack, setCurrentTrack] = useState<PlaylistTrack | null>(null)
  const [activeSource, setActiveSource] = useState<TrackSource | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const syncPlaying = useCallback((playing: boolean) => {
    isPlayingRef.current = playing
    setIsPlaying(playing)
  }, [])

  const stopLocal = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.pause()
  }, [])

  const stopSoundCloud = useCallback(() => {
    scWidgetRef.current?.pause()
  }, [])

  const stopAll = useCallback(() => {
    stopLocal()
    stopSoundCloud()
    syncPlaying(false)
  }, [stopLocal, stopSoundCloud, syncPlaying])

  const close = useCallback(() => {
    stopAll()
    const audio = audioRef.current
    if (audio) audio.currentTime = 0
    activeQueueRef.current = []
    queueIndexRef.current = 0
    setActiveQueue([])
    setQueueIndex(0)
    setCurrentTrack(null)
    setActiveSource(null)
    activeSourceRef.current = null
    pendingScUrlRef.current = null
    setCurrentTime(0)
    setDuration(0)
  }, [stopAll])

  const playLocalAtIndex = useCallback(
    async (queue: PlaylistTrack[], index: number) => {
      const track = queue[index]
      if (!track?.src) return

      stopSoundCloud()
      const audio = audioRef.current
      if (!audio) return

      activeQueueRef.current = queue
      queueIndexRef.current = index
      setActiveQueue(queue)
      setQueueIndex(index)
      setCurrentTrack(track)
      setActiveSource('local')
      activeSourceRef.current = 'local'
      setCurrentTime(0)

      audio.src = track.src
      audio.load()

      try {
        await audio.play()
        syncPlaying(true)
      } catch {
        syncPlaying(false)
      }
    },
    [stopSoundCloud, syncPlaying]
  )

  const playSoundCloudAtIndex = useCallback(
    async (queue: PlaylistTrack[], index: number) => {
      const track = queue[index]
      if (!track?.soundcloudUrl) return

      stopLocal()
      const widget = scWidgetRef.current

      activeQueueRef.current = queue
      queueIndexRef.current = index
      setActiveQueue(queue)
      setQueueIndex(index)
      setCurrentTrack(track)
      setActiveSource('soundcloud')
      activeSourceRef.current = 'soundcloud'
      setCurrentTime(0)
      setDuration(0)

      if (!widget || !scReadyRef.current) {
        pendingScUrlRef.current = track.soundcloudUrl
        syncPlaying(true)
        return
      }

      widget.load(track.soundcloudUrl, { auto_play: true })
      syncPlaying(true)
    },
    [stopLocal, syncPlaying]
  )

  const playQueueIndex = useCallback(
    async (index: number) => {
      const queue = activeQueueRef.current
      const track = queue[index]
      if (!track) return

      if (track.source === 'local') {
        await playLocalAtIndex(queue, index)
      } else {
        await playSoundCloudAtIndex(queue, index)
      }
    },
    [playLocalAtIndex, playSoundCloudAtIndex]
  )

  const startQueue = useCallback(
    async (queue: PlaylistTrack[], index: number) => {
      const track = queue[index]
      if (!track) return

      if (track.source === 'local') {
        await playLocalAtIndex(queue, index)
      } else {
        await playSoundCloudAtIndex(queue, index)
      }
    },
    [playLocalAtIndex, playSoundCloudAtIndex]
  )

  const playTrack = useCallback(
    async (id: string) => {
      const found = findTrackInPlaylist(FEATURED_PLAYLIST, id)
      if (!found) return

      if (
        currentTrack?.id === id &&
        activeSource === 'local' &&
        activeQueueRef.current === FEATURED_PLAYLIST
      ) {
        if (isPlayingRef.current) {
          stopLocal()
          syncPlaying(false)
        } else {
          try {
            await audioRef.current?.play()
            syncPlaying(true)
          } catch {
            syncPlaying(false)
          }
        }
        return
      }

      await startQueue(FEATURED_PLAYLIST, found.index)
    },
    [currentTrack?.id, activeSource, startQueue, stopLocal, syncPlaying]
  )

  const playDjMix = useCallback(
    async (id: string) => {
      const found = findTrackInPlaylist(DJ_PLAYLIST, id)
      if (!found) return

      if (
        currentTrack?.id === id &&
        activeSource === 'soundcloud' &&
        activeQueueRef.current === DJ_PLAYLIST
      ) {
        if (isPlayingRef.current) {
          stopSoundCloud()
          syncPlaying(false)
        } else {
          scWidgetRef.current?.play()
          syncPlaying(true)
        }
        return
      }

      await startQueue(DJ_PLAYLIST, found.index)
    },
    [currentTrack?.id, activeSource, startQueue, stopSoundCloud, syncPlaying]
  )

  const togglePlay = useCallback(async () => {
    if (!currentTrack) return

    if (activeSource === 'local') {
      const audio = audioRef.current
      if (!audio) return
      if (isPlayingRef.current) {
        audio.pause()
        syncPlaying(false)
      } else {
        try {
          await audio.play()
          syncPlaying(true)
        } catch {
          syncPlaying(false)
        }
      }
      return
    }

    if (activeSource === 'soundcloud') {
      const widget = scWidgetRef.current
      if (!widget) return
      if (isPlayingRef.current) {
        widget.pause()
        syncPlaying(false)
      } else {
        widget.play()
        syncPlaying(true)
      }
    }
  }, [currentTrack, activeSource, syncPlaying])

  const nextTrack = useCallback(async () => {
    const queue = activeQueueRef.current
    const nextIndex = queueIndexRef.current + 1
    if (nextIndex >= queue.length) return
    await playQueueIndex(nextIndex)
  }, [playQueueIndex])

  const prevTrack = useCallback(async () => {
    const queue = activeQueueRef.current
    const prevIndex = queueIndexRef.current - 1
    if (prevIndex < 0) {
      if (activeSourceRef.current === 'local') {
        const audio = audioRef.current
        if (audio) {
          audio.currentTime = 0
          setCurrentTime(0)
        }
      } else if (activeSourceRef.current === 'soundcloud') {
        scWidgetRef.current?.seekTo(0)
        setCurrentTime(0)
      }
      return
    }
    await playQueueIndex(prevIndex)
  }, [playQueueIndex])

  const seek = useCallback(
    (time: number) => {
      if (!duration) return
      const nextTime = Math.min(Math.max(time, 0), duration)

      if (activeSource === 'local') {
        const audio = audioRef.current
        if (!audio) return
        audio.currentTime = nextTime
        setCurrentTime(nextTime)
        return
      }

      if (activeSource === 'soundcloud') {
        scWidgetRef.current?.seekTo(nextTime * 1000)
        setCurrentTime(nextTime)
      }
    },
    [activeSource, duration]
  )

  const handleTrackEnded = useCallback(async () => {
    const queue = activeQueueRef.current
    const index = queueIndexRef.current
    const shouldAutoAdvance = queue === FEATURED_PLAYLIST && index < queue.length - 1

    if (shouldAutoAdvance) {
      await playQueueIndex(index + 1)
      return
    }

    syncPlaying(false)
    setCurrentTime(0)
  }, [playQueueIndex, syncPlaying])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onLoadedMetadata = () => setDuration(audio.duration)
    const onTimeUpdate = () => {
      if (activeSourceRef.current === 'local') setCurrentTime(audio.currentTime)
    }
    const onEnded = () => {
      if (activeSourceRef.current === 'local') void handleTrackEnded()
    }
    const onPlay = () => {
      if (activeSourceRef.current === 'local') syncPlaying(true)
    }
    const onPause = () => {
      if (activeSourceRef.current === 'local') syncPlaying(false)
    }

    audio.addEventListener('loadedmetadata', onLoadedMetadata)
    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('ended', onEnded)
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)

    return () => {
      audio.removeEventListener('loadedmetadata', onLoadedMetadata)
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
    }
  }, [handleTrackEnded, syncPlaying])

  useEffect(() => {
    let cancelled = false

    const initWidget = async () => {
      try {
        await loadSoundCloudApi()
        if (cancelled || !scIframeRef.current || !window.SC) return

        const widget = new window.SC.Widget(scIframeRef.current)
        scWidgetRef.current = widget

        widget.bind(SC_EVENTS.READY, () => {
          scReadyRef.current = true
          if (pendingScUrlRef.current) {
            widget.load(pendingScUrlRef.current, { auto_play: true })
            pendingScUrlRef.current = null
          }
          widget.getDuration((ms) => {
            if (activeSourceRef.current === 'soundcloud') setDuration(ms / 1000)
          })
        })

        widget.bind(SC_EVENTS.PLAY, () => {
          if (activeSourceRef.current === 'soundcloud') syncPlaying(true)
        })

        widget.bind(SC_EVENTS.PAUSE, () => {
          if (activeSourceRef.current === 'soundcloud') syncPlaying(false)
        })

        widget.bind(SC_EVENTS.FINISH, () => {
          if (activeSourceRef.current === 'soundcloud') void handleTrackEnded()
        })

        widget.bind(SC_EVENTS.PLAY_PROGRESS, (data) => {
          if (!data || activeSourceRef.current !== 'soundcloud') return
          setCurrentTime(data.currentPosition / 1000)
          widget.getDuration((ms) => setDuration(ms / 1000))
        })
      } catch {
        // SoundCloud widget unavailable — local playback still works
      }
    }

    void initWidget()

    return () => {
      cancelled = true
    }
  }, [handleTrackEnded, syncPlaying])

  useEffect(() => {
    document.body.classList.toggle('global-audio-open', currentTrack !== null)
    return () => {
      document.body.classList.remove('global-audio-open')
    }
  }, [currentTrack])

  const queueLength = activeQueue.length || 0
  const trackCounter = queueLength > 0 ? `${queueIndex + 1}/${queueLength}` : ''

  const value: AudioPlayerContextValue = {
    audioRef,
    scIframeRef,
    currentTrack,
    activeSource,
    isPlaying,
    currentTime,
    duration,
    queueIndex,
    queueLength,
    trackCounter,
    isPlayerVisible: currentTrack !== null,
    activeId: currentTrack?.id ?? null,
    playTrack,
    playDjMix,
    togglePlay,
    nextTrack,
    prevTrack,
    seek,
    close,
  }

  return (
    <AudioPlayerContext.Provider value={value}>{children}</AudioPlayerContext.Provider>
  )
}

export function useAudioPlayer() {
  const context = useContext(AudioPlayerContext)
  if (!context) {
    throw new Error('useAudioPlayer must be used within AudioPlayerProvider')
  }
  return context
}

export function useAudioPlayerOptional() {
  return useContext(AudioPlayerContext)
}
