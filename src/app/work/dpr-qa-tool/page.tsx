import type { Metadata } from 'next'
import { TodoBlock, ImgSlot } from '../../../components/Todo'
import CaseFooter from '../../../components/CaseFooter'

export const metadata: Metadata = {
  title: 'QA Tool — Getting quality assurance out of Outlook | Aleksandra Vugdragovic',
  description:
    'A drawing QA tool designed and prototyped inside a building consultancy, and the reasons it did not survive there. Prototype, not adopted.',
}

export default function DprQaTool() {
  return (
    <article>
      {/* ── 01 · ONE-LINER ─────────────────────────────────────── */}
      <div className="project-hero cs-hero">
        <span className="label">internal tooling · surveying</span>
        <h1 className="project-hero-title">Getting quality assurance out of Outlook</h1>
        <p className="project-hero-desc cs-tagline">
          A drawing QA tool I designed and prototyped inside a building consultancy, and the
          reasons it did not survive there.
        </p>
        <div className="cs-status-label">prototype, not adopted</div>

        <div className="project-meta cs-meta">
          <div className="meta-item">
            <span className="meta-label">Role</span>
            <span className="meta-value">Sole designer, built it</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Platform</span>
            <span className="meta-value">Desktop</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Built with</span>
            <span className="meta-value">Claude Code, Supabase</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Status</span>
            <span className="meta-value">Prototype, not adopted</span>
          </div>
        </div>
      </div>

      {/* ── 02 · THE PROBLEM ───────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">02</div>
        <div>
          <h2 className="cs-narrative-heading">the problem</h2>
          <p className="case-body">
            Before a drawing set goes to a client it gets checked. At the consultancy where I
            work that check was not really a process. It ran through Outlook. Someone would mark
            up a PDF, attach it to an email, write a few lines of context, and send it. The next
            person would reply. Then someone would forward the thread.
          </p>
          <p className="case-body">
            Three things followed from that. There was no standard for what was actually being
            checked, so it varied by whoever did it. The visual feedback arrived without the
            context that explained it. And the only record of who had checked what lived in
            individual inboxes, which meant that six months later, when a client asked, nobody
            could show anything.
          </p>
          <p className="case-body">
            I found this the way you find most real problems, which is by being annoyed by it
            repeatedly on my own projects.
          </p>

          <ImgSlot>
            [Shot 05 — before and after side by side. Outlook thread left, single screen right.
            Redact all client names.]
          </ImgSlot>
        </div>
      </div>

      {/* ── 03 · WHAT I FOUND ──────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">03</div>
        <div>
          <h2 className="cs-narrative-heading">what i found</h2>
          <p className="case-body">
            I mapped how the check was actually being done rather than how the QA procedure said
            it should be done. Those were different documents. The written procedure described a
            process nobody followed, because following it took longer than the shortcut.
          </p>
          <blockquote className="cs-blockquote">
            The gap between the documented process and the real one is where the design brief
            lives. If you fix the documented process you have fixed nothing.
          </blockquote>
        </div>
      </div>

      {/* ── 04 · THE DECISION ──────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">04</div>
        <div>
          <h2 className="cs-narrative-heading">
            the decision: adoption was the constraint, not functionality
          </h2>
          <p className="case-body">
            The obvious solution is a checking tool that sits alongside the CAD workflow. Open
            the drawing, open the tool, work through the list. I did not build that, because I
            was fairly sure nobody would open it twice.
          </p>
          <p className="case-body">
            My team already had a workflow they trusted and were fast in. Anything that asked
            them to leave it, even briefly, would be used once out of politeness and then quietly
            dropped. So the checks went inside the workflow they already used, and the tool
            became one screen rather than a place you go.
          </p>
          <p className="case-body">
            That decision cost functionality. A separate tool could have done more. But a more
            capable tool nobody opens is worth less than a narrower one that sits in the way of
            the work.
          </p>
        </div>
      </div>

      {/* ── 05 · THE FLOW ──────────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">05</div>
        <div>
          <h2 className="cs-narrative-heading">what it does</h2>
          <p className="case-body">
            One screen. Work through the defined checks, review what was flagged, import visual
            feedback so the markup and its explanation stay together, and export a report that
            gets stored against the project rather than in an inbox.
          </p>
          <p className="case-body">
            I designed it and built it in Claude Code alongside my normal workload, and hosted it
            on Supabase.
          </p>

          <ImgSlot>
            [Shot 06 — the main screen annotated with decisions, not feature names.]
          </ImgSlot>
        </div>
      </div>

      {/* ── 06 · STATES ────────────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">06</div>
        <div>
          <h2 className="cs-narrative-heading">states</h2>
          <ImgSlot>
            [Shot 07 — four states in a strip: empty, mid-review, flagged, exported. Same crop
            each time, labelled underneath.]
          </ImgSlot>
        </div>
      </div>

      {/* ── 07 · ONE EDGE CASE ─────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">07</div>
        <div>
          <h2 className="cs-narrative-heading">one edge case</h2>
          <TodoBlock label="To write">
            [One edge case followed all the way down, including what failed or was handled
            badly.]
          </TodoBlock>
        </div>
      </div>

      {/* ── 08 · WHAT I CUT ────────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">08</div>
        <div>
          <h2 className="cs-narrative-heading">what i cut</h2>
          <TodoBlock label="To write">
            [Features considered and dropped, and why. The functionality that was sacrificed for
            adoption.]
          </TodoBlock>
        </div>
      </div>

      {/* ── 09 · EVIDENCE ──────────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">09</div>
        <div>
          <h2 className="cs-narrative-heading">what happened</h2>
          <p className="case-body">
            I used it on my own projects, where it saved me roughly two to three hours per
            project, mostly in not reconstructing what had been checked and by whom. A colleague
            picked it up and used it on his.
          </p>
          <p className="case-body">
            <strong>
              It was not adopted more widely, and I think the firm was right.
            </strong>{' '}
            A consultancy sells hours. It has no engineering team, no maintenance budget and no
            appetite for owning software that one person built. The question was never whether
            the tool was good. It was who fixes it when I am on leave and it breaks in the middle
            of a deadline.
          </p>
          <blockquote className="cs-blockquote">
            I learned more from that answer than I would have from a rollout. A tool that cannot
            be maintained by the organisation it lives in is not finished, however well it works.
          </blockquote>
        </div>
      </div>

      {/* ── 10 · WHAT I WOULD DO DIFFERENTLY ───────────────────── */}
      <div className="case-section">
        <div className="case-number">10</div>
        <div>
          <h2 className="cs-narrative-heading">what i would do differently</h2>
          <p className="case-body">
            I designed the tool before I understood who would own it. If I ran it again I would
            have that conversation in week one, and I would probably have aimed lower on purpose:
            a defined checklist and a filing convention, requiring no software at all, would have
            survived. Less interesting to build, much more likely to still be in use.
          </p>
        </div>
      </div>

      <CaseFooter nextTitle="CareLoop" nextHref="/work/careloop" />
    </article>
  )
}
