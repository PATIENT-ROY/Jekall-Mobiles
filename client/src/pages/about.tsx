import {
  Check,
  Truck,
  Headphones,
  Award,
  Users,
  Shield,
  Smartphone,
  ThumbsUp,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const storyPoints = [
  {
    year: "2018",
    title: "Le début de l'aventure",
    description:
      "Fondation de Jekall Mobiles avec une vision claire : rendre les dernières technologies accessibles à tous.",
  },
  {
    year: "2020",
    title: "Expansion rapide",
    description:
      "Ouverture de notre boutique principale à Kinshasa et lancement de notre service de livraison.",
  },
  {
    year: "2022",
    title: "Innovation technologique",
    description:
      "Introduction de nouveaux services de réparation et support technique spécialisé.",
  },
  {
    year: "2023",
    title: "Engagement client",
    description:
      "Développement de notre programme de fidélité et amélioration continue de l'expérience client.",
  },
];

const values = [
  {
    id: "quality",
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Qualité Premium",
    description:
      "Nous ne proposons que des produits authentiques de la plus haute qualité, rigoureusement testés.",
  },
  {
    id: "service",
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Service Client Exceptionnel",
    description:
      "Notre équipe dévouée est toujours prête à vous assister, avant, pendant et après votre achat.",
  },
  {
    id: "integrity",
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Intégrité",
    description:
      "Transparence totale dans nos prix, nos politiques et notre communication avec nos clients.",
  },
];

const benefits = [
  {
    id: "authentic",
    icon: <Check className="h-8 w-8 text-white" />,
    title: "Produits Authentiques",
    description:
      "Tous nos produits sont 100% authentiques avec garantie officielle du fabricant.",
  },
  {
    id: "delivery",
    icon: <Truck className="h-8 w-8 text-white" />,
    title: "Livraison Rapide",
    description:
      "Service de livraison fiable disponible partout à Kinshasa, généralement en moins de 24h.",
  },
  {
    id: "support",
    icon: <Headphones className="h-8 w-8 text-white" />,
    title: "Support Client Réactif",
    description:
      "Notre équipe de support est disponible 6 jours sur 7 pour répondre à toutes vos questions.",
  },
  {
    id: "repair",
    icon: <Smartphone className="h-8 w-8 text-white" />,
    title: "Service de Réparation",
    description:
      "Un service technique professionnel pour maintenir vos appareils en parfait état.",
  },
  {
    id: "warranty",
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "Garantie Fiable",
    description:
      "Tous nos produits sont couverts par une garantie pour votre tranquillité d'esprit.",
  },
  {
    id: "advice",
    icon: <ThumbsUp className="h-8 w-8 text-white" />,
    title: "Conseils d'Experts",
    description:
      "Nos spécialistes peuvent vous recommander le meilleur appareil selon vos besoins.",
  },
];

const team = [
  {
    name: "Jean Mobutu",
    role: "Fondateur & Directeur",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description:
      "Passionné de technologie avec plus de 10 ans d'expérience dans le secteur des télécommunications.",
  },
  {
    name: "Marie Lukula",
    role: "Responsable des Ventes",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description:
      "Experte en relations clients avec une connaissance approfondie des produits technologiques.",
  },
  {
    name: "Pascal Mbemba",
    role: "Technicien Senior",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
    description:
      "Spécialiste en réparation et maintenance de smartphones et tablettes de toutes marques.",
  },
];

const About = () => {
  return (
    <div className="bg-neutral-light min-h-screen pb-16">
      {/* Hero Section */}
      <section className="bg-neutral-dark text-white py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Notre Histoire
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Notre boutique de téléphones portables allie innovation et
              élégance, vous proposant une sélection exclusive des modèles les
              plus performants à des prix compétitifs. Engagés envers
              l'excellence, nous mettons un point d'honneur à offrir à notre
              clientèle exigeante des produits haut de gamme et un service
              personnalisé d'exception.
            </p>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Notre Parcours
          </h2>

          <div className="relative mx-auto max-w-3xl">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

            {/* Timeline Points */}
            {storyPoints.map((point, index) => (
              <div key={point.year} className="relative mb-12 last:mb-0">
                {/* Year Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold z-10">
                  {point.year}
                </div>

                {/* Content Box */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "ml-auto pr-8" : "mr-auto pl-8"
                  }`}
                >
                  <div className="bg-neutral-light p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-xl font-semibold mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Nos Valeurs</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Ces principes fondamentaux guident chacune de nos actions et
            décisions pour vous offrir le meilleur service possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.id}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-neutral-light h-16 w-16 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Alternating Background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Pourquoi Nous Choisir?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className="rounded-xl overflow-hidden shadow-sm group relative"
              >
                {/* Colored Header */}
                <div
                  className={`h-24 ${
                    index % 3 === 0
                      ? "bg-primary"
                      : index % 3 === 1
                      ? "bg-secondary"
                      : "bg-accent"
                  } flex items-center justify-center transition-all duration-300 group-hover:h-28`}
                >
                  <div className="bg-black/20 h-16 w-16 rounded-full flex items-center justify-center">
                    {benefit.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Notre Équipe</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Des professionnels dévoués qui s'engagent à vous offrir une
            expérience exceptionnelle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-neutral-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Prêt à découvrir nos produits?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Vous avez des questions ou besoin de conseils? Notre équipe est
            prête à vous aider.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="/catalogue"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium text-lg min-w-[200px]"
            >
              Voir nos produits
            </a>
            <a
              href="https://wa.me/+243814264458"
              className="bg-whatsapp hover:bg-whatsapp/90 text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium text-lg flex items-center justify-center min-w-[200px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="mr-2 text-xl" /> Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
