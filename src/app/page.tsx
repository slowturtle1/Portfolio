'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'

function Typewriter({ text, speed = 18 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    setDisplayed('')
    setDone(false)
    const t = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) { clearInterval(t); setDone(true) }
    }, speed)
    return () => clearInterval(t)
  }, [text, speed])

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
      {!done && <span className="typewriter-cursor">|</span>}
    </span>
  )
}

const ease = [0.16, 1, 0.3, 1] as const

const projects = [
  {
    id: 1,
    category: 'Hackathon',
    title: 'Aether OS',
    description: 'Redefining desktop interactions with a spatial, layered window management system.',
    bg: '#fce4ec',
    textColor: '#333333',
    descColor: '#6b7280',
    btnBorder: '#333333',
    image: 'https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
    href: '/projects/project-alpha',
  },
  {
    id: 2,
    category: 'UX Research',
    title: 'Flora App',
    description: 'Helping urban gardeners track, plan and care for their plants with delightful micro-interactions.',
    bg: '#fff9c4',
    textColor: '#333333',
    descColor: '#6b7280',
    btnBorder: '#333333',
    image: 'https://images.unsplash.com/photo-1748801583967-3038967d7279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
    href: '/projects/project-design-system',
  },
  {
    id: 3,
    category: 'Branding',
    title: 'Meridian',
    description: 'A complete visual identity for a sustainable architecture firm navigating the intersection of nature and structure.',
    bg: '#14746f',
    textColor: '#ffffff',
    descColor: '#f5f5f5',
    btnBorder: '#ffffff',
    image: 'https://images.unsplash.com/photo-1727755868081-c25d2b427ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
    href: '/projects/project-mobile-app',
  },
  {
    id: 4,
    category: 'Product Design',
    title: 'Orbit',
    description: 'A data-dense analytics dashboard built for clarity — surfacing key metrics without cognitive overload.',
    bg: '#f5f5f5',
    textColor: '#333333',
    descColor: '#6b7280',
    btnBorder: '#333333',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80',
    href: '/projects/project-alpha',
  },
]

const heroContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const heroItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease } },
}

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero-v2" id="home">
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
          <motion.div
            className="hero-v2-content"
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-intro" variants={heroItem}>
              <p className="hero-intro-role">
                <Typewriter text="hi, i'm aleksandra — a product designer who loves solving problems and crafting digital products built for real people. ❁" />
              </p>
            </motion.div>

            <motion.p className="hero-tagline hero-friendly" variants={heroItem}>
              let&apos;s work together :)
            </motion.p>

            <motion.a
              href="#work"
              className="scroll-indicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
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
      </section>

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
            <p className="projects-eyebrow">
              <span className="projects-eyebrow-dot" />
              Selected Work
            </p>
            <h2 className="projects-heading">Featured Projects</h2>
          </div>
          <a href="#" className="projects-all-link">
            All Projects
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
                      style={{ color: project.textColor === '#ffffff' ? '#fff' : '#ea580c' }}
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
                      Case Study
                      <span className="pcard-btn-icon">
                        <ArrowUpRight size={12} strokeWidth={2.5} />
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="pcard-image">
                  <motion.div
                    className="pcard-image-inner"
                    whileHover={{ scale: 1.07 }}
                    transition={{ type: 'spring', stiffness: 160, damping: 28 }}
                  >
                    <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
                  </motion.div>
                  <div className="pcard-image-overlay" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section id="contact" className="cta-wrap">
        <motion.div
          className="cta-panel"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease }}
        >
          <div className="cta-glow" />
          <div className="cta-panel-inner">
            <div>
              <p className="cta-eyebrow">Let&apos;s work together</p>
              <h2 className="cta-panel-heading">
                Have a project<br className="br-sm" />
                in mind?{' '}
                <em>Let&apos;s build it.</em>
              </h2>
            </div>
            <a href="mailto:hello@avugdragovic.com" className="cta-panel-btn">
              Get in touch
              <ArrowUpRight size={16} className="btn-icon" />
            </a>
          </div>
        </motion.div>
      </section>
    </>
  )
}
