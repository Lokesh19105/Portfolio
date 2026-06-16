import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const Dialog = ({ isOpen, onClose, children }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-2xl glassmorphism max-h-[85vh] flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
            
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

const DialogHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-1.5 p-6 border-b border-border/50", className)} {...props} />
)
DialogHeader.displayName = "DialogHeader"

const DialogTitle = ({ className, ...props }) => (
  <h2 className={cn("text-2xl font-semibold font-heading tracking-tight text-foreground", className)} {...props} />
)
DialogTitle.displayName = "DialogTitle"

const DialogDescription = ({ className, ...props }) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
)
DialogDescription.displayName = "DialogDescription"

const DialogContent = ({ className, ...props }) => (
  <div className={cn("p-6 overflow-y-auto flex-1", className)} {...props} />
)
DialogContent.displayName = "DialogContent"

const DialogFooter = ({ className, ...props }) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-6 border-t border-border/50 bg-muted/20", className)} {...props} />
)
DialogFooter.displayName = "DialogFooter"

export { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogContent, DialogFooter }
