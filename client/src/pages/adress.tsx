import { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  NavigationIcon,
  Calendar,
} from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import AnimatedHeading from "@/components/AnimatedHeading";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCard from "@/components/AnimatedCard";

const storeLocations = [
  {
    id: "main",
    name: "Boutique Principale",
    address:
      "Galerie Couloir Céleste Jacque Barron 100, Kinshasa Gombe, Rep Dem du Congo",
    reference: "Reference: Arme du Salut MEMLING",
    phone: "+243 814 264 458",
    email: "contact@jekallmobiles.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126913.48486178357!2d15.2234578!3d-4.3279519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3130fe066aad%3A0x168b7e4d030a6f1!2sKinshasa%2C%20Democratic%20Republic%20of%20the%20Congo!5e0!3m2!1sen!2sus!4v1658930457118!5m2!1sen!2sus",
  },
];

const openingHours = [
  { day: "Lundi", hours: "08:00-17:00", isOpen: true },
  { day: "Mardi", hours: "08:00-17:00", isOpen: true },
  { day: "Mercredi", hours: "08:00-17:00", isOpen: true },
  { day: "Jeudi", hours: "08:00-17:00", isOpen: true },
  { day: "Vendredi", hours: "08:00-17:00", isOpen: true },
  { day: "Samedi", hours: "09:00-16:30", isOpen: true },
  { day: "Dimanche", hours: "Fermé", isOpen: false },
];

const faqs = [
  {
    question: "Proposez-vous un service de livraison?",
    answer:
      "Oui, nous offrons un service de livraison fiable partout à Kinshasa, généralement en moins de 24h. Des frais peuvent s'appliquer selon la distance.",
  },
  {
    question: "Quels sont vos modes de paiement acceptés?",
    answer:
      "Nous acceptons les paiements en espèces, par mobile money, et par virement bancaire. Pour les grands achats, des facilités de paiement peuvent être proposées.",
  },
  {
    question: "Offrez-vous une garantie sur vos produits?",
    answer:
      "Absolument! Tous nos produits sont couverts par une garantie officielle du fabricant. Les conditions varient selon les marques, généralement entre 12 et 24 mois.",
  },
];

