import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About — Aleksandra Vugdragovic',
}

export default function About() {
  return (
    <>
      <div className="about-page-hero">
        <div>
          <h1 className="about-page-title">turning complexity<br />into clarity.</h1>
          <p className="about-page-body">
            i&apos;m a product designer with a focus on interaction design and systems thinking.
            i believe great design is mostly invisible — it removes friction, surfaces the right
            information, and earns trust over time.
          </p>
          <p className="about-page-body">
            i&apos;ve worked across b2b saas, fintech, and healthtech — at startups where i was
            the first designer, and at scale-ups navigating rapid growth. what i enjoy most
            is working on problems that are genuinely hard to solve.
          </p>
          <p className="about-page-body">
            currently open to new opportunities. i work best in collaborative environments
            where design has a seat at the table from day one.
          </p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: 'var(--space-xl)' }}>
            <a href="mailto:avugdragovic@gmail.com" className="hero-text-link">
              get in touch <ArrowUpRight size={13} style={{ display: 'inline', verticalAlign: 'middle' }} />
            </a>
            <a href="#" className="hero-text-link">download cv</a>
          </div>
        </div>
        <div className="about-page-photo">
          <span className="placeholder-label">Photo</span>
        </div>
      </div>

      <div className="contact-section">
        <div>
          <h2 className="contact-heading">let&apos;s work<br />together.</h2>
          <p className="contact-body">
            i&apos;m currently open to full-time roles and select freelance projects.
            if you&apos;re building something worth designing well, i&apos;d love to hear about it.
          </p>
          <p className="about-page-body" style={{ marginBottom: 'var(--space-lg)' }}>
            currently based in london.
          </p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <a href="mailto:avugdragovic@gmail.com" className="hero-text-link">
              avugdragovic@gmail.com <ArrowUpRight size={13} style={{ display: 'inline', verticalAlign: 'middle' }} />
            </a>
            <a href="https://www.linkedin.com/in/avugdragovic/" target="_blank" rel="noopener noreferrer" className="hero-text-link">linkedin</a>
          </div>
        </div>
      </div>
    </>
  )
}
