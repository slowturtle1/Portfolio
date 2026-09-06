import type { Metadata } from 'next'
import { TodoBlock, ImgSlot } from '../../../components/Todo'
import CaseFooter from '../../../components/CaseFooter'

export const metadata: Metadata = {
  title: 'Notice — Planning applications before the window closes | Aleksandra Vugdragovic',
  description:
    'A civic tool for planning applications, built in twenty-four hours at the Wise Hackathon. Placed in the top six of nineteen teams. 24-hour hackathon.',
}

export default function Notice() {
  return (
    <article>
      {/* ── 01 · ONE-LINER ─────────────────────────────────────── */}
      <div className="project-hero cs-hero">
        <span className="label">civic tech · hackathon · planning</span>
        <h1 className="project-hero-title">Notice</h1>
        <p className="project-hero-desc cs-tagline">
          A civic tool for planning applications, built in twenty-four hours at the Wise
          Hackathon. Placed in the top six of nineteen teams.
        </p>
        <div className="cs-status-label">24-hour hackathon</div>

        <div className="project-meta cs-meta">
          <div className="meta-item">
            <span className="meta-label">Platform</span>
            <span className="meta-value">Web</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Timeframe</span>
            <span className="meta-value">24 hours</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Context</span>
            <span className="meta-value">Wise Hackathon, June 2026</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Outcome</span>
            <span className="meta-value cs-accent">Top 6 of 19 teams</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Status</span>
            <span className="meta-value">24-hour hackathon</span>
          </div>
        </div>
      </div>

      {/* ── 02 · THE PROBLEM ───────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">02</div>
        <div>
          <h2 className="cs-narrative-heading">the problem</h2>
          <p className="case-body">
            Planning applications are public, and almost none of them are legible. The
            information is technically available and practically inaccessible: portals built for
            planning officers, documents written for planning officers, and a consultation window
            that closes before most affected people know it opened.
          </p>
          <p className="case-body">
            I come at this from the other side. I have produced the drawings that go into these
            applications, so I know exactly how much context sits outside the document a resident
            is handed.
          </p>
        </div>
      </div>

      {/* ── 03 · WHAT I FOUND ──────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">03</div>
        <div>
          <h2 className="cs-narrative-heading">what i found</h2>
          <TodoBlock label="To write">
            [What specific insight changed direction during the build? The brief mentions
            arriving at a problem Wise had already committed engineering to — what did that
            reveal about the problem space?]
          </TodoBlock>
        </div>
      </div>

      {/* ── 04 · THE DECISION ──────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">04</div>
        <div>
          <h2 className="cs-narrative-heading">my role and the decisions</h2>
          <TodoBlock label="To write">
            [This section decides whether Notice stays in the portfolio. It is currently mostly
            screens, and screens will not carry it. Write the two or three real decisions: what
            was shown first, what was deliberately left out, what was simplified and what that
            simplification cost. If those cannot be written honestly, remove Notice and keep
            three strong pieces.]
          </TodoBlock>

          <ImgSlot>
            [Shot 10 — the main view annotated with decisions. One image only.]
          </ImgSlot>
        </div>
      </div>

      {/* ── 05 · THE FLOW ──────────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">05</div>
        <div>
          <h2 className="cs-narrative-heading">the flow</h2>
          <TodoBlock label="To write">
            [The user flow end to end: postcode entry, the radar/map view, an application card
            with days remaining, the drafted response. Name the branches and failure points.]
          </TodoBlock>
        </div>
      </div>

      {/* ── 06 · STATES ────────────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">06</div>
        <div>
          <h2 className="cs-narrative-heading">states</h2>
          <TodoBlock label="To write">
            [Empty, loading, partial, error, success — what does each state look like?]
          </TodoBlock>
        </div>
      </div>

      {/* ── 07 · ONE EDGE CASE ─────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">07</div>
        <div>
          <h2 className="cs-narrative-heading">one edge case</h2>
          <TodoBlock label="To write">
            [One edge case followed all the way down, including the failure.]
          </TodoBlock>
        </div>
      </div>

      {/* ── 08 · WHAT I CUT ────────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">08</div>
        <div>
          <h2 className="cs-narrative-heading">what i cut</h2>
          <TodoBlock label="To write">
            [Features considered and dropped during the 24-hour build, and what each cost.]
          </TodoBlock>
        </div>
      </div>

      {/* ── 09 · EVIDENCE ──────────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">09</div>
        <div>
          <h2 className="cs-narrative-heading">honest limits</h2>
          <p className="case-body">
            Built in a day, on the web, never tested with residents. Included because planning is
            the domain I know best from the inside, and because the framing question, who is this
            document actually for, is the one I ask on every project.
          </p>
        </div>
      </div>

      {/* ── 10 · WHAT I WOULD DO DIFFERENTLY ───────────────────── */}
      <div className="case-section">
        <div className="case-number">10</div>
        <div>
          <h2 className="cs-narrative-heading">what i would do differently</h2>
          <TodoBlock label="To write">
            [Suggested angles:]
            <ol>
              <li>
                [Data coverage. Over 400 LPAs, wildly inconsistent. How would you handle the gap
                between what the demo showed and what the product could actually cover on day
                one?]
              </li>
              <li>
                [Existing competitors. Planning Alerts, Commonplace, Built-ID. What do they get
                right, and what is genuinely different here?]
              </li>
              <li>
                [The pivot. Would you have found the collision earlier with 30 minutes of
                research at the start?]
              </li>
            </ol>
          </TodoBlock>
        </div>
      </div>

      <CaseFooter nextTitle="Cow Compass" nextHref="/work/cow-compass" />
    </article>
  )
}
