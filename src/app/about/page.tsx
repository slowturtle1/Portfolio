import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Igor J',
}

export default function About() {
  return (
    <>
      <div className="about-page-hero">
        <div>
          <span className="label">About me</span>
          <h1 className="about-page-title">Turning complexity<br />into clarity.</h1>
          <p className="about-page-body">
            I&apos;m a Product Designer with a focus on interaction design and systems thinking.
            I believe great design is mostly invisible — it removes friction, surfaces the right
            information, and earns trust over time.
          </p>
          <p className="about-page-body">
            I&apos;ve worked across B2B SaaS, fintech, and healthtech — at startups where I was
            the first designer, and at scale-ups navigating rapid growth. What I enjoy most
            is working on problems that are genuinely hard to solve.
          </p>
          <p className="about-page-body">
            Currently open to new opportunities. I work best in collaborative environments
            where design has a seat at the table from day one.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', marginTop: 'var(--space-xl)' }}>
            <a href="mailto:hello@igorj.com" className="btn-primary">Get in touch</a>
            <a href="#" className="btn-secondary">Download CV</a>
          </div>
        </div>
        <div className="about-page-photo">
          <span className="placeholder-label">Photo</span>
        </div>
      </div>

      <div className="experience-section">
        <span className="label section-label">Experience</span>
        <h2 className="section-heading">Where I&apos;ve worked</h2>
        <div className="experience-list">
          {[
            { period: '2023 — Present', role: 'Lead Product Designer', company: 'Nkomor Healthcare', desc: 'Leading design across three product lines. Built the company\'s first design system, established a research practice, and grew the design team from one to three. Shipped features used by 200k+ patients.' },
            { period: '2021 — 2023', role: 'Product Designer', company: 'MyNurse', desc: 'End-to-end design of the patient-facing mobile app and clinician dashboard. Worked closely with nursing staff to understand clinical workflows and translate them into a usable digital experience.' },
            { period: '2019 — 2021', role: 'UX Designer', company: 'Freelance', desc: 'Worked with early-stage startups across fintech, e-commerce, and productivity tools. Projects ranged from 0→1 product design to usability audits and design system foundations.' },
            { period: '2017 — 2019', role: 'Junior UI Designer', company: 'Studio Flux', desc: 'Designed marketing sites, dashboards, and brand identities for agency clients. Built a reusable component kit that became the studio\'s default starting point.' },
          ].map((item) => (
            <div key={item.company} className="experience-item">
              <div className="experience-period">{item.period}</div>
              <div>
                <div className="experience-role">{item.role}</div>
                <div className="experience-company">{item.company}</div>
                <div className="experience-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <span className="label section-label">Capabilities</span>
        <h2 className="section-heading">What I bring</h2>
        <div className="skills-grid-page">
          {[
            { title: 'Design', items: ['Product Design', 'Interaction Design', 'UI Design', 'Design Systems', 'Prototyping'] },
            { title: 'Research', items: ['User Interviews', 'Usability Testing', 'Survey Design', 'Analytics & Heatmaps', 'Workshop Facilitation'] },
            { title: 'Tools', items: ['Figma', 'Principle', 'Maze / UserTesting', 'Hotjar / FullStory', 'Notion / Linear'] },
          ].map((group) => (
            <div key={group.title} className="skill-group">
              <div className="skill-group-title">{group.title}</div>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-section">
        <div>
          <span className="label section-label">Contact</span>
          <h2 className="contact-heading">Let&apos;s work<br />together.</h2>
          <p className="contact-body">
            I&apos;m currently open to full-time roles and select freelance projects.
            If you&apos;re building something worth designing well, I&apos;d love to hear about it.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
            <a href="mailto:hello@igorj.com" className="btn-primary">hello@igorj.com</a>
            <a href="#" className="btn-secondary">LinkedIn</a>
          </div>
        </div>
        <div>
          <div style={{ border: '1px solid var(--border)', padding: 'var(--space-xl)' }}>
            <div className="meta-label" style={{ marginBottom: 'var(--space-md)' }}>Currently based in</div>
            <div style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-xl)' }}>Belgrade, Serbia — open to remote</div>
            <div className="meta-label" style={{ marginBottom: 'var(--space-md)' }}>Availability</div>
            <div style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-xl)', color: 'var(--accent-primary)' }}>Available from April 2026</div>
            <div className="meta-label" style={{ marginBottom: 'var(--space-md)' }}>Languages</div>
            <div style={{ fontSize: '1rem', fontWeight: 600 }}>English (fluent), Serbian (native)</div>
          </div>
        </div>
      </div>
    </>
  )
}
