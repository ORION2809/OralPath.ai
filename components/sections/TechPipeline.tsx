"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pipelineSteps = [
  "Histopathology Images",
  "Image Preprocessing",
  "Vision Encoder",
  "AI Classification",
  "Structured Results",
];

export function TechPipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="research" className="relative py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading>Technical Foundation</SectionHeading>
          <p className="mt-6 text-lg text-muted">
            Built for researchers, universities, and medical institutions who
            need credible, reproducible AI-assisted analysis.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 max-w-2xl"
        >
          <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-12">
            {pipelineSteps.map((step, index) => (
              <div key={step} className="relative flex items-center gap-6">
                {index < pipelineSteps.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={isInView ? { height: "100%" } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="absolute left-[19px] top-[38px] w-px bg-gradient-to-b from-primary/50 to-primary/10"
                  />
                )}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <span className="text-sm font-medium text-primary">
                    {index + 1}
                  </span>
                </div>
                <div className="py-4">
                  <p className="text-lg font-medium text-white">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
