// /components/TestimonialsSection.tsx
import { Quote } from 'lucide-react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-roboto',
});

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marie T.",
      role: "Étudiante en Terminale",
      quote: "Grâce aux cours du soir de LAGECO, j’ai amélioré mes notes en mathématiques et obtenu mon bac avec mention !",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Jean K.",
      role: "Professionnel",
      quote: "Les cours d’anglais m’ont aidé à décrocher un emploi à l’international. Les professeurs sont exceptionnels.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Amina S.",
      role: "Étudiante en Informatique",
      quote: "La formation en graphisme m’a permis de lancer mon activité freelance. L’accompagnement est top !",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <div className={`bg-white py-16 sm:py-20 lg:py-24 ${roboto.variable} font-sans`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <Quote className="w-4 h-4" />
            Ce que disent nos étudiants
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Des histoires de réussite
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Découvrez comment LAGECO a transformé la vie de nos apprenants grâce à nos programmes éducatifs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-transparent hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
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