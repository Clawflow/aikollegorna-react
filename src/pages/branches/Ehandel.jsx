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
    icon: '🖼️',
    title: 'Bildoptimering',
    desc: 'AI-medarbetaren optimerar produktbilder automatiskt — anpassar storlek, komprimerar för snabb laddning, genererar alt-texter för SEO och skapar varianter för olika plattformar och annonser.'
  },
  {
    icon: '📦',
    title: 'Orderuppföljning',
    desc: 'Hanterar orderbekräftelser, leveransuppdateringar och returer automatiskt. Kunder får proaktiva statusmeddelanden och ni slipper manuella uppföljningsmail efter varje köp.'
  },
  {
    icon: '💬',
    title: 'Kundtjänst',
    desc: 'Svarar på kundernas frågor om produkter, frakt, returer och byten dygnet runt. Hanterar 80% av alla ärenden utan mänsklig inblandning — med svarstider på sekunder, inte timmar.'
  }
]

const faqs = [
  { q: 'Fungerar AI:n med Shopify, WooCommerce och Klarna?', a: 'Ja. Vi integrerar med alla stora e-handelsplattformar — Shopify, WooCommerce, Magento, Centra — samt betallösningar som Klarna, Stripe och Swish. AI:n läser ordrar, hanterar returer och svarar på kundfrågor direkt.' },
  { q: 'Kan AI:n hantera returer och reklamationer?', a: 'Absolut. AI:n bedömer returförfrågningar baserat på era policyer, genererar returfraktsedlar, uppdaterar orderstatus och kommunicerar med kunden genom hela processen. Komplexa fall eskaleras automatiskt.' },
  { q: 'Hur hanteras Black Friday och kampanjperioder?', a: 'AI-medarbetaren skalar utan begränsning. Under kampanjperioder hanterar den hundratals samtidiga kundärenden utan att svarstiden påverkas — medan ert team fokuserar på strategi och logistik.' },
  { q: 'Kan AI:n skriva produktbeskrivningar?', a: 'Ja. AI:n genererar SEO-optimerade produktbeskrivningar baserade på produktdata, bilder och er tonalitet. Den kan skapa unika texter för hundratals produkter på en bråkdel av tiden det tar manuellt.' }
]

const sf = { fontFamily: 'var(--serif)' }

export default function Ehandel() {
  useFadeUp()
  const [open, setOpen] = useState(null)

  useEffect(() => {
    document.title = 'E-handel AI-medarbetare | AI Kollegorna'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'AI-medarbetare för e-handel. Automatisera bildoptimering, orderuppföljning och kundtjänst. Spara 30+ timmar per vecka. Integrera med Shopify, WooCommerce och Klarna.')
    let og = document.querySelector('meta[property="og:title"]')
    if (!og) { og = document.createElement('meta'); og.setAttribute('property', 'og:title'); document.head.appendChild(og) }
    og.setAttribute('content', 'E-handel AI-medarbetare | AI Kollegorna')
    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (!ogDesc) { ogDesc = document.createElement('meta'); ogDesc.setAttribute('property', 'og:description'); document.head.appendChild(ogDesc) }
    ogDesc.setAttribute('content', 'Automatisera bildoptimering, orderuppföljning och kundtjänst med AI. On-premise, GDPR-säkert.')
  }, [])

  return (
    <>
      {/* HERO */}
      <div className="branch-hero">
        <div className="branch-hero-inner">
          <span className="branch-badge fade-up">AI Kollegorna för e-handel</span>
          <h1 className="fade-up" style={{ ...sf, fontSize: 'clamp(38px,5vw,64px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, marginBottom: 20, color: 'var(--ink)' }}>
            E-handel + AI — <br /><em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>Din nya medarbetare är alltid tillgänglig</em>
          </h1>
          <p className="fade-up" style={{ fontSize: 18, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, maxWidth: 560, margin: '0 auto 36px' }}>
            Returer, kundärenden och produktuppdateringar äter er tid. AI-medarbetaren sköter driften — så ni kan fokusera på tillväxt och sortimentsutveckling.
          </p>
          <a href="https://clawflow.github.io/agent-configurator/" target="_blank" rel="noopener noreferrer" className="btn-dark fade-up">
            Konfigurera för e-handel →
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
              <div className="branch-roi-num">30+</div>
              <div className="branch-roi-label">timmar/vecka</div>
              <p className="branch-roi-desc">Sparade på kundtjänst, orderhantering och produktunderhåll</p>
            </div>
            <div className="branch-roi-card fade-up" style={{ transitionDelay: '.1s' }}>
              <div className="branch-roi-num">600 000</div>
              <div className="branch-roi-label">kr/år</div>
              <p className="branch-roi-desc">Minskade kostnader för kundtjänst och manuell orderhantering</p>
            </div>
            <div className="branch-roi-card fade-up" style={{ transitionDelay: '.2s' }}>
              <div className="branch-roi-num">85%</div>
              <div className="branch-roi-label">av uppgifter automatiserade</div>
              <p className="branch-roi-desc">Av kundärenden och orderuppföljning hanteras helt automatiskt</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ background: 'var(--white)', padding: '80px 48px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 className="fade-up" style={{ ...sf, fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 900, letterSpacing: -1.5, marginBottom: 40 }}>Vanliga frågor — E-handel</h2>
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
          Redo att skala er <em style={{ fontStyle: 'italic' }}>e-handel?</em>
        </h2>
        <p className="fade-up" style={{ fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,.65)', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
          Konfigurera er AI-medarbetare på 3 minuter. Integrera med Shopify, WooCommerce eller er egen plattform.
        </p>
        <a href="https://clawflow.github.io/agent-configurator/" target="_blank" rel="noopener noreferrer" className="btn-light-solid fade-up">
          Konfigurera för e-handel →
        </a>
      </div>
    </>
  )
}
