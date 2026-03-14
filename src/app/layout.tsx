import type { Metadata } from 'next'
import { Cormorant_Garamond, Instrument_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const instrument = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Igor J — Product Designer',
  description: 'Product Designer crafting digital products that feel inevitable — clear, considered, and built for real people.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${instrument.variable} ${dmMono.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
