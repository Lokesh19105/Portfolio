import * as React from "react"
import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Calendar, Compass } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const timelineData = [
  {
    id: 1,
    type: "work",
    role: "Trainee - Robotics & IoT",
    company: "e-Yantra ZET Spire",
    duration: "2024",
    description: "Developed hands-on experience in robotics fundamentals and IoT concepts through structured training modules. Gained practical exposure to real-time hardware-software interaction in embedded systems environments and improved understanding of automation principles and embedded system design.",
    tags: ["Robotics", "IoT", "Embedded Systems", "Automation"],
  },
  {
    id: 2,
    type: "education",
    role: "B.E. in Computer Science Engineering",
    company: "Sethu Institute of Technology",
    duration: "2023 - 2027",
    description: "Currently pursuing B.E. in Computer Science Engineering with a current CGPA of 7.3. Learning key computer science theories, system configurations, databases, and microcontrollers integration.",
    tags: ["Data Structures", "Algorithms", "OOPs", "MySQL", "Cloud Computing"],
  },
  {
    id: 3,
    type: "education",
    role: "HSC - Computer Science",
    company: "Vivekananda Vidhyashram Matric Hr Sec School",
    duration: "2022 - 2023",
    description: "Completed higher secondary certification majoring in Computer Science with a score of 65%. Developed foundational programming and analytical concepts.",
    tags: ["Computer Science", "Basic Programming"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Compass className="w-3.5 h-3.5" />
            My Journey
          </motion.div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Education & Experience
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            A chronological timeline of my professional accomplishments and educational background.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-border/80 ml-4 md:ml-32 space-y-12">
          {timelineData.map((item) => {
            const Icon = item.type === "work" ? Briefcase : GraduationCap

            return (
              <div key={item.id} className="relative">
                
                {/* Timeline Node Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  className={`absolute -left-[21px] top-1.5 w-10 h-10 rounded-full border border-border flex items-center justify-center bg-card shadow-sm z-10 text-foreground`}
                >
                  <Icon className="w-5 h-5 text-primary" />
                </motion.div>

                {/* Left Side Label (Desktop Only) */}
                <div className="hidden md:block absolute -left-52 top-3 w-40 text-right">
                  <span className="text-xs font-mono font-bold text-muted-foreground flex items-center justify-end gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {item.duration}
                  </span>
                </div>

                {/* Timeline Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="ml-8 md:ml-10"
                >
                  <Card className="glassmorphism hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-6 md:p-8 space-y-4">
                      
                      {/* Mobile Duration view */}
                      <span className="md:hidden inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground mb-1 bg-muted px-2 py-0.5 rounded-full">
                        <Calendar className="w-3 h-3 text-primary" />
                        {item.duration}
                      </span>

                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/20 pb-3">
                        <div>
                          <h3 className="font-heading font-semibold text-xl text-foreground">
                            {item.role}
                          </h3>
                          <p className="text-sm text-primary font-medium mt-0.5">
                            {item.company}
                          </p>
                        </div>
                        <Badge variant={item.type === "work" ? "default" : "secondary"} className="text-[10px]">
                          {item.type === "work" ? "Work" : "Education"}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed font-light">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.tags.map((tag, tagIdx) => (
                          <Badge key={tagIdx} variant="outline" className="text-[10px] bg-background/50 border-border">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
