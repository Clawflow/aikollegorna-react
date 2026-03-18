/**
 * ============================================================================
 * NewsletterSection — Visuellt imponerande signup-sektion
 * ============================================================================
 *
 * Två signup-formulär med glassmorphism-kort på mörk gradient-bakgrund:
 * 1. Nyhetsbrev — AI-automationsinsikter (max 2x/månad)
 * 2. Veckans AI — Kurerade AI-nyheter varje måndag
 *
 * Features:
 * - Real-time e-postvalidering med visuell feedback
 * - Loading spinner under inskickning
 * - Animerad success-checkmark
 * - Google Sheets backend (primär) med Formspree fallback
 * - Animerad gradient-bakgrund med floating orbs
 * - Glassmorphism-kort med hover-effekter
 * - Fullt responsiv (staplat på mobil)
 *
 * ============================================================================
 */

import { useState, useEffect, useRef } from 'react'

// ═══════════════════════════════════════════════════════════════════════════
// KONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

// Google Apps Script Web App URL — Byt ut efter deploy!
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/DIN_DEPLOY_URL_HAR/exec'

// Formspree fallback-URL:er (används om Google Sheets misslyckas)
const FORMSPREE_NEWSLETTER = 'https://formspree.io/f/newsletter-aikollegorna'
const FORMSPREE_AINYHETER  = 'https://formspree.io/f/ainyheter-aikollegorna'

// ═══════════════════════════════════════════════════════════════════════════
// HJÄLPFUNKTIONER
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Validerar e-postformat
 * @param {string} email
 * @returns {boolean}
 */
function validateEmail(email) {
  if (!email) return false
  const re = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/
  return re.test(email.trim())
}

// ═══════════════════════════════════════════════════════════════════════════
// ANIMATED CHECKMARK — SVG-animation vid success
// ═══════════════════════════════════════════════════════════════════════════

function AnimatedCheckmark() {
  return (
    <div className="nl2-checkmark-wrap">
      <svg className="nl2-checkmark-svg" viewBox="0 0 52 52">
        <circle className="nl2-checkmark-circle" cx="26" cy="26" r="25" fill="none" />
        <path className="nl2-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
      </svg>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════
// LOADING SPINNER — Animerad laddningsindikator
// ═══════════════════════════════════════════════════════════════════════════

function LoadingSpinner() {
  return (
    <div className="nl2-spinner">
      <div className="nl2-spinner-ring" />
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════
// NEWSLETTER CARD — Enskilt signup-kort med all logik
// ═══════════════════════════════════════════════════════════════════════════

function NewsletterCard({ icon, title, subtitle, features, type, placeholder, buttonText, smallText, delay }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | validating | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')
  const [touched, setTouched] = useState(false)
  const inputRef = useRef(null)

  // Real-time validering — körs när användaren har interagerat med fältet
  const isValid = validateEmail(email)
  const showError = touched && email.length > 0 && !isValid

  /**
   * Skickar signup till Google Sheets via Apps Script
   * Om det misslyckas, faller tillbaka till Formspree
   */
  async function handleSubmit(e) {
    e.preventDefault()
    setTouched(true)

    // Validera innan vi skickar
    if (!isValid) {
      setErrorMsg('Ange en giltig e-postadress')
      return
    }

    setStatus('submitting')
    setErrorMsg('')

    // ── Försök 1: Google Apps Script ──
    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          type: type,
          timestamp: new Date().toISOString(),
          source: 'hemsida-newsletter-section'
        }),
      })

      // Google Apps Script returnerar alltid 200 med redirect
      // Vi behöver kolla om vi fick ett parsbart svar
      let data
      try {
        data = await res.json()
      } catch {
        // Om vi inte kan parsa JSON, kan det vara CORS-redirect — försök med no-cors
        throw new Error('Kunde inte parsa svar')
      }

      if (data && data.success) {
        setStatus('success')
        setEmail('')
        setTouched(false)
        return
      }

      // Om servern sa error, kasta vidare
      throw new Error(data?.error || 'Servern returnerade error')

    } catch (primaryError) {
      console.warn('Google Sheets misslyckades, försöker Formspree:', primaryError.message)

      // ── Försök 2: Formspree fallback ──
      try {
        const fallbackUrl = type === 'newsletter' ? FORMSPREE_NEWSLETTER : FORMSPREE_AINYHETER
        const fallbackRes = await fetch(fallbackUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ email: email.trim() }),
        })

        if (fallbackRes.ok) {
          setStatus('success')
          setEmail('')
          setTouched(false)
          return
        }

        throw new Error('Formspree fallback misslyckades också')

      } catch (fallbackError) {
        console.error('Båda endpoints misslyckades:', fallbackError.message)
        setStatus('error')
        setErrorMsg('Något gick fel. Vänligen försök igen eller maila oss på hej@aikollegorna.se')
      }
    }
  }

  /**
   * Tillåter nytt försök efter fel
   */
  function handleRetry() {
    setStatus('idle')
    setErrorMsg('')
    setTimeout(() => inputRef.current?.focus(), 100)
  }

  return (
    <div className="nl2-card fade-up" style={{ transitionDelay: delay || '0s' }}>
      {/* Ikon och header */}
      <div className="nl2-card-icon">{icon}</div>
      <h3 className="nl2-card-title">{title}</h3>
      <p className="nl2-card-subtitle">{subtitle}</p>

      {/* Feature-lista */}
      {features && (
        <ul className="nl2-card-features">
          {features.map((f, i) => (
            <li key={i}>
              <span className="nl2-feature-dot" />
              {f}
            </li>
          ))}
        </ul>
      )}

      {/* ── Success State ── */}
      {status === 'success' ? (
        <div className="nl2-success-state">
          <AnimatedCheckmark />
          <p className="nl2-success-text">Tack! Du är anmäld</p>
          <p className="nl2-success-sub">Kolla din inkorg för bekräftelse.</p>
        </div>
      ) : (
        <>
          {/* ── Formulär ── */}
          <form className="nl2-form" onSubmit={handleSubmit} noValidate>
            <div className="nl2-input-wrap">
              <input
                ref={inputRef}
                type="email"
                required
                placeholder={placeholder || 'din@email.se'}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (errorMsg) setErrorMsg('')
                }}
                onBlur={() => setTouched(true)}
                className={`nl2-input ${showError ? 'nl2-input-error' : ''} ${touched && isValid ? 'nl2-input-valid' : ''}`}
                disabled={status === 'submitting'}
                aria-label="E-postadress"
                aria-describedby={showError ? 'email-error' : undefined}
              />
              {/* Validerings-ikon */}
              {touched && email.length > 0 && (
                <span className={`nl2-input-icon ${isValid ? 'valid' : 'invalid'}`}>
                  {isValid ? '✓' : '✕'}
                </span>
              )}
            </div>

            {/* Felmeddelande */}
            {(showError || errorMsg) && (
              <p id="email-error" className="nl2-error-msg">
                {errorMsg || 'Ange en giltig e-postadress'}
              </p>
            )}

            <button
              type="submit"
              className="nl2-submit-btn"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? (
                <span className="nl2-btn-loading">
                  <LoadingSpinner />
                  <span>Skickar...</span>
                </span>
              ) : (
                buttonText || 'Prenumerera'
              )}
            </button>
          </form>

          {/* Försök igen-knapp vid error */}
          {status === 'error' && (
            <button className="nl2-retry-btn" onClick={handleRetry}>
              Försök igen →
            </button>
          )}

          {/* Liten text */}
          <p className="nl2-small-text">{smallText}</p>
        </>
      )}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════
