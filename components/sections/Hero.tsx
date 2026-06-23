"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 192;
const FRAME_PATH = "scroll-frames/frame_%04d.webp";

function getFrameUrl(index: number) {
  return FRAME_PATH.replace("%04d", String(index + 1).padStart(4, "0"));
}

const scenes = [
  {
    start: 0.05,
    end: 0.2,
    title: "Oral Histopathology.",
    subtitle: "Reimagined with AI.",
  },
  {
    start: 0.2,
    end: 0.4,
    title: "Capture any microscope field.",
    subtitle: "In seconds.",
  },
  {
    start: 0.4,
    end: 0.6,
    title: "Analyze microscopic tissue architecture.",
    subtitle: "Not just images.",
  },
  {
    start: 0.6,
    end: 0.8,
    title: "From slide to diagnosis support.",
    subtitle: "In under a minute.",
  },
];

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const triggerRef = useRef<ScrollTrigger | null>(null);

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

  // GSAP ScrollTrigger for frame scrubbing
  useEffect(() => {
    if (!allLoaded || !canvasRef.current || !trackRef.current) return;

    const canvas = canvasRef.current;
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

    // Draw first frame immediately
    drawFrame(0);

    if (prefersReducedMotion) {
      return;
    }

    triggerRef.current = ScrollTrigger.create({
      trigger: trackRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate: (self) => {
        drawFrame(self.progress);
      },
    });

    return () => {
      triggerRef.current?.kill();
    };
  }, [allLoaded]);

  const loadingProgress = Math.round((loaded / FRAME_COUNT) * 100);

  return (
    <section ref={containerRef} className="relative">
      {/* Sticky canvas */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
        <canvas
          ref={canvasRef}
          width={1280}
          height={720}
          className="absolute inset-0 h-full w-full object-contain"
          aria-label="Microscope analyzing oral tissue sequence"
        />

        {/* Vignette overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.4)_100%)]" />

        {/* Loading indicator */}
        {!allLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/80 backdrop-blur-sm">
            <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <p className="text-sm text-muted">
              Loading sequence… {loadingProgress}%
            </p>
          </div>
        )}

        {/* Scene text overlays */}
        {allLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            {scenes.map((scene, index) => (
              <SceneText key={index} scene={scene} />
            ))}

            {/* End state */}
            <EndState />
          </div>
        )}
      </div>

      {/* Scroll track */}
      <div ref={trackRef} className="h-[450vh]" />
    </section>
  );
}

function SceneText({
  scene,
}: {
  scene: { start: number; end: number; title: string; subtitle: string };
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      ref.current.style.opacity = "0";
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current?.parentElement?.parentElement?.parentElement,
            start: `${scene.start * 100}% top`,
            end: `${(scene.start + 0.05) * 100}% top`,
            scrub: true,
          },
        }
      );

      gsap.to(ref.current, {
        opacity: 0,
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current?.parentElement?.parentElement?.parentElement,
          start: `${(scene.end - 0.05) * 100}% top`,
          end: `${scene.end * 100}% top`,
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [scene]);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
      style={{ opacity: 0 }}
    >
      <h2 className="max-w-4xl text-4xl font-semibold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
        {scene.title}
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-white/80 drop-shadow-md sm:text-xl md:text-2xl">
        {scene.subtitle}
      </p>
    </div>
  );
}

function EndState() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      ref.current.style.opacity = "1";
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current?.parentElement?.parentElement?.parentElement,
            start: "80% top",
            end: "90% top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-auto absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
      style={{ opacity: 0 }}
    >
      <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
        The AI Assistant Built
        <br />
        For Oral Pathology.
      </h1>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button href="#beta">Join Beta</Button>
        <Button variant="outline" href="#demo">
          Watch Demo
        </Button>
      </div>
    </div>
  );
}
