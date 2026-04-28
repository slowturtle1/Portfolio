export default function Footer() {
  return (
    <footer className="footer-v2">
      <div className="footer-v2-inner">
        <span className="footer-v2-logo">av</span>
        <p className="footer-v2-copy">
          &copy; {new Date().getFullYear()} Aleksandra Vugdragovic. All rights reserved.
        </p>
        <div className="footer-v2-links">
          {['Dribbble', 'LinkedIn', 'Twitter'].map((s) => (
            <a key={s} href="#">{s}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
