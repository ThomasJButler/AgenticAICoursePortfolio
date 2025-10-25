/**
 * @author Tom Butler
 * @date 2025-10-25
 * @description Animation easing curves and duration constants for consistent timing across components
 */

/**
 * Cubic Bezier easing curves for CSS animations
 * Tuned for smooth, professional motion across different interaction types
 */
export const easings = {
  smooth: [0.25, 0.1, 0.25, 1.0] as const,
  smoothOut: [0.0, 0.0, 0.2, 1.0] as const,
  smoothIn: [0.4, 0.0, 1.0, 1.0] as const,
  smoothInOut: [0.4, 0.0, 0.2, 1.0] as const,

  elastic: [0.68, -0.55, 0.265, 1.55] as const,
  elasticOut: [0.34, 1.56, 0.64, 1] as const,
  elasticIn: [0.36, 0, 0.66, -0.56] as const,

  bounce: [0.68, -0.55, 0.265, 1.55] as const,
  bounceOut: [0.34, 1.56, 0.64, 1] as const,
  bounceIn: [0.36, 0, 0.66, -0.56] as const,

  natural: [0.4, 0.0, 0.2, 1.0] as const,
  sharp: [0.4, 0.0, 0.6, 1.0] as const,

  appleEaseOut: [0.25, 0.46, 0.45, 0.94] as const,
  appleSpring: [0.86, 0, 0.07, 1] as const,
  appleElastic: [0.68, -0.6, 0.32, 1.6] as const,
};

/**
 * Anime.js compatible easing functions for complex animations
 * Used by the AnimationController and staggered animations throughout the app
 */
export const animeEasings = {
  smooth: 'cubicBezier(0.25, 0.1, 0.25, 1.0)',
  smoothOut: 'cubicBezier(0.0, 0.0, 0.2, 1.0)',
  smoothIn: 'cubicBezier(0.4, 0.0, 1.0, 1.0)',
  smoothInOut: 'cubicBezier(0.4, 0.0, 0.2, 1.0)',

  elastic: 'spring(1, 80, 10, 0)',
  elasticOut: 'easeOutElastic',
  elasticIn: 'easeInElastic',

  bounce: 'easeOutBounce',
  bounceOut: 'easeOutBounce',
  bounceIn: 'easeInBounce',

  natural: 'easeOutQuad',
  sharp: 'easeOutQuart',

  appleEaseOut: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
  appleSpring: 'spring(1, 100, 10, 0)',
  appleElastic: 'cubicBezier(0.68, -0.6, 0.32, 1.6)',
};

/**
 * Standard animation durations for consistent timing
 * Chosen to provide responsive feel whilst remaining accessible
 */
export const durations = {
  instant: 150,
  fast: 250,
  normal: 400,
  slow: 600,
  slower: 800,
  slowest: 1000,

  enter: 400,
  exit: 250,

  stagger: 50,
  staggerFast: 25,
  staggerSlow: 100,
};

/**
 * Framer Motion spring physics configurations
 * Tuned for different interaction contexts (entry, dismissal, etc.)
 */
export const springs = {
  gentle: { mass: 1, stiffness: 100, damping: 15 },
  wobbly: { mass: 1, stiffness: 180, damping: 12 },
  stiff: { mass: 1, stiffness: 280, damping: 20 },
  slow: { mass: 1, stiffness: 280, damping: 60 },
  molasses: { mass: 1, stiffness: 280, damping: 120 },
  apple: { mass: 1, stiffness: 100, damping: 10 },
};