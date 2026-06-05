import { Reveal } from '@/components/reveal'

type SoundFormatSectionProps = {
  title: string
  description: string
  image: string
  imageOnRight?: boolean
  children?: React.ReactNode
}

export function SoundFormatSection({
  title,
  description,
  image,
  imageOnRight = false,
  children,
}: SoundFormatSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-dark border-t border-gold/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center">
            <div className={imageOnRight ? 'lg:order-2' : ''}>
              <div className="aspect-[4/3] overflow-hidden border border-gold/20">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover opacity-85"
                />
              </div>
            </div>
            <div className={`space-y-3 ${imageOnRight ? 'lg:order-1' : ''}`}>
              <h3 className="font-serif text-[clamp(1.4rem,2.5vw,2rem)] text-beige tracking-[0.02em]">
                {title}
              </h3>
              <p className="text-beige/70 font-light text-base sm:text-lg leading-relaxed">
                {description}
              </p>
              {children}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
