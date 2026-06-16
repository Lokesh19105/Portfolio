import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FolderGit2, ExternalLink, Sparkles, LayoutTemplate, BarChart3, ShoppingBag } from "lucide-react"
import { FaGithub } from "react-icons/fa6"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, MotionCard } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogContent, DialogFooter } from "@/components/ui/dialog"

const projectsData = [
  {
    id: 1,
    title: "Vehicle Speed Tracker",
    category: "iot",
    tags: ["IoT", "Arduino", "Ultrasonic Sensors", "Embedded Systems"],
    description: "An IoT-based vehicle speed monitoring system using ultrasonic sensors and Arduino microcontroller for safety-critical zones.",
    longDescription: "Developed an IoT-based vehicle speed monitoring system using ultrasonic sensors and Arduino microcontroller. It measures the time elapsed between two detection points to compute real-time vehicle velocity, displaying live speed metrics on the serial monitor interface. Designed primarily for deployment in safety-critical zones such as school areas and traffic surveillance applications.",
    features: [
      "Arduino microcontroller interface logic",
      "Precision time-elapsed speed calculation",
      "Live data stream logging via serial port",
      "Safety-critical school zone alarm alerts",
    ],
    github: "https://github.com",
    live: "https://example.com",
    previewType: "tracker",
    gradient: "from-emerald-600/20 via-teal-600/10 to-cyan-600/20",
  },
  {
    id: 2,
    title: "Spring Boot RESTful Book API",
    category: "fullstack",
    tags: ["Java", "Spring Boot", "MySQL", "Postman", "REST APIs"],
    description: "A secure, robust backend REST API service managing data schemas, user orders, and automated catalog checks.",
    longDescription: "A backend inventory and store catalog system utilizing Java Spring Boot framework. Uses MySQL relational tables to persist information, providing secure endpoints to manage transactions, handle auth logs, and catalog books. Tested extensively via Postman workspace collections.",
    features: [
      "Spring Boot MVC backend configuration",
      "MySQL relational schema indexing and CRUD actions",
      "API request validation and routing endpoints",
      "Comprehensive API endpoint assertions via Postman",
    ],
    github: "https://github.com",
    live: "https://example.com",
    previewType: "api",
    gradient: "from-blue-600/20 via-indigo-600/10 to-violet-600/20",
  },
  {
    id: 3,
    title: "Cloud-Deployed Task Manager",
    category: "cloud",
    tags: ["Java", "MySQL", "Cloud Computing", "Spring Boot"],
    description: "A collaborative task scheduler deployed to cloud infrastructure with real-time performance logging.",
    longDescription: "A task assignment service built on Spring Boot and MySQL, deployed in a cloud hosting container. Implements a strong foundation in cloud computing structures, multi-instance loads, and relational task mapping to ensure high system uptime.",
    features: [
      "Task assignment relays mapping user teams",
      "Deployed on virtual cloud container instances",
      "MySQL database hosting cluster with replica syncs",
      "Real-time node status logging telemetry dashboard",
    ],
    github: "https://github.com",
    live: "https://example.com",
    previewType: "cloud",
    gradient: "from-pink-600/20 via-rose-600/10 to-amber-600/20",
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = React.useState("all")
  const [selectedProject, setSelectedProject] = React.useState(null)

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "all") return true
    return project.category === activeFilter
  })

  // Render a beautiful interactive CSS mockup instead of relying on external images
  const renderMockup = (type, gradient) => {
    const baseClass = `w-full h-48 rounded-t-xl bg-gradient-to-tr ${gradient} relative overflow-hidden flex items-center justify-center p-6 border-b border-border/20`
    
    if (type === "tracker") {
      return (
        <div className={baseClass}>
          {/* Mockup speed tracker serial monitor */}
          <div className="absolute inset-x-0 top-0 h-8 bg-black/10 dark:bg-black/30 backdrop-blur-xs flex items-center px-4 justify-between border-b border-white/5">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[10px] font-mono text-muted-foreground">arduino-serial-port:COM3</span>
            <div className="w-3.5 h-3.5" />
          </div>
          
          {/* Speedometer representation in HTML/CSS */}
          <div className="relative w-28 h-28 mt-4 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center z-10 bg-black/25">
            <div className="text-center flex flex-col items-center">
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-2xl font-bold font-mono text-emerald-400"
              >
                48
              </motion.span>
              <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-mono font-bold">KM/H</span>
            </div>
            <motion.div
              animate={{ rotate: [-45, 120, -45] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute w-12 h-1 bg-red-500 origin-left left-14 top-13.5 rounded-full shadow-md"
            />
          </div>
          <span className="absolute bottom-2 right-4 text-[9px] font-mono text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            DETECTING VELOCITY
          </span>
        </div>
      )
    }

    if (type === "api") {
      return (
        <div className={baseClass}>
          {/* Mockup API route code block */}
          <div className="absolute inset-x-0 top-0 h-8 bg-black/10 dark:bg-black/30 backdrop-blur-xs flex items-center px-4 justify-between border-b border-white/5">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[10px] font-mono text-muted-foreground">POST /api/v1/books</span>
            <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">201 OK</span>
          </div>
          
          {/* JSON Schema display */}
          <div className="w-full mt-6 bg-black/40 rounded-lg p-3 border border-white/5 font-mono text-[10px] text-left leading-relaxed text-blue-400 overflow-hidden select-none z-10 h-28">
            <p className="text-zinc-500">{"{"}</p>
            <p className="pl-4"><span className="text-purple-400">"status"</span>: <span className="text-emerald-400">"success"</span>,</p>
            <p className="pl-4"><span className="text-purple-400">"data"</span>: {"{"}</p>
            <p className="pl-8"><span className="text-purple-400">"title"</span>: <span className="text-orange-300">"Spring Microservices"</span>,</p>
            <p className="pl-8"><span className="text-purple-400">"records"</span>: <span className="text-blue-300">1208</span></p>
            <p className="pl-4">{"}"}</p>
            <p className="text-zinc-500">{"}"}</p>
          </div>
        </div>
      )
    }

    if (type === "cloud") {
      return (
        <div className={baseClass}>
          {/* Mockup cloud metrics panel */}
          <div className="absolute inset-x-0 top-0 h-8 bg-black/10 dark:bg-black/30 backdrop-blur-xs flex items-center px-4 justify-between border-b border-white/5">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[10px] font-mono text-muted-foreground">cloud-instance-4a:ACTIVE</span>
            <div className="w-3.5 h-3.5" />
          </div>
          
          {/* Mini server status bars */}
          <div className="w-full mt-6 grid grid-cols-2 gap-3 z-10">
            <div className="rounded-lg bg-black/20 border border-white/5 p-3 flex flex-col gap-2">
              <div className="flex justify-between items-center text-[9px] font-mono">
                <span className="text-muted-foreground">CPU</span>
                <span className="text-foreground">34%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-[34%] bg-primary" />
              </div>
            </div>
            <div className="rounded-lg bg-black/20 border border-white/5 p-3 flex flex-col gap-2">
              <div className="flex justify-between items-center text-[9px] font-mono">
                <span className="text-muted-foreground">RAM</span>
                <span className="text-foreground">62%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-[62%] bg-accent" />
              </div>
            </div>
          </div>
        </div>
      )
    }

    return null
  }

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-muted/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            Portfolio Showcase
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4"
          >
            Recent Works & Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg font-light leading-relaxed"
          >
            A curated selection of the projects I've built, ranging from data dashboards to immersive creative sites.
          </motion.p>
        </div>

        {/* Projects Tab Filters */}
        <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full">
          <TabsList className="mb-12">
            {[
              { id: "all", label: "All Projects" },
              { id: "fullstack", label: "Full-Stack" },
              { id: "iot", label: "IoT & Embedded" },
              { id: "cloud", label: "Cloud Computing" },
            ].map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeFilter}>
            {/* Projects Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MotionCard
                      onClick={() => setSelectedProject(project)}
                      className="glassmorphism cursor-pointer h-full border-border/50 hover:border-primary/30 flex flex-col justify-between"
                    >
                      <div>
                        {/* Interactive CSS Mockup Banner */}
                        {renderMockup(project.previewType, project.gradient)}

                        <CardHeader className="p-6">
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {project.tags.slice(0, 3).map((tag, idx) => (
                              <Badge key={idx} variant="outline" className="text-[10px] py-0 border-border">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <CardTitle className="group-hover:text-primary transition-colors text-lg">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-2 mt-2">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                      </div>
                      
                      <CardFooter className="p-6 pt-0 flex justify-between items-center border-t border-border/10 mt-auto">
                        <span className="text-xs text-primary font-medium flex items-center gap-1">
                          View details
                          <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </CardFooter>
                    </MotionCard>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Project Details Dialog Modal */}
      <Dialog isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <>
            {/* Banner preview in modal */}
            {renderMockup(selectedProject.previewType, selectedProject.gradient)}

            <DialogHeader>
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedProject.tags.map((tag, idx) => (
                  <Badge key={idx} variant="accent">
                    {tag}
                  </Badge>
                ))}
              </div>
              <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
              <DialogDescription>{selectedProject.description}</DialogDescription>
            </DialogHeader>

            <DialogContent className="space-y-6">
              <div>
                <h4 className="font-heading font-semibold text-lg text-foreground mb-2">About Project</h4>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {selectedProject.longDescription}
                </p>
              </div>

              <div>
                <h4 className="font-heading font-semibold text-lg text-foreground mb-2">Key Features</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground font-light">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </DialogContent>

            <DialogFooter>
              <div className="flex gap-3 w-full sm:w-auto">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-none"
                >
                  <Button variant="outline" className="w-full gap-2 cursor-pointer">
                    <FaGithub className="w-4 h-4" />
                    GitHub Repo
                  </Button>
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-none"
                >
                  <Button className="w-full gap-2 bg-gradient-to-r from-primary to-accent hover:brightness-110 text-white cursor-pointer shadow-md shadow-primary/10">
                    Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </DialogFooter>
          </>
        )}
      </Dialog>
    </section>
  )
}
