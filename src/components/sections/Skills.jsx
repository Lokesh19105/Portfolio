import * as React from "react"
import { motion } from "framer-motion"
import { Code2, Server, Settings, Blocks, ShieldCheck } from "lucide-react"
import { Card, CardContent, MotionCard } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    icon: Code2,
    color: "text-violet-500 bg-violet-500/10",
    skills: [
      { name: "Java", level: "95%" },
      { name: "C++", level: "85%" },
      { name: "C", level: "85%" },
      { name: "Python", level: "80%" },
      { name: "HTML", level: "90%" },
      { name: "CSS", level: "90%" },
    ],
  },
  {
    id: "backend",
    title: "Frameworks & Databases",
    icon: Server,
    color: "text-pink-500 bg-pink-500/10",
    skills: [
      { name: "Spring Boot", level: "88%" },
      { name: "MySQL", level: "85%" },
      { name: "Postman API client", level: "90%" },
      { name: "RESTful Web APIs", level: "85%" },
      { name: "Data Structures & Algos", level: "80%" },
      { name: "OOP Principles", level: "85%" },
    ],
  },
  {
    id: "hardware",
    title: "Hardware & IoT & Cloud",
    icon: Settings,
    color: "text-cyan-500 bg-cyan-500/10",
    skills: [
      { name: "Arduino Microcontrollers", level: "90%" },
      { name: "Ultrasonic Sensors", level: "85%" },
      { name: "Embedded Systems", level: "80%" },
      { name: "Robotics Fundamentals", level: "75%" },
      { name: "Cloud Computing", level: "78%" },
    ],
  },
]

export default function Skills() {
  const [activeTab, setActiveTab] = React.useState("languages")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Blocks className="w-3.5 h-3.5" />
            Skills & Stacks
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4"
          >
            My Technical Arsenal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg font-light leading-relaxed"
          >
            A curated list of frameworks, languages, and development tools I work with daily to bring applications to life.
          </motion.p>
        </div>

        {/* Interactive Stacks */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-12">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex gap-2 items-center">
                <category.icon className="w-4 h-4" />
                <span>{category.title.split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {category.skills.map((skill, idx) => (
                  <MotionCard
                    key={idx}
                    variants={itemVariants}
                    className="glassmorphism group overflow-hidden border-border/50 hover:border-primary/30"
                  >
                    <CardContent className="p-6 flex flex-col gap-4 relative">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg ${category.color} flex items-center justify-center`}>
                            <ShieldCheck className="w-4 h-4" />
                          </div>
                          <span className="font-heading font-medium text-base text-foreground group-hover:text-primary transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-muted-foreground">
                          {skill.level}
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: skill.level }}
                          transition={{ duration: 1, delay: idx * 0.05, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        />
                      </div>
                    </CardContent>
                  </MotionCard>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
