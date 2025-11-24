import * as React from "react"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef(({ className, value, indicatorColor = "bg-primary", ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
    {...props}
  >
    <div
      className={cn("h-full w-full flex-1 transition-all", indicatorColor)}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </div>
))
Progress.displayName = "Progress"

export { Progress }