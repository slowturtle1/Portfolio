import { Mail, Linkedin, Dribbble } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-name">Aleksandra Vugdragovic</span>
      <p className="footer-copy">Product Designer — Available for new projects</p>
      <div className="footer-links">
        <a href="mailto:hello@avugdragovic.com" aria-label="Email"><Mail size={18} strokeWidth={1.75} /></a>
        <a href="#" aria-label="LinkedIn"><Linkedin size={18} strokeWidth={1.75} /></a>
        <a href="#" aria-label="Dribbble"><Dribbble size={18} strokeWidth={1.75} /></a>
      </div>
    </footer>
  )
}
