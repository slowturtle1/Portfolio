import { Mail, Linkedin, Dribbble } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span className="footer-name">Igor J</span>
        <p className="footer-copy">Product Designer · Belgrade, Serbia · Open to remote</p>
      </div>
      <div className="footer-links">
        <a href="mailto:hello@igorj.com" aria-label="Email"><Mail size={17} strokeWidth={1.75} /></a>
        <a href="#" aria-label="LinkedIn"><Linkedin size={17} strokeWidth={1.75} /></a>
        <a href="#" aria-label="Dribbble"><Dribbble size={17} strokeWidth={1.75} /></a>
      </div>
    </footer>
  )
}
