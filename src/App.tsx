import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './assets/components/global/Header'
import Footer from './assets/components/global/Footer'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <Router basename="/MyPortfolio">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