const Address = () => {
  const currentLocation = storeLocations[0];
  const [activeDay, setActiveDay] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update current time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // Get current day index (0 = Sunday in JS but 6 in our array)
  const today = currentTime.getDay();
  const dayIndex = today === 0 ? 6 : today - 1;

  // Initialize active day to current day
  useEffect(() => {
    setActiveDay(dayIndex);
  }, [dayIndex]);

  // Get current status (open/closed)
  const getCurrentStatus = () => {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const currentTimeValue = hours + minutes / 60;

    // Sunday is closed
    if (today === 0) return { isOpen: false, text: "Fermé" };

    // Saturday hours: 9:00-16:30
    if (today === 6) {
      if (currentTimeValue >= 9 && currentTimeValue < 16.5) {
        return { isOpen: true, text: "Ouvert" };
      }
      return { isOpen: false, text: "Fermé" };
    }

    // Weekdays (1-5) hours: 8:00-17:00
    if (currentTimeValue >= 8 && currentTimeValue < 17) {
      return { isOpen: true, text: "Ouvert" };
    }

    return { isOpen: false, text: "Fermé" };
  };

  const status = getCurrentStatus();

  // Format time in 24h format
  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className="bg-neutral-light min-h-screen pb-16">
      {/* Page Header */}
      <AnimatedSection animation="fadeUp" delay={0.2}>
        <div className="bg-neutral-dark text-white py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedHeading
                variant="h1"
                animation="bounce"
                delay={0.3}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Notre Adresse
              </AnimatedHeading>
              <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-white/90">
                Venez nous rendre visite à notre boutique ou contactez-nous
                directement. Nous sommes à votre service.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fadeIn" delay={0.4}>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Store Information */}
            <div className="md:col-span-1 space-y-6">
              {/* Location Card */}
              <AnimatedCard animation="slide" delay={0.1}>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-neutral-light inline-flex p-3 rounded-xl mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold mb-4">
                    {currentLocation.name}
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700">
                          {currentLocation.address}
                        </p>
                        <p className="text-gray-500 mt-1 text-sm">
                          {currentLocation.reference}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{currentLocation.phone}</p>
                    </div>

                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{currentLocation.email}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h3 className="font-medium mb-3 flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      <span>
                        Heures actuelles:{" "}
                        <span className="text-gray-500">
                          {formatTime(currentTime)}
                        </span>
                      </span>
                    </h3>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">Statut:</span>
                      <span
                        className={`${
                          status.isOpen
                            ? "bg-status-success"
                            : "bg-status-error"
                        } text-white text-xs py-1 px-2 rounded-full`}
                      >
                        {status.text}
                      </span>
                    </div>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        currentLocation.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-secondary hover:text-secondary/80 font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      <NavigationIcon className="h-4 w-4 mr-1" /> Voir
                      l'itinéraire
                    </a>
                  </div>
                </div>
              </AnimatedCard>

              {/* Hours Card */}
              <AnimatedCard animation="slide" delay={0.2}>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-neutral-light inline-flex p-3 rounded-xl mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold mb-4">
                    Heures d'ouverture
                  </h2>

                  <div className="space-y-2">
                    {openingHours.map((day, index) => (
                      <div
                        key={day.day}
                        className={`flex justify-between items-center p-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                          activeDay === index
                            ? "bg-primary/5 border border-primary/20"
                            : ""
                        } ${dayIndex === index ? "font-medium" : ""}`}
                        onClick={() =>
                          setActiveDay(index === activeDay ? null : index)
                        }
                      >
                        <div className="flex items-center">
                          {dayIndex === index && (
                            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          )}
                          <span>{day.day}</span>
                        </div>
                        <span
                          className={`${
                            day.isOpen ? "text-gray-700" : "text-gray-500"
                          }`}
                        >
                          {day.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedCard>

              {/* Contact Actions */}
              <AnimatedCard animation="slide" delay={0.3}>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-xl font-semibold mb-4">Nous contacter</h2>

                  <div className="space-y-3">
                    <a
                      href={`tel:${currentLocation.phone.replace(/\s+/g, "")}`}
                      className="flex items-center justify-center w-full bg-secondary hover:bg-secondary/90 text-white py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      <Phone className="h-5 w-5 mr-2" /> Appeler maintenant
                    </a>

                    <a
                      href={`https://wa.me/${currentLocation.phone.replace(
                        /\s+/g,
                        ""
                      )}`}
                      className="flex items-center justify-center w-full bg-whatsapp hover:bg-whatsapp/90 text-white py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp className="h-5 w-5 mr-2" /> Contacter sur
                      WhatsApp
                    </a>

                    <a
                      href={`mailto:${currentLocation.email}`}
                      className="flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      <Mail className="h-5 w-5 mr-2" /> Envoyer un email
                    </a>
                  </div>

                  <div className="flex justify-center mt-6 space-x-4">
                    <a
                      href="#"
                      className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FFDC80] hover:opacity-90 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </AnimatedCard>
            </div>

            {/* Map and FAQ */}
            <div className="md:col-span-2 space-y-8">
              {/* Map */}
              <AnimatedCard animation="slide" delay={0.4}>
                <div className="bg-white p-4 rounded-xl shadow-sm overflow-hidden">
                  <div className="h-[400px] rounded-lg overflow-hidden">
                    <iframe
                      src={currentLocation.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Carte de l'emplacement de ${currentLocation.name}`}
                      className="rounded-md"
                    ></iframe>
                  </div>
                </div>
              </AnimatedCard>

              {/* FAQ */}
              <AnimatedCard animation="slide" delay={0.5}>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-2xl font-semibold mb-6">
                    Questions fréquentes
                  </h2>

                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="border border-gray-100 rounded-xl overflow-hidden"
                      >
                        <button
                          className="flex justify-between items-center w-full text-left p-4 font-medium hover:bg-gray-50 transition-colors"
                          onClick={() =>
                            setActiveFaq(activeFaq === index ? null : index)
                          }
                        >
                          <span>{faq.question}</span>
                          <span
                            className={`transform transition-transform ${
                              activeFaq === index ? "rotate-180" : ""
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </span>
                        </button>

                        {activeFaq === index && (
                          <div className="p-4 bg-gray-50 border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
                            <p className="text-gray-700">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedCard>

              {/* Contact Form Teaser */}
              <AnimatedCard animation="slide" delay={0.6}>
                <div className="bg-gradient-to-r from-secondary to-primary text-white p-6 rounded-xl shadow-sm">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                      <h2 className="text-xl font-semibold mb-2">
                        Une question spécifique?
                      </h2>
                      <p className="text-white/90">
                        Contactez-nous directement ou visitez notre boutique.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={`tel:${currentLocation.phone.replace(
                          /\s+/g,
                          ""
                        )}`}
                        className="bg-white text-secondary hover:bg-white/90 px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium text-sm"
                      >
                        Appeler
                      </a>
                      <a
                        href="https://wa.me/+243814264458"
                        className="bg-whatsapp hover:bg-whatsapp/90 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium text-sm flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaWhatsapp className="mr-1" /> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Address;
