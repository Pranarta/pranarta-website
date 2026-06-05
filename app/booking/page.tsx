import type { Metadata } from 'next'
import { Reveal } from '@/components/reveal'
import { BRAND, WHATSAPP_PREFILLS, whatsappUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: `Book | ${BRAND.name} | Ibiza`,
  description: `Book Sound Experiences, The Emerald Touch, or a Signature Experience with ${BRAND.name} in Ibiza.`,
}

const bookingOptions = [
  {
    title: 'Sound Experiences',
    description:
      'Handpan performances, electro-acoustic sound journeys and DJ sets for retreats, festivals, villas and events.',
    whatsappText: WHATSAPP_PREFILLS.sound,
  },
  {
    title: 'The Emerald Touch',
    description:
      'A signature head massage experience — touch, stillness and presence for deep relaxation and inner exploration.',
    whatsappText: WHATSAPP_PREFILLS.emeraldTouch,
  },
  {
    title: 'Signature Experience',
    description:
      'Sound and The Emerald Touch combined in one curated evening — the complete PRANARTA arc.',
    whatsappText: WHATSAPP_PREFILLS.signature,
  },
]

export default function BookingPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-dark pt-20">
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-16">
          <Reveal>
            <p className="text-gold text-xs sm:text-sm tracking-[0.2em] uppercase font-light mb-4">
              {BRAND.name}
            </p>
            <h1 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-beige tracking-[0.02em] mb-4">
              Book Your Experience
            </h1>
            <p className="text-beige/80 font-light text-base sm:text-lg max-w-[700px] mx-auto">
              Available in Ibiza for private sessions, retreats, festivals and events.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {bookingOptions.map((option, index) => (
              <Reveal key={option.title} delay={index * 100}>
                <div className="text-center p-8 sm:p-10 border border-gold/25 transition-all duration-400 hover:border-gold h-full flex flex-col">
                  <h4 className="text-gold text-lg sm:text-xl font-normal mb-4">
                    {option.title}
                  </h4>
                  <p className="text-beige/70 font-light text-sm sm:text-base mb-8 flex-grow">
                    {option.description}
                  </p>
                  <a
                    href={whatsappUrl(option.whatsappText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 border border-gold text-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark"
                  >
                    Inquire on WhatsApp
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
