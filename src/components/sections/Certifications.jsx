import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Award, Code2, Cloud, Network, ShieldCheck, ExternalLink, FileText, X } from "lucide-react"
import { MotionCard } from "@/components/ui/card"

const certificationsData = [
  {
    title: "Full Stack Development",
    issuer: "Novitech",
    icon: Code2,
    color: "text-violet-500 bg-violet-500/10",
    gradient: "from-violet-500 to-purple-500",
    borderGlow: "hover:shadow-violet-500/20",
    description: "Hands-on certification covering full-stack software architecture, backend databases, and modern interactive UI design.",
    pdfUrl: "/certificates/A. LOKESH KUMAR.pdf",
  },
  {
    title: "Data Structures",
    issuer: "Infosys Springboard",
    icon: Network,
    color: "text-pink-500 bg-pink-500/10",
    gradient: "from-pink-500 to-rose-500",
    borderGlow: "hover:shadow-pink-500/20",
    description: "In-depth training on algorithm efficiency, complexity analysis, and advanced memory structures.",
    pdfUrl: "/certificates/lokesh-Practice Java.pdf",
  },
  {
    title: "Java with Beginner DSA",
    issuer: "CodeChef",
    icon: ShieldCheck,
    color: "text-emerald-500 bg-emerald-500/10",
    gradient: "from-emerald-500 to-teal-500",
    borderGlow: "hover:shadow-emerald-500/20",
    description: "Problem-solving and competitive programming training covering object-oriented Java programming and primary data systems.",
    pdfUrl: "/certificates/lokesh_076-Java with Beginner DSA.pdf",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    icon: Cloud,
    color: "text-cyan-500 bg-cyan-500/10",
    gradient: "from-cyan-500 to-blue-500",
    borderGlow: "hover:shadow-cyan-500/20",
    description: "Theoretical and practical training detailing cloud models, virtualization techniques, and distributed compute instances.",
    pdfUrl: "/certificates/Cloud Computing.pdf",
  },
]

export default function Certifications() {
  const [previewCert, setPreviewCert] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 90, damping: 14 },
    },
  }

  return (
    <>
      <section id="certifications" className="py-24 relative overflow-hidden bg-muted/10">
        {/* Background Glows */}
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/4 w-[250px] h-[250px] rounded-full bg-accent/5 blur-[80px] pointer-events-none -z-10" />

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
                <motion.div key={idx} variants={itemVariants} className="group relative">
                  {/* Animated gradient border */}
                  <div className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-500`} />

                  <div className={`relative glassmorphism rounded-xl overflow-hidden border border-border/50 group-hover:border-transparent flex flex-col h-full transition-all duration-300 ${cert.borderGlow} hover:shadow-xl`}>
                    {/* Top gradient bar */}
                    <div className={`h-1 bg-gradient-to-r ${cert.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

                    <div className="p-6 flex flex-col flex-1">
                      {/* Icon + Issuer */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-2xl ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest bg-muted/50 px-2 py-1 rounded-md">
                          {cert.issuer}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                        {cert.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-xs leading-relaxed font-light flex-1 mb-5">
                        {cert.description}
                      </p>

                      {/* Actions */}
                      <div className="flex items-center gap-2 mt-auto">
                        <button
                          onClick={() => setPreviewCert(cert)}
                          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r ${cert.gradient} text-white hover:shadow-lg hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 cursor-pointer`}
                        >
                          <FileText className="w-3.5 h-3.5" />
                          View
                        </button>
                        <a
                          href={cert.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground border border-border/60 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Open PDF
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* PDF Preview Modal */}
      <AnimatePresence>
        {previewCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={() => setPreviewCert(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-4xl bg-card rounded-2xl border border-border/50 shadow-2xl overflow-hidden flex flex-col"
              style={{ maxHeight: "90vh" }}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ${previewCert.color} flex items-center justify-center`}>
                    <previewCert.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-sm">
                      {previewCert.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{previewCert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={previewCert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r ${previewCert.gradient} text-white hover:shadow-lg transition-all duration-200`}
                  >
                    <ExternalLink className="w-3 h-3" />
                    Open
                  </a>
                  <button
                    onClick={() => setPreviewCert(null)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-muted transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>

              {/* PDF Embed */}
              <div className="flex-1 bg-muted/30" style={{ minHeight: "60vh" }}>
                <iframe
                  src={previewCert.pdfUrl}
                  title={`${previewCert.title} Certificate`}
                  className="w-full h-full border-0"
                  style={{ minHeight: "60vh" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
