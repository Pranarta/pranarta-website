import { Reveal } from '@/components/reveal'
import { Instagram } from 'lucide-react'

const INSTAGRAM_LINK = 'https://www.instagram.com/pranarta7/'

const galleryImages = [
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d.png-NWPvw1BT4P5qeNrzLan7tZBSyOnRM1.jpeg', alt: 'Handpan Performance' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20at%2023.27.24-sHKAV8qRZSmGSoyGfT89iD9kmQycX5.jpeg', alt: 'Head Massage' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20at%2022.34.11-E7LucUs5PZBXf8lZAg5sQPECAlekIR.jpeg', alt: 'Es Vedra Portrait' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20at%2023.j27.24-lJSYqpeD9MA8g3X8EO3UxvnTzTAtjr.jpeg', alt: 'Sound & Body Collage' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20jat%2023.27.24-sQZgTo5eW74az1SDbwT0o14AhCWfoy.jpeg', alt: 'Pranarta Experiences' },
  { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20%20nat%2023.27.24-fhHO9cnDUVIsDlinHyYmpSczeCoiv2.jpeg', alt: 'Tom Van Geem Experiences' },
]

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-dark pt-20">
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-16">
          <Reveal>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-beige tracking-[0.02em]">
              Gallery
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-24 bg-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {galleryImages.map((image, index) => (
              <Reveal key={index} delay={index * 100}>
                <a
                  href={INSTAGRAM_LINK}
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

      {/* Instagram CTA */}
      <section className="py-16 sm:py-24 bg-dark border-t border-gold/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <Reveal>
            <p className="text-beige/70 text-base sm:text-lg font-light leading-relaxed mb-8">
              Follow for more moments and updates.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a
              href={INSTAGRAM_LINK}
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
