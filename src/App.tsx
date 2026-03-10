import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { ScrollArrows } from './components/ScrollArrows'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Products } from './components/Products'
import { Gallery } from './components/Gallery'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { OrderStatus } from './pages/OrderStatus'

function HomePage() {
  const { hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])

  return (
    <>
      <ScrollArrows />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Gallery />
        <Contact />
      </main>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order-status" element={<OrderStatus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
