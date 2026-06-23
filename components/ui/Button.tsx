import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
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
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer";

  const variants = {
    primary:
      "relative overflow-hidden bg-primary text-white shadow-[0_0_0_1px_rgba(20,184,166,0.3),0_4px_20px_rgba(20,184,166,0.25)] hover:shadow-[0_0_0_1px_rgba(20,184,166,0.5),0_8px_40px_rgba(20,184,166,0.35)] hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-secondary text-white shadow-[0_0_0_1px_rgba(96,165,250,0.3),0_4px_20px_rgba(96,165,250,0.25)] hover:shadow-[0_0_0_1px_rgba(96,165,250,0.5),0_8px_40px_rgba(96,165,250,0.35)] hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border border-white/[0.12] bg-white/[0.03] text-white backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/[0.22] hover:-translate-y-0.5 active:translate-y-0",
    ghost:
      "text-white/70 hover:text-white hover:bg-white/[0.05]",
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
