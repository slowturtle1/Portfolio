'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 65, damping: 18 },
  },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export default function Home() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="hero">
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="eyebrow-dot" />
          Product Designer — Available April 2026
        </motion.div>

        <motion.h1
          className="hero-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.2 }}
        >
          Designing<br /><em>with intention.</em>
        </motion.h1>

        <motion.p
          className="hero-body"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.35 }}
        >
          I craft digital products that feel inevitable —<br className="br-desktop" />
          clear, considered, and built for real people.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.5 }}
        >
          <Link href="#work" className="cta-link">
            View work <span>↓</span>
          </Link>
          <Link href="/about" className="cta-link cta-link--soft">
            About me <span>→</span>
          </Link>
        </motion.div>

        <div className="hero-rule" />
      </section>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <motion.div
        className="stats-row"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <div className="stat">
          <span className="stat-num">200k+</span>
          <span className="stat-lbl">Patients impacted</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-num">7 yrs</span>
          <span className="stat-lbl">Designing products</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-num">3</span>
          <span className="stat-lbl">Industries served</span>
        </div>
      </motion.div>

      {/* ── WORK ──────────────────────────────────────────────── */}
      <section className="work" id="work">
        <div className="s-header">
          <span className="s-label">Selected work</span>
          <div className="s-line" />
        </div>

        <motion.div
          className="projects-list"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          <motion.article variants={fadeUp}>
            <Link href="/projects/project-alpha" className="project-link">
              <div className="project-img-wrap">
                <div className="project-img ph-warm" />
              </div>
              <div>
                <div className="project-meta-row">
                  <span className="project-num">01</span>
                  <div className="project-tag-group">
                    <span className="ptag">UX Research</span>
                    <span className="ptag">Product Design</span>
                  </div>
                  <span className="project-arr">→</span>
                </div>
                <h2 className="project-title">Onboarding Redesign</h2>
                <p className="project-desc">Reduced drop-off by 40% through progressive disclosure and contextual guidance for a B2B SaaS platform.</p>
              </div>
            </Link>
          </motion.article>

          <motion.article variants={fadeUp}>
            <Link href="/projects/project-design-system" className="project-link">
              <div className="project-img-wrap">
                <div className="project-img ph-cool" />
              </div>
              <div>
                <div className="project-meta-row">
                  <span className="project-num">02</span>
                  <div className="project-tag-group">
                    <span className="ptag">Design System</span>
                    <span className="ptag">UI Design</span>
                  </div>
                  <span className="project-arr">→</span>
                </div>
                <h2 className="project-title">Design System</h2>
                <p className="project-desc">Built a scalable component library unifying three product lines under a single visual language.</p>
              </div>
            </Link>
          </motion.article>

          <motion.article variants={fadeUp}>
            <Link href="/projects/project-mobile-app" className="project-link">
              <div className="project-img-wrap">
                <div className="project-img ph-stone" />
              </div>
              <div>
                <div className="project-meta-row">
                  <span className="project-num">03</span>
                  <div className="project-tag-group">
                    <span className="ptag">Mobile</span>
                    <span className="ptag">UX Design</span>
                  </div>
                  <span className="project-arr">→</span>
                </div>
                <h2 className="project-title">Fintech Mobile App</h2>
                <p className="project-desc">End-to-end design from discovery to launch — shipped to 50k+ users across iOS and Android.</p>
              </div>
            </Link>
          </motion.article>
        </motion.div>
      </section>

      {/* ── PLAYGROUND ────────────────────────────────────────── */}
      <section className="playground" id="playground">
        <div className="s-header">
          <span className="s-label">Experiments</span>
          <div className="s-line" />
        </div>

        <motion.div
          className="playground-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.article className="playground-card" variants={fadeUp}>
            <div className="pg-content">
              <span className="pg-num">P1</span>
              <div>
                <h3 className="playground-title">Motion Study</h3>
                <p className="playground-desc">Micro-interaction patterns for data-heavy dashboards.</p>
                <div className="playground-tags">
                  <span className="ptag">Motion</span>
                  <span className="ptag">Prototyping</span>
                </div>
              </div>
            </div>
            <a href="#" className="pg-link" aria-label="Open experiment">↗</a>
          </motion.article>

          <motion.article className="playground-card" variants={fadeUp}>
            <div className="pg-content">
              <span className="pg-num">P2</span>
              <div>
                <h3 className="playground-title">Typography Grid</h3>
                <p className="playground-desc">Visual experiment with Swiss grid systems and expressive type hierarchy.</p>
                <div className="playground-tags">
                  <span className="ptag">Typography</span>
                  <span className="ptag">Visual Design</span>
                </div>
              </div>
            </div>
            <a href="#" className="pg-link" aria-label="Open experiment">↗</a>
          </motion.article>
        </motion.div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section className="about-section" id="about">
        <div className="s-header">
          <span className="s-label">About me</span>
          <div className="s-line" />
        </div>

        <motion.div
          className="about-grid"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: 'spring', stiffness: 65, damping: 18 }}
        >
          <div className="about-left">
            <blockquote className="about-quote">
              &ldquo;Great design is mostly invisible — it removes friction, surfaces the right information, and earns trust over time.&rdquo;
            </blockquote>
            <p className="about-body">
              I&apos;m a Product Designer with a focus on interaction design and systems thinking. I&apos;ve worked across B2B SaaS, fintech, and healthtech — at startups where I was the first designer, and at scale-ups navigating rapid growth.
            </p>
            <p className="about-body">
              Currently Lead Product Designer at Nkomor Healthcare, shipping features used by 200k+ patients. Open to full-time roles from April 2026.
            </p>
            <div className="about-actions">
              <a href="mailto:hello@igorj.com" className="btn-ink">Get in touch</a>
              <Link href="/about" className="btn-text-link">Full story →</Link>
            </div>
          </div>

          <div className="about-right">
            <div className="about-photo">
              <span className="ph-label">Photo</span>
            </div>
            <ul className="skills-list">
              <li>Product Design</li>
              <li>Interaction Design</li>
              <li>Design Systems</li>
              <li>UX Research</li>
              <li>Prototyping</li>
              <li>Workshop Facilitation</li>
            </ul>
          </div>
        </motion.div>
      </section>
    </>
  )
}
