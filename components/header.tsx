'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Instagram, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Sound', href: '/sound' },
  { name: 'Body', href: '/body' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Booking', href: '/booking' },
]

const WHATSAPP_LINK = 'https://wa.me/972587855123?text=Hello%20Tom,%20I%20am%20interested%20in%20booking%20a%20private%20experience%20in%20Ibiza'
const INSTAGRAM_LINK = 'https://www.instagram.com/pranarta7/'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
        isScrolled
          ? 'bg-dark/98 backdrop-blur-[10px] py-3 sm:py-4'
          : 'bg-gradient-to-b from-dark/95 to-transparent py-6 sm:py-8'
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-gold text-xs sm:text-sm tracking-[0.15em] font-light uppercase"
          >
            Tom Van Geem
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-beige text-[0.9rem] font-light tracking-[0.1em] uppercase transition-colors duration-300 hover:text-gold',
                  pathname === item.href && 'text-gold'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-beige"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 top-[60px] bg-dark/98 backdrop-blur-[10px] transition-all duration-500 ease-in-out',
          isMobileMenuOpen
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-full pointer-events-none'
        )}
      >
        <div className="flex flex-col items-center justify-start h-full gap-6 pt-12 pb-20 overflow-y-auto">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-xl font-serif text-beige tracking-wide transition-all duration-300 hover:text-gold',
                'opacity-0 translate-y-4',
                isMobileMenuOpen && 'animate-fade-up',
                pathname === item.href && 'text-gold'
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-4 mt-8">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gold/30 text-beige transition-all duration-300 hover:border-gold hover:text-gold"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={WHATSAPP_LINK}
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
