import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function CaseFooter({
  closingLine,
  nextTitle,
  nextHref,
}: {
  closingLine?: string
  nextTitle: string
  nextHref: string
}) {
  return (
    <div className="next-project" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
      {closingLine && (
        <p className="cs-footer-line" style={{ margin: '0 0 var(--space-2xl)' }}>
          {closingLine}
        </p>
      )}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-lg)',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <div className="next-project-label">Next project</div>
          <Link href={nextHref}>
            <div className="next-project-title">
              {nextTitle}{' '}
              <ArrowUpRight size={18} style={{ display: 'inline', verticalAlign: 'middle' }} />
            </div>
          </Link>
        </div>
        <Link href="/work" className="btn-secondary">
          All work
        </Link>
      </div>
    </div>
  )
}
