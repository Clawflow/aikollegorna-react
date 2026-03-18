import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Tjanster from './pages/Tjanster'
import OmOss from './pages/OmOss'
import Priser from './pages/Priser'
import Kontakt from './pages/Kontakt'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tjanster" element={<Tjanster />} />
          <Route path="/om-oss" element={<OmOss />} />
          <Route path="/priser" element={<Priser />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
