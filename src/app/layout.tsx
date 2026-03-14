import type { Metadata } from 'next'
import { Bricolage_Grotesque, Epilogue, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
})

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-epilogue',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Igor J — Product Designer',
  description: 'Product Designer crafting digital products that feel inevitable.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${epilogue.variable} ${jetbrains.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
