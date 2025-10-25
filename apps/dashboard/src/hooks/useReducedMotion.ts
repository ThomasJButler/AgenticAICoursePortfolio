/**
 * @author Tom Butler
 * @date 2025-10-25
 * @description React hook for detecting and responding to user motion preferences
 */

import { useEffect, useState } from 'react';

/**
 * Detects user's prefers-reduced-motion setting and provides reactive updates
 * Used throughout animation components to respect accessibility preferences
 * Ensures animations respect user's system-level motion preferences
 * @return {boolean} True if user has enabled reduced motion preference
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  /**
   * @constructs - Initialises media query listener for prefers-reduced-motion changes
   */
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        // Fallback for older browsers
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return prefersReducedMotion;
}