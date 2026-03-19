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

const sf = { fontFamily: 'var(--serif)' }

const branscher = [
  'Fastighet', 'Redovisning & ekonomi', 'E-handel', 'Juridik',
  'Bygg & entreprenad', 'Hälsa & sjukvård', 'Konsult', 'Marknadsföring',
  'Logistik & transport', 'Utbildning', 'Annat'
]

const faqs = [
  { q: 'Är det verkligen gratis?', a: 'Ja, helt gratis. Ingen dold kostnad eller åtagande. Vi gör detta för att vi tror på att visa värde först.' },
  { q: 'Hur lång tid tar det?', a: '60 minuter, digitalt via Google Meet. Vi skickar en länk i bekräftelsemailet.' },
  { q: 'Vad händer efteråt?', a: 'Ni får en skriftlig sammanfattning med konkreta rekommendationer. Om ni vill testa AI Kollegorna efter det är det helt ert val — ingen push från vår sida.' },
  { q: 'Måste vi köpa något?', a: 'Aldrig. Det är ett utforskande möte. Ni lämnar sessionen med en handlingsplan ni kan använda oavsett leverantör.' },
]

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

const labelStyle = {
  display: 'block',
  fontSize: 12,
  fontWeight: 600,
  marginBottom: 6,
  color: 'var(--muted)',
  textTransform: 'uppercase',
  letterSpacing: '.08em'
}

const MESSAGE_MAX = 300

