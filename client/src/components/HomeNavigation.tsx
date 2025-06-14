import { useState, useEffect } from "react";
import useSmoothScroll from "@/hooks/use-smooth-scroll";

interface NavigationItem {
  id: string;
  label: string;
}

const navigationItems: NavigationItem[] = [
  { id: "categories", label: "Catégories" },
  { id: "featured-products", label: "Produits Populaires" },
  { id: "benefits", label: "Pourquoi Nous" },
  { id: "contact", label: "Contact" },
];

const HomeNavigation = () => {
  const [activeSection, setActiveSection] = useState<string>("categories");
  const [showNav, setShowNav] = useState<boolean>(false);
  const { scrollToId } = useSmoothScroll();

  // Handle scroll to section
  const handleScrollToSection = (id: string) => {
    scrollToId(id, { offset: 80 }); // Offset to account for sticky header
    setActiveSection(id);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better UX

      // Check if we should show the navigation
      if (scrollPosition > 300) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }

      // Determine which section is in view
      for (const section of navigationItems) {
        const element = document.getElementById(section.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const isInView = top < window.innerHeight / 2 && bottom > 0;

          if (isInView) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showNav) return null;

  return (
    <div className="fixed left-1/2 bottom-8 -translate-x-1/2 bg-white shadow-lg rounded-full z-40 p-1.5 overflow-hidden transition-all duration-500 transform">
      <div className="flex space-x-1">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScrollToSection(item.id)}
            className={`py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
              activeSection === item.id
                ? "bg-primary text-white"
                : "hover:bg-gray-100"
            }`}
            aria-current={activeSection === item.id ? "page" : undefined}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeNavigation;
