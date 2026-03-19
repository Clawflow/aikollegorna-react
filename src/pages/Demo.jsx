import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const scenarios = [
  {
    emoji: '🛒',
    title: 'E-handel (produktbilder)',
    before: '8h/vecka på manuell bildhantering. En person dedikerat till att ta bort bakgrunder, ändra format och ladda upp.',
    after: 'AI:n tar emot råbilden, tar bort bakgrunden, optimerar formatet och laddar upp. 3 minuter per batch. 500+ bilder/h.',
    metric: '-96% tidsåtgång',
  },
  {
    emoji: '📧',
    title: 'Kundtjänst (mejlhantering)',
    before: '100+ inkommande mejl/dag. 70% är standardfrågor. En person lägger 4h/dag på svar.',
    after: 'AI:n läser mejlet, kategoriserar det och svarar automatiskt på standardfrågor inom 5 minuter, dygnet runt.',
    metric: '5 min svarstid (vs. 4-8h)',
  },
  {
    emoji: '🏢',
    title: 'Fastighetsförvaltning',
    before: '200 uthyrningsförfrågningar/mån. Varje svar tar 5 min. = 17h/mån manuellt arbete.',
    after: 'AI:n svarar på standardförfrågningar, bokar visningar och eskalerar komplexa ärenden till rätt person.',
    metric: '-75% administrativ tid',
  },
]

const faqs = [
  {
    q: 'Kostar det något att boka ett demo?',
    a: 'Nej, alltid gratis.',
  },
  {
    q: 'Behöver jag ha bestämt mig?',
    a: 'Nej, det är ett utforskande samtal.',
  },
  {
    q: 'Hur lång tid tar ett demo?',
    a: '30 minuter. Vi visar hur det fungerar för just er bransch.',
  },
]

const companyTypes = ['E-handel', 'Fastighet', 'Redovisning', 'Juridik', 'Bygg', 'Annat']

function useFadeUp() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export default function Demo() {
  useFadeUp()

  const [openScenario, setOpenScenario] = useState(null)
  const [openFaq, setOpenFaq] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', type: '' })
  const formRef = useRef(null)

  useEffect(() => {
    document.title = 'Se demo — AI kollegorna'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Se hur AI-medarbetaren fungerar i praktiken. Boka ett gratis live-demo och upptäck hur AI kan effektivisera just ert företag.')
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent('Demobegäran från ' + form.name)
    const body = encodeURIComponent(
      `Namn: ${form.name}\nE-post: ${form.email}\nFöretagstyp: ${form.type}\n\nJag vill boka ett live-demo.`
    )
    window.location.href = `mailto:hej@aikollegorna.se?subject=${subject}&body=${body}`
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="demo-hero">
        <div id="hero-sentinel" />
        <div className="demo-hero-inner">
          <span className="demo-badge fade-up">LIVE DEMO</span>
          <h1 className="fade-up">Se AI-medarbetaren i aktion</h1>
          <p className="fade-up">Inget krångel, ingen installation — se hur det ser ut för ert företag på 5 minuter.</p>
          <a href="#demo-form" className="demo-hero-btn fade-up">Boka demo →</a>
        </div>
      </section>

      {/* ── VIDEO PLACEHOLDER ── */}
      <section className="demo-video-section fade-up">
        <div className="demo-video-placeholder">
          <div className="demo-play-btn">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M8 5.14v13.72a1 1 0 001.5.86l11.04-6.86a1 1 0 000-1.72L9.5 4.28a1 1 0 00-1.5.86z" fill="#7C3AED"/>
            </svg>
          </div>
          <p className="demo-video-title">Demo-video — lanseras snart</p>
          <p className="demo-video-sub">Under tiden — <a href="#demo-form">boka ett live-demo med Anton</a></p>
        </div>
      </section>

      {/* ── SCENARIOS ── */}
      <section className="demo-scenarios-section">
        <div className="demo-scenarios-inner">
          <span className="demo-label fade-up">SCENARIOS</span>
          <h2 className="fade-up">Se skillnaden — before &amp; after</h2>
          <p className="demo-scenarios-sub fade-up">Klicka på ett scenario för att se hur AI-medarbetaren förändrar vardagen.</p>
          <div className="demo-scenarios-grid">
            {scenarios.map((s, i) => {
              const isOpen = openScenario === i
              return (
                <div
                  key={i}
                  className={`demo-scenario-card fade-up${isOpen ? ' open' : ''}`}
                  onClick={() => setOpenScenario(isOpen ? null : i)}
                >
                  <div className="demo-scenario-header">
                    <span className="demo-scenario-emoji">{s.emoji}</span>
                    <h3>{s.title}</h3>
                    <span className="demo-scenario-metric">{s.metric}</span>
                    <svg className="demo-scenario-chevron" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="demo-scenario-body">
                    <div className="demo-scenario-col before">
                      <span className="demo-scenario-tag">Before</span>
                      <p>{s.before}</p>
                    </div>
                    <div className="demo-scenario-arrow">→</div>
                    <div className="demo-scenario-col after">
                      <span className="demo-scenario-tag">After</span>
                      <p>{s.after}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── DEMO FORM ── */}
      <section className="demo-form-section" id="demo-form">
        <div className="demo-form-inner fade-up">
          <h2>Boka ett live-demo</h2>
          <p className="demo-form-sub">Fyll i formuläret så hör vi av oss inom 24h.</p>
          <form ref={formRef} onSubmit={handleSubmit} className="demo-form">
            <div className="demo-form-field">
              <label htmlFor="demo-name">Namn</label>
              <input
                id="demo-name"
                type="text"
                required
                placeholder="Ditt namn"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="demo-form-field">
              <label htmlFor="demo-email">E-post</label>
              <input
                id="demo-email"
                type="email"
                required
                placeholder="namn@foretag.se"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="demo-form-field">
              <label htmlFor="demo-type">Vilken typ av företag</label>
              <select
                id="demo-type"
                required
                value={form.type}
                onChange={e => setForm({ ...form, type: e.target.value })}
              >
                <option value="" disabled>Välj typ...</option>
                {companyTypes.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="demo-submit-btn">Boka demo →</button>
          </form>
          <p className="demo-form-note">Vi svarar inom 24h och bokar ett 30-minuterssamtal</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="demo-faq-section">
        <div className="demo-faq-inner">
          <span className="demo-label fade-up">VANLIGA FRÅGOR</span>
          <h2 className="fade-up">Frågor om demo</h2>
          <div className="demo-faq-list">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i
              return (
                <div
                  key={i}
                  className={`demo-faq-item fade-up${isOpen ? ' open' : ''}`}
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                >
                  <div className="demo-faq-question">
                    <span>{f.q}</span>
                    <svg className="demo-faq-chevron" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="demo-faq-answer">
                    <p>{f.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
