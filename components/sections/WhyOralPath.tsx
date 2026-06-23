"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Zap, Smartphone, Eye } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast",
    description: "AI-assisted analysis in under sixty seconds.",
  },
  {
    icon: Smartphone,
    title: "Accessible",
    description:
      "Works directly from a smartphone connected to a microscope.",
  },
  {
    icon: Eye,
    title: "Explainable",
    description:
      "Confidence scores and pathological features remain visible.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function WhyOralPath() {
  return (
    <section className="relative py-32 sm:py-40 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary"
          >
            Why OralPath
          </motion.p>
          <SectionHeading>
            Designed For
            <br />
            <span className="text-white/40">Modern Oral Pathology</span>
          </SectionHeading>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid gap-6 md:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <GlassCard hover glow={index === 0 ? "primary" : index === 1 ? "secondary" : "none"} className="h-full p-8 sm:p-10 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-4 text-muted leading-relaxed">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
