import type { Metadata } from 'next'
import { TodoBlock, ImgSlot } from '../../../components/Todo'
import CaseFooter from '../../../components/CaseFooter'

export const metadata: Metadata = {
  title: 'Cow Compass — Virtual fencing for hill farmers | Aleksandra Vugdragovic',
  description:
    'Virtual fencing for farmers who need to know where their cattle are, on a phone, in a field, in the sun, with the signal coming and going. Concept project.',
}

export default function CowCompass() {
  return (
    <article>
      {/* ── 01 · ONE-LINER ─────────────────────────────────────── */}
      <div className="project-hero cs-hero">
        <span className="label">agriculture · offline-first · mobile</span>
        <h1 className="project-hero-title">Cow Compass</h1>
        <p className="project-hero-desc cs-tagline">
          Virtual fencing for farmers who need to know where their cattle are, on a phone, in a
          field, in the sun, with the signal coming and going.
        </p>
        <div className="cs-status-label">concept project</div>

        <div className="project-meta cs-meta">
          <div className="meta-item">
            <span className="meta-label">Role</span>
            <span className="meta-value">Sole designer</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Platform</span>
            <span className="meta-value">Mobile</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Deliverables</span>
            <span className="meta-value">Wireframes</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Status</span>
            <span className="meta-value">Concept project</span>
          </div>
        </div>
      </div>

      <ImgSlot>
        [Shot 01 — the herd view in daylight treatment. One phone screen, flat, real
        proportions, plain background.]
      </ImgSlot>

      {/* ── 02 · THE PROBLEM ───────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">02</div>
        <div>
          <h2 className="cs-narrative-heading">the problem</h2>
          <p className="case-body">
            Virtual fencing lets a farmer move a boundary from a phone instead of moving posts
            and wire. The technology works. The interface is where it usually falls down, because
            it is being used in the worst conditions software ever meets: outdoors, one hand,
            direct sunlight on the glass, and a connection that comes and goes across a valley.
          </p>
          <p className="case-body">
            Most apps in this space are designed as if the farmer is sitting at a desk deciding
            things calmly. They are not. They are deciding while walking, in weather, often with
            an animal in front of them.
          </p>
        </div>
      </div>

      {/* ── 03 · WHAT I FOUND ──────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">03</div>
        <div>
          <h2 className="cs-narrative-heading">constraints i set</h2>
          <p className="case-body">
            <strong>Readable in direct sun.</strong> High contrast, large targets, no thin grey
            type, no colour carrying meaning on its own.
          </p>
          <p className="case-body">
            <strong>Usable one-handed.</strong> Everything important reachable with a thumb.
          </p>
          <p className="case-body">
            <strong>Honest about connection.</strong> The app should never look confident about
            data it has not been able to confirm.
          </p>
          <blockquote className="cs-blockquote">
            A farmer standing in a field is not going to troubleshoot. If the app is ambiguous
            about whether the fence moved, they will walk out and check, and then the app has
            cost them time instead of saving it.
          </blockquote>
        </div>
      </div>

      {/* ── 04 · THE DECISION ──────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">04</div>
        <div>
          <h2 className="cs-narrative-heading">the decision</h2>
          <TodoBlock label="To write">
            [This section needs a paragraph on the central design decision — what was the main
            constraint designed around, and what was rejected because of it? The constraints
            above set the rules; this section should name the single hardest tradeoff.]
          </TodoBlock>
        </div>
      </div>

      {/* ── 05 · THE FLOW ──────────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">05</div>
        <div>
          <h2 className="cs-narrative-heading">the flow</h2>
          <TodoBlock label="To write">
            [Describe the core flow end to end as a sequence with decisions in it. Moving a
            boundary is the one to show: open the app, find the herd, draw or move the fence,
            confirm, wait for the collars to acknowledge. Name every point where it can branch or
            fail.]
          </TodoBlock>

          <ImgSlot>
            [Shot 02 — moving a boundary drawn as a flow. Landscape, full width, branches drawn
            in.]
          </ImgSlot>
        </div>
      </div>

      {/* ── 06 · STATES ────────────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">06</div>
        <div>
          <h2 className="cs-narrative-heading">states</h2>
          <p className="case-body">
            The interesting design work here is not the happy path. It is what the screen says
            when it does not know something.
          </p>

          <table className="cs-states-table">
            <tbody>
              <tr>
                <th>Online</th>
                <td>
                  Positions confirmed, timestamp visible so the farmer can see how fresh the data
                  is
                </td>
              </tr>
              <tr>
                <th>Offline</th>
                <td>
                  Last known positions, clearly marked as last known, with the time they were
                  last confirmed
                </td>
              </tr>
              <tr>
                <th>Sending</th>
                <td>
                  A fence change made without signal is queued, not lost, and the app says so
                  rather than pretending it succeeded
                </td>
              </tr>
              <tr>
                <th>Unconfirmed</th>
                <td>
                  The change reached the server but not every collar has acknowledged it. This is
                  the state most apps hide, and the one that matters most
                </td>
              </tr>
              <tr>
                <th>Stale</th>
                <td>
                  Data old enough that acting on it is a risk. The app says how old rather than
                  showing it as current
                </td>
              </tr>
            </tbody>
          </table>

          <ImgSlot>
            [Shot 03 — one screen, five states, side by side. Same crop and zoom each time,
            labelled underneath. Most important image in the portfolio.]
          </ImgSlot>
        </div>
      </div>

      {/* ── 07 · ONE EDGE CASE ─────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">07</div>
        <div>
          <h2 className="cs-narrative-heading">
            one edge case: the fence moved and the collar never heard about it
          </h2>
          <p className="case-body">
            A farmer redraws a boundary while out of signal. The change queues. Two collars pick
            it up when they wander back into coverage, one does not. The herd is now split across
            a boundary that only partly exists.
          </p>
          <TodoBlock label="To write">
            [What does the farmer see, and when? How does the app surface a partial state without
            being alarming every time signal wobbles? What did you decide, and what did you
            reject? Two paragraphs.]
          </TodoBlock>

          <ImgSlot>
            [Shot 04 — the partial acknowledgement in three frames, annotated.]
          </ImgSlot>
        </div>
      </div>

      {/* ── 08 · WHAT I CUT ────────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">08</div>
        <div>
          <h2 className="cs-narrative-heading">what i cut</h2>
          <TodoBlock label="To write">
            [One feature considered and dropped, and why.]
          </TodoBlock>
        </div>
      </div>

      {/* ── 09 · EVIDENCE ──────────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">09</div>
        <div>
          <h2 className="cs-narrative-heading">where it stands</h2>
          <p className="case-body">
            <strong>This is a concept. No farmer has used it.</strong> That is the honest limit
            of what it proves: it shows how I frame a problem and design around a constraint, not
            that the solution works.
          </p>
          <TodoBlock label="To write">
            [If any conversations with people who keep cattle happen before publishing, replace
            this with what they said and what changed. Otherwise keep it and add two sentences on
            how it would be validated.]
          </TodoBlock>
        </div>
      </div>

      {/* ── 10 · WHAT I WOULD DO DIFFERENTLY ───────────────────── */}
      <div className="case-section">
        <div className="case-number">10</div>
        <div>
          <h2 className="cs-narrative-heading">what i would do differently</h2>
          <TodoBlock label="To write">
            [Reflection on this project. What would change on a second attempt?]
          </TodoBlock>
        </div>
      </div>

      <CaseFooter nextTitle="QA Tool" nextHref="/work/dpr-qa-tool" />
    </article>
  )
}
