import { motion, useScroll, useSpring } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/sections/Navbar"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import Experience from "@/components/sections/Experience"
import Certifications from "@/components/sections/Certifications"
import Contact from "@/components/sections/Contact"
import { Heart } from "lucide-react"

function AppContent() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-foreground antialiased transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-blue-500 z-50 transform-origin-left"
        style={{ scaleX }}
      />

      {/* Navbar Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 bg-muted/20 glassmorphism relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="font-heading font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Lokesh.dev
            </span>
            <p className="text-xs text-muted-foreground mt-1.5 font-light">
              © {new Date().getFullYear()} Lokesh. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-light">
            <span>Built with React 19, Tailwind CSS v4, and Motion</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 animate-pulse" />
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <AppContent />
    </ThemeProvider>
  )
}

export default App
