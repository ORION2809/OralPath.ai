"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Camera, Brain, FileCheck } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Capture",
    description:
      "Capture a microscope field directly using your smartphone connected to the microscope.",
  },
  {
    icon: Brain,
    title: "Analyze",
    description:
      "Advanced vision models analyze tissue morphology and cellular patterns in real time.",
  },
  {
    icon: FileCheck,
    title: "Results",
    description:
      "Receive classifications, confidence scores and pathological observations instantly.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 sm:py-40">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary"
          >
            How It Works
          </motion.p>
          <SectionHeading>
            Simple Workflow.
            <br />
            <span className="text-white/40">Powerful Analysis.</span>
          </SectionHeading>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid gap-6 md:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.div key={step.title} variants={itemVariants}>
              <GlassCard hover glow={index === 1 ? "secondary" : "none"} className="relative h-full p-8 sm:p-10">
                <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white shadow-lg shadow-primary/20">
                  {index + 1}
                </div>
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-muted leading-relaxed">{step.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
