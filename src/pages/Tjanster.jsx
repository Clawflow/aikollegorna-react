import { Link } from 'react-router-dom'

const services = [
  {
    icon: '🤖',
    title: 'AI-medarbetare',
    tagline: 'Din mest produktiva kollega',
    desc: 'En AI-agent som hanterar dagliga arbetsuppgifter åt dig. Bevakar inkorgen, skriver svar, hanterar CRM och följer upp leads — automatiskt.',
    bullets: [
      'Hanterar e-post och kundkommunikation',
      'Uppdaterar CRM och leads automatiskt',
      'Skriver offerter och sammanfattningar',
      'Bokar möten och påminner om uppgifter',
      'Arbetar dygnet runt, 365 dagar om året',
    ],
  },
  {
    icon: '⚡',
    title: 'Processautomation',
    tagline: 'Sluta göra samma sak två gånger',
    desc: 'Automatisera repetitiva flöden som tar timmar varje vecka. Från lead-hantering till fakturering — AI tar hand om det.',
    bullets: [
      'Automatiska leadflöden från webb till CRM',
      'Fakturering och betalningspåminnelser',
      'Rapportgenerering och dataanalys',
      'Onboarding av nya kunder och leverantörer',
      'Intern kommunikation och notiser',
    ],
  },
  {
    icon: '🔗',
    title: 'Systemintegration',
    tagline: 'Alla dina system i harmoni',
    desc: 'Vi kopplar ihop dina befintliga verktyg så att data flödar sömlöst mellan dem — utan manuell kopiering.',
    bullets: [
      'CRM (HubSpot, Pipedrive, Salesforce)',
      'E-post (Gmail, Outlook)',
      'Bokföring (Fortnox, Visma, Billecta)',
      'Kalender och schemaläggning',
      'Egna system via API',
    ],
  },
]

export default function Tjanster() {
  return (
    <>
      <section className="bg-gradient-to-br from-violet-50 to-indigo-50 py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-[#0f172a]">Våra tjänster</h1>
          <p className="mt-5 text-xl text-slate-500">
            Vi installerar AI-medarbetare direkt hos dig — on-prem, säkert, och klart på 2 veckor.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="text-5xl mb-4">{s.icon}</div>
                <p className="text-sm font-semibold text-violet-600 uppercase tracking-wide mb-2">{s.tagline}</p>
                <h2 className="text-3xl font-bold text-[#0f172a] mb-4">{s.title}</h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-slate-600">
                      <span className="w-5 h-5 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-xs shrink-0">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl aspect-video flex items-center justify-center">
                <span className="text-8xl opacity-30">{s.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-violet-600 to-indigo-600 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white">Nyfiken på vad vi kan göra för dig?</h2>
          <p className="mt-4 text-violet-200">Boka en gratis 30-minutersaudit — helt utan förbindelser.</p>
          <Link to="/kontakt" className="mt-8 inline-flex px-8 py-4 rounded-full bg-white text-violet-700 font-semibold hover:shadow-xl transition-all hover:-translate-y-0.5">
            Boka gratis demo
          </Link>
        </div>
      </section>
    </>
  )
}
