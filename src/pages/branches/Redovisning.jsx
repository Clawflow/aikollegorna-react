import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function useFadeUp() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target) } })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

const useCases = [
  {
    icon: '🧾',
    title: 'Kvittoskanning',
    desc: 'AI-medarbetaren skannar och kategoriserar kvitton automatiskt — extraherar belopp, moms, datum och leverantör, matchar mot rätt konto i kontoplanen och bokför direkt i ert system.'
  },
  {
    icon: '💬',
    title: 'Kundkommunikation',
    desc: 'Svarar på klienternas frågor om bokslut, deklarationer och fakturastatus. Skickar påminnelser om saknade underlag och håller klienterna informerade — utan att ni lyfter ett finger.'
  },
  {
    icon: '📊',
    title: 'Rapportgenerering',
    desc: 'Genererar månadsrapporter, resultaträkningar och balansräkningar baserat på era bokföringsdata. Levereras i ert format, redo att skickas till klienten eller styrelsen.'
  }
]

const faqs = [
  { q: 'Kan AI:n kopplas till Fortnox, Visma eller Björn Lundén?', a: 'Ja. Vi integrerar med alla stora redovisningssystem via API — Fortnox, Visma, Björn Lundén, PE Accounting och fler. AI:n kan läsa, skriva och kategorisera direkt i ert system.' },
  { q: 'Hur hanteras känslig ekonomisk data?', a: 'All data processas lokalt på er Mac Mini. Inga klienters ekonomiska uppgifter, bokföringsdata eller personnummer lämnar ert kontor. Fullständigt GDPR-kompatibelt och revisionsredo.' },
  { q: 'Kan AI:n hantera olika branschkonteringsplaner?', a: 'Absolut. Vi konfigurerar AI:n med er specifika kontoplan, momsregler och branschspecifika krav. Oavsett om ni jobbar med BAS-kontoplanen eller en anpassad variant.' },
  { q: 'Ersätter AI:n vår redovisningskonsult?', a: 'Nej — AI:n är en medarbetare, inte en ersättare. Den tar hand om det repetitiva arbetet som kvittoskanning, kategorisering och rapportutkast, så att era konsulter kan fokusera på rådgivning och kvalificerat arbete.' }
]

const sf = { fontFamily: 'var(--serif)' }

export default function Redovisning() {
  useFadeUp()
  const [open, setOpen] = useState(null)

  useEffect(() => {
    document.title = 'Redovisning AI-medarbetare | AI Kollegorna'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'AI-medarbetare för redovisning och bokföring. Automatisera kvittoskanning, kundkommunikation och rapportgenerering. Spara 25+ timmar per vecka. GDPR-säkert.')
    let og = document.querySelector('meta[property="og:title"]')
    if (!og) { og = document.createElement('meta'); og.setAttribute('property', 'og:title'); document.head.appendChild(og) }
    og.setAttribute('content', 'Redovisning AI-medarbetare | AI Kollegorna')
    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (!ogDesc) { ogDesc = document.createElement('meta'); ogDesc.setAttribute('property', 'og:description'); document.head.appendChild(ogDesc) }
    ogDesc.setAttribute('content', 'Automatisera kvittoskanning, kundkommunikation och rapportgenerering med AI. On-premise, GDPR-säkert.')
  }, [])

  return (
    <>
      {/* HERO */}
      <div className="branch-hero">
        <div className="branch-hero-inner">
          <span className="branch-badge fade-up">AI Kollegorna för redovisning</span>
          <h1 className="fade-up" style={{ ...sf, fontSize: 'clamp(38px,5vw,64px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, marginBottom: 20, color: 'var(--ink)' }}>
            Redovisning + AI — <br /><em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>Din nya medarbetare är alltid tillgänglig</em>
          </h1>
          <p className="fade-up" style={{ fontSize: 18, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, maxWidth: 560, margin: '0 auto 36px' }}>
            Kvittohögar, deklarationsperioder och oändliga klientfrågor. AI-medarbetaren hanterar det repetitiva — så era konsulter kan fokusera på rådgivning och värdeskapande.
          </p>
          <a href="https://clawflow.github.io/agent-configurator/" target="_blank" rel="noopener noreferrer" className="btn-dark fade-up">
            Konfigurera för redovisning →
          </a>
        </div>
      </div>

      {/* USE CASES */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 48px' }}>
        <p className="section-label fade-up">Användningsfall</p>
        <h2 className="section-h fade-up">Så jobbar AI:n i er vardag</h2>
        <div className="branch-cards">
          {useCases.map((uc, i) => (
            <div key={uc.title} className="branch-card fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="branch-card-icon">{uc.icon}</div>
              <h3 style={{ ...sf, fontSize: 22, fontWeight: 700, letterSpacing: -0.5, marginBottom: 12 }}>{uc.title}</h3>
              <p style={{ fontSize: 15, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8 }}>{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ROI */}
      <div className="branch-roi-section">
        <div className="branch-roi-inner">
          <h2 className="fade-up" style={{ ...sf, fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 900, letterSpacing: -1.5, color: 'var(--paper)', marginBottom: 48, textAlign: 'center' }}>
            Vad sparar ni?
          </h2>
          <div className="branch-roi-grid">
            <div className="branch-roi-card fade-up">
              <div className="branch-roi-num">25+</div>
              <div className="branch-roi-label">timmar/vecka</div>
              <p className="branch-roi-desc">Sparade på kvittoskanning, bokföring och klientkommunikation</p>
            </div>
            <div className="branch-roi-card fade-up" style={{ transitionDelay: '.1s' }}>
              <div className="branch-roi-num">520 000</div>
              <div className="branch-roi-label">kr/år</div>
              <p className="branch-roi-desc">Minskade kostnader för manuell databearbetning och administration</p>
            </div>
            <div className="branch-roi-card fade-up" style={{ transitionDelay: '.2s' }}>
              <div className="branch-roi-num">80%</div>
              <div className="branch-roi-label">av uppgifter automatiserade</div>
              <p className="branch-roi-desc">Av rutinmässig bokföring och rapportering hanteras av AI:n</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ background: 'var(--white)', padding: '80px 48px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 className="fade-up" style={{ ...sf, fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 900, letterSpacing: -1.5, marginBottom: 40 }}>Vanliga frågor — Redovisning</h2>
          {faqs.map((f, i) => (
            <div key={i} className="fade-up" style={{ borderBottom: '1px solid var(--border)' }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: 15, fontWeight: 600, color: 'var(--ink)', fontFamily: 'var(--sans)' }}>
                {f.q}
                <span style={{ fontSize: 20, color: 'var(--muted)', marginLeft: 16, flexShrink: 0 }}>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, paddingBottom: 20 }}>{f.a}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="branch-cta">
        <h2 className="fade-up" style={{ ...sf, fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: -1.5, marginBottom: 16 }}>
          Redo att automatisera er <em style={{ fontStyle: 'italic' }}>redovisning?</em>
        </h2>
        <p className="fade-up" style={{ fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,.65)', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
          Konfigurera er AI-medarbetare på 3 minuter. Integrera med Fortnox, Visma eller ert befintliga system.
        </p>
        <a href="https://clawflow.github.io/agent-configurator/" target="_blank" rel="noopener noreferrer" className="btn-light-solid fade-up">
          Konfigurera för redovisning →
        </a>
      </div>
    </>
  )
}
