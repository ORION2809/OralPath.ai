"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Clock, Microscope, Brain, FileText, Users, Stethoscope, ArrowRight } from "lucide-react";

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
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Problem() {
  return (
    <section className="relative py-32 sm:py-40 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[100px]" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary"
          >
            The Challenge
          </motion.p>
          <SectionHeading>
            Hours of Review.
            <br />
            <span className="text-white/40">Reduced to Seconds.</span>
          </SectionHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted"
          >
            Traditional oral histopathology workflows demand significant time
            and expertise. OralPath compresses that process into a guided,
            AI-assisted experience.
          </motion.p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <GlassCard className="h-full p-8 sm:p-10">
              <div className="mb-8 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-white/50">
                  Traditional Workflow
                </h3>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <div className="space-y-3">
                {traditionalSteps.map((step, index) => (
                  <motion.div
                    key={step.label}
                    variants={itemVariants}
                    className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:border-white/[0.1] hover:bg-white/[0.04]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.06] transition-colors group-hover:bg-white/[0.1]">
                      <step.icon className="h-5 w-5 text-muted" />
                    </div>
                    <span className="text-white/80">{step.label}</span>
                    <span className="ml-auto text-sm text-white/25">
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
            <GlassCard glow="primary" className="h-full p-8 sm:p-10">
              <div className="mb-8 flex items-center gap-3">
                <div className="h-px flex-1 bg-primary/20" />
                <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-primary">
                  OralPath Workflow
                </h3>
                <div className="h-px flex-1 bg-primary/20" />
              </div>
              <div className="space-y-3">
                {oralpathSteps.map((step) => (
                  <motion.div
                    key={step.label}
                    variants={itemVariants}
                    className="group flex items-center gap-4 rounded-xl border border-primary/10 bg-primary/[0.03] p-4 transition-colors hover:border-primary/20 hover:bg-primary/[0.06]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-white">{step.label}</span>
                    <ArrowRight className="ml-auto h-4 w-4 text-primary/40 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
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
