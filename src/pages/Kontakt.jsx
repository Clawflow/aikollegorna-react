/**
 * ============================================================================
 * Kontakt — Kontaktsida med riktigt formulär
 * ============================================================================
 *
 * Features:
 * - Validering av alla fält (namn, e-post, företag, meddelande)
 * - Skickar till Google Apps Script endpoint
 * - Formspree fallback om Google Sheets misslyckas
 * - Loading state med spinner
 * - Success-animation med animated checkmark
 * - Error state med retry
 * - Auto-focus på första fältet
 * - Logisk tab-ordning
 * - Enter-tangent skickar formuläret
 * - Character count på meddelande (max 1000)
 * - Responsiv layout (2-kolumner → 1 kolumn)
 *
 * ============================================================================
 */

import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

// ═══════════════════════════════════════════════════════════════════════════
// KONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

// Google Apps Script Web App URL — Byt ut efter deploy!
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/DIN_DEPLOY_URL_HAR/exec'

// Formspree fallback
const FORMSPREE_KONTAKT = 'https://formspree.io/f/kontakt-aikollegorna'

// Max tecken i meddelande
const MESSAGE_MAX_LENGTH = 1000

// ═══════════════════════════════════════════════════════════════════════════
// HOOK: Fade-up animation
// ═══════════════════════════════════════════════════════════════════════════

function useFadeUp() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

// ═══════════════════════════════════════════════════════════════════════════
// VALIDERING
// ═══════════════════════════════════════════════════════════════════════════

function validateEmail(email) {
  if (!email) return false
  const re = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/
  return re.test(email.trim())
}

function validateForm(form) {
  const errors = {}
  if (!form.fname.trim()) errors.fname = 'Förnamn krävs'
  if (!form.lname.trim()) errors.lname = 'Efternamn krävs'
  if (!form.email.trim()) {
    errors.email = 'E-post krävs'
  } else if (!validateEmail(form.email)) {
    errors.email = 'Ange en giltig e-postadress'
  }
  if (!form.company.trim()) errors.company = 'Företagsnamn krävs'
  if (form.message.length > MESSAGE_MAX_LENGTH) {
    errors.message = `Max ${MESSAGE_MAX_LENGTH} tecken (${form.message.length} nu)`
  }
  return errors
}

// ═══════════════════════════════════════════════════════════════════════════
// INLINE STYLES — Matchar befintlig design
// ═══════════════════════════════════════════════════════════════════════════

const inp = {
  width: '100%',
  background: 'var(--white)',
  border: '1px solid var(--border)',
  borderRadius: 8,
  padding: '12px 16px',
  fontSize: 14,
  fontFamily: 'var(--sans)',
  color: 'var(--ink)',
  outline: 'none',
  transition: 'border-color .2s, box-shadow .2s'
}

const inpError = {
  ...inp,
  borderColor: '#dc2626',
  boxShadow: '0 0 0 3px rgba(220,38,38,0.1)'
}

const inpFocus = {
  borderColor: 'var(--blue)',
  boxShadow: '0 0 0 3px rgba(0,71,255,0.1)'
}

const labelStyle = {
  display: 'block',
  fontSize: 12,
  fontWeight: 600,
  marginBottom: 6,
  color: 'var(--muted)',
  textTransform: 'uppercase',
  letterSpacing: '.08em'
}

