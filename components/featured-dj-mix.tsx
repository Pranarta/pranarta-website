'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import { FEATURED_MIXES, soundcloudEmbedUrl } from '@/lib/site'

const featuredMix = FEATURED_MIXES[0]

export function FeaturedDjMix() {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = () => {
    setIsExpanded((prev) => !prev)
  }

  const embedSrc = `${soundcloudEmbedUrl(featuredMix.soundcloudUrl!)}&auto_play=${isExpanded ? 'true' : 'false'}`

  return (
    <section
      id="in-depth-we-trust"
      className="py-16 sm:py-24 bg-dark border-t border-gold/10 scroll-mt-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <h2 className="font-serif text-[clamp(1.6rem,3vw,2.4rem)] font-light text-beige tracking-[0.02em] text-center mb-10">
            Featured DJ Mix
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="p-7 sm:p-8 border border-gold/25 transition-all duration-400 hover:border-gold">
            <div className="flex items-start gap-5 sm:gap-6">
              <button
                type="button"
                onClick={handleExpand}
                aria-label={isExpanded ? 'Collapse player' : `Play ${featuredMix.title}`}
                aria-expanded={isExpanded}
                className="shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gold/60 text-gold transition-all duration-400 hover:border-gold hover:bg-gold/10"
              >
                <Play className="h-4 w-4 sm:h-5 sm:w-5 ml-0.5" />
              </button>

              <div className="flex-1 min-w-0 text-left">
                <button
                  type="button"
                  onClick={handleExpand}
                  className="font-serif text-gold text-xl sm:text-2xl font-light mb-2 transition-all duration-300 hover:tracking-wide text-left"
                >
                  {featuredMix.title}
                </button>
                <p className="text-beige/70 font-light text-sm sm:text-base">
                  {featuredMix.genres}
                </p>
              </div>
            </div>

            <div
              className={cn(
                'grid transition-all duration-500 ease-out',
                isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'
              )}
            >
              <div className="overflow-hidden min-h-0">
                {isExpanded && (
                  <div className="border border-gold/20 bg-dark/50">
                    <iframe
                      title={`${featuredMix.title} — SoundCloud`}
                      width="100%"
                      height="120"
                      scrolling="no"
                      frameBorder="no"
                      allow="autoplay"
                      src={embedSrc}
                      className="w-full block"
                    />
                  </div>
                )}
              </div>
            </div>

            <div
              className={cn(
                'text-center transition-all duration-500 ease-out',
                isExpanded ? 'mt-5 opacity-100' : 'mt-0 h-0 opacity-0 overflow-hidden'
              )}
            >
              <a
                href={featuredMix.soundcloudUrl!}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gold text-sm tracking-[0.1em] font-light transition-colors duration-300 hover:text-beige"
              >
                Open on SoundCloud →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
