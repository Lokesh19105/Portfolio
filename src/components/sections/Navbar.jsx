import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 py-4",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group cursor-pointer">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20"
          >
            <Sparkles className="w-5 h-5 text-white" />
          </motion.div>
          <span className="font-heading font-bold text-xl tracking-tight text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text hover:text-transparent transition-all duration-300">
            Lokesh Kumar
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-muted/20 border border-border/20 rounded-full px-4 py-1.5 glassmorphism">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>
          ))}
        </nav>

        {/* Actions (Theme Toggle + Mobile Menu) */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full cursor-pointer hover:bg-muted/50"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-[1.2rem] w-[1.2rem] text-amber-400 transition-all" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem] text-primary transition-all" />
            )}
          </Button>

          {/* Contact CTA */}
          <a href="#contact" className="hidden sm:inline-block">
            <Button className="rounded-full cursor-pointer bg-gradient-to-r from-primary to-accent hover:brightness-110 text-white font-medium shadow-md shadow-primary/10">
              Get in Touch
            </Button>
          </a>

          {/* Hamburger Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-full cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-border/40 bg-background/95 backdrop-blur-md overflow-hidden mt-3 rounded-2xl glassmorphism"
          >
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-muted/50 text-base font-medium text-foreground transition-colors block"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2"
              >
                <Button className="w-full rounded-xl bg-gradient-to-r from-primary to-accent text-white py-6">
                  Get in Touch
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
