import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { BRAND, IMAGES, WHATSAPP_PREFILLS, whatsappUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Signature Experience | PRANARTA | Ibiza',
  description:
    'PRANARTA Signature Experience — Sound and The Emerald Touch combined. Private evenings in Ibiza with Tom Van Geem.',
}

const scenarios = [
  {
    title: 'Villa Welcome Night',
    description:
      'Arrive in Ibiza with live handpan as the sun sets, then settle into The Emerald Touch — sound to open, touch to land.',
  },
  {
    title: 'Retreat Closing',
    description:
      'A final circle of music followed by individual touch sessions — integration after days of practice and gathering.',
  },
  {
    title: 'Private Celebration',
    description:
      'A curated evening for hosts who want something beyond dinner music — atmosphere, presence, and a complete arc.',
  },
]

export default function SignaturePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[58vh] flex items-center justify-center overflow-hidden bg-dark pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
          style={{ backgroundImage: `url(${IMAGES.aboutVilla})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/70 to-dark" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-16 sm:py-20">
          <Reveal>
            <p className="text-gold text-xs sm:text-sm tracking-[0.2em] uppercase font-light mb-3">
              {BRAND.name}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-serif text-[clamp(2rem,5vw,4rem)] font-light text-beige mb-5 leading-[1.2] tracking-[0.02em]">
              Signature Experience
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-serif text-[clamp(1.1rem,2vw,1.4rem)] font-light text-beige/90 mb-4">
              {BRAND.tagline}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-beige/80 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Sound and The Emerald Touch in one curated evening — the complete {BRAND.name}{' '}
              experience.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Arc */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-8 sm:mb-10">
              The Arc
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              Tom designs each Signature Experience around your gathering — a live sound opening,
              The Emerald Touch at the heart, and music to close or carry the evening forward. The
              sequence is flexible; the intention is not.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/60 text-base sm:text-lg font-light leading-relaxed italic">
              One evening. One thread. Sound and touch in service of presence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] text-center mb-12">
              When It Fits
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {scenarios.map((scenario, index) => (
              <Reveal key={scenario.title} delay={index * 100}>
                <div className="text-center p-8 sm:p-10 border border-gold/25 h-full">
                  <h3 className="text-gold text-lg sm:text-xl font-normal mb-4">
                    {scenario.title}
                  </h3>
                  <p className="text-beige/70 font-light text-sm sm:text-base leading-relaxed">
                    {scenario.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-8">
              What&apos;s Included
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              A personal consultation, a tailored sound element — handpan, electro-acoustic, or
              hybrid — and a full Emerald Touch session. Shaped for your villa, retreat, or private
              gathering in Ibiza.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8">
              <Link
                href="/sound"
                className="inline-block px-8 py-4 border border-gold text-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark"
              >
                Sound Experiences
              </Link>
              <Link
                href="/body"
                className="inline-block px-8 py-4 border border-gold text-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark"
              >
                The Emerald Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-6">
              Design Your Evening
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/70 text-base sm:text-lg font-light mb-10">
              Available for private villas, retreats and selected wellness experiences in Ibiza and
              beyond.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <a
              href={whatsappUrl(WHATSAPP_PREFILLS.signature)}
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
