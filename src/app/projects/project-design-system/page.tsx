import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = { title: 'Design System — Aleksandra Vugdragovic' }

export default function ProjectDesignSystem() {
  return (
    <>
      <div className="project-hero">
        <span className="label">/02 — Design System &amp; UI Design</span>
        <h1 className="project-hero-title">Design<br />System</h1>
        <p className="project-hero-desc">
          Built a scalable component library from scratch, unifying three product lines under a single
          visual language — reducing design debt and cutting design-to-dev handoff time in half.
        </p>
        <div className="project-meta">
          <div className="meta-item"><span className="meta-label">Role</span><span className="meta-value">Designer &amp; System Lead</span></div>
          <div className="meta-item"><span className="meta-label">Timeline</span><span className="meta-value">Q2–Q3 2024 — 6 months</span></div>
          <div className="meta-item"><span className="meta-label">Tools</span><span className="meta-value">Figma, Storybook, Notion</span></div>
          <div className="meta-item"><span className="meta-label">Deliverables</span><span className="meta-value">Component library, Tokens, Docs</span></div>
        </div>
        <div className="project-cover"><span className="placeholder-label">Cover image</span></div>
      </div>

      <div className="case-section">
        <div className="case-number">01</div>
        <div>
          <h2 className="case-heading">Overview</h2>
          <p className="case-body">The company had grown through acquisition, resulting in three separate product lines built on entirely different design foundations. Designers were reinventing components weekly; engineers maintained parallel implementations.</p>
          <p className="case-body">I was brought in to lead the design side of a cross-functional effort to unify everything under one system — while keeping three separate product teams shipping without interruption.</p>
          <div className="highlight-block"><p>&ldquo;Three products, three component libraries, zero shared tokens. Every design decision was being made three times.&rdquo;</p></div>
        </div>
      </div>

      <div className="case-section">
        <div className="case-number">02</div>
        <div>
          <h2 className="case-heading">Audit &amp; Foundation</h2>
          <p className="case-body">Before building anything, I audited all three products — cataloguing every unique component, colour value, spacing unit, and typographic style in use. The audit surfaced 340+ unique components, 80+ colour values, and no shared spacing system.</p>
          <p className="case-body">From this, I established a token architecture: global tokens feeding into semantic tokens feeding into component tokens. This allowed each product to theme independently while sharing the underlying system.</p>
          <div className="case-image-grid">
            <div className="case-image-grid-item"><span className="placeholder-label">Component inventory</span></div>
            <div className="case-image-grid-item"><span className="placeholder-label">Token architecture diagram</span></div>
          </div>
        </div>
      </div>

      <div className="case-section">
        <div className="case-number">03</div>
        <div>
          <h2 className="case-heading">Building the System</h2>
          <p className="case-body">I designed the component library in Figma using variables and auto-layout, with full documentation embedded in each component. I worked closely with two engineers to ensure the Figma components mapped 1:1 to Storybook.</p>
          <p className="case-body">We prioritised by impact: the 20% of components that covered 80% of UI surface area shipped first. Product teams migrated incrementally.</p>
          <div className="case-image"><span className="placeholder-label">Component library — Figma overview</span></div>
          <div className="case-image-grid" style={{ marginTop: '1px' }}>
            <div className="case-image-grid-item"><span className="placeholder-label">Button component — all states</span></div>
            <div className="case-image-grid-item"><span className="placeholder-label">Form components</span></div>
          </div>
        </div>
      </div>

      <div className="case-section">
        <div className="case-number">04</div>
        <div>
          <h2 className="case-heading">Outcome</h2>
          <p className="case-body">Six months after launch, the system covered 85% of UI surface area across all three products. Designer onboarding time dropped from two weeks to three days.</p>
          <div className="outcome-grid">
            <div className="outcome-item"><div className="outcome-number">85%</div><div className="outcome-label">UI surface area covered at launch</div></div>
            <div className="outcome-item"><div className="outcome-number">−50%</div><div className="outcome-label">Design-to-dev handoff time</div></div>
            <div className="outcome-item"><div className="outcome-number">3 days</div><div className="outcome-label">Designer onboarding (was 2 weeks)</div></div>
          </div>
        </div>
      </div>

      <div className="next-project">
        <div>
          <div className="next-project-label">Next project</div>
          <Link href="/projects/project-mobile-app">
            <div className="next-project-title">Mobile App <ArrowUpRight size={18} style={{ display: 'inline', verticalAlign: 'middle' }} /></div>
          </Link>
        </div>
        <Link href="/#work" className="btn-secondary">All projects</Link>
      </div>
    </>
  )
}
