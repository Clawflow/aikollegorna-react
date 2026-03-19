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
    icon: '🏠',
    title: 'Hyresförfrågningar',
    desc: 'AI-medarbetaren svarar på inkommande hyresförfrågningar dygnet runt — kvalificerar intressenter, samlar in uppgifter och bokar visningar automatiskt. Inga leads faller mellan stolarna.'
  },
  {
    icon: '📄',
    title: 'Avtalsgenerering',
    desc: 'Genererar hyresavtal, överlåtelseavtal och tilläggsavtal baserat på era mallar. Fyll i objektsdata och hyresgästuppgifter — avtalet är klart på sekunder, inte timmar.'
  },
  {
    icon: '🏢',
    title: 'Objektsbeskrivningar',
    desc: 'Skapar säljande och SEO-optimerade objektsbeskrivningar för Hemnet, Booli och er egen webbplats. Baserat på objektsdata, bilder och områdesinformation.'
  }
]

const faqs = [
  { q: 'Kan AI-medarbetaren kopplas till vårt fastighetssystem?', a: 'Ja. Vi integrerar med vanliga system som Vitec, FastNet, Datscha och andra via API. AI:n läser och uppdaterar objektsdata, hyresgästuppgifter och ärenden direkt i ert befintliga system.' },
  { q: 'Hur hanteras känslig hyresgästdata?', a: 'All data stannar on-premise på er Mac Mini. Inga hyresgästuppgifter, personnummer eller avtalsdetaljer lämnar ert kontor. Fullständigt GDPR-kompatibelt.' },
  { q: 'Kan AI:n hantera olika typer av fastigheter?', a: 'Absolut. Oavsett om ni förvaltar bostäder, kommersiella lokaler eller samhällsfastigheter konfigurerar vi AI:n för era specifika arbetsflöden, mallar och terminologi.' },
  { q: 'Hur snabbt ser vi resultat?', a: 'De flesta fastighetsbolag ser en markant minskning av manuellt arbete redan inom första veckan. Hyresförfrågningar besvaras på sekunder istället för timmar, och avtalsgenerering som tidigare tog 45 minuter tar nu under en minut.' }
]

const sf = { fontFamily: 'var(--serif)' }

export default function Fastighet() {
  useFadeUp()
  const [open, setOpen] = useState(null)

  useEffect(() => {
    document.title = 'Fastighet AI-medarbetare | AI Kollegorna'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'AI-medarbetare för fastighetsbranschen. Automatisera hyresförfrågningar, avtalsgenerering och objektsbeskrivningar. Spara 20+ timmar per vecka. On-premise och GDPR-säkert.')
    let og = document.querySelector('meta[property="og:title"]')
    if (!og) { og = document.createElement('meta'); og.setAttribute('property', 'og:title'); document.head.appendChild(og) }
    og.setAttribute('content', 'Fastighet AI-medarbetare | AI Kollegorna')
    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (!ogDesc) { ogDesc = document.createElement('meta'); ogDesc.setAttribute('property', 'og:description'); document.head.appendChild(ogDesc) }
    ogDesc.setAttribute('content', 'Automatisera hyresförfrågningar, avtalsgenerering och objektsbeskrivningar med AI. On-premise, GDPR-säkert.')
  }, [])

  return (
    <>
      {/* HERO */}
      <div className="branch-hero">
        <div className="branch-hero-inner">
          <span className="branch-badge fade-up">AI Kollegorna för fastighet</span>
          <h1 className="fade-up" style={{ ...sf, fontSize: 'clamp(38px,5vw,64px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, marginBottom: 20, color: 'var(--ink)' }}>
            Fastighet + AI — <br /><em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>Din nya medarbetare är alltid tillgänglig</em>
          </h1>
          <p className="fade-up" style={{ fontSize: 18, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, maxWidth: 560, margin: '0 auto 36px' }}>
            Ert team drunknar i hyresförfrågningar, avtalsskrivande och objektspublicering. AI-medarbetaren tar hand om det repetitiva — så ni kan fokusera på förvaltning och affärer.
          </p>
          <a href="https://clawflow.github.io/agent-configurator/" target="_blank" rel="noopener noreferrer" className="btn-dark fade-up">
            Konfigurera för fastighet →
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
              <div className="branch-roi-num">20+</div>
              <div className="branch-roi-label">timmar/vecka</div>
              <p className="branch-roi-desc">Sparade på hyresförfrågningar, avtalshantering och objektspublicering</p>
            </div>
            <div className="branch-roi-card fade-up" style={{ transitionDelay: '.1s' }}>
              <div className="branch-roi-num">480 000</div>
              <div className="branch-roi-label">kr/år</div>
              <p className="branch-roi-desc">Minskade personalkostnader för administration och kundkommunikation</p>
            </div>
            <div className="branch-roi-card fade-up" style={{ transitionDelay: '.2s' }}>
              <div className="branch-roi-num">75%</div>
              <div className="branch-roi-label">av uppgifter automatiserade</div>
              <p className="branch-roi-desc">Av repetitiva uppgifter inom förvaltning hanteras helt automatiskt</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ background: 'var(--white)', padding: '80px 48px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 className="fade-up" style={{ ...sf, fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 900, letterSpacing: -1.5, marginBottom: 40 }}>Vanliga frågor — Fastighet</h2>
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
          Redo att effektivisera er <em style={{ fontStyle: 'italic' }}>fastighetsförvaltning?</em>
        </h2>
        <p className="fade-up" style={{ fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,.65)', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
          Konfigurera er AI-medarbetare på 3 minuter. Välj integrationer mot ert fastighetssystem och kom igång direkt.
        </p>
        <a href="https://clawflow.github.io/agent-configurator/" target="_blank" rel="noopener noreferrer" className="btn-light-solid fade-up">
          Konfigurera för fastighet →
        </a>
      </div>
    </>
  )
}
