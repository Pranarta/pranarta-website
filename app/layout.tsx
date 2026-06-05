import type { Metadata } from 'next'
import { Lato, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PRANARTA — Where Sound Meets Body | Tom Van Geem | Ibiza',
  description:
    'PRANARTA — Sound Experiences, The Emerald Touch, and Signature Experiences in Ibiza. Handpan, live sound, and refined immersive sessions.',
  keywords:
    'PRANARTA, Tom Van Geem, handpan, Ibiza, sound experiences, Emerald Touch, signature experience, luxury retreats, live performance',
  openGraph: {
    title: 'PRANARTA — Where Sound Meets Body',
    description: 'Sound Experiences, The Emerald Touch, and Signature Experiences in Ibiza.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${cormorant.variable} bg-dark`}>
      <body className="font-sans antialiased bg-dark text-beige">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
