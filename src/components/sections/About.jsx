import { motion } from "framer-motion"
import { User, Lightbulb, Compass, GraduationCap, Cpu } from "lucide-react"
import { CardContent, MotionCard } from "@/components/ui/card"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  }

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-muted/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <User className="w-3.5 h-3.5" />
            About Me
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4"
          >
            Crafting Digital Solutions, One Line of Code at a Time
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg font-light leading-relaxed"
          >
            I am a software engineer dedicated to building seamless user experiences. I specialize in merging design intuition with solid engineering principles to create web applications that work beautifully.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Card 1: Who I Am */}
          <MotionCard
            variants={cardVariants}
            className="lg:col-span-2 relative overflow-hidden group glassmorphism"
          >
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-accent" />
            <CardContent className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-foreground">
                My Background
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                I am a Java Full Stack Developer with hands-on experience in Spring Boot, MySQL, and RESTful API development. Currently pursuing my B.E. in Computer Science Engineering, my technical journey is focused on merging robust backend architecture with interactive frontends and real-time physical systems.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                With a strong academic foundation in Data Structures, Object-Oriented Programming, and Cloud Computing, I enjoy building end-to-end solutions that solve practical problems, whether they live in a database or interact directly with embedded hardware.
              </p>
            </CardContent>
          </MotionCard>

          {/* Card 2: Engineering Philosophy */}
          <MotionCard variants={cardVariants} className="group glassmorphism">
            <CardContent className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-500 mb-4 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-foreground">
                My Philosophy
              </h3>
              <ul className="space-y-3 text-muted-foreground text-sm font-light">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold">✓</span>
                  <span><strong>Strong Basics:</strong> Mastering core data structures and OOP principles.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold">✓</span>
                  <span><strong>Hardware + Software:</strong> Unlocking full automation by connecting web stacks with microcontrollers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold">✓</span>
                  <span><strong>Clean APIs:</strong> Writing modular Spring Boot REST endpoints that scale.</span>
                </li>
              </ul>
            </CardContent>
          </MotionCard>

          {/* Card 3: Journey & Education */}
          <MotionCard variants={cardVariants} className="group glassmorphism">
            <CardContent className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-foreground">
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground text-sm">
                    B.E. in Computer Science Engineering
                  </h4>
                  <p className="text-xs text-primary font-medium">
                    Sethu Institute of Technology
                  </p>
                  <p className="text-xs text-muted-foreground">
                    2023 - 2027 • CGPA: 7.3
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">
                    HSC - Computer Science
                  </h4>
                  <p className="text-xs text-primary font-medium">
                    Vivekananda Vidhyashram Matric School
                  </p>
                  <p className="text-xs text-muted-foreground">
                    2022 - 2023 • Grade: 65%
                  </p>
                </div>
              </div>
            </CardContent>
          </MotionCard>

          {/* Card 4: Interests / Values */}
          <MotionCard
            variants={cardVariants}
            className="lg:col-span-2 relative overflow-hidden group glassmorphism"
          >
            <CardContent className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-4 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-foreground">
                What Motivates Me
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                I am deeply interested in automation, robotics, and cloud deployment. Exploring how hardware inputs (like ultrasonic sensors) interface with web analytics and monitoring tools drives my engineering experiments. In my free time, I study data structures, build micro-controllers projects, and keep up to date with cloud computing and full-stack development trends.
              </p>
            </CardContent>
          </MotionCard>
        </motion.div>
      </div>
    </section>
  )
}
