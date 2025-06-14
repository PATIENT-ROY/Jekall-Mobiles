import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import useSmoothScroll from "@/hooks/use-smooth-scroll";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToTop } = useSmoothScroll();

  // Show button when scrolling down 500px
  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Handle scroll to top with animation
  const handleScrollToTop = () => {
    scrollToTop({ duration: 800 });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={handleScrollToTop}
        className="bg-primary hover:bg-primary/90 text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110"
        aria-label="Revenir en haut de la page"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ScrollToTop;
