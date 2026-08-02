import Link from 'next/link'
import { ExternalLink, FileDown, Instagram, MessageCircle, Music2, Sparkles } from 'lucide-react'
import { BRAND, LINKS, WHATSAPP_PREFILLS, whatsappUrl } from '@/lib/site'

const offers = [
  {
    title: 'Emerald Touch',
    eyebrow: 'Private session',
    description: 'Calm head massage and nervous-system landing.',
    price: '60-75 min · 90-120 EUR',
    href: whatsappUrl('Hello, I came from Instagram and would like to book Emerald Touch in Ibiza.'),
  },
  {
    title: 'Sound Journey',
    eyebrow: 'Handpan listening',
    description: 'Live handpan and deep listening for one person or a small group.',
    price: '45-60 min · 80-120 EUR',
    href: whatsappUrl('Hello, I came from Instagram and would like to book a Sound Journey in Ibiza.'),
  },
  {
    title: 'Signature Sound + Touch',
    eyebrow: 'Most complete',
    description: 'Handpan to open the body, touch to let it land.',
    price: '90-120 min · 150-220 EUR',
    href: whatsappUrl(
      'Hello, I came from Instagram and would like to book a Signature Sound + Touch session in Ibiza.',
    ),
  },
  {
    title: 'Villa / Retreat Experience',
    eyebrow: 'For groups',
    description: 'Private sound and body experience for guests, retreats and intimate gatherings.',
    price: 'From 250 EUR',
    href: whatsappUrl('Hello, I came from Instagram and would like to book PRANARTA for a villa or retreat in Ibiza.'),
  },
]

export default function InstagramLandingPage() {
  return (
    <div className="bg-dark text-beige">
      <section className="relative min-h-screen overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img
            src="/images/hero-crowd.jpg"
            alt=""
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/45 via-dark/85 to-dark" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-3xl flex-col justify-center px-4 py-12 sm:px-6">
          <p className="mb-4 text-center text-xs font-light uppercase tracking-[0.22em] text-gold">
            {BRAND.name} · Ibiza
          </p>
          <h1 className="mx-auto mb-5 max-w-2xl text-center font-serif text-[clamp(2.25rem,11vw,4.5rem)] font-light leading-[1.02] tracking-[0.02em] text-beige">
            Private sound & body experiences
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-center text-base font-light leading-relaxed text-beige/78 sm:text-lg">
            Live handpan, Emerald Touch, and intimate sessions for people, villas and retreats in Ibiza.
          </p>

          <div className="mx-auto flex w-full max-w-md flex-col gap-3">
            <a
              href={whatsappUrl(WHATSAPP_PREFILLS.instagram)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-3 border border-gold bg-gold px-6 py-4 text-center text-sm font-light uppercase tracking-[0.14em] text-dark transition-all duration-300 hover:bg-transparent hover:text-gold"
            >
              <MessageCircle className="h-4 w-4" />
              Book on WhatsApp
            </a>
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-3 border border-gold/35 px-6 py-4 text-center text-sm font-light uppercase tracking-[0.14em] text-gold transition-all duration-300 hover:border-gold hover:bg-gold/10"
            >
              <Instagram className="h-4 w-4" />
              Follow @pranarta7
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 text-center text-[0.7rem] uppercase tracking-[0.12em] text-beige/55">
            <span>Handpan</span>
            <span>Emerald Touch</span>
            <span>Retreats</span>
          </div>
        </div>
      </section>

      <section className="border-t border-gold/10 bg-[#181713] py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-12">
          <div className="relative overflow-hidden border border-gold/15 bg-dark">
            <img
              src="/images/namaste-las-dalias-2026.jpg"
              alt="PRANARTA performing live at Namaste, Las Dalias in Ibiza"
              className="aspect-[4/3] w-full object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark via-dark/70 to-transparent px-5 pb-5 pt-14">
              <p className="text-[0.68rem] font-light uppercase tracking-[0.18em] text-gold">
                Live proof · Namaste, Las Dalias · Ibiza
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-light uppercase tracking-[0.2em] text-gold">
              For villas, retreats & events
            </p>
            <h2 className="mb-5 font-serif text-[clamp(1.8rem,5vw,3rem)] font-light leading-tight text-beige">
              See the experience before you book.
            </h2>
            <p className="mb-7 text-base font-light leading-relaxed text-beige/72">
              A concise one-page booking deck with live proof, available formats, starting prices and direct contact.
            </p>
            <a
              href="/press/PRANARTA-Booking-EPK.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 w-full items-center justify-center gap-3 border border-gold px-6 py-4 text-center text-sm font-light uppercase tracking-[0.14em] text-gold transition-all duration-300 hover:bg-gold hover:text-dark sm:w-auto"
            >
              <FileDown className="h-4 w-4" />
              Open the booking deck
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-gold/10 bg-dark py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-light uppercase tracking-[0.2em] text-gold">
              Choose the session
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,5vw,3rem)] font-light text-beige">
              Simple launch options
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {offers.map((offer) => (
              <a
                key={offer.title}
                href={offer.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-gold/20 p-6 transition-all duration-300 hover:border-gold/70 hover:bg-gold/[0.04] sm:p-7"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-[0.68rem] font-light uppercase tracking-[0.18em] text-gold/75">
                      {offer.eyebrow}
                    </p>
                    <h3 className="font-serif text-2xl font-light text-beige">{offer.title}</h3>
                  </div>
                  <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-gold/55 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mb-5 min-h-12 text-sm font-light leading-relaxed text-beige/70">
                  {offer.description}
                </p>
                <p className="text-sm font-light text-gold">{offer.price}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gold/10 bg-dark py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="mb-3 text-xs font-light uppercase tracking-[0.2em] text-gold">
              Where sound meets body
            </p>
            <h2 className="mb-5 font-serif text-[clamp(1.8rem,5vw,3rem)] font-light leading-tight text-beige">
              Sound to open. Touch to land.
            </h2>
            <p className="text-base font-light leading-relaxed text-beige/72">
              PRANARTA brings handpan, listening, and refined bodywork into private moments for Ibiza: one person,
              a small retreat, a villa evening, or an intimate gathering.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <Link
              href="/sound"
              className="flex min-h-14 items-center justify-between border border-gold/20 px-5 py-4 text-sm font-light uppercase tracking-[0.13em] text-beige transition-all duration-300 hover:border-gold hover:text-gold"
            >
              <span className="inline-flex items-center gap-3">
                <Music2 className="h-4 w-4 text-gold" />
                Sound Experiences
              </span>
              <span>View</span>
            </Link>
            <Link
              href="/body"
              className="flex min-h-14 items-center justify-between border border-gold/20 px-5 py-4 text-sm font-light uppercase tracking-[0.13em] text-beige transition-all duration-300 hover:border-gold hover:text-gold"
            >
              <span className="inline-flex items-center gap-3">
                <Sparkles className="h-4 w-4 text-gold" />
                Emerald Touch
              </span>
              <span>View</span>
            </Link>
            <Link
              href="/signature"
              className="flex min-h-14 items-center justify-between border border-gold/20 px-5 py-4 text-sm font-light uppercase tracking-[0.13em] text-beige transition-all duration-300 hover:border-gold hover:text-gold"
            >
              <span>Signature Experience</span>
              <span>View</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
