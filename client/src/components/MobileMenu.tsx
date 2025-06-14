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
        className="md:hidden p-1.5 rounded-full hover:bg-white/10 transition-colors duration-200"
        onClick={onToggle}
        aria-label="Menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onToggle}
      >
        <div
          className={`bg-neutral-dark h-full w-4/5 max-w-xs shadow-xl p-5 transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-700">
            <Logo className="text-white" />
            <button
              className="p-1.5 text-white hover:bg-white/10 rounded-full"
              onClick={onToggle}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav>
            <ul className="space-y-5">
              {/* Home section links with smooth scrolling - only on homepage */}
              {location === "/" && (
                <>
                  <li>
                    <ScrollLink
                      href="#categories"
                      className="flex items-center py-2 font-medium transition-colors duration-200 text-white hover:text-accent"
                      onClick={onToggle}
                    >
                      <span className="text-lg">Catégories</span>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      href="#featured-products"
                      className="flex items-center py-2 font-medium transition-colors duration-200 text-white hover:text-accent"
                      onClick={onToggle}
                    >
                      <span className="text-lg">Produits Populaires</span>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      href="#benefits"
                      className="flex items-center py-2 font-medium transition-colors duration-200 text-white hover:text-accent"
                      onClick={onToggle}
                    >
                      <span className="text-lg">Pourquoi Nous</span>
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      href="#contact"
                      className="flex items-center py-2 font-medium transition-colors duration-200 text-white hover:text-accent"
                      onClick={onToggle}
                    >
                      <span className="text-lg">Contact</span>
                    </ScrollLink>
                  </li>
                </>
              )}

              {/* Regular page links */}
              <li>
                <Link
                  href="/catalogue"
                  className={`flex items-center py-2 font-medium transition-colors duration-200 ${
                    location === "/catalogue"
                      ? "text-accent"
                      : "text-white hover:text-accent"
                  }`}
                  onClick={onToggle}
                >
                  <span className="text-lg">Catalogue</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className={`flex items-center py-2 font-medium transition-colors duration-200 ${
                    location === "/a-propos"
                      ? "text-accent"
                      : "text-white hover:text-accent"
                  }`}
                  onClick={onToggle}
                >
                  <span className="text-lg">À propos</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/adresse"
                  className={`flex items-center py-2 font-medium transition-colors duration-200 ${
                    location === "/adresse"
                      ? "text-accent"
                      : "text-white hover:text-accent"
                  }`}
                  onClick={onToggle}
                >
                  <span className="text-lg">Adresse</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/panier"
                  className="flex items-center justify-between py-2 text-white hover:text-accent transition-colors duration-200 font-medium"
                  onClick={onToggle}
                >
                  <span className="text-lg">Panier</span>
                  {totalItems > 0 && (
                    <span className="bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </li>
              <li className="pt-4">
                <a
                  href="https://wa.me/+243814264458"
                  className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white py-3 rounded-lg transition-all duration-200 flex items-center justify-center font-medium shadow-sm"
                  onClick={onToggle}
                >
                  <FaWhatsapp className="mr-2 text-lg" /> Commander via WhatsApp
                </a>
              </li>
            </ul>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-6 text-white/70 text-sm border-t border-gray-700 mt-auto">
            <p className="mb-1">© {new Date().getFullYear()} Jekall Mobiles</p>
            <p>Votre destination premium pour les smartphones et accessoires</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
