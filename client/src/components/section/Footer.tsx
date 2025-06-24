import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaChevronRight,
} from "react-icons/fa";
import ScrollLink from "../ScrollLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src="https://patient-roy.github.io/jekall/images/icon-categories/i-removebg-preview.png"
                alt="Jekall Mobiles Logo"
                className="h-10 w-auto mr-2"
              />
              <span className="text-xl font-poppins font-semibold">
                Jekall Mobiles
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Votre destination premium pour les smartphones et accessoires
              mobiles de qualité à des prix compétitifs.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-[#1877F2]/20 hover:bg-[#1877F2] text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-[#E1306C]/20 hover:bg-[#E1306C] text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/+243814264458"
                className="bg-[#25D366]/20 hover:bg-[#25D366] text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              <span className="relative z-10">Liens Rapides</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-primary flex items-center transition-colors duration-300"
                >
                  <FaChevronRight className="h-3 w-3 mr-2" /> Accueil
                </Link>
              </li>
              {/* Section links with smooth scrolling */}
              <li>
                <ScrollLink
                  href="/#categories"
                  className="text-gray-400 hover:text-primary flex items-center transition-colors duration-300"
                >
                  <FaChevronRight className="h-3 w-3 mr-2" /> Catégories
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  href="/#featured-products"
                  className="text-gray-400 hover:text-primary flex items-center transition-colors duration-300"
                >
                  <FaChevronRight className="h-3 w-3 mr-2" /> Produits
                  Populaires
                </ScrollLink>
              </li>
              {/* Regular page links */}
              <li>
                <Link
                  href="/catalogue"
                  className="text-gray-400 hover:text-primary flex items-center transition-colors duration-300"
                >
                  <FaChevronRight className="h-3 w-3 mr-2" /> Catalogue
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="text-gray-400 hover:text-primary flex items-center transition-colors duration-300"
                >
                  <FaChevronRight className="h-3 w-3 mr-2" /> À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/adresse"
                  className="text-gray-400 hover:text-primary flex items-center transition-colors duration-300"
                >
                  <FaChevronRight className="h-3 w-3 mr-2" /> Contact
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary flex items-center transition-colors duration-300"
                >
                  <FaChevronRight className="h-3 w-3 mr-2" /> Politique de
                  confidentialité
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary flex items-center transition-colors duration-300"
                >
                  <FaChevronRight className="h-3 w-3 mr-2" /> Conditions
                  d'utilisation
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              <span className="relative z-10">Catégories</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/catalogue"
                  className="text-gray-400 hover:text-primary flex items-center transition-colors duration-300"
                >
                  <FaChevronRight className="h-3 w-3 mr-2" /> Smartphones
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogue?category=accessories"
                  className="text-gray-400 hover:text-primary flex items-center transition-colors duration-300"
                >
                  <FaChevronRight className="h-3 w-3 mr-2" /> Accessoires
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogue?category=tablets"
                  className="text-gray-400 hover:text-primary flex items-center transition-colors duration-300"
                >
                  <FaChevronRight className="h-3 w-3 mr-2" /> Tablettes enfants
                </Link>
              </li>
              <li>
                <ScrollLink
                  href="/#benefits"
                  className="text-gray-400 hover:text-primary flex items-center transition-colors duration-300"
                >
                  <FaChevronRight className="h-3 w-3 mr-2" /> Pourquoi Nous
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  href="/#contact"
                  className="text-gray-400 hover:text-primary flex items-center transition-colors duration-300"
                >
                  <FaChevronRight className="h-3 w-3 mr-2" /> Contact
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative">
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Galerie Couloir Céleste Jacque Barron 100, Kinshasa Gombe, Rep
                  Dem du Congo
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-400">+243 814 264 458</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-400">contact@jekallmobiles.com</span>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  Lun - Ven: 08:00 - 17:00
                  <br />
                  Sam: 09:00 - 16:30
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        {/* <div className="bg-neutral-dark/50 border border-gray-700 rounded-xl p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-2">
                Abonnez-vous à notre newsletter
              </h3>
              <p className="text-gray-400">
                Recevez nos dernières offres et nouvelles directement dans votre
                boîte mail.
              </p>
            </div>
            <div>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-grow py-3 px-4 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary border-0"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-r-lg transition-colors duration-300"
                >
                  S'abonner
                </button>
              </form>
            </div>
          </div>
        </div> */}

        {/* Bottom Footer / Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Jekall Mobiles. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              Site développé by{" "}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Roy
              </a>
              <span className="text-red-500">dev</span>
            </p>
            {/* <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300"
              >
                Politique de confidentialité
              </a>
              <span className="text-gray-700">|</span>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300"
              >
                Conditions d'utilisation
              </a>
              <span className="text-gray-700">|</span>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300"
              >
                FAQ
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
