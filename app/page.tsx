import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Pricing"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import { LanguageProvider } from "./contexts/LanguageContext"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>
          <Hero />
          <Features />
          <Testimonials />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

