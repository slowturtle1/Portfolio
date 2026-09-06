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
          <p className="lp-intro">
            hi, i&apos;m alex. london based <span className="lp-intro-accent">product designer</span>.
          </p>
          <p className="lp-intro-body">
            Five years in digital construction: laser scanning, BIM coordination and ISO 19650.
            I manage survey delivery at DPR. What I gravitate to is getting into a process,
            understanding where the friction is, and fixing it. Along the way I kept building
            the tools I wished existed. This is that work, labelled honestly: one concept, one
            prototype, two things built in twenty-four hours.
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
