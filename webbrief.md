# OralPath Website Specification

## Project Overview

OralPath is an AI-powered oral histopathology assistant that enables oral pathologists, dental professionals, researchers, and postgraduate students to analyze microscope slide images and receive AI-assisted classifications within seconds.

The website serves four primary goals:

1. Explain what OralPath does.
2. Demonstrate the workflow visually.
3. Build trust with medical professionals and researchers.
4. Convert visitors into beta users, testers, collaborators, and future customers.

The overall visual experience should feel comparable to:

* Apple Product Pages
* OpenAI Product Pages
* Arc Browser
* Linear
* Vercel

The design language should be:

* Minimal
* Premium
* Scientific
* Modern
* Professional

---

# Design System

## Theme

Dark mode only.

### Colors

```css
Background: #050505

Primary Accent: #14B8A6

Secondary Accent: #60A5FA

Primary Text: #FFFFFF

Secondary Text: #A1A1AA

Borders: rgba(255,255,255,0.08)
```

---

# Hero Section

## Layout

The hero section occupies approximately 400–500vh of scroll space.

Instead of a traditional hero banner, the hero tells a visual story.

This section is the centerpiece of the entire website.

---

## Scroll Story

### Scene 1 — Histopathology Slide

Visual:

A realistic oral histopathology slide appears on screen.

Purpose:

Introduce the source of data.

Text:

```text
Oral Histopathology.
Reimagined with AI.
```

---

### Scene 2 — Microscope

Visual:

The slide moves beneath a pathology microscope.

The microscope becomes the focal point.

Purpose:

Show how OralPath starts from a microscope field.

Text:

```text
Capture any microscope field.
In seconds.
```

---

### Scene 3 — Lens Dive

Visual:

The camera enters the microscope lens.

The user sees microscopic oral tissue structures.

Purpose:

Demonstrate deep tissue analysis.

Text:

```text
Analyze microscopic tissue architecture.
Not just images.
```

---

### Scene 4 — AI Classification

Visual:

Microscopic tissue transitions into the OralPath mobile interface.

A smartphone appears displaying AI-generated results.

Purpose:

Show the final output.

Text:

```text
From slide to diagnosis support.
In under a minute.
```

---

### Hero End State

Large statement:

```text
The AI Assistant Built
For Oral Pathology.
```

Buttons:

```text
Join Beta

Watch Demo
```

---

# Section 2 — The Problem

## Headline

```text
Hours of Review.
Reduced to Seconds.
```

## Layout

Two-column comparison layout.

### Traditional Workflow

```text
Microscope Examination

Manual Observation

Differential Diagnosis

Reference Literature

Consultation

Final Assessment
```

### OralPath Workflow

```text
Capture Image

AI Analysis

Classification

Probability Scores

Observations

Report Generation
```

---

# Section 3 — How OralPath Works

## Headline

```text
Simple Workflow.
Powerful Analysis.
```

## Step 1 — Capture

Icon:
Microscope Camera

Text:

```text
Capture a microscope field directly using your smartphone.
```

---

## Step 2 — Analyze

Icon:
AI Network

Text:

```text
Advanced vision models analyze tissue morphology and cellular patterns.
```

---

## Step 3 — Results

Icon:
Medical Report

Text:

```text
Receive classifications, confidence scores and pathological observations.
```

---

# Section 4 — Mobile Application Showcase

## Purpose

Demonstrate the actual product experience.

Display realistic phone mockups based on the OralPath mobile UI.

### Screen 1

Capture Screen

Feature:

```text
Real-time image quality detection.
```

### Screen 2

Analysis Screen

Feature:

```text
AI-powered tissue classification.
```

### Screen 3

Result Screen

Features:

```text
Confidence Scores

Probability Distributions

Clinical Observations

Key Features Identification
```

Phone should animate while scrolling.

---

# Section 5 — Classification Coverage

## Headline

```text
Supported Classification Categories
```

## Grid Layout

Display all supported classes.

### Cards

```text
Normal Oral Mucosa
```

```text
Oral Submucous Fibrosis (OSMF)
```

```text
Well Differentiated OSCC
```

```text
Moderately Differentiated OSCC
```

```text
Poorly Differentiated OSCC
```

```text
Verrucous Carcinoma
```

```text
Basaloid Squamous Cell Carcinoma
```

```text
Salivary Gland Tumors
```

Each card should include:

* Representative tissue image
* Class name
* Short description

---

# Section 6 — Why OralPath

## Headline

```text
Designed For Modern Oral Pathology
```

### Feature 1

Fast

```text
AI-assisted analysis in under sixty seconds.
```

### Feature 2

Accessible

```text
Works directly from a smartphone connected to a microscope.
```

### Feature 3

Explainable

```text
Confidence scores and pathological features remain visible.
```

---

# Section 7 — Technical Foundation

## Audience

Researchers
Universities
Medical Institutions

## Animated Pipeline

```text
Histopathology Images
        ↓
Image Preprocessing
        ↓
Vision Encoder
        ↓
AI Classification
        ↓
Structured Results
```

Purpose:

Provide credibility without overwhelming visitors with technical complexity.

---

# Section 8 — Research Disclaimer

## Card Section

```text
OralPath is an AI-assisted research tool.

It is designed to support oral pathology workflows, education and research.

It does not replace professional medical judgment, clinical diagnosis or patient management decisions.
```

---

# Section 9 — Beta Program

## Headline

```text
Help Shape The Future Of Oral Pathology AI
```

## Form Fields

* Name
* Email
* Institution
* Role

Buttons:

```text
Join Beta
```

```text
Request Early Access
```

---

# Footer

## Left Column

Logo

```text
OralPath
```

Tagline:

```text
AI-Powered Oral Histopathology Analysis
```

---

## Center Column

Navigation

```text
Features

How It Works

Coverage

Research

Beta Access
```

---

## Right Column

Contact

```text
Email

LinkedIn

GitHub
```

---

## Footer Note

```text
© 2026 OralPath.

Built for oral pathology research and education.
```

---

# Technical Requirements

## Stack

* Next.js 15
* TypeScript
* Tailwind CSS
* Framer Motion
* GSAP ScrollTrigger
* Lenis Smooth Scroll

## Performance

* Lighthouse Score > 95
* Fully Responsive
* Mobile First
* SEO Optimized

## Animation Quality

Target animation quality similar to:

* Apple Product Pages
* OpenAI Product Launch Pages
* Linear
* Arc Browser

Smooth, premium, cinematic and professional.
