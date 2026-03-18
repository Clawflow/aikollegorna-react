import { useEffect } from 'react'
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

const s = { fontFamily: 'var(--serif)' }

export default function OmOss() {
  useFadeUp()
  useEffect(() => {
    document.title = 'Om oss — AI för alla svenska företag | AI kollegorna'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Vi tror på AI för alla — inte bara storbolagen. Grundat 2026 med målet att göra AI-medarbetare tillgängliga för varje svenskt B2B-företag.')
  }, [])
  return (
    <>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '120px 48px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>Om AI kollegorna</p>
          <h1 className="fade-up" style={{ ...s, fontSize: 'clamp(36px,4.5vw,60px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, marginBottom: 24 }}>
            Vi tror på <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>AI för alla</em> — inte bara storbolagen.
          </h1>
          <p className="fade-up" style={{ fontSize: 17, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 16 }}>
            Stora företag har råd med egna AI-team. Svenska SMB-bolag har inte det. Vi är bryggan mellan världsklass AI-teknologi och svenska B2B-företag som vill växa utan att anställa fler.
          </p>
          <p className="fade-up" style={{ fontSize: 17, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 32 }}>
            Grundat 2026 med en enkel övertygelse: en välkonfigurerad AI-medarbetare ska vara tillgänglig för varje företag i Sverige — inte bara de med miljardbudgetar.
          </p>
          <div className="fade-up" style={{ borderLeft: '3px solid var(--blue)', paddingLeft: 24, marginTop: 32 }}>
            <p style={{ ...s, fontSize: 20, fontStyle: 'italic', lineHeight: 1.7, color: 'var(--ink)' }}>
              "Din bästa anställd sover aldrig, sjuknar aldrig och förhandlar aldrig om lön. Det är vi som bygger den."
            </p>
          </div>
        </div>
        <div>
          {[
            { num: '01', title: 'Enkelhet framför komplexitet', desc: 'Vi tror att AI ska vara enkelt att använda — inte ett IT-projekt som tar månader. Ni ska ha en fungerande AI-medarbetare på två veckor.' },
            { num: '02', title: 'Säkerhet utan kompromiss', desc: 'Er data är er data. Vi installerar on-premise på en Mac Mini hos er, GDPR-kompatibelt, med er i full kontroll. Inga molnberoenden ni inte godkänt.' },
            { num: '03', title: 'Värde före teknik', desc: 'Vi börjar alltid med affärsvärdet — vilket problem löser vi och vad är ROI:n? Tekniken är medlet, inte målet.' },
          ].map(v => (
            <div key={v.num} className="fade-up" style={{ display: 'flex', gap: 20, padding: '24px 0', borderBottom: '1px solid var(--border)' }}>
              <div style={{ ...s, fontSize: 32, fontWeight: 900, color: 'var(--sage)', flexShrink: 0, lineHeight: 1 }}>{v.num}</div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{v.title}</h3>
                <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hur det fungerar */}
      <div style={{ background: 'var(--white)', padding: '80px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>Så fungerar det</p>
          <h2 className="fade-up" style={{ ...s, fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: -1.5, marginBottom: 48 }}>
            Från samtal till <em style={{ color: 'var(--blue)' }}>AI-medarbetare</em> på 14 dagar.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32 }}>
            {[
              { num: '01', title: 'Vi lyssnar', desc: '30-minuters samtal. Vi förstår era utmaningar, identifierar rätt use-case och gör en ROI-kalkyl.' },
              { num: '02', title: 'Vi konfigurerar', desc: 'Vi bygger er AI-medarbetare, integrerar mot era system och tränar den på ert företag.' },
              { num: '03', title: 'Vi levererar', desc: 'En Mac Mini skickas till ert kontor — färdiginstallerad och redo att jobba dag ett.' },
              { num: '04', title: 'Vi optimerar', desc: 'Löpande uppföljning, finjustering och nya funktioner. Er AI-medarbetare blir bättre varje vecka.' },
            ].map(step => (
              <div key={step.num} className="fade-up">
                <div style={{ ...s, fontSize: 48, fontWeight: 900, color: 'rgba(0,71,255,.12)', lineHeight: 1, marginBottom: 12 }}>{step.num}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dark section */}
      <div style={{ background: 'var(--ink)', padding: '80px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <h2 className="fade-up" style={{ ...s, fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900, color: 'var(--paper)', lineHeight: 1.1, letterSpacing: -1.5, marginBottom: 24 }}>
              Byggt för <em style={{ color: 'var(--blue)' }}>morgondagens</em> arbetsmarknad.
            </h2>
            <p style={{ fontSize: 16, fontWeight: 300, color: 'rgba(247,243,238,.6)', lineHeight: 1.8, marginBottom: 16 }}>AI ersätter inte människor. Den tar bort det arbete ingen egentligen vill göra — repetitivt, tidskrävande, administrativt. Det frigör er personal att göra det de är bra på.</p>
            <p style={{ fontSize: 16, fontWeight: 300, color: 'rgba(247,243,238,.6)', lineHeight: 1.8, marginBottom: 32 }}>Vi är övertygade om att de företag som lyckas integrera AI-medarbetare i sin organisation idag kommer ha ett strukturellt försprång om 3–5 år. Vi hjälper er dit.</p>
            <Link to="/kontakt" className="btn-light">Boka ett samtal →</Link>
          </div>
          <div>
            {[
              { year: '2026', title: 'AI kollegorna AB grundas', desc: 'Första kunden implementerad. Proof of concept validerat.' },
              { year: '2026', title: 'Mål: 20 kunder', desc: '1,2 MSEK i recurring revenue. Starka referenscase.' },
              { year: '2027', title: 'Mål: 100 kunder', desc: '6 MSEK recurring. Expansion till fler branscher.' },
            ].map((tl, i) => (
              <div key={i} className="fade-up" style={{ display: 'flex', gap: 24, padding: '20px 0', borderBottom: '1px solid rgba(247,243,238,.1)' }}>
                <div style={{ ...s, fontSize: 14, fontWeight: 700, color: 'var(--blue)', flexShrink: 0, width: 40 }}>{tl.year}</div>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 600, color: 'var(--paper)', marginBottom: 4 }}>{tl.title}</h4>
                  <p style={{ fontSize: 13, color: 'rgba(247,243,238,.5)', lineHeight: 1.6 }}>{tl.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
