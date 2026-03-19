import { useEffect, useState } from 'react'

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

const partnerTypes = [
  {
    icon: '🖥️',
    title: 'IT-konsult / MSP',
    desc: 'Du hanterar IT-infrastruktur. Vi kompletterar med AI-lagret.',
    color: '#7C3AED',
  },
  {
    icon: '🎨',
    title: 'Digital byrå',
    desc: 'Du bygger hemsidor och kampanjer. Vi automatiserar din kunds administration.',
    color: 'var(--blue)',
  },
  {
    icon: '📊',
    title: 'Redovisningskonsult / Revisor',
    desc: 'Du hanterar din kunds ekonomi. Vi automatiserar kvittoskanning och kommunikation.',
    color: '#16a34a',
  },
]

const perks = [
  'Eget partner-ID och spårbar länk',
  'Säljmaterial (one-pager, demo-deck)',
  '2h partner-utbildning (onboarding)',
  '20% provision månadsvis',
  'Prioritets-support för dina kunder',
  'Partner-certifikat',
]

const branches = [
  'IT-konsult / MSP',
  'Digital byrå',
  'Redovisningskonsult / Revisor',
  'Annat',
]

const provisionData = [
  { kunder: 3, provision: 2940 },
  { kunder: 5, provision: 4900 },
  { kunder: 10, provision: 9800 },
]

