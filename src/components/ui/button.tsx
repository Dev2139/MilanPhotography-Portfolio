import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-sans font-medium tracking-wider uppercase transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-sm",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        elegant: "bg-charcoal text-ivory border border-charcoal hover:bg-transparent hover:text-charcoal rounded-sm",
        "elegant-outline": "bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-ivory rounded-sm",
        gold: "bg-gold text-ivory hover:bg-gold-dark shadow-gold rounded-sm",
        "gold-outline": "bg-transparent text-gold border border-gold hover:bg-gold hover:text-ivory rounded-sm",
        hero: "bg-ivory/10 text-ivory border border-ivory/30 backdrop-blur-sm hover:bg-ivory hover:text-charcoal rounded-sm",
        "hero-primary": "bg-ivory text-charcoal hover:bg-ivory/90 shadow-elegant rounded-sm",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10 text-sm",
        xl: "h-16 px-12 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
