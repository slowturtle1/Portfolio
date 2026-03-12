'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

const navLinks = [
  { href: '/#projects', label: 'Projects', internal: true },
  { href: '/#playground', label: 'Playground', internal: true },
  { href: '/about', label: 'About', internal: true },
]

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <>
      <nav className="nav">
        {/* Scroll progress bar */}
        <motion.div className="nav-progress" style={{ scaleX }} />

        <Link href="/" className="nav-logo">
          AV
        </Link>

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
          <li>
            <a href="mailto:hello@avugdragovic.com" className="btn-primary nav-cta">
              Get in touch
            </a>
          </li>
        </ul>

        <button
          className="nav-hamburger"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={22} strokeWidth={1.5} />
        </button>
      </nav>

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
              <span className="nav-logo">AV</span>
              <button
                className="mobile-menu-close"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="mobile-nav-links">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, type: 'spring', stiffness: 200, damping: 22 }}
                >
                  <Link href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.18, type: 'spring', stiffness: 200, damping: 22 }}
              >
                <a href="mailto:hello@avugdragovic.com" onClick={() => setMenuOpen(false)}>
                  Get in touch
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
