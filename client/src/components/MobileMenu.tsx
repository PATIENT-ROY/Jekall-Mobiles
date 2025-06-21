import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "./logo";
import ScrollLink from "./ScrollLink";
import { useCart } from "@/context/CartContext";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenu = ({ isOpen, onToggle }: MobileMenuProps) => {
  const [location] = useLocation();
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <button
        className="xl:hidden p-1.5 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-110"
        onClick={onToggle}
        aria-label="Menu"
      >
        {isOpen ? (
          <X className="h-5 w-5 transition-all duration-300 rotate-180" />
        ) : (
          <Menu className="h-5 w-5 transition-all duration-300" />
        )}
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`xl:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-500 ease-out ${
          isOpen
            ? "opacity-100 backdrop-blur-md"
            : "opacity-0 pointer-events-none backdrop-blur-none"
        }`}
        onClick={onToggle}
      >
        <div
          className={`bg-neutral-dark h-full w-4/5 max-w-xs shadow-2xl p-3 sm:p-5 transition-all duration-500 ease-out flex flex-col ${
            isOpen
              ? "translate-x-0 shadow-2xl"
              : "-translate-x-full shadow-none"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with slide-in animation */}
          <div
            className={`flex items-center justify-between mb-4 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-700 flex-shrink-0 transition-all duration-700 ease-out ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <Logo className="text-white text-sm sm:text-base transition-all duration-500 hover:scale-105" />
            <button
              className="p-1.5 text-white hover:bg-white/10 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-90"
              onClick={onToggle}
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300" />
            </button>
          </div>

          {/* Navigation Content - Scrollable with staggered animations */}
          <nav className="flex-1 overflow-y-auto">
            <ul className="space-y-3 sm:space-y-5">
              {/* Home section links with smooth scrolling - only on homepage */}
              {location === "/" && (
                <>
                  <li
                    className={`transition-all duration-500 ease-out ${
                      isOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`}
                    style={{ transitionDelay: "100ms" }}
                  >
                    <ScrollLink
                      href="#categories"
                      className="flex items-center py-2 font-medium transition-all duration-300 text-white hover:text-accent hover:bg-white/5 rounded-lg px-2 transform hover:scale-105"
                      onClick={onToggle}
                    >
                      <span className="text-base sm:text-lg">Catégories</span>
                    </ScrollLink>
                  </li>
                  <li
                    className={`transition-all duration-500 ease-out ${
                      isOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`}
                    style={{ transitionDelay: "200ms" }}
                  >
                    <ScrollLink
                      href="#featured-products"
                      className="flex items-center py-2 font-medium transition-all duration-300 text-white hover:text-accent hover:bg-white/5 rounded-lg px-2 transform hover:scale-105"
                      onClick={onToggle}
                    >
                      <span className="text-base sm:text-lg">
                        Produits Populaires
                      </span>
                    </ScrollLink>
                  </li>
                  <li
                    className={`transition-all duration-500 ease-out ${
                      isOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`}
                    style={{ transitionDelay: "300ms" }}
                  >
                    <ScrollLink
                      href="#benefits"
                      className="flex items-center py-2 font-medium transition-all duration-300 text-white hover:text-accent hover:bg-white/5 rounded-lg px-2 transform hover:scale-105"
                      onClick={onToggle}
                    >
                      <span className="text-base sm:text-lg">
                        Pourquoi Nous
                      </span>
                    </ScrollLink>
                  </li>
                  <li
                    className={`transition-all duration-500 ease-out ${
                      isOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`}
                    style={{ transitionDelay: "400ms" }}
                  >
                    <ScrollLink
                      href="#contact"
                      className="flex items-center py-2 font-medium transition-all duration-300 text-white hover:text-accent hover:bg-white/5 rounded-lg px-2 transform hover:scale-105"
                      onClick={onToggle}
                    >
                      <span className="text-base sm:text-lg">Contact</span>
                    </ScrollLink>
                  </li>
                </>
              )}

              {/* Regular page links */}
              <li
                className={`transition-all duration-500 ease-out ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <Link
                  href="/catalogue"
                  className={`flex items-center py-2 font-medium transition-all duration-300 ${
                    location === "/catalogue"
                      ? "text-accent bg-accent/10 rounded-lg px-2"
                      : "text-white hover:text-accent hover:bg-white/5 rounded-lg px-2"
                  } transform hover:scale-105`}
                  onClick={onToggle}
                >
                  <span className="text-base sm:text-lg">Catalogue</span>
                </Link>
              </li>
              <li
                className={`transition-all duration-500 ease-out ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <Link
                  href="/a-propos"
                  className={`flex items-center py-2 font-medium transition-all duration-300 ${
                    location === "/a-propos"
                      ? "text-accent bg-accent/10 rounded-lg px-2"
                      : "text-white hover:text-accent hover:bg-white/5 rounded-lg px-2"
                  } transform hover:scale-105`}
                  onClick={onToggle}
                >
                  <span className="text-base sm:text-lg">À propos</span>
                </Link>
              </li>
              <li
                className={`transition-all duration-500 ease-out ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "700ms" }}
              >
                <Link
                  href="/adresse"
                  className={`flex items-center py-2 font-medium transition-all duration-300 ${
                    location === "/adresse"
                      ? "text-accent bg-accent/10 rounded-lg px-2"
                      : "text-white hover:text-accent hover:bg-white/5 rounded-lg px-2"
                  } transform hover:scale-105`}
                  onClick={onToggle}
                >
                  <span className="text-base sm:text-lg">Adresse</span>
                </Link>
              </li>
              <li
                className={`transition-all duration-500 ease-out ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                <Link
                  href="/panier"
                  className="flex items-center justify-between py-2 text-white hover:text-accent transition-all duration-300 font-medium hover:bg-white/5 rounded-lg px-2 transform hover:scale-105"
                  onClick={onToggle}
                >
                  <span className="text-base sm:text-lg">Panier</span>
                  {totalItems > 0 && (
                    <span className="bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-xs animate-pulse">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </li>

              {/* WhatsApp Button - Compact for small screens with bounce animation */}
              <li
                className={`pt-2 sm:pt-4 transition-all duration-500 ease-out ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "900ms" }}
              >
                <a
                  href="https://wa.me/+243814264458"
                  className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white py-2.5 sm:py-3 rounded-lg transition-all duration-300 flex items-center justify-center font-medium shadow-lg transform hover:scale-105 hover:shadow-xl"
                  onClick={onToggle}
                >
                  <FaWhatsapp className="mr-2 text-base sm:text-lg animate-bounce" />
                  <span className="hidden xs:inline">
                    Commander via WhatsApp
                  </span>
                  <span className="xs:hidden">WhatsApp</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Footer - Fixed at bottom with fade-in animation */}
          <div
            className={`flex-shrink-0 p-3 sm:p-6 text-white/70 text-xs sm:text-sm border-t border-gray-700 mt-4 transition-all duration-700 ease-out ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <p className="mb-1">© {new Date().getFullYear()} Jekall Mobiles</p>
            <p className="hidden sm:block">
              Votre destination premium pour les smartphones et accessoires
            </p>
            <p className="sm:hidden">Votre destination premium</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
