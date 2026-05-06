'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const b = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

function Typewriter({ text, speed = 18, active }: { text: string; speed?: number; active: boolean }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!active) return
    let i = 0
    setDisplayed('')
    setDone(false)
    const t = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) { clearInterval(t); setDone(true) }
    }, speed)
    return () => clearInterval(t)
  }, [text, speed, active])

  const target = 'product designer'
  const idx = displayed.indexOf(target)
  const content = idx === -1 ? displayed : (
    <>
      {displayed.slice(0, idx)}
      <span className="hero-underline">{displayed.slice(idx, idx + target.length)}</span>
      {displayed.slice(idx + target.length)}
    </>
  )

  return (
    <span>
      {content}
      {!done && active && <span className="typewriter-cursor">|</span>}
    </span>
  )
}

const ease = [0.16, 1, 0.3, 1] as const

const projects = [
  {
    id: 1,
    category: 'healthcare · hackathon · voice ui',
    title: 'CareLoop',
    description: 'A voice-first symptom journaling concept for NHS clinicians, designed and prototyped in 24 hours. Winner of the Accurx challenge at HuddleHive Hackathon, March 2026.',
    tags: ['Healthcare', 'Hackathon', 'NHS', 'Voice UI', 'AI-assisted'],
    year: '2026',
    bg: '#0f766e',
    textColor: '#ffffff',
    descColor: 'rgba(255,255,255,0.75)',
    btnBorder: '#ffffff',
    imageBg: 'linear-gradient(135deg, #0d9488 0%, #047857 100%)',
    image: '/careloop-hero.png',
    imageAlt: 'Hand holding phone showing CareLoop voice recording screen',
    href: '/work/careloop',
  },
  {
    id: 2,
    category: 'healthcare',
    title: 'Nkomor Healthcare',
    description: '[ONE-LINE SUMMARY OF NKOMOR — what is it, what did you design, who is it for]',
    tags: ['Healthcare', '[ADD]', '[ADD]'],
    year: '[YEAR]',
    bg: '#f0fdf4',
    textColor: '#14532d',
    descColor: '#166534',
    btnBorder: '#14532d',
    imageBg: 'linear-gradient(135deg, #bbf7d0 0%, #86efac 100%)',
    image: undefined as string | undefined,
    imageAlt: undefined as string | undefined,
    href: '/work/nkomor',
  },
  {
    id: 3,
    category: 'internal tooling · surveying',
    title: 'DPR QA Tool',
    description: 'Internal QA tooling for one of London\'s leading building surveying practices. Designed for experts in regulated, high-stakes professional environments.',
    tags: ['Internal Tooling', 'Surveying', 'Design Systems'],
    year: '[YEAR]',
    bg: '#1e293b',
    textColor: '#ffffff',
    descColor: 'rgba(255,255,255,0.65)',
    btnBorder: '#ffffff',
    imageBg: 'linear-gradient(135deg, #334155 0%, #1e293b 100%)',
    image: undefined as string | undefined,
    imageAlt: undefined as string | undefined,
    href: '/work/dpr-qa-tool',
  },
]

const heroContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
}

const heroItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease } },
}

