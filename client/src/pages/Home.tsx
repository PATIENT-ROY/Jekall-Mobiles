import { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  ChevronLeft,
  ChevronRight,
  ChevronRight as ArrowRight,
  Star,
  Award,
  Shield,
  Truck,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import HomeNavigation from "@/components/HomeNavigation";
import AnimatedHeading from "@/components/AnimatedHeading";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";
import useIntersectionObserver from "@/hooks/use-intersection-observer";
import Smartphones from "@/./assets/images/categories/icon-categories/i-removebg-preview.png";
import accessories from "@/./assets/images/categories/icon-categories/accessories-icon.png";
import tablets from "@/./assets/images/categories/icon-categories/tablettes-icon.png";
import slide1 from "@/./assets/images/bannerSlides/slide5.png";
import slide2 from "@/./assets/images/bannerSlides/slide2.png";
import slide3 from "@/./assets/images/bannerSlides/slide3.png";

const bannerSlides = [
  {
    id: 1,
    image: slide1,
    title: "Smartphones Dernière Génération",
    description:
      "Découvrez notre gamme de smartphones haut de gamme à des prix compétitifs.",
  },
  {
    id: 2,
    image: slide2,
    title: "Accessoires Premium",
    description: "Complétez votre smartphone avec nos accessoires de qualité.",
  },
  {
    id: 3,
    image: slide3,
    title: "Tablettes Pour Enfants",
    description: "Éducatives et robustes pour le développement de vos enfants.",
  },
];

const categories = [
  {
    id: "smartphones",
    name: "Smartphones",
    image: Smartphones,
    link: "/catalogue",
  },
  {
    id: "accessories",
    name: "Accessoires",
    image: accessories,
    link: "/catalogue",
  },
  {
    id: "tablets",
    name: "Tablettes enfants",
    image: tablets,
    link: "/catalogue",
  },
];

const featuredProducts = [
  {
    id: "1",
    name: "iPhone 14 Pro",
    price: 999,
    image: "https://patient-roy.github.io/jekall/images/Apple/apple1.png",
    rating: 4.9,
    reviews: 128,
  },
  {
    id: "2",
    name: "Samsung Galaxy S23",
    price: 879,
    image: "https://patient-roy.github.io/jekall/images/Samsung/samsung1.png",
    rating: 4.8,
    reviews: 96,
  },
  {
    id: "3",
    name: "Google Pixel 8 Pro",
    price: 899,
    image:
      "https://patient-roy.github.io/jekall/images/google/google%20pixel%208%20pro.png",
    rating: 4.7,
    reviews: 85,
  },
  {
    id: "4",
    name: "Xiaomi 13",
    price: 599,
    image: "https://patient-roy.github.io/jekall/images/Xiaomi/Xiaomi1.png",
    rating: 4.6,
    reviews: 72,
  },
];

const benefits = [
  {
    id: "authenticity",
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Produits Authentiques",
    description:
      "Tous nos produits sont 100% authentiques et disposent d'une garantie officielle.",
  },
  {
    id: "security",
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Paiement Sécurisé",
    description:
      "Plusieurs options de paiement sécurisées disponibles pour votre tranquillité.",
  },
  {
    id: "delivery",
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: "Livraison Rapide",
    description:
      "Livraison rapide et fiable partout à Kinshasa, suivi en temps réel.",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Intersection observer for categories section
  const { ref: categoriesRef } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Auto-rotate slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length
    );
  };

  return (
    <div className="pb-16">
      {/* Home Navigation for smooth scrolling */}
      <HomeNavigation />

      {/* Slogan Banner */}
      <AnimatedSection animation="fadeUp" delay={0.2}>
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4 text-center">
            <p className="text-lg md:text-xl font-medium animated-title">
              {"Le Prix s'oublie mais la".split(" ").map((word, index) => (
                <span key={index} className="mr-1">
                  {word}
                </span>
              ))}
              <span className="text-primary font-semibold mr-1">Qualité</span>
              {"reste et assure".split(" ").map((word, index) => (
                <span key={index + 5} className="mr-1">
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Hero Slider */}
      <AnimatedSection animation="fadeIn" delay={0.3}>
        <div className="relative bg-neutral-dark overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out h-[400px] md:h-[500px]"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {bannerSlides.map((slide) => (
              <div key={slide.id} className="min-w-full relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover opacity-70"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://via.placeholder.com/1200x500?text=Image+Non+Disponible";
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                  <div className="bg-black/40 p-6 md:p-8 rounded-xl backdrop-blur-sm max-w-2xl">
                    <AnimatedHeading
                      variant="h2"
                      animation="bounce"
                      delay={0.1}
                      className="text-3xl md:text-4xl font-bold mb-4 text-white"
                    >
                      {slide.title}
                    </AnimatedHeading>
                    <p className="text-lg text-white/90 mb-6">
                      {slide.description}
                    </p>
                    <Link
                      href="/catalogue"
                      className="inline-block bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      Découvrir
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-0.5 sm:space-x-1">
            {bannerSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-1 h-1 sm:w-2 sm:h-2 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Categories Section */}
      <AnimatedSection
        id="categories"
        ref={categoriesRef}
        animation="fadeUp"
        delay={0.4}
        className="py-16 bg-neutral-light"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimatedHeading
              variant="h2"
              animation="slide"
              delay={0.2}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Nos Catégories
            </AnimatedHeading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez notre large gamme de produits technologiques de qualité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <AnimatedCard
                key={category.id}
                animation="scale"
                delay={0.1 * index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://via.placeholder.com/48x48?text=Icon";
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <Link
                  href={category.link}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-all duration-300 transform hover:scale-105 hover:translate-x-1 group"
                  onClick={(e) => {
                    e.preventDefault();
                    // Smooth scroll to catalogue page
                    window.location.href = category.link;
                  }}
                >
                  Voir les produits
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Products Section */}
      <AnimatedSection
        id="featured-products"
        animation="slideUp"
        delay={0.5}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimatedHeading
              variant="h2"
              animation="flip"
              delay={0.3}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Produits Populaires
            </AnimatedHeading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les smartphones les plus demandés par nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <AnimatedCard
                key={product.id}
                animation="bounce"
                delay={0.1 * index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-4 flex justify-center h-48 bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://via.placeholder.com/300x300?text=Image+Non+Disponible";
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 text-sm text-gray-700">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 ml-2">
                      ({product.reviews} avis)
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <span className="font-bold text-lg">${product.price}</span>
                    <a
                      href={`https://wa.me/+243814264458?text=Bonjour!%20Je%20voudrais%20commander%20un%20${encodeURIComponent(
                        product.name
                      )}.`}
                      className="bg-whatsapp hover:bg-whatsapp/90 text-white p-2 rounded-lg transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection
        id="benefits"
        animation="stagger"
        delay={0.6}
        staggerChildren={true}
        className="py-16 bg-neutral-light"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimatedHeading
              variant="h2"
              animation="fade"
              delay={0.4}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Pourquoi Nous Choisir
            </AnimatedHeading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Votre confiance est notre priorité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedCard
                key={benefit.id}
                animation="fadeUp"
                delay={0.1 * index}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection
        id="contact"
        animation="scaleIn"
        delay={0.7}
        className="py-16 bg-neutral-dark text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <AnimatedHeading
            variant="h2"
            animation="bounce"
            delay={0.5}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Prêt à Découvrir Nos Produits?
          </AnimatedHeading>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Vous avez des questions ou besoin de conseils? Notre équipe est
            prête à vous aider.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/catalogue"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium text-lg min-w-[200px] transform hover:scale-105"
            >
              Voir nos produits
            </Link>
            <a
              href="https://wa.me/+243814264458"
              className="bg-whatsapp hover:bg-whatsapp/90 text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium text-lg flex items-center justify-center min-w-[200px] transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="mr-2 text-xl" /> Nous contacter
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
