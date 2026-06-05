import Link from 'next/link'
import { MessageCircle, Instagram } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { IMAGES, LINKS, WHATSAPP_PREFILLS, whatsappUrl } from '@/lib/site'

export default function BodyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-dark pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
          style={{ backgroundImage: `url(${IMAGES.headMassage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/70 to-dark" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-20">
          <Reveal>
            <h1 className="font-serif text-[clamp(2rem,5vw,4rem)] font-light text-beige mb-6 leading-[1.2] tracking-[0.02em]">
              The Emerald Touch
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-serif text-[clamp(1.1rem,2vw,1.4rem)] font-light text-beige/90 mb-4">
              More than a head massage.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/80 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Where touch meets presence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What Is The Emerald Touch? */}
      <section className="py-20 sm:py-28 bg-dark">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-8 sm:mb-10">
              What Is The Emerald Touch?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              The Emerald Touch is one experience — not a list of treatments. In form, it is touch
              at the head and neck. In essence, it is space: room for the mind to slow, for mental
              noise to loosen, for you to become present again.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              You stay awake. You stay in the room. And something in you settles — a deep
              relaxation that does not ask you to disappear. The body is met with attention; you
              feel grounded, as if you have returned to a quieter version of yourself.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-beige/60 text-base sm:text-lg font-light leading-relaxed italic">
              One signature session. One unhurried hour. Entirely yours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* An Inner Journey */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-8 sm:mb-10">
              An Inner Journey
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              Thoughts grow quieter. Time softens at the edges. There is a deep calm that does not
              need explaining — only felt.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              Some drift in that space between wakefulness and meditation, neither asleep nor
              striving. Others simply rest — profoundly, fully — and leave feeling more connected
              to themselves than when they arrived.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-beige/60 text-base sm:text-lg font-light leading-relaxed italic">
              Everyone&apos;s journey is different. The touch is the same: patient, precise, and
              present.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Story Behind The Emerald Touch */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-8 sm:mb-10">
              The Story Behind The Emerald Touch
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              Tom Van Geem grew up around yoga and meditation — not as doctrine, but as atmosphere.
              A lifelong fascination with inner exploration led him from stillness to sound: the
              handpan became another way of listening, another path into presence.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              Over years of practice and quiet observation, he shaped a personal approach centered
              on one thing: being fully here. The Emerald Touch is that approach made tangible —
              refined touch, unhurried attention, nothing added that does not belong.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-beige/60 text-base sm:text-lg font-light leading-relaxed italic">
              Music and touch, for Tom, are not separate offerings. They are two expressions of the
              same inquiry.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sound & Touch Experience */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-6">
              Sound &amp; Touch Experience
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-beige/70 font-light text-base sm:text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
              Live handpan and The Emerald Touch belong together — sound to open the body, touch to
              let it land. Some evenings begin with music; others end there. Tom shapes the arc
              with you.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/60 font-light text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto italic">
              For private villas, retreats, and gatherings in Ibiza.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/sound"
                className="inline-block px-8 py-4 border border-gold text-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark"
              >
                Explore Sound Experiences
              </Link>
              <Link
                href="/signature"
                className="inline-block px-8 py-4 border border-gold text-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark"
              >
                Signature Experience
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Book The Emerald Touch */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-6">
              Book The Emerald Touch
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/70 text-base sm:text-lg font-light mb-10">
              Available for private sessions, retreats and selected wellness experiences in Ibiza.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href={whatsappUrl(WHATSAPP_PREFILLS.emeraldTouch)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-10 py-4 bg-gold text-dark border border-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-transparent hover:text-gold w-full sm:w-auto min-w-[220px]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-10 py-4 border border-gold text-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark w-full sm:w-auto min-w-[220px]"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
