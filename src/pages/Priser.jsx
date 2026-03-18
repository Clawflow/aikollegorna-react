import { Link } from 'react-router-dom'
import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    price: '4 900',
    desc: 'Perfekt för att komma igång med AI',
    features: [
      '1 AI-agent',
      '2–3 systemintegrationer',
      'E-postsupport',
      'Onboarding & utbildning',
      '6 månaders bindningstid',
    ],
    cta: 'Kom igång',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '7 900',
    desc: 'För dig som vill skala upp',
    features: [
      'Fler integrationer',
      'Prioritetssupport',
      'Månadsvis genomgång med oss',
      'Utökad automation',
      'Anpassade arbetsflöden',
    ],
    cta: 'Välj Growth',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: null,
    desc: 'Skräddarsytt för er verksamhet',
    features: [
      'Obegränsat antal agenter',
      'Dedikerad kontaktperson',
      'SLA-garanti',
      'Custom integrationer',
      'Prioriterat onboarding',
    ],
    cta: 'Kontakta oss',
    highlight: false,
  },
]

const faqs = [
  {
    q: 'Vad ingår i installationskostnaden?',
    a: 'Installationsavgiften på 2 900 kr täcker setup, konfiguration, integrationer och onboarding. Det är en engångsavgift oavsett plan.',
  },
  {
    q: 'Hur lång är bindningstiden?',
    a: 'Starter-planen har 6 månaders bindning. Growth och Enterprise löper månadsvis efter en initial period.',
  },
  {
    q: 'Kan jag uppgradera min plan?',
    a: 'Ja, du kan byta plan när som helst. Vid uppgradering tillkommer ingen extra installationskostnad.',
  },
  {
    q: 'Vad händer med min data?',
    a: 'All data stannar på din Mac mini hos dig. Inget skickas till molnet. GDPR-kompatibelt by design.',
  },
  {
    q: 'Behöver vi teknisk personal?',
    a: 'Nej. Vi sköter all setup och installation. Du behöver bara delta på ett introduktionsmöte.',
  },
]

export default function Priser() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <section className="bg-gradient-to-br from-violet-50 to-indigo-50 py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-[#0f172a]">Enkla, transparenta priser</h1>
          <p className="mt-5 text-xl text-slate-500">
            Installation: <strong className="text-[#0f172a]">2 900 kr</strong> (engång) + månadsavgift. Inga dolda kostnader.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`p-8 rounded-2xl border-2 transition-all ${
                  p.highlight
                    ? 'border-violet-500 shadow-2xl shadow-violet-100 scale-105'
                    : 'border-slate-100 hover:border-violet-200 hover:shadow-lg'
                }`}
              >
                {p.highlight && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-semibold mb-4">
                    Populärast
                  </span>
                )}
                <h3 className="text-2xl font-bold text-[#0f172a]">{p.name}</h3>
                <p className="text-sm text-slate-500 mt-1 mb-5">{p.desc}</p>
                <div className="text-5xl font-extrabold text-[#0f172a] mb-6">
                  {p.price ? (
                    <>
                      {p.price} <span className="text-xl font-normal text-slate-400">kr/mån</span>
                    </>
                  ) : (
                    <span className="text-3xl">På offert</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-slate-600 text-sm">
                      <span className="w-5 h-5 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-xs shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/kontakt"
                  className={`w-full block text-center px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                    p.highlight
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-500 text-white hover:shadow-lg hover:shadow-violet-200'
                      : 'border-2 border-slate-200 text-slate-700 hover:border-violet-300 hover:text-violet-700'
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-bold text-[#0f172a] text-center mb-12">Vanliga frågor</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition"
                >
                  <span className="font-semibold text-[#0f172a]">{faq.q}</span>
                  <span className="text-slate-400 text-xl ml-4">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-violet-600 to-indigo-600 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white">Osäker på vilken plan?</h2>
          <p className="mt-4 text-violet-200">Boka ett gratis samtal — vi hjälper dig välja rätt.</p>
          <Link to="/kontakt" className="mt-8 inline-flex px-8 py-4 rounded-full bg-white text-violet-700 font-semibold hover:shadow-xl transition-all hover:-translate-y-0.5">
            Prata med oss
          </Link>
        </div>
      </section>
    </>
  )
}
