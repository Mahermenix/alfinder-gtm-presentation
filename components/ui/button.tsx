import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#11D4D8] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-[#065D7E] to-[#11D4D8] text-white shadow-lg shadow-[#11D4D8]/30 hover:shadow-xl hover:shadow-[#11D4D8]/40 hover:scale-[1.02] active:scale-[0.98]",
        destructive: "bg-red-500 text-white shadow-lg shadow-red-500/30 hover:bg-red-600 hover:shadow-xl hover:shadow-red-500/40",
        outline: "border-2 border-[#11D4D8]/30 text-[#065D7E] hover:bg-[#F0FBFB] hover:border-[#11D4D8]/50",
        secondary: "bg-[#F0FBFB] text-[#065D7E] border border-[#11D4D8]/20 shadow-md shadow-[#11D4D8]/10 hover:bg-[#e5f5f5] hover:shadow-lg hover:shadow-[#11D4D8]/20",
        ghost: "text-[#065D7E] hover:bg-[#F0FBFB]",
        link: "text-[#065D7E] underline-offset-4 hover:underline hover:text-[#11D4D8]",
        gradient: "bg-gradient-to-r from-[#065D7E] via-[#11D4D8] to-[#065D7E] text-white shadow-xl shadow-[#11D4D8]/30 hover:shadow-2xl hover:shadow-[#11D4D8]/40 hover:scale-[1.02]",
      },
      size: {
        default: "h-10 px-5 py-2.5",
        sm: "h-9 rounded-lg px-4",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
