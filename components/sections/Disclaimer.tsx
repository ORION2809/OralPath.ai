"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { ShieldAlert } from "lucide-react";

export function Disclaimer() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <GlassCard glow="secondary" className="p-8 text-center sm:p-12">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 ring-1 ring-secondary/20">
              <ShieldAlert className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="text-2xl font-semibold text-white">
              Research & Education Tool
            </h3>
            <p className="mt-4 leading-relaxed text-muted">
              OralPath is an AI-assisted research tool. It is designed to support
              oral pathology workflows, education and research. It does not
              replace professional medical judgment, clinical diagnosis or
              patient management decisions.
            </p>
          </GlassCard>
        </motion.div>
      </Container>
    </section>
  );
}
