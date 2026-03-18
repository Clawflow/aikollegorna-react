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

const faqs = [
  { q: 'Vad ingår i setup-kostnaden på 2 900 kr?', a: 'Setup täcker installation av hårdvara hos er, konfiguration av AI-agenten och integration mot era befintliga system. Vi ser till att allt fungerar och att er medarbetare är redo att jobba från dag ett.' },
  { q: 'Finns det någon bindningstid?', a: 'Minst 6 månader för att ge AI-medarbetaren tid att lära sig ert företag och bevisa värde. Efter 6 månader är det löpande med en månads uppsägningstid.' },
  { q: 'Vad händer om något inte fungerar?', a: 'Vi ger support och ser till att er AI-medarbetare alltid levererar. Growth-planen inkluderar prioritetssupport med 4 timmars svarstid. Vid allvarliga fel löser vi det samma dag.' },
  { q: 'Kan vi ha fler än en AI-medarbetare?', a: 'Absolut. Varje extra agent kostar +3 000 kr/mån och delar befintliga integrationer. Ni kan ha en säljare, en marknadsassistent och en supportagent igång parallellt — allt på samma Mac Mini.' },
  { q: 'Är vår data säker?', a: 'Ja. Vi installerar on-premise — direkt på en Mac Mini på ert kontor. Er data lämnar aldrig ert kontor och är fullt GDPR-kompatibel.' },
]

const sf = { fontFamily: 'var(--serif)' }

export default function Priser() {
  useFadeUp()
  useEffect(() => {
    document.title = 'Priser — Enkelt & transparent | AI kollegorna'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Starter från 4 900 kr/mån. Growth 7 900 kr/mån. Fast pris, inga dolda kostnader. Setup 2 900 kr engång. AI-medarbetare på Mac Mini.')
  }, [])
  const [open, setOpen] = useState(null)

  return (
    <>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '120px 48px 60px', textAlign: 'center' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>Prissättning</p>
        <h1 className="fade-up" style={{ ...sf, fontSize: 'clamp(42px,5vw,68px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, marginBottom: 16 }}>
          Enkelt.<br /><em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>Transparent.</em>
        </h1>
        <p className="fade-up" style={{ fontSize: 17, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, maxWidth: 500, margin: '0 auto' }}>
          Fast månadsbelopp. Ingen bindning efter 6 månader. Inga dolda kostnader. En AI-medarbetare som levererar från dag ett.
        </p>
      </div>

      <div className="pricing-grid" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 48px' }}>
        <div className="price-card fade-up">
          <div className="price-name">Starter</div>
          <div className="price-amount">4 900 <span className="price-period">kr/mån</span></div>
          <p className="price-desc">En AI-medarbetare, 2–3 integrationer. Perfekt för att komma igång och bevisa värdet.</p>
          <hr className="price-divider" />
          <ul className="price-features">
            {['1 konfigurerad AI-agent','2–3 systemintegrationer','6 månaders minimiperiod','Onboarding & setup inkluderat','E-postsupport'].map(f=><li key={f}>{f}</li>)}
          </ul>
          <Link to="/kontakt" className="price-btn">Kom igång</Link>
        </div>
        <div className="price-card featured fade-up" style={{ transitionDelay: '.1s' }}>
          <div className="price-name">Growth — Mest populärt</div>
          <div className="price-amount">7 900 <span className="price-period">kr/mån</span></div>
          <p className="price-desc">Fler integrationer, prioritetssupport och månadsvis optimering för er som vill skala snabbt.</p>
          <hr className="price-divider" />
          <ul className="price-features">
            {['1 konfigurerad AI-agent','Obegränsade integrationer','Prioritetssupport (svarstid 4h)','Månadsvis optimering & genomgång','Dedikerad kontaktperson'].map(f=><li key={f}>{f}</li>)}
          </ul>
          <Link to="/kontakt" className="price-btn">Välj Growth</Link>
        </div>
        <div className="price-card fade-up" style={{ transitionDelay: '.2s' }}>
          <div className="price-name">Extra Agent</div>
          <div className="price-amount">+3 000 <span className="price-period">kr/mån</span></div>
          <p className="price-desc">Lägg till fler AI-medarbetare i takt med att behovet växer.</p>
          <hr className="price-divider" />
          <ul className="price-features">
            {['Ytterligare AI-agent','Delar befintliga integrationer','Individuellt konfigurerad','Ingen ny setup-kostnad'].map(f=><li key={f}>{f}</li>)}
          </ul>
          <Link to="/kontakt" className="price-btn">Lägg till</Link>
        </div>
      </div>

      <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--muted)', margin: '24px 48px 80px', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
        Engångskostnad för setup och installation: <strong>2 900 kr</strong> · Inkluderar konfiguration, integrationer och driftsättning av er Mac Mini
      </p>

      {/* FAQ */}
      <div style={{ background: 'var(--white)', padding: '80px 48px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 className="fade-up" style={{ ...sf, fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 900, letterSpacing: -1.5, marginBottom: 40 }}>Vanliga frågor</h2>
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

      <div style={{ background: 'var(--ink)', padding: '80px 48px', textAlign: 'center' }}>
        <h2 style={{ ...sf, fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900, color: 'var(--paper)', lineHeight: 1.1, letterSpacing: -1.5, marginBottom: 16 }}>
          Redo att <em style={{ color: 'var(--blue)' }}>komma igång?</em>
        </h2>
        <p style={{ fontSize: 16, fontWeight: 300, color: 'rgba(247,243,238,.6)', marginBottom: 32 }}>Boka ett kostnadsfritt samtal. Vi hjälper er välja rätt plan och levererar på 2 veckor.</p>
        <Link to="/kontakt" className="btn-light">Boka ett samtal →</Link>
      </div>
    </>
  )
}
