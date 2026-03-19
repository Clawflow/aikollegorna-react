/**
 * ============================================================================
 * NewsletterSection — Premium 2-kolumns layout
 * ============================================================================
 *
 * Kolumn 1: Nyhetsbrev (lila accent)
 * Kolumn 2: Veckans AI-nyheter (blå accent)
 *
 * Kontrollerad React-komponent med useState.
 * Mailto-action tills Formspree är fixat.
 * ============================================================================
 */

import { useState, useEffect, useRef } from 'react'

/* ─── Enskilt newsletter-kort ─── */
function NewsletterCard({ label, labelClass, title, subtitle, placeholder, buttonText, buttonClass, note, mailtoSubject }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) return

    // Öppna mailto med subject och e-post i body
    const mailtoUrl = `mailto:hej@aikollegorna.se?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent('E-post: ' + email.trim())}`
    window.location.href = mailtoUrl

    setSubmitted(true)
    setEmail('')
  }

  return (
    <div className="nl2-card fade-up">
      <span className={`nl2-card-label ${labelClass}`}>{label}</span>
      <h3>{title}</h3>
      <p>{subtitle}</p>

      {submitted ? (
        <p className="nl2-success">Tack! Kolla din e-postklient.</p>
      ) : (
        <form className="nl2-form" onSubmit={handleSubmit} noValidate>
          <input
            type="email"
            className="nl2-input"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="E-postadress"
          />
          <button type="submit" className={buttonClass}>
            {buttonText}
          </button>
        </form>
      )}

      {!submitted && <p className="nl2-note">{note}</p>}
    </div>
  )
}

/* ─── Huvudkomponent ─── */
export default function NewsletterSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = sectionRef.current
    if (section) {
      section.querySelectorAll('.fade-up').forEach((el) => obs.observe(el))
    }

    return () => obs.disconnect()
  }, [])

  return (
    <section className="nl2-section" ref={sectionRef}>
      <div className="nl2-inner">
        {/* Sektionsrubrik */}
        <div className="nl2-header fade-up">
          <h2>Håll dig uppdaterad</h2>
          <p>Få de senaste insikterna om AI-automatisering direkt i din inkorg.</p>
        </div>

        {/* 2-kolumns grid */}
        <div className="nl2-grid">
          {/* Kolumn 1 — Nyhetsbrev */}
          <NewsletterCard
            label="Nyhetsbrev"
            labelClass="purple"
            title="Månadsnytt från AI Kollegorna"
            subtitle="Kundcase, tips om AI-automatisering och branschnyheter. En gång i månaden, direkt till din inkorg."
            placeholder="din@email.se"
            buttonText="Prenumerera →"
            buttonClass="nl2-btn-purple"
            note="&#128274; Ingen spam. Avprenumerera när du vill."
            mailtoSubject="Nyhetsbrev-prenumeration"
          />

          {/* Kolumn 2 — Veckans AI */}
          <NewsletterCard
            label="Veckans AI"
            labelClass="blue"
            title="Veckans AI-nyheter"
            subtitle="De viktigaste AI-nyheterna för svenska företagare. Kurerat varje fredag — vad du faktiskt behöver veta."
            placeholder="din@email.se"
            buttonText="Håll mig uppdaterad →"
            buttonClass="nl2-btn-blue"
            note="&#128240; Varje fredag. Gratis."
            mailtoSubject="AI-nyheter-prenumeration"
          />
        </div>
      </div>
    </section>
  )
}
