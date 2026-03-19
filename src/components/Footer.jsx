import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <div className="footer-logo">AI <span>kollegorna</span></div>
          <p className="footer-tagline">En Mac Mini på ert kontor — färdiginstallerad med AI som jobbar åt er dygnet runt. Säkert, lokalt, alltid på.</p>
          <div className="footer-newsletter">
            <input type="email" placeholder="Din e-post..." />
            <button type="button">Prenumerera</button>
          </div>
        </div>
        <div className="footer-col">
          <h5>Tjänster</h5>
          <ul>
            <li><Link to="/tjanster">Säljaren</Link></li>
            <li><Link to="/tjanster">Marknadsassistenten</Link></li>
            <li><Link to="/tjanster">Supportagenten</Link></li>
            <li><Link to="/case">Fallstudie: Wristbuddys</Link></li>
            <li><Link to="/fallstudier">Alla fallstudier</Link></li>
            <li><Link to="/blogg">Blogg</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Företag</h5>
          <ul>
            <li><Link to="/om-oss">Om oss</Link></li>
            <li><Link to="/priser">Priser</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
            <li><Link to="/integritetspolicy">Integritetspolicy</Link></li>
            <li><Link to="/villkor">Allmänna villkor</Link></li>
            <li><a href="https://clawflow.github.io/agent-configurator/" target="_blank" rel="noopener noreferrer">Agent Configurator</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Kontakt</h5>
          <ul>
            <li><a href="mailto:hej@aikollegorna.se">hej@aikollegorna.se</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>AI kollegorna AB · © 2026</span>
        <div className="footer-socials">
          <Link to="/integritetspolicy">Integritetspolicy</Link>
          <Link to="/villkor">Villkor</Link>
        </div>
      </div>
    </footer>
  )
}
