import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Kollegorna
            </span>
            <p className="mt-3 text-sm text-gray-400">
              Din smartaste medarbetare. AI-agenter som automatiserar din verksamhet.
            </p>
          </div>

          {/* Tjänster */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Tjänster</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tjanster" className="hover:text-white transition">AI-medarbetare</Link></li>
              <li><Link to="/tjanster" className="hover:text-white transition">Automation</Link></li>
              <li><Link to="/tjanster" className="hover:text-white transition">Integration</Link></li>
            </ul>
          </div>

          {/* Företaget */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Företaget</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/om-oss" className="hover:text-white transition">Om oss</Link></li>
              <li><Link to="/priser" className="hover:text-white transition">Priser</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/kontakt" className="hover:text-white transition">Kontakta oss</Link></li>
              <li><a href="mailto:hej@aikollegorna.se" className="hover:text-white transition">hej@aikollegorna.se</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-500">
          &copy; 2026 AI Kollegorna AB. Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
  )
}
