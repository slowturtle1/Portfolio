import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const b = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const img = (p: string) => `${b}${p}`

export const metadata: Metadata = {
  title: 'CareLoop — Voice-first symptom journaling for NHS clinicians | Aleksandra Vugdragovic',
  description:
    'A voice-first symptom journaling concept for NHS general practice, designed and prototyped in 24 hours. Winner of the Accurx challenge at HuddleHive Hackathon, March 2026.',
}

function Todo({ children }: { children: React.ReactNode }) {
  return <span className="todo-placeholder">{children}</span>
}

function Phone({ src, alt }: { src: string; alt: string }) {
  return <img src={img(src)} alt={alt} className="cs-phone-img" loading="lazy" />
}

export default function CareLoop() {
  return (
    <article>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <div className="project-hero cs-hero">
        <span className="label">Healthcare · Hackathon · Voice UI</span>
        <h1 className="project-hero-title">CareLoop</h1>
        <p className="project-hero-desc cs-tagline">
          Helping NHS clinicians see between the appointments.
        </p>

        <div className="cs-phones">
          <figure className="cs-phone cs-phone--left">
            <Phone src="/careloop-screens/02-voice-recording.png" alt="CareLoop voice recording screen" />
          </figure>
          <figure className="cs-phone cs-phone--center">
            <Phone src="/careloop-screens/04-ai-processing.png" alt="CareLoop AI processing screen" />
          </figure>
          <figure className="cs-phone cs-phone--right">
            <Phone src="/careloop-screens/05-sent-to-gp-confirmation.png" alt="CareLoop confirmation screen" />
          </figure>
        </div>
      </div>

      {/* ── INTRO + METADATA ───────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">00</div>
        <div>
          <p className="case-body">
            As Product Designer on Team Healthrix — a five-person team — I designed CareLoop and
            built the working prototype in Claude Code during the 24-hour Accurx challenge at
            HuddleHive Hackathon. CareLoop is a voice-first symptom journaling concept that gives
            NHS clinicians a continuous view of how their patients&apos; conditions evolve between
            appointments, rather than the disconnected single snapshots they see today. Our team was
            selected as the winning entry.
          </p>

          <div className="project-meta cs-meta">
            <div className="meta-item">
              <span className="meta-label">Timeline</span>
              <span className="meta-value">March 2026 — built in 24 hours during HuddleHive Hackathon</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">Product Designer — design and working prototype (Claude Code)</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Context</span>
              <span className="meta-value">Accurx challenge, HuddleHive Hackathon</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Team</span>
              <span className="meta-value">Team Healthrix — Aleksandra, Negra, Dunja, Kateryna, Andreea</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Skills</span>
              <span className="meta-value">Healthcare UX, Voice Interface Design, Prototyping with Claude Code, Cross-functional Collaboration</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Outcome</span>
              <span className="meta-value cs-accent">🏆 Winner — Accurx challenge</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 1: PROBLEM & CONTEXT ───────────────────────── */}
      <div className="case-section">
        <div className="case-number">
          <span className="case-section-label">01</span>
        </div>
        <div>
          <h2 className="case-section-label cs-section-heading">Problem &amp; Context</h2>
          <p className="case-body">
            NHS clinicians today see their patients in fragments. A 10-minute consultation, a
            referral letter, a single eConsult form — disconnected snapshots taken at different
            points in a condition&apos;s evolution. What happens between those touchpoints stays
            largely invisible until the patient writes back, calls, or arrives at A&amp;E.
          </p>
          <p className="case-body">
            For patients, the burden falls the other way. Every new touchpoint means re-explaining
            symptoms from scratch, recalling changes that may have happened weeks ago, and
            articulating something complex through a small text box on a phone — often while feeling
            unwell. Communication itself becomes a barrier to care.
          </p>
          <p className="case-body">
            For healthcare teams, the consequences compound: high message and call volumes,
            fragmented updates spread across systems, and no clear way to prioritise which patients
            are deteriorating versus stable.
          </p>
          <p className="case-body">
            Accurx is the messaging layer that already powers a large share of UK general practice.
            The challenge they posed at HuddleHive: how do you give clinicians a fuller picture of
            patient condition over time, without adding work to either side of the consultation?
          </p>
        </div>
      </div>

      {/* ── SECTION 2: THE INSIGHT ─────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">
          <span className="case-section-label">02</span>
        </div>
        <div>
          <h2 className="case-section-label cs-section-heading">The Insight</h2>
          <p className="case-body">
            The breakdown isn&apos;t in any single conversation — it&apos;s in the gap between
            them. Clinicians don&apos;t lack data; they lack continuity. Patients don&apos;t lack
            things to say; they lack a low-friction way to say them as their condition evolves.
          </p>
          <div className="highlight-block">
            <p>
              CareLoop&apos;s core move: turn the patient into the journaler, lower the cost of
              journaling to almost zero, and surface only the changes that matter to the clinician.
            </p>
          </div>
        </div>
      </div>

      {/* ── SECTION 3: HOW IT WORKS ────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">
          <span className="case-section-label">03</span>
        </div>
        <div>
          <h2 className="case-section-label cs-section-heading">How It Works</h2>
          <p className="case-body">
            CareLoop is built around six steps. The first three sit with the patient; the last three
            sit with the clinical team.
          </p>

          <div className="how-steps">
            <div className="how-step">
              <div className="how-step-text">
                <div className="how-step-num">1</div>
                <p className="case-body">
                  <strong>Patient describes symptoms via voice or text.</strong> Speaking is
                  dramatically lower-friction than typing — especially for someone who is unwell,
                  anxious, or simply tired. Patients open the app, tap once, and talk. Typing
                  remains available as a secondary option.
                </p>
              </div>
              <figure className="how-step-img">
                <Phone src="/careloop-screens/02-voice-recording.png" alt="Voice recording screen" />
              </figure>
            </div>

            <div className="how-step how-step--reverse">
              <figure className="how-step-img">
                <Phone src="/careloop-screens/04-ai-processing.png" alt="AI processing screen" />
              </figure>
              <div className="how-step-text">
                <div className="how-step-num">2</div>
                <p className="case-body">
                  <strong>AI extracts and structures the clinical detail.</strong> The system pulls
                  symptoms, duration, and severity from natural-language input and maps them to NHS
                  eConsult survey fields — the same fields a GP practice already uses. We anchored
                  this on Accurx Scribe, Accurx&apos;s existing clinical transcription product,
                  rather than introducing a new AI layer. The output sits inside a workflow GPs
                  already trust.
                </p>
              </div>
            </div>

            <div className="how-step">
              <div className="how-step-text">
                <div className="how-step-num">3</div>
                <p className="case-body">
                  <strong>The patient reviews and confirms the summary.</strong> Before anything
                  reaches the clinical team, the patient sees what the AI extracted in plain language
                  and confirms it&apos;s right. This is the trust gate — the patient stays in
                  control of their own record.
                </p>
              </div>
              <figure className="how-step-img">
                <Phone src="/careloop-screens/05-sent-to-gp-confirmation.png" alt="Confirmation screen" />
              </figure>
            </div>

            <div className="how-step how-step--reverse">
              <figure className="how-step-img">
                <Phone src="/careloop-screens/07-timeline-patient-view.png" alt="Patient symptom timeline" />
              </figure>
              <div className="how-step-text">
                <div className="how-step-num">4</div>
                <p className="case-body">
                  <strong>Updates accumulate in a continuous symptom timeline.</strong> Each entry
                  slots into a chronological journal scoped to the active referral or condition, so
                  context builds up over time instead of fragmenting across separate messages.
                </p>
              </div>
            </div>

            <div className="how-step">
              <div className="how-step-text">
                <div className="how-step-num">5</div>
                <p className="case-body">
                  <strong>Progression signals surface meaningful change.</strong> A
                  severity-over-time view makes it visible at a glance when a condition is
                  escalating. When the system detects a clinically significant shift — for example,
                  severity climbing several points over a few days — it raises an escalation flag
                  for clinical review.
                </p>
              </div>
              <figure className="how-step-img">
                <Phone src="/careloop-screens/09-severity-chart-admin.png" alt="Severity chart admin view" />
              </figure>
            </div>

            <div className="how-step how-step--reverse">
              <figure className="how-step-img">
                <Phone src="/careloop-screens/08-journal-admin-escalation.png" alt="Admin journal view with escalation" />
              </figure>
              <div className="how-step-text">
                <div className="how-step-num">6</div>
                <p className="case-body">
                  <strong>Clinicians review the full picture before the consultation.</strong>{' '}
                  Instead of opening a single message and asking &ldquo;what&apos;s
                  happening?&rdquo;, a GP opens the patient&apos;s CareLoop journal and sees the
                  trajectory: when symptoms started, how they&apos;ve changed, what flagged for
                  attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 4: DESIGN DECISIONS ────────────────────────── */}
      <div className="case-section">
        <div className="case-number">
          <span className="case-section-label">04</span>
        </div>
        <div>
          <h2 className="case-section-label cs-section-heading">Design Decisions</h2>

          <div className="case-decisions">
            <div className="case-decision">
              <div className="case-decision-title">Voice-first, not voice-optional.</div>
              <p className="case-decision-body">
                The default input mode is the microphone. Typing is offered as a secondary fallback.
                For patients who are unwell, this inverts the usual hierarchy in the right direction.
              </p>
            </div>

            <div className="case-decision">
              <div className="case-decision-title">Built on Accurx Scribe, not adjacent to it.</div>
              <p className="case-decision-body">
                Accurx already operates a clinical AI transcription product that GPs trust. Rather
                than introducing a competing AI layer, CareLoop extends that same engine forward to
                the patient side of the relationship — same trusted source, new user.
              </p>
            </div>

            <div className="case-decision">
              <div className="case-decision-title">Two views, one record.</div>
              <p className="case-decision-body">
                The patient view shows their own voice, summarised. The admin view shows the same
                data ranked by severity and escalation. Both sides see the same source of truth,
                with different surfacing logic.
              </p>
              <div className="cs-dual-view">
                <figure className="cs-dual-phone">
                  <Phone src="/careloop-screens/06-journal-patient-view.png" alt="Patient journal view" />
                  <figcaption className="cs-phone-caption">Patient view</figcaption>
                </figure>
                <figure className="cs-dual-phone">
                  <Phone src="/careloop-screens/08-journal-admin-escalation.png" alt="Admin journal with escalation flag" />
                  <figcaption className="cs-phone-caption">Clinician view</figcaption>
                </figure>
              </div>
            </div>

            <div className="case-decision">
              <div className="case-decision-title">Escalation as a system signal, not a clinician chore.</div>
              <p className="case-decision-body">
                Clinicians don&apos;t have to scan timelines to spot deterioration; the system
                raises a flag when severity climbs, with a clear reference number and a recommended
                next action.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 5: BUILDING IT ─────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">
          <span className="case-section-label">05</span>
        </div>
        <div>
          <h2 className="case-section-label cs-section-heading">Building It</h2>
          <p className="case-body">
            The 24-hour constraint shaped the build approach as much as the design. Rather than
            producing static Figma mockups and a video walk-through, I designed and prototyped the
            experience in parallel using Claude Code — translating decisions into working screens
            fast enough to keep up with a hackathon clock.
          </p>
          <p className="case-body">
            Working in code rather than mockups changed the kind of feedback the team could give.
            Interaction details — the timing of the recording state, the transition from voice
            capture to AI summary, the way the escalation flag asserts itself in the admin view —
            were testable in something running, not imagined from flat frames. By the pitch,
            CareLoop wasn&apos;t a concept video; it was a prototype the Accurx panel could walk
            through.
          </p>
        </div>
      </div>

      {/* ── SECTION 6: OUTCOME ─────────────────────────────────── */}
      <div className="case-section">
        <div className="case-number">
          <span className="case-section-label">06</span>
        </div>
        <div>
          <h2 className="case-section-label cs-section-heading">Outcome</h2>
          <div className="outcome-grid cs-outcome-grid">
            <div className="outcome-item">
              <div className="outcome-number">🏆</div>
              <div className="outcome-label">Won the Accurx challenge at HuddleHive Hackathon, March 2026</div>
            </div>
            <div className="outcome-item">
              <div className="outcome-label">
                <Todo>[JUDGING REASON OR QUOTE FROM ACCURX PANEL — even one sentence is gold here. Check the hackathon recap channel or your team&apos;s Slack/Discord.]</Todo>
              </div>
            </div>
            <div className="outcome-item">
              <div className="outcome-label">
                <Todo>[POST-HACKATHON FOLLOW-UP IF ANY — did Accurx engage with Team Healthrix afterwards? Was there interest in continuing the concept?]</Todo>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 7: WHAT I'D DO DIFFERENTLY ────────────────── */}
      <div className="case-section">
        <div className="case-number">
          <span className="case-section-label">07</span>
        </div>
        <div>
          <h2 className="case-section-label cs-section-heading">What I&apos;d Do Differently</h2>
          <p className="case-body">
            <Todo>[2–3 HONEST SENTENCES. Possible angles: voice transcription accuracy on medical vocabulary would need proper testing with clinical safety reviewers before this could reach patients. Our escalation threshold model is a designed placeholder; it would need validation against real clinical outcomes data, not designer intuition. The dual patient/admin view assumes a level of trust in AI-summarised symptom data that we didn&apos;t have time to test with real GPs.]</Todo>
          </p>
        </div>
      </div>

      {/* ── NEXT PROJECT ───────────────────────────────────────── */}
      <div className="next-project">
        <div>
          <div className="next-project-label">Next project</div>
          <Link href="/work/nkomor">
            <div className="next-project-title">
              Nkomor Healthcare <ArrowUpRight size={18} style={{ display: 'inline', verticalAlign: 'middle' }} />
            </div>
          </Link>
        </div>
        <Link href="/#work" className="btn-secondary">All projects</Link>
      </div>
    </article>
  )
}
