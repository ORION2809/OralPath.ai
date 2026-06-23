"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 192;
const BASE_PATH = "/OralPath.ai";
const FRAME_PATH = `${BASE_PATH}/scroll-frames/frame_%04d.webp`;

function getFrameUrl(index: number) {
  return FRAME_PATH.replace("%04d", String(index + 1).padStart(4, "0"));
}

const scenes = [
  {
    start: 0,
    end: 0.22,
    eyebrow: "01 / Introduction",
    title: "Oral Histopathology.",
    subtitle: "Reimagined with AI.",
  },
  {
    start: 0.22,
    end: 0.45,
    eyebrow: "02 / Capture",
    title: "Capture any microscope field.",
    subtitle: "In seconds.",
  },
  {
    start: 0.45,
    end: 0.68,
    eyebrow: "03 / Analysis",
    title: "Analyze microscopic tissue architecture.",
    subtitle: "Not just images.",
  },
  {
    start: 0.68,
    end: 0.88,
    eyebrow: "04 / Results",
    title: "From slide to diagnosis support.",
    subtitle: "In under a minute.",
  },
];

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  // Preload frames
  useEffect(() => {
    const frames: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        loadedCount++;
        setLoaded(loadedCount);
        if (loadedCount === FRAME_COUNT) {
          setAllLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        setLoaded(loadedCount);
        if (loadedCount === FRAME_COUNT) {
          setAllLoaded(true);
        }
      };
      frames.push(img);
    }

    framesRef.current = frames;
  }, []);

  // GSAP ScrollTrigger for frame scrubbing and text scenes
  useEffect(() => {
    const canvas = canvasRef.current;
    const track = trackRef.current;
    const textContainer = textContainerRef.current;
    if (!allLoaded || !canvas || !track || !textContainer) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const drawFrame = (progress: number) => {
      const index = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(progress * FRAME_COUNT))
      );
      const img = framesRef.current[index];
      if (img && img.complete && img.naturalWidth) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };

    drawFrame(0);

    if (prefersReducedMotion) {
      return;
    }

    triggerRef.current = ScrollTrigger.create({
      trigger: track,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.8,
      onUpdate: (self) => {
        drawFrame(self.progress);
      },
    });

    // Animate scenes
    const scenes = textContainer.querySelectorAll("[data-scene]");
    scenes.forEach((scene, index) => {
      const isLast = index === scenes.length - 1;
      const start = parseFloat(scene.getAttribute("data-start") || "0");
      const end = parseFloat(scene.getAttribute("data-end") || "1");

      if (index === 0) {
        // First scene is already visible on load; only animate it out
        gsap.set(scene, { opacity: 1, y: 0, scale: 1 });
      } else {
        gsap.fromTo(
          scene,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: track,
              start: `${start * 100}% top`,
              end: `${Math.min(start + 0.06, end) * 100}% top`,
              scrub: true,
            },
          }
        );
      }

      if (!isLast) {
        gsap.to(scene, {
          opacity: 0,
          y: -40,
          scale: 0.98,
          ease: "none",
          scrollTrigger: {
            trigger: trackRef.current,
            start: `${Math.max(end - 0.06, start) * 100}% top`,
            end: `${end * 100}% top`,
            scrub: true,
          },
        });
      }
    });

    // Scroll hint fade out
    const scrollHint = textContainer.querySelector("[data-scroll-hint]");
    if (scrollHint) {
      gsap.to(scrollHint, {
        opacity: 0,
        y: 20,
        ease: "none",
        scrollTrigger: {
          trigger: trackRef.current,
          start: "2% top",
          end: "8% top",
          scrub: true,
        },
      });
    }

    return () => {
      triggerRef.current?.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === track) t.kill();
      });
    };
  }, [allLoaded]);

  const loadingProgress = Math.round((loaded / FRAME_COUNT) * 100);

  return (
    <section className="relative">
      {/* Sticky canvas */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
        <canvas
          ref={canvasRef}
          width={1280}
          height={720}
          className="absolute inset-0 h-full w-full object-cover"
          aria-label="Microscope analyzing oral tissue sequence"
        />

        {/* Darkening overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-black/30" />

        {/* Bottom gradient for text legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        {/* Radial vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.5)_100%)]" />

        {/* Loading indicator */}
        {!allLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/90 backdrop-blur-md">
            <div className="h-1 w-56 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <p className="text-sm tracking-wide text-muted">
              Loading experience… {loadingProgress}%
            </p>
          </div>
        )}

        {/* Content overlays */}
        {allLoaded && (
          <div
            ref={textContainerRef}
            className="absolute inset-0 flex flex-col items-center justify-end pb-32 sm:pb-40 px-6"
          >
            {scenes.map((scene, index) => (
              <div
                key={index}
                data-scene
                data-start={scene.start}
                data-end={scene.end}
                className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end pb-32 sm:pb-40 px-6 text-center"
                style={{ opacity: index === 0 ? 1 : 0 }}
              >
                <div className="max-w-5xl">
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary/90">
                    {scene.eyebrow}
                  </p>
                  <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl [text-shadow:0_4px_30px_rgba(0,0,0,0.5)]">
                    {scene.title}
                  </h2>
                  <p className="mt-5 max-w-2xl mx-auto text-lg text-white/85 sm:text-xl md:text-2xl [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
                    {scene.subtitle}
                  </p>
                </div>
              </div>
            ))}

            {/* End state */}
            <div
              data-scene
              data-start={0.88}
              data-end={1}
              className="pointer-events-auto absolute inset-0 flex flex-col items-center justify-end pb-32 sm:pb-40 px-6 text-center"
              style={{ opacity: 0 }}
            >
              <div className="max-w-4xl">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-primary/90">
                  OralPath
                </p>
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl [text-shadow:0_4px_30px_rgba(0,0,0,0.5)]">
                  The AI Assistant Built
                  <br />
                  For Oral Pathology.
                </h1>
                <div className="mt-8 flex flex-col gap-4 justify-center sm:flex-row">
                  <Button href="#beta">Join Beta</Button>
                  <Button variant="outline" href="#features">
                    Explore Features
                  </Button>
                </div>
              </div>
            </div>

            {/* Scroll hint */}
            <motion.div
              data-scroll-hint
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
            >
              <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </motion.div>
          </div>
        )}
      </div>

      {/* Scroll track */}
      <div ref={trackRef} className="h-[500vh]" />
    </section>
  );
}
