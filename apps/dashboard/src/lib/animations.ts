/**
 * @author Tom Butler
 * @date 2025-10-25
 * @description Animation utilities and preset configurations for Anime.js library
 */

import { animate as anime, stagger, createTimeline, utils, JSAnimation, FunctionValue, TargetsParam } from 'animejs';
import { animeEasings, durations } from './easings';

export interface AnimationConfig {
  targets?: string | Element | Element[] | NodeList;
  duration?: number;
  delay?: number | FunctionValue;
  ease?: string;
  loop?: boolean | number;
  autoplay?: boolean;
  reversed?: boolean;
  alternate?: boolean;
  [key: string]: unknown;
}

/**
 * Manages named animations with create, play, pause, and destroy operations
 * Provides a centralised way to control multiple animations in an application
 */
export class AnimationController {
  private animations: Map<string, JSAnimation> = new Map();

  /**
   * Creates and registers a new animation with given configuration
   * @param {string} name - Unique identifier for this animation
   * @param {AnimationConfig} config - Anime.js configuration
   * @return {JSAnimation} Created animation instance
   */
  create(name: string, config: AnimationConfig): JSAnimation {
    const { targets, ...params } = config;
    const animation = anime(targets as TargetsParam, {
      duration: durations.normal,
      easing: animeEasings.smooth,
      ...params,
    });
    this.animations.set(name, animation);
    return animation;
  }

  get(name: string): JSAnimation | undefined {
    return this.animations.get(name);
  }

  play(name: string): void {
    this.animations.get(name)?.play();
  }

  pause(name: string): void {
    this.animations.get(name)?.pause();
  }

  restart(name: string): void {
    this.animations.get(name)?.restart();
  }

  destroy(name: string): void {
    const animation = this.animations.get(name);
    if (animation) {
      utils.remove(animation);
      this.animations.delete(name);
    }
  }

  destroyAll(): void {
    this.animations.forEach((_, name) => this.destroy(name));
  }
}

export const fadeIn: AnimationConfig = {
  opacity: [0, 1],
  duration: durations.enter,
  ease: animeEasings.smoothOut,
};

export const fadeOut: AnimationConfig = {
  opacity: [1, 0],
  duration: durations.exit,
  ease: animeEasings.smoothIn,
};

export const slideUp: AnimationConfig = {
  translateY: [20, 0],
  opacity: [0, 1],
  duration: durations.enter,
  ease: animeEasings.smoothOut,
};

export const slideDown: AnimationConfig = {
  translateY: [-20, 0],
  opacity: [0, 1],
  duration: durations.enter,
  ease: animeEasings.smoothOut,
};

export const scaleIn: AnimationConfig = {
  scale: [0.9, 1],
  opacity: [0, 1],
  duration: durations.enter,
  ease: animeEasings.appleEaseOut,
};

export const bounceIn: AnimationConfig = {
  translateY: [-30, 0],
  opacity: [0, 1],
  duration: durations.slow,
  ease: animeEasings.bounce,
};

export const elasticScale: AnimationConfig = {
  scale: [0.8, 1],
  duration: durations.slow,
  ease: animeEasings.elastic,
};

export function staggerAnimation(
  targets: string | Element[] | NodeList,
  animation: AnimationConfig,
  staggerDelay: number = durations.stagger
): JSAnimation {
  const { targets: animTargets, ...params } = animation;
  return anime((targets || animTargets) as TargetsParam, {
    ...params,
    delay: stagger(staggerDelay, {start: 0}),
  });
}

export function morphAnimation(
  target: string | Element,
  from: AnimationConfig,
  to: AnimationConfig
): JSAnimation {
  const timeline = createTimeline();

  timeline
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .add(target as TargetsParam, from as Record<string, any>)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .add(target as TargetsParam, to as Record<string, any>);

  return timeline as unknown as JSAnimation;
}

export function parallaxAnimation(
  layers: Array<{ target: string | Element; speed: number }>,
  scrollProgress: number
): void {
  layers.forEach(({ target, speed }) => {
    anime(target, {
        translateY: scrollProgress * speed,
      duration: 0,
      easing: 'linear'
      });
  });
}

export function typewriterAnimation(
  target: string | Element,
  options: {
    duration?: number;
    delay?: number;
    ease?: string;
  } = {}
): JSAnimation {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element || !(element instanceof HTMLElement)) return anime({} as TargetsParam, {}) as JSAnimation;

  const text = element.textContent || '';
  element.textContent = '';
  element.style.opacity = '1';

  const chars = text.split('');
  chars.forEach((char) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.opacity = '0';
    element.appendChild(span);
  });

  return anime(element.querySelectorAll('span'), {
        opacity: [0, 1],
    duration: options.duration || 50,
    delay: stagger(options.delay || 30, {start: 0}),
    easing: options.ease || animeEasings.smoothOut
      });
}

export function magneticAnimation(
  target: string | Element,
  event: MouseEvent,
  strength: number = 0.3
): void {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element || !(element instanceof HTMLElement)) return;

  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const deltaX = (event.clientX - centerX) * strength;
  const deltaY = (event.clientY - centerY) * strength;

  anime(element, {
        translateX: deltaX,
    translateY: deltaY,
    duration: durations.fast,
    easing: animeEasings.smoothOut
      });
}

export function resetMagneticAnimation(target: string | Element): void {
  anime(target, {
        translateX: 0,
    translateY: 0,
    duration: durations.normal,
    easing: animeEasings.appleSpring
      });
}

export function pulseAnimation(
  target: string | Element,
  options: {
    scale?: number;
    duration?: number;
    loop?: boolean | number;
  } = {}
): JSAnimation {
  return anime(target, {
        scale: [1, options.scale || 1.05, 1],
    duration: options.duration || durations.slow,
    easing: animeEasings.smoothInOut,
    loop: options.loop !== undefined ? options.loop : true
      });
}

export function shimmerAnimation(
  target: string | Element,
  options: {
    duration?: number;
    delay?: number;
  } = {}
): JSAnimation {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element || !(element instanceof HTMLElement)) return anime({} as TargetsParam, {}) as JSAnimation;

  element.style.position = 'relative';
  element.style.overflow = 'hidden';

  const shimmer = document.createElement('div');
  shimmer.style.position = 'absolute';
  shimmer.style.top = '0';
  shimmer.style.left = '-100%';
  shimmer.style.width = '100%';
  shimmer.style.height = '100%';
  shimmer.style.background = 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)';
  shimmer.style.pointerEvents = 'none';
  element.appendChild(shimmer);

  return anime(shimmer, {
        left: '200%',
    duration: options.duration || durations.slowest,
    delay: options.delay || 0,
    easing: animeEasings.smoothInOut,
    loop: true
      });
}

export function glowAnimation(
  target: string | Element,
  color: string = 'rgba(0, 255, 0, 0.5)',
  options: {
    duration?: number;
    intensity?: number;
  } = {}
): JSAnimation {
  const intensity = options.intensity || 20;
  return anime(target, {
        boxShadow: [
      '0 0 0px ' + color,
      `0 0 ${intensity}px ${color}`,
      '0 0 0px ' + color,
    ],
    duration: options.duration || durations.slow,
    easing: animeEasings.smoothInOut,
    loop: true
      });
}