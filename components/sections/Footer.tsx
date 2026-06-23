"use client";

import { Container } from "@/components/ui/Container";
import { Microscope } from "lucide-react";

const navigation = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Coverage", href: "#coverage" },
  { label: "Research", href: "#research" },
  { label: "Beta Access", href: "#beta" },
];

const contact = [
  { label: "Email", href: "mailto:hello@oralpath.ai" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-3">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
                <Microscope className="h-5 w-5 text-primary" />
              </div>
              <span className="text-lg font-semibold text-white">OralPath</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted">
              AI-Powered Oral Histopathology Analysis
            </p>
          </div>

          {/* Center */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              {contact.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            © 2026 OralPath. Built for oral pathology research and education.
          </p>
        </div>
      </Container>
    </footer>
  );
}
