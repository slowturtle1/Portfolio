import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const b = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export type Project = {
  slug: string
  title: string
  tag: string
  tagline: string
  meta: string
  status: string
  href: string
  image?: string
  imageAlt?: string
  imageTodo?: string
}

export const projects: Project[] = [
  {
    slug: 'cow-compass',
    title: 'Cow Compass',
    tag: 'agriculture · offline-first · mobile',
    tagline:
      'Virtual fencing for farmers who need to know where their cattle are, on a phone, in a field, in the sun, with the signal coming and going.',
    meta: 'Concept',
    status: 'concept project',
    href: '/work/cow-compass',
    imageTodo:
      '[SCREEN NEEDED: Shot 01 — the herd view in daylight treatment. One phone screen, flat, real proportions, plain background.]',
  },
  {
    slug: 'dpr-qa-tool',
    title: 'QA Tool',
    tag: 'internal tooling · surveying',
    tagline:
      'A drawing QA tool I designed and prototyped inside a building consultancy, and the reasons it did not survive there.',
    meta: 'Prototype',
    status: 'prototype, not adopted',
    href: '/work/dpr-qa-tool',
    imageTodo:
      '[SCREEN NEEDED: Shot 05 — before and after side by side. Outlook thread left, single screen right. Redact all client names.]',
  },
  {
    slug: 'careloop',
    title: 'CareLoop',
    tag: 'healthcare · hackathon · voice ui',
    tagline:
      'Voice-first symptom journaling, designed and built in twenty-four hours. Won the Accurx Challenge at the HuddleHive NHS Hackathon.',
    meta: 'HuddleHive NHS Hackathon, March 2026',
    status: '24-hour hackathon',
    href: '/work/careloop',
    image: '/careloop-hero.png',
    imageAlt:
      'CareLoop voice recording screen — NOTE: this image shows a phone in a hand, which contradicts the no-device-frames rule. Flag for replacement.',
  },
  {
    slug: 'notice',
    title: 'Notice',
    tag: 'civic tech · hackathon · planning',
    tagline:
      'A civic tool for planning applications, built in twenty-four hours at the Wise Hackathon. Placed in the top six of nineteen teams.',
    meta: 'Wise Hackathon, June 2026',
    status: '24-hour hackathon',
    href: '/work/notice',
    imageTodo:
      '[SCREEN NEEDED: Shot 10 — the main view annotated with decisions. One image only.]',
  },
]

export default function WorkCards({ wide = false }: { wide?: boolean }) {
  return (
    <div className={`wgrid${wide ? ' wgrid--wide' : ''}`}>
      {projects.map((p) => (
        <Link key={p.slug} href={p.href} className="wcard">
          <div className={`wcard-media${p.image ? '' : ' wcard-media--slot'}`}>
            {p.image ? (
              <img src={`${b}${p.image}`} alt={p.imageAlt ?? p.title} loading="lazy" />
            ) : (
              <span>{p.imageTodo}</span>
            )}
          </div>
          <div className="wcard-body">
            <span className="wcard-tag">{p.tag}</span>
            <h3 className="wcard-title">{p.title}</h3>
            <p className="wcard-tagline">{p.tagline}</p>
            <div className="wcard-status">{p.status}</div>
            <p className="wcard-meta">{p.meta}</p>
            <span className="wcard-cta">
              Read the case study
              <ArrowUpRight size={14} strokeWidth={2} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
