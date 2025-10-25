/**
 * @author Tom Butler
 * @date 2025-10-25
 * @description React hooks for Anime.js animation lifecycle and control
 */

import { useEffect, useRef, useCallback, useState } from 'react';
import { animate as anime, stagger, JSAnimation, utils, TargetsParam } from 'animejs';
import { AnimationController, AnimationConfig } from '@/lib/animations';
import { useReducedMotion } from './useReducedMotion';
import { useIntersectionObserver } from './useIntersectionObserver';

interface UseAnimationOptions {
  autoPlay?: boolean;
  loop?: boolean | number;
  direction?: 'normal' | 'reverse' | 'alternate';
  onComplete?: () => void;
  onBegin?: () => void;
  triggerOnScroll?: boolean;
  threshold?: number;
  freezeOnceVisible?: boolean;
  respectReducedMotion?: boolean;
}

/**
 * Creates and manages a single element animation with scroll trigger support
 * Automatically respects prefers-reduced-motion settings
 * @template T - HTML element type
 * @param {AnimationConfig} config - Anime.js animation configuration
 * @param {UseAnimationOptions} options - Hook behaviour options
 * @return {Object} Control interface with ref, play/pause/restart/seek, and visibility state
 */
export function useAnimation<T extends HTMLElement = HTMLElement>(
  config: AnimationConfig,
  options: UseAnimationOptions = {}
): {
  ref: React.RefObject<T | null>;
  play: () => void;
  pause: () => void;
  restart: () => void;
  reverse: () => void;
  seek: (time: number) => void;
  isVisible: boolean;
  animation: JSAnimation | null;
} {
  const {
    autoPlay = false,
    loop = false,
    direction = 'normal',
    onComplete,
    onBegin,
    triggerOnScroll = false,
    threshold = 0.1,
    freezeOnceVisible = true,
    respectReducedMotion = true,
  } = options;

  const animationRef = useRef<JSAnimation | null>(null);
  const hasPlayedRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();
  
  const [elementRef, isVisible] = useIntersectionObserver<T>({
    threshold,
    freezeOnceVisible,
  });

  const shouldAnimate = !respectReducedMotion || !prefersReducedMotion;

  const createAnimation = useCallback(() => {
    if (!elementRef.current || !shouldAnimate) return null;

    const animationParams = {
      ...config,
      loop,
      direction,
      autoplay: false,
      ...(onComplete && { complete: onComplete }),
      ...(onBegin && { begin: onBegin }),
    };

    return anime(elementRef.current, animationParams);
  }, [config, loop, direction, onComplete, onBegin, shouldAnimate, elementRef]);

  useEffect(() => {
    if (!elementRef.current) return;

    animationRef.current = createAnimation();

    if (autoPlay && !triggerOnScroll && animationRef.current) {
      animationRef.current.play();
      hasPlayedRef.current = true;
    }

    return () => {
      if (animationRef.current) {
        utils.remove(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [createAnimation, autoPlay, triggerOnScroll, elementRef]);

  useEffect(() => {
    if (
      triggerOnScroll &&
      isVisible &&
      !hasPlayedRef.current &&
      animationRef.current &&
      shouldAnimate
    ) {
      animationRef.current.play();
      hasPlayedRef.current = true;
    }
  }, [isVisible, triggerOnScroll, shouldAnimate]);

  const play = useCallback(() => {
    if (animationRef.current && shouldAnimate) {
      animationRef.current.play();
    }
  }, [shouldAnimate]);

  const pause = useCallback(() => {
    if (animationRef.current) {
      animationRef.current.pause();
    }
  }, []);

  const restart = useCallback(() => {
    if (animationRef.current && shouldAnimate) {
      animationRef.current.restart();
      hasPlayedRef.current = true;
    }
  }, [shouldAnimate]);

  const reverse = useCallback(() => {
    if (animationRef.current && shouldAnimate) {
      animationRef.current.reverse();
      animationRef.current.play();
    }
  }, [shouldAnimate]);

  const seek = useCallback((time: number) => {
    if (animationRef.current) {
      animationRef.current.seek(time);
    }
  }, []);

  return {
    ref: elementRef,
    play,
    pause,
    restart,
    reverse,
    seek,
    isVisible,
    animation: animationRef.current,
  };
}

/**
 * Provides a reusable animation controller instance for managing named animations
 * Automatically cleans up on unmount
 * @return {AnimationController} Controller with create, play, pause, restart, destroy methods
 */
export function useAnimationController(): AnimationController {
  const controllerRef = useRef<AnimationController | null>(null);

  useEffect(() => {
    controllerRef.current = new AnimationController();

    return () => {
      controllerRef.current?.destroyAll();
    };
  }, []);

  return controllerRef.current || new AnimationController();
}

/**
 * Tracks scroll progress as fraction from 0 (top) to 1 (bottom)
 * Useful for parallax and progress-based animations
 * @return {number} Scroll progress between 0 and 1
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return progress;
}

/**
 * Provides current mouse position for interactive animations
 * Updates on mouse move
 * @return {Object} Current x and y coordinates in pixels
 */
export function useMousePosition(): { x: number; y: number } {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
}

/**
 * Manages staggered animations across multiple elements
 * Automatically applies stagger delay to child elements
 * @template T - HTML element type
 * @param {AnimationConfig} config - Base animation configuration
 * @param {number} staggerDelay - Delay between each element in milliseconds
 * @param {UseAnimationOptions} options - Hook behaviour options
 * @return {Object} Refs array with addRef method, and play/pause/restart controls
 */
export function useStaggeredAnimation<T extends HTMLElement = HTMLElement>(
  config: AnimationConfig,
  staggerDelay: number = 100,
  options: UseAnimationOptions = {}
): {
  refs: React.RefObject<T>[];
  addRef: () => React.RefObject<T>;
  play: () => void;
  pause: () => void;
  restart: () => void;
} {
  const [refs, setRefs] = useState<React.RefObject<T>[]>([]);
  const animationRef = useRef<JSAnimation | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !options.respectReducedMotion || !prefersReducedMotion;

  const addRef = useCallback(() => {
    const newRef = { current: null as T | null } as React.RefObject<T>;
    setRefs((prev) => [...prev, newRef]);
    return newRef;
  }, []);

  useEffect(() => {
    const targets = refs
      .map((ref) => ref.current)
      .filter((el): el is T => el !== null);

    if (targets.length === 0 || !shouldAnimate) return;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { targets: _t, duration, ease, loop: _loop, autoplay: _autoplay, reversed: _reversed, alternate: _alternate, ...restConfig } = config;
    animationRef.current = anime(targets as TargetsParam, {
      ...restConfig,
      ...(duration && { duration }),
      ...(ease && { easing: ease }),
      delay: stagger(staggerDelay, {start: 0}),
      autoplay: options.autoPlay || false,
      loop: options.loop || false,
      direction: options.direction || 'normal',
      ...(options.onComplete && { complete: options.onComplete }),
      ...(options.onBegin && { begin: options.onBegin }),
    });

    return () => {
      if (animationRef.current) {
        utils.remove(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [refs, config, staggerDelay, options, shouldAnimate]);

  const play = useCallback(() => {
    if (animationRef.current && shouldAnimate) {
      animationRef.current.play();
    }
  }, [shouldAnimate]);

  const pause = useCallback(() => {
    if (animationRef.current) {
      animationRef.current.pause();
    }
  }, []);

  const restart = useCallback(() => {
    if (animationRef.current && shouldAnimate) {
      animationRef.current.restart();
    }
  }, [shouldAnimate]);

  return { refs, addRef, play, pause, restart };
}