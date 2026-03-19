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

export default function Case() {
  useFadeUp()
  useEffect(() => {
    document.title = 'Wristbuddys — Fallstudie | AI kollegorna'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Hur Wristbuddys gick från 8 timmar till 20 minuter bildarbete per vecka med en AI-medarbetare på kontoret. Läs hela fallstudien.')
  }, [])

  return (
    <>
      {/* HERO */}
      <section className="case-hero">
        <div className="case-hero-inner">
          <p className="case-label">Fallstudie</p>
          <h1 className="case-h1 fade-up">
            Wristbuddys — från <em>8 timmar</em> till <em>20 minuter</em> bildarbete.
          </h1>
          <p className="case-hero-sub fade-up">
            Sveriges snabbast växande e-handelsbolag inom accessoarer automatiserade sin bildbearbetning med en AI-medarbetare installerad direkt på kontoret.
          </p>
          <div className="case-award-badge fade-up">
            🏆 Sveriges snabbast växande e-handlare 2025
            <span>Svea Bank / UC — 2 334% tillväxt</span>
          </div>
          <div className="case-hero-meta fade-up">
            <div className="case-meta-item">
              <span className="case-meta-label">Bransch</span>
              <span className="case-meta-value">E-handel</span>
            </div>
            <div className="case-meta-divider" />
            <div className="case-meta-item">
              <span className="case-meta-label">Lösning</span>
              <span className="case-meta-value">Bildbearbetning</span>
            </div>
            <div className="case-meta-divider" />
            <div className="case-meta-item">
              <span className="case-meta-label">Tid</span>
              <span className="case-meta-value">2 veckors setup</span>
            </div>
          </div>
        </div>
      </section>

      {/* BAKGRUND */}
      <section className="case-section">
        <div className="case-section-inner">
          <div className="case-content-grid">
            <div>
              <p className="case-section-label">Bakgrund</p>
              <h2 className="case-h2 fade-up">Sveriges snabbast växande<br />e-handel 2024.</h2>
            </div>
            <div className="fade-up">
              <p className="case-body">
                Wristbuddys har sålt över 200 000 armband och blivit ett av Sveriges snabbast växande e-handelsbolag. Med ett sortiment som ständigt uppdateras behöver de producera hundratals produktbilder varje vecka — alla med konsekvent bakgrund, rätt storlek och optimering för webben.
              </p>
              <p className="case-body">
                Bakom framgången gömde sig ett tidskrävande arbetsmoment som stal resurser från det som verkligen drev tillväxt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UTMANINGEN */}
      <section className="case-section case-section-alt">
        <div className="case-section-inner">
          <div className="case-content-grid">
            <div>
              <p className="case-section-label">Utmaningen</p>
              <h2 className="case-h2 fade-up">8 timmar per vecka<br />på manuellt bildarbete.</h2>
            </div>
            <div className="fade-up">
              <p className="case-body">
                Varje ny produkt krävde manuell bakgrundsborttagning, storleksanpassning, filnamnskonvention och optimering för webben. Det var repetitivt, tidskrävande och stal fokus från produktutveckling och marknadsföring.
              </p>
              <div className="case-pain-list">
                {[
                  'Manuell bakgrundsborttagning i Photoshop — bild för bild',
                  'Inkonsekvent kvalitet beroende på vem som utförde arbetet',
                  '8 timmar per vecka som kunde lagts på tillväxtdrivande arbete',
                  'Flaskhals som bromsade time-to-market för nya produkter',
                ].map(pain => (
                  <div key={pain} className="case-pain-item">
                    <span className="case-pain-x">✕</span>
                    <span>{pain}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LÖSNINGEN */}
      <section className="case-section">
        <div className="case-section-inner">
          <div className="case-content-grid">
            <div>
              <p className="case-section-label">Lösningen</p>
              <h2 className="case-h2 fade-up">En AI-medarbetare<br />på kontoret.</h2>
            </div>
            <div className="fade-up">
              <p className="case-body">
                Vi installerade en Mac Mini på Wristbuddys kontor — konfigurerad med en AI-medarbetare specialiserad på bildbearbetning. Medarbetaren bevakar en mapp, och så fort nya produktfoton läggs in startar processen automatiskt:
              </p>
              <div className="case-solution-steps">
                {[
                  { num: '01', text: 'Automatisk bakgrundsborttagning med AI-precision' },
                  { num: '02', text: 'Storleksanpassning och centrering enligt Wristbuddys bildstandard' },
                  { num: '03', text: 'Optimering för webben — rätt format, rätt filstorlek' },
                  { num: '04', text: 'Automatisk filnamnskonvention och mappstruktur' },
                ].map(step => (
                  <div key={step.num} className="case-solution-step">
                    <div className="case-solution-num">{step.num}</div>
                    <p>{step.text}</p>
                  </div>
                ))}
              </div>
              <p className="case-body" style={{ marginTop: 24 }}>
                Allt körs lokalt, on-premise, utan att bilderna lämnar kontoret. Fullständigt GDPR-säkert och under Wristbuddys egen kontroll.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTATET */}
      <section className="case-results">
        <div className="case-results-inner">
          <p className="case-label case-label-light">Resultatet</p>
          <h2 className="case-h2 case-h2-light fade-up">Siffrorna talar<br />för sig själva.</h2>
          <div className="case-results-grid">
            {[
              { num: '96%', label: 'Tidsbesparing', desc: 'Från 8 timmar till 20 minuter per vecka' },
              { num: '500+', label: 'Bilder per timme', desc: 'Automatisk bearbetning utan mänsklig input' },
              { num: '100%', label: 'GDPR-säkert', desc: 'All data stannar on-premise på kontoret' },
              { num: '2334%', label: 'Omsättningstillväxt 2025', desc: 'Utvalda till #1 på Sveriges e-handelsraket-listan av Svea Bank' },
            ].map(r => (
              <div key={r.label} className="case-result-card fade-up">
                <div className="case-result-num">{r.num}</div>
                <div className="case-result-label">{r.label}</div>
                <p className="case-result-desc">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITAT */}
      <section className="case-section">
        <div className="case-section-inner">
          <div className="case-testimonial fade-up">
            <div className="case-testi-mark">"</div>
            <p className="case-testi-text">
              Det var egentligen bildhanteringen som fick oss att säga ja. Vi lägger upp 200+ produkter i veckan och varje bild tog tid. Nu är det helt automatiserat — vi laddar upp råbilderna och AI:n tar hand om resten.
              <br /><br />
              Det har frigört tid vi nu lägger på tillväxt istället. Det är nog därför vi nådde #1 på e-handelsraket-listan.
            </p>
            <div className="case-testi-author">
              <div className="case-testi-avatar">M</div>
              <div>
                <div className="case-testi-name">Marcus, VD Wristbuddys</div>
                <div className="case-testi-role">200 000+ armband sålda · #1 Sveriges e-handelsraket 2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="case-cta">
        <div className="case-cta-inner">
          <h2 className="case-cta-h2 fade-up">Har ni liknande utmaningar?</h2>
          <p className="case-cta-desc">Konfigurera din egen AI-medarbetare på 3 minuter — eller boka ett samtal så hjälper vi er.</p>
          <div className="case-cta-actions">
            <a href="https://clawflow.github.io/agent-configurator/" target="_blank" rel="noopener noreferrer" className="btn-light">Konfigurera din agent →</a>
            <Link to="/kontakt" className="case-cta-secondary">Eller boka ett samtal →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
