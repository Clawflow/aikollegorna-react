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
    icon: '🔍',
    title: 'Dokumentgranskning',
    desc: 'AI-medarbetaren granskar avtal, kontrakt och juridiska dokument — identifierar risker, saknade klausuler och avvikelser från era standardmallar. Timmar av granskning på minuter.'
  },
  {
    icon: '📧',
    title: 'Klientkommunikation',
    desc: 'Svarar på klienternas frågor om ärendestatus, deadlines och dokument. Skickar automatiska påminnelser om kommande tidsfrister och samlar in nödvändigt underlag.'
  },
  {
    icon: '📝',
    title: 'Avtalsutkast',
    desc: 'Genererar avtalsutkast baserat på era mallar och klienternas specifika uppgifter. NDA:er, samarbetsavtal, köpeavtal — klart på sekunder istället för timmar av manuellt arbete.'
  }
]

const faqs = [
  { q: 'Kan AI:n arbeta med våra befintliga avtalsmallar?', a: 'Ja. Vi laddar in era avtalsmallar, klausulbibliotek och standardformuleringar. AI:n genererar utkast baserade på just era mallar och anpassar efter klientens specifika behov och ärendets karaktär.' },
  { q: 'Hur säkert är det med klientkonfidentialitet?', a: 'All data processas lokalt på er Mac Mini — inga klientuppgifter, avtal eller ärendedetaljer lämnar ert kontor. Fullständigt GDPR-kompatibelt och uppfyller Advokatsamfundets krav på sekretess.' },
  { q: 'Kan AI:n granska avtal på andra språk?', a: 'Ja. AI:n hanterar avtal på svenska, engelska, norska och danska. Den identifierar risker och avvikelser oavsett språk och kan jämföra klausuler mellan olika språkversioner av samma avtal.' },
  { q: 'Ersätter AI:n våra jurister?', a: 'Aldrig. AI-medarbetaren är ett verktyg som frigör juristernas tid från repetitivt arbete — dokumentgranskning, utkastskrivning och klientuppföljning — så att de kan fokusera på komplex juridisk rådgivning och processföring.' }
]

const sf = { fontFamily: 'var(--serif)' }

export default function Juridik() {
  useFadeUp()
  const [open, setOpen] = useState(null)

  useEffect(() => {
    document.title = 'Juridik AI-medarbetare | AI Kollegorna'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'AI-medarbetare för advokatbyråer och juridiska avdelningar. Automatisera dokumentgranskning, klientkommunikation och avtalsutkast. Spara 15+ timmar per vecka. GDPR-säkert.')
    let og = document.querySelector('meta[property="og:title"]')
    if (!og) { og = document.createElement('meta'); og.setAttribute('property', 'og:title'); document.head.appendChild(og) }
    og.setAttribute('content', 'Juridik AI-medarbetare | AI Kollegorna')
    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (!ogDesc) { ogDesc = document.createElement('meta'); ogDesc.setAttribute('property', 'og:description'); document.head.appendChild(ogDesc) }
    ogDesc.setAttribute('content', 'Automatisera dokumentgranskning, klientkommunikation och avtalsutkast med AI. On-premise, GDPR-säkert.')
  }, [])

  return (
    <>
      {/* HERO */}
      <div className="branch-hero">
        <div className="branch-hero-inner">
          <span className="branch-badge fade-up">AI Kollegorna för juridik</span>
          <h1 className="fade-up" style={{ ...sf, fontSize: 'clamp(38px,5vw,64px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, marginBottom: 20, color: 'var(--ink)' }}>
            Juridik + AI — <br /><em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>Din nya medarbetare är alltid tillgänglig</em>
          </h1>
          <p className="fade-up" style={{ fontSize: 18, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, maxWidth: 560, margin: '0 auto 36px' }}>
            Era jurister ägnar timmar åt dokumentgranskning och avtalsadministration. AI-medarbetaren tar det repetitiva — så teamet kan fokusera på kvalificerad juridisk rådgivning.
          </p>
          <a href="https://clawflow.github.io/agent-configurator/" target="_blank" rel="noopener noreferrer" className="btn-dark fade-up">
            Konfigurera för juridik →
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
              <div className="branch-roi-num">15+</div>
              <div className="branch-roi-label">timmar/vecka</div>
              <p className="branch-roi-desc">Sparade på dokumentgranskning, avtalsutkast och klientuppföljning</p>
            </div>
            <div className="branch-roi-card fade-up" style={{ transitionDelay: '.1s' }}>
              <div className="branch-roi-num">400 000</div>
              <div className="branch-roi-label">kr/år</div>
              <p className="branch-roi-desc">Frigjord tid som kan debiteras på kvalificerat juridiskt arbete</p>
            </div>
            <div className="branch-roi-card fade-up" style={{ transitionDelay: '.2s' }}>
              <div className="branch-roi-num">70%</div>
              <div className="branch-roi-label">av uppgifter automatiserade</div>
              <p className="branch-roi-desc">Av rutinmässig dokumenthantering och klientkommunikation</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ background: 'var(--white)', padding: '80px 48px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 className="fade-up" style={{ ...sf, fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 900, letterSpacing: -1.5, marginBottom: 40 }}>Vanliga frågor — Juridik</h2>
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
          Redo att effektivisera ert <em style={{ fontStyle: 'italic' }}>juridiska arbete?</em>
        </h2>
        <p className="fade-up" style={{ fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,.65)', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
          Konfigurera er AI-medarbetare på 3 minuter. Ladda in era mallar och kom igång direkt.
        </p>
        <a href="https://clawflow.github.io/agent-configurator/" target="_blank" rel="noopener noreferrer" className="btn-light-solid fade-up">
          Konfigurera för juridik →
        </a>
      </div>
    </>
  )
}
