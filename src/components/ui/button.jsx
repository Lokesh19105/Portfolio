import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer active:scale-98",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/95 shadow-md shadow-primary/10",
        destructive:
          "bg-red-500 text-white hover:bg-red-600/90 shadow-sm shadow-red-500/10",
        outline:
          "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        glass: "glassmorphism text-foreground hover:bg-white/20 dark:hover:bg-zinc-800/40 border-white/20 dark:border-white/10 shadow-sm"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

const MotionButton = React.forwardRef(({ className, variant, size, whileHover = { scale: 1.03 }, whileTap = { scale: 0.97 }, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      whileHover={whileHover}
      whileTap={whileTap}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
})
MotionButton.displayName = "MotionButton"

export { Button, MotionButton, buttonVariants }