// NEWSLETTER SECTION — Huvudkomponent
// ═══════════════════════════════════════════════════════════════════════════

export default function NewsletterSection() {
  const sectionRef = useRef(null)

  // Fade-up animation med IntersectionObserver
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })

    const section = sectionRef.current
    if (section) {
      section.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    }

    return () => obs.disconnect()
  }, [])

  return (
    <section className="nl2-section" ref={sectionRef}>
      {/* Animerade bakgrundsorber */}
      <div className="nl2-bg-orbs">
        <div className="nl2-orb nl2-orb-1" />
        <div className="nl2-orb nl2-orb-2" />
        <div className="nl2-orb nl2-orb-3" />
      </div>

      <div className="nl2-container">
        {/* Sektionsrubrik */}
        <div className="nl2-header fade-up">
          <p className="nl2-section-label">Nyhetsbrev</p>
          <h2 className="nl2-section-title">
            Håll dig<br /><em>uppdaterad</em>
          </h2>
          <p className="nl2-section-subtitle">
            Få de senaste insikterna om AI-automatisering direkt i din inkorg.
            Kurerat för svenska företagare som vill ligga steget före.
          </p>
          {/* Social proof counter */}
          <div className="nl2-social-proof">
            <div className="nl2-avatars">
              <span className="nl2-avatar-dot" style={{ background: '#6366f1' }}>AK</span>
              <span className="nl2-avatar-dot" style={{ background: '#8b5cf6' }}>SL</span>
              <span className="nl2-avatar-dot" style={{ background: '#a78bfa' }}>MR</span>
              <span className="nl2-avatar-dot" style={{ background: '#7c3aed' }}>JB</span>
            </div>
            <span className="nl2-proof-text">
              Gå med <strong>240+</strong> svenska företagare
            </span>
          </div>
        </div>

        {/* Kort-grid */}
        <div className="nl2-grid">
          <NewsletterCard
            icon="📬"
            title="Nyhetsbrev"
            subtitle="Insikter om AI-automatisering, case studies och praktiska tips för svenska företag."
            features={[
              'AI-automations case studies',
              'Praktiska implementeringstips',
              'ROI-analyser och branschinsikter'
            ]}
            type="newsletter"
            placeholder="din@email.se"
            buttonText="Prenumerera gratis"
            smallText="Max 2 gånger per månad. Avprenumerera när som helst."
            delay="0.1s"
          />

          <NewsletterCard
            icon="🤖"
            title="Veckans AI"
            subtitle="De viktigaste AI-nyheterna samlade och kurerade specifikt för svenska företagare."
            features={[
              'Kurerade AI-nyheter varje vecka',
              'Relevanta verktyg och lanseringar',
              'Trender som påverkar din bransch'
            ]}
            type="ainyheter"
            placeholder="din@email.se"
            buttonText="Få AI-nyheter"
            smallText="Varje måndag morgon. Ingen spam, bara värde."
            delay="0.2s"
          />
        </div>
      </div>
    </section>
  )
}
