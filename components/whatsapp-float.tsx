'use client'

import { MessageCircle } from 'lucide-react'

import { WHATSAPP_PREFILLS, whatsappUrl } from '@/lib/site'

const WHATSAPP_LINK = whatsappUrl(WHATSAPP_PREFILLS.general)

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float lg:hidden fixed bottom-6 right-6 z-[60] flex items-center justify-center w-14 h-14 bg-gold text-dark shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-glow"
      aria-label="Book via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
