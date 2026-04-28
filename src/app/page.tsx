'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

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
          animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="blob blob-yellow"
          animate={{ rotate: [360, 270, 180, 90, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="blob blob-blue"
          animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="hero-v2-inner">
          <motion.div
            className="hero-v2-content"
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="hero-eyebrow" variants={heroItem}>
              <span className="hero-eyebrow-line" />
              Portfolio · Product Designer
            </motion.p>

            <motion.h1 className="hero-heading-v2" variants={heroItem}>
              <span className="hero-subheading">Hi, I&apos;m Aleksandra.</span>
              Product Designer{' '}
              <br className="br-sm" />
              <span className="hero-italic">that enjoys</span>{' '}
              solving{' '}
              <span className="hero-highlight-wrap">
                <span className="hero-highlight-text">problems</span>
                <motion.span
                  className="hero-highlight-bar"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 1, ease }}
                />
              </span>
              .
            </motion.h1>

            <motion.p className="hero-tagline" variants={heroItem}>
              I craft digital products that feel inevitable —
              clear, considered and built for real people.
            </motion.p>

            <motion.div className="hero-ctas" variants={heroItem}>
              <a href="#work" className="btn-dark">
                View Work
                <ArrowUpRight size={15} className="btn-icon" />
              </a>
              <Link href="/about" className="btn-ghost">About Me</Link>
            </motion.div>

            <motion.div className="hero-stats" variants={heroItem}>
              {[
                { val: '5+', label: 'Years experience' },
                { val: '30+', label: 'Projects shipped' },
                { val: '12', label: 'Happy clients' },
              ].map(({ val, label }) => (
                <div key={label} className="hero-stat">
                  <p className="hero-stat-val">{val}</p>
                  <p className="hero-stat-label">{label}</p>
                </div>
              ))}
            </motion.div>
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
            const restRotation = isLeft ? -0.8 : 0.8
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
                  scale: 1.03,
                  rotate: isLeft ? -2 : 2,
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
                    <img src={project.image} alt={project.title} />
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
