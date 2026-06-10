import type { Translations } from '@/lib/translations'

export function interpolate(
  text: string,
  vars: Record<string, string | number>
): string {
  return Object.entries(vars).reduce(
    (result, [key, value]) =>
      result.replace(new RegExp(`\\{${key}\\}`, 'g'), String(value)),
    text
  )
}

const AUDIO_TRACK_KEYS = {
  'vacuum-master': 'vacuumMaster',
  'before-visiting': 'beforeVisiting',
  'saffrons-wind': 'saffronsWind',
} as const

const DJ_MIX_KEYS = {
  'in-depth-we-trust': 'inDepthWeTrust',
  'into-the-energy-of-life': 'intoTheEnergyOfLife',
} as const

export function getAudioTrackTranslation(
  t: Translations,
  id: string
): { title: string; description: string } | null {
  const key = AUDIO_TRACK_KEYS[id as keyof typeof AUDIO_TRACK_KEYS]
  if (!key) return null
  return t.audioTracks[key]
}

export function getDjMixTranslation(
  t: Translations,
  id: string
): { title: string; genres: string } | null {
  const key = DJ_MIX_KEYS[id as keyof typeof DJ_MIX_KEYS]
  if (!key) return null
  return t.djMixes[key]
}
