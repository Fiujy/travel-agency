import { useEffect } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import DestinationsSection from './components/DestinationsSection'
import ChatbotWidget from './components/ChatbotWidget'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]')
    if (!revealElements.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
      },
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black text-neutral-100">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <DestinationsSection />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  )
}

export default App
