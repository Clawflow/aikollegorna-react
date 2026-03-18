import { Link } from 'react-router-dom'

const values = [
  { icon: '🎯', title: 'Resultat framför teknik', desc: 'Vi pratar inte om AI — vi levererar konkret nytta. ROI mäts i sparad tid och pengar.' },
  { icon: '🔒', title: 'Säkerhet & GDPR', desc: 'All data stannar hos dig. On-prem installation innebär att inget lämnar ditt kontor.' },
  { icon: '🤝', title: 'Partnerskap', desc: 'Vi är inte en leverantör — vi är din digitala partner. Månadsvis uppföljning ingår.' },
  { icon: '⚡', title: 'Snabb leverans', desc: 'Från signerat avtal till driftsatt AI-medarbetare på 2 veckor. Inga månader av konsultarbete.' },
]

export default function OmOss() {
  return (
    <>
      <section className="bg-gradient-to-br from-violet-50 to-indigo-50 py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-[#0f172a]">Om oss</h1>
          <p className="mt-5 text-xl text-slate-500">
            Vi gör AI tillgängligt för svenska SMB — utan krångel, utan teknikjargong.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#0f172a] mb-6">Vår vision</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-4">
                AI Kollegorna grundades med en enkel övertygelse: AI ska vara tillgängligt för alla företag — inte bara storbolagen med stora IT-avdelningar.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed mb-4">
                Vi installerar AI-medarbetare direkt hos dig. On-prem. Säkert. Klart på 2 veckor.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed">
                Vår kund är den svenska SMB-företagaren som vill växa utan att nödvändigtvis anställa fler — eller som vill frigöra sitt teams tid för det som faktiskt kräver en människa.
              </p>
            </div>
            <div className="bg-gradient-to-br from-violet-100 to-indigo-100 rounded-2xl aspect-square flex items-center justify-center">
              <span className="text-9xl">🤖</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0f172a]">Vi tror på</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-violet-200 hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-violet-600 to-indigo-600 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white">Vill du veta mer?</h2>
          <p className="mt-4 text-violet-200">Boka ett kort samtal — vi berättar mer om hur vi jobbar.</p>
          <Link to="/kontakt" className="mt-8 inline-flex px-8 py-4 rounded-full bg-white text-violet-700 font-semibold hover:shadow-xl transition-all hover:-translate-y-0.5">
            Kontakta oss
          </Link>
        </div>
      </section>
    </>
  )
}
