import { About } from "./components/About"
import { Cases } from "./components/Cases"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Myths } from "./components/Myths"
import { Nav } from "./components/Nav"
import { Process } from "./components/Process"
import { Services } from "./components/Services"
import { WhatsAppFab } from "./components/WhatsAppFab"
import { useDocumentTitle } from "./components/Reveal"

export default function App() {
  useDocumentTitle("LA TOGA | Abogada Paula García — Misiones")

  return (
    <div className="grain-overlay min-h-[100dvh] bg-ink text-paper">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Myths />
        <Cases />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
