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
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading>
            Simple Workflow.
            <br />
            Powerful Analysis.
          </SectionHeading>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.div key={step.title} variants={itemVariants}>
              <GlassCard hover className="relative h-full p-8">
                <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-muted">{step.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
