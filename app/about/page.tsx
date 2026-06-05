import type { Metadata } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { BRAND, IMAGES } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About | PRANARTA | Tom Van Geem | Ibiza',
  description:
    'The philosophy behind PRANARTA — music, touch and presence. Tom Van Geem on sound, The Emerald Touch, and Ibiza.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-dark pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
          style={{ backgroundImage: `url(${IMAGES.gallery[0].src})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/70 to-dark" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-16 sm:py-20">
          <Reveal>
            <p className="text-gold text-xs sm:text-sm tracking-[0.2em] uppercase font-light mb-4">
              {BRAND.name}
            </p>
            <h1 className="font-serif text-[clamp(2rem,5vw,4rem)] font-light text-beige mb-6 leading-[1.2] tracking-[0.02em]">
              About {BRAND.name}
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-serif text-[clamp(1.1rem,2vw,1.4rem)] font-light text-beige/90">
              Music, touch and presence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Path */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-8 sm:mb-10">
              The Path
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              Tom Van Geem grew up in a home where yoga and meditation were part of daily life — not
              as performance, but as something lived quietly in the background. From an early age,
              he was drawn inward: how it feels to sit still, to listen, to notice what moves beneath
              the surface of a day.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed">
              That curiosity never left. It became the thread running through everything that
              followed — music, touch, and the work that would eventually take shape as PRANARTA.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sound */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-8 sm:mb-10">
              Sound
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              More than twenty years in music — handpan, DJ sets, electronic production — taught Tom
              that the point is rarely the stage itself. What matters is what happens in the room:
              whether a gathering finds its atmosphere, whether a retreat opens gently, whether
              sunset arrives with something worth listening to.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed">
              Live performance, organic electronic texture, hybrid sets — each format serves the same
              intention. Not to impress, but to hold space. To give people somewhere quiet inside
              the noise of a beautiful, busy island.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Emerald Touch */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-8 sm:mb-10">
              The Emerald Touch
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              The Emerald Touch grew from the same inquiry. Years of practice, observation, and
              refined touch shaped a single signature experience — one session, one presence, one
              unhurried hour.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed">
              The intention is simple: slow the mind, soften what is tight, help someone feel
              grounded again. To create room — in the body, in the breath — for a person to
              reconnect with themselves without needing to explain it afterward.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Ibiza */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-8 sm:mb-10">
              Ibiza
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              Ibiza became home because the island asks for both — celebration and stillness, sea
              light and pine shadow, the energy of a gathering and the depth of a private evening.
              The work Tom offers lives in that balance.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/60 text-base sm:text-lg font-light leading-relaxed italic">
              Villas at dusk, retreat circles at dawn, festival stages under open sky — the setting
              changes. The thread remains: presence, sound, and touch in service of something real.
            </p>
          </Reveal>
        </div>
      </section>

      {/* A Musical Reflection */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-8 sm:mb-10">
              A Musical Reflection
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-6">
              Music has always been another way of exploring presence.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/75 text-base sm:text-lg font-light leading-relaxed mb-8">
              One example is Saffron&apos;s Wind — a poetic reflection carried by sound, silence and
              atmosphere.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <a
              href="https://open.spotify.com/album/3HOTX8mNeh4Y6gqlM76TXn?si=mir-Bnk4TP2ls05htIxdtQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border border-gold text-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark"
            >
              Listen on Spotify
            </a>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 sm:py-28 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <p className="text-beige/70 text-base sm:text-lg font-light mb-10">
              Explore the paths of {BRAND.name}.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/sound"
                className="inline-block px-8 py-4 bg-gold text-dark border border-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-transparent hover:text-gold w-full sm:w-auto text-center min-w-[240px]"
              >
                Sound Experiences
              </Link>
              <Link
                href="/body"
                className="inline-block px-8 py-4 border border-gold text-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark w-full sm:w-auto text-center min-w-[240px]"
              >
                The Emerald Touch
              </Link>
              <Link
                href="/signature"
                className="inline-block px-8 py-4 border border-gold text-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark w-full sm:w-auto text-center min-w-[240px]"
              >
                Signature Experience
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
