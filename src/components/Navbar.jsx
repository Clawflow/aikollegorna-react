import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const sentinelRef = useRef(null)

  useEffect(() => {
    // Dark nav when hero is visible
    const sentinel = document.getElementById('hero-sentinel')
    if (!sentinel) return
    const obs = new IntersectionObserver(([entry]) => {
      setDark(entry.isIntersecting)
    }, { threshold: 0, rootMargin: '-60px 0px 0px 0px' })
    obs.observe(sentinel)
    setDark(true) // default dark on pages with hero
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <nav className={`site-nav${dark ? ' dark-nav' : ''}`}>
        <Link to="/" className="nav-logo">AI <span>kollegorna</span></Link>
        <ul className="nav-links">
          <li><Link to="/tjanster">Tjänster</Link></li>
          <li><Link to="/om-oss">Om oss</Link></li>
          <li><Link to="/priser">Priser</Link></li>
          <li><Link to="/kontakt">Kontakt</Link></li>
        </ul>
        <a href="https://clawflow.github.io/agent-configurator/" className="nav-btn" target="_blank" rel="noopener noreferrer">Konfigurera agent →</a>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Meny">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <Link to="/" onClick={() => setOpen(false)}>Hem</Link>
        <Link to="/tjanster" onClick={() => setOpen(false)}>Tjänster</Link>
        <Link to="/om-oss" onClick={() => setOpen(false)}>Om oss</Link>
        <Link to="/priser" onClick={() => setOpen(false)}>Priser</Link>
        <Link to="/kontakt" onClick={() => setOpen(false)}>Kontakt</Link>
        <a href="https://clawflow.github.io/agent-configurator/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Konfigurera agent →</a>
      </div>
    </>
  )
}
