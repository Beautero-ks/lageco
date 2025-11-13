// /components/WhyChooseUsSection.tsx
import { CheckCircle, Users, BookOpen, Globe } from 'lucide-react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-roboto',
});

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Excellence Académique",
      description: "Programmes conçus par des experts pour garantir des résultats concrets.",
    },
    {
      icon: Users,
      title: "Accompagnement Personnalisé",
      description: "Petits groupes et suivi individuel pour répondre à vos besoins.",
    },
    {
      icon: BookOpen,
      title: "Approche Bilingue",
      description: "Cours en français et anglais pour une éducation globale.",
    },
    {
      icon: Globe,
      title: "Portée Internationale",
      description: "Formations et accompagnement visa pour vos ambitions mondiales.",
    },
  ];

  return (
    <div className={`bg-gradient-to-b from-blue-50 to-gray-50 py-16 sm:py-20 lg:py-24 ${roboto.variable} font-sans`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <CheckCircle className="w-4 h-4" />
            Pourquoi LAGECO ?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ce qui nous rend unique
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Découvrez pourquoi des centaines d’étudiants choisissent LAGECO pour leur parcours éducatif.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 p-6 text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}