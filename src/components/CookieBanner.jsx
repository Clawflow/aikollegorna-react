import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'aikollegorna_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY)
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
    // Aktivera GA4 direkt
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', { analytics_storage: 'granted' })
    }
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner">
      <p>
        Vi använder Google Analytics för att förstå hur besökare använder vår webbplats.
        Inga personuppgifter delas.
        <br />
        <Link to="/integritetspolicy">Läs vår integritetspolicy</Link>
      </p>
      <div className="cookie-actions">
        <button className="cookie-accept" onClick={accept}>Acceptera</button>
        <button className="cookie-decline" onClick={decline}>Avböj</button>
      </div>
    </div>
  )
}