export default function AIRevision() {
  useFadeUp()

  useEffect(() => {
    document.title = 'Gratis AI-revision — 60 min med Anton | AI kollegorna'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Boka en kostnadsfri 60-minuters AI-revision. Vi kartlägger era processer och visar exakt vad AI kan automatisera — utan förpliktelser.')

    // Structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'ai-revision-schema'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Gratis AI-revision',
      provider: { '@type': 'Organization', name: 'AI kollegorna' },
      description: '60-minuters gratissession där vi kartlägger era processer och identifierar vad som kan automatiseras med AI.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' }
    })
    document.head.appendChild(script)
    return () => document.getElementById('ai-revision-schema')?.remove()
  }, [])

  const [form, setForm] = useState({
    namn: '', epost: '', telefon: '', foretag: '', bransch: '', tidstjuv: ''
  })
  const [faqOpen, setFaqOpen] = useState(null)

  function updateField(key, value) {
    if (key === 'tidstjuv' && value.length > MESSAGE_MAX) return
    setForm(prev => ({ ...prev, [key]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent('Gratis AI-revision')
    const body = encodeURIComponent(
      `Hej Anton!\n\nJag vill boka en gratis AI-revision.\n\n` +
      `Namn: ${form.namn}\n` +
      `E-post: ${form.epost}\n` +
      `Telefon: ${form.telefon || 'Ej angett'}\n` +
      `Företag: ${form.foretag}\n` +
      `Bransch: ${form.bransch || 'Ej angett'}\n` +
      `Största tidstjuv: ${form.tidstjuv || 'Ej angett'}\n\n` +
      `Tack!`
    )
    window.location.href = `mailto:hej@aikollegorna.se?subject=${subject}&body=${body}`
  }

  return (
    <>
      {/* ─── HERO ─── */}
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '120px 48px 60px', textAlign: 'center' }}>
        <div className="fade-up" style={{
          display: 'inline-block', background: 'rgba(0,71,255,0.08)', border: '1px solid rgba(0,71,255,0.15)',
          borderRadius: 999, padding: '6px 18px', fontSize: 13, fontWeight: 600, color: 'var(--blue)', marginBottom: 24
        }}>
          <span role="img" aria-label="gratis">🆓</span> Helt kostnadsfritt
        </div>
        <h1 className="fade-up" style={{ ...sf, fontSize: 'clamp(36px,5vw,64px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, marginBottom: 20 }}>
          Gratis AI-revision<br />av ditt <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>företag</em>
        </h1>
        <p className="fade-up" style={{ fontSize: 17, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, maxWidth: 520, margin: '0 auto 36px' }}>
          60 minuter med Anton. Vi kartlägger era processer och berättar exakt vad AI kan automatisera — utan förpliktelser.
        </p>
        <a href="#boka" className="btn-dark fade-up" style={{ fontSize: 15 }}>Boka gratis AI-revision →</a>
      </div>

      {/* ─── VAD INGÅR ─── */}
      <div style={{ background: 'var(--white)', padding: '80px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16, textAlign: 'center' }}>Vad ingår</p>
          <h2 className="fade-up" style={{ ...sf, fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 900, letterSpacing: -1.5, marginBottom: 48, textAlign: 'center' }}>
            60 minuter som kan förändra <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>allt</em>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="revision-cards-grid">
            {[
              { icon: '🔍', title: 'Processanalys', desc: 'Vi går igenom era 3 mest tidskrävande administrativa uppgifter och identifierar flaskhalsar.' },
              { icon: '📊', title: 'ROI-beräkning', desc: 'Ni får en specifik kalkyl: "Ni kan spara X timmar och Y kr/år" — baserat på era faktiska siffror.' },
              { icon: '📋', title: 'Handlingsplan', desc: 'Ni lämnar mötet med en konkret plan, oavsett om ni blir kunder eller inte.' },
            ].map((card, i) => (
              <div key={card.title} className="fade-up" style={{
                background: 'var(--paper)', border: '1px solid var(--border)', borderRadius: 16, padding: 36,
                transitionDelay: `${i * 0.1}s`
              }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{card.icon}</div>
                <h3 style={{ ...sf, fontSize: 22, fontWeight: 700, marginBottom: 10 }}>{card.title}</h3>
                <p style={{ fontSize: 15, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.7 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SOCIAL PROOF ─── */}
      <div style={{ padding: '80px 48px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div className="fade-up" style={{
            background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 20, padding: '48px 40px', marginBottom: 40
          }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 20, opacity: 0.12 }}>
              <path d="M10 8H6C4.9 8 4 8.9 4 10V18C4 19.1 4.9 20 6 20H10C11.1 20 12 19.1 12 18V10C12 8.9 11.1 8 10 8ZM10 18H6V14H10V18ZM20 4H14L12 8H14V12H20V6C20 4.9 19.1 4 18 4H20Z" fill="var(--ink)" />
            </svg>
            <p style={{ ...sf, fontSize: 'clamp(18px,2.5vw,24px)', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.6, marginBottom: 20, color: 'var(--ink)' }}>
              "Vi fick en plan vi kunde använda oavsett om vi valt AI Kollegorna eller ej. Extremt värdeskapande."
            </p>
            <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--muted)' }}>— Marcus, Wristbuddys</p>
          </div>

          <div className="fade-up" style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(0,71,255,0.08) 100%)',
            border: '1px solid rgba(124,58,237,0.15)',
            borderRadius: 12, padding: '24px 32px'
          }}>
            <p style={{ fontSize: 15, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.6 }}>
              <span style={{ ...sf, fontSize: 28, fontWeight: 900, color: '#7C3AED', display: 'block', marginBottom: 6 }}>100%</span>
              av dem som genomfört en AI-revision har hittat minst 3 processer att automatisera
            </p>
          </div>
        </div>
      </div>

      {/* ─── FORMULÄR ─── */}
      <div id="boka" style={{ background: 'var(--white)', padding: '80px 48px' }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16, textAlign: 'center' }}>Boka nu</p>
          <h2 className="fade-up" style={{ ...sf, fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 900, letterSpacing: -1.5, marginBottom: 12, textAlign: 'center' }}>
            Boka din gratis <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>AI-revision</em>
          </h2>
          <p className="fade-up" style={{ fontSize: 15, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.7, textAlign: 'center', marginBottom: 40 }}>
            Fyll i formuläret så hör Anton av sig inom 24 timmar för att boka er session.
          </p>

          <form onSubmit={handleSubmit} noValidate className="fade-up" style={{
            background: 'var(--paper)', border: '1px solid var(--border)', borderRadius: 20, padding: 40
          }}>
            {/* Namn */}
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle} htmlFor="rev-namn">Namn *</label>
              <input
                id="rev-namn" type="text" required placeholder="Erik Svensson"
                style={inp} value={form.namn}
                onChange={e => updateField('namn', e.target.value)}
                onFocus={e => { e.target.style.borderColor = 'var(--blue)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,71,255,0.1)' }}
                onBlur={e => { e.target.style.borderColor = ''; e.target.style.boxShadow = '' }}
              />
            </div>

            {/* E-post */}
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle} htmlFor="rev-epost">E-post *</label>
              <input
                id="rev-epost" type="email" required placeholder="erik@foretaget.se"
                style={inp} value={form.epost}
                onChange={e => updateField('epost', e.target.value)}
                onFocus={e => { e.target.style.borderColor = 'var(--blue)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,71,255,0.1)' }}
                onBlur={e => { e.target.style.borderColor = ''; e.target.style.boxShadow = '' }}
              />
            </div>

            {/* Telefon */}
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle} htmlFor="rev-telefon">Telefon <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(valfritt)</span></label>
              <input
                id="rev-telefon" type="tel" placeholder="070-123 45 67"
                style={inp} value={form.telefon}
                onChange={e => updateField('telefon', e.target.value)}
                onFocus={e => { e.target.style.borderColor = 'var(--blue)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,71,255,0.1)' }}
                onBlur={e => { e.target.style.borderColor = ''; e.target.style.boxShadow = '' }}
              />
            </div>

            {/* Företag */}
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle} htmlFor="rev-foretag">Företag *</label>
              <input
                id="rev-foretag" type="text" required placeholder="Ditt företags namn"
                style={inp} value={form.foretag}
                onChange={e => updateField('foretag', e.target.value)}
                onFocus={e => { e.target.style.borderColor = 'var(--blue)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,71,255,0.1)' }}
                onBlur={e => { e.target.style.borderColor = ''; e.target.style.boxShadow = '' }}
              />
            </div>

            {/* Bransch */}
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle} htmlFor="rev-bransch">Bransch</label>
              <select
                id="rev-bransch"
                style={inp} value={form.bransch}
                onChange={e => updateField('bransch', e.target.value)}
              >
                <option value="">Välj bransch...</option>
                {branscher.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>

            {/* Tidstjuv */}
            <div style={{ marginBottom: 24, position: 'relative' }}>
              <label style={labelStyle} htmlFor="rev-tidstjuv">Vad är er största tidstjuv just nu?</label>
              <textarea
                id="rev-tidstjuv"
                style={{ ...inp, resize: 'none', height: 100 }}
                placeholder="T.ex. manuell fakturering, kunduppföljning, rapportering..."
                value={form.tidstjuv}
                onChange={e => updateField('tidstjuv', e.target.value)}
                onFocus={e => { e.target.style.borderColor = 'var(--blue)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,71,255,0.1)' }}
                onBlur={e => { e.target.style.borderColor = ''; e.target.style.boxShadow = '' }}
                maxLength={MESSAGE_MAX}
              />
              <div style={{
                position: 'absolute', bottom: 8, right: 12, fontSize: 11, fontWeight: 500,
                color: form.tidstjuv.length > MESSAGE_MAX * 0.9 ? '#dc2626' : 'var(--muted)',
                opacity: form.tidstjuv.length > 0 ? 1 : 0, transition: 'opacity .2s', pointerEvents: 'none'
              }}>
                {form.tidstjuv.length}/{MESSAGE_MAX}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!form.namn.trim() || !form.epost.trim() || !form.foretag.trim()}
              style={{
                width: '100%', background: 'var(--ink)', color: 'var(--white)', border: 'none',
                borderRadius: 8, padding: '14px 28px', fontSize: 15, fontWeight: 600,
                fontFamily: 'var(--sans)', cursor: 'pointer', transition: 'opacity .2s',
                opacity: (!form.namn.trim() || !form.epost.trim() || !form.foretag.trim()) ? 0.5 : 1
              }}
              onMouseEnter={e => e.target.style.opacity = '0.8'}
              onMouseLeave={e => {
                e.target.style.opacity = (!form.namn.trim() || !form.epost.trim() || !form.foretag.trim()) ? '0.5' : '1'
              }}
            >
              Boka gratis AI-revision →
            </button>

            <p style={{ fontSize: 13, color: 'var(--muted)', textAlign: 'center', marginTop: 16, fontWeight: 400 }}>
              Inga säljpitchar. Inga åtaganden. Bara värde.
            </p>
          </form>
        </div>
      </div>

      {/* ─── FAQ ─── */}
      <div style={{ padding: '80px 48px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>FAQ</p>
          <h2 className="fade-up" style={{ ...sf, fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 900, letterSpacing: -1.5, marginBottom: 40 }}>
            Vanliga frågor
          </h2>
          {faqs.map((f, i) => (
            <div key={i} className="fade-up" style={{ borderBottom: '1px solid var(--border)' }}>
              <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} style={{
                width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                fontSize: 15, fontWeight: 600, color: 'var(--ink)', fontFamily: 'var(--sans)'
              }}>
                {f.q}
                <span style={{ fontSize: 20, color: 'var(--muted)', marginLeft: 16, flexShrink: 0, transition: 'transform .2s', transform: faqOpen === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
              </button>
              <div style={{ maxHeight: faqOpen === i ? 300 : 0, overflow: 'hidden', transition: 'max-height .3s ease' }}>
                <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, paddingBottom: 20 }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── CTA BANNER ─── */}
      <div className="revision-cta-banner" style={{
        background: 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 50%, #0047FF 100%)',
        padding: '60px 48px', textAlign: 'center'
      }}>
        <h2 className="fade-up" style={{ ...sf, fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.15, letterSpacing: -1, marginBottom: 12 }}>
          Begränsat antal platser
        </h2>
        <p className="fade-up" style={{ fontSize: 17, fontWeight: 400, color: 'rgba(255,255,255,0.8)', marginBottom: 28 }}>
          Vi erbjuder 3 revisioner per vecka — boka din plats idag.
        </p>
        <a href="#boka" className="fade-up" style={{
          display: 'inline-block', background: '#FFFFFF', color: '#4F46E5', borderRadius: 8,
          padding: '14px 32px', fontSize: 15, fontWeight: 700, textDecoration: 'none',
          fontFamily: 'var(--sans)', transition: 'opacity .2s'
        }}
          onMouseEnter={e => e.target.style.opacity = '0.9'}
          onMouseLeave={e => e.target.style.opacity = '1'}
        >
          Boka gratis AI-revision →
        </a>
      </div>
    </>
  )
}
