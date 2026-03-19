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
  { q: 'Vad ingår i installationskostnaden?', a: 'Setup-kostnaden på 2 900 kr täcker installation av Mac Mini hos er, konfiguration av AI-agenten, integration mot era befintliga system, testning och utbildning av ert team. Vi ser till att allt fungerar och att er AI-medarbetare är redo att jobba från dag ett.' },
  { q: 'Kan jag prova innan jag binder mig?', a: 'Vi erbjuder en kostnadsfri demo där vi visar exakt hur er AI-medarbetare kommer att fungera i ert företag. Ni ser resultatet innan ni fattar beslut. Kontakta oss för att boka en demo.' },
  { q: 'Hur lång tid tar installationen?', a: 'Från signerat avtal till driftsatt AI-medarbetare tar det normalt 2 veckor. Det inkluderar hårdvaruinstallation, konfiguration, integrationer och testning. Enklare upplägg kan vara igång på under en vecka.' },
  { q: 'Vad händer om AI:n inte fungerar som förväntat?', a: 'Vi ger löpande support och ser till att er AI-medarbetare alltid levererar. Growth-planen inkluderar prioritetssupport med 4 timmars svarstid. Vid allvarliga fel löser vi det samma dag. Vi optimerar kontinuerligt baserat på era behov.' },
  { q: 'Kan AI:n integreras med mitt befintliga system?', a: 'Ja. Vi integrerar med de flesta vanliga system — e-post, CRM, bokföringsprogram, e-handelsplattformar, ärendehantering och mer. Starter-planen inkluderar 2–3 integrationer, Growth-planen har obegränsade integrationer.' },
  { q: 'Var lagras mina data?', a: 'All data lagras lokalt, on-premise, direkt på en Mac Mini på ert kontor. Er data lämnar aldrig ert kontor och är fullt GDPR-kompatibel. Ni har fullständig kontroll över all information.' },
  { q: 'Vad är skillnaden mellan Starter och Growth?', a: 'Starter (4 900 kr/mån) passar företag som vill komma igång med 1 AI-agent och 2–3 integrationer. Growth (7 900 kr/mån) ger obegränsade integrationer, prioritetssupport med 4h svarstid, månadsvis optimering och en dedikerad kontaktperson — perfekt för er som vill skala snabbt.' },
  { q: 'Hur avslutar jag mitt abonnemang?', a: 'Efter den initiala 6-månadersperioden är det löpande med en månads uppsägningstid. Ingen bindning, inga dolda avgifter. Säg upp när som helst och vi hjälper er med övergången.' },
]

const comparisonRows = [
  { label: 'Månadskostnad', ai: '4 900–7 900 kr', human: '35 000–50 000 kr', aiGood: true, humanGood: false },
  { label: 'Dygnet-runt', ai: 'Alltid', human: 'Nej', aiGood: true, humanGood: false },
  { label: 'Sjukdagar', ai: 'Existerar inte', human: 'Ja (kostar)', aiGood: true, humanGood: false },
  { label: 'Uppsägningstid', ai: 'Ingen bindning (efter 6 mån)', human: '1–6 månader', aiGood: true, humanGood: false },
  { label: 'GDPR-säker', ai: 'On-premise', human: 'Beror på system', aiGood: true, humanGood: null },
  { label: 'ROI år 1', ai: '500 000 kr+ besparing', human: '0 kr (kostnad)', aiGood: true, humanGood: false },
]

const sf = { fontFamily: 'var(--serif)' }

