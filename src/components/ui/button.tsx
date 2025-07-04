import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-pink-500 text-white shadow-md hover:bg-pink-600 hover:shadow-lg dark:bg-pink-700 dark:hover:bg-pink-600 dark:hover:shadow-xl",
        destructive:
          "bg-red-500 text-white shadow-md hover:bg-red-600 hover:shadow-lg dark:bg-red-700 dark:hover:bg-red-600 dark:hover:shadow-xl",
        outline:
          "border border-gray-300 bg-white text-gray-900 shadow-sm hover:bg-gray-100 hover:shadow-md dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:shadow-lg",
        secondary:
          "bg-gray-200 text-gray-900 shadow-sm hover:bg-gray-300 hover:shadow-md dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:shadow-lg",
        ghost:
          "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white",
        link: "text-pink-500 underline-offset-4 hover:underline dark:text-pink-400",
      },
      size: {
        default: "h-10 px-5 py-2 rounded-md",
        sm: "h-8 px-4 py-1 rounded-md",
        lg: "h-12 px-6 py-3 text-lg rounded-lg",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)} // Ensures className is merged
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
