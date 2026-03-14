'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

const navLinks = [
  { href: '/#work',      label: 'Work' },
  { href: '/#about',     label: 'About' },
  { href: '/about',      label: 'Full bio' },
]

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 20))

  return (
    <>
      <motion.nav
        className={`nav${scrolled ? ' nav-scrolled' : ''}`}
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Link href="/" className="nav-logo">Igor J</Link>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={link.href === '/about' && pathname === '/about' ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <a href="mailto:hello@igorj.com" className="nav-cta-text">
            Get in touch
          </a>
          <button
            className="nav-hamburger"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <span /><span />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
          >
            <div className="mobile-menu-header">
              <span className="nav-logo">Igor J</span>
              <button className="mobile-menu-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="mobile-nav-links">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, type: 'spring', stiffness: 200, damping: 22 }}
                >
                  <Link href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 22 }}
              >
                <a href="mailto:hello@igorj.com" onClick={() => setMenuOpen(false)}>Get in touch</a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
