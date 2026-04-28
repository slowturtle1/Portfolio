import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About — Aleksandra Vugdragovic',
}

export default function About() {
  return (
    <>
      <div className="about-page-hero">
        <div>
          <h1 className="about-page-title">turning complexity<br />into clarity.</h1>
          <p className="about-page-body">
            i&apos;m a product designer with a focus on interaction design and systems thinking.
            i believe great design is mostly invisible — it removes friction, surfaces the right
            information, and earns trust over time.
          </p>
          <p className="about-page-body">
            i&apos;ve worked across b2b saas, fintech, and healthtech — at startups where i was
            the first designer, and at scale-ups navigating rapid growth. what i enjoy most
            is working on problems that are genuinely hard to solve.
          </p>
          <p className="about-page-body">
            currently open to new opportunities. i work best in collaborative environments
            where design has a seat at the table from day one.
          </p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: 'var(--space-xl)' }}>
            <a href="mailto:hello@avugdragovic.com" className="hero-text-link">
              get in touch <ArrowUpRight size={13} style={{ display: 'inline', verticalAlign: 'middle' }} />
            </a>
            <a href="#" className="hero-text-link">download cv</a>
          </div>
        </div>
        <div className="about-page-photo">
          <span className="placeholder-label">Photo</span>
        </div>
      </div>

      <div className="experience-section">
        <h2 className="section-heading">where i&apos;ve worked</h2>
        <div className="experience-list">
          {[
            {
              period: '2023 — present',
              role: 'lead product designer',
              company: 'Nkomor Healthcare',
              desc: "leading design across three product lines. built the company's first design system, established a research practice, and grew the design team from one to three. shipped features used by 200k+ patients.",
            },
            {
              period: '2021 — 2023',
              role: 'product designer',
              company: 'MyNurse',
              desc: 'end-to-end design of the patient-facing mobile app and clinician dashboard. worked closely with nursing staff to understand clinical workflows and translate them into a usable digital experience.',
            },
            {
              period: '2019 — 2021',
              role: 'ux designer',
              company: 'freelance',
              desc: 'worked with early-stage startups across fintech, e-commerce, and productivity tools. projects ranged from 0→1 product design to usability audits and design system foundations.',
            },
            {
              period: '2017 — 2019',
              role: 'junior ui designer',
              company: 'Studio Flux',
              desc: "designed marketing sites, dashboards, and brand identities for agency clients. built a reusable component kit that became the studio's default starting point.",
            },
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
        <h2 className="section-heading">what i bring</h2>
        <div className="skills-grid-page">
          {[
            { title: 'design', items: ['product design', 'interaction design', 'ui design', 'design systems', 'prototyping'] },
            { title: 'research', items: ['user interviews', 'usability testing', 'survey design', 'analytics & heatmaps', 'workshop facilitation'] },
            { title: 'tools', items: ['figma', 'principle', 'maze / usertesting', 'hotjar / fullstory', 'notion / linear'] },
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
          <h2 className="contact-heading">let&apos;s work<br />together.</h2>
          <p className="contact-body">
            i&apos;m currently open to full-time roles and select freelance projects.
            if you&apos;re building something worth designing well, i&apos;d love to hear about it.
          </p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <a href="mailto:hello@avugdragovic.com" className="hero-text-link">
              hello@avugdragovic.com <ArrowUpRight size={13} style={{ display: 'inline', verticalAlign: 'middle' }} />
            </a>
            <a href="#" className="hero-text-link">linkedin</a>
          </div>
        </div>
        <div>
          <div style={{ border: '1px solid var(--border)', padding: 'var(--space-xl)', borderRadius: '1rem' }}>
            <div className="meta-label" style={{ marginBottom: 'var(--space-sm)' }}>currently based in</div>
            <div className="about-detail">Belgrade, Serbia — open to remote</div>
            <div className="meta-label" style={{ marginBottom: 'var(--space-sm)', marginTop: 'var(--space-lg)' }}>availability</div>
            <div className="about-detail about-detail--accent">available from april 2026</div>
            <div className="meta-label" style={{ marginBottom: 'var(--space-sm)', marginTop: 'var(--space-lg)' }}>languages</div>
            <div className="about-detail">english (fluent), serbian (native)</div>
          </div>
        </div>
      </div>
    </>
  )
}
