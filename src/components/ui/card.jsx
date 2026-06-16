import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-none tracking-tight font-heading text-foreground",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

// Motion card version for smooth interactive scroll / hover animations
const MotionCard = React.forwardRef(({ className, whileHover = { y: -5, transition: { duration: 0.2 } }, ...props }, ref) => (
  <motion.div
    ref={ref}
    whileHover={whileHover}
    className={cn(
      "rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/5",
      className
    )}
    {...props}
  />
))
MotionCard.displayName = "MotionCard"

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, MotionCard }
