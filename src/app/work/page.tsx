import type { Metadata } from 'next'
import WorkCards from '../../components/WorkCards'

export const metadata: Metadata = {
  title: 'Selected work — Aleksandra Vugdragovic',
  description:
    'Four projects: one concept, one prototype, two hackathon builds. Cow Compass, QA Tool, CareLoop, Notice.',
}

export default function Work() {
  return (
    <section
      className="work-section"
      style={{ paddingTop: 'calc(var(--nav-h) + var(--space-4xl))' }}
    >
      <h1 className="work-section-title" style={{ marginBottom: 'var(--space-lg)' }}>
        Selected work
      </h1>
      <p className="lp-lead" style={{ marginBottom: 'var(--space-2xl)' }}>
        Four projects. One concept, one prototype that was not adopted, two things built in
        twenty-four hours. All labelled honestly.
      </p>

      <WorkCards wide />
    </section>
  )
}
