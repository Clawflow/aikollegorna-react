const testimonials = [
  {
    quote: "Vi sparade 12 timmar i veckan direkt fr\u00e5n dag ett. AI:n hanterar produktbilder och kundmejl medan vi fokuserar p\u00e5 tillv\u00e4xt.",
    author: "Marcus",
    role: "VD, Wristbuddys",
    company: "#1 Sveriges e-handelsraket 2025",
    initials: "M"
  },
  {
    quote: "GDPR-aspekten var avg\u00f6rande f\u00f6r oss. Att all data stannar p\u00e5 v\u00e5rt eget kontor var det som fick oss att s\u00e4ga ja.",
    author: "VD",
    role: "Fastighetsf\u00f6rvaltning, Stockholm",
    company: "Fastighetsbolag",
    initials: "V"
  },
  {
    quote: "Setup p\u00e5 2 dagar. Inga kr\u00e5ngel. Fungerade direkt. Jag var skeptisk men det visade sig vara enklare \u00e4n jag trodde.",
    author: "Grundare",
    role: "E-handelsbolag",
    company: "E-handel, G\u00f6teborg",
    initials: "G"
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2>Vad v\u00e5ra kunder s\u00e4ger</h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
            <span className="testimonial-quote-icon">\u201D</span>
            <p className="testimonial-text">{t.quote}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{t.initials}</div>
              <div>
                <div className="testimonial-name">{t.author}</div>
                <div className="testimonial-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
