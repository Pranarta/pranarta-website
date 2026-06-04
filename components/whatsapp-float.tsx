'use client'

import { MessageCircle } from 'lucide-react'

const WHATSAPP_LINK = 'https://wa.me/972587855123?text=Hello%20Tom,%20I%20am%20interested%20in%20booking%20a%20private%20experience%20in%20Ibiza'

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="lg:hidden fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gold text-dark shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-glow"
      aria-label="Book via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
