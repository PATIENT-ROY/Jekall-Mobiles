import React, { useEffect, ReactNode } from "react";
import { useLocation } from "wouter";
import useSmoothScroll from "@/hooks/use-smooth-scroll";

interface SmoothScrollProviderProps {
  children: ReactNode;
  offset?: number;
}

/**
 * Component to handle smooth scrolling within the application.
 * It adds smooth scrolling behavior to anchor links and handles navigation based on hash.
 */
const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({
  children,
  offset = 80, // Default offset to account for fixed headers
}) => {
  const { scrollToId } = useSmoothScroll();
  const [location] = useLocation();

  // Handle click events on all anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (!anchor) return;

      // Check if the link is an internal anchor link
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const id = href.substring(1);
      if (!id) return;

      e.preventDefault();

      // Scroll to the element with smooth animation
      scrollToId(id, { offset, duration: 800 });

      // Update URL without reloading the page
      window.history.pushState(null, "", href);
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [scrollToId, offset]);

  // Handle initial page load with hash in URL
  useEffect(() => {
    if (location.includes("#")) {
      const id = location.split("#")[1];
      if (id) {
        // Small delay to ensure the page is fully loaded
        setTimeout(() => {
          scrollToId(id, { offset, duration: 800 });
        }, 300);
      }
    }
  }, [location, scrollToId, offset]);

  return <>{children}</>;
};

export default SmoothScrollProvider;
