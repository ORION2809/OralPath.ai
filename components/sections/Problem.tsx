"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Clock, Microscope, Brain, FileText, Users, Stethoscope } from "lucide-react";

const traditionalSteps = [
  { icon: Microscope, label: "Microscope Examination" },
  { icon: Stethoscope, label: "Manual Observation" },
  { icon: Brain, label: "Differential Diagnosis" },
  { icon: FileText, label: "Reference Literature" },
  { icon: Users, label: "Consultation" },
  { icon: Clock, label: "Final Assessment" },
];

const oralpathSteps = [
  { icon: Microscope, label: "Capture Image" },
  { icon: Brain, label: "AI Analysis" },
  { icon: FileText, label: "Classification" },
  { icon: Stethoscope, label: "Probability Scores" },
  { icon: Users, label: "Observations" },
  { icon: Clock, label: "Report Generation" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Problem() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading className="text-4xl sm:text-5xl">
            Hours of Review.
            <br />
            Reduced to Seconds.
          </SectionHeading>
          <p className="mt-6 text-lg text-muted">
            Traditional oral histopathology workflows demand significant time
            and expertise. OralPath compresses that process into a guided,
            AI-assisted experience.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <GlassCard className="h-full p-8">
              <h3 className="text-xl font-medium text-white/70">
                Traditional Workflow
              </h3>
              <div className="mt-8 space-y-4">
                {traditionalSteps.map((step, index) => (
                  <motion.div
                    key={step.label}
                    variants={itemVariants}
                    className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.06]">
                      <step.icon className="h-5 w-5 text-muted" />
                    </div>
                    <span className="text-white/80">{step.label}</span>
                    <span className="ml-auto text-sm text-white/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <GlassCard className="h-full border-primary/20 p-8">
              <h3 className="text-xl font-medium text-primary">
                OralPath Workflow
              </h3>
              <div className="mt-8 space-y-4">
                {oralpathSteps.map((step, index) => (
                  <motion.div
                    key={step.label}
                    variants={itemVariants}
                    className="flex items-center gap-4 rounded-xl border border-primary/10 bg-primary/[0.04] p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-white">{step.label}</span>
                    <span className="ml-auto text-sm text-primary/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
