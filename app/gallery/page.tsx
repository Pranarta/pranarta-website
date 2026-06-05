import { Reveal } from '@/components/reveal'
import { Instagram } from 'lucide-react'
import { BRAND, IMAGES, LINKS } from '@/lib/site'

export default function GalleryPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-dark pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${IMAGES.gallery[0].src})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/70 to-dark" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-16">
          <Reveal>
            <p className="text-gold text-xs sm:text-sm tracking-[0.2em] uppercase font-light mb-4">
              {BRAND.name}
            </p>
            <h1 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-beige tracking-[0.02em]">
              Gallery
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-dark">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {IMAGES.gallery.map((image, index) => (
              <Reveal key={image.src} delay={index * 100}>
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-[4/5] bg-dark-lighter border border-gold/20 overflow-hidden transition-all duration-300 hover:border-gold"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-center">
                      <Instagram className="h-6 w-6 text-beige mx-auto" />
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <p className="text-beige/70 text-base sm:text-lg font-light leading-relaxed mb-8">
              Follow {BRAND.name} for more moments and updates.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-gold text-gold text-[0.9rem] tracking-[0.15em] uppercase font-light transition-all duration-400 hover:bg-gold hover:text-dark"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
