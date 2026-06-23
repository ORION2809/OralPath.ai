import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "none" | "primary" | "secondary";
}

export function GlassCard({
  children,
  className,
  hover = false,
  glow = "none",
}: GlassCardProps) {
  const glowStyles = {
    none: "",
    primary: "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_0_40px_-10px_rgba(20,184,166,0.15)]",
    secondary: "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_0_40px_-10px_rgba(96,165,250,0.15)]",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/[0.08] before:to-transparent before:opacity-0",
        hover && "transition-all duration-500 hover:border-white/[0.14] hover:bg-white/[0.06] hover:before:opacity-100 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]",
        glowStyles[glow],
        className
      )}
    >
      {children}
    </div>
  );
}
