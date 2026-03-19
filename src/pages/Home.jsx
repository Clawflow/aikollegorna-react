import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeroCanvas from '../components/HeroCanvas'
import NewsletterSection from '../components/NewsletterSection'
import Testimonials from '../components/Testimonials'

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

export default function Home() {
  useFadeUp()
  useEffect(() => {
    document.title = 'AI kollegorna — Din AI-medarbetare på kontoret'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Vi installerar en Mac Mini på ert kontor med AI som sköter sälj, marknad och support dygnet runt. On-premise, GDPR-säkert. Från 4 900 kr/mån.')
  }, [])

  useEffect(() => {
    // FAQ Schema for "Hur det fungerar"
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Hur lång tid tar installationen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Installationen tar 1-2 dagar. Vi skickar en Mac Mini och installerar allt remotely. Du behöver inte göra något tekniskt."
          }
        },
        {
          "@type": "Question",
          "name": "Är AI-medarbetaren GDPR-säker?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, absolut. All data stannar på er Mac Mini som finns i ert kontor. Ingen data skickas till molnet, OpenAI, Google eller oss. GDPR-säkert by design."
          }
        },
        {
          "@type": "Question",
          "name": "Vad kostar en AI-medarbetare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Starter-paketet kostar 4 900 kr/mån plus 2 900 kr i setup-avgift (engångskostnad). Growth-paketet kostar 7 900 kr/mån."
          }
        },
        {
          "@type": "Question",
          "name": "Vad kan AI-medarbetaren göra?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI-medarbetaren kan hantera e-post, kundärenden, produktbilder, bokföring, lead-generering, rapportskrivning och många andra administrativa uppgifter — dygnet runt."
          }
        }
      ]
    });
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, [])

  return (
    <>
      {/* HERO */}
      <section className="hero-dark">
        <div className="hero-landscape-bg" />
        <video id="hero-video" autoPlay muted loop playsInline>
          <source src="/hero-aurora.mp4" type="video/mp4" />
        </video>
        <HeroCanvas />
        <div className="hero-overlay" />
        <div id="hero-sentinel" style={{ position: 'absolute', top: 0, height: '100%', width: '1px', pointerEvents: 'none' }} />
        <div className="hero-scroll">
          <span>Scrolla</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
        <div className="hero-inner">
          <div>
            <div className="hero-tag">En Mac Mini. Din nya bästa anställda.</div>
            <h1 className="hero-h1">Din AI-medarbetare<br />bor på <em>ditt kontor.</em></h1>
            <p className="hero-sub">Vi installerar en Mac Mini hos er — färdigkonfigurerad med AI som sköter sälj, marknad och support. Den sitter på ert skrivbord och jobbar dygnet runt, utan sjukfrånvaro eller övertid.</p>
            <div className="hero-actions">
              <a href="https://clawflow.github.io/agent-configurator/" target="_blank" rel="noopener noreferrer" className="btn-light-solid">Konfigurera din agent →</a>
              <a href="#how-it-works" className="btn-text-light">Se hur det fungerar →</a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-n">12h</span>
                <span className="stat-l">Tidsbesparing/vecka</span>
              </div>
              <div className="hero-stat">
                <span className="stat-n">1-2 dagar</span>
                <span className="stat-l">Setup-tid</span>
              </div>
              <div className="hero-stat">
                <span className="stat-n">100%</span>
                <span className="stat-l">Data stannar lokalt</span>
              </div>
            </div>
            <p className="hero-book-link">
              Eller <a href="/kontakt" className="hero-inline-link">boka ett gratis 30-min samtal</a> —
              vi visar ett live-demo.
            </p>
          </div>
          <div>
            <div className="stat-block fade-up">
              <div className="stat-num">On-<br />site</div>
              <div className="stat-text">
                <h3>Sitter på ert kontor</h3>
                <p>Mac Mini:n installeras hos er. Er data lämnar aldrig kontoret — fullständigt GDPR-säkert, alltid under er kontroll.</p>
              </div>
            </div>
            <div className="stat-block accent fade-up" style={{ transitionDelay: '.1s' }}>
              <div className="stat-num amber">24/7</div>
              <div className="stat-text">
                <h3>Jobbar medan ni sover</h3>
                <p>Sover aldrig. Sjuknar aldrig. Förhandlar aldrig om lön. Och kostar 90% mindre än en heltidsanställd.</p>
              </div>
            </div>
            <div className="stat-block fade-up" style={{ transitionDelay: '.2s' }}>
              <div className="stat-num">2v</div>
              <div className="stat-text">
                <h3>Installerad och igång</h3>
                <p>Vi levererar hårdvaran, konfigurerar AI:n och integrerar mot era system. Klar på 14 dagar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-inner">
          {['GDPR-KOMPATIBEL','ON-PREMISE','SÄKER DRIFT','CRM-INTEGRATION','SLACK','E-POST','ALLTID ONLINE','ALDRIG SJUK','SVENSKA FÖRETAG'].flatMap((t, i) => [
            <span key={t+i}>{t}</span>, <em key={'dot'+t+i}>·</em>
          ])}
          {['GDPR-KOMPATIBEL','ON-PREMISE','SÄKER DRIFT','CRM-INTEGRATION','SLACK','E-POST','ALLTID ONLINE','ALDRIG SJUK','SVENSKA FÖRETAG'].flatMap((t, i) => [
            <span key={t+'b'+i}>{t}</span>, <em key={'dotb'+t+i}>·</em>
          ])}
        </div>
      </div>

      {/* CUSTOMER LOGOS */}
      <section className="logo-strip">
        <p className="logo-strip-label">Kunder som litar på AI Kollegorna</p>
        <div className="logo-strip-row">
          <div className="real-logo wristbuddys-logo">
            Wristbuddys
            <span>#1 Sverige 2025</span>
          </div>
          {[1, 2, 3, 4, 5].map(n => (
            <div key={n} className="logo-placeholder" aria-label={`Kundlogotyp ${n}`}>
              <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="40" rx="6" fill="#D1D5DB" />
                <text x="60" y="24" textAnchor="middle" fill="#9CA3AF" fontSize="11" fontFamily="var(--sans)" fontWeight="500">Logotyp</text>
              </svg>
            </div>
          ))}
        </div>
      </section>

      {/* AWARD PROOF */}
      <div className="award-proof-banner fade-up">
        <span className="award-icon">🏆</span>
        <p>
          <strong>Wristbuddys</strong> — kund hos AI Kollegorna — utsågs till
          <strong> Sveriges snabbast växande e-handlare 2025</strong> av Svea Bank.
          Tillväxt: 2 334%.
        </p>
        <a href="/case" className="award-link">Läs fallstudien →</a>
      </div>

      <Testimonials />

      <div className="rule" />

      {/* WORKERS */}
      <div className="section">
        <div className="workers-intro">
          <div>
            <div className="section-label">En Mac Mini. Tre roller.</div>
            <h2 className="section-h fade-up">Välj vilka<br />roller du vill fylla.</h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <p className="section-p fade-up" style={{ transitionDelay: '.1s' }}>En och samma hårdvara — installerad på ert kontor — kan köra en eller flera AI-medarbetare parallellt. Ni väljer vilka roller ni behöver. Vi konfigurerar och levererar.</p>
          </div>
        </div>
        <div>
          {/* Säljaren */}
          <div className="worker-row fade-up">
            <div className="worker-index">01</div>
            <div>
              <div className="worker-role">Sälj & Affärsutveckling</div>
              <div className="worker-name">Säljaren</div>
              <p className="worker-desc">Identifierar och kvalificerar leads, skriver personliga outreach-mail, bokar möten och håller CRM:et uppdaterat. Jobbar parallellt på hundratals prospekt — utan att tröttna en enda dag.</p>
              <div className="worker-tasks">
                {['Lead-research', 'Outreach & LinkedIn', 'Offertskrivning', 'CRM-uppdatering', 'Mötesbokning'].map(t => <span key={t} className="task-pill">{t}</span>)}
              </div>
            </div>
            <div className="worker-roi">
              <div className="roi-old">Anställd: 600 000 kr/år</div>
              <div className="roi-new">60 000</div>
              <div className="roi-unit">kr / år</div>
              <div className="roi-save">Spar 540 000 kr</div>
            </div>
          </div>
          {/* Marknadsassistenten */}
          <div className="worker-row fade-up">
            <div className="worker-index">02</div>
            <div>
              <div className="worker-role">Marknad & Content</div>
              <div className="worker-name">Marknads&shy;assistenten</div>
              <p className="worker-desc">Skriver SEO-optimerade artiklar, hanterar LinkedIn-närvaro, publicerar content och analyserar vad som fungerar. Din röst på nätet — alltid aktiv, alltid konsekvent.</p>
              <div className="worker-tasks">
                {['Artikelskrivning', 'LinkedIn-hantering', 'SEO-optimering', 'Contentpublicering'].map(t => <span key={t} className="task-pill">{t}</span>)}
              </div>
            </div>
            <div className="worker-roi">
              <div className="roi-old">Anställd: 500 000 kr/år</div>
              <div className="roi-new">60 000</div>
              <div className="roi-unit">kr / år</div>
              <div className="roi-save">Spar 440 000 kr</div>
            </div>
          </div>
          {/* Supportagenten */}
          <div className="worker-row fade-up">
            <div className="worker-index">03</div>
            <div>
              <div className="worker-role">Kundsupport & Service</div>
              <div className="worker-name">Supportagenten</div>
              <p className="worker-desc">Svarar på mail och ärenden dygnet runt, kategoriserar och eskalerar rätt, håller kundnöjdheten hög. Svarstid på sekunder — inte timmar. Alltid artig, alltid korrekt.</p>
              <div className="worker-tasks">
                {['Mailhantering', 'Ärendehantering', 'Eskalering', 'Kundkommunikation'].map(t => <span key={t} className="task-pill">{t}</span>)}
              </div>
            </div>
            <div className="worker-roi">
              <div className="roi-old">Tillgänglig: kontorstid</div>
              <div className="roi-new">24/7</div>
              <div className="roi-unit">alltid online</div>
              <div className="roi-save">Noll väntetid</div>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="section how-it-works-section">
        <div className="section-label">Så funkar det</div>
        <h2 className="section-h fade-up">Fyra steg till<br />din AI-medarbetare.</h2>
        <div className="hiw-stepper fade-up" style={{ transitionDelay: '.15s' }}>
          {[
            { num: 1, title: 'Installation', desc: 'Vi installerar en Mac Mini på ert kontor. Klart på en dag.' },
            { num: 2, title: 'Konfiguration', desc: 'Vi konfigurerar er AI-medarbetare med era system och arbetsflöden.' },
            { num: 3, title: 'Igång dag ett', desc: 'AI-medarbetaren börjar jobba direkt — sälj, marknad eller support.' },
            { num: 4, title: 'Löpande förbättring', desc: 'Månatlig uppföljning, optimering och nya funktioner.' },
          ].map((step, i, arr) => (
            <div key={step.num} className="hiw-step">
              <div className="hiw-circle-wrap">
                <div className="hiw-circle">{step.num}</div>
                {i < arr.length - 1 && <div className="hiw-line" />}
              </div>
              <h3 className="hiw-title">{step.title}</h3>
              <p className="hiw-desc">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="hiw-case-link fade-up" style={{ transitionDelay: '.25s' }}>
          <Link to="/case" className="hiw-case-btn">📸 Läs fallstudie: Wristbuddys — 96% tidsbesparing →</Link>
        </div>

        {/* BRANCH BADGES */}
        <div className="branch-badges fade-up" style={{ transitionDelay: '.35s' }}>
          <p className="branch-badges-label">Vi hjälper bolag inom:</p>
          <div className="branch-badges-row">
            <Link to="/fastighet" className="branch-badge-link">🏢 Fastighet</Link>
            <Link to="/redovisning" className="branch-badge-link">📊 Redovisning</Link>
            <Link to="/ehandel" className="branch-badge-link">🛒 E-handel</Link>
            <Link to="/juridik" className="branch-badge-link">⚖️ Juridik</Link>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* DARK BAND */}
      <div className="dark-band">
        <div className="dark-band-inner">
          <div>
            <h2>En låda.<br /><em>En hel avdelning.</em></h2>
            <p>Vi levererar en Mac Mini till ert kontor — färdiginstallerad med AI-medarbetare som jobbar åt er dygnet runt. Ingen molntjänst. Inga månatliga surpriser. Er data stannar där den ska: hos er.</p>
            <Link to="/kontakt" className="btn-light">Boka ett samtal →</Link>
          </div>
          <div className="features-list">
            {[
              { icon: '📦', title: 'Hårdvara inkluderad', desc: 'Mac Mini levereras, installeras och konfigureras av oss — ni behöver inte göra något.' },
              { icon: '🔒', title: 'Er data stannar på kontoret', desc: 'Inget moln. Inga tredjeparter. AI:n kör lokalt, fullständigt GDPR-säkert.' },
              { icon: '🔌', title: 'Kopplas till era befintliga verktyg', desc: 'CRM, e-post, Slack, Google Workspace — AI:n lär sig era system, inte tvärtom.' },
              { icon: '🛠️', title: 'Vi sköter allt underhåll', desc: 'Uppdateringar, finjusteringar och ny funktionalitet ingår i månadsavgiften.' },
            ].map(f => (
              <div key={f.title} className="feat">
                <div className="feat-icon">{f.icon}</div>
                <div className="feat-text"><h4>{f.title}</h4><p>{f.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROOF */}
      <div className="section">
        <div className="section-label">Resultat</div>
        <h2 className="section-h fade-up">Siffror vi<br />kan stå för</h2>
        <div className="proof-grid">
          <div className="proof-cell"><div className="proof-num">15<span>h</span></div><div className="proof-label">Sparade per vecka i genomsnitt på manuellt säljarbete</div></div>
          <div className="proof-cell"><div className="proof-num">80<span>%</span></div><div className="proof-label">Av inkommande kundkommunikation hanteras automatiskt</div></div>
          <div className="proof-cell"><div className="proof-num">2<span>v</span></div><div className="proof-label">Från kickoff till en fullt konfigurerad AI-medarbetare i drift</div></div>
        </div>
      </div>

      <div className="rule" />

      {/* PRICING */}
      <div className="section" id="pricing">
        <div className="section-label">Prissättning</div>
        <h2 className="section-h fade-up">Enkelt och<br />transparent</h2>
        <p className="section-p fade-up" style={{ transitionDelay: '.1s' }}>Fast månadsbelopp. Ingen bindning efter 6 månader. Inga dolda kostnader.</p>
        <div className="pricing-grid">
          <div className="price-card fade-up">
            <div className="price-name">Starter</div>
            <div className="price-amount">4 900 <span className="price-period">kr/mån</span></div>
            <p className="price-desc">En AI-medarbetare, 2–3 integrationer. Perfekt för att komma igång och bevisa värdet.</p>
            <hr className="price-divider" />
            <ul className="price-features">
              {['1 konfigurerad AI-agent', '2–3 systemintegrationer', '6 månaders minimiperiod', 'Onboarding & setup inkluderat'].map(f => <li key={f}>{f}</li>)}
            </ul>
            <Link to="/kontakt" className="price-btn">Kom igång</Link>
          </div>
          <div className="price-card featured fade-up" style={{ transitionDelay: '.1s' }}>
            <div className="price-popular-badge">Mest populärt</div>
            <div className="price-name">Growth</div>
            <div className="price-amount">7 900 <span className="price-period">kr/mån</span></div>
            <p className="price-desc">Obegränsat med integrationer, prioritetssupport och månadsvis genomgång.</p>
            <hr className="price-divider" />
            <ul className="price-features">
              {['1 konfigurerad AI-agent', 'Obegränsade integrationer', 'Prioritetssupport', 'Månadsvis optimering'].map(f => <li key={f}>{f}</li>)}
            </ul>
            <Link to="/kontakt" className="price-btn">Välj Growth</Link>
          </div>
          <div className="price-card fade-up" style={{ transitionDelay: '.2s' }}>
            <div className="price-name">Extra Agent</div>
            <div className="price-amount">+3 000 <span className="price-period">kr/mån</span></div>
            <p className="price-desc">Skala med fler AI-medarbetare i takt med att behovet växer.</p>
            <hr className="price-divider" />
            <ul className="price-features">
              {['Ytterligare AI-agent', 'Delar befintliga integrationer', 'Skalbart utan övre gräns'].map(f => <li key={f}>{f}</li>)}
            </ul>
            <Link to="/kontakt" className="price-btn">Lägg till</Link>
          </div>
        </div>
        <p className="pricing-note">Setup och installation: <strong>2 900 kr</strong> (engång) · Inkluderar konfiguration, integrationer och driftsättning av er Mac Mini · Hårdvara tillkommer vid behov</p>
      </div>

      {/* TESTIMONIALS */}
      <div style={{ background: 'var(--white)' }}>
        <div className="section">
          <div className="section-label">Kundröster</div>
          <h2 className="section-h fade-up">Vad våra<br />kunder säger</h2>
          <div className="testi-grid">
            <div className="testi fade-up">
              <p className="testi-quote">"Vi sparar 15 timmar i veckan på manuellt säljarbete. Vår AI-medarbetare hanterar lead research, outreach och CRM-uppdateringar — vi fokuserar på att stänga affärer."</p>
              <div className="testi-meta">
                <div className="testi-avatar">JL</div>
                <div><div className="testi-author">Johan L.</div><div className="testi-role">VD, B2B-bolag · Stockholm</div></div>
              </div>
            </div>
            <div className="testi fade-up" style={{ transitionDelay: '.1s' }}>
              <p className="testi-quote">"Vår AI-medarbetare hanterar 80% av all inkommande support. Svarstiden gick från timmar till sekunder — och kundnöjdheten ökade markant utan att vi anställde fler."</p>
              <div className="testi-meta">
                <div className="testi-avatar">SA</div>
                <div><div className="testi-author">Sara A.</div><div className="testi-role">Grundare, SaaS-bolag · Göteborg</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <NewsletterSection />

      {/* CTA */}
      <div className="cta-section">
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '20px' }}>Redo att börja?</p>
        <h2 className="fade-up">En Mac Mini.<br /><em>Din starkaste medarbetare.</em></h2>
        <p>Boka ett kostnadsfritt 30-minuterssamtal. Vi identifierar vad ni vill automatisera och levererar hårdvara + AI på 2 veckor.</p>
        <Link to="/kontakt" className="btn-dark">Boka ett gratis samtal →</Link>
      </div>
    </>
  )
}