export default function Priser() {
  useFadeUp()
  useEffect(() => {
    document.title = 'Priser — Enkelt & transparent | AI kollegorna'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Starter från 4 900 kr/mån. Growth 7 900 kr/mån. Fast pris, inga dolda kostnader. Setup 2 900 kr engång. AI-medarbetare på Mac Mini.')
  }, [])
  const [open, setOpen] = useState(null)
  const [hours, setHours] = useState(20)

  const yearlySaving = hours * 52 * 350
  const monthlyCost = 7900
  const paybackMonths = Math.ceil((2900 + monthlyCost) / (yearlySaving / 12))

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
          <div className="price-popular-badge">Mest populärt</div>
          <div className="price-name">Growth</div>
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

      {/* ─── JÄMFÖRELSETABELL ─── */}
      <div style={{ background: 'var(--white)', padding: '80px 48px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16, textAlign: 'center' }}>Jämförelse</p>
          <h2 className="fade-up" style={{ ...sf, fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 900, letterSpacing: -1.5, marginBottom: 16, textAlign: 'center' }}>
            AI-medarbetare vs. <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>vanlig anställd</em>
          </h2>
          <p className="fade-up" style={{ fontSize: 16, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, textAlign: 'center', marginBottom: 48, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Se hur en AI-medarbetare jämförs med en traditionell anställning.
          </p>

          <div className="fade-up" style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
                  <th style={{ padding: '16px 24px', textAlign: 'left', fontWeight: 600, fontSize: 13, letterSpacing: '.04em' }}></th>
                  <th style={{ padding: '16px 24px', textAlign: 'center', fontWeight: 700, fontSize: 13, letterSpacing: '.04em' }}>
                    <span style={{ color: '#a78bfa' }}>AI-medarbetare</span>
                  </th>
                  <th style={{ padding: '16px 24px', textAlign: 'center', fontWeight: 600, fontSize: 13, letterSpacing: '.04em', color: 'rgba(247,243,238,.5)' }}>
                    Vanlig anställd
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.label} style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--paper)', borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '16px 24px', fontWeight: 600, fontSize: 14, color: 'var(--ink)' }}>{row.label}</td>
                    <td style={{ padding: '16px 24px', textAlign: 'center', fontSize: 14 }}>
                      <span style={{ color: '#7C3AED', fontWeight: 700, marginRight: 6 }}>✓</span>
                      <span style={{ fontWeight: 500, color: 'var(--ink)' }}>{row.ai}</span>
                    </td>
                    <td style={{ padding: '16px 24px', textAlign: 'center', fontSize: 14 }}>
                      <span style={{ color: row.humanGood === null ? '#F59E0B' : '#EF4444', fontWeight: 700, marginRight: 6 }}>
                        {row.humanGood === null ? '⚠' : '✕'}
                      </span>
                      <span style={{ fontWeight: 400, color: 'var(--muted)' }}>{row.human}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ─── ROI-KALKYLATOR ─── */}
      <div style={{ background: 'var(--ink)', padding: '80px 48px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(247,243,238,.4)', marginBottom: 16 }}>ROI-kalkylator</p>
          <h2 className="fade-up" style={{ ...sf, fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 900, letterSpacing: -1.5, marginBottom: 16, color: 'var(--paper)' }}>
            Räkna ut din <em style={{ fontStyle: 'italic', color: '#a78bfa' }}>besparing</em>
          </h2>
          <p className="fade-up" style={{ fontSize: 16, fontWeight: 300, color: 'rgba(247,243,238,.5)', lineHeight: 1.8, marginBottom: 48, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
            Hur många timmar per vecka lägger ni på manuell administration som en AI-medarbetare kan ta över?
          </p>

          <div className="fade-up" style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 20, padding: '40px 36px', backdropFilter: 'blur(12px)' }}>
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <span style={{ fontSize: 14, fontWeight: 500, color: 'rgba(247,243,238,.7)' }}>Timmar per vecka på manuellt arbete</span>
                <span style={{ ...sf, fontSize: 36, fontWeight: 900, color: '#a78bfa' }}>{hours}h</span>
              </div>
              <input
                type="range"
                min="5"
                max="40"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                style={{
                  width: '100%', height: 6, appearance: 'none', WebkitAppearance: 'none',
                  background: `linear-gradient(to right, #7C3AED 0%, #7C3AED ${((hours - 5) / 35) * 100}%, rgba(255,255,255,.15) ${((hours - 5) / 35) * 100}%, rgba(255,255,255,.15) 100%)`,
                  borderRadius: 999, outline: 'none', cursor: 'pointer',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 12, color: 'rgba(247,243,238,.3)' }}>
                <span>5 timmar</span>
                <span>40 timmar</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
              <div style={{ background: 'rgba(124,58,237,.15)', border: '1px solid rgba(124,58,237,.25)', borderRadius: 14, padding: '24px 20px', textAlign: 'center' }}>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(167,139,250,.7)', marginBottom: 8 }}>Besparing per år</div>
                <div style={{ ...sf, fontSize: 'clamp(28px,4vw,40px)', fontWeight: 900, color: '#a78bfa', lineHeight: 1 }}>
                  {yearlySaving.toLocaleString('sv-SE')} kr
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 14, padding: '24px 20px', textAlign: 'center' }}>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(247,243,238,.4)', marginBottom: 8 }}>Payback-tid</div>
                <div style={{ ...sf, fontSize: 'clamp(28px,4vw,40px)', fontWeight: 900, color: 'var(--paper)', lineHeight: 1 }}>
                  {paybackMonths} {paybackMonths === 1 ? 'månad' : 'månader'}
                </div>
              </div>
            </div>

            <p style={{ fontSize: 15, fontWeight: 400, color: 'rgba(247,243,238,.6)', lineHeight: 1.7 }}>
              Med en AI-medarbetare kan ni spara <strong style={{ color: '#a78bfa' }}>{yearlySaving.toLocaleString('sv-SE')} kr per år</strong> och
              {' '}ha tillbaka investeringen på <strong style={{ color: 'var(--paper)' }}>{paybackMonths} {paybackMonths === 1 ? 'månad' : 'månader'}</strong>.
            </p>
            <p style={{ fontSize: 12, color: 'rgba(247,243,238,.25)', marginTop: 12 }}>
              Baserat på 350 kr/h × {hours} timmar × 52 veckor. Growth-plan (7 900 kr/mån) + setup (2 900 kr).
            </p>
          </div>

          <Link to="/kontakt" className="btn-light" style={{ marginTop: 32, display: 'inline-block' }}>Boka ett samtal och räkna på ert case →</Link>
        </div>
      </div>

      {/* ─── FAQ ─── */}
      <div style={{ background: 'var(--paper)', padding: '80px 48px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>FAQ</p>
          <h2 className="fade-up" style={{ ...sf, fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 900, letterSpacing: -1.5, marginBottom: 40 }}>Vanliga frågor</h2>
          {faqs.map((f, i) => (
            <div key={i} className="fade-up" style={{ borderBottom: '1px solid var(--border)' }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: 15, fontWeight: 600, color: 'var(--ink)', fontFamily: 'var(--sans)' }}>
                {f.q}
                <span style={{ fontSize: 20, color: 'var(--muted)', marginLeft: 16, flexShrink: 0, transition: 'transform .2s', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
              </button>
              <div style={{
                maxHeight: open === i ? 300 : 0,
                overflow: 'hidden',
                transition: 'max-height .3s ease',
              }}>
                <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, paddingBottom: 20 }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── AI-REVISION CTA ─── */}
      <div className="fade-up" style={{ maxWidth: 700, margin: '0 auto', padding: '0 48px 60px', textAlign: 'center' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(124,58,237,0.06) 0%, rgba(0,71,255,0.06) 100%)',
          border: '1px solid rgba(124,58,237,0.15)', borderRadius: 16, padding: '32px 36px'
        }}>
          <p style={{ fontSize: 16, fontWeight: 500, color: 'var(--ink)', marginBottom: 12 }}>
            Inte redo att köpa?
          </p>
          <Link to="/ai-revision" style={{ fontSize: 15, fontWeight: 600, color: '#7C3AED', textDecoration: 'none' }}>
            Börja med en gratis AI-revision →
          </Link>
        </div>
      </div>

      {/* ─── CTA ─── */}
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
