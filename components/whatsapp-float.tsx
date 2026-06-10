'use client'

import { MessageCircle } from 'lucide-react'

import { whatsappUrl } from '@/lib/site'
import { useTranslations } from '@/hooks/use-translations'

export function WhatsAppFloat() {
  const t = useTranslations()

  return (
    <a
      href={whatsappUrl(t.whatsappPrefills.general)}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float lg:hidden fixed bottom-6 right-6 z-[60] flex items-center justify-center w-14 h-14 bg-gold text-dark shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-glow"
      aria-label={t.a11y.bookViaWhatsapp}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
