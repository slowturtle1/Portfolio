'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

const links = [
  { href: '/#work',      label: 'Work' },
  { href: '/#about',     label: 'About' },
  { href: 'mailto:hello@igorj.com', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24))

  return (
    <>
      <motion.nav
        className={`nav${scrolled ? ' nav--scrolled' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Link href="/" className="nav-mark">IJ</Link>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={pathname === '/about' && l.href === '/about' ? 'active' : ''}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button className="nav-burger" aria-label="Menu" onClick={() => setOpen(true)}>
          <span /><span />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
          >
            <div className="mobile-menu-top">
              <span className="nav-mark">IJ</span>
              <button onClick={() => setOpen(false)} aria-label="Close"><X size={20} strokeWidth={1.5} /></button>
            </div>
            <nav className="mobile-nav">
              {links.map((l, i) => (
                <motion.div key={l.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, type: 'spring', stiffness: 200, damping: 22 }}
                >
                  <Link href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
