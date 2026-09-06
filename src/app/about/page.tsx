import type { Metadata } from 'next'
import { Todo } from '../../components/Todo'

export const metadata: Metadata = {
  title: 'About — Aleksandra Vugdragovic',
  description:
    'Project manager at a London building consultancy. Five years in measured survey, laser scanning and BIM coordination. Design arrived sideways.',
}

export default function About() {
  return (
    <div className="about-page-hero">
      <div>
        <h1 className="about-page-title">About</h1>

        <p className="about-page-body">
          I am a project manager at a London building consultancy, and I came into it from the
          technical side rather than from site engineering. Measured building surveys, laser
          scanning and point cloud, BIM coordination, and information management to ISO 19650.
          Five years of it, four at DPR, where I moved from doing that work to running its
          delivery: managing three external contractor teams, owning the client relationship
          through review and sign-off, and writing the fee proposals.
        </p>
        <p className="about-page-body">
          Design arrived sideways. I kept hitting processes that were quietly broken and kept
          building small things to fix them, starting with AutoLISP scripts that standardised CAD
          layer setup across forty-seven layers because people got it wrong on every project. The
          QA tool is the same instinct, several years later and considerably more ambitious.
        </p>
        <p className="about-page-body">
          What I bring to a product team is not years of design titles. It is that I have been
          the user of the software this industry builds, in the conditions it is used in, and I
          know precisely why most of it gets abandoned in month two.
        </p>

        <div className="contact-links" style={{ marginTop: 'var(--space-2xl)' }}>
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
        </div>
      </div>

      <div>
        <div className="about-page-photo">
          <Todo>[PHOTO]</Todo>
        </div>

        <div className="about-side-block">
          <div className="about-side-block-title">Turning vague feedback into work</div>
          <p>
            Most of my week is taking something a client said imprecisely and turning it into an
            instruction a technical team can act on, then going back when the first attempt
            misses. It is the closest thing to product work in my current job.
          </p>
        </div>

        <div className="about-side-block">
          <div className="about-side-block-title">Information that has to survive handover</div>
          <p>
            ISO 19650 is an argument about structure: naming, status, and who is allowed to rely
            on what. Making that work across organisations that disagree is an information
            architecture problem before it is a compliance one.
          </p>
        </div>
      </div>
    </div>
  )
}
