'use client'

import Link from 'next/link'
import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PROJECTS = [
  {
    id: 1,
    num: '01',
    title: 'Onboarding Redesign',
    desc: 'Reduced drop-off by 40% through progressive disclosure and contextual guidance.',
    disciplines: ['UX Research', 'Product Design'],
    year: '2024',
    href: '/projects/project-alpha',
    color: 'linear-gradient(145deg, #2a2420 0%, #1a1410 100%)',
  },
  {
    id: 2,
    num: '02',
    title: 'Design System',
    desc: 'Built a scalable component library unifying three product lines under one language.',
    disciplines: ['Design System', 'UI Design'],
    year: '2023',
    href: '/projects/project-design-system',
    color: 'linear-gradient(145deg, #1a2028 0%, #111820 100%)',
  },
  {
    id: 3,
    num: '03',
    title: 'Fintech Mobile App',
    desc: 'End-to-end design from discovery to launch — shipped to 50k+ users.',
    disciplines: ['Mobile', 'UX Design'],
    year: '2022',
    href: '/projects/project-mobile-app',
    color: 'linear-gradient(145deg, #201a28 0%, #140f1c 100%)',
  },
]

const EXPERIMENTS = [
  { num: 'P1', title: 'Motion Study', desc: 'Micro-interaction patterns for data-heavy dashboards.', tags: ['Motion', 'Prototyping'] },
  { num: 'P2', title: 'Typography Grid', desc: 'Visual experiment with Swiss grid and expressive type hierarchy.', tags: ['Typography', 'Visual'] },
]

/* ── Floating project preview that follows cursor ─── */
function ProjectPreview({ project, x, y }: { project: typeof PROJECTS[0] | null; x: number; y: number }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="project-preview"
          style={{ left: x + 24, top: y - 80 }}
          initial={{ opacity: 0, scale: 0.88, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 8 }}
          transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="project-preview-img" style={{ background: project.color }} />
          <div className="project-preview-meta">
            <span className="project-preview-num">{project.num}</span>
            <span className="project-preview-title">{project.title}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ── Hero text stagger ─────────────────────────────── */
const word = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 55, damping: 16, delay: i * 0.08 },
  }),
}

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<typeof PROJECTS[0] | null>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const workRef = useRef<HTMLElement>(null)

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    setMouse({ x: e.clientX, y: e.clientY })
  }, [])

  return (
    <div onMouseMove={onMouseMove}>
      <ProjectPreview project={hoveredProject} x={mouse.x} y={mouse.y} />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="hero">
        <motion.div className="hero-status"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="status-dot" />
          <span>Available from April 2026</span>
        </motion.div>

        <div className="hero-heading-wrap">
          {['Igor', 'J'].map((w, i) => (
            <motion.span key={w} className="hero-word" custom={i}
              variants={word} initial="hidden" animate="show"
            >{w}</motion.span>
          ))}
        </div>

        <div className="hero-bottom">
          <motion.p className="hero-role"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.5 }}
          >
            Product Designer — Interaction design &amp; systems thinking.
          </motion.p>

          <motion.div className="hero-cta"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <button className="hero-cta-btn" onClick={() => workRef.current?.scrollIntoView({ behavior: 'smooth' })}>
              View work
            </button>
            <Link href="/about" className="hero-cta-link">About →</Link>
          </motion.div>
        </div>

        <motion.div className="hero-index"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >001</motion.div>
      </section>

      {/* ── WORK ─────────────────────────────────────── */}
      <section className="work" id="work" ref={workRef}>
        <motion.div className="section-head"
          initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <span className="section-label">Selected work</span>
          <div className="section-rule" />
          <span className="section-count">{PROJECTS.length} projects</span>
        </motion.div>

        <div className="project-table">
          {PROJECTS.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={p.href}
                className="project-row"
                onMouseEnter={() => setHoveredProject(p)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <span className="pr-num">{p.num}</span>
                <div className="pr-main">
                  <span className="pr-title">{p.title}</span>
                  <span className="pr-desc">{p.desc}</span>
                </div>
                <div className="pr-meta">
                  <span className="pr-disciplines">{p.disciplines.join(' · ')}</span>
                  <span className="pr-year">{p.year}</span>
                </div>
                <span className="pr-arrow">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PLAYGROUND ───────────────────────────────── */}
      <section className="playground" id="playground">
        <motion.div className="section-head"
          initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <span className="section-label">Experiments</span>
          <div className="section-rule" />
        </motion.div>

        <div className="experiment-grid">
          {EXPERIMENTS.map((e, i) => (
            <motion.a key={e.num} href="#"
              className="experiment-item"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <div className="exp-head">
                <span className="exp-num">{e.num}</span>
                <span className="exp-arrow">↗</span>
              </div>
              <h3 className="exp-title">{e.title}</h3>
              <p className="exp-desc">{e.desc}</p>
              <div className="exp-tags">
                {e.tags.map(t => <span key={t} className="exp-tag">{t}</span>)}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────── */}
      <section className="about" id="about">
        <motion.div className="section-head"
          initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <span className="section-label">About</span>
          <div className="section-rule" />
        </motion.div>

        <motion.div className="about-body-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-text">
            <p className="about-p">
              I&apos;m a Product Designer with a focus on interaction design and systems thinking.
              7 years across B2B SaaS, fintech, and healthtech — at startups as the first designer,
              and at scale-ups navigating rapid growth.
            </p>
            <p className="about-p">
              Currently Lead Product Designer at Nkomor Healthcare — built the design system,
              established a research practice, grew the team. Features I&apos;ve shipped are used by 200k+ patients.
            </p>
            <div className="about-actions">
              <a href="mailto:hello@igorj.com" className="btn-primary">Get in touch</a>
              <Link href="/about" className="btn-ghost">Full story →</Link>
            </div>
          </div>

          <div className="about-aside">
            <div className="about-stat-row">
              <span className="about-stat-n">200k+</span>
              <span className="about-stat-l">Patients impacted</span>
            </div>
            <div className="about-stat-row">
              <span className="about-stat-n">7 yrs</span>
              <span className="about-stat-l">Designing products</span>
            </div>
            <div className="about-stat-row">
              <span className="about-stat-n">3</span>
              <span className="about-stat-l">Industries</span>
            </div>
            <div className="about-skills">
              {['Product Design', 'Interaction Design', 'Design Systems', 'UX Research', 'Prototyping', 'Workshop Facilitation'].map(s => (
                <span key={s} className="about-skill">{s}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
