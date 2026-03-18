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

const inp = { width: '100%', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 8, padding: '12px 16px', fontSize: 14, fontFamily: 'var(--sans)', color: 'var(--ink)', outline: 'none', transition: 'border-color .2s' }

export default function Kontakt() {
  useFadeUp()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ fname: '', lname: '', email: '', company: '', area: '', message: '' })

  return (
    <>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '120px 48px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
        {/* Left col */}
        <div>
          <p className="fade-up" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>Kontakta oss</p>
          <h1 className="fade-up" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px,4.5vw,60px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, marginBottom: 20 }}>
            Låt oss prata<br /><em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>om ditt företag.</em>
          </h1>
          <p className="fade-up" style={{ fontSize: 17, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 40 }}>
            Boka ett kostnadsfritt 30-minuterssamtal. Vi lyssnar på era utmaningar, identifierar rätt use-case och berättar hur en AI-medarbetare på en Mac Mini kan hjälpa.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { icon: '✉️', label: 'E-post', val: <a href="mailto:hej@aikollegorna.se" style={{ color: 'var(--blue)', textDecoration: 'none' }}>hej@aikollegorna.se</a> },
              { icon: '📍', label: 'Plats', val: 'Sverige — vi levererar till hela landet' },
              { icon: '⏱️', label: 'Svarstid', val: 'Inom 24 timmar på vardagar' },
              { icon: '📦', label: 'Leveranstid', val: 'Mac Mini installerad inom 14 dagar' },
            ].map(r => (
              <div key={r.label} className="fade-up" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 36, height: 36, background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>{r.icon}</div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>{r.label}</div>
                  <div style={{ fontSize: 15, fontWeight: 500 }}>{r.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="fade-up" style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 20, padding: 40 }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Tack för din förfrågan!</h3>
              <p style={{ color: 'var(--muted)', fontSize: 15 }}>Vi hör av oss inom 24 timmar.</p>
            </div>
          ) : (
            <>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 700, letterSpacing: -1, marginBottom: 28 }}>Boka ett samtal</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 6, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em' }}>Förnamn</label>
                  <input style={inp} type="text" placeholder="Erik" value={form.fname} onChange={e=>setForm({...form,fname:e.target.value})} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 6, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em' }}>Efternamn</label>
                  <input style={inp} type="text" placeholder="Svensson" value={form.lname} onChange={e=>setForm({...form,lname:e.target.value})} />
                </div>
              </div>
              {[
                { label: 'E-post', key: 'email', type: 'email', ph: 'erik@foretaget.se' },
                { label: 'Företag', key: 'company', type: 'text', ph: 'Ditt företags namn' },
              ].map(f => (
                <div key={f.key} style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 6, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em' }}>{f.label}</label>
                  <input style={inp} type={f.type} placeholder={f.ph} value={form[f.key]} onChange={e=>setForm({...form,[f.key]:e.target.value})} />
                </div>
              ))}
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 6, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em' }}>Vad vill du automatisera?</label>
                <select style={{ ...inp }} value={form.area} onChange={e=>setForm({...form,area:e.target.value})}>
                  <option value="">Välj ett område...</option>
                  <option>Sälj & leadsgenerering</option>
                  <option>Marknadsföring & content</option>
                  <option>Kundsupport</option>
                  <option>Administration</option>
                  <option>Flera områden</option>
                </select>
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 6, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em' }}>Meddelande (valfritt)</label>
                <textarea style={{ ...inp, resize: 'none', height: 100 }} placeholder="Berätta kort om er situation och vilka utmaningar ni vill lösa..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
              </div>
              <button onClick={() => setSent(true)} style={{ width: '100%', background: 'var(--ink)', color: 'var(--white)', border: 'none', borderRadius: 8, padding: '14px 28px', fontSize: 15, fontWeight: 600, fontFamily: 'var(--sans)', cursor: 'pointer', transition: 'opacity .2s' }}
                onMouseEnter={e=>e.target.style.opacity='.8'} onMouseLeave={e=>e.target.style.opacity='1'}>
                Skicka förfrågan →
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}
