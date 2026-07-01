<div align="center">

# OralPath

**AI-Powered Oral Histopathology Analysis**

[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-14B8A6)](LICENSE)

[Live Demo](https://orion2809.github.io/OralPath.ai/) · [Report Bug](https://github.com/ORION2809/OralPath.ai/issues) · [Request Feature](https://github.com/ORION2809/OralPath.ai/issues)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots & Demo](#screenshots--demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Performance](#performance)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## Overview

**OralPath** is an AI-powered oral histopathology assistant designed for oral pathologists, dental professionals, researchers, and postgraduate students. It transforms the traditional microscope-to-diagnosis workflow by enabling users to capture microscope field images with a smartphone and receive AI-assisted classifications, confidence scores, and pathological observations within seconds.

This repository contains the premium marketing website for OralPath, built with cinematic scroll-driven animations, a dark scientific aesthetic, and a mobile-first responsive design inspired by industry leaders like Apple, OpenAI, Linear, and Vercel.

> **Mission:** To accelerate oral pathology workflows, education, and research through accessible, explainable AI.

---

## Features

### Cinematic Scroll Experience
- **192-frame WebP scroll animation** powered by GSAP ScrollTrigger
- Four immersive scenes: Histopathology Slide → Microscope → Lens Dive → AI Classification
- Lenis smooth scrolling with reduced-motion fallback for accessibility
- Real-time loading progress indicator with Framer Motion

### Premium Design Language
- Dark-mode-only interface with scientific, minimal aesthetics
- Custom noise texture overlay and radial vignettes for depth
- Glassmorphism cards with subtle borders and hover states
- Tailor-made scrollbar and selection colors

### Comprehensive Sections
1. **Hero** — Scroll-driven narrative introducing OralPath's purpose
2. **The Problem** — Side-by-side comparison of traditional vs. AI-assisted workflows
3. **How It Works** — Three-step visual guide: Capture → Analyze → Results
4. **Mobile Showcase** — Animated phone mockups of the actual app experience
5. **Coverage** — Grid of 8 supported oral pathology classification categories
6. **Why OralPath** — Feature highlights: Fast, Accessible, Explainable
7. **Tech Pipeline** — Animated research credibility diagram
8. **Disclaimer** — Clear research-tool positioning for medical trust
9. **Beta Program** — Lead capture form for early access

### Supported Classifications
| Category | Description |
|----------|-------------|
| Normal Oral Mucosa | Healthy tissue baseline |
| Oral Submucous Fibrosis (OSMF) | Pre-cancerous fibrotic condition |
| Well Differentiated OSCC | Early-stage oral squamous cell carcinoma |
| Moderately Differentiated OSCC | Intermediate-grade malignancy |
| Poorly Differentiated OSCC | Aggressive high-grade malignancy |
| Verrucous Carcinoma | Low-grade exophytic variant |
| Basaloid Squamous Cell Carcinoma | Rare aggressive variant |
| Salivary Gland Tumors | Diverse glandular neoplasms |

### Accessibility & Performance
- Fully responsive from mobile to 4K desktop
- `prefers-reduced-motion` support throughout
- Focus-visible outlines and keyboard navigation
- SEO-optimized metadata and Open Graph tags
- Lighthouse score target > 95

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Animation | [GSAP 3](https://greensock.com/gsap/) + [ScrollTrigger](https://greensock.com/scroll/) |
| Motion | [Framer Motion](https://www.framer.com/motion/) |
| Scroll | [Lenis](https://github.com/darkroomengineering/lenis) |
| Icons | [Lucide React](https://lucide.dev/) |
| Fonts | Figtree + Noto Sans (Google Fonts / next/font) |

---

## Screenshots & Demo

### Scroll-Driven Hero Animation
The centerpiece of the site is a 500vh scroll track that scrubs through 192 high-resolution WebP frames, creating a seamless narrative from a histopathology slide to an AI-powered mobile diagnosis.

### Mobile-First Responsive Design
Every section adapts gracefully from compact smartphone screens to ultrawide monitors, with typography scales, spacing, and interaction patterns optimized per breakpoint.

> **View the live demo:** [orion2809.github.io/OralPath.ai](https://orion2809.github.io/OralPath.ai/)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.x or later
- [npm](https://www.npmjs.com/) 9.x or later (or pnpm / yarn / bun)

### Installation

```bash
# Clone the repository
git clone https://github.com/ORION2809/OralPath.ai.git
cd OralPath.ai

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note:** The project is configured with `basePath` and `assetPrefix` for GitHub Pages deployment. For local development, you may need to adjust `next.config.ts` if assets do not load correctly.

### Build

```bash
# Create an optimized static export
npm run build
```

The static site will be generated in the `dist/` directory, ready for deployment to GitHub Pages, Vercel, Netlify, or any static host.

---

## Project Structure

```
oralPath_web/
├── app/                          # Next.js App Router
│   ├── favicon.ico
│   ├── globals.css               # Tailwind imports + custom theme
│   ├── layout.tsx                # Root layout with fonts & metadata
│   └── page.tsx                  # Landing page composition
├── components/
│   ├── providers/
│   │   └── SmoothScroll.tsx      # Lenis + GSAP ScrollTrigger integration
│   ├── sections/                 # Page sections
│   │   ├── Hero.tsx              # Scroll-driven canvas animation
│   │   ├── Problem.tsx           # Workflow comparison
│   │   ├── HowItWorks.tsx        # 3-step process
│   │   ├── MobileShowcase.tsx    # Phone mockups
│   │   ├── Coverage.tsx          # Classification cards
│   │   ├── WhyOralPath.tsx       # Feature highlights
│   │   ├── TechPipeline.tsx      # Animated pipeline diagram
│   │   ├── Disclaimer.tsx        # Research disclaimer
│   │   ├── Beta.tsx              # Beta signup CTA
│   │   └── Footer.tsx            # Site footer
│   └── ui/                       # Reusable UI primitives
│       ├── Button.tsx
│       ├── Container.tsx
│       ├── GlassCard.tsx
│       ├── Navbar.tsx
│       └── SectionHeading.tsx
├── lib/
│   └── utils.ts                  # cn() helper (clsx + tailwind-merge)
├── public/
│   └── scroll-frames/            # 192 WebP frames for hero animation
│       ├── frame_0001.webp
│       ├── frame_0002.webp
│       └── ...
├── next.config.ts                # Next.js config (static export)
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#050505` | Page background |
| Primary | `#14B8A6` | CTAs, accents, highlights |
| Primary Hover | `#0D9488` | Interactive hover states |
| Secondary | `#60A5FA` | Supporting accents |
| Text Primary | `#FFFFFF` | Headings, body text |
| Text Secondary | `#A1A1AA` | Captions, metadata |
| Border | `rgba(255,255,255,0.08)` | Dividers, card borders |
| Card | `rgba(255,255,255,0.03)` | Card backgrounds |
| Card Hover | `rgba(255,255,255,0.06)` | Card hover backgrounds |

### Typography
- **Headings:** Figtree (300–700)
- **Body:** Noto Sans (300–700)

### Animation Principles
- Smooth, premium, cinematic motion
- Scroll-scrubbed timelines for narrative control
- Reduced-motion fallbacks for accessibility
- Subtle scale, opacity, and translate transforms

---

## Performance

- **Static Export:** Pre-rendered HTML for instant load times
- **Image Optimization:** WebP format with unoptimized fallback for static hosting
- **Font Optimization:** next/font for zero-layout-shift loading
- **Lazy Loading:** Frames preload progressively; sections animate on scroll
- **Bundle Analysis:** Tree-shaken dependencies via Next.js 16

---

## Roadmap

- [ ] Connect beta form to backend / email service
- [ ] Add multi-language support (i18n)
- [ ] Integrate actual AI inference demo (WASM or API)
- [ ] Add blog / research publication section
- [ ] Dark/light theme toggle
- [ ] Analytics and conversion tracking

See the [open issues](https://github.com/ORION2809/OralPath.ai/issues) for a full list of proposed features and known issues.

---

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to follow the existing code style and run linting before submitting:

```bash
npm run lint
```

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Contact

**Project Link:** [https://github.com/ORION2809/OralPath.ai](https://github.com/ORION2809/OralPath.ai)

For inquiries, collaborations, or research partnerships, please reach out via:
- **Email:** [your-email@example.com](mailto:your-email@example.com)
- **LinkedIn:** [Your Profile](https://linkedin.com/in/yourprofile)

---

## Acknowledgments

- [Next.js](https://nextjs.org/) for the incredible React framework
- [GreenSock](https://greensock.com/) for industry-standard animation tools
- [Tailwind Labs](https://tailwindcss.com/) for utility-first CSS
- [Framer](https://www.framer.com/) for declarative React animations
- The open-source medical imaging and pathology communities for continuous innovation

---

<div align="center">

**Built for oral pathology research and education.**

⭐ Star this repo if you find it useful!

</div>
