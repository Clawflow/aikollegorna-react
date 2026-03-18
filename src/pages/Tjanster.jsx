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

const services = [
  {
    num: '01', role: 'Sälj & Affärsutveckling', name: 'Säljaren',
    desc: 'Jobbar som en senior säljare — men utan lön, semesterdagar eller sjukfrånvaro. Identifierar leads, personaliserar outreach och håller CRM:et uppdaterat dygnet runt.',
    tasks: ['🔍 Lead-research','✉️ Outreach-mail','💼 LinkedIn DM','📅 Mötesbokning','📊 CRM-uppdatering','📝 Offertskrivning'],
    roiLabel: 'ROI-kalkyl',
    roiRows: [['B2B-säljare (anställd)','600 000 kr/år',false],['AI-medarbetare','60 000 kr/år',true],['Din besparing','540 000 kr',true]],
    cta: 'Anställ Säljaren →'
  },
  {
    num: '02', role: 'Marknad & Content', name: 'Marknadsassistenten',
    desc: 'Publicerar, optimerar och håller er digitala närvaro levande — varje dag. Skriver artiklar i er ton, hanterar LinkedIn och säkerställer att ni syns där era kunder söker.',
    tasks: ['📄 SEO-artiklar','💼 LinkedIn-hantering','📱 Sociala medier','📊 Contentanalys','🎯 Kampanjhantering','📧 Nyhetsbrev'],
    roiLabel: 'ROI-kalkyl',
    roiRows: [['Marknadsassistent (anställd)','500 000 kr/år',false],['AI-medarbetare','60 000 kr/år',true],['Din besparing','440 000 kr',true]],
    cta: 'Anställ Marknadsassistenten →'
  },
  {
    num: '03', role: 'Kundsupport & Service', name: 'Supportagenten',
    desc: 'Svarar på kundärenden dygnet runt med svarstider på sekunder. Kategoriserar, prioriterar och eskalerar rätt — och håller kundnöjdheten hög utan att ni behöver anställa mer personal.',
    tasks: ['📬 Mailhantering','🎫 Ärendehantering','↗️ Eskalering','📊 Supportstatistik','💬 Chatsvar','📚 FAQ-hantering'],
    roiLabel: 'Tillgänglighet',
    roiRows: [['Mänsklig support','08:00–17:00',false],['AI-medarbetare','24/7/365',true],['Genomsnittlig svarstid','< 30 sek',true]],
    cta: 'Anställ Supportagenten →'
  }
]

export default function Tjanster() {
  useFadeUp()
  return (
    <>
      <div className="page-hero" style={{ paddingTop: 120, paddingBottom: 60 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>Våra tjänster</p>
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(42px,5vw,68px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, marginBottom: 16 }}>
          Tre medarbetare.<br /><em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>Oändlig kapacitet.</em>
        </h1>
        <p style={{ fontSize: 17, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, maxWidth: 500, margin: '0 auto' }}>
          Välj den AI-medarbetare som löser ert mest akuta problem. Eller bygg hela teamet. Allt kör på en Mac Mini — installerad på ert kontor.
        </p>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 48px 100px' }}>
        {services.map((s) => (
          <div key={s.num} className="fade-up" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, padding: '60px 0', borderTop: '1px solid var(--border)' }}>
            <div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 80, fontWeight: 900, color: 'rgba(13,13,13,.08)', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 10, marginTop: -8 }}>{s.role}</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 36, fontWeight: 700, letterSpacing: -1, marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: s.name }} />
              <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 28 }}>{s.desc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {s.tasks.map(t => <div key={t} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 8, padding: '12px 16px', fontSize: 13, fontWeight: 500 }}>{t}</div>)}
              </div>
            </div>
            <div style={{ paddingTop: 16 }}>
              <div style={{ background: 'var(--ink)', borderRadius: 16, padding: 32, color: 'var(--paper)', marginBottom: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(247,243,238,.4)', marginBottom: 16 }}>{s.roiLabel}</div>
                {s.roiRows.map(([label, val, hi]) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid rgba(247,243,238,.08)' }}>
                    <span style={{ fontSize: 13, color: 'rgba(247,243,238,.6)' }}>{label}</span>
                    <strong style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 700, color: hi ? 'var(--blue)' : 'var(--paper)' }}>{val}</strong>
                  </div>
                ))}
              </div>
              <Link to="/kontakt" style={{ display: 'block', textAlign: 'center', background: 'var(--paper)', border: '1.5px solid var(--border)', borderRadius: 8, padding: 14, fontSize: 14, fontWeight: 600, textDecoration: 'none', color: 'var(--ink)', transition: 'background .2s' }}
                onMouseEnter={e => { e.target.style.background = 'var(--ink)'; e.target.style.color = 'var(--white)'; e.target.style.borderColor = 'var(--ink)' }}
                onMouseLeave={e => { e.target.style.background = 'var(--paper)'; e.target.style.color = 'var(--ink)'; e.target.style.borderColor = 'var(--border)' }}>
                {s.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: 'var(--ink)', padding: '80px 48px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900, color: 'var(--paper)', lineHeight: 1.1, letterSpacing: -1.5, marginBottom: 16 }}>
          Redo att anställa din<br /><em style={{ color: 'var(--blue)' }}>första AI-medarbetare?</em>
        </h2>
        <p style={{ fontSize: 16, fontWeight: 300, color: 'rgba(247,243,238,.6)', marginBottom: 32 }}>Boka ett kostnadsfritt 30-minuterssamtal. Vi identifierar rätt use-case och levererar på 2 veckor.</p>
        <Link to="/kontakt" className="btn-light">Boka ett samtal →</Link>
      </div>
    </>
  )
}
