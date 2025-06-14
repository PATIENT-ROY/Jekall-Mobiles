import { useCallback } from 'react';

interface SmoothScrollOptions {
  // Duration of the scroll animation in milliseconds
  duration?: number;
  // Offset from the top in pixels
  offset?: number;
  // Callback function to run after scrolling is complete
  onComplete?: () => void;
}

/**
 * Hook for smooth scrolling to elements or positions on the page
 */
export function useSmoothScroll() {
  /**
   * Smooth scroll to a specific element on the page
   */
  const scrollToElement = useCallback(
    (element: HTMLElement | null, options: SmoothScrollOptions = {}) => {
      if (!element) return;
      
      const { duration = 800, offset = 0, onComplete } = options;
      
      const startPosition = window.pageYOffset;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;
      
      function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function for smooth animation (easeInOutCubic)
        const ease = (t: number) => 
          t < 0.5 
            ? 4 * t * t * t 
            : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        
        window.scrollTo(0, startPosition + distance * ease(progress));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else if (onComplete) {
          onComplete();
        }
      }
      
      requestAnimationFrame(animation);
    },
    []
  );

  /**
   * Smooth scroll to a specific element by its ID
   */
  const scrollToId = useCallback(
    (id: string, options: SmoothScrollOptions = {}) => {
      const element = document.getElementById(id);
      scrollToElement(element, options);
    },
    [scrollToElement]
  );

  /**
   * Smooth scroll to a section using a CSS selector
   */
  const scrollToSelector = useCallback(
    (selector: string, options: SmoothScrollOptions = {}) => {
      const element = document.querySelector(selector);
      if (element instanceof HTMLElement) {
        scrollToElement(element, options);
      }
    },
    [scrollToElement]
  );

  /**
   * Smooth scroll to a specific position on the page
   */
  const scrollToPosition = useCallback(
    (position: number, options: SmoothScrollOptions = {}) => {
      const { duration = 800, onComplete } = options;
      
      const startPosition = window.pageYOffset;
      const distance = position - startPosition;
      let startTime: number | null = null;
      
      function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function for smooth animation (easeInOutCubic)
        const ease = (t: number) => 
          t < 0.5 
            ? 4 * t * t * t 
            : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        
        window.scrollTo(0, startPosition + distance * ease(progress));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else if (onComplete) {
          onComplete();
        }
      }
      
      requestAnimationFrame(animation);
    },
    []
  );

  /**
   * Smooth scroll to the top of the page
   */
  const scrollToTop = useCallback(
    (options: SmoothScrollOptions = {}) => {
      scrollToPosition(0, options);
    },
    [scrollToPosition]
  );

  return {
    scrollToElement,
    scrollToId,
    scrollToSelector,
    scrollToPosition,
    scrollToTop
  };
}

export default useSmoothScroll;