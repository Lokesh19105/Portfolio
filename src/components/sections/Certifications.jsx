import * as React from "react"
import { motion } from "framer-motion"
import { Award, Code2, Cloud, Network, ShieldCheck } from "lucide-react"
import { Card, CardContent, MotionCard } from "@/components/ui/card"

const certificationsData = [
  {
    title: "Full Stack Development",
    issuer: "Novitech",
    icon: Code2,
    color: "text-violet-500 bg-violet-500/10",
    gradient: "from-violet-500/20 to-purple-500/5",
    description: "Hands-on certification covering full-stack software architecture, backend databases, and modern interactive UI design.",
  },
  {
    title: "Data Structures",
    issuer: "Infosys Springboard",
    icon: Network,
    color: "text-pink-500 bg-pink-500/10",
    gradient: "from-pink-500/20 to-rose-500/5",
    description: "In-depth training on algorithm efficiency, complexity analysis, and advanced memory structures.",
  },
  {
    title: "Java with Beginner DSA",
    issuer: "CodeChef",
    icon: ShieldCheck,
    color: "text-emerald-500 bg-emerald-500/10",
    gradient: "from-emerald-500/20 to-teal-500/5",
    description: "Problem-solving and competitive programming training covering object-oriented Java programming and primary data systems.",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    icon: Cloud,
    color: "text-cyan-500 bg-cyan-500/10",
    gradient: "from-cyan-500/20 to-blue-500/5",
    description: "Theoretical and practical training detailing cloud models, virtualization techniques, and distributed compute instances.",
  },
]

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  }

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-muted/10">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Award className="w-3.5 h-3.5" />
            Certifications
          </motion.div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Licenses & Credentials
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            Verified academic achievements, competitive coding milestones, and specialized technical training.
          </p>
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certificationsData.map((cert, idx) => {
            const Icon = cert.icon
            return (
              <MotionCard
                key={idx}
                variants={itemVariants}
                className="glassmorphism group overflow-hidden border-border/50 hover:border-primary/30 flex flex-col h-full"
              >
                <div className={`h-[3px] bg-gradient-to-r ${cert.gradient}`} />
                <CardContent className="p-6 flex flex-col flex-1 justify-between">
                  <div className="space-y-4">
                    <div className={`w-10 h-10 rounded-xl ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-primary font-medium mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed font-light">
                      {cert.description}
                    </p>
                  </div>
                </CardContent>
              </MotionCard>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
