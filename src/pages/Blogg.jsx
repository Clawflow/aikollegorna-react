import { useEffect } from 'react'
import { Link } from 'react-router-dom'
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

const categoryColors = {
  Guide: '#0047FF',
  Bransch: '#7C3AED',
  Juridik: '#D97706',
}

export default function Blogg() {
  useFadeUp()

  useEffect(() => {
    document.title = 'Blogg — AI kollegorna | Artiklar om AI-automatisering'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Läs våra artiklar om AI-medarbetare, automatisering och GDPR för svenska företag. Praktiska guider och branschinsikter.')
  }, [])

  return (
    <>
      <section className="page-hero">
        <p className="section-label" style={{ justifyContent: 'center' }}>Blogg</p>
        <h1>Insikter om <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>AI-automatisering</em></h1>
        <p>Praktiska guider, branschinsikter och allt du behöver veta om AI för svenska företag — skrivna av vårt team.</p>
      </section>

      <section className="section">
        <div className="blogg-grid">
          {articles.map((article, i) => (
            <Link
              to={`/blogg/${article.id}`}
              key={article.id}
              className="blogg-card fade-up"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="blogg-card-img">
                <div className="blogg-card-img-inner">
                  <span className="blogg-card-icon">
                    {article.category === 'Guide' && '📘'}
                    {article.category === 'Bransch' && '🏢'}
                    {article.category === 'Juridik' && '⚖️'}
                  </span>
                </div>
              </div>
              <div className="blogg-card-body">
                <div className="blogg-card-meta">
                  <span
                    className="blogg-card-category"
                    style={{ background: `${categoryColors[article.category]}12`, color: categoryColors[article.category], borderColor: `${categoryColors[article.category]}30` }}
                  >
                    {article.category}
                  </span>
                  <span className="blogg-card-date">{article.date}</span>
                  <span className="blogg-card-read">{article.readMinutes} min läsning</span>
                </div>
                <h2 className="blogg-card-title">{article.title}</h2>
                <p className="blogg-card-ingress">{article.ingress}</p>
                <span className="blogg-card-link">
                  Läs artikel →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
