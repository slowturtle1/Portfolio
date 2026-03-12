'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Figma, Layers, Search, Zap, BarChart2, Users, ArrowUpRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-inner">
          <span className="label section-label">Product Designer</span>
          <h1 className="hero-heading">
            Designing clarity<br />in complex&nbsp;spaces.
          </h1>
          <p className="hero-body">
            I craft digital products that feel inevitable — clear, considered,<br className="br-desktop" />
            and built for real people.
          </p>
          <div className="hero-actions">
            <Link href="#projects" className="btn-primary">View work</Link>
            <Link href="/about" className="btn-secondary">About me</Link>
          </div>
        </div>
        <div className="hero-number">/001</div>
      </section>

      {/* PROJECTS */}
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
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.article className="project-card featured" variants={fadeUp}>
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

          <motion.article className="project-card" variants={fadeUp}>
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

          <motion.article className="project-card" variants={fadeUp}>
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

      {/* PLAYGROUND */}
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
          <motion.article className="playground-card" variants={fadeUp}>
            <div className="playground-image placeholder-image pg1">
              <span className="placeholder-label">Preview</span>
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

          <motion.article className="playground-card" variants={fadeUp}>
            <div className="playground-image placeholder-image pg2">
              <span className="placeholder-label">Preview</span>
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

      {/* ABOUT */}
      <section className="section section-about" id="about">
        <motion.div
          className="about-grid"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
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
              <a href="mailto:hello@igorj.com" className="btn-primary">Get in touch</a>
              <Link href="/about" className="btn-secondary">Full story</Link>
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
