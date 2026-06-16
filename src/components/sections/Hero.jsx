import * as React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, ArrowDown, Code, Terminal, Trophy } from "lucide-react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6"
import { Button, MotionButton } from "@/components/ui/button"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  }

  const floatingVariants = {
    animate: (custom) => ({
      y: [custom.yStart, custom.yEnd],
      x: [custom.xStart, custom.xEnd],
      rotate: [custom.rStart, custom.rEnd],
      transition: {
        yoyo: Infinity,
        repeat: Infinity,
        repeatType: "reverse",
        duration: custom.duration || 4,
        ease: "easeInOut",
      },
    }),
  }

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Grids & Glows */}
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
      
      {/* Moving Ambient Glowing Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/20 dark:bg-primary/30 blur-[80px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] rounded-full bg-accent/20 dark:bg-accent/25 blur-[90px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Open for Internships & Full-time Roles
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-heading font-extrabold text-5xl md:text-6xl xl:text-7xl leading-tight text-foreground"
          >
            Hi, I'm{" "}
            <span className="text-gradient-light dark:text-gradient">Lokesh</span>
            <br />
            Full-Stack Developer
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed"
          >
            Java Full Stack Developer with hands-on experience in Spring Boot, MySQL, and RESTful API development. Passionate about IoT systems, embedded hardware, and cloud computing.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <a href="#projects">
              <MotionButton
                size="lg"
                className="rounded-full cursor-pointer bg-gradient-to-r from-primary to-accent hover:brightness-110 text-white font-medium shadow-lg shadow-primary/20 group"
              >
                View My Projects
                <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </MotionButton>
            </a>
            <a href="#contact">
              <MotionButton
                size="lg"
                variant="outline"
                className="rounded-full cursor-pointer border-border font-medium hover:bg-muted/40"
              >
                Get in Touch
              </MotionButton>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 pt-4 border-t border-border/40 w-full"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Connect:
            </span>
            <div className="flex gap-2">
              {[
                { icon: FaGithub, url: "https://github.com", name: "GitHub" },
                { icon: FaLinkedin, url: "https://linkedin.com", name: "LinkedIn" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-colors border border-border/30 shadow-sm"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Visual Showcase with Lokesh Headshot */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[350px] md:min-h-[450px]">
          {/* Main Visual Centerpiece Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 1.2, delay: 0.4 }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-[40px] bg-gradient-to-tr from-primary to-accent opacity-20 dark:opacity-25 blur-xl absolute"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.5 }}
            className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-[45px] overflow-hidden border-4 border-white/20 dark:border-white/10 shadow-2xl flex items-center justify-center bg-card group"
          >
            <img 
              src="/src/assets/lokesh_profile.jpg" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              alt="Lokesh Kumar A"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
            
            {/* Overlay Tech Badge */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col items-center text-center">
              <span className="text-white text-xs font-mono font-semibold tracking-wider drop-shadow-md bg-black/45 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                LOKESH KUMAR A
              </span>
            </div>
          </motion.div>

          {/* Floating Stats Card 1: B.E. CGPA */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            custom={{ yStart: 10, yEnd: -10, xStart: -10, xEnd: 10, rStart: -5, rEnd: 5, duration: 6 }}
            className="absolute top-10 left-4 md:-left-4 z-20 glassmorphism rounded-2xl p-4 shadow-xl flex items-center gap-3 border border-white/20"
          >
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-500">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">
                B.E. CGPA
              </p>
              <h4 className="font-heading font-extrabold text-lg text-foreground">
                7.3 CGPA
              </h4>
            </div>
          </motion.div>

          {/* Floating Stats Card 2: IoT Training */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            custom={{ yStart: -15, yEnd: 15, xStart: 15, xEnd: -15, rStart: 5, rEnd: -5, duration: 5 }}
            className="absolute bottom-6 right-4 md:-right-4 z-20 glassmorphism rounded-2xl p-4 shadow-xl flex items-center gap-3 border border-white/20"
          >
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">
                Training
              </p>
              <h4 className="font-heading font-extrabold text-sm text-foreground">
                e-Yantra IoT
              </h4>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }}
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
