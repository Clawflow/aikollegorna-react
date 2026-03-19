import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { articles } from '../data/articles'

function useFadeUp() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export default function BloggArtikel() {
  const { id } = useParams()
  const article = articles.find(a => a.id === id)
  const related = articles.filter(a => a.id !== id)

  useFadeUp()

  useEffect(() => {
    if (article) {
      document.title = `${article.title} — AI kollegorna`
      const meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', article.metaDescription)
    }
  }, [article])

  if (!article) {
    return (
      <section className="section" style={{ textAlign: 'center', paddingTop: 160 }}>
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: 40, marginBottom: 16 }}>404 — Artikeln hittades inte</h1>
        <p style={{ color: 'var(--muted)', marginBottom: 32 }}>Vi kunde inte hitta den artikel du letar efter.</p>
        <Link to="/blogg" className="btn-dark">Tillbaka till bloggen</Link>
      </section>
    )
  }

  const categoryColors = {
    Guide: '#0047FF',
    Bransch: '#7C3AED',
    Juridik: '#D97706',
  }

  return (
    <>
      <section className="artikel-hero">
        <div className="artikel-hero-inner">
          <Link to="/blogg" className="artikel-back">← Alla artiklar</Link>
          <div className="artikel-hero-meta">
            <span
              className="blogg-card-category"
              style={{ background: `${categoryColors[article.category]}12`, color: categoryColors[article.category], borderColor: `${categoryColors[article.category]}30` }}
            >
              {article.category}
            </span>
            <span className="artikel-hero-date">{article.date}</span>
            <span className="artikel-hero-read">{article.readMinutes} min läsning</span>
          </div>
          <h1 className="artikel-h1">{article.title}</h1>
          <p className="artikel-ingress">{article.ingress}</p>
        </div>
      </section>

      <article className="artikel-body fade-up">
        <div className="artikel-content" dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>

      {/* CTA */}
      <section className="artikel-cta fade-up">
        <div className="artikel-cta-inner">
          <h2>Redo att komma igång?</h2>
          <p>Boka ett kostnadsfritt rådgivningssamtal och se hur en AI-medarbetare kan effektivisera just din verksamhet.</p>
          <div className="artikel-cta-actions">
            <Link to="/kontakt" className="btn-dark">Kontakta oss →</Link>
            <Link to="/tjanster" className="artikel-cta-secondary">Se våra tjänster</Link>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="section">
        <p className="section-label">Läs mer</p>
        <h2 className="section-h">Fler artiklar</h2>
        <div className="blogg-grid blogg-grid-related fade-up" style={{ marginTop: 40 }}>
          {related.map(a => (
            <Link to={`/blogg/${a.id}`} key={a.id} className="blogg-card">
              <div className="blogg-card-img">
                <div className="blogg-card-img-inner">
                  <span className="blogg-card-icon">
                    {a.category === 'Guide' && '📘'}
                    {a.category === 'Bransch' && '🏢'}
                    {a.category === 'Juridik' && '⚖️'}
                  </span>
                </div>
              </div>
              <div className="blogg-card-body">
                <div className="blogg-card-meta">
                  <span
                    className="blogg-card-category"
                    style={{ background: `${categoryColors[a.category]}12`, color: categoryColors[a.category], borderColor: `${categoryColors[a.category]}30` }}
                  >
                    {a.category}
                  </span>
                  <span className="blogg-card-date">{a.date}</span>
                </div>
                <h2 className="blogg-card-title">{a.title}</h2>
                <p className="blogg-card-ingress" style={{ WebkitLineClamp: 2 }}>{a.ingress}</p>
                <span className="blogg-card-link">Läs artikel →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
