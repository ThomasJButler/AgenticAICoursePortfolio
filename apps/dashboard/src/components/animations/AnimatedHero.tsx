/**
 * @author Tom Butler
 * @date 2025-10-25
 * @description Hero section with animated title, subtitle, floating tech icons, and particle effects
 */

"use client";

import { useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { animate as anime, stagger, createTimeline, utils } from 'animejs';
import { animeEasings, durations } from "@/lib/easings";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Award } from "lucide-react";
import FloatingTechIcons from "./FloatingTechIcons";

export default function AnimatedHero() {
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const createFloatingParticles = useCallback(() => {
    if (!particlesRef.current || prefersReducedMotion) return;

    const colors = ["#00ff00", "#00ffff", "#00ff88"];
    const particles = 12;

    for (let i = 0; i < particles; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.position = "absolute";
      particle.style.width = "4px";
      particle.style.height = "4px";
      particle.style.borderRadius = "50%";
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.opacity = "0";
      particle.style.pointerEvents = "none";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.boxShadow = `0 0 10px ${particle.style.backgroundColor}`;
      particlesRef.current.appendChild(particle);

      anime(particle, {
        translateX: () => utils.random(-100, 100),
        translateY: () => utils.random(-100, 100),
        opacity: [
          { value: 0, duration: 0 },
          { value: 0.6, duration: durations.normal },
          { value: 0, duration: durations.slow }
        ],
        scale: [
          { value: 0, duration: 0 },
          { value: utils.random(1, 2), duration: durations.normal },
          { value: 0, duration: durations.slow }
        ],
        duration: durations.slowest * 3,
        delay: utils.random(0, durations.slowest),
        loop: true,
        easing: animeEasings.smoothInOut
      });
    }
  }, [prefersReducedMotion]);

  const animateTitle = useCallback((element: HTMLElement, gradient: string) => {
    const text = element.textContent || "";
    element.innerHTML = "";
    element.style.opacity = "1";

    text.split("").forEach((char) => {
      const charSpan = document.createElement("span");
      charSpan.textContent = char;
      charSpan.style.display = "inline-block";
      charSpan.style.opacity = "0";
      charSpan.style.transform = "translateY(40px) rotateX(-90deg)";
      charSpan.className = gradient;
      element.appendChild(charSpan);
    });

    return element.querySelectorAll("span");
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timeline = createTimeline({
      playbackEase: animeEasings.appleEaseOut,
    });

    // Animate first line of title
    if (titleLine1Ref.current) {
      const chars = animateTitle(titleLine1Ref.current, "bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent");
      timeline.add(chars, {
        opacity: [0, 1],
        translateY: [40, 0],
        rotateX: [-90, 0],
        duration: durations.slow,
        delay: stagger(40, { from: "center" }),
        easing: animeEasings.appleSpring,
      });
    }

    // Animate second line of title
    if (titleLine2Ref.current) {
      const chars = animateTitle(titleLine2Ref.current, "bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 bg-clip-text text-transparent");
      timeline.add(chars, {
        opacity: [0, 1],
        translateY: [40, 0],
        rotateX: [-90, 0],
        duration: durations.slow,
        delay: stagger(40, { from: "center" }),
        easing: animeEasings.appleSpring,
      }, "-=400");
    }

    // Animate subtitle
    if (subtitleRef.current) {
      timeline.add(subtitleRef.current, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: durations.normal,
        easing: animeEasings.smoothOut,
      }, "-=300");
    }

    // Animate stats line
    if (statsRef.current) {
      timeline.add(statsRef.current, {
        opacity: [0, 1],
        translateY: [15, 0],
        duration: durations.normal,
        easing: animeEasings.smoothOut,
      }, "-=200");
    }

    // Animate buttons
    if (buttonsRef.current) {
      timeline.add(
        buttonsRef.current.querySelectorAll("button"),
        {
          opacity: [0, 1],
          translateY: [30, 0],
          scale: [0.8, 1],
          duration: durations.normal,
          delay: stagger(100),
          easing: animeEasings.appleElastic,
        },
        "-=200"
      );
    }

    createFloatingParticles();

    const title1 = titleLine1Ref.current;
    const title2 = titleLine2Ref.current;
    const subtitle = subtitleRef.current;
    const stats = statsRef.current;
    const buttons = buttonsRef.current;

    return () => {
      if (title1) utils.remove(title1);
      if (title2) utils.remove(title2);
      if (subtitle) utils.remove(subtitle);
      if (stats) utils.remove(stats);
      if (buttons) utils.remove(buttons);
    };
  }, [prefersReducedMotion, createFloatingParticles, animateTitle]);

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion) return;

    const button = e.currentTarget;
    anime(button, {
      scale: 1.05,
      duration: durations.fast,
      easing: animeEasings.smoothOut,
    });
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion) return;

    const button = e.currentTarget;
    anime(button, {
      scale: 1,
      duration: durations.normal,
      easing: animeEasings.appleSpring
    });
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion) return;

    const button = e.currentTarget;

    anime(button, {
      scale: [1, 0.95, 1.02, 1],
      duration: durations.normal,
      easing: animeEasings.appleElastic
    });

    const ripple = document.createElement("div");
    ripple.style.position = "absolute";
    ripple.style.width = "100%";
    ripple.style.height = "100%";
    ripple.style.borderRadius = "inherit";
    ripple.style.background = "radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)";
    ripple.style.pointerEvents = "none";
    ripple.style.top = "0";
    ripple.style.left = "0";
    button.style.position = "relative";
    button.style.overflow = "hidden";
    button.appendChild(ripple);

    anime(ripple, {
      scale: [0, 2],
      opacity: [1, 0],
      duration: durations.slow,
      ease: animeEasings.smoothOut,
      complete: () => ripple.remove(),
    });
  };

  return (
    <section id="hero" className="container mx-auto px-4 pb-16 text-center pt-32 md:pt-40 relative min-h-[75vh] flex flex-col justify-center items-center overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-green-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-emerald-500/8 to-transparent rounded-full blur-2xl" />
      </div>

      {/* Floating Tech Icons */}
      <FloatingTechIcons />

      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Title - Two Lines with Enhanced Glow */}
      <h1 className="font-bold mb-6 relative z-10">
        <span
          ref={titleLine1Ref}
          className="block text-5xl sm:text-6xl md:text-7xl tracking-tight drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]"
          style={{ opacity: 0 }}
        >
          ML&GenAI
        </span>
        <span
          ref={titleLine2Ref}
          className="block text-4xl sm:text-5xl md:text-6xl tracking-tight mt-2 drop-shadow-[0_0_25px_rgba(6,182,212,0.3)]"
          style={{ opacity: 0 }}
        >
          Portfolio
        </span>
      </h1>

      {/* Main Subtitle with Glow */}
      <p
        ref={subtitleRef}
        className="text-lg sm:text-xl text-gray-300 mb-3 max-w-2xl mx-auto relative z-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
        style={{ opacity: 0 }}
      >
        Mastering Generative AI & Agents for Developers
      </p>

      {/* Stats Line */}
      <p
        ref={statsRef}
        className="text-sm sm:text-base text-gray-500 mb-10 relative z-10"
        style={{ opacity: 0 }}
      >
        <span className="text-cyan-400 font-medium">CodeCademy Bootcamp</span>
        <span className="mx-2 text-cyan-500/50">•</span>
        <span>6 Weeks</span>
        <span className="mx-2 text-cyan-500/50">•</span>
        <span>6 Projects</span>
      </p>

      {/* Action Buttons with Enhanced Effects */}
      <div
        ref={buttonsRef}
        className="flex flex-col sm:flex-row gap-4 items-center justify-center relative z-10"
      >
        <Button
          className="bg-green-500 hover:bg-green-600 text-black font-semibold transform-gpu px-8 py-3 shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 relative overflow-hidden group"
          style={{ opacity: 0 }}
          onClick={(e) => {
            handleButtonClick(e);
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          <span className="relative z-10">View Projects</span>
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
        <Link href="https://www.codecademy.com/bootcamps/ai-1/certificates/61bbd81425580b633fee49f6" target="_blank" rel="noopener noreferrer">
          <Button
            variant="ghost"
            className="text-cyan-400 hover:text-white border-2 border-cyan-500/40 hover:border-cyan-400/70 hover:bg-cyan-400/10 transform-gpu px-8 py-3 shadow-lg shadow-cyan-500/10 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 relative overflow-hidden group"
            style={{ opacity: 0 }}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
            onClick={handleButtonClick}
          >
            <Award className="mr-2 relative z-10 group-hover:rotate-12 transition-transform duration-300" size={18} />
            <span className="relative z-10">Show Certificate</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
