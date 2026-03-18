import { useState } from 'react'

export default function Kontakt() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: koppla till backend / Formspree / Notion
    setSent(true)
  }

  return (
    <>
      <section className="bg-gradient-to-br from-violet-50 to-indigo-50 py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-[#0f172a]">Boka demo</h1>
          <p className="mt-5 text-xl text-slate-500">
            30 minuter. Gratis. Vi visar konkret hur AI kan spara tid och pengar i just ditt företag.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-bold text-[#0f172a] mb-6">Vad händer sen?</h2>
            <div className="space-y-6">
              {[
                { step: '01', title: 'Vi bekräftar inom 24h', desc: 'Du hör från oss senast nästa arbetsdag med förslag på tid.' },
                { step: '02', title: '30 min gratis audit', desc: 'Vi går igenom dina processer och identifierar var AI gör störst nytta.' },
                { step: '03', title: 'Förslag & offert', desc: 'Du får ett konkret förslag med estimerat ROI — utan förpliktelser.' },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-violet-100 text-violet-700 font-bold flex items-center justify-center shrink-0 text-sm">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0f172a]">{s.title}</h3>
                    <p className="text-slate-500 text-sm mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-slate-50 rounded-xl">
              <p className="text-sm font-semibold text-[#0f172a] mb-1">Direktkontakt</p>
              <a href="mailto:hej@aikollegorna.se" className="text-violet-600 hover:underline">
                hej@aikollegorna.se
              </a>
            </div>
          </div>

          {/* Formulär */}
          <div>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Tack för ditt meddelande!</h3>
                <p className="text-slate-500">Vi hör av oss inom 24 timmar.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">Namn *</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition"
                    placeholder="Anna Svensson"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">E-post *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition"
                    placeholder="anna@foretaget.se"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">Företag</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition"
                    placeholder="Ditt AB"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-1">Meddelande</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition resize-none"
                    placeholder="Berätta kort om ditt företag och vad du vill automatisera..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 text-white font-semibold hover:shadow-lg hover:shadow-violet-200 transition-all hover:-translate-y-0.5"
                >
                  Boka gratis demo →
                </button>
                <p className="text-xs text-slate-400 text-center">
                  Vi svarar inom 24 timmar. Inga förpliktelser.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
