import { Link } from 'react-router-dom'

const stats = [
  { value: '500 000 kr', label: 'Sparade lönekostnader per år' },
  { value: '2 veckor', label: 'Till fullt driftsatt' },
  { value: '24/7', label: 'Alltid tillgänglig' },
]

const features = [
  {
    icon: '🤖',
    title: 'AI-medarbetare',
    desc: 'En dedikerad AI-agent som hanterar e-post, offerter, CRM och kundkommunikation — precis som en anställd, fast bättre.',
  },
  {
    icon: '⚡',
    title: 'Automation',
    desc: 'Automatisera repetitiva arbetsflöden. Från lead-hantering till fakturering — AI gör det åt dig.',
  },
  {
    icon: '🔗',
    title: 'Integration',
    desc: 'Kopplar ihop dina befintliga system: CRM, e-post, kalender, bokföring. Allt pratar med varandra.',
  },
]

const steps = [
  { num: '01', title: 'Gratis audit', desc: 'Vi kartlägger dina processer och identifierar var AI gör störst nytta.' },
  { num: '02', title: 'Setup & anpassning', desc: 'Vi installerar och konfigurerar din AI-agent på plats hos dig.' },
  { num: '03', title: 'Driftsatt', desc: 'Inom 2 veckor är din AI-medarbetare igång och jobbar för dig.' },
]

const plans = [
  {
    name: 'Starter',
    price: '4 900',
    desc: 'Perfekt för att komma igång',
    features: ['1 AI-agent', '2–3 integrationer', 'E-postsupport', '6 månaders bindning'],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '7 900',
    desc: 'För dig som vill skala',
    features: ['Fler integrationer', 'Prioritetssupport', 'Månadsgenomgång', 'Utökad automation'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Offert',
    desc: 'Skräddarsytt för ditt företag',
    features: ['Obegränsat antal agenter', 'Dedikerad support', 'SLA-garanti', 'Custom integrationer'],
    highlight: false,
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-indigo-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            Ny generation AI-medarbetare
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#0f172a] leading-tight tracking-tight">
            Din smartaste{' '}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
              medarbetare
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-500 leading-relaxed">
            AI-agenter som automatiserar din verksamhet — sover aldrig, sjuknar aldrig, förhandlar aldrig om lön.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/kontakt"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 hover:shadow-xl hover:shadow-violet-200 transition-all duration-200 hover:-translate-y-0.5"
            >
              Boka gratis demo
            </Link>
            <Link
              to="/tjanster"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 rounded-full border border-slate-200 hover:border-violet-300 hover:text-violet-700 transition-all duration-200"
            >
              Se hur det fungerar →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0f172a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-extrabold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vad vi gör */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0f172a]">Vad vi gör</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
              Vi installerar AI-medarbetare direkt i ditt företag — on-prem, säkert, och klart på 2 veckor.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="p-8 rounded-2xl border border-slate-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50 transition-all duration-200">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hur det fungerar */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0f172a]">Hur det fungerar</h2>
            <p className="mt-4 text-lg text-slate-500">Från första möte till driftsatt AI-medarbetare.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="relative p-8 bg-white rounded-2xl border border-slate-100">
                <div className="text-6xl font-extrabold text-violet-100 mb-4">{s.num}</div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">{s.title}</h3>
                <p className="text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prisöversikt */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0f172a]">Enkla priser</h2>
            <p className="mt-4 text-lg text-slate-500">Installation: 2 900 kr (engång) för alla planer.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`p-8 rounded-2xl border-2 transition-all ${
                  p.highlight
                    ? 'border-violet-500 shadow-xl shadow-violet-100 scale-105'
                    : 'border-slate-100 hover:border-violet-200'
                }`}
              >
                {p.highlight && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold mb-4">
                    Populärast
                  </div>
                )}
                <h3 className="text-xl font-bold text-[#0f172a]">{p.name}</h3>
                <p className="text-sm text-slate-500 mt-1 mb-4">{p.desc}</p>
                <div className="text-4xl font-extrabold text-[#0f172a]">
                  {p.price === 'Offert' ? p.price : `${p.price} kr`}
                  {p.price !== 'Offert' && <span className="text-lg font-normal text-slate-400">/mån</span>}
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-5 h-5 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-xs">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/kontakt"
                  className={`mt-8 w-full block text-center px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                    p.highlight
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-500 text-white hover:shadow-lg'
                      : 'border border-slate-200 text-slate-700 hover:border-violet-300'
                  }`}
                >
                  Kom igång
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-violet-600 to-indigo-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white">Redo att effektivisera?</h2>
          <p className="mt-4 text-violet-200 text-lg">
            Boka en gratis 30-minutersaudit — vi visar hur AI kan spara tid och pengar i just ditt företag.
          </p>
          <Link
            to="/kontakt"
            className="mt-8 inline-flex items-center px-8 py-4 rounded-full bg-white text-violet-700 font-semibold hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Boka gratis demo
          </Link>
        </div>
      </section>
    </>
  )
}
