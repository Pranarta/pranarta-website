export const BRAND = {
  name: 'PRANARTA',
  practitioner: 'Tom Van Geem',
  tagline: 'Where Sound Meets Body',
} as const

export const LINKS = {
  whatsapp: 'https://wa.me/972587855123',
  instagram: 'https://www.instagram.com/pranarta7/',
  email: 'mailto:pranarta7@gmail.com',
  spotify:
    'https://open.spotify.com/intl-fr/artist/6UD6jt7FQrbZ8w7ZL6Pyjd?si=hL5oDtFaTfGdJLAGAcBBkg',
  soundcloudMix: 'https://soundcloud.com/pranarta/pranarta-in-depth-we-trust',
  soundcloudEmbed:
    'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/pranarta/pranarta-in-depth-we-trust&color=%23c9a961&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false',
  soundcloudProfile: 'https://soundcloud.com/pranarta',
} as const

export function soundcloudEmbedUrl(trackUrl: string) {
  const encoded = encodeURIComponent(trackUrl)
  return `https://w.soundcloud.com/player/?url=${encoded}&color=%23c9a961&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`
}

export const FEATURED_MIXES = [
  {
    id: 'in-depth-we-trust',
    title: 'In Depth We Trust',
    genres: 'Deep House • Afro House • Progressive',
    duration: '2h29m',
    soundcloudUrl: 'https://soundcloud.com/pranarta/pranarta-in-depth-we-trust',
  },
  {
    id: 'into-the-energy-of-life',
    title: 'Into The Energy Of Life',
    genres: 'Downtempo • Organic • Cinematic',
    duration: '52m',
    soundcloudUrl: 'https://soundcloud.com/pranarta/into-the-energy-of-life',
  },
] as const

export const AUDIO_TRACKS = [
  {
    id: 'vacuum-master',
    title: 'Vacuum Master',
    description: 'Handpan, poetry and organic electronic production.',
    src: '/sound/Vacuum%20Master.wav',
  },
  {
    id: 'before-visiting',
    title: 'Before Visiting',
    description:
      'A spoken-word journey exploring presence, awareness and the beauty of arrival.',
    src: '/sound/Before%20Visiting.wav',
  },
  {
    id: 'saffrons-wind',
    title: "Saffron's Wind",
    description: 'A poetic reflection carried by sound, silence and atmosphere.',
    src: '/sound/Safron.wav',
  },
] as const

export const IMAGES = {
  heroCrowd: '/images/hero-crowd.jpg',
  liveShow: '/images/live-show.jpg',
  aboutVilla: '/images/about-villa.jpg',
  headMassage: '/images/head-massage.jpg',
  gallery: [
    { src: '/images/gallery-1.jpg', alt: 'PRANARTA — Live performance — Ibiza' },
    { src: '/images/gallery-2.jpg', alt: 'PRANARTA — Sound journey — Ibiza' },
    { src: '/images/gallery-3.jpg', alt: 'PRANARTA — Emerald Touch — Ibiza' },
    { src: '/images/gallery-4.jpg', alt: 'PRANARTA — Villa experience — Ibiza' },
  ],
} as const

export const WHATSAPP_PREFILLS = {
  general:
    'Hello, I would like to inquire about PRANARTA in Ibiza.',
  sound:
    'Hello, I am interested in booking Sound Experiences with PRANARTA in Ibiza.',
  emeraldTouch:
    'Hello, I am interested in booking The Emerald Touch with PRANARTA in Ibiza.',
  signature:
    'Hello, I would like to design a Signature Experience with PRANARTA in Ibiza.',
  teachings:
    'Hello, I am interested in teachings with PRANARTA.',
} as const

export function whatsappUrl(text: string) {
  return `${LINKS.whatsapp}?text=${encodeURIComponent(text)}`
}
