import { BookOpen, Home, Globe, Laptop, FileText, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-roboto',
});

export default function ServicesSection() {
  const services = [
    {
      icon: BookOpen,
      title: "Cours du Soir",
      description: "Programmes bilingues pour toutes les classes de la 6e à la Tle (A4, C, D) et de Form 1 à Upper Sixth.",
      color: "from-blue-500 to-indigo-600",
      benefits: ["Petits groupes", "Suivi personnalisé"]
    },
    {
      icon: Home,
      title: "Répétitions à Domicile",
      description: "Cours sur mesure dispensés à votre domicile pour un apprentissage optimal.",
      color: "from-purple-500 to-pink-600",
      benefits: ["Horaires flexibles", "Approche personnalisée"]
    },
    {
      icon: Globe,
      title: "Cours de Langues",
      description: "Maîtrisez le Français, l'Anglais, l'Allemand et l'Espagnol, quel que soit votre niveau.",
      color: "from-emerald-500 to-teal-600",
      benefits: ["Quatre langues", "Cours adaptés"]
    },
    {
      icon: Laptop,
      title: "Formations en Informatique",
      description: "Apprenez les bases, la bureautique, le graphisme ou naviguez sur Internet avec aisance.",
      color: "from-orange-500 to-red-600",
      benefits: ["Certifications", "Ateliers pratiques"]
    },
    {
      icon: FileText,
      title: "Accompagnement Visa",
      description: "Support professionnel pour obtenir vos visas d'études ou de travail avec succès.",
      color: "from-cyan-500 to-blue-600",
      benefits: ["Dossier complet", "Conseils experts"]
    }
  ];

  return (
    <div className={`bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24 ${roboto.variable} font-sans`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Nos Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Des solutions éducatives pour tous
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Découvrez nos programmes conçus pour accompagner votre réussite académique et professionnelle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-transparent hover:-translate-y-2"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Card Content */}
              <div className="relative p-8">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                {/* Benefits */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.benefits.map((benefit, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-xs font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors duration-300"
                    >
                      <CheckCircle className="w-3 h-3" />
                      {benefit}
                    </span>
                  ))}
                </div>
                
                {/* Learn More Link */}
                <a 
                  href="/services" 
                  className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300 hover:underline"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              
              {/* Decorative Element */}
              <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${service.color} rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
<div className="relative rounded-3xl bg-gradient-to-br from-blue-50 to-gray-100 p-8 sm:p-12 lg:p-16 shadow-lg">
  {/* Content */}
  <div className="relative z-10 text-center max-w-3xl mx-auto">
    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 text-sm font-semibold mb-6">
      <Sparkles className="w-4 h-4" />
      Commencez votre parcours
    </div>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
      Prêt à exceller avec LAGECO ?
    </h2>
    <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
      Rejoignez notre communauté éducative et bénéficiez d’un accompagnement personnalisé pour atteindre vos objectifs académiques et professionnels.
    </p>
    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <a
        href="/inscription"
        className="group inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto justify-center"
      >
        S'inscrire maintenant
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
      <a
        href="/contact"
        className="group inline-flex items-center gap-2 bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
      >
        Nous contacter
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>
  </div>
</div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}