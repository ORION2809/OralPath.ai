import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  children,
  variant = "primary",
  className,
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-hover hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]",
    secondary:
      "bg-secondary text-white hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]",
    outline:
      "border border-white/[0.12] bg-transparent text-white hover:bg-white/[0.06] hover:border-white/[0.2]",
  };

  const combined = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={combined}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combined}>
      {children}
    </button>
  );
}
