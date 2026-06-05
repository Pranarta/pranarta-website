import Link from 'next/link'
import { Instagram, MessageCircle, Mail, MapPin } from 'lucide-react'

const WHATSAPP_LINK = 'https://wa.me/972587855123'
const INSTAGRAM_LINK = 'https://www.instagram.com/pranarta7/'
const EMAIL_LINK = 'mailto:pranartra7@gmail.com'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Sound', href: '/sound' },
  { name: 'Body', href: '/body' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Booking', href: '/booking' },
]

export function Footer() {
  return (
    <footer className="bg-dark border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-gold text-sm tracking-[0.15em] uppercase font-light mb-4">Tom Van Geem</h3>
            <p className="text-beige/70 font-light leading-relaxed mb-6 max-w-md text-sm">
              Private sound and body experiences in Ibiza. Combining sound, touch, and atmosphere for deeply immersive sessions.
            </p>
            <div className="flex items-center gap-2 text-beige/50 text-sm">
              <MapPin className="h-4 w-4" />
              <span>Ibiza, Spain</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-gold text-xs tracking-[0.15em] uppercase font-light mb-6">Navigation</h4>
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

          {/* Contact */}
          <div>
            <h4 className="text-gold text-xs tracking-[0.15em] uppercase font-light mb-6">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={INSTAGRAM_LINK}
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
                  href={WHATSAPP_LINK}
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
                  href={EMAIL_LINK}
                  className="flex items-center gap-3 text-beige/70 hover:text-gold transition-colors duration-300 text-sm break-all"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gold/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-beige/40 text-xs font-light text-center md:text-left">
              &copy; {new Date().getFullYear()} Tom Van Geem. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gold/20 text-beige/70 hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gold/20 text-beige/70 hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={EMAIL_LINK}
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
