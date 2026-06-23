import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  centered?: boolean;
}

export function SectionHeading({
  children,
  className,
  as: Component = "h2",
  centered = true,
}: SectionHeadingProps) {
  return (
    <Component
      className={cn(
        "text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1]",
        centered && "mx-auto text-center",
        className
      )}
    >
      {children}
    </Component>
  );
}
