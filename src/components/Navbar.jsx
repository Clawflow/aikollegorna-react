import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const branches = [
  { emoji: '🏢', label: 'Fastighet', to: '/fastighet' },
  { emoji: '📊', label: 'Redovisning', to: '/redovisning' },
  { emoji: '🛒', label: 'E-handel', to: '/ehandel' },
  { emoji: '⚖️', label: 'Juridik', to: '/juridik' },
]

const resurser = [
  { emoji: '🔍', label: 'AI-revision', to: '/ai-revision', isNew: true },
  { emoji: '🎬', label: 'Demo', to: '/demo' },
  { emoji: '📝', label: 'Blogg', to: '/blogg' },
  { emoji: '📂', label: 'Fallstudier', to: '/fallstudier' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [branchOpen, setBranchOpen] = useState(false)
  const [resurserOpen, setResurserOpen] = useState(false)
  const dropdownRef = useRef(null)
  const resurserRef = useRef(null)

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

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setBranchOpen(false)
      }
      if (resurserRef.current && !resurserRef.current.contains(e.target)) {
        setResurserOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <>
      <nav className={`site-nav${dark ? ' dark-nav' : ''}`}>
        <Link to="/" className="nav-logo">AI <span>kollegorna</span></Link>
        <ul className="nav-links">
          <li><Link to="/tjanster">Tjänster</Link></li>
          <li className="nav-dropdown" ref={dropdownRef} onMouseEnter={() => setBranchOpen(true)} onMouseLeave={() => setBranchOpen(false)}>
            <button className="nav-dropdown-trigger" onClick={() => setBranchOpen(!branchOpen)}>
              Branscher
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: 4, transition: 'transform .2s', transform: branchOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {branchOpen && (
              <div className="nav-dropdown-menu">
                {branches.map(b => (
                  <Link key={b.to} to={b.to} className="nav-dropdown-item" onClick={() => setBranchOpen(false)}>
                    <span className="nav-dropdown-emoji">{b.emoji}</span>
                    {b.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li className="nav-dropdown" ref={resurserRef} onMouseEnter={() => setResurserOpen(true)} onMouseLeave={() => setResurserOpen(false)}>
            <button className="nav-dropdown-trigger" onClick={() => setResurserOpen(!resurserOpen)}>
              Resurser
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: 4, transition: 'transform .2s', transform: resurserOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {resurserOpen && (
              <div className="nav-dropdown-menu">
                {resurser.map(r => (
                  <Link key={r.to} to={r.to} className="nav-dropdown-item" onClick={() => setResurserOpen(false)}>
                    <span className="nav-dropdown-emoji">{r.emoji}</span>
                    {r.label}
                    {r.isNew && <span className="nav-new-badge">NY</span>}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li><Link to="/om-oss">Om oss</Link></li>
          <li><Link to="/priser">Priser</Link></li>
          <li><Link to="/kontakt">Kontakt</Link></li>
        </ul>
        <Link to="/demo" className="nav-demo-btn">Se demo →</Link>
        <a href="https://clawflow.github.io/agent-configurator/" className="nav-btn" target="_blank" rel="noopener noreferrer">Konfigurera agent →</a>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Meny">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <Link to="/" onClick={() => setOpen(false)}>Hem</Link>
        <Link to="/tjanster" onClick={() => setOpen(false)}>Tjänster</Link>
        <div className="mobile-menu-group">
          <span className="mobile-menu-label">Branscher</span>
          {branches.map(b => (
            <Link key={b.to} to={b.to} className="mobile-menu-branch" onClick={() => setOpen(false)}>
              {b.emoji} {b.label}
            </Link>
          ))}
        </div>
        <div className="mobile-menu-group">
          <span className="mobile-menu-label">Resurser</span>
          {resurser.map(r => (
            <Link key={r.to} to={r.to} className="mobile-menu-branch" onClick={() => setOpen(false)}>
              {r.emoji} {r.label} {r.isNew && <span className="nav-new-badge" style={{ marginLeft: 6 }}>NY</span>}
            </Link>
          ))}
        </div>
        <Link to="/om-oss" onClick={() => setOpen(false)}>Om oss</Link>
        <Link to="/priser" onClick={() => setOpen(false)}>Priser</Link>
        <Link to="/kontakt" onClick={() => setOpen(false)}>Kontakt</Link>
        <Link to="/demo" onClick={() => setOpen(false)} style={{ color: '#7C3AED', fontWeight: 700 }}>Se demo →</Link>
        <a href="https://clawflow.github.io/agent-configurator/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Konfigurera agent →</a>
      </div>
    </>
  )
}
