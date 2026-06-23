"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const classes = [
  {
    name: "Normal Oral Mucosa",
    description: "Healthy stratified squamous epithelium with no dysplastic changes.",
  },
  {
    name: "Oral Submucous Fibrosis (OSMF)",
    description: "Chronic progressive disease with juxta-epithelial fibrosis.",
  },
  {
    name: "Well Differentiated OSCC",
    description: "Malignant epithelial tumor with prominent keratinization.",
  },
  {
    name: "Moderately Differentiated OSCC",
    description: "Squamous cell carcinoma with moderate nuclear pleomorphism.",
  },
  {
    name: "Poorly Differentiated OSCC",
    description: "High-grade malignancy with minimal keratin formation.",
  },
  {
    name: "Verrucous Carcinoma",
    description: "Low-grade variant of squamous cell carcinoma with exophytic growth.",
  },
  {
    name: "Basaloid Squamous Cell Carcinoma",
    description: "Aggressive variant with basaloid and squamous components.",
  },
  {
    name: "Salivary Gland Tumors",
    description: "Benign and malignant neoplasms arising from salivary tissue.",
  },
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

export function Coverage() {
  return (
    <section id="coverage" className="relative py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading>Supported Classification Categories</SectionHeading>
          <p className="mt-6 text-lg text-muted">
            OralPath is trained to recognize a comprehensive range of oral
            histopathological conditions.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {classes.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <GlassCard hover className="h-full p-6">
                <div className="mb-4 aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
                  <div className="flex h-full items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-white/5" />
                  </div>
                </div>
                <h3 className="text-base font-semibold text-white">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
