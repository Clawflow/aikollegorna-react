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

export default function Villkor() {
  useFadeUp()
  useEffect(() => {
    document.title = 'Allmänna villkor | AI Kollegorna'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Allmänna villkor för AI Kollegorna AB:s AI-medarbetartjänst. Priser, bindningstid, ansvar och GDPR.')
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

  const h3Style = {
    fontSize: '1.1rem',
    color: 'var(--ink)',
    marginTop: 24,
    marginBottom: 8,
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
            Allmänna villkor
          </h1>
          <p className="fade-up" style={{ fontSize: '1.1rem', color: 'var(--muted)', maxWidth: 600, margin: '0 auto' }}>
            Villkor för AI Kollegorna AB:s AI-medarbetartjänst. Gäller från och med 19 mars 2026.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: 24 }}>
            Senast uppdaterad: 19 mars 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ padding: '60px 24px 100px' }}>
        <div style={sectionStyle}>

          {/* 1. Tjänstens omfattning */}
          <h2 style={h2Style} className="fade-up">1. Tjänstens omfattning</h2>
          <p style={pStyle}>
            AI Kollegorna AB ("AI Kollegorna", "vi") tillhandahåller en AI-medarbetartjänst som körs lokalt
            (on-premise) på kundens kontor via en Mac Mini. Tjänsten inkluderar installation, konfiguration,
            löpande uppdateringar och support.
          </p>

          <h3 style={h3Style}>1.1 Paket</h3>
          <p style={pStyle}>Tjänsten erbjuds i tre paketlösningar:</p>
          <ul style={ulStyle}>
            <li>
              <strong>Starter (4 990 kr/mån):</strong> En AI-medarbetare specialiserad på en uppgift
              (t.ex. leadgenerering, kundsupport eller marknadsföring). Inkluderar installation,
              grundkonfiguration och månatlig uppföljning.
            </li>
            <li>
              <strong>Growth (9 990 kr/mån):</strong> Upp till tre AI-medarbetare med utökad funktionalitet.
              Inkluderar CRM-integration, A/B-testning av kampanjer och veckovis optimering.
            </li>
            <li>
              <strong>Scale (14 990 kr/mån):</strong> Obegränsat antal AI-medarbetare, fullständig
              systemintegration, prioriterad support och dedikerad Customer Success Manager.
            </li>
          </ul>
          <p style={pStyle}>
            Detaljerade paketbeskrivningar finns på{' '}
            <Link to="/priser" style={{ color: 'var(--blue)' }}>aikollegorna.se/priser</Link>.
            AI Kollegorna förbehåller sig rätten att uppdatera paketinnehållet med rimligt varsel.
          </p>

          <h3 style={h3Style}>1.2 Hårdvara</h3>
          <p style={pStyle}>
            AI Kollegorna tillhandahåller en Mac Mini som förblir AI Kollegorna AB:s egendom under
            avtalsperioden. Vid avtalets upphörande returneras hårdvaran, alternativt kan kunden köpa
            ut den till restvärde.
          </p>

          {/* 2. Priser och betalning */}
          <h2 style={h2Style} className="fade-up">2. Priser och betalning</h2>

          <h3 style={h3Style}>2.1 Prissättning</h3>
          <p style={pStyle}>
            Alla priser anges exklusive moms (25 %). Aktuella priser publiceras på{' '}
            <Link to="/priser" style={{ color: 'var(--blue)' }}>aikollegorna.se/priser</Link>.
            AI Kollegorna förbehåller sig rätten att justera priser med minst 60 dagars skriftligt
            varsel. Prisjusteringen träder i kraft vid nästa avtalsperiod.
          </p>

          <h3 style={h3Style}>2.2 Fakturering</h3>
          <p style={pStyle}>
            Fakturering sker månadsvis i förskott. Betalningsvillkor är 30 dagar netto.
            Vid försenad betalning tillkommer dröjsmålsränta enligt räntelagen (referensränta + 8 %).
          </p>

          <h3 style={h3Style}>2.3 Startavgift</h3>
          <p style={pStyle}>
            En engångsavgift för installation och konfiguration kan tillkomma beroende på projektets
            komplexitet. Eventuell startavgift specificeras i offerten och faktureras vid projektstart.
          </p>

          {/* 3. Avtalstid och uppsägning */}
          <h2 style={h2Style} className="fade-up">3. Avtalstid och uppsägning</h2>

          <h3 style={h3Style}>3.1 Bindningstid</h3>
          <p style={pStyle}>
            Avtalet löper med en initial bindningstid om 6 månader från installationsdatumet. Detta ger
            tillräcklig tid för att konfigurera, optimera och utvärdera AI-medarbetarens prestanda.
          </p>

          <h3 style={h3Style}>3.2 Förlängning</h3>
          <p style={pStyle}>
            Efter bindningstiden förlängs avtalet automatiskt med 1 månad i taget. Uppsägning sker
            skriftligen (e-post till{' '}
            <a href="mailto:hej@aikollegorna.se" style={{ color: 'var(--blue)' }}>hej@aikollegorna.se</a>)
            med minst 1 månads uppsägningstid, räknat till slutet av innevarande faktureringsperiod.
          </p>

          <h3 style={h3Style}>3.3 Förtida uppsägning</h3>
          <p style={pStyle}>
            Vid uppsägning under bindningstiden faktureras kunden för resterande månader av
            bindningstiden. Undantag görs om AI Kollegorna väsentligt bryter mot avtalet och inte
            avhjälper bristen inom 30 dagar efter skriftligt påpekande.
          </p>

          <h3 style={h3Style}>3.4 Avveckling</h3>
          <p style={pStyle}>
            Vid avtalets upphörande bistår AI Kollegorna med dataexport och avinstallation utan extra
            kostnad. Hårdvaran returneras inom 14 dagar eller köps ut till överenskommet restvärde.
          </p>

          {/* 4. Ansvarsbegränsning */}
          <h2 style={h2Style} className="fade-up">4. Ansvarsbegränsning</h2>

          <h3 style={h3Style}>4.1 AI-medarbetarens output</h3>
          <p style={pStyle}>
            AI-medarbetarens output (text, e-post, analyser, rekommendationer m.m.) är att betrakta
            som <strong>stöd och hjälpmedel</strong> — inte som ersättning för professionell rådgivning.
            Kunden ansvarar själv för att granska och godkänna AI-genererat innehåll innan det används
            externt eller som beslutsunderlag.
          </p>

          <h3 style={h3Style}>4.2 Skadestånd</h3>
          <p style={pStyle}>
            AI Kollegorna AB:s totala skadeståndsansvar gentemot kunden är begränsat till ett belopp
            motsvarande de senaste 3 månadernas avgifter. AI Kollegorna ansvarar inte för indirekta
            skador, utebliven vinst, förlust av data (utöver vad som täcks av vår backup-rutin) eller
            följdskador.
          </p>

          <h3 style={h3Style}>4.3 Tillgänglighet</h3>
          <p style={pStyle}>
            AI Kollegorna strävar efter 99 % tillgänglighet men garanterar inte avbrottsfri drift.
            Planerat underhåll aviseras minst 48 timmar i förväg. Eventuella avbrott orsakade av
            kundens lokala nätverk, strömavbrott eller hårdvarufel hos kunden faller utanför
            AI Kollegornas ansvar.
          </p>

          {/* 5. GDPR och databehandling */}
          <h2 style={h2Style} className="fade-up">5. GDPR och databehandling</h2>

          <h3 style={h3Style}>5.1 Personuppgiftsbiträdesavtal</h3>
          <p style={pStyle}>
            I den mån AI-medarbetaren behandlar personuppgifter på kundens uppdrag agerar AI Kollegorna AB
            som <strong>personuppgiftsbiträde</strong> enligt GDPR Art. 28. Ett separat personuppgiftsbiträdesavtal
            (DPA) ingås som bilaga till huvudavtalet och specificerar instruktioner, underbiträden,
            säkerhetsåtgärder och ansvarsfördelning.
          </p>

          <h3 style={h3Style}>5.2 Lokal databehandling</h3>
          <p style={pStyle}>
            All AI-behandling sker lokalt på den Mac Mini som installeras hos kunden. Inga kunddata
            lämnar kundens lokaler för AI-bearbetning. Modellerna körs helt offline efter initial
            installation.
          </p>

          <h3 style={h3Style}>5.3 Tekniska och organisatoriska åtgärder</h3>
          <ul style={ulStyle}>
            <li>Krypterad lagring (FileVault) på all hårdvara.</li>
            <li>Automatiserad backup med kryptering.</li>
            <li>Åtkomsthantering via unika inloggningsuppgifter.</li>
            <li>Loggning av all AI-aktivitet för spårbarhet.</li>
            <li>Regelbundna säkerhetsuppdateringar av operativsystem och AI-modeller.</li>
          </ul>

          <h3 style={h3Style}>5.4 Incidenthantering</h3>
          <p style={pStyle}>
            Vid personuppgiftsincident informerar AI Kollegorna kunden utan onödigt dröjsmål och senast
            inom 24 timmar. Vi bistår kunden med den information som krävs för anmälan till
            Integritetsskyddsmyndigheten (IMY) enligt GDPR Art. 33.
          </p>

          {/* 6. Force majeure */}
          <h2 style={h2Style} className="fade-up">6. Force majeure</h2>
          <p style={pStyle}>
            Ingen av parterna ansvarar för underlåtenhet att fullgöra avtalsenliga förpliktelser om
            fullgörandet förhindras av omständigheter utanför partens rimliga kontroll, inklusive
            men inte begränsat till:
          </p>
          <ul style={ulStyle}>
            <li>Naturkatastrofer (översvämning, jordbävning, storm)</li>
            <li>Pandemier och epidemier</li>
            <li>Krig, terrorism eller civila oroligheter</li>
            <li>Allvarliga hårdvarufel som inte kan avhjälpas inom rimlig tid</li>
            <li>Cyberattacker av exceptionell karaktär</li>
            <li>Myndighetsbeslut eller lagändringar</li>
            <li>Strömavbrott eller telekommunikationsfel utanför partens kontroll</li>
          </ul>
          <p style={pStyle}>
            Den drabbade parten ska utan dröjsmål underrätta motparten om force majeure-händelsen
            och vidta rimliga åtgärder för att begränsa dess inverkan. Om force majeure-situationen
            varar längre än 90 dagar har vardera part rätt att säga upp avtalet med omedelbar verkan
            utan skadeståndsskyldighet.
          </p>

          {/* 7. Övriga villkor */}
          <h2 style={h2Style} className="fade-up">7. Övriga villkor</h2>

          <h3 style={h3Style}>7.1 Immateriella rättigheter</h3>
          <p style={pStyle}>
            AI Kollegorna behåller alla immateriella rättigheter till AI-modeller, konfigurationer och
            mjukvara. Kunden äger all data som genereras av AI-medarbetaren under avtalsperioden.
          </p>

          <h3 style={h3Style}>7.2 Sekretess</h3>
          <p style={pStyle}>
            Parterna förbinder sig att inte röja konfidentiell information som erhållits genom avtalet.
            Sekretessen gäller under avtalsperioden och 2 år därefter.
          </p>

          <h3 style={h3Style}>7.3 Ändringar av villkor</h3>
          <p style={pStyle}>
            AI Kollegorna förbehåller sig rätten att uppdatera dessa villkor. Väsentliga ändringar
            meddelas skriftligen minst 30 dagar i förväg. Fortsatt användning av tjänsten efter
            ändringarnas ikraftträdande innebär att kunden accepterar de nya villkoren.
          </p>

          <h3 style={h3Style}>7.4 Tillämplig lag och tvistlösning</h3>
          <p style={pStyle}>
            Dessa villkor regleras av svensk lag. Tvister som inte kan lösas genom förhandling ska
            avgöras av Stockholms tingsrätt som första instans.
          </p>

          {/* Kontakt */}
          <h2 style={h2Style} className="fade-up">8. Kontakt</h2>
          <div style={{ background: 'var(--paper)', border: '1px solid var(--border)', borderRadius: 12, padding: 24, marginBottom: 24 }}>
            <p style={{ ...pStyle, marginBottom: 4 }}><strong>AI Kollegorna AB</strong></p>
            <p style={{ ...pStyle, marginBottom: 4 }}>E-post: <a href="mailto:hej@aikollegorna.se" style={{ color: 'var(--blue)' }}>hej@aikollegorna.se</a></p>
            <p style={{ ...pStyle, marginBottom: 0 }}>Frågor om dessa villkor besvaras under kontorstid (mån–fre, 09–17).</p>
          </div>

          {/* Tillbaka */}
          <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--border)', textAlign: 'center' }}>
            <Link to="/" style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: 500 }}>← Tillbaka till startsidan</Link>
            <span style={{ margin: '0 16px', color: 'var(--border)' }}>|</span>
            <Link to="/integritetspolicy" style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: 500 }}>Läs vår integritetspolicy →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
