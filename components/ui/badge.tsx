import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#11D4D8] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gradient-to-r from-[#065D7E] to-[#11D4D8] text-white shadow-md shadow-[#11D4D8]/20 hover:shadow-lg hover:shadow-[#11D4D8]/30",
        secondary:
          "border-[#11D4D8]/20 bg-[#F0FBFB] text-[#065D7E] hover:bg-[#e5f5f5]",
        destructive:
          "border-transparent bg-red-500 text-white shadow-md shadow-red-500/20 hover:bg-red-600",
        outline: "border-[#11D4D8]/20 text-[#065D7E] hover:bg-[#F0FBFB] hover:border-[#11D4D8]/40",
        success: "border-transparent bg-emerald-500 text-white shadow-md shadow-emerald-500/20 hover:bg-emerald-600",
        warning: "border-transparent bg-amber-500 text-white shadow-md shadow-amber-500/20 hover:bg-amber-600",
        gradient: "border-transparent bg-gradient-to-r from-[#065D7E] via-[#11D4D8] to-[#065D7E] text-white shadow-lg shadow-[#11D4D8]/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
