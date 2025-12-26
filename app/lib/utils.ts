import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Use any type to avoid SSR issues with GSAP types
let globalSmoother: any = null;

export const setGlobalSmoother = (smoother: ScrollSmoother | null) => {
  globalSmoother = smoother;
};

export const getGlobalSmoother = (): ScrollSmoother | null => {
  return globalSmoother;
};

// Utility functions for smooth scroll control
export const scrollTo = (
  target: number | string | Element,
  options: { offset?: number; duration?: number; easing?: string } = {}
) => {
  if (globalSmoother) {
    globalSmoother.scrollTo(target as any, options as any);
  }
};

export const scrollToTop = () => {
  if (globalSmoother) {
    globalSmoother.scrollTo(0);
  }
};

export const scrollToBottom = () => {
  if (globalSmoother) {
    globalSmoother.scrollTo("100%");
  }
};
