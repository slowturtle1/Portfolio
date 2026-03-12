'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-logo">IJ</Link>
        <ul className="nav-links">
          <li><Link href="/#projects" className={pathname === '/' ? '' : ''}>Projects</Link></li>
          <li><Link href="/#playground">Playground</Link></li>
          <li><Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link></li>
          <li>
            <a href="mailto:hello@igorj.com" className="btn-primary nav-cta">
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

      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <span className="nav-logo">IJ</span>
            <button
              className="mobile-menu-close"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="mobile-nav-links">
            <Link href="/#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link href="/#playground" onClick={() => setMenuOpen(false)}>Playground</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <a href="mailto:hello@igorj.com" onClick={() => setMenuOpen(false)}>Get in touch</a>
          </nav>
        </div>
      )}
    </>
  )
}
