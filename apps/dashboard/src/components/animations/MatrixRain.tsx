/**
 * @author Tom Butler
 * @date 2025-10-25
 * @description Background matrix rain effect with layered animated particles
 */

"use client";

import { useEffect, useRef, useCallback } from "react";
import { animate as anime, createTimeline, createTimer, Timeline, Target } from 'animejs';
import { animeEasings, durations } from "@/lib/easings";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Timeline | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const createFloatingLayers = useCallback(() => {
    if (!particlesRef.current || prefersReducedMotion) return;

    const layers = 3;
    const particlesPerLayer = 5;

    for (let layer = 0; layer < layers; layer++) {
      const layerDiv = document.createElement("div");
      layerDiv.className = "matrix-layer";
      layerDiv.style.position = "absolute";
      layerDiv.style.inset = "0";
      layerDiv.style.pointerEvents = "none";
      particlesRef.current.appendChild(layerDiv);

      for (let i = 0; i < particlesPerLayer; i++) {
        const particle = document.createElement("div");
        particle.className = "matrix-particle";
        particle.style.position = "absolute";
        particle.style.width = "2px";
        particle.style.height = `${Math.random() * 100 + 50}px`;
        particle.style.background = `linear-gradient(to bottom, transparent, rgba(0, 255, 0, ${0.1 + layer * 0.1}), transparent)`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = "-100px";
        particle.style.filter = `blur(${layer}px)`;
        layerDiv.appendChild(particle);

        anime(particle, {
        translateY: window.innerHeight + 200,
          duration: durations.slowest * (3 + layer),
          delay: Math.random() * durations.slowest * 2,
          easing: "linear",
          loop: true
      });

        anime(particle, {
        opacity: [0, 0.5, 0],
          duration: durations.slowest * (3 + layer),
          delay: Math.random() * durations.slowest * 2,
          ease: animeEasings.smoothInOut,
          loop: true
      });
      }

      anime(layerDiv, {
        translateZ: `${layer * -100}px`,
        duration: 0
      });
    }
  }, [prefersReducedMotion]);

  const animateCanvasOpacity = useCallback(() => {
    if (!canvasRef.current || prefersReducedMotion) return;

    animationRef.current = createTimeline({
      loop: true,
    });

    animationRef.current
      .add(
        canvasRef.current,
        {
          opacity: [0.3, 0.5],
          duration: durations.slowest * 2,
          ease: animeEasings.smoothInOut,
        }
      )
      .add(
        canvasRef.current,
        {
          opacity: [0.5, 0.3],
          duration: durations.slowest * 2,
          ease: animeEasings.smoothInOut,
        }
      );
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);
    
    const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const charArray = matrixChars.split("");

    ctx.font = `${fontSize}px JetBrains Mono, monospace`;

    const drawMatrix = () => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        if (Math.random() > 0.975) {
          const text = charArray[Math.floor(Math.random() * charArray.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          const intensity = Math.random();
          if (intensity > 0.9) {
            ctx.fillStyle = "rgba(0, 255, 255, 0.8)";
          } else if (intensity > 0.7) {
            ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
          } else {
            ctx.fillStyle = "rgba(0, 255, 0, 0.15)";
          }

          ctx.fillText(text, x, y);

          if (y > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
          }

          drops[i]++;
        }
      }
    };

    const matrixAnimation = createTimer({
      duration: Infinity,
      onUpdate: drawMatrix,
      frameRate: 30
    });

    createFloatingLayers();
    animateCanvasOpacity();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      matrixAnimation.pause();
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, [prefersReducedMotion, animateCanvasOpacity, createFloatingLayers]);

  useEffect(() => {
    if (!particlesRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;

      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      const layers = particlesRef.current?.querySelectorAll(".matrix-layer");
      if (layers) {
        anime(layers, {
          translateX: (_el: Target, i: number) => x * (i + 1) * 0.5,
          translateY: (_el: Target, i: number) => y * (i + 1) * 0.5,
          duration: durations.slow,
          easing: animeEasings.smoothOut
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.4 }}
      />
      <div
        ref={particlesRef}
        className="absolute inset-0"
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50" />
    </div>
  );
}
