import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Onboarding Redesign — Aleksandra Vugdragovic' }

export default function ProjectAlpha() {
  return (
    <>
      <div className="project-hero">
        <span className="label">/01 — UX Research &amp; Product Design</span>
        <h1 className="project-hero-title">Onboarding<br />Redesign</h1>
        <p className="project-hero-desc">
          A full redesign of the core onboarding experience for a B2B SaaS platform,
          reducing drop-off by 40% through progressive disclosure and contextual guidance.
        </p>
        <div className="project-meta">
          <div className="meta-item"><span className="meta-label">Role</span><span className="meta-value">Lead Product Designer</span></div>
          <div className="meta-item"><span className="meta-label">Timeline</span><span className="meta-value">Q1 2024 — 3 months</span></div>
          <div className="meta-item"><span className="meta-label">Tools</span><span className="meta-value">Figma, Maze, Hotjar</span></div>
          <div className="meta-item"><span className="meta-label">Deliverables</span><span className="meta-value">Research report, Prototype, Specs</span></div>
        </div>
        <div className="project-cover"><span className="placeholder-label">Cover image</span></div>
      </div>

      <div className="case-section">
        <div className="case-number">01</div>
        <div>
          <h2 className="case-heading">Overview</h2>
          <p className="case-body">The platform had a critical retention problem — 62% of new users never reached their first "aha moment" within the first session. Analytics showed users abandoning the setup flow at three consistent drop-off points, but we didn&apos;t know why.</p>
          <p className="case-body">My goal was to diagnose the friction, redesign the experience, and validate the new flow before shipping — all within a 3-month window ahead of a major growth push.</p>
          <div className="highlight-block"><p>&ldquo;62% of new users never completed onboarding — we were losing people before they understood the product&apos;s value.&rdquo;</p></div>
        </div>
      </div>

      <div className="case-section">
        <div className="case-number">02</div>
        <div>
          <h2 className="case-heading">Research</h2>
          <p className="case-body">I started with a mixed-method approach: session recordings via Hotjar revealed where users hesitated and rage-clicked. I followed up with 8 moderated user interviews to understand the emotional context behind the drop-offs.</p>
          <p className="case-body">Three key themes emerged: cognitive overload in the first screen, unclear value at each step, and a mismatch between user mental models and our information architecture.</p>
          <div className="case-image-grid">
            <div className="case-image-grid-item"><span className="placeholder-label">User flow analysis</span></div>
            <div className="case-image-grid-item"><span className="placeholder-label">Interview synthesis</span></div>
          </div>
        </div>
      </div>

      <div className="case-section">
        <div className="case-number">03</div>
        <div>
          <h2 className="case-heading">Design</h2>
          <p className="case-body">The redesign centred on three principles: show one thing at a time, always communicate progress, and defer optional complexity. I introduced a stepped setup flow with contextual microcopy at each decision point.</p>
          <p className="case-body">I ran three rounds of unmoderated testing in Maze, iterating on copy, step ordering, and the empty state experience. Each round cut task-completion time and reduced observed hesitation patterns.</p>
          <div className="case-image"><span className="placeholder-label">Wireframe progression — v1 → v3</span></div>
          <div className="case-image-grid" style={{ marginTop: '1px' }}>
            <div className="case-image-grid-item"><span className="placeholder-label">Final flow — Step 1</span></div>
            <div className="case-image-grid-item"><span className="placeholder-label">Final flow — Step 2</span></div>
          </div>
        </div>
      </div>

      <div className="case-section">
        <div className="case-number">04</div>
        <div>
          <h2 className="case-heading">Outcome</h2>
          <p className="case-body">The redesigned flow shipped in week 11. Within 30 days of launch, onboarding completion rates improved significantly across all user cohorts. The engineering team reported a 50% reduction in onboarding-related support tickets.</p>
          <div className="outcome-grid">
            <div className="outcome-item"><div className="outcome-number">−40%</div><div className="outcome-label">Drop-off rate within first session</div></div>
            <div className="outcome-item"><div className="outcome-number">2.1×</div><div className="outcome-label">Increase in &ldquo;aha moment&rdquo; completion</div></div>
            <div className="outcome-item"><div className="outcome-number">−50%</div><div className="outcome-label">Onboarding support tickets</div></div>
          </div>
        </div>
      </div>

      <div className="next-project">
        <div>
          <div className="next-project-label">Next project</div>
          <Link href="/projects/project-design-system"><div className="next-project-title">Design System →</div></Link>
        </div>
        <Link href="/#projects" className="btn-secondary">All projects</Link>
      </div>
    </>
  )
}
