import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, MapPin, Phone, Send, MessageSquareHeart, Sparkles } from "lucide-react"
import confetti from "canvas-confetti"
import { MotionButton } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const triggerConfetti = () => {
    // Blast 1
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#7c3aed", "#d946ef", "#60a5fa"],
    })
    
    // Blast 2
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#7c3aed", "#d946ef"],
      })
    }, 250)

    // Blast 3
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#d946ef", "#60a5fa"],
      })
    }, 400)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate sending message API
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      triggerConfetti()
      
      // Reset form
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success status after a delay
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-muted/10">
      {/* Glow backgrounds */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <MessageSquareHeart className="w-3.5 h-3.5" />
            Connect
          </motion.div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            Have a project in mind, want to discuss software details, or just say hi? Drop me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Panels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="lg:col-span-5 space-y-6"
          >
            <Card className="glassmorphism border-border/50">
              <CardContent className="p-8 space-y-6">
                <h3 className="font-heading font-semibold text-2xl text-foreground mb-4">
                  Contact Information
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm">
                  Feel free to reach out via the form, directly by email, or connect via social networks. I typically reply within 24 hours.
                </p>

                <div className="space-y-4 pt-4 border-t border-border/20">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email Me</p>
                      <a href="mailto:alokesh6374@gmail.com" className="text-sm font-medium hover:text-primary transition-colors text-foreground">
                        alokesh6374@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Call Me</p>
                      <a href="tel:997-693-2575" className="text-sm font-medium hover:text-primary transition-colors text-foreground">
                        +91 997-693-2575
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <span className="text-sm font-medium text-foreground">
                        Madurai, Tamil Nadu
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="lg:col-span-7"
          >
            <Card className="glassmorphism border-border/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full h-11 px-4 rounded-xl border border-border/60 bg-background/50 focus:bg-background focus:outline-hidden focus:ring-2 focus:ring-primary/45 focus:border-primary text-sm transition-all placeholder:text-muted-foreground/60 text-foreground"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full h-11 px-4 rounded-xl border border-border/60 bg-background/50 focus:bg-background focus:outline-hidden focus:ring-2 focus:ring-primary/45 focus:border-primary text-sm transition-all placeholder:text-muted-foreground/60 text-foreground"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full h-11 px-4 rounded-xl border border-border/60 bg-background/50 focus:bg-background focus:outline-hidden focus:ring-2 focus:ring-primary/45 focus:border-primary text-sm transition-all placeholder:text-muted-foreground/60 text-foreground"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full p-4 rounded-xl border border-border/60 bg-background/50 focus:bg-background focus:outline-hidden focus:ring-2 focus:ring-primary/45 focus:border-primary text-sm transition-all placeholder:text-muted-foreground/60 resize-none text-foreground"
                      placeholder="Hi, I'd love to collaborate on..."
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <MotionButton
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-xl px-6 h-12 bg-gradient-to-r from-primary to-accent text-white font-medium hover:brightness-110 shadow-lg shadow-primary/10 w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </MotionButton>

                    <AnimatePresence>
                      {isSuccess && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-xs text-emerald-500 font-medium flex items-center gap-1"
                        >
                          <Sparkles className="w-4 h-4 text-emerald-500 animate-bounce" />
                          Message sent successfully!
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
