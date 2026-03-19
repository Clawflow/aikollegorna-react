import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Tjanster from './pages/Tjanster'
import OmOss from './pages/OmOss'
import Priser from './pages/Priser'
import Kontakt from './pages/Kontakt'
import Case from './pages/Case'
import Fallstudier from './pages/Fallstudier'
import Fastighet from './pages/branches/Fastighet'
import Redovisning from './pages/branches/Redovisning'
import Ehandel from './pages/branches/Ehandel'
import Juridik from './pages/branches/Juridik'
import Blogg from './pages/Blogg'
import BloggArtikel from './pages/BloggArtikel'
import Integritetspolicy from './pages/Integritetspolicy'
import Villkor from './pages/Villkor'
import Demo from './pages/Demo'
import ExitIntent from './components/ExitIntent'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ExitIntent />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tjanster" element={<Tjanster />} />
          <Route path="/om-oss" element={<OmOss />} />
          <Route path="/priser" element={<Priser />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/case" element={<Case />} />
          <Route path="/fallstudier" element={<Fallstudier />} />
          <Route path="/fastighet" element={<Fastighet />} />
          <Route path="/redovisning" element={<Redovisning />} />
          <Route path="/ehandel" element={<Ehandel />} />
          <Route path="/juridik" element={<Juridik />} />
          <Route path="/blogg" element={<Blogg />} />
          <Route path="/blogg/:id" element={<BloggArtikel />} />
          <Route path="/integritetspolicy" element={<Integritetspolicy />} />
          <Route path="/villkor" element={<Villkor />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
