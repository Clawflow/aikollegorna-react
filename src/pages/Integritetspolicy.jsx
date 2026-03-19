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

export default function Integritetspolicy() {
  useFadeUp()
  useEffect(() => {
    document.title = 'Integritetspolicy | AI Kollegorna'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Integritetspolicy för AI Kollegorna AB. Läs om hur vi hanterar dina personuppgifter i enlighet med GDPR.')
  }, [])

  const sectionStyle = {
    maxWidth: 780,
    margin: '0 auto',
    padding: '0 24px',
  }

  const h2Style = {
    fontFamily: 'var(--serif)',
    fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
    color: 'var(--ink)',
    marginTop: 48,
    marginBottom: 16,
  }

  const pStyle = {
    fontSize: '1rem',
    lineHeight: 1.75,
    color: 'var(--muted)',
    marginBottom: 16,
  }

  const ulStyle = {
    fontSize: '1rem',
    lineHeight: 1.75,
    color: 'var(--muted)',
    marginBottom: 16,
    paddingLeft: 24,
  }

  return (
    <>
      {/* HERO */}
      <section style={{ background: 'var(--paper)', padding: '100px 24px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>Juridiskt</p>
          <h1 className="fade-up" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--ink)', marginBottom: 16 }}>
            Integritetspolicy
          </h1>
          <p className="fade-up" style={{ fontSize: '1.1rem', color: 'var(--muted)', maxWidth: 600, margin: '0 auto' }}>
            Så hanterar AI Kollegorna AB dina personuppgifter — transparent, säkert och i enlighet med GDPR.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: 24 }}>
            Senast uppdaterad: 19 mars 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ padding: '60px 24px 100px' }}>
        <div style={sectionStyle}>

          {/* 1. Vem vi är */}
          <h2 style={h2Style} className="fade-up">1. Vem vi är</h2>
          <p style={pStyle}>
            AI Kollegorna AB (org.nr pending) med säte i Stockholm är personuppgiftsansvarig för behandlingen
            av dina personuppgifter i enlighet med EU:s dataskyddsförordning (GDPR, 2016/679).
          </p>
          <p style={pStyle}>
            <strong>Kontaktuppgifter:</strong><br />
            AI Kollegorna AB<br />
            Stockholm, Sverige<br />
            E-post: <a href="mailto:hej@aikollegorna.se" style={{ color: 'var(--blue)' }}>hej@aikollegorna.se</a>
          </p>

          {/* 2. Vilka uppgifter vi samlar in */}
          <h2 style={h2Style} className="fade-up">2. Vilka personuppgifter vi samlar in</h2>
          <p style={pStyle}>Vi samlar in personuppgifter i följande situationer:</p>
          <ul style={ulStyle}>
            <li><strong>Kontaktformulär:</strong> Namn, e-postadress, företagsnamn och ditt meddelande.</li>
            <li><strong>Nyhetsbrev:</strong> E-postadress (med ditt uttryckliga samtycke).</li>
            <li><strong>Kundrelation:</strong> Namn, e-post, företagsnamn, faktureringsuppgifter och organisationsnummer.</li>
            <li><strong>Webbplatsbesök:</strong> Anonymiserad IP-adress, sidvisningar och enhetsinformation via Google Analytics.</li>
          </ul>
          <p style={pStyle}>
            Vi samlar aldrig in känsliga personuppgifter som hälsodata, politisk tillhörighet eller liknande.
          </p>

          {/* 3. Varför vi samlar in dem */}
          <h2 style={h2Style} className="fade-up">3. Ändamål och rättslig grund</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 24, fontSize: '0.95rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border)', textAlign: 'left' }}>
                <th style={{ padding: '12px 8px', color: 'var(--ink)' }}>Ändamål</th>
                <th style={{ padding: '12px 8px', color: 'var(--ink)' }}>Rättslig grund</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--muted)' }}>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 8px' }}>Besvara förfrågningar via kontaktformulär</td>
                <td style={{ padding: '12px 8px' }}>Berättigat intresse (Art. 6.1.f)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 8px' }}>Skicka nyhetsbrev</td>
                <td style={{ padding: '12px 8px' }}>Samtycke (Art. 6.1.a)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 8px' }}>Kundkommunikation och fakturering</td>
                <td style={{ padding: '12px 8px' }}>Fullgörande av avtal (Art. 6.1.b)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 8px' }}>Webbplatsanalys och förbättring</td>
                <td style={{ padding: '12px 8px' }}>Berättigat intresse (Art. 6.1.f)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 8px' }}>Bokföring och skatteunderlag</td>
                <td style={{ padding: '12px 8px' }}>Rättslig förpliktelse (Art. 6.1.c)</td>
              </tr>
            </tbody>
          </table>

          {/* 4. Hur länge vi lagrar dem */}
          <h2 style={h2Style} className="fade-up">4. Lagringstid</h2>
          <ul style={ulStyle}>
            <li><strong>Kunddata:</strong> Lagras under hela kundförhållandet och upp till 2 år efter avslutad relation, om inte bokföringsskyldighet kräver längre lagring (7 år enligt bokföringslagen).</li>
            <li><strong>Prospektdata:</strong> Uppgifter från kontaktformulär och nyhetsbrevsprenumerationer lagras i högst 6 månader om ingen kundrelation uppstår.</li>
            <li><strong>Analysdata:</strong> Google Analytics-data anonymiseras och lagras enligt Googles standardinställningar (26 månader).</li>
          </ul>
          <p style={pStyle}>
            Du kan när som helst begära att vi raderar dina uppgifter genom att kontakta oss.
          </p>

          {/* 5. Tredjepartsleverantörer */}
          <h2 style={h2Style} className="fade-up">5. Tredjepartsleverantörer</h2>
          <p style={pStyle}>Vi delar dina personuppgifter med följande tredjeparter, enbart i den utsträckning som krävs:</p>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 24, fontSize: '0.95rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border)', textAlign: 'left' }}>
                <th style={{ padding: '12px 8px', color: 'var(--ink)' }}>Leverantör</th>
                <th style={{ padding: '12px 8px', color: 'var(--ink)' }}>Syfte</th>
                <th style={{ padding: '12px 8px', color: 'var(--ink)' }}>Plats</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--muted)' }}>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 8px' }}>Google Analytics</td>
                <td style={{ padding: '12px 8px' }}>Webbplatsanalys (anonymiserad IP)</td>
                <td style={{ padding: '12px 8px' }}>EU/US (SCC)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 8px' }}>Formspree</td>
                <td style={{ padding: '12px 8px' }}>Hantering av kontaktformulär</td>
                <td style={{ padding: '12px 8px' }}>US (SCC)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 8px' }}>GitHub Pages</td>
                <td style={{ padding: '12px 8px' }}>Hosting av webbplats</td>
                <td style={{ padding: '12px 8px' }}>US (SCC)</td>
              </tr>
            </tbody>
          </table>
          <p style={pStyle}>
            Samtliga tredjepartsleverantörer i USA omfattas av EU:s standardavtalsklausuler (SCC) eller likvärdiga
            skyddsmekanismer för att säkerställa adekvat skyddsnivå enligt GDPR kapitel V.
          </p>
          <p style={pStyle}>
            <strong>Viktigt:</strong> AI Kollegorna kör era AI-modeller lokalt (on-premise) på en Mac Mini. Inga
            kunddata skickas till externa AI-leverantörer. Detta gäller alla våra tjänstepaket.
          </p>

          {/* 6. Dina rättigheter */}
          <h2 style={h2Style} className="fade-up">6. Dina rättigheter</h2>
          <p style={pStyle}>Enligt GDPR har du följande rättigheter:</p>
          <ul style={ulStyle}>
            <li><strong>Rätt till tillgång (Art. 15):</strong> Du kan begära information om vilka personuppgifter vi behandlar om dig.</li>
            <li><strong>Rätt till rättelse (Art. 16):</strong> Du kan begära att felaktiga uppgifter korrigeras.</li>
            <li><strong>Rätt till radering (Art. 17):</strong> Du kan begära att dina uppgifter raderas ("rätten att bli glömd"), såvida vi inte har rättsliga skyldigheter att behålla dem.</li>
            <li><strong>Rätt till dataportabilitet (Art. 20):</strong> Du kan begära att få dina uppgifter i ett strukturerat, maskinläsbart format.</li>
            <li><strong>Rätt till invändning (Art. 21):</strong> Du kan invända mot behandling som baseras på berättigat intresse.</li>
            <li><strong>Rätt att återkalla samtycke:</strong> Om behandlingen baseras på samtycke (t.ex. nyhetsbrev) kan du när som helst återkalla det via avprenumerationslänken eller genom att kontakta oss.</li>
          </ul>
          <p style={pStyle}>
            Vi besvarar alla förfrågningar inom 30 dagar. Om du inte är nöjd med vårt svar har du rätt att
            lämna in ett klagomål till <strong>Integritetsskyddsmyndigheten (IMY)</strong>, Box 8114, 104 20 Stockholm,{' '}
            <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)' }}>www.imy.se</a>.
          </p>

          {/* 7. Cookies */}
          <h2 style={h2Style} className="fade-up">7. Cookies</h2>
          <p style={pStyle}>Vår webbplats använder följande cookies:</p>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 24, fontSize: '0.95rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border)', textAlign: 'left' }}>
                <th style={{ padding: '12px 8px', color: 'var(--ink)' }}>Cookie</th>
                <th style={{ padding: '12px 8px', color: 'var(--ink)' }}>Typ</th>
                <th style={{ padding: '12px 8px', color: 'var(--ink)' }}>Livslängd</th>
                <th style={{ padding: '12px 8px', color: 'var(--ink)' }}>Syfte</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--muted)' }}>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 8px' }}>_ga / _gid</td>
                <td style={{ padding: '12px 8px' }}>Analys</td>
                <td style={{ padding: '12px 8px' }}>2 år / 24h</td>
                <td style={{ padding: '12px 8px' }}>Google Analytics — anonymiserad trafikanalys</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 8px' }}>Session</td>
                <td style={{ padding: '12px 8px' }}>Nödvändig</td>
                <td style={{ padding: '12px 8px' }}>Session</td>
                <td style={{ padding: '12px 8px' }}>Håller sessionen aktiv under ditt besök</td>
              </tr>
            </tbody>
          </table>
          <p style={pStyle}>
            Vi använder inga tracking-cookies från tredje part. Du kan blockera cookies i din webbläsares
            inställningar, men det kan påverka webbplatsens funktionalitet.
          </p>

          {/* 8. Kontakt */}
          <h2 style={h2Style} className="fade-up">8. Kontakt för GDPR-ärenden</h2>
          <p style={pStyle}>
            Alla frågor, begäranden och klagomål gällande personuppgiftsbehandling skickas till:
          </p>
          <div style={{ background: 'var(--paper)', border: '1px solid var(--border)', borderRadius: 12, padding: 24, marginBottom: 24 }}>
            <p style={{ ...pStyle, marginBottom: 4 }}><strong>AI Kollegorna AB</strong></p>
            <p style={{ ...pStyle, marginBottom: 4 }}>E-post: <a href="mailto:hej@aikollegorna.se" style={{ color: 'var(--blue)' }}>hej@aikollegorna.se</a></p>
            <p style={{ ...pStyle, marginBottom: 0 }}>Svarstid: inom 30 dagar</p>
          </div>

          {/* Tillbaka */}
          <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--border)', textAlign: 'center' }}>
            <Link to="/" style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: 500 }}>← Tillbaka till startsidan</Link>
            <span style={{ margin: '0 16px', color: 'var(--border)' }}>|</span>
            <Link to="/villkor" style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: 500 }}>Läs våra allmänna villkor →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
