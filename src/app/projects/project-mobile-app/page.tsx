import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = { title: 'Mobile App — Aleksandra Vugdragovic' }

export default function ProjectMobileApp() {
  return (
    <>
      <div className="project-hero">
        <span className="label">/03 — Mobile &amp; UX Design</span>
        <h1 className="project-hero-title">Fintech<br />Mobile App</h1>
        <p className="project-hero-desc">
          End-to-end design of a personal finance mobile app — from discovery workshops to
          a shipped product now used by 50,000+ users across iOS and Android.
        </p>
        <div className="project-meta">
          <div className="meta-item"><span className="meta-label">Role</span><span className="meta-value">Lead UX Designer</span></div>
          <div className="meta-item"><span className="meta-label">Timeline</span><span className="meta-value">Q4 2023 — 4 months</span></div>
          <div className="meta-item"><span className="meta-label">Tools</span><span className="meta-value">Figma, Principle, UserTesting</span></div>
          <div className="meta-item"><span className="meta-label">Deliverables</span><span className="meta-value">iOS &amp; Android designs, Handoff</span></div>
        </div>
        <div className="project-cover"><span className="placeholder-label">Cover image</span></div>
      </div>

      <div className="case-section">
        <div className="case-number">01</div>
        <div>
          <h2 className="case-heading">Overview</h2>
          <p className="case-body">A fintech startup wanted to bring a complex set of personal finance features — budgeting, savings goals, bill tracking, and investment snapshots — into a single mobile experience that felt simple rather than overwhelming.</p>
          <p className="case-body">I led design from kickoff through to engineering handoff, working closely with a product manager, two engineers, and directly with users throughout the process.</p>
          <div className="highlight-block"><p>&ldquo;The biggest design challenge wasn&apos;t adding features — it was deciding what to hide, defer, or remove entirely.&rdquo;</p></div>
        </div>
      </div>

      <div className="case-section">
        <div className="case-number">02</div>
        <div>
          <h2 className="case-heading">Discovery</h2>
          <p className="case-body">I facilitated two discovery workshops with the founding team to align on user personas and core jobs-to-be-done. We identified three primary user archetypes: the anxious over-checker, the passive set-and-forget user, and the active optimiser.</p>
          <p className="case-body">Competitive analysis of six existing apps revealed a consistent pattern: too much information on the home screen and poor handling of negative states (overdraft, missed payments).</p>
          <div className="case-image-grid">
            <div className="case-image-grid-item"><span className="placeholder-label">Persona map</span></div>
            <div className="case-image-grid-item"><span className="placeholder-label">Jobs-to-be-done framework</span></div>
          </div>
        </div>
      </div>

      <div className="case-section">
        <div className="case-number">03</div>
        <div>
          <h2 className="case-heading">Design</h2>
          <p className="case-body">The home screen was deliberately minimal — a single &ldquo;financial health&rdquo; number with one primary action. Detail was available on tap, not by default. Navigation was designed around frequency of use, not feature parity.</p>
          <p className="case-body">I built high-fidelity prototypes in Figma with realistic micro-interactions in Principle, testing with 12 participants across two rounds of UserTesting sessions.</p>
          <div className="case-image"><span className="placeholder-label">App screens — home, budget, savings</span></div>
          <div className="case-image-grid" style={{ marginTop: '1px' }}>
            <div className="case-image-grid-item"><span className="placeholder-label">Onboarding flow</span></div>
            <div className="case-image-grid-item"><span className="placeholder-label">Empty &amp; error states</span></div>
          </div>
        </div>
      </div>

      <div className="case-section">
        <div className="case-number">04</div>
        <div>
          <h2 className="case-heading">Outcome</h2>
          <p className="case-body">The app launched on schedule and received a 4.7-star rating in its first month. The minimal home screen design proved to reduce, rather than increase, check-in anxiety compared to competitor benchmarks.</p>
          <div className="outcome-grid">
            <div className="outcome-item"><div className="outcome-number">50k+</div><div className="outcome-label">Active users within 3 months of launch</div></div>
            <div className="outcome-item"><div className="outcome-number">4.7★</div><div className="outcome-label">App store rating (iOS &amp; Android)</div></div>
            <div className="outcome-item"><div className="outcome-number">D30</div><div className="outcome-label">Retention above industry average</div></div>
          </div>
        </div>
      </div>

      <div className="next-project">
        <div>
          <div className="next-project-label">Back to start</div>
          <Link href="/projects/project-alpha">
            <div className="next-project-title">Onboarding Redesign <ArrowUpRight size={18} style={{ display: 'inline', verticalAlign: 'middle' }} /></div>
          </Link>
        </div>
        <Link href="/#work" className="btn-secondary">All projects</Link>
      </div>
    </>
  )
}
