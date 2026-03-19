# Changelog — AI Kollegorna React

All notable changes to this project are documented in this file.

---

## 2026-03-19 — Branschsidor: Fastighet, Redovisning, E-handel, Juridik
**Commit:** `72abaad`

- Fyra nya branschsidor skapade: `/fastighet`, `/redovisning`, `/ehandel`, `/juridik`
- Varje sida har: Hero med bransch-badge, 3 användningsfall-kort, ROI-sektion med 3 statistik-kort, CTA med lila gradient
- Routes tillagda i `App.jsx`
- Komplett CSS med responsiv design (desktop grid → mobil single-column)

---

## 2026-03-19 — Om oss redesign + Wristbuddys fallstudie
**Commit:** `66b7480`

### OmOss.jsx — Helt ombyggd
- Ny hero med origin story: "Tänk om du kunde anställa en AI lika enkelt som att anmäla en ny person?"
- Citatblock med glasmorfism-stil (Anton Pernviks citat)
- Värderingar-sektion med 3 kort: Transparens, On-premise, Kontinuitet
- Team-sektion: Anton Pernvik (grundare) + AI-medarbetaren (robot-emoji, lila gradient)
- Vision 2026-sektion med 3 mål-siffror (20 kunder, 1,2M ARR, 100% on-premise) + timeline Q1–Q4 2026 och 2027
- CTA i botten med "Boka ett samtal"

### Case.jsx — Ny sida (Wristbuddys fallstudie)
- Hero med mörk gradient, meta-info (bransch, lösning, setup-tid)
- Bakgrund: Sveriges snabbast växande e-handel, 200 000+ armband
- Utmaningen: 4 smärtpunkter med röda ✕-markeringar
- Lösningen: 4 numrerade steg med lila kantlinje
- Resultatet: 3 glasmorfism-kort (96% tidsbesparing, 500+ bilder/h, 100% GDPR-säkert)
- Testimonial-kort från Wristbuddys-teamet
- CTA: Konfigurera din agent + boka samtal
- Route `/case` tillagd i `App.jsx`

### Övriga ändringar
- Footer: "Fallstudie: Wristbuddys" tillagd under Tjänster
- Home.jsx: Fallstudie-länk i "Hur det fungerar"-sektionen
- Komplett CSS för båda sidorna med fullständig responsiv design

---

## 2026-03-19 — UX: Hero CTA, How-it-works, Logo strip, Tjänster-förbättringar, Footer
**Commit:** `bd420fe`

### Hero CTA-knappar
- Primär CTA: "Konfigurera din agent →" → extern länk till Agent Configurator (`target="_blank"`)
- Sekundär CTA: "Se hur det fungerar →" → ankarlänk till `#how-it-works`

