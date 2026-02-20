import TopBar from "@/components/TopBar"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Marquee from "@/components/Marquee"
import Services from "@/components/Services"
import About from "@/components/About"
import Work from "@/components/Work"
import Process from "@/components/Process"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation & Informational Bars */}
      <TopBar />
      <Navbar />

      {/* Hero Section - The First Impression */}
      <Hero />

      {/* Brand & Market Presence */}
      <Marquee />

      {/* Core Business Offerings */}
      <Services />

      {/* Company Story & Expertise */}
      <About />

      {/* Portfolio & Success Stories */}
      <Work />

      {/* Operational Methodology */}
      <Process />

      {/* Social Proof & Trust Building */}
      <Testimonials />

      {/* Conversion Focus Section */}
      <Contact />

      {/* Site Navigation & Legal */}
      <Footer />
    </main>
  )
}
