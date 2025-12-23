/**
 * @author Tom Butler
 * @date 2025-12-23
 * @description Floating animated tech icons for hero section
 */

"use client";

import { useEffect, useRef } from "react";
import { animate as anime, stagger, utils } from "animejs";
import { animeEasings, durations } from "@/lib/easings";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { techIconMap } from "@/components/ui/TechStackIcon";

interface FloatingIcon {
  tech: string;
  position: { x: string; y: string };
  delay: number;
}

const floatingIcons: FloatingIcon[] = [
  // Top row (3x3 grid)
  { tech: "LangChain", position: { x: "12%", y: "18%" }, delay: 0 },
  { tech: "React", position: { x: "88%", y: "18%" }, delay: 200 },
  // Middle row (sides)
  { tech: "OpenAI", position: { x: "6%", y: "45%" }, delay: 600 },
  { tech: "PostgreSQL", position: { x: "94%", y: "45%" }, delay: 700 },
  // Bottom row
  { tech: "Python", position: { x: "8%", y: "75%" }, delay: 300 },
  { tech: "Pinecone", position: { x: "92%", y: "75%" }, delay: 500 },
];

export default function FloatingTechIcons() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    // Entrance animation
    anime(iconRefs.current.filter(Boolean), {
      opacity: [0, 1],
      scale: [0.5, 1],
      duration: durations.slow,
      delay: stagger(100, { start: 500 }),
      easing: animeEasings.appleElastic,
    });

    // Floating animation for each icon - subtle gentle movement
    iconRefs.current.forEach((icon, index) => {
      if (!icon) return;

      const floatY = 3 + Math.random() * 3; // 3-6px float (reduced)
      const duration = 4000 + Math.random() * 2000; // 4-6s duration (slower)

      anime(icon, {
        translateY: [0, -floatY, 0, floatY, 0],
        duration: duration,
        delay: index * 300,
        loop: true,
        easing: animeEasings.smoothInOut,
      });
    });

    return () => {
      iconRefs.current.forEach((icon) => {
        if (icon) utils.remove(icon);
      });
    };
  }, [prefersReducedMotion]);

  const handleIconHover = (index: number) => {
    if (prefersReducedMotion) return;
    const icon = iconRefs.current[index];
    if (!icon) return;

    anime(icon, {
      scale: 1.3,
      duration: durations.fast,
      easing: animeEasings.appleElastic,
    });
  };

  const handleIconLeave = (index: number) => {
    if (prefersReducedMotion) return;
    const icon = iconRefs.current[index];
    if (!icon) return;

    anime(icon, {
      scale: 1,
      duration: durations.normal,
      easing: animeEasings.appleSpring,
    });
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block"
      aria-hidden="true"
    >
      {floatingIcons.map((item, index) => {
        const techInfo = techIconMap[item.tech];
        if (!techInfo) return null;

        const { icon: Icon, color } = techInfo;

        return (
          <div
            key={item.tech}
            ref={(el) => {
              iconRefs.current[index] = el;
            }}
            className="absolute pointer-events-auto cursor-pointer transform-gpu"
            style={{
              left: item.position.x,
              top: item.position.y,
              transform: "translate(-50%, -50%)",
              opacity: 0,
            }}
            onMouseEnter={() => handleIconHover(index)}
            onMouseLeave={() => handleIconLeave(index)}
            title={item.tech}
          >
            <div className="relative group">
              {/* Glow effect */}
              <div
                className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full ${color.replace("text-", "bg-")}`}
                style={{ transform: "scale(2)" }}
              />
              {/* Icon */}
              <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-3 group-hover:border-gray-500/70 transition-all duration-300">
                <Icon
                  className={`${color} drop-shadow-lg`}
                  style={{ width: 28, height: 28 }}
                />
              </div>
              {/* Label on hover */}
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {item.tech}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
