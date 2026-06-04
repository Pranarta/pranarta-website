import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const WHATSAPP_LINK = 'https://wa.me/972587855123?text=Hello%20Tom,%20I%20am%20interested%20in%20booking%20a%20body%20session%20in%20Ibiza'

const bodyExperiences = [
  {
    title: 'Deep Head Massage',
    description: 'A refined, calming session focused on nervous system reset and deep relaxation. Subtle touch meets presence for profound release and mental clarity.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20at%2023.27.24-sHKAV8qRZSmGSoyGfT89iD9kmQycX5.jpeg',
  },
  {
    title: 'Energy Work',
    description: 'Reiki-based healing and subtle energy practices for alignment, clarity, and inner balance. A deeply grounding experience for body and mind.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20at%2023.j27.24-lJSYqpeD9MA8g3X8EO3UxvnTzTAtjr.jpeg',
  },
  {
    title: '1:1 Private Sessions',
    description: 'Fully personalized bodywork sessions tailored to your specific needs. Combining various modalities for a complete experience.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20%20nat%2023.27.24-fhHO9cnDUVIsDlinHyYmpSczeCoiv2.jpeg',
  },
]

export default function BodyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-dark pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
          style={{
            backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20at%2023.27.24-sHKAV8qRZSmGSoyGfT89iD9kmQycX5.jpeg)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/70 to-dark" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-20">
          <Reveal>
            <p className="text-gold text-xs sm:text-sm tracking-[0.2em] uppercase font-light mb-4">
              Body Experiences
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-serif text-[clamp(2rem,5vw,4rem)] font-light text-beige mb-6 leading-[1.2] tracking-[0.02em]">
              Head Massage & Bodywork
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/80 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Deep relaxation, energy work, and 1:1 private sessions for complete restoration.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-20 sm:py-28 bg-dark">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="space-y-16 sm:space-y-24">
            {bodyExperiences.map((experience, index) => (
              <Reveal key={experience.title} delay={100}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="aspect-[4/3] overflow-hidden border border-gold/20">
                      <img
                        src={experience.image}
                        alt={experience.title}
                        className="w-full h-full object-cover opacity-85"
                      />
                    </div>
                  </div>
                  <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
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

      {/* Cross-sell Section */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <Reveal>
            <p className="text-gold text-xs sm:text-sm tracking-[0.2em] uppercase font-light mb-4">
              Enhance Your Experience
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-6">
              Optional Live Handpan Accompaniment
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/70 font-light text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Elevate your bodywork session with live handpan sound. The combination of touch and sound creates a uniquely immersive healing experience.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <Link
              href="/sound"
              className="inline-block px-8 py-4 border border-gold text-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark"
            >
              Explore Sound Experiences
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-6">
              Book a Session
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/70 text-base sm:text-lg font-light mb-10">
              Reach out directly to discuss your needs.
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
              Book via WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
