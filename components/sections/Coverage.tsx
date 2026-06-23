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
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Coverage() {
  return (
    <section id="coverage" className="relative py-32 sm:py-40">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary"
          >
            Classification Coverage
          </motion.p>
          <SectionHeading>
            Supported
            <br />
            <span className="text-white/40">Classification Categories</span>
          </SectionHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted"
          >
            OralPath is trained to recognize a comprehensive range of oral
            histopathological conditions.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {classes.map((item, index) => (
            <motion.div key={item.name} variants={itemVariants}>
              <GlassCard hover className="h-full p-6">
                <div className="mb-5 aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-secondary/5 ring-1 ring-white/[0.06]">
                  <div className="flex h-full items-center justify-center">
                    <span className="text-4xl font-light text-white/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <h3 className="text-base font-semibold leading-snug text-white">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
