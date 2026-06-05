import Link from 'next/link'
import { Instagram, MessageCircle, Mail, MapPin } from 'lucide-react'
import { BRAND, LINKS } from '@/lib/site'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Sound', href: '/sound' },
  { name: 'Body', href: '/body' },
  { name: 'Signature', href: '/signature' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Booking', href: '/booking' },
]

export function Footer() {
  return (
    <footer className="bg-dark border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-gold text-sm tracking-[0.15em] uppercase font-light mb-1">
              {BRAND.name}
            </h3>
            <p className="text-beige/50 text-xs tracking-[0.08em] font-light mb-4 normal-case">
              by {BRAND.practitioner}
            </p>
            <p className="text-beige/70 font-light leading-relaxed mb-2 max-w-md text-sm italic">
              {BRAND.tagline}
            </p>
            <p className="text-beige/70 font-light leading-relaxed mb-6 max-w-md text-sm">
              Sound Experiences, The Emerald Touch, and Signature Experiences — curated for luxury
              villas, retreats, and gatherings in Ibiza.
            </p>
            <div className="flex items-center gap-2 text-beige/50 text-sm">
              <MapPin className="h-4 w-4" />
              <span>Ibiza, Spain</span>
            </div>
          </div>

          <div>
            <h4 className="text-gold text-xs tracking-[0.15em] uppercase font-light mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-beige/70 hover:text-gold transition-colors duration-300 text-sm font-light"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-xs tracking-[0.15em] uppercase font-light mb-6">
              Connect
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-beige/70 hover:text-gold transition-colors duration-300 text-sm"
                >
                  <Instagram className="h-4 w-4 shrink-0" />
                  @pranarta7
                </a>
              </li>
              <li>
                <a
                  href={LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-beige/70 hover:text-gold transition-colors duration-300 text-sm"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={LINKS.email}
                  className="flex items-center gap-3 text-beige/70 hover:text-gold transition-colors duration-300 text-sm break-all"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-beige/40 text-xs font-light text-center md:text-left">
              &copy; {new Date().getFullYear()} {BRAND.name} · {BRAND.practitioner}. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gold/20 text-beige/70 hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gold/20 text-beige/70 hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={LINKS.email}
                className="p-2 border border-gold/20 text-beige/70 hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
