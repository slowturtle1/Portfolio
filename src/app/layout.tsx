import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import './globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aleksandra Vugdragovic — Product Designer, London',
  description:
    'I spent five years making the records that construction software is trying to replace. Now I design the software. Selected work: Cow Compass, QA Tool, CareLoop, Notice.',
  openGraph: {
    title: 'Aleksandra Vugdragovic',
    description: 'Product designer, London. Complex technical domains.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={playfair.variable}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
