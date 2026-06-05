import { AUDIO_TRACKS, FEATURED_MIXES } from '@/lib/site'

export type TrackSource = 'local' | 'soundcloud'

export type PlaylistTrack = {
  id: string
  title: string
  source: TrackSource
  src?: string
  soundcloudUrl?: string
}

export const FEATURED_PLAYLIST: PlaylistTrack[] = AUDIO_TRACKS.map((track) => ({
  id: track.id,
  title: track.title,
  source: 'local' as const,
  src: track.src,
}))

export const DJ_PLAYLIST: PlaylistTrack[] = FEATURED_MIXES.map((mix) => ({
  id: mix.id,
  title: mix.title,
  source: 'soundcloud' as const,
  soundcloudUrl: mix.soundcloudUrl,
}))

export function findTrackInPlaylist(
  playlist: PlaylistTrack[],
  id: string
): { track: PlaylistTrack; index: number } | null {
  const index = playlist.findIndex((item) => item.id === id)
  if (index === -1) return null
  return { track: playlist[index], index }
}
