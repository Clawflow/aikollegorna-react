import { useEffect, useRef } from 'react'

export default function HeroCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H, nodes = [], t = 0
    const COUNT = 30, CONNECT_DIST = 150
    let animId
    const mouse = { x: -999, y: -999 }

    function resize() {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    const onMouse = (e) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }
    canvas.parentElement.addEventListener('mousemove', onMouse)

    function makeNode() {
      return {
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35,
        r: Math.random() * 3 + 1.2,
        alpha: Math.random() * .55 + .3,
        phase: Math.random() * Math.PI * 2,
        amber: Math.random() < .45,
        cr: 0
      }
    }

    function updateNode(n) {
      n.x += n.vx; n.y += n.vy
      n.cr = n.r * (Math.sin(t * .02 + n.phase) * .3 + 1)
      const dx = n.x - mouse.x, dy = n.y - mouse.y
      const d = Math.sqrt(dx * dx + dy * dy)
      if (d < 100) { const f = (100 - d) / 100; n.x += dx / d * f * 2; n.y += dy / d * f * 2 }
      if (n.x < -20) n.x = W + 20
      if (n.x > W + 20) n.x = -20
      if (n.y < -20) n.y = H + 20
      if (n.y > H + 20) n.y = -20
    }

    function init() {
      nodes = []
      for (let i = 0; i < COUNT; i++) nodes.push(makeNode())
    }

    function draw() {
      t++
      ctx.clearRect(0, 0, W, H)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < CONNECT_DIST) {
            const s = 1 - d / CONNECT_DIST
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y)
            grad.addColorStop(0, a.amber ? `rgba(245,158,11,${s*.18})` : `rgba(200,200,255,${s*.10})`)
            grad.addColorStop(1, b.amber ? `rgba(245,158,11,${s*.18})` : `rgba(200,200,255,${s*.10})`)
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = grad; ctx.lineWidth = s * 1.4; ctx.stroke()
          }
        }
      }
      for (const n of nodes) {
        updateNode(n)
        const gr = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.cr * 9)
        if (n.amber) {
          gr.addColorStop(0, `rgba(245,158,11,${n.alpha*.6})`); gr.addColorStop(.4, `rgba(217,119,6,${n.alpha*.2})`)
        } else {
          gr.addColorStop(0, `rgba(180,180,255,${n.alpha*.45})`); gr.addColorStop(.4, `rgba(100,100,220,${n.alpha*.1})`)
        }
        gr.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.beginPath(); ctx.arc(n.x, n.y, n.cr * 9, 0, Math.PI * 2); ctx.fillStyle = gr; ctx.fill()
        ctx.beginPath(); ctx.arc(n.x, n.y, n.cr, 0, Math.PI * 2)
        ctx.fillStyle = n.amber ? `rgba(251,191,36,${n.alpha})` : `rgba(230,230,255,${n.alpha})`; ctx.fill()
      }
      animId = requestAnimationFrame(draw)
    }

    const onResize = () => { resize(); init() }
    window.addEventListener('resize', onResize)
    resize(); init(); draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      canvas.parentElement?.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-canvas" />
}
