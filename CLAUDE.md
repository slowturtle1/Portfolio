# Portfolio — Claude Instructions

## Who I am
Product Designer. Building a personal portfolio site.

## Design System: Swiss Glass
The entire portfolio follows the **Swiss Glass** aesthetic — Swiss/International Typographic Style fused with Glassmorphism.

**Swiss principles:**
- Strong typographic grid, strict alignment
- Generous whitespace — use it aggressively
- Monochrome-first palette, max 1 accent color
- Every element must serve a purpose — no decorative noise
- Clean sans-serif type (Inter or system-ui), tight tracking on headings

**Glassmorphism principles:**
- Frosted-glass panels: `backdrop-filter: blur(...)` + semi-transparent backgrounds
- Subtle light border on glass edges (e.g. `1px solid rgba(255,255,255,0.15)`)
- Layered depth — elements float above a dark or blurred background
- Shadows are soft and diffuse, not hard

Full style guide: `C:\Users\igorj\Desktop\aca\Claude Code\STYLE_GUIDE.md`

## Projects
- Landing page
- 3 main case studies
- 2 playground projects
- About Me section

## Tech Stack
- **Current static site**: HTML + CSS + JS in `c:\Users\igorj\Coding\Portfolio\`
- **Next.js version (WIP)**: `c:\Users\igorj\Coding\portfolio-next\` — TypeScript, Next.js App Router, no Tailwind, CSS modules

## Key conventions
- No Tailwind — use CSS custom properties and CSS modules
- Prefer editing existing files over creating new ones
- Keep markup semantic and accessible
- Always check WCAG AA contrast on glassmorphism panels

## Available slash commands (skills)
| Command | What it does |
|---|---|
| `/design-review [page]` | Audit a page against Swiss Glass principles |
| `/figma [url]` | Pull a Figma design and implement it |
| `/new-case-study [name]` | Scaffold a new project case study page |
| `/a11y [page]` | Full accessibility audit |
| `/typography [target]` | Review and fix typography to Swiss standards |

## Git workflow
- Branch: `master`
- After every change: commit and push directly to `master`
- Command: `git push origin master`

## Typography decisions (audited 2026-03-12)
- **Label size**: all labels/tags unified to `0.7rem` — applies to `.label`, `.tag`, `.placeholder-label`, `.skills-title`, `.meta-label`, `.case-number`, `.next-project-label`, `.skill-group-title`, `.project-number`
- **Sub-body size**: `.case-body` and `.about-body` both set to `0.875rem` (was 0.925–0.975rem — too close to body `1rem`)
- **Inline styles**: contact card details in `about/page.tsx` extracted to `.about-detail` / `.about-detail--accent` CSS classes
- **Scale in use**: `0.7` / `0.75` / `0.8` / `0.875` / `1` / `1.2` / `1.4–1.6` / `clamp(1.8–3.2)` / `clamp(2.8–8)rem`

## Notes
- MCP Figma integration is active — can read Figma files directly
- User prefers concise responses — skip summaries, get to the point
