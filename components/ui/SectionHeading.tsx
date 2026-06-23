import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  children,
  className,
  as: Component = "h2",
}: SectionHeadingProps) {
  return (
    <Component
      className={cn(
        "text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl",
        className
      )}
    >
      {children}
    </Component>
  );
}