// ═══════════════════════════════════════════════════════════════════════════
// KONTAKT-KOMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export default function Kontakt() {
  useFadeUp()

  // SEO: Sidtitel och meta-description
  useEffect(() => {
    document.title = 'Kontakt — Boka ett samtal | AI kollegorna'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Kontakta AI kollegorna. Boka ett kostnadsfritt 30-minuterssamtal. Vi identifierar rätt AI-use-case för ert företag och levererar på 2 veckor.')
  }, [])

  const [form, setForm] = useState({
    fname: '', lname: '', email: '', company: '', area: '', message: ''
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [serverError, setServerError] = useState('')
  const formRef = useRef(null)
  const fnameRef = useRef(null)

  // Auto-focus på förnamn-fältet när sidan laddas
  useEffect(() => {
    // Vänta lite så att sidan hinner rendera färdigt
    const timer = setTimeout(() => {
      fnameRef.current?.focus()
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  /**
   * Uppdatera ett fält och rensa eventuellt fel
   */
  function updateField(key, value) {
    // Begränsa meddelandefältet till max tecken
    if (key === 'message' && value.length > MESSAGE_MAX_LENGTH) {
      return // Tillåt inte fler tecken
    }
    setForm(prev => ({ ...prev, [key]: value }))
    // Rensa felmeddelande när användaren börjar skriva
    if (errors[key]) {
      setErrors(prev => {
        const next = { ...prev }
        delete next[key]
        return next
      })
    }
  }

  /**
   * Markera fält som "touched" vid blur
   */
  function handleBlur(key) {
    setTouched(prev => ({ ...prev, [key]: true }))
    // Validera enskilt fält vid blur
    const fieldErrors = validateForm(form)
    if (fieldErrors[key]) {
      setErrors(prev => ({ ...prev, [key]: fieldErrors[key] }))
    }
  }

  /**
   * Skicka formuläret
   */
  async function handleSubmit(e) {
    e.preventDefault()

    // Validera alla fält
    const formErrors = validateForm(form)
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      setTouched({ fname: true, lname: true, email: true, company: true, message: true })
      return
    }

    setStatus('submitting')
    setServerError('')

    // ── Försök 1: Google Apps Script ──
    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'kontakt',
          email: form.email.trim(),
          fname: form.fname.trim(),
          lname: form.lname.trim(),
          company: form.company.trim(),
          area: form.area,
          message: form.message.trim(),
          timestamp: new Date().toISOString(),
          source: 'hemsida-kontakt'
        }),
      })

      let data
      try {
        data = await res.json()
      } catch {
        throw new Error('Kunde inte parsa svar')
      }

      if (data && data.success) {
        setStatus('success')
        return
      }

      throw new Error(data?.error || 'Servern returnerade error')

    } catch (primaryError) {
      console.warn('Google Sheets misslyckades, försöker Formspree:', primaryError.message)

      // ── Försök 2: Formspree fallback ──
      try {
        const fallbackRes = await fetch(FORMSPREE_KONTAKT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: `${form.fname} ${form.lname}`,
            email: form.email.trim(),
            company: form.company.trim(),
            area: form.area,
            message: form.message.trim()
          }),
        })

        if (fallbackRes.ok) {
          setStatus('success')
          return
        }

        throw new Error('Formspree fallback misslyckades')

      } catch (fallbackError) {
        console.error('Båda endpoints misslyckades:', fallbackError.message)
        setStatus('error')
        setServerError('Kunde inte skicka formuläret. Vänligen maila oss direkt på hej@aikollegorna.se')
      }
    }
  }

  /**
   * Återställ formulär för nytt försök
   */
  function handleRetry() {
    setStatus('idle')
    setServerError('')
  }

  // Renderar ett inputfält med validering och logisk tab-ordning
  function renderField(key, label, type, placeholder, options = {}) {
    const hasError = touched[key] && errors[key]
    const currentStyle = hasError ? inpError : inp

    return (
      <div style={{ marginBottom: 16, ...options.wrapStyle }}>
        <label style={labelStyle} htmlFor={`kontakt-${key}`}>{label}</label>
        {options.textarea ? (
          <div style={{ position: 'relative' }}>
            <textarea
              id={`kontakt-${key}`}
              style={{ ...currentStyle, resize: 'none', height: 100 }}
              placeholder={placeholder}
              value={form[key]}
              onChange={e => updateField(key, e.target.value)}
              onBlur={() => handleBlur(key)}
              onFocus={e => { e.target.style.borderColor = inpFocus.borderColor; e.target.style.boxShadow = inpFocus.boxShadow }}
              disabled={status === 'submitting'}
              tabIndex={options.tabIndex}
              maxLength={MESSAGE_MAX_LENGTH}
            />
            {/* Character count */}
            <div style={{
              position: 'absolute',
              bottom: 8,
              right: 12,
              fontSize: 11,
              fontWeight: 500,
              color: form.message.length > MESSAGE_MAX_LENGTH * 0.9 ? '#dc2626' : 'var(--muted)',
              opacity: form.message.length > 0 ? 1 : 0,
              transition: 'opacity .2s, color .2s',
              pointerEvents: 'none'
            }}>
              {form.message.length}/{MESSAGE_MAX_LENGTH}
            </div>
          </div>
        ) : options.select ? (
          <select
            id={`kontakt-${key}`}
            style={currentStyle}
            value={form[key]}
            onChange={e => updateField(key, e.target.value)}
            onBlur={() => handleBlur(key)}
            disabled={status === 'submitting'}
            tabIndex={options.tabIndex}
          >
            <option value="">Välj ett område...</option>
            <option>Sälj & leadsgenerering</option>
            <option>Marknadsföring & content</option>
            <option>Kundsupport</option>
            <option>Administration</option>
            <option>Flera områden</option>
          </select>
        ) : (
          <input
            id={`kontakt-${key}`}
            ref={key === 'fname' ? fnameRef : undefined}
            style={currentStyle}
            type={type}
            placeholder={placeholder}
            value={form[key]}
            onChange={e => updateField(key, e.target.value)}
            onBlur={() => handleBlur(key)}
            onFocus={e => { e.target.style.borderColor = inpFocus.borderColor; e.target.style.boxShadow = inpFocus.boxShadow }}
            disabled={status === 'submitting'}
            tabIndex={options.tabIndex}
            autoComplete={options.autoComplete}
          />
        )}
        {hasError && (
          <p style={{ fontSize: 12, color: '#dc2626', marginTop: 4, fontWeight: 500 }}>
            {errors[key]}
          </p>
        )}
      </div>
    )
  }

  return (
    <>
      <div className="kontakt-layout">
        {/* ── Vänsterkolumn — Kontaktinfo ── */}
        <div>
          <p className="fade-up" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>
            Kontakta oss
          </p>
          <h1 className="fade-up" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px,4.5vw,60px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, marginBottom: 20 }}>
            Låt oss prata<br /><em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>om ditt företag.</em>
          </h1>
          <p className="fade-up" style={{ fontSize: 17, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 40 }}>
            Boka ett kostnadsfritt 30-minuterssamtal. Vi lyssnar på era utmaningar, identifierar rätt use-case och berättar hur en AI-medarbetare på en Mac Mini kan hjälpa.
          </p>

          {/* Kontaktinfo-block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { icon: '✉️', label: 'E-post', val: <a href="mailto:hej@aikollegorna.se" style={{ color: 'var(--blue)', textDecoration: 'none' }}>hej@aikollegorna.se</a> },
              { icon: '📍', label: 'Plats', val: 'Sverige — vi levererar till hela landet' },
              { icon: '⏱️', label: 'Svarstid', val: 'Inom 24 timmar på vardagar' },
              { icon: '📦', label: 'Leveranstid', val: 'Mac Mini installerad inom 14 dagar' },
            ].map(r => (
              <div key={r.label} className="fade-up" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 36, height: 36, background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>
                  {r.icon}
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>
                    {r.label}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 500 }}>{r.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Högerkolumn — Formulär ── */}
        <div className="fade-up" style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 20, padding: 40 }}>

          {/* ── Success State ── */}
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div className="kontakt-success-check">
                <svg viewBox="0 0 52 52" width="64" height="64">
                  <circle cx="26" cy="26" r="25" fill="none" stroke="#16a34a" strokeWidth="2" />
                  <path fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 700, marginBottom: 8, marginTop: 20 }}>
                Tack för din förfrågan!
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: 15, marginBottom: 24 }}>
                Vi hör av oss inom 24 timmar.
              </p>
              <button
                onClick={() => { setStatus('idle'); setForm({ fname: '', lname: '', email: '', company: '', area: '', message: '' }); setTouched({}); setErrors({}) }}
                style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 8, padding: '10px 24px', fontSize: 14, fontWeight: 500, cursor: 'pointer', color: 'var(--muted)', fontFamily: 'var(--sans)' }}
              >
                Skicka en till förfrågan
              </button>
            </div>
          ) : (
            <>
              {/* ── Formulär ── */}
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 700, letterSpacing: -1, marginBottom: 28 }}>
                Boka ett samtal
              </h2>

              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                {/* Namn-rad (2 kolumner) — Tab index 1 & 2 */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 0 }}>
                  {renderField('fname', 'Förnamn', 'text', 'Erik', { tabIndex: 1, autoComplete: 'given-name' })}
                  {renderField('lname', 'Efternamn', 'text', 'Svensson', { tabIndex: 2, autoComplete: 'family-name' })}
                </div>

                {renderField('email', 'E-post', 'email', 'erik@foretaget.se', { tabIndex: 3, autoComplete: 'email' })}
                {renderField('company', 'Företag', 'text', 'Ditt företags namn', { tabIndex: 4, autoComplete: 'organization' })}
                {renderField('area', 'Vad vill du automatisera?', 'text', '', { select: true, tabIndex: 5 })}
                {renderField('message', 'Meddelande (valfritt)', 'text', 'Berätta kort om er situation och vilka utmaningar ni vill lösa...', { textarea: true, tabIndex: 6 })}

                {/* Server-felmeddelande */}
                {serverError && (
                  <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '12px 16px', marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ fontSize: 13, color: '#dc2626', margin: 0 }}>{serverError}</p>
                    <button onClick={handleRetry} type="button" style={{ background: 'none', border: 'none', color: '#dc2626', fontWeight: 600, fontSize: 13, cursor: 'pointer', whiteSpace: 'nowrap', marginLeft: 12 }}>
                      Försök igen
                    </button>
                  </div>
                )}

                {/* Submit-knapp — Tab index 7, Enter-tangent skickar formuläret naturligt via form submit */}
                <button
                  type="submit"
                  tabIndex={7}
                  disabled={status === 'submitting'}
                  style={{
                    width: '100%',
                    background: status === 'submitting' ? 'var(--muted)' : 'var(--ink)',
                    color: 'var(--white)',
                    border: 'none',
                    borderRadius: 8,
                    padding: '14px 28px',
                    fontSize: 15,
                    fontWeight: 600,
                    fontFamily: 'var(--sans)',
                    cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                    transition: 'opacity .2s, background .2s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8
                  }}
                  onMouseEnter={e => { if (status !== 'submitting') e.target.style.opacity = '.8' }}
                  onMouseLeave={e => e.target.style.opacity = '1'}
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="kontakt-spinner" />
                      Skickar...
                    </>
                  ) : (
                    'Skicka förfrågan →'
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  )
}
