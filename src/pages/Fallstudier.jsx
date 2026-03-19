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

const sf = { fontFamily: 'var(--serif)' }

const cases = [
  {
    active: true,
    title: 'Wristbuddys',
    bransch: 'E-handel',
    utmaning: 'Manuell bildhantering 8h/vecka',
    resultat: '96% tidsbesparing, 500+ bilder/h',
    desc: 'Sveriges snabbast växande e-handelsbolag automatiserade sin bildbearbetning med en AI-medarbetare. Från 8 timmar till 20 minuter per vecka.',
    link: '/case',
    emoji: '🛒',
  },
  {
    active: false,
    title: 'Redovisningsbyrå',
    bransch: 'Redovisning',
    utmaning: 'Kvittoskanning + bokföringsunderlag',
    resultat: 'Q2 2026 — kontakta oss för tidigt tillträde',
    desc: 'Automatiserad kvittoskanning, kategorisering och bokföringsunderlag. Minskar manuellt arbete med upp till 80%.',
    emoji: '📊',
  },
  {
    active: false,
    title: 'Fastighetsbolag',
    bransch: 'Fastighetsförvaltning',
    utmaning: 'Uthyrningsförfrågningar + felanmälningar',
    resultat: 'Q2 2026 — kontakta oss för tidigt tillträde',
    desc: 'AI-agent som hanterar uthyrningsförfrågningar, felanmälningar och hyresgästkommunikation dygnet runt.',
    emoji: '🏢',
  },
]

export default function Fallstudier() {
  useFadeUp()
  useEffect(() => {
    document.title = 'Fallstudier — AI kollegorna'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Se hur svenska företag sparar tid och pengar med AI-medarbetare från AI kollegorna. Läs våra fallstudier.')
  }, [])

  return (
    <>
      {/* HERO */}
      <div style={{ background: 'linear-gradient(135deg, #F7F3EE 0%, #EDE8E1 100%)', padding: '140px 48px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>Fallstudier</p>
          <h1 className="fade-up" style={{ ...sf, fontSize: 'clamp(40px,5vw,68px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, marginBottom: 20 }}>
            Verkliga resultat från <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>verkliga företag.</em>
          </h1>
          <p className="fade-up" style={{ fontSize: 17, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, maxWidth: 520, margin: '0 auto' }}>
            Se hur svenska företag sparar tid, pengar och resurser med AI-medarbetare installerade on-premise.
          </p>
        </div>
      </div>

      {/* CASE CARDS */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
          {cases.map((c, i) => (
            <div
              key={i}
              className="fade-up"
              style={{
                transitionDelay: `${i * 0.1}s`,
                background: c.active ? 'var(--white)' : 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: 20,
                padding: '40px 32px',
                position: 'relative',
                overflow: 'hidden',
                opacity: c.active ? 1 : 0.55,
                filter: c.active ? 'none' : 'grayscale(0.4)',
                transition: 'opacity .7s ease, transform .7s ease, filter .3s ease, box-shadow .3s ease',
                ...(c.active ? {} : {}),
              }}
              onMouseEnter={(e) => { if (c.active) { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)' } }}
              onMouseLeave={(e) => { if (c.active) { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' } }}
            >
              {/* Coming soon badge */}
              {!c.active && (
                <div style={{
                  position: 'absolute', top: 20, right: 20,
                  background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.18)',
                  borderRadius: 999, padding: '5px 14px',
                  fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase',
                  color: '#7C3AED',
                }}>
                  Kommer snart
                </div>
              )}

              <div style={{ fontSize: 40, marginBottom: 20 }}>{c.emoji}</div>

              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 8 }}>
                {c.bransch}
              </div>

              <h3 style={{ ...sf, fontSize: 26, fontWeight: 700, letterSpacing: -0.5, marginBottom: 12, color: 'var(--ink)' }}>
                {c.title}
              </h3>

              <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 24 }}>
                {c.desc}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: '#EF4444', fontWeight: 700, fontSize: 13, flexShrink: 0, marginTop: 1 }}>✕</span>
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--muted)' }}>Utmaning</span>
                    <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink)', marginTop: 2 }}>{c.utmaning}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: '#22c55e', fontWeight: 700, fontSize: 13, flexShrink: 0, marginTop: 1 }}>✓</span>
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--muted)' }}>Resultat</span>
                    <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink)', marginTop: 2 }}>{c.resultat}</p>
                  </div>
                </div>
              </div>

              {c.active ? (
                <Link to={c.link} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontSize: 14, fontWeight: 600, color: '#7C3AED',
                  textDecoration: 'none', transition: 'gap .2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.gap = '12px'}
                onMouseLeave={(e) => e.currentTarget.style.gap = '8px'}
                >
                  Läs fallstudien <span>→</span>
                </Link>
              ) : (
                <Link to="/kontakt" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontSize: 14, fontWeight: 500, color: 'var(--muted)',
                  textDecoration: 'none',
                }}>
                  Kontakta oss för tidigt tillträde →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: 'var(--ink)', padding: '80px 48px', textAlign: 'center' }}>
        <h2 style={{ ...sf, fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900, color: 'var(--paper)', lineHeight: 1.1, letterSpacing: -1.5, marginBottom: 16 }}>
          Vill ni bli nästa <em style={{ color: 'var(--blue)' }}>framgångssaga?</em>
        </h2>
        <p style={{ fontSize: 16, fontWeight: 300, color: 'rgba(247,243,238,.6)', marginBottom: 32, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
          Boka ett kostnadsfritt samtal och se hur en AI-medarbetare kan transformera ert företag.
        </p>
        <Link to="/kontakt" className="btn-light">Boka ett samtal →</Link>
      </div>
    </>
  )
}
