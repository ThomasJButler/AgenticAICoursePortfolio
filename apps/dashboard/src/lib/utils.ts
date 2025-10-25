/**
 * @author Tom Butler
 * @date 2025-10-25
 * @description Utility functions for className merging and styling
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges className strings with Tailwind CSS conflict resolution
 * Combines clsx for conditional classes with twMerge for Tailwind specificity
 * @param {ClassValue[]} inputs - Variable number of className values (strings, objects, arrays)
 * @return {string} Merged and resolved className string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}