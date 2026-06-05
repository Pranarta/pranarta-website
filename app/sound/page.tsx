import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const WHATSAPP_LINK = 'https://wa.me/972587855123'

const soundExperiences = [
  {
    title: 'Live Handpan Sessions',
    description:
      'Acoustic handpan — unhurried, live, and present. From public performances and festival stages to retreat openings and conscious gatherings, each set is shaped for the room and the moment.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d.png-NWPvw1BT4P5qeNrzLan7tZBSyOnRM1.jpeg',
  },
  {
    title: 'Sunset & Outdoor Events',
    description:
      'Golden-hour sound for sunset programs, wellness events, and open-air ceremonies. Handpan carried on the evening air — refined, immersive, and quietly magnetic.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20at%2022.34.11-E7LucUs5PZBXf8lZAg5sQPECAlekIR.jpeg',
  },
  {
    title: 'Retreats & Festivals',
    description:
      'Live music for retreat facilitators, festival curators, and cultural programs. Whether a morning circle, a main-stage set, or a late-night journey, the sound holds space without overpowering it.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20jat%2023.27.24-sQZgTo5eW74az1SDbwT0o14AhCWfoy.jpeg',
  },
  {
    title: 'Organic Electronic Journeys',
    description:
      'Handpan woven with live looping and organic electronic texture — performed in real time, never pre-recorded. For longer evenings, hybrid programs, and gatherings that ask for depth and movement.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20%20nat%2023.27.24-fhHO9cnDUVIsDlinHyYmpSczeCoiv2.jpeg',
  },
]

const listenLinks = [
  {
    name: 'Spotify',
    href: 'https://open.spotify.com/artist/6UD6jt7FQrbZ8w7ZL6Pyjd',
    description: 'Original releases and studio work',
  },
  {
    name: 'SoundCloud',
    href: 'https://soundcloud.com/pranarta',
    description: 'Live recordings and sound journeys',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/pranarta7/',
    description: 'Performance moments and updates',
  },
]

export default function SoundPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[58vh] flex items-center justify-center overflow-hidden bg-dark pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
          style={{
            backgroundImage:
              'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d.png-NWPvw1BT4P5qeNrzLan7tZBSyOnRM1.jpeg)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/70 to-dark" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-16">
          <Reveal>
            <p className="text-gold text-xs sm:text-sm tracking-[0.2em] uppercase font-light mb-3">
              Sound Experiences
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-serif text-[clamp(2rem,5vw,4rem)] font-light text-beige mb-5 leading-[1.2] tracking-[0.02em]">
              Handpan &amp; Organic Electronic
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/80 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Live handpan and electronic sound journeys for retreats, festivals, sunset events
              and meaningful gatherings.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Availability intro */}
      <section className="py-16 sm:py-24 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed">
              Available for public performances and private bookings alike — retreat circles,
              festival stages, wellness events, conscious gatherings, sunset programs, and
              intimate villa evenings in Ibiza and beyond.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-16 sm:py-24 bg-dark">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="space-y-12 sm:space-y-20">
            {soundExperiences.map((experience, index) => (
              <Reveal key={experience.title} delay={100}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="aspect-[4/3] overflow-hidden border border-gold/20">
                      <img
                        src={experience.image}
                        alt={experience.title}
                        className="w-full h-full object-cover opacity-85"
                      />
                    </div>
                  </div>
                  <div className={`space-y-3 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="font-serif text-[clamp(1.4rem,2.5vw,2rem)] text-beige tracking-[0.02em]">
                      {experience.title}
                    </h3>
                    <p className="text-beige/70 font-light text-base sm:text-lg leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Listen & Watch */}
      <section className="py-16 sm:py-24 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] text-center mb-4">
              Listen &amp; Watch
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-beige/70 text-base sm:text-lg font-light leading-relaxed text-center max-w-2xl mx-auto mb-10">
              Explore original music, live recordings and immersive sound journeys.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {listenLinks.map((link, index) => (
              <Reveal key={link.name} delay={index * 100}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block text-center p-7 sm:p-8 border border-gold/25 transition-all duration-400 hover:border-gold h-full"
                >
                  <h3 className="text-gold text-lg sm:text-xl font-normal mb-2 group-hover:tracking-wide transition-all duration-300">
                    {link.name}
                  </h3>
                  <p className="text-beige/70 font-light text-sm sm:text-base">{link.description}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell Section */}
      <section className="py-16 sm:py-24 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <Reveal>
            <p className="text-gold text-xs sm:text-sm tracking-[0.2em] uppercase font-light mb-3">
              Sound &amp; Touch
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-5">
              Pair with The Emerald Touch
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/70 font-light text-base sm:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              After a live set, many guests choose to settle into stillness with The Emerald
              Touch — a signature head massage on the Body page. Sound to open; touch to land.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <Link
              href="/body"
              className="inline-block px-8 py-4 border border-gold text-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark"
            >
              Explore The Emerald Touch
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Book a Sound Experience */}
      <section className="py-16 sm:py-24 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-5">
              Book a Sound Experience
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/70 text-base sm:text-lg font-light mb-8">
              Available for retreats, festivals, sunset events, private gatherings and conscious
              experiences in Ibiza and beyond.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gold text-dark border border-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-transparent hover:text-gold"
            >
              <MessageCircle className="h-4 w-4" />
              Contact via WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
