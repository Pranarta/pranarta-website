export type SoundCloudWidget = {
  play: () => void
  pause: () => void
  toggle: () => void
  seekTo: (ms: number) => void
  load: (url: string, options?: { auto_play?: boolean }) => void
  getDuration: (callback: (duration: number) => void) => void
  getPosition: (callback: (position: number) => void) => void
  bind: (event: string, callback: (data?: SoundCloudProgressData) => void) => void
  unbind: (event: string) => void
}

export type SoundCloudProgressData = {
  currentPosition: number
  relativePosition: number
  loadedProgress?: number
}

declare global {
  interface Window {
    SC?: {
      Widget: new (iframe: HTMLIFrameElement) => SoundCloudWidget
      Widget: {
        Events: {
          READY: string
          PLAY: string
          PAUSE: string
          FINISH: string
          PLAY_PROGRESS: string
        }
      }
    }
  }
}

let scriptPromise: Promise<void> | null = null

export function loadSoundCloudApi(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve()
  if (window.SC?.Widget) return Promise.resolve()

  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = 'https://w.soundcloud.com/player/api.js'
      script.async = true
      script.onload = () => resolve()
      script.onerror = () => reject(new Error('Failed to load SoundCloud API'))
      document.body.appendChild(script)
    })
  }

  return scriptPromise
}

export const SC_EVENTS = {
  READY: 'ready',
  PLAY: 'play',
  PAUSE: 'pause',
  FINISH: 'finish',
  PLAY_PROGRESS: 'playProgress',
} as const