### Ny "Hur det fungerar"-sektion
- 4-stegs horisontell stepper med lila cirklar (#7C3AED) och anslutande linjer
- Steg: Installation → Konfiguration → Igång dag ett → Löpande förbättring
- Responsiv: Vertikal layout med vertikal linje på mobil
- Placerad efter worker-sektionen

### Kundlogossektion
- Rubrik: "Används av växande svenska företag"
- 6 st gråa SVG-placeholder-logotyper (120×40px) — enkla att byta ut
- Placerad direkt under ticker-sektionen

### Tjanster.jsx förbättrad
- Intro-meningar per tjänst med konkret beskrivning av vad AI:n faktiskt gör
- Visuellt markerade med lila kantlinje och ljus gradient-bakgrund
- Ny CTA i botten: "Konfigurera din agent på 3 minuter →" + "Eller boka ett samtal →"

### Footer
- "Agent Configurator" tillagd som extern länk under Företag-kolumnen

---

## 2026-03-19 — Add GA4 tracking, sitemap.xml, robots.txt
**Commit:** `0f24090`

- Google Analytics 4 tracking-skript tillagt i `index.html`
- `sitemap.xml` skapad med alla routes
- `robots.txt` skapad med sitemap-referens
- SEO-förbättringar för sökmotor-indexering

---

## 2026-03-19 — Navbar: länk till Agent Configurator
**Commit:** `b6853eb`

- CTA-knappen i navbaren uppdaterad till att länka till Agent Configurator
- Extern länk med `target="_blank"`

---

## 2026-03-19 — Add gh-pages deploy + fix vite base path
**Commit:** `03e9dd9`

- GitHub Pages deploy-konfiguration tillagd
- Vite base path fixad för korrekt deployment
- Deploy-skript i `package.json`

---

## 2026-03-18 — Newsletter Google Sheets backend + kontaktformulär + SEO + newsletter redesign
**Commit:** `52ffa08`

- Newsletter-formulär kopplat till Google Sheets backend via Apps Script
- Kontaktformulär (Kontakt.jsx) med validering, loading-state, success-animation och error-handling
- Newsletter-sektionen totalt redesignad: mörk gradient-bakgrund, glasmorfism-kort, animerade bakgrunds-orber
- Två kort: Nyhetsbrev + AI-nyheter med separata formulär
- Social proof-counter med avatar-prickar
- Real-time e-post-validering med visuell feedback
- SEO: meta-descriptions per sida, strukturerad `document.title`
- Komplett responsiv design för alla nya sektioner

---

## 2026-03-18 — Lägg till newsletter + AI-nyheter signup-sektioner
**Commit:** `3847f47`

- NewsletterSection-komponent skapad
- Två signup-kort: Nyhetsbrev och AI-nyheter
- Placerad på startsidan före CTA-sektionen
- Grundläggande styling och layout

---

## 2026-03-18 — Port: full design from aikollegorna-v2
**Commit:** `c90749b`

### Komplett design portad från aikollegorna-v2
- **Hero-sektion**: Mörk bakgrund med video (hero-aurora.mp4), canvas-animation (HeroCanvas.jsx), overlay-gradient, scroll-indikator
- **Statistik-block**: On-site, 24/7, 2v — glasmorfism-kort med hover-effekter
- **Ticker**: Blå löpande text med nyckelord (GDPR, On-premise, etc.)
- **Worker-sektioner**: 3 AI-medarbetare (Säljaren, Marknadsassistenten, Supportagenten) med roller, beskrivningar, task-pills och ROI-kalkyler
- **Dark Band**: Features-lista med emojis och CTA
- **Proof-sektion**: 3 statistik-kort (15h sparade, 80% automatiserat, 2v setup)
- **Prissättning**: 3 prisplaner (Starter 4 900 kr, Growth 7 900 kr, Extra Agent +3 000 kr)
- **Testimonials**: 2 kundcitat med avatarer
- **CTA-sektion**: "En Mac Mini. Din starkaste medarbetare."

### Sidor
- `Home.jsx` — Startsida med alla sektioner ovan
- `Tjanster.jsx` — Detaljerad tjänstesida med 3 AI-medarbetare, ROI-kalkyler
- `OmOss.jsx` — Om oss med företagsvärderingar, hur-det-fungerar, vision/timeline
- `Priser.jsx` — Prissättningssida
- `Kontakt.jsx` — Kontaktsida

### Komponenter
- `Navbar.jsx` — Fixed nav med transparent-till-opaque effekt, dark mode support, hamburger-meny
- `Footer.jsx` — Mörk footer med 4 kolumner, newsletter-input, sociala länkar
- `HeroCanvas.jsx` — WebGL canvas med partikel-animation

### Styling
- Playfair Display (serif) + Outfit (sans-serif) typsnitt
- CSS custom properties för färgpalett (ink, paper, blue, sage, muted)
- Fade-up scroll-animationer med IntersectionObserver
- Komplett responsiv design (900px + 480px breakpoints)

---

## 2026-03-18 — Initial commit
**Commit:** `73c5aaf`

- Vite + React projekt scaffoldat
- Tailwind CSS v4 konfigurerat
- React Router DOM installerat
- Grundläggande filstruktur skapad
- `package.json` med dependencies och scripts

---

## Tech Stack

| Teknologi | Version |
|-----------|---------|
| React | 19.x |
| Vite | 8.x |
| Tailwind CSS | 4.x |
| React Router DOM | 7.x |

## Deployment

- **Source repo:** [Clawflow/aikollegorna-react](https://github.com/Clawflow/aikollegorna-react)
- **Production repo:** [Clawflow/clawflow-portfolio](https://github.com/Clawflow/clawflow-portfolio) (GitHub Pages)
- **Build:** `npm run build` → `dist/` kopieras till portfolio-repo
