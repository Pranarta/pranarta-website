import { Reveal } from '@/components/reveal'

const WHATSAPP_LINK = 'https://wa.me/972587855123'

const bookingOptions = [
  {
    title: 'Sound Experience',
    description: 'Handpan, live sound, organic electronic',
    whatsappText: 'Hello Tom, I am interested in booking a Sound Experience in Ibiza',
  },
  {
    title: 'Body Session',
    description: 'Head massage, bodywork, energy healing',
    whatsappText: 'Hello Tom, I am interested in booking a Body Session in Ibiza',
  },
  {
    title: 'Villa Experience',
    description: 'Private sessions in luxury villas',
    whatsappText: 'Hello Tom, I am interested in a Villa Experience',
  },
  {
    title: 'Retreat Collaboration',
    description: 'Sound and body for retreats',
    whatsappText: 'Hello Tom, I am interested in a Retreat Collaboration',
  },
  {
    title: 'Event Performance',
    description: 'Live music for gatherings',
    whatsappText: 'Hello Tom, I would like to book an Event Performance',
  },
  {
    title: 'Custom Experience',
    description: 'Fully tailored to your vision',
    whatsappText: 'Hello Tom, I would like to create a Custom Experience',
  },
]

export default function BookingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-dark pt-20">
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-16">
          <Reveal>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-beige tracking-[0.02em] mb-4">
              Book Your Experience
            </h2>
            <p className="text-beige/80 font-light text-base sm:text-lg max-w-[700px] mx-auto">
              Available in Ibiza for private sessions, retreats, and events.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-16 sm:py-24 bg-dark">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                    href={`${WHATSAPP_LINK}?text=${encodeURIComponent(option.whatsappText)}`}
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
