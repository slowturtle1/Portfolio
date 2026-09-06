import Link from 'next/link'
import WorkCards from '../components/WorkCards'
import { Todo } from '../components/Todo'

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="lp-hero" id="home">
        <div className="lp-blobs" aria-hidden="true">
          <div className="blob blob-pink" />
          <div className="blob blob-yellow" />
          <div className="blob blob-blue" />
        </div>

        <div style={{ position: 'relative', zIndex: 10 }}>
          <h1 className="lp-headline">
            I design digital products for complex, real-world problems.
          </h1>
          <p className="lp-intro-body">
            I&apos;m Alex, a London-based product designer with five years of experience in
            digital construction.
          </p>
          <p className="lp-intro-body">
            I&apos;ve worked with BIM, laser scanning, surveying and construction delivery —
            now I&apos;m bringing that domain knowledge into product design.
          </p>
          <p className="lp-intro-cta">
            Currently open to product design roles in London.
          </p>
        </div>
      </section>

      {/* ── SELECTED WORK ────────────────────────────────────────── */}
      <section className="work-section" id="work">
        <div className="work-section-head">
          <h2 className="work-section-title">Selected work</h2>
          <Link href="/work" className="work-section-link">
            All work →
          </Link>
        </div>
        <WorkCards />
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────── */}
      <section className="contact-block" id="contact">
        <h2 className="contact-block-heading">
          Currently open to product design roles in London.
        </h2>
        <p className="contact-block-body">
          I am most useful on products where the domain is complicated and the users know more
          than the designer does.
        </p>
        <div className="contact-links">
          <a className="contact-link" href="mailto:avugdragovic@gmail.com">
            avugdragovic@gmail.com
          </a>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/avugdragovic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <Todo>[CV LINK]</Todo>
        </div>
      </section>
    </>
  )
}
