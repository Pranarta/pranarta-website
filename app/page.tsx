import Link from 'next/link'
import { MessageCircle, Instagram } from 'lucide-react'
import { HomeHeroQuickNav } from '@/components/home-hero-quick-nav'
import { Reveal } from '@/components/reveal'
import { BRAND, IMAGES, LINKS, WHATSAPP_PREFILLS, whatsappUrl } from '@/lib/site'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
        <div
          className="absolute inset-0 bg-cover bg-center lg:bg-[center_30%] bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${IMAGES.heroCrowd})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/60 to-dark" />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto py-24 sm:py-32 -translate-y-[50px] sm:-translate-y-[66px] lg:-translate-y-[70px]">
          <Reveal>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light text-beige mb-6 leading-[1.2] tracking-[0.04em]">
              {BRAND.name}
            </h1>
          </Reveal>

          <Reveal delay={100}>
            <p className="font-serif text-[clamp(1.4rem,2.9vw,2.05rem)] font-light text-beige mb-8 leading-[1.35]">
              {BRAND.tagline}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="space-y-2 mb-8">
              <p className="font-serif text-[clamp(1.2rem,2.2vw,1.45rem)] text-beige/90 font-light leading-snug">
                Handpan &amp; Sound Journeys
              </p>
              <p className="font-serif text-[clamp(1.2rem,2.2vw,1.45rem)] text-beige/90 font-light leading-snug">
                The Emerald Touch · Signature Head Massage
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <p className="max-w-xl mx-auto text-[1.45rem] sm:text-[1.65rem] text-beige/95 font-light leading-[1.75] mb-10">
              Experiences designed to slow the mind, open the senses and reconnect with presence.
            </p>
          </Reveal>

          <Reveal delay={340}>
            <HomeHeroQuickNav />
          </Reveal>

          <Reveal delay={350}>
            <div className="hidden lg:flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10">
              <Link
                href="/sound"
                className="inline-block px-10 py-6 border border-gold/80 text-gold text-[0.95rem] tracking-[0.15em] uppercase font-light transition-all duration-500 ease-out hover:border-gold hover:bg-gold/12 w-full sm:w-auto text-center min-w-[270px]"
              >
                Explore Sound
              </Link>
              <Link
                href="/body"
                className="inline-block px-10 py-6 border border-gold/80 text-gold text-[0.95rem] tracking-[0.15em] uppercase font-light transition-all duration-500 ease-out hover:border-gold hover:bg-gold/12 w-full sm:w-auto text-center min-w-[270px]"
              >
                Explore Body
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Dual Offering */}
      <section className="py-24 sm:py-32 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <Reveal>
              <Link href="/sound" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden border border-gold/20 mb-8 transition-all duration-500 group-hover:border-gold">
                  <img
                    src={IMAGES.liveShow}
                    alt="Handpan & Sound Journeys"
                    className="w-full h-full object-cover opacity-75 transition-all duration-500 group-hover:opacity-90 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent" />
                </div>
                <h2 className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-light text-gold tracking-[0.03em] mb-4 leading-[1.3]">
                  Handpan &amp; Sound Journeys
                </h2>
                <p className="text-beige/75 font-light text-base sm:text-lg leading-relaxed mb-6 max-w-md">
                  Live handpan, organic electronic music and immersive sound experiences for villas,
                  retreats and meaningful gatherings.
                </p>
                <span className="text-gold text-xs tracking-[0.15em] uppercase font-light group-hover:tracking-[0.2em] transition-all duration-300">
                  Explore Sound
                </span>
              </Link>
            </Reveal>

            <Reveal delay={150}>
              <Link href="/body" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden border border-gold/20 mb-8 transition-all duration-500 group-hover:border-gold">
                  <img
                    src={IMAGES.headMassage}
                    alt="The Emerald Touch"
                    className="w-full h-full object-cover opacity-75 transition-all duration-500 group-hover:opacity-90 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent" />
                </div>
                <h2 className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-light text-gold tracking-[0.03em] mb-4 leading-[1.3]">
                  The Emerald Touch
                </h2>
                <p className="text-beige/75 font-light text-base sm:text-lg leading-relaxed mb-6 max-w-md">
                  A signature head massage experience designed to calm the nervous system, quiet the
                  mind and invite deep relaxation.
                </p>
                <span className="text-gold text-xs tracking-[0.15em] uppercase font-light group-hover:tracking-[0.2em] transition-all duration-300">
                  Explore Body
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Three Offers */}
      <section className="py-24 sm:py-32 bg-dark">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
            <Reveal>
              <Link href="/sound" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden border border-gold/20 transition-all duration-500 group-hover:border-gold">
                  <img
                    src={IMAGES.liveShow}
                    alt="Handpan & Sound Journeys"
                    className="w-full h-full object-cover opacity-70 transition-all duration-500 group-hover:opacity-90 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <h3 className="text-gold text-[clamp(1.2rem,2vw,1.5rem)] font-serif tracking-[0.05em] mb-3">
                      Handpan &amp; Sound Journeys
                    </h3>
                    <p className="text-beige/80 font-light text-sm sm:text-base mb-4">
                      Live handpan, organic electronic music and immersive sound experiences for
                      villas, retreats and meaningful gatherings.
                    </p>
                    <span className="text-gold text-xs tracking-[0.15em] uppercase font-light group-hover:tracking-[0.2em] transition-all duration-300">
                      Explore Sound
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={100}>
              <Link href="/body" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden border border-gold/20 transition-all duration-500 group-hover:border-gold">
                  <img
                    src={IMAGES.headMassage}
                    alt="The Emerald Touch"
                    className="w-full h-full object-cover opacity-70 transition-all duration-500 group-hover:opacity-90 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <h3 className="text-gold text-[clamp(1.2rem,2vw,1.5rem)] font-serif tracking-[0.05em] mb-3">
                      The Emerald Touch
                    </h3>
                    <p className="text-beige/80 font-light text-sm sm:text-base mb-4">
                      A signature head massage experience designed to calm the nervous system, quiet
                      the mind and invite deep relaxation.
                    </p>
                    <span className="text-gold text-xs tracking-[0.15em] uppercase font-light group-hover:tracking-[0.2em] transition-all duration-300">
                      Explore Body
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={200}>
              <Link href="/signature" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden border border-gold/20 transition-all duration-500 group-hover:border-gold">
                  <img
                    src={IMAGES.aboutVilla}
                    alt="Signature Experience"
                    className="w-full h-full object-cover opacity-70 transition-all duration-500 group-hover:opacity-90 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <h3 className="text-gold text-[clamp(1.2rem,2vw,1.5rem)] font-serif tracking-[0.05em] mb-3">
                      Signature Experience
                    </h3>
                    <p className="text-beige/80 font-light text-sm sm:text-base mb-4">
                      Sound and touch combined into one curated experience — the complete{' '}
                      {BRAND.name} journey.
                    </p>
                    <span className="text-gold text-xs tracking-[0.15em] uppercase font-light group-hover:tracking-[0.2em] transition-all duration-300">
                      Explore Signature
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 sm:py-32 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="font-serif text-[clamp(1.25rem,2.2vw,1.75rem)] font-light text-beige tracking-[0.02em]">
                Gallery
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {IMAGES.gallery.map((image, index) => (
              <Reveal key={image.src} delay={index * 100}>
                <div className="aspect-square overflow-hidden border border-gold/20 transition-all duration-300 hover:border-gold">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="text-center mt-10">
              <Link
                href="/gallery"
                className="inline-block px-8 py-4 border border-gold text-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark"
              >
                View Full Gallery
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-beige tracking-[0.02em] mb-6">
              Book with {BRAND.name}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/70 text-base sm:text-lg font-light mb-10">
              Reach out directly via WhatsApp for a personal response.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href={whatsappUrl(WHATSAPP_PREFILLS.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gold text-dark border border-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-transparent hover:text-gold w-full sm:w-auto min-w-[220px]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 border border-gold text-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark w-full sm:w-auto min-w-[220px]"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </Reveal>
          <Reveal delay={500}>
            <p className="mt-12 text-beige/50 text-sm font-light">
              Ibiza, Spain
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
