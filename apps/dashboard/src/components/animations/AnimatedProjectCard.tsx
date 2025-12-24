/**
 * @author Tom Butler
 * @date 2025-10-25
 * @description Project card component with scroll-triggered entrance animations and hover effects
 */

"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { animate as anime, stagger } from 'animejs';
import { animeEasings, durations } from "@/lib/easings";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Project {
  id: string;
  title: string;
  description: string;
  week: string;
  status: "completed" | "in-progress" | "upcoming";
  techStack: string[];
  link?: string;
  progress?: number;
  eta?: string;
  githubUrl?: string;
  image?: string;
  demo?: string;
}

interface AnimatedProjectCardProps {
  project: Project;
  index: number;
}

export default function AnimatedProjectCard({ project, index }: AnimatedProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ 
    threshold: 0.2,
    freezeOnceVisible: true 
  });
  const prefersReducedMotion = useReducedMotion();
  const hasAnimated = useRef(false);

  const statusColors = {
    completed: "border-green-500 bg-green-500/10",
    "in-progress": "border-cyan-500 bg-cyan-500/10",
    upcoming: "border-gray-500 bg-gray-500/10",
  };

  const statusGlowColors = {
    completed: "rgba(0, 255, 0, 0.5)",
    "in-progress": "rgba(0, 255, 255, 0.5)",
    upcoming: "rgba(128, 128, 128, 0.3)",
  };

  const statusText = {
    completed: "Completed",
    "in-progress": "In Progress",
    upcoming: "Upcoming",
  };

  const animateCardEntrance = useCallback(() => {
    if (!cardRef.current) return;

    anime(cardRef.current, {
        opacity: [0, 1],
      translateY: [50, 0],
      rotateX: [-15, 0],
      duration: durations.slow,
      delay: index * durations.stagger,
      easing: animeEasings.appleEaseOut
      });

    if (contentRef.current) {
      anime(contentRef.current.children, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: durations.normal,
        delay: stagger(50, { start: index * durations.stagger + 200
      }),
        easing: animeEasings.smoothOut,
      });
    }

    if (techStackRef.current) {
      anime(techStackRef.current.children, {
        opacity: [0, 1],
        scale: [0, 1],
        duration: durations.fast,
        delay: stagger(30, { start: index * durations.stagger + 400
      }),
        easing: animeEasings.appleElastic,
      });
    }
  }, [index]);

  useEffect(() => {
    if (isVisible && !hasAnimated.current && !prefersReducedMotion) {
      hasAnimated.current = true;
      animateCardEntrance();
    }
  }, [isVisible, prefersReducedMotion, animateCardEntrance]);

  const handleMouseEnter = () => {
    if (prefersReducedMotion) return;
    setIsHovered(true);

    const card = cardRef.current;
    if (!card) return;

    anime(card, {
        translateY: -8,
      scale: 1.02,
      duration: durations.normal,
      easing: animeEasings.appleEaseOut
      });

    anime(card, {
        boxShadow: [
        "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        "0 20px 40px -10px rgba(0, 255, 0, 0.2)"
      ],
      duration: durations.normal,
      easing: animeEasings.smoothOut
      });

    if (glowRef.current) {
      anime(glowRef.current, {
        opacity: [0, 0.3],
        scale: [0.8, 1],
        duration: durations.normal,
        easing: animeEasings.smoothOut
      });
    }

    if (buttonRef.current) {
      anime(buttonRef.current, {
        backgroundColor: "rgba(0, 255, 0, 0.3)",
        duration: durations.fast,
        easing: animeEasings.smoothOut
      });
    }

    if (techStackRef.current) {
      anime(techStackRef.current.children, {
        translateY: -2,
        duration: durations.fast,
        delay: stagger(20),
        ease: animeEasings.bounce,
      });
    }
  };

  const handleMouseLeave = () => {
    if (prefersReducedMotion) return;
    setIsHovered(false);

    const card = cardRef.current;
    if (!card) return;

    anime(card, {
        translateY: 0,
      scale: 1,
      duration: durations.normal,
      ease: animeEasings.appleSpring
      });

    anime(card, {
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      duration: durations.normal,
      easing: animeEasings.smoothOut
      });

    if (glowRef.current) {
      anime(glowRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: durations.normal,
        easing: animeEasings.smoothOut
      });
    }

    if (buttonRef.current) {
      anime(buttonRef.current, {
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        duration: durations.fast,
        easing: animeEasings.smoothOut,
      });
    }

    if (techStackRef.current) {
      anime(techStackRef.current.children, {
        translateY: 0,
        duration: durations.fast,
        delay: stagger(20),
        easing: animeEasings.smoothOut
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion || !isHovered) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    anime(card, {
      rotateX,
      rotateY,
      duration: durations.instant,
      ease: "linear",
    });

    if (glowRef.current) {
      const glowX = (x / rect.width) * 100;
      const glowY = (y / rect.height) * 100;
      glowRef.current.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, ${statusGlowColors[project.status]}, transparent 60%)`;
    }
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        className={`relative border border-gray-800 rounded-lg bg-gray-900/50 transition-colors duration-300 hover:border-green-500/50 flex flex-col ${
          project.image ? 'h-[400px]' : 'h-[320px] p-6'
        }`}
        style={{
          opacity: 0,
          transformStyle: "preserve-3d",
          transform: "translateZ(0)",
        }}
      >
        <div
          ref={glowRef}
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{ 
            opacity: 0,
            background: `radial-gradient(circle at 50% 50%, ${statusGlowColors[project.status]}, transparent 60%)`,
          }}
        />

        <div ref={contentRef} className={`flex-1 flex flex-col items-center text-center ${project.image ? 'p-5' : ''}`}>
          <div className="absolute top-0 right-0 -mt-1 -mr-1">
            <span
              className={`inline-block px-2 py-1 text-xs rounded-md ${statusColors[project.status]}`}
              style={{ opacity: 0 }}
            >
              {statusText[project.status]}
            </span>
          </div>

          {/* Progress Bar for in-progress projects */}
          {project.status === "in-progress" && project.progress && (
            <div className="mb-3" style={{ opacity: 0 }}>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full transition-all duration-500"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
          )}

          <h3
            className="text-xl font-semibold mb-2 text-green-400 transition-colors"
            style={{ opacity: 0 }}
          >
            {project.title}
          </h3>

          <p
            className="text-sm text-gray-500 mb-3"
            style={{ opacity: 0 }}
          >
            {project.week}
          </p>

          <p
            className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-2"
            style={{ opacity: 0 }}
          >
            {project.description}
          </p>

          {/* ETA for in-progress projects */}
          {project.status === "in-progress" && project.eta && (
            <div
              className="bg-cyan-900/20 border border-cyan-500/30 rounded-md p-1.5 mb-2"
              style={{ opacity: 0 }}
            >
              <p className="text-xs text-cyan-400">
                <span className="font-semibold">Expected Release:</span> {project.eta}
              </p>
            </div>
          )}
        </div>

        {/* Image Section - Only for main projects (above tech stack) */}
        {project.image && (
          <div className="h-[140px] w-full overflow-hidden relative bg-gradient-to-br from-gray-800/50 to-gray-700/30 mx-0 mb-4">
            {project.image === "placeholder" ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-cyan-400/10 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center text-gray-300">
                    <div className="w-12 h-12 bg-gray-700/50 rounded-xl flex items-center justify-center mb-2 mx-auto border border-gray-600/50">
                      <div className="text-xl">📸</div>
                    </div>
                    <p className="text-xs font-medium text-gray-300">Project Screenshot</p>
                  </div>
                </div>
                {/* Subtle tech pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="absolute top-6 right-6 w-1 h-1 bg-cyan-400 rounded-full"></div>
                  <div className="absolute bottom-8 left-8 w-1 h-1 bg-green-400 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-cyan-400/50 rounded-full"></div>
                </div>
              </>
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.querySelector('.image-fallback') as HTMLElement;
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
            )}
            {/* Fallback placeholder (hidden by default when image exists) */}
            {project.image !== "placeholder" && (
              <div className="image-fallback hidden absolute inset-0 bg-gradient-to-br from-green-400/10 to-cyan-400/10 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center text-gray-300">
                  <div className="w-12 h-12 bg-gray-700/50 rounded-xl flex items-center justify-center mb-2 mx-auto border border-gray-600/50">
                    <div className="text-xl">📸</div>
                  </div>
                  <p className="text-xs font-medium text-gray-300">Project Screenshot</p>
                </div>
              </div>
            )}
          </div>
        )}

        <div className={`mt-auto space-y-4 ${project.image ? 'px-5 pb-5' : ''}`}>
          <div ref={techStackRef} className="flex flex-wrap gap-2 justify-center">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs bg-gray-800/80 text-gray-300 rounded-full transform-gpu border border-gray-700/50 hover:border-gray-600/70 transition-colors duration-200"
                style={{ opacity: 0 }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Show dual buttons for AI Comparison, AI Code Generator, SQL-Ball, and ModelViz */}
          {(project.id === "ai-comparison-showcase" || project.id === "ai-code-generator" || project.id === "sql-ball" || project.id === "modelviz") && project.demo ? (
            <div className="grid grid-cols-2 gap-2">
              <Link href={`/projects/${project.id}`}>
                <Button
                  size="sm"
                  className="w-full bg-gray-800/50 hover:bg-gray-700/70 text-gray-300 border border-gray-600/50 transform-gpu font-medium text-xs"
                >
                  Project Info
                </Button>
              </Link>
              <Link href={project.demo} target="_blank">
                <Button
                  ref={buttonRef}
                  size="sm"
                  className="w-full bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/50 transform-gpu font-medium text-xs"
                >
                  <ExternalLink className="mr-1" size={14} />
                  Live Site
                </Button>
              </Link>
            </div>
          ) : (
            <Link href={`/projects/${project.id}`}>
              <Button
                ref={buttonRef}
                size="default"
                className="w-full bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/50 transform-gpu font-medium"
              >
                View Project →
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
