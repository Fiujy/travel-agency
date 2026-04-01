import Header from './components/Header'
import HeroSection from './components/HeroSection'
import DestinationsSection from './components/DestinationsSection'
import ChatbotWidget from './components/ChatbotWidget'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-neutral-100">
      <Header />
      <main>
        <HeroSection />
        <DestinationsSection />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  )
}

export default App
