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
  title: 'Tom Van Geem — Private Sound & Body Experiences | Ibiza',
  description: 'Private sound and body experiences in Ibiza. Handpan, live sound, and refined immersive sessions for villas, retreats, and intimate gatherings.',
  keywords: 'handpan artist, Ibiza, sound experiences, body experiences, private sessions, luxury retreats, live performance, wellness',
  openGraph: {
    title: 'Tom Van Geem — Private Sound & Body Experiences',
    description: 'Handpan, live sound, and refined immersive sessions in Ibiza.',
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
