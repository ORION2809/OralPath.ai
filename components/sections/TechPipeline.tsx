"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pipelineSteps = [
  { title: "Histopathology Images", description: "High-resolution microscope field captures" },
  { title: "Image Preprocessing", description: "Normalization and quality enhancement" },
  { title: "Vision Encoder", description: "Deep feature extraction from tissue" },
  { title: "AI Classification", description: "Trained model predicts condition class" },
  { title: "Structured Results", description: "Scores, observations, and reports" },
];

export function TechPipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="research" className="relative py-32 sm:py-40 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/5 blur-[120px]" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary"
          >
            Technical Foundation
          </motion.p>
          <SectionHeading>
            How The AI
            <br />
            <span className="text-white/40">Processes Each Image</span>
          </SectionHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted"
          >
            Built for researchers, universities, and medical institutions who
            need credible, reproducible AI-assisted analysis.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-20 max-w-2xl"
        >
          <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-12 backdrop-blur-sm">
            {pipelineSteps.map((step, index) => (
              <div key={step.title} className="relative flex items-start gap-6">
                {index < pipelineSteps.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={isInView ? { height: "100%" } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    className="absolute left-[23px] top-[52px] w-px bg-gradient-to-b from-primary/50 to-primary/5"
                  />
                )}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 shadow-[0_0_20px_-5px_rgba(20,184,166,0.3)]">
                  <span className="text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                </div>
                <div className="py-2 pb-10">
                  <p className="text-lg font-medium text-white">{step.title}</p>
                  <p className="mt-1 text-sm text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
