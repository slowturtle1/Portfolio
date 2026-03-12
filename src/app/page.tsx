'use client'

import Link from 'next/link'
import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from 'framer-motion'
import { Figma, Layers, Search, Zap, BarChart2, Users, ArrowUpRight } from 'lucide-react'

/* ─── Magnetic wrapper ──────────────────────────────────────── */
function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 250, damping: 18 })
  const springY = useSpring(y, { stiffness: 250, damping: 18 })

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      onMouseMove={(e) => {
        const rect = ref.current!.getBoundingClientRect()
        x.set((e.clientX - rect.left - rect.width / 2) * 0.35)
        y.set((e.clientY - rect.top - rect.height / 2) * 0.35)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
    >
      {children}
    </motion.div>
  )
}

/* ─── Animation variants ────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 70,
      damping: 18,
    },
  },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const rawY = useTransform(scrollY, [0, 700], [0, -90])
  const rawOpacity = useTransform(scrollY, [0, 500], [1, 0.5])
  const heroY = useSpring(rawY, { stiffness: 60, damping: 20 })
  const heroOpacity = useSpring(rawOpacity, { stiffness: 60, damping: 20 })

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero" id="home" ref={heroRef}>
        <motion.div className="hero-inner" style={{ y: heroY, opacity: heroOpacity }}>
          <motion.span
            className="label section-label"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Product Designer
          </motion.span>

          <motion.h1
            className="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.2 }}
          >
            Designing clarity<br />in complex&nbsp;spaces.
          </motion.h1>

          <motion.p
            className="hero-body"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.35 }}
          >
            I craft digital products that feel inevitable — clear, considered,<br className="br-desktop" />
            and built for real people.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.5 }}
          >
            <Magnetic>
              <Link href="#projects" className="btn-primary">View work</Link>
            </Magnetic>
            <Magnetic>
              <Link href="/about" className="btn-secondary">About me</Link>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-number"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.6 }}
        >
          /001
        </motion.div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────── */}
      <section className="section" id="projects">
        <div className="section-header">
          <span className="label section-label">Selected work</span>
          <h2 className="section-heading">Projects</h2>
        </div>

        <motion.div
          className="projects-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
        >
          <motion.article
            className="project-card featured"
            variants={fadeUp}
            whileHover={{ y: -8, transition: { type: 'spring', stiffness: 200, damping: 22 } }}
          >
            <div className="project-image-wrap">
              <div className="project-image placeholder-image">
                <span className="placeholder-label">Project image</span>
              </div>
              <div className="project-tags">
                <span className="tag">UX Research</span>
                <span className="tag">Product Design</span>
              </div>
            </div>
            <div className="project-info">
              <span className="project-number">/01</span>
              <h3 className="project-title">Onboarding Redesign</h3>
              <p className="project-desc">A redesign of the core onboarding experience, reducing drop-off by 40% through progressive disclosure and contextual guidance.</p>
              <Link href="/projects/project-alpha" className="btn-primary project-btn">View case study</Link>
            </div>
          </motion.article>

          <motion.article
            className="project-card"
            variants={fadeUp}
            whileHover={{ y: -8, transition: { type: 'spring', stiffness: 200, damping: 22 } }}
          >
            <div className="project-image-wrap">
              <div className="project-image placeholder-image alt">
                <span className="placeholder-label">Project image</span>
              </div>
              <div className="project-tags">
                <span className="tag">Design System</span>
                <span className="tag">UI Design</span>
              </div>
            </div>
            <div className="project-info">
              <span className="project-number">/02</span>
              <h3 className="project-title">Design System</h3>
              <p className="project-desc">Built a scalable component library from scratch, unifying three product lines under a single visual language.</p>
              <Link href="/projects/project-design-system" className="btn-secondary project-btn">View case study</Link>
            </div>
          </motion.article>

          <motion.article
            className="project-card"
            variants={fadeUp}
            whileHover={{ y: -8, transition: { type: 'spring', stiffness: 200, damping: 22 } }}
          >
            <div className="project-image-wrap">
              <div className="project-image placeholder-image alt2">
                <span className="placeholder-label">Project image</span>
              </div>
              <div className="project-tags">
                <span className="tag">Mobile</span>
                <span className="tag">UX Design</span>
              </div>
            </div>
            <div className="project-info">
              <span className="project-number">/03</span>
              <h3 className="project-title">Mobile App</h3>
              <p className="project-desc">End-to-end design of a fintech mobile app, from discovery workshops to a shipped product used by 50k+ users.</p>
              <Link href="/projects/project-mobile-app" className="btn-secondary project-btn">View case study</Link>
            </div>
          </motion.article>
        </motion.div>
      </section>

      {/* ── PLAYGROUND ───────────────────────────────────────── */}
      <section className="section" id="playground">
        <div className="section-header">
          <span className="label section-label">Experiments</span>
          <h2 className="section-heading">Playground</h2>
        </div>

        <motion.div
          className="playground-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.article
            className="playground-card"
            variants={fadeUp}
            whileHover={{ y: -6, transition: { type: 'spring', stiffness: 200, damping: 22 } }}
          >
            <div className="playground-image">
              <div className="placeholder-image pg1" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="placeholder-label">Preview</span>
              </div>
            </div>
            <div className="playground-info">
              <span className="project-number">/P1</span>
              <h3 className="playground-title">Motion Study</h3>
              <p className="playground-desc">Exploring micro-interaction patterns for data-heavy dashboards.</p>
              <div className="playground-tags">
                <span className="tag">Motion</span>
                <span className="tag">Prototyping</span>
              </div>
              <a href="#" className="link-arrow">Explore <ArrowUpRight size={14} strokeWidth={2.5} /></a>
            </div>
          </motion.article>

          <motion.article
            className="playground-card"
            variants={fadeUp}
            whileHover={{ y: -6, transition: { type: 'spring', stiffness: 200, damping: 22 } }}
          >
            <div className="playground-image">
              <div className="placeholder-image pg2" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="placeholder-label">Preview</span>
              </div>
            </div>
            <div className="playground-info">
              <span className="project-number">/P2</span>
              <h3 className="playground-title">Typography Grid</h3>
              <p className="playground-desc">A visual experiment with Swiss grid systems and expressive type hierarchy.</p>
              <div className="playground-tags">
                <span className="tag">Typography</span>
                <span className="tag">Visual Design</span>
              </div>
              <a href="#" className="link-arrow">Explore <ArrowUpRight size={14} strokeWidth={2.5} /></a>
            </div>
          </motion.article>
        </motion.div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section className="section section-about" id="about">
        <motion.div
          className="about-grid"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: 'spring', stiffness: 70, damping: 18 }}
        >
          <div className="about-content">
            <span className="label section-label">About me</span>
            <h2 className="section-heading about-heading">Turning complexity<br />into clarity.</h2>
            <p className="about-body">
              I&apos;m a Product Designer with a focus on interaction design and systems thinking.
              I believe that great design is mostly invisible — it removes friction, surfaces the right information,
              and earns trust over time.
            </p>
            <p className="about-body">
              Currently open to new opportunities. I work best in collaborative environments where
              design has a seat at the table from day one.
            </p>
            <div className="about-actions">
              <Magnetic>
                <a href="mailto:hello@igorj.com" className="btn-primary">Get in touch</a>
              </Magnetic>
              <Magnetic>
                <Link href="/about" className="btn-secondary">Full story</Link>
              </Magnetic>
            </div>
          </div>

          <div className="about-side">
            <div className="about-photo-wrap">
              <div className="about-photo placeholder-image photo">
                <span className="placeholder-label">Photo</span>
              </div>
            </div>
            <div className="about-skills">
              <h4 className="skills-title">Skills</h4>
              <ul className="skills-list">
                <li><Figma size={15} strokeWidth={1.75} /> Figma</li>
                <li><Layers size={15} strokeWidth={1.75} /> Design Systems</li>
                <li><Search size={15} strokeWidth={1.75} /> UX Research</li>
                <li><Zap size={15} strokeWidth={1.75} /> Prototyping</li>
                <li><BarChart2 size={15} strokeWidth={1.75} /> Data Visualization</li>
                <li><Users size={15} strokeWidth={1.75} /> Workshop Facilitation</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
