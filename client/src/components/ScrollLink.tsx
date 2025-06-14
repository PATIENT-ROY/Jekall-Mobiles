import React from "react";
import useSmoothScroll from "@/hooks/use-smooth-scroll";
import { useLocation, useRoute } from "wouter";

interface ScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  offset?: number;
  onClick?: () => void;
}

/**
 * Component for handling smooth scrolling to sections on the same page
 * or navigating to sections on different pages
 */
const ScrollLink: React.FC<ScrollLinkProps> = ({
  href,
  children,
  className = "",
  activeClassName = "",
  offset = 80,
  onClick,
}) => {
  const { scrollToId } = useSmoothScroll();
  const [location, setLocation] = useLocation();
  const [isActive] = useRoute(href.split("#")[0] || "/");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const [path, hash] = href.split("#");

    // If it's a link to another page
    if (path && path !== "/" && path !== location) {
      // Normal navigation, let the browser handle it
      if (!hash) return;

      // Navigate to the new page and remember the hash
      setLocation(path);

      // We'll handle the scrolling after page load via useEffect in SmoothScrollProvider
      return;
    }

    // If it's a hash link on the same page
    if (hash) {
      e.preventDefault();
      scrollToId(hash, { offset });

      // Update URL without a page reload
      if (typeof window !== "undefined") {
        window.history.pushState(null, "", `${path || ""}#${hash}`);
      }
    }

    // Call the onClick handler if provided
    if (onClick) onClick();
  };

  return (
    <a
      href={href}
      className={`${className} ${isActive ? activeClassName : ""}`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default ScrollLink;
