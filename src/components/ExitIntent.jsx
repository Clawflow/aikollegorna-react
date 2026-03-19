import { useState, useEffect } from 'react'

export default function ExitIntent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    function handleMouseOut(e) {
      if (!e.relatedTarget && e.clientY < 0) {
        if (sessionStorage.getItem('exit-intent-shown')) return
        sessionStorage.setItem('exit-intent-shown', '1')
        setShow(true)
      }
    }
    document.addEventListener('mouseout', handleMouseOut)
    return () => document.removeEventListener('mouseout', handleMouseOut)
  }, [])

  if (!show) return null

  function close() { setShow(false) }

  return (
    <div className="exit-overlay" onClick={close}>
      <div className="exit-modal" onClick={e => e.stopPropagation()}>
        <h2 className="exit-title">Vänta! Innan du går —</h2>
        <p className="exit-sub">Boka ett gratis 30-minuterssamtal.</p>
        <p className="exit-desc">Vi visar hur AI kan spara 12h/vecka för ert företag.</p>
        <div className="exit-actions">
          <a href="/kontakt" className="exit-btn-primary">Boka samtal →</a>
          <button className="exit-btn-secondary" onClick={close}>Nej tack</button>
        </div>
      </div>
    </div>
  )
}
