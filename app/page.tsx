import Link from 'next/link'
import { MessageCircle, Instagram } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const WHATSAPP_LINK = 'https://wa.me/972587855123?text=Hello%20Tom,%20I%20am%20interested%20in%20booking%20a%20private%20experience%20in%20Ibiza'
const INSTAGRAM_LINK = 'https://www.instagram.com/pranarta7/'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d.png-NWPvw1BT4P5qeNrzLan7tZBSyOnRM1.jpeg)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/60 to-dark" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto py-24 sm:py-32">
          <Reveal>
            <p className="text-gold text-xs sm:text-sm tracking-[0.2em] uppercase font-light mb-6">
              Tom Van Geem
            </p>
          </Reveal>
          
          <Reveal delay={100}>
            <h1 className="font-serif text-[clamp(2rem,5vw,4rem)] font-light text-beige mb-4 leading-[1.2] tracking-[0.02em]">
              Handpan &middot; Organic Electronic Sound &middot; Head Massage
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="font-serif text-[clamp(1.1rem,2vw,1.4rem)] font-light text-beige/90 mb-10">
              Immersive experiences in Ibiza.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/sound"
                className="inline-block px-8 py-4 bg-gold text-dark border border-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-transparent hover:text-gold w-full sm:w-auto text-center min-w-[240px]"
              >
                Explore Sound Experiences
              </Link>
              <Link
                href="/body"
                className="inline-block px-8 py-4 border border-gold text-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark w-full sm:w-auto text-center min-w-[240px]"
              >
                Explore Body Experiences
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About / Fusion Identity Section */}
      <section className="py-24 sm:py-32 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-beige tracking-[0.02em] mb-8 leading-[1.3]">
              Where Sound Meets Body
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              Private experiences that blend acoustic handpan, organic electronic sound, and presence-based bodywork into refined, deeply immersive sessions.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-beige/60 text-base sm:text-lg font-light leading-relaxed italic">
              Curated for luxury villas, retreats, and intimate gatherings in Ibiza.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sound & Body Preview Cards */}
      <section className="py-24 sm:py-32 bg-dark">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Sound Card */}
            <Reveal>
              <Link href="/sound" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden border border-gold/20 transition-all duration-500 group-hover:border-gold">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d.png-NWPvw1BT4P5qeNrzLan7tZBSyOnRM1.jpeg"
                    alt="Sound Experience"
                    className="w-full h-full object-cover opacity-70 transition-all duration-500 group-hover:opacity-90 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <h3 className="text-gold text-[clamp(1.3rem,2.5vw,1.6rem)] font-serif tracking-[0.05em] mb-3">
                      Sound Experiences
                    </h3>
                    <p className="text-beige/80 font-light text-sm sm:text-base mb-4">
                      Handpan performances, live sound, and organic electronic journeys for sunsets, villas, and private events.
                    </p>
                    <span className="text-gold text-xs tracking-[0.15em] uppercase font-light group-hover:tracking-[0.2em] transition-all duration-300">
                      Explore Sound
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Body Card */}
            <Reveal delay={200}>
              <Link href="/body" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden border border-gold/20 transition-all duration-500 group-hover:border-gold">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20at%2023.27.24-sHKAV8qRZSmGSoyGfT89iD9kmQycX5.jpeg"
                    alt="Body Experience"
                    className="w-full h-full object-cover opacity-70 transition-all duration-500 group-hover:opacity-90 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <h3 className="text-gold text-[clamp(1.3rem,2.5vw,1.6rem)] font-serif tracking-[0.05em] mb-3">
                      Body Experiences
                    </h3>
                    <p className="text-beige/80 font-light text-sm sm:text-base mb-4">
                      Head massage, deep relaxation, and energy work for 1:1 private sessions.
                    </p>
                    <span className="text-gold text-xs tracking-[0.15em] uppercase font-light group-hover:tracking-[0.2em] transition-all duration-300">
                      Explore Body
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
              <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-beige tracking-[0.02em]">
                Gallery
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {[
              { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d.png-NWPvw1BT4P5qeNrzLan7tZBSyOnRM1.jpeg', alt: 'Handpan Session' },
              { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20at%2023.27.24-sHKAV8qRZSmGSoyGfT89iD9kmQycX5.jpeg', alt: 'Head Massage' },
              { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20at%2022.34.11-E7LucUs5PZBXf8lZAg5sQPECAlekIR.jpeg', alt: 'Es Vedra Portrait' },
            ].map((image, index) => (
              <Reveal key={index} delay={index * 100}>
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
              Book Your Experience
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/70 text-base sm:text-lg font-light mb-10">
              Reach out directly via WhatsApp for quick response.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gold text-dark border border-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-transparent hover:text-gold w-full sm:w-auto min-w-[220px]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={INSTAGRAM_LINK}
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
