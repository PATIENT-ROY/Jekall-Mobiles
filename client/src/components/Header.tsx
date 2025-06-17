import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "./logo";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import CartDropdown from "./CartDropdown";
import ScrollLink from "./ScrollLink";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-neutral-dark text-white shadow-lg transition-all duration-300 ${
        isScrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <div className="xl:hidden mr-4">
              <MobileMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
            </div>
            <Logo className="hover:opacity-90 transition-opacity duration-200" />
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 mx-6">
            <SearchBar className="w-full max-w-2xl" />
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden xl:flex items-center space-x-5">
            {/* Home Links with smooth scrolling to sections */}
            {location === "/" && (
              <>
                <ScrollLink
                  href="#categories"
                  className="relative font-medium hover:text-accent transition-colors duration-200"
                >
                  Catégories
                </ScrollLink>
                <ScrollLink
                  href="#featured-products"
                  className="relative font-medium hover:text-accent transition-colors duration-200"
                >
                  Produits
                </ScrollLink>
              </>
            )}

            {/* Regular navigation links */}
            <Link
              href="/catalogue"
              className={`relative font-medium hover:text-accent transition-colors duration-200 
                ${
                  location === "/catalogue"
                    ? "text-accent after:absolute after:left-0 after:bottom-[-6px] after:h-[3px] after:w-full after:bg-accent after:rounded-full"
                    : ""
                }`}
            >
              Catalogue
            </Link>
            <Link
              href="/a-propos"
              className={`relative font-medium hover:text-accent transition-colors duration-200 
                ${
                  location === "/a-propos"
                    ? "text-accent after:absolute after:left-0 after:bottom-[-6px] after:h-[3px] after:w-full after:bg-accent after:rounded-full"
                    : ""
                }`}
            >
              À propos
            </Link>
            <Link
              href="/adresse"
              className={`relative font-medium hover:text-accent transition-colors duration-200 
                ${
                  location === "/adresse"
                    ? "text-accent after:absolute after:left-0 after:bottom-[-6px] after:h-[3px] after:w-full after:bg-accent after:rounded-full"
                    : ""
                }`}
            >
              Adresse
            </Link>

            <div className="ml-2">
              <CartDropdown />
            </div>

            <a
              href="https://wa.me/+243814264458"
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="mr-1" /> Commander
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Search (Only visible on mobile and tablet) */}
      <div className="lg:hidden px-4 pb-3 pt-2">
        <SearchBar mobile={true} />
      </div>
    </header>
  );
};

export default Header;
