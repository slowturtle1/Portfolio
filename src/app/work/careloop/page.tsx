import type { Metadata } from 'next'
import { TodoBlock, ImgSlot } from '../../../components/Todo'
import CaseFooter from '../../../components/CaseFooter'

const b = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const img = (p: string) => `${b}${p}`

export const metadata: Metadata = {
  title: 'CareLoop — Voice-first symptom journaling for the NHS | Aleksandra Vugdragovic',
  description:
    'Voice-first symptom journaling, designed and built in twenty-four hours. Won the Accurx Challenge at the HuddleHive NHS Hackathon. 24-hour hackathon.',
}

function Phone({ src, alt }: { src: string; alt: string }) {
  return <img src={img(src)} alt={alt} className="cs-phone-img" loading="lazy" />
}

export default function CareLoop() {
  return (
    <article>
      {/* ── 01 · ONE-LINER ─────────────────────────────────────── */}
      <div className="project-hero cs-hero">
        <span className="label">healthcare · hackathon · voice ui</span>
        <h1 className="project-hero-title">CareLoop</h1>
        <p className="project-hero-desc cs-tagline">
          Voice-first symptom journaling, designed and built in twenty-four hours. Won the Accurx
          Challenge at the HuddleHive NHS Hackathon.
        </p>
        <div className="cs-status-label">24-hour hackathon</div>

        <div className="project-meta cs-meta">
          <div className="meta-item">
            <span className="meta-label">Role</span>
            <span className="meta-value">Product Designer</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Team</span>
            <span className="meta-value">Healthrix, 5 people</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Timeframe</span>
            <span className="meta-value">24 hours</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Context</span>
            <span className="meta-value">HuddleHive NHS Hackathon, March 2026</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Outcome</span>
            <span className="meta-value cs-accent">Winner, Accurx Challenge</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Status</span>
            <span className="meta-value">24-hour hackathon</span>
          </div>
        </div>
      </div>

      <TodoBlock label="My role — to write">
        [This is the most important paragraph in this case study. Reviewers assume the worst
        about team projects. Name what you personally designed, what you decided, and what
        someone else did. Two or three sentences, no hedging.]
      </TodoBlock>

      {/* ── 02 · THE PROBLEM ───────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">02</div>
        <div>
          <h2 className="cs-narrative-heading">the problem</h2>
          <p className="case-body">
            Symptom diaries are asked for constantly and kept badly. The reason is not that
            people do not care. It is that recording a symptom means stopping, opening something,
            and typing while you feel unwell, which is exactly when you are least willing to do
            any of that.
          </p>
          <TodoBlock label="To write">
            [Replace with what was actually heard when talking to people, and quote one person if
            possible.]
          </TodoBlock>
        </div>
      </div>

      {/* ── 03 · WHAT I FOUND ──────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">03</div>
        <div>
          <h2 className="cs-narrative-heading">what i found</h2>
          <p className="case-body">
            People can describe how they feel out loud far better than they can classify it in a
            form. Speaking a sentence is something you can do while lying down, one-handed,
            feeling terrible.
          </p>
          <p className="case-body">
            So we inverted the input. The patient talks. The system listens, extracts what
            matters, and maps it onto the eConsult fields the clinician already expects. The
            patient reviews and confirms before anything is sent.
          </p>

          <div className="cs-dual-view" style={{ marginTop: 'var(--space-xl)' }}>
            <figure className="cs-dual-phone">
              <Phone
                src="/careloop-screens/03-voice-recording-with-transcript.png"
                alt="Live transcript appearing as the patient speaks"
              />
              <figcaption className="cs-phone-caption">The patient talks</figcaption>
            </figure>
            <figure className="cs-dual-phone">
              <Phone
                src="/careloop-screens/04-ai-processing.png"
                alt="Speech being mapped to NHS eConsult survey fields"
              />
              <figcaption className="cs-phone-caption">The system maps it</figcaption>
            </figure>
            <figure className="cs-dual-phone">
              <Phone
                src="/careloop-screens/05-sent-to-gp-confirmation.png"
                alt="Confirmation screen after submission to the GP practice"
              />
              <figcaption className="cs-phone-caption">The patient confirms</figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* ── 04 · THE DECISION ──────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">04</div>
        <div>
          <h2 className="cs-narrative-heading">
            the decision: voice, because typing is the barrier
          </h2>
          <p className="case-body">
            If the reason people abandon symptom diaries is the effort of entry, then reducing
            entry effort is the whole product. Speaking a sentence is something you can do while
            lying down, one-handed, feeling terrible. That framing decided the rest of the
            design.
          </p>
          <p className="case-body">
            Mid-build, we discovered Accurx already had Scribe, an AI transcription layer in
            clinical use. We had two options: ignore it and pitch a competing product, or rebuild
            the framing so CareLoop sits on top of what already exists. We chose the second.
            CareLoop became an extension of Scribe rather than a parallel to it. Same
            transcription capability, pointed at the patient instead of the consultation, and
            extended across time instead of a single appointment.
          </p>
        </div>
      </div>

      {/* ── 05 · THE FLOW ──────────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">05</div>
        <div>
          <h2 className="cs-narrative-heading">the flow</h2>

          <ImgSlot>
            [Shot 08 — the capture flow with the wrong-transcription branch.]
          </ImgSlot>

          <ImgSlot>
            [Shot 09 — three screens at real size: idle, recording, confirmation.]
          </ImgSlot>
        </div>
      </div>

      {/* ── 06 · STATES ────────────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">06</div>
        <div>
          <h2 className="cs-narrative-heading">states</h2>
          <TodoBlock label="To write">
            [Empty, loading, partial, error, offline, success — show the states that matter for a
            voice-first journaling app. What does the screen look like when the microphone
            permission is denied, when the transcript is wrong, when submission fails?]
          </TodoBlock>
        </div>
      </div>

      {/* ── 07 · ONE EDGE CASE ─────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">07</div>
        <div>
          <h2 className="cs-narrative-heading">one edge case</h2>
          <TodoBlock label="To write">
            [One edge case followed all the way down, including the failure. The wrong
            transcription and what happens when the patient corrects it is the obvious candidate.]
          </TodoBlock>
        </div>
      </div>

      {/* ── 08 · WHAT I CUT ────────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">08</div>
        <div>
          <h2 className="cs-narrative-heading">what we cut</h2>
          <p className="case-body">
            Twenty-four hours is a scoping exercise wearing a costume. Most of the work is
            deciding what not to build.
          </p>
          <TodoBlock label="To write">
            [Two things dropped and what each cost.]
          </TodoBlock>
        </div>
      </div>

      {/* ── 09 · EVIDENCE ──────────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">09</div>
        <div>
          <h2 className="cs-narrative-heading">honest limits</h2>
          <p className="case-body">
            This was built in a day, judged in a room, and never put in front of a patient. It
            shows how I scope and decide under pressure. It does not show that the product works.
          </p>
        </div>
      </div>

      {/* ── 10 · WHAT I WOULD DO DIFFERENTLY ───────────────────── */}
      <div className="case-section">
        <div className="case-number">10</div>
        <div>
          <h2 className="cs-narrative-heading">what i would do differently</h2>
          <TodoBlock label="To write">
            [Three prompts to answer honestly:]
            <ol>
              <li>
                [The competitive research gap. You found Scribe mid-build, not before it. What
                would you check first next time, and how long would you have spent on it?]
              </li>
              <li>
                [The voice assumption. The product asks older patients, often the ones on long
                waiting lists, to speak to an app. You never tested that. What would validating
                it actually look like?]
              </li>
              <li>
                [Clinician workload. A continuous timeline is more information arriving, not
                less. If clinicians are already overloaded, does CareLoop help them or add to the
                pile?]
              </li>
            </ol>
          </TodoBlock>
        </div>
      </div>

      <CaseFooter nextTitle="Notice" nextHref="/work/notice" />
    </article>
  )
}
