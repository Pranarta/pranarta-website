'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Instagram, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NavAudioTrigger } from '@/components/nav-audio-trigger'
import { LINKS, WHATSAPP_PREFILLS, whatsappUrl } from '@/lib/site'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Sound', href: '/sound' },
  { name: 'Body', href: '/body' },
  { name: 'Signature', href: '/signature' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Teachings', href: '/teachings' },
]

const mobileQuickLinks = new Set(['Sound', 'Body'])
const mobileMenuNavigation = navigation.filter((item) => !mobileQuickLinks.has(item.name))

const bookingLink = { name: 'Booking', href: '/booking' }

const navLinkClass =
  'text-[0.9rem] font-light tracking-[0.1em] uppercase transition-all duration-300 text-beige hover:text-gold'

const mobileBarLinkClass =
  'text-[0.7rem] sm:text-[0.78rem] md:text-[0.85rem] font-light tracking-[0.1em] uppercase transition-all duration-300 text-beige hover:text-gold active:scale-[0.98] shrink-0'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(64)
  const headerRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const updateHeight = () => {
      setHeaderHeight(header.offsetHeight)
    }

    updateHeight()

    const observer = new ResizeObserver(updateHeight)
    observer.observe(header)
    window.addEventListener('resize', updateHeight)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateHeight)
    }
  }, [isScrolled])

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
        isScrolled
          ? 'bg-dark/98 backdrop-blur-[10px] py-3 sm:py-4'
          : 'bg-gradient-to-b from-dark/95 to-transparent py-6 sm:py-8'
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-between">
          <Link
            href="/"
            className="text-gold text-xs sm:text-sm tracking-[0.15em] font-light uppercase"
          >
            <span className="block">PRANARTA</span>
            <span className="block normal-case tracking-[0.08em] text-[0.72em] text-beige/40 mt-0.5">
              by Tom Van Geem
            </span>
          </Link>

          <div className="flex items-center gap-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(navLinkClass, pathname === item.href && 'text-gold')}
              >
                {item.name}
              </Link>
            ))}
            <NavAudioTrigger />
            <Link
              href={bookingLink.href}
              className={cn(
                navLinkClass,
                'px-4 py-2 border border-gold bg-gold/15 text-gold hover:bg-gold/25 hover:border-gold/90',
                pathname === bookingLink.href && 'bg-gold/25'
              )}
            >
              {bookingLink.name}
            </Link>
          </div>
        </div>

        {/* Mobile / Tablet */}
        <div className="lg:hidden flex items-start justify-between gap-1.5 sm:gap-2 min-w-0">
          <Link
            href="/"
            className="text-gold text-xs sm:text-sm tracking-[0.15em] font-light uppercase min-w-0 shrink"
          >
            <span className="block whitespace-nowrap leading-none">PRANARTA</span>
            <span className="block normal-case tracking-[0.08em] text-[0.72em] text-beige/40 mt-0.5 whitespace-nowrap leading-tight">
              by Tom Van Geem
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0 whitespace-nowrap pt-px">
            <Link
              href="/sound"
              className={cn(mobileBarLinkClass, pathname === '/sound' && 'text-gold')}
            >
              Sound
            </Link>
            <Link
              href="/body"
              className={cn(mobileBarLinkClass, pathname === '/body' && 'text-gold')}
            >
              Body
            </Link>
            <NavAudioTrigger
              className="active:scale-95 shrink-0"
              iconClassName="h-3.5 w-3.5 sm:h-[0.95rem] sm:w-[0.95rem]"
            />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 sm:p-1.5 text-beige transition-colors duration-300 hover:text-gold shrink-0"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-x-0 bottom-0 bg-dark/98 backdrop-blur-[10px] transition-all duration-500 ease-in-out',
          isMobileMenuOpen
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-full pointer-events-none'
        )}
        style={{ top: headerHeight }}
      >
        <div className="flex flex-col items-center justify-start h-full gap-6 pt-12 pb-20 overflow-y-auto">
          {mobileMenuNavigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-xl font-serif tracking-wide transition-all duration-300',
                'opacity-0 translate-y-4',
                isMobileMenuOpen && 'animate-fade-up',
                'text-beige hover:text-gold',
                pathname === item.href && 'text-gold'
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={bookingLink.href}
            className={cn(
              'text-xl font-serif tracking-wide transition-all duration-300',
              'opacity-0 translate-y-4',
              isMobileMenuOpen && 'animate-fade-up',
              'px-6 py-3 border border-gold bg-gold/15 text-gold hover:bg-gold/25',
              pathname === bookingLink.href && 'bg-gold/25'
            )}
            style={{ animationDelay: `${mobileMenuNavigation.length * 100}ms` }}
          >
            {bookingLink.name}
          </Link>

          <div className="flex items-center gap-4 mt-8">
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gold/30 text-beige transition-all duration-300 hover:border-gold hover:text-gold"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={whatsappUrl(WHATSAPP_PREFILLS.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gold text-dark px-6 py-3 text-sm font-light tracking-[0.15em] uppercase transition-all duration-300 hover:bg-transparent hover:text-gold border border-gold"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
