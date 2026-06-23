"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function Beta() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    institution: "",
    role: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="beta" className="relative py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading>
            Help Shape The Future Of Oral Pathology AI
          </SectionHeading>
          <p className="mt-6 text-lg text-muted">
            Join the beta program and be among the first to use OralPath in your
            research or clinical workflow.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-xl"
        >
          <GlassCard className="p-8 sm:p-10">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15">
                  <svg
                    className="h-7 w-7 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Application Received
                </h3>
                <p className="mt-2 text-muted">
                  Thank you for your interest. We will be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/30 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                    placeholder="Dr. Jane Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/30 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                    placeholder="jane@university.edu"
                  />
                </div>
                <div>
                  <label
                    htmlFor="institution"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Institution
                  </label>
                  <input
                    id="institution"
                    type="text"
                    required
                    value={formState.institution}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        institution: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/30 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                    placeholder="University Medical Center"
                  />
                </div>
                <div>
                  <label
                    htmlFor="role"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Role
                  </label>
                  <select
                    id="role"
                    required
                    value={formState.role}
                    onChange={(e) =>
                      setFormState({ ...formState, role: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-white focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 [&>option]:bg-background"
                  >
                    <option value="" disabled>
                      Select your role
                    </option>
                    <option value="pathologist">Oral Pathologist</option>
                    <option value="dentist">Dentist</option>
                    <option value="researcher">Researcher</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <Button type="submit" className="flex-1">
                    Join Beta
                  </Button>
                  <Button type="button" variant="outline" className="flex-1">
                    Request Early Access
                  </Button>
                </div>
              </form>
            )}
          </GlassCard>
        </motion.div>
      </Container>
    </section>
  );
}
