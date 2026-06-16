import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const TabsContext = React.createContext(null)

const Tabs = ({ value, onValueChange, className, children }) => {
  return (
    <TabsContext.Provider value={{ activeValue: value, setActiveValue: onValueChange }}>
      <div className={cn("flex flex-col gap-4", className)}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

const TabsList = ({ className, children }) => {
  return (
    <div className={cn("inline-flex h-12 items-center justify-center rounded-xl bg-muted/50 p-1 text-muted-foreground glassmorphism border-border/50 self-center", className)}>
      {children}
    </div>
  )
}

const TabsTrigger = ({ value, className, children }) => {
  const { activeValue, setActiveValue } = React.useContext(TabsContext)
  const isActive = activeValue === value

  return (
    <button
      onClick={() => setActiveValue(value)}
      className={cn(
        "relative inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer text-muted-foreground hover:text-foreground z-10",
        isActive && "text-foreground",
        className
      )}
    >
      {isActive && (
        <motion.span
          layoutId="active-tab"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
          className="absolute inset-0 rounded-lg bg-card shadow-sm border border-border/20 -z-10"
        />
      )}
      {children}
    </button>
  )
}

const TabsContent = ({ value, className, children }) => {
  const { activeValue } = React.useContext(TabsContext)
  if (activeValue !== value) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className={cn("mt-2 outline-none", className)}
    >
      {children}
    </motion.div>
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
