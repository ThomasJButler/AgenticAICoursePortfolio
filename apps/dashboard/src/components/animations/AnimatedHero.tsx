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
      {/* Enhanced Radial Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-green-500/15 via-cyan-500/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-emerald-500/12 via-teal-500/6 to-transparent rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-cyan-500/10 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-1/3 w-[300px] h-[300px] bg-gradient-radial from-green-400/8 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>

      {/* Floating Tech Icons */}
      <FloatingTechIcons />

      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Title - Two Lines with Enhanced Glow */}
      <h1 className="font-bold mb-8 relative z-10">
        <span
          ref={titleLine1Ref}
          className="block text-5xl sm:text-6xl md:text-8xl tracking-tight drop-shadow-[0_0_40px_rgba(16,185,129,0.4)] filter"
          style={{ opacity: 0 }}
        >
          ML&GenAI
        </span>
        <span
          ref={titleLine2Ref}
          className="block text-4xl sm:text-5xl md:text-7xl tracking-tight mt-3 drop-shadow-[0_0_35px_rgba(6,182,212,0.4)]"
          style={{ opacity: 0 }}
        >
          Portfolio
        </span>
        {/* Animated underline accent */}
        <div className="mt-6 flex justify-center">
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full animate-pulse" style={{ animationDuration: '2s' }} />
        </div>
      </h1>

      {/* Main Subtitle with Enhanced Styling */}
      <p
        ref={subtitleRef}
        className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto relative z-10 font-light tracking-wide"
        style={{ opacity: 0 }}
      >
        <span className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent">
          Mastering Generative AI & Agents for Developers
        </span>
      </p>

      {/* Enhanced Stats Line with Badges */}
      <div
        ref={statsRef}
        className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 relative z-10"
        style={{ opacity: 0 }}
      >
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium shadow-lg shadow-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 cursor-default">
          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse" />
          CodeCademy Bootcamp
        </span>
        <span className="inline-flex items-center px-3 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium shadow-lg shadow-green-500/10">
          6 Weeks
        </span>
        <span className="inline-flex items-center px-3 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium shadow-lg shadow-emerald-500/10">
          6 Projects
        </span>
      </div>

      {/* Action Buttons with Enhanced Effects */}
      <div
        ref={buttonsRef}
        className="flex flex-col sm:flex-row gap-5 items-center justify-center relative z-10"
      >
        {/* Primary CTA Button with Glow */}
        <div className="relative group">
          {/* Animated glow ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 rounded-lg opacity-40 blur-md group-hover:opacity-70 transition-all duration-500 animate-pulse" style={{ animationDuration: '3s' }} />
          <Button
            className="relative bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-black font-bold transform-gpu px-10 py-4 text-base shadow-2xl shadow-green-500/30 hover:shadow-green-400/50 transition-all duration-300 overflow-hidden"
            style={{ opacity: 0 }}
            onClick={(e) => {
              handleButtonClick(e);
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            <span className="relative z-10 flex items-center">
              View Projects
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Button>
        </div>

        {/* Secondary Button with Border Glow */}
        <Link href="/certificates/codecademy-ai-agents-certificate.pdf" target="_blank" rel="noopener noreferrer">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg opacity-30 blur group-hover:opacity-60 transition-all duration-500" />
            <Button
              variant="ghost"
              className="relative bg-gray-900/80 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 hover:bg-gray-800/90 transform-gpu px-8 py-4 text-base shadow-xl shadow-cyan-500/10 hover:shadow-cyan-400/30 transition-all duration-300 overflow-hidden"
              style={{ opacity: 0 }}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              onClick={handleButtonClick}
            >
              <Award className="mr-2 relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" size={20} />
              <span className="relative z-10">Show Certificate</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/10 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Button>
          </div>
        </Link>
      </div>
    </section>
  );
}
