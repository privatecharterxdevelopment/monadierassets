import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Philosophy from './components/Philosophy'
import Assets from './components/Assets'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Ticker />
        <Philosophy />
        <Assets />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
