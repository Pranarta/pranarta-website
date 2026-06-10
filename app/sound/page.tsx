'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SoundHero } from '@/components/sound-hero'
import { SoundFormatSection } from '@/components/sound-format-section'
import { FeaturedCreations } from '@/components/featured-creations'
import { DjSetsFeaturedMixes } from '@/components/dj-sets-featured-mixes'
import { SpotifyPromo } from '@/components/spotify-promo'
import { IMAGES, LINKS, whatsappUrl } from '@/lib/site'
import { useTranslations } from '@/hooks/use-translations'

export default function SoundPage() {
  const t = useTranslations()

  const listenLinks = [
    {
      name: t.sound.listenWatch.platforms.spotify.label,
      href: LINKS.spotify,
      description: t.sound.listenWatch.platforms.spotify.description,
    },
    {
      name: t.sound.listenWatch.platforms.soundcloud.label,
      href: LINKS.soundcloudProfile,
      description: t.sound.listenWatch.platforms.soundcloud.description,
    },
    {
      name: t.sound.listenWatch.platforms.instagram.label,
      href: LINKS.instagram,
      description: t.sound.listenWatch.platforms.instagram.description,
    },
  ]

  return (
    <>
      <SoundHero />

      <SoundFormatSection
        title={t.sound.formats.handpan.title}
        description={t.sound.formats.handpan.description}
        image={IMAGES.liveShow}
      />

      <SoundFormatSection
        title={t.sound.formats.electroAcoustic.title}
        description={t.sound.formats.electroAcoustic.description}
        image={IMAGES.gallery[1].src}
        imageOnRight
      />

      <SoundFormatSection
        title={t.sound.formats.djSets.title}
        description={t.sound.formats.djSets.description}
        image={IMAGES.aboutVilla}
      >
        <DjSetsFeaturedMixes />
      </SoundFormatSection>

      <SpotifyPromo />

      {/* Listen & Watch */}
      <section className="py-16 sm:py-24 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.25rem,2.2vw,1.75rem)] font-light text-beige tracking-[0.02em] text-center mb-3">
              {t.sound.listenWatch.heading}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-beige/70 text-base sm:text-lg font-light leading-relaxed text-center max-w-2xl mx-auto mb-8">
              {t.sound.listenWatch.intro}
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

      <FeaturedCreations />

      {/* Cross-sell Section */}
      <section className="py-16 sm:py-24 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <Reveal>
            <p className="text-gold text-xs sm:text-sm tracking-[0.2em] uppercase font-light mb-3">
              {t.sound.crossSell.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-5">
              {t.sound.crossSell.heading}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/70 font-light text-base sm:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              {t.sound.crossSell.body}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/body"
                className="inline-block px-8 py-4 border border-gold text-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark"
              >
                {t.common.buttons.exploreTheEmeraldTouch}
              </Link>
              <Link
                href="/signature"
                className="inline-block px-8 py-4 border border-gold text-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark"
              >
                {t.common.buttons.signatureExperience}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Book a Sound Experience */}
      <section className="py-16 sm:py-24 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] mb-5">
              {t.sound.bookCta.heading}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-beige/70 text-base sm:text-lg font-light mb-8">
              {t.sound.bookCta.text}
            </p>
          </Reveal>
          <Reveal delay={400}>
            <a
              href={whatsappUrl(t.whatsappPrefills.sound)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gold text-dark border border-gold text-[0.85rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-transparent hover:text-gold"
            >
              <MessageCircle className="h-4 w-4" />
              {t.common.buttons.contactViaWhatsapp}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