export default function Partner() {
  useFadeUp()

  useEffect(() => {
    document.title = 'Partnerprogram — Bli reseller | AI kollegorna'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Bli AI Kollegorna-partner. Sälj AI-automatisering till dina kunder och tjäna 20% löpande provision. Vi levererar, du säljer.')
  }, [])

  const [kunder, setKunder] = useState(5)
  const provision = Math.round(kunder * 4900 * 0.2)

  const [form, setForm] = useState({
    namn: '', epost: '', foretag: '', bransch: '', beskrivning: ''
  })

  function updateField(key, value) {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  function buildMailto() {
    const subject = encodeURIComponent('Partneransökan — ' + (form.foretag || 'Nytt partnerskap'))
    const body = encodeURIComponent(
      `Hej!\n\nJag vill ansöka om partnerskap med AI Kollegorna.\n\n` +
      `Namn: ${form.namn}\n` +
      `E-post: ${form.epost}\n` +
      `Företag: ${form.foretag}\n` +
      `Bransch/roll: ${form.bransch}\n\n` +
      `Om mina kunder:\n${form.beskrivning}\n\n` +
      `Skickat från partnersidan på aikollegorna.se`
    )
    return `mailto:hej@aikollegorna.se?subject=${subject}&body=${body}`
  }

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
    transition: 'border-color .2s, box-shadow .2s',
  }

  const labelStyle = {
    display: 'block',
    fontSize: 12,
    fontWeight: 600,
    marginBottom: 6,
    color: 'var(--muted)',
    textTransform: 'uppercase',
    letterSpacing: '.08em',
  }

  return (
    <>
      {/* ─── HERO ─── */}
      <div style={{ maxWidth: 750, margin: '0 auto', padding: '120px 48px 60px', textAlign: 'center' }}>
        <div className="fade-up" style={{
          display: 'inline-block',
          background: 'rgba(124,58,237,.08)',
          border: '1px solid rgba(124,58,237,.2)',
          borderRadius: 999,
          padding: '6px 18px',
          fontSize: 13,
          fontWeight: 600,
          color: '#7C3AED',
          marginBottom: 24,
        }}>
          🤝 Partnerprogram — nu öppet
        </div>
        <h1 className="fade-up" style={{ ...sf, fontSize: 'clamp(42px,5vw,68px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, marginBottom: 16 }}>
          Sälj AI-automatisering<br />till <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>dina kunder</em>
        </h1>
        <p className="fade-up" style={{ fontSize: 17, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, maxWidth: 560, margin: '0 auto 32px' }}>
          Bli AI Kollegorna-partner och erbjud dina klienter on-premise AI-medarbetare. Du säljer, vi levererar.
        </p>
        <a href="#partner-ansokan" className="fade-up" style={{
          display: 'inline-block',
          background: 'var(--ink)',
          color: 'var(--white)',
          border: 'none',
          borderRadius: 8,
          padding: '14px 32px',
          fontSize: 15,
          fontWeight: 600,
          fontFamily: 'var(--sans)',
          textDecoration: 'none',
          transition: 'opacity .2s',
        }}
          onMouseEnter={e => e.target.style.opacity = '.8'}
          onMouseLeave={e => e.target.style.opacity = '1'}
        >
          Ansök om partnerskap →
        </a>
      </div>

      {/* ─── HUR DET FUNGERAR ─── */}
      <div style={{ background: 'var(--white)', padding: '80px 48px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16, textAlign: 'center' }}>Så fungerar det</p>
          <h2 className="fade-up" style={{ ...sf, fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 900, letterSpacing: -1.5, marginBottom: 48, textAlign: 'center' }}>
            Tre steg till <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>löpande intäkter</em>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 32 }}>
            {[
              { num: '01', title: 'Du hittar kunden', desc: 'Dina befintliga klienter, ditt nätverk. Du vet vem som behöver effektivisera.' },
              { num: '02', title: 'Vi levererar', desc: 'Vi installerar, konfigurerar och supportar AI-medarbetaren. Du behöver inte vara teknisk.' },
              { num: '03', title: 'Du tjänar provision', desc: '20% av månadsavgiften, löpande, så länge kunden är aktiv.' },
            ].map((step, i) => (
              <div key={step.num} className="fade-up" style={{ textAlign: 'center', transitionDelay: `${i * 0.1}s` }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: 'var(--ink)', color: 'var(--white)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, fontWeight: 700, fontFamily: 'var(--serif)',
                  margin: '0 auto 20px',
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontSize: 15, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── PARTNER-TYPER ─── */}
      <div style={{ padding: '80px 48px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16, textAlign: 'center' }}>Vem passar som partner?</p>
          <h2 className="fade-up" style={{ ...sf, fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 900, letterSpacing: -1.5, marginBottom: 48, textAlign: 'center' }}>
            Är du en av <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>dessa?</em>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {partnerTypes.map((pt, i) => (
              <div key={pt.title} className="fade-up" style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: 16,
                padding: '32px 28px',
                transitionDelay: `${i * 0.1}s`,
              }}>
                <div style={{
                  width: 48, height: 48,
                  background: `${pt.color}12`,
                  borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, marginBottom: 20,
                }}>
                  {pt.icon}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{pt.title}</h3>
                <p style={{ fontSize: 15, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.7 }}>{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── PROVISION-KALKYL ─── */}
      <div style={{ background: 'var(--ink)', padding: '80px 48px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(247,243,238,.4)', marginBottom: 16 }}>Provision-kalkyl</p>
          <h2 className="fade-up" style={{ ...sf, fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 900, letterSpacing: -1.5, marginBottom: 16, color: 'var(--paper)' }}>
            Räkna ut din <em style={{ fontStyle: 'italic', color: '#a78bfa' }}>provision</em>
          </h2>
          <p className="fade-up" style={{ fontSize: 16, fontWeight: 300, color: 'rgba(247,243,238,.5)', lineHeight: 1.8, marginBottom: 48, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
            Hur många kunder kan du tänka dig rekrytera under Q2?
          </p>

          <div className="fade-up" style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 20, padding: '40px 36px', backdropFilter: 'blur(12px)' }}>
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <span style={{ fontSize: 14, fontWeight: 500, color: 'rgba(247,243,238,.7)' }}>Antal kunder</span>
                <span style={{ ...sf, fontSize: 36, fontWeight: 900, color: '#a78bfa' }}>{kunder}</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={kunder}
                onChange={(e) => setKunder(Number(e.target.value))}
                style={{
                  width: '100%', height: 6, appearance: 'none', WebkitAppearance: 'none',
                  background: `linear-gradient(to right, #7C3AED 0%, #7C3AED ${((kunder - 1) / 19) * 100}%, rgba(255,255,255,.15) ${((kunder - 1) / 19) * 100}%, rgba(255,255,255,.15) 100%)`,
                  borderRadius: 999, outline: 'none', cursor: 'pointer',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 12, color: 'rgba(247,243,238,.3)' }}>
                <span>1 kund</span>
                <span>20 kunder</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
              <div style={{ background: 'rgba(124,58,237,.15)', border: '1px solid rgba(124,58,237,.25)', borderRadius: 14, padding: '24px 20px', textAlign: 'center' }}>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(167,139,250,.7)', marginBottom: 8 }}>Din provision / mån</div>
                <div style={{ ...sf, fontSize: 'clamp(28px,4vw,40px)', fontWeight: 900, color: '#a78bfa', lineHeight: 1 }}>
                  {provision.toLocaleString('sv-SE')} kr
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 14, padding: '24px 20px', textAlign: 'center' }}>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(247,243,238,.4)', marginBottom: 8 }}>Per år</div>
                <div style={{ ...sf, fontSize: 'clamp(28px,4vw,40px)', fontWeight: 900, color: 'var(--paper)', lineHeight: 1 }}>
                  {(provision * 12).toLocaleString('sv-SE')} kr
                </div>
              </div>
            </div>

            <p style={{ fontSize: 15, fontWeight: 400, color: 'rgba(247,243,238,.6)', lineHeight: 1.7 }}>
              Med <strong style={{ color: '#a78bfa' }}>{kunder} kunder</strong> tjänar du{' '}
              <strong style={{ color: '#a78bfa' }}>{provision.toLocaleString('sv-SE')} kr/mån</strong> i löpande provision —{' '}
              <strong style={{ color: 'var(--paper)' }}>{(provision * 12).toLocaleString('sv-SE')} kr per år</strong>.
            </p>
            <p style={{ fontSize: 12, color: 'rgba(247,243,238,.25)', marginTop: 12 }}>
              Baserat på 20% av 4 900 kr Starter-plan per kund.
            </p>

            {/* Referenspunkter */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 24, borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 24 }}>
              {provisionData.map(p => (
                <div key={p.kunder} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(247,243,238,.5)' }}>{p.kunder} kunder</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#a78bfa' }}>{p.provision.toLocaleString('sv-SE')} kr/mån</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── VAD DU FÅR SOM PARTNER ─── */}
      <div style={{ padding: '80px 48px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16, textAlign: 'center' }}>Dina förmåner</p>
          <h2 className="fade-up" style={{ ...sf, fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 900, letterSpacing: -1.5, marginBottom: 48, textAlign: 'center' }}>
            Vad du får som <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>partner</em>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {perks.map((perk, i) => (
              <div key={perk} className="fade-up" style={{
                display: 'flex', alignItems: 'center', gap: 14,
                background: 'var(--white)', border: '1px solid var(--border)',
                borderRadius: 12, padding: '16px 20px',
                transitionDelay: `${i * 0.05}s`,
              }}>
                <span style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: 'rgba(22,163,106,.1)', color: '#16a34a',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, fontWeight: 700, flexShrink: 0,
                }}>✓</span>
                <span style={{ fontSize: 15, fontWeight: 500 }}>{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── ANSÖKNINGSFORMULÄR ─── */}
      <div id="partner-ansokan" style={{ background: 'var(--white)', padding: '80px 48px' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16, textAlign: 'center' }}>Ansök nu</p>
          <h2 className="fade-up" style={{ ...sf, fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 900, letterSpacing: -1.5, marginBottom: 16, textAlign: 'center' }}>
            Skicka din <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>partneransökan</em>
          </h2>
          <p className="fade-up" style={{ fontSize: 16, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, textAlign: 'center', marginBottom: 40, maxWidth: 460, marginLeft: 'auto', marginRight: 'auto' }}>
            Fyll i formuläret så kontaktar vi dig inom 48 timmar.
          </p>

          <div className="fade-up" style={{ background: 'var(--paper)', border: '1px solid var(--border)', borderRadius: 20, padding: 40 }}>
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle} htmlFor="partner-namn">Namn</label>
              <input
                id="partner-namn"
                style={inp}
                type="text"
                placeholder="Anna Andersson"
                value={form.namn}
                onChange={e => updateField('namn', e.target.value)}
                onFocus={e => { e.target.style.borderColor = 'var(--blue)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,71,255,0.1)' }}
                onBlur={e => { e.target.style.borderColor = ''; e.target.style.boxShadow = '' }}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle} htmlFor="partner-epost">E-post</label>
              <input
                id="partner-epost"
                style={inp}
                type="email"
                placeholder="anna@foretaget.se"
                value={form.epost}
                onChange={e => updateField('epost', e.target.value)}
                onFocus={e => { e.target.style.borderColor = 'var(--blue)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,71,255,0.1)' }}
                onBlur={e => { e.target.style.borderColor = ''; e.target.style.boxShadow = '' }}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle} htmlFor="partner-foretag">Företag</label>
              <input
                id="partner-foretag"
                style={inp}
                type="text"
                placeholder="Ditt företagsnamn"
                value={form.foretag}
                onChange={e => updateField('foretag', e.target.value)}
                onFocus={e => { e.target.style.borderColor = 'var(--blue)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,71,255,0.1)' }}
                onBlur={e => { e.target.style.borderColor = ''; e.target.style.boxShadow = '' }}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle} htmlFor="partner-bransch">Bransch / Roll</label>
              <select
                id="partner-bransch"
                style={inp}
                value={form.bransch}
                onChange={e => updateField('bransch', e.target.value)}
              >
                <option value="">Välj din bransch...</option>
                {branches.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={labelStyle} htmlFor="partner-beskrivning">Beskriv kortfattat dina kunder och hur du ser att AI Kollegorna passar in</label>
              <textarea
                id="partner-beskrivning"
                style={{ ...inp, resize: 'none', height: 100 }}
                placeholder="T.ex. 'Jag har 15 SME-kunder inom bygg och fastighet som lägger mycket tid på administration...'"
                value={form.beskrivning}
                onChange={e => updateField('beskrivning', e.target.value)}
                onFocus={e => { e.target.style.borderColor = 'var(--blue)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,71,255,0.1)' }}
                onBlur={e => { e.target.style.borderColor = ''; e.target.style.boxShadow = '' }}
              />
            </div>

            <a
              href={buildMailto()}
              style={{
                display: 'block',
                width: '100%',
                background: 'var(--ink)',
                color: 'var(--white)',
                border: 'none',
                borderRadius: 8,
                padding: '14px 28px',
                fontSize: 15,
                fontWeight: 600,
                fontFamily: 'var(--sans)',
                textDecoration: 'none',
                textAlign: 'center',
                transition: 'opacity .2s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => e.target.style.opacity = '.8'}
              onMouseLeave={e => e.target.style.opacity = '1'}
            >
              Skicka partneransökan →
            </a>

            <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--muted)', marginTop: 16 }}>
              Vi återkommer inom 48h
            </p>
          </div>
        </div>
      </div>

      {/* ─── CTA ─── */}
      <div style={{ background: 'var(--ink)', padding: '80px 48px', textAlign: 'center' }}>
        <h2 style={{ ...sf, fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900, color: 'var(--paper)', lineHeight: 1.1, letterSpacing: -1.5, marginBottom: 16 }}>
          Redo att bli <em style={{ color: '#a78bfa' }}>partner?</em>
        </h2>
        <p style={{ fontSize: 16, fontWeight: 300, color: 'rgba(247,243,238,.6)', marginBottom: 32, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
          Ansök idag och börja tjäna provision på AI-automatisering. Ingen risk, inga startkostnader.
        </p>
        <a href="#partner-ansokan" className="btn-light" style={{ display: 'inline-block' }}>
          Ansök om partnerskap →
        </a>
      </div>
    </>
  )
}
