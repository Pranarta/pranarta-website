export const BRAND = {
  name: 'PRANARTA',
  practitioner: 'Tom Van Geem',
  tagline: 'Where Sound Meets Body',
} as const

export const LINKS = {
  whatsapp: 'https://wa.me/972587855123',
  instagram: 'https://www.instagram.com/pranarta7/',
  email: 'mailto:pranarta7@gmail.com',
} as const

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
} as const

export function whatsappUrl(text: string) {
  return `${LINKS.whatsapp}?text=${encodeURIComponent(text)}`
}
