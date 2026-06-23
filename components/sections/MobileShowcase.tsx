"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sparkles, ScanLine, ListChecks } from "lucide-react";

const screens = [
  {
    title: "Capture",
    feature: "Real-time image quality detection.",
    icon: ScanLine,
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Analyze",
    feature: "AI-powered tissue classification.",
    icon: Sparkles,
    color: "from-secondary/20 to-secondary/5",
  },
  {
    title: "Results",
    feature: "Confidence scores, probability distributions, clinical observations.",
    icon: ListChecks,
    color: "from-primary/20 to-secondary/5",
  },
];

function PhoneMockup({
  screen,
  index,
}: {
  screen: (typeof screens)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="flex flex-col items-center"
    >
      <div className="relative w-[260px] overflow-hidden rounded-[2.5rem] border-[6px] border-white/10 bg-background p-3 shadow-2xl shadow-black/50">
        {/* Notch */}
        <div className="absolute left-1/2 top-3 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

        {/* Screen */}
        <div
          className={`relative aspect-[9/19] overflow-hidden rounded-[2rem] bg-gradient-to-b ${screen.color} p-5 pt-10`}
        >
          {/* Status bar */}
          <div className="flex items-center justify-between text-[10px] text-white/80">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="h-2.5 w-2.5 rounded-full bg-white/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/80" />
              <div className="h-2.5 w-3.5 rounded-sm bg-white/80" />
            </div>
          </div>

          {/* App content */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
                <screen.icon className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-white">
                {screen.title}
              </span>
            </div>

            {index === 0 && (
              <div className="aspect-square rounded-2xl border-2 border-dashed border-white/20 bg-white/5 p-4">
                <div className="flex h-full items-center justify-center">
                  <ScanLine className="h-12 w-12 text-primary/60" />
                </div>
                <p className="mt-2 text-center text-xs text-white/60">
                  Align tissue in frame
                </p>
              </div>
            )}

            {index === 1 && (
              <div className="space-y-3">
                <div className="aspect-square rounded-2xl bg-white/5 p-4">
                  <div className="h-full w-full animate-pulse rounded-xl bg-primary/10" />
                </div>
                <div className="h-2 w-3/4 rounded-full bg-white/10" />
                <div className="h-2 w-1/2 rounded-full bg-white/10" />
              </div>
            )}

            {index === 2 && (
              <div className="space-y-3">
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-xs text-white/60">Primary</p>
                  <p className="text-lg font-semibold text-primary">
                    OSCC (Moderate)
                  </p>
                  <p className="text-xs text-white/60">Confidence 94.2%</p>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full rounded-full bg-white/10">
                    <div className="h-full w-[94%] rounded-full bg-primary" />
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/10">
                    <div className="h-full w-[5%] rounded-full bg-secondary" />
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-xs text-white/60">Observations</p>
                  <p className="text-xs text-white/80">
                    Keratin pearls, nuclear pleomorphism
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 max-w-[260px] text-center">
        <h3 className="text-lg font-semibold text-white">{screen.title}</h3>
        <p className="mt-2 text-sm text-muted">{screen.feature}</p>
      </div>
    </motion.div>
  );
}

export function MobileShowcase() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading>The OralPath Experience</SectionHeading>
          <p className="mt-6 text-lg text-muted">
            A focused mobile interface designed for the microscope bench. Capture,
            analyze, and review results in one continuous flow.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-12 lg:flex-row lg:items-start">
          {screens.map((screen, index) => (
            <PhoneMockup key={screen.title} screen={screen} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
