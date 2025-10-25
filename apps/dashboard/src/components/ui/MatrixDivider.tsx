/**
 * @author Tom Butler
 * @date 2025-10-25
 * @description Decorative divider component with animated variants (default, glow, dots)
 */

"use client";

import { useEffect, useRef } from 'react';
import { animate as anime } from 'animejs';
import { animeEasings, durations } from '@/lib/easings';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MatrixDividerProps {
  className?: string;
  variant?: 'default' | 'glow' | 'dots';
}

export default function MatrixDivider({ className = '', variant = 'default' }: MatrixDividerProps) {
  const dividerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!prefersReducedMotion && dividerRef.current && variant === 'glow') {
      const glowElement = dividerRef.current.querySelector('.glow-line');
      if (glowElement) {
        // Animate the glow effect
        anime(
          glowElement,
          {
            opacity: [0.3, 0.8, 0.3],
            duration: durations.slow * 2,
            easing: animeEasings.smoothInOut,
            loop: true,
          }
        );
      }
    }
  }, [prefersReducedMotion, variant]);

  if (variant === 'dots') {
    return (
      <div className={`flex items-center justify-center my-8 ${className}`}>
        <div className="flex space-x-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full opacity-60"
              style={{
                animationDelay: `${i * 0.2}s`,
                animation: prefersReducedMotion ? 'none' : 'pulse 2s infinite ease-in-out'
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'glow') {
    return (
      <div ref={dividerRef} className={`relative my-12 ${className}`}>
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
        <div className="glow-line absolute inset-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full opacity-80 shadow-lg shadow-green-400/50" />
      </div>
    );
  }

  // Default variant
  return (
    <div className={`relative my-8 ${className}`}>
      <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-50" />
      <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />

      {/* Matrix-style decorative elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 flex space-x-1">
        <div className="w-px h-3 bg-green-400/40" />
        <div className="w-px h-2 bg-green-400/60" />
        <div className="w-px h-4 bg-green-400/30" />
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex space-x-1">
        <div className="w-px h-4 bg-cyan-400/30" />
        <div className="w-px h-2 bg-cyan-400/60" />
        <div className="w-px h-3 bg-cyan-400/40" />
      </div>
    </div>
  );
}