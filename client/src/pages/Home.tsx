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
import useIntersectionObserver from "@/hooks/use-intersection-observer";

const bannerSlides = [
  {
    id: 1,
    image: "https://patient-roy.github.io/jekall/images/slider/slide1.png",
    title: "Smartphones Dernière Génération",
    description:
      "Découvrez notre gamme de smartphones haut de gamme à des prix compétitifs.",
  },
  {
    id: 2,
    image: "https://patient-roy.github.io/jekall/images/slider/slide2.png",
    title: "Accessoires Premium",
    description: "Complétez votre smartphone avec nos accessoires de qualité.",
  },
  {
    id: 3,
    image: "https://patient-roy.github.io/jekall/images/slider/slide3.png",
    title: "Tablettes Pour Enfants",
    description: "Éducatives et robustes pour le développement de vos enfants.",
  },
];

const categories = [
  {
    id: "smartphones",
    name: "Smartphones",
    image:
      "https://patient-roy.github.io/jekall/images/icon-categories/i-removebg-preview.png",
    link: "/catalogue",
  },
  {
    id: "accessories",
    name: "Accessoires",
    image:
      "https://patient-roy.github.io/jekall/images/icon-categories/accessories-icon.png",
    link: "/catalogue",
  },
  {
    id: "tablets",
    name: "Tablettes enfants",
    image:
      "https://patient-roy.github.io/jekall/images/icon-categories/image.png",
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
  const { ref: categoriesRef, isIntersecting: categoriesInView } =
    useIntersectionObserver({
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

      {/* Hero Slider */}
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
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                <div className="bg-black/40 p-6 md:p-8 rounded-xl backdrop-blur-sm max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    {slide.title}
                  </h2>
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
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200"
          onClick={prevSlide}
          aria-label="Slide précédente"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200"
          onClick={nextSlide}
          aria-label="Slide suivante"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-primary" : "w-2 bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Aller au slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <section
        id="categories"
        ref={categoriesRef}
        className="py-16 bg-white overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <div className="relative">
              <h2
                className={`text-2xl md:text-3xl font-bold transition-all duration-800 ${
                  categoriesInView
                    ? "animate-fade-in-up"
                    : "opacity-0 translate-y-8"
                }`}
              >
                Nos Catégories
              </h2>
              <div
                className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 delay-500 ${
                  categoriesInView ? "w-16 opacity-100" : "w-0 opacity-0"
                }`}
              ></div>
            </div>
            <Link
              href="/catalogue"
              className={`text-secondary hover:text-secondary/80 font-medium flex items-center group transition-all duration-600 delay-300 ${
                categoriesInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-5"
              }`}
            >
              Voir tout
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={category.link}
                className={`relative bg-gradient-to-br from-neutral-light to-neutral-light/80 hover:from-white hover:to-neutral-light/50 p-8 rounded-2xl transition-all duration-700 flex flex-col items-center text-center group hover:shadow-xl border border-transparent hover:border-primary/20 ${
                  categoriesInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: categoriesInView
                    ? `${600 + index * 150}ms`
                    : "0ms",
                }}
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating Animation Container */}
                <div className="relative z-10 h-24 w-24 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                  {/* Icon Background with Pulse */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full animate-pulse-slow group-hover:animate-none"></div>

                  {/* Icon with Bounce Animation */}
                  <div className="relative h-full w-full flex items-center justify-center">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-16 w-auto object-contain transition-all duration-500 group-hover:brightness-110 animate-bounce-gentle"
                    />
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary/30 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-2 -left-1 w-1.5 h-1.5 bg-secondary/40 rounded-full animate-float-delayed opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Text with Slide Animation */}
                <div className="relative z-10 transition-all duration-300 group-hover:translate-y-1">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </h3>

                  {/* Animated Underline */}
                  <div className="w-0 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-2 transition-all duration-500 group-hover:w-12"></div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured-products" className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              Produits Populaires
            </h2>
            <Link
              href="/catalogue"
              className="text-secondary hover:text-secondary/80 font-medium flex items-center"
            >
              Voir tout <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-4 flex justify-center h-48 bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Pourquoi Nous Choisir?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="text-center p-6 rounded-xl hover:bg-neutral-light transition-colors duration-300"
              >
                <div className="bg-neutral-light h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-12 bg-neutral-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Besoin d'assistance?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Contactez-nous directement via WhatsApp pour une réponse rapide à
            toutes vos questions.
          </p>
          <a
            href="https://wa.me/+243814264458"
            className="inline-flex items-center bg-whatsapp hover:bg-whatsapp/90 text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mr-2 text-xl" /> Contacter sur WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
