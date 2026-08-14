import { Navbar } from './components/Navbar.jsx'
import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import { Offerings } from './components/Offerings.jsx'
import { Menu } from './components/Menu.jsx'
import { Reviews } from './components/Reviews.jsx'
import { Visit } from './components/Visit.jsx'
import { Footer } from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Offerings />
        <Menu />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
