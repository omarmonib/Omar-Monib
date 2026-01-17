import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge tailwind CSS classes
 * Combines clsx and tailwind-merge for safe class composition
 *
 * @param inputs - Class values to merge
 * @returns Merged class string
 *
 * @example
 * cn('px-2', 'px-4') // => 'px-4'
 * cn('text-red-500', { 'text-blue-500': true }) // => 'text-blue-500'
 */
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};