export default function Home() {
  const [introVisible, setIntroVisible] = useState(true)
  const [heroDone, setHeroDone] = useState(false)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  // Lock scroll during intro
  useEffect(() => {
    if (introVisible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [introVisible])

  // Auto-transition after 7s
  useEffect(() => {
    const t = setTimeout(() => setIntroVisible(false), 7000)
    return () => clearTimeout(t)
  }, [])

  const dismiss = () => setIntroVisible(false)

  return (
    <>
      {/* ── INTRO OVERLAY ───────────────────────────────────────── */}
      <AnimatePresence onExitComplete={() => setHeroDone(true)}>
        {introVisible && (
          <motion.div
            className="intro-overlay"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Video — starts slightly zoomed, slowly pulls back */}
            <motion.video
              className="intro-video"
              autoPlay
              muted
              playsInline
              onEnded={dismiss}
              src={`${b}/careloop-demo.mp4`}
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 9, ease: 'easeOut' }}
            />

            {/* Cinematic vignette */}
            <div className="intro-vignette" />

            {/* Name card — fades in after 0.8s */}
            <motion.div
              className="intro-namecard"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1.2, ease }}
            >
              aleksandra vugdragovic
              <span className="intro-namecard-role"> — product designer</span>
            </motion.div>

            {/* Skip */}
            <motion.button
              className="intro-skip"
              onClick={dismiss}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              enter portfolio ↓
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <motion.section
        className="hero-v2"
        id="home"
        initial={{ opacity: 0, y: 24 }}
        animate={heroDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 1.1, ease }}
      >
        {/* Animated blobs */}
        <motion.div
          className="blob blob-pink"
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="blob blob-yellow"
          animate={{ x: [0, -15, 0], y: [0, 25, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="blob blob-blue"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="hero-v2-inner">
          <div className="hero-split">

            {/* ── LEFT: video ── */}
            <motion.div
              className="hero-video-col"
              initial={{ opacity: 0, x: -32 }}
              animate={heroDone ? { opacity: 1, x: 0 } : { opacity: 0, x: -32 }}
              transition={{ duration: 1, delay: 0.15, ease }}
            >
              <div className="hero-video-wrap">
                <video
                  className="hero-video"
                  src={`${b}/careloop-demo.mp4`}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </motion.div>

            {/* ── RIGHT: text ── */}
            <motion.div
              className="hero-v2-content"
              variants={heroContainer}
              initial="hidden"
              animate={heroDone ? 'visible' : 'hidden'}
            >
              <motion.div className="hero-intro" variants={heroItem}>
                <p className="hero-intro-role">
                  <Typewriter
                    text="i'm a product designer based in london. healthcare focused, with a background in 3D design, now redirecting the craft toward clinical software. ❁"
                    active={heroDone}
                  />
                </p>
              </motion.div>

              <motion.p className="hero-tagline hero-friendly" variants={heroItem}>
                currently open to product design roles in NHS-adjacent and UK healthtech teams.
              </motion.p>

              <motion.a
                href="#work"
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={heroDone ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 2.8, duration: 1 }}
              >
                <motion.span
                  className="scroll-indicator-text"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  scroll for my work ↓
                </motion.span>
              </motion.a>

            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── PROJECTS ─────────────────────────────────────────── */}
      <section id="work" className="projects-section">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease }}
        >
          <div>
            <h2 className="projects-heading">featured projects</h2>
          </div>
          <a href="#" className="projects-all-link">
            all projects
            <span className="projects-all-icon">
              <ArrowUpRight size={14} />
            </span>
          </a>
        </motion.div>

        <div className="projects-grid-v2">
          {projects.map((project, i) => {
            const isLeft = i % 2 === 0
            const restRotation = isLeft ? -2.5 : 2.5
            return (
              <motion.div
                key={project.id}
                className="pcard"
                style={{ backgroundColor: project.bg }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0, rotate: restRotation }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  type: 'spring',
                  stiffness: 50,
                  damping: 18,
                  delay: i * 0.08,
                }}
                whileHover={{
                  scale: 1.04,
                  rotate: isLeft ? -4.5 : 4.5,
                  y: -14,
                  transition: {
                    type: 'spring',
                    stiffness: 200,
                    damping: 24,
                  },
                }}
              >
                <div className="pcard-content">
                  <div>
                    <span
                      className="pcard-category"
                      style={{ color: project.textColor === '#ffffff' ? 'rgba(255,255,255,0.6)' : '#ea580c' }}
                    >
                      {project.category}
                    </span>
                    <h3 className="pcard-title" style={{ color: project.textColor }}>
                      {project.title}
                    </h3>
                    <p className="pcard-desc" style={{ color: project.descColor }}>
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <Link
                      href={project.href}
                      className="pcard-btn"
                      style={{ borderColor: project.btnBorder, color: project.btnBorder }}
                    >
                      case study
                      <span className="pcard-btn-icon">
                        <ArrowUpRight size={12} strokeWidth={2.5} />
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="pcard-image">
                  <motion.div
                    className="pcard-image-inner"
                    style={{ background: project.imageBg }}
                    whileHover={{ scale: 1.07 }}
                    transition={{ type: 'spring', stiffness: 160, damping: 28 }}
                  >
                    {project.image && (
                      <img
                        src={`${b}${project.image}`}
                        alt={project.imageAlt ?? project.title}
                        className="pcard-photo"
                      />
                    )}
                  </motion.div>
                  <div className="pcard-image-overlay" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>
    </>
  )
}
