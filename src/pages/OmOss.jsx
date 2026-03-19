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

export default function OmOss() {
  useFadeUp()
  useEffect(() => {
    document.title = 'Om oss — AI kollegorna | AI-medarbetare för svenska företag'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'AI Kollegorna grundades av Anton Pernvik med en enkel idé: varje svenskt företag ska kunna anställa en AI-medarbetare. On-premise, GDPR-säkert, från dag ett.')
  }, [])

  return (
    <>
      {/* HERO — Origin Story */}
      <section className="omoss-hero">
        <div className="omoss-hero-inner">
          <div>
            <p className="omoss-label">Vår historia</p>
            <h1 className="omoss-h1 fade-up">
              Tänk om du kunde <em>anställa en AI</em> lika enkelt som att anmäla en ny person?
            </h1>
            <p className="omoss-intro fade-up">
              AI Kollegorna startades av Anton Pernvik med en enkel idé: stora företag har redan egna AI-team — men svenska SMB-bolag har inte den lyxen. Vi ville förändra det.
            </p>
            <p className="omoss-intro fade-up">
              Vår lösning? En Mac Mini, installerad på ert kontor, konfigurerad med AI som faktiskt gör jobbet. Ingen molntjänst. Inga konsulttimmar. En konkret medarbetare — från dag ett.
            </p>
          </div>
          <div className="omoss-quote-card fade-up">
            <div className="omoss-quote-mark">"</div>
            <p className="omoss-quote-text">
              Din bästa anställd sover aldrig, sjuknar aldrig och förhandlar aldrig om lön. Det är den vi bygger.
            </p>
            <div className="omoss-quote-author">
              <div className="omoss-quote-avatar">AP</div>
              <div>
                <div className="omoss-quote-name">Anton Pernvik</div>
                <div className="omoss-quote-role">Grundare, AI Kollegorna</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VÄRDERINGAR */}
      <section className="omoss-values">
        <div className="omoss-values-inner">
          <p className="omoss-label">Våra värderingar</p>
          <h2 className="omoss-h2 fade-up">Tre principer vi<br />aldrig kompromissar med.</h2>
          <div className="omoss-values-grid">
            {[
              {
                icon: '🔍',
                title: 'Transparens',
                desc: 'Inga dolda kostnader, ingen inlåsning. Ni vet alltid exakt vad ni betalar för, vad AI:n gör och hur den fungerar. Fullständig insyn, alltid.'
              },
              {
                icon: '🔒',
                title: 'On-premise',
                desc: 'Er data lämnar aldrig ert kontor. Allt körs lokalt på en Mac Mini hos er — fullständigt GDPR-säkert, utan molnberoenden eller tredjeparter.'
              },
              {
                icon: '🔄',
                title: 'Kontinuitet',
                desc: 'Vi släpper inte taget efter installation. Månatlig uppföljning, optimering och nya funktioner ingår. Er AI-medarbetare blir bättre varje vecka.'
              },
            ].map(v => (
              <div key={v.title} className="omoss-value-card fade-up">
                <div className="omoss-value-icon">{v.icon}</div>
                <h3 className="omoss-value-title">{v.title}</h3>
                <p className="omoss-value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAMET */}
      <section className="omoss-team">
        <div className="omoss-team-inner">
          <p className="omoss-label">Teamet</p>
          <h2 className="omoss-h2 fade-up">Människa + maskin.<br />Bästa av två världar.</h2>
          <div className="omoss-team-grid">
            <div className="omoss-team-card fade-up">
              <div className="omoss-team-photo">
                <div className="omoss-team-initials">AP</div>
              </div>
              <h3 className="omoss-team-name">Anton Pernvik</h3>
              <p className="omoss-team-role">Grundare & VD</p>
              <p className="omoss-team-bio">Bakgrund inom automatisering och AI. Besatt av att göra avancerad teknologi tillgänglig för alla svenska företag — inte bara de med miljardbudgetar.</p>
            </div>
            <div className="omoss-team-card fade-up" style={{ transitionDelay: '.1s' }}>
              <div className="omoss-team-photo omoss-team-ai">
                <span className="omoss-team-robot">🤖</span>
              </div>
              <h3 className="omoss-team-name">AI-medarbetaren</h3>
              <p className="omoss-team-role">Sälj · Marknad · Support</p>
              <p className="omoss-team-bio">Jobbar dygnet runt utan övertid, sjukfrånvaro eller löneförhandlingar. Specialiserad på att hantera de uppgifter som tar mest tid men ger minst energi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION 2026 */}
      <section className="omoss-vision">
        <div className="omoss-vision-inner">
          <div className="omoss-vision-text">
            <p className="omoss-label omoss-label-light">Vision 2026</p>
            <h2 className="omoss-h2 omoss-h2-light fade-up">
              20 svenska SMB-företag<br />med AI på <em>kontoret.</em>
            </h2>
            <p className="omoss-vision-desc fade-up">
              Vårt mål för 2026 är konkret: hjälpa 20 svenska SMB-bolag att ha en fullt fungerande AI-medarbetare på kontoret. Inte som ett pilotprojekt — utan som en självklar del av teamet.
            </p>
            <p className="omoss-vision-desc fade-up">
              Vi tror att de företag som integrerar AI i sin vardag idag kommer ha ett strukturellt försprång om 3–5 år. Och vi vill vara de som tar dem dit.
            </p>
            <div className="omoss-vision-stats fade-up">
              <div className="omoss-vision-stat">
                <div className="omoss-vision-num">20</div>
                <div className="omoss-vision-label">Kunder 2026</div>
              </div>
              <div className="omoss-vision-stat">
                <div className="omoss-vision-num">1,2M</div>
                <div className="omoss-vision-label">ARR-mål (kr)</div>
              </div>
              <div className="omoss-vision-stat">
                <div className="omoss-vision-num">100%</div>
                <div className="omoss-vision-label">On-premise</div>
              </div>
            </div>
          </div>
          <div className="omoss-vision-timeline fade-up">
            {[
              { year: '2026 Q1', title: 'AI Kollegorna grundas', desc: 'Första kunden implementerad. Proof of concept validerat.' },
              { year: '2026 Q3', title: 'Mål: 10 kunder', desc: 'Starka referenscase. Expansion till fler branscher.' },
              { year: '2026 Q4', title: 'Mål: 20 kunder', desc: '1,2 MSEK i recurring revenue. Bevisad skalbarhet.' },
              { year: '2027', title: 'Mål: 100 kunder', desc: '6 MSEK recurring. Nationell expansion.' },
            ].map((tl, i) => (
              <div key={i} className="omoss-tl-item">
                <div className="omoss-tl-dot" />
                <div className="omoss-tl-year">{tl.year}</div>
                <h4 className="omoss-tl-title">{tl.title}</h4>
                <p className="omoss-tl-desc">{tl.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '20px' }}>Redo att börja?</p>
        <h2 className="fade-up">Boka ett samtal.<br /><em>Vi lyssnar först.</em></h2>
        <p>30 minuter. Inga säljpitchar. Vi identifierar era största utmaningar och visar om en AI-medarbetare kan lösa dem.</p>
        <Link to="/kontakt" className="btn-dark">Boka ett gratis samtal →</Link>
      </div>
    </>
  )
}
