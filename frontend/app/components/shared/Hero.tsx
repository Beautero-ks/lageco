import { ArrowRight, BookOpen, Users, Globe, Award } from 'lucide-react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-roboto',
});

export default function HeroSection() {
  const features = [
    { icon: BookOpen, text: "Cours du soir" },
    { icon: Users, text: "Répétitions à domicile" },
    { icon: Globe, text: "Langues étrangères" },
    { icon: Award, text: "Accompagnement visa" }
  ];

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${roboto.variable} font-sans`}>
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-300 ease-out"
        style={{ 
          backgroundImage: "url('https://www.ednc.org/wp-content/uploads/2016/01/shutterstock_349602341-800x533.jpg')",
          backgroundPosition: "center 40%"
        }} 
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/85 via-purple-900/80 to-indigo-800/85"></div>
        
        {/* Subtle Animated Gradient Orbs for depth */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium transition-all duration-300 hover:bg-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Plateforme éducative bilingue certifiée
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-center text-white mb-6 animate-slide-up font-[--font-roboto]">
            <span className="block text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-3">
              Apprenez sans limites
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              avec LAGECO
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-center text-white/90 text-lg sm:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-light animate-slide-up delay-200">
            Votre partenaire éducatif de confiance pour l&apos;excellence académique et le développement professionnel
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up delay-300">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-default"
              >
                <feature.icon className="w-4 h-4" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 animate-slide-up delay-400">
            <a 
              href="/services" 
              className="group relative inline-flex items-center gap-2 bg-white text-indigo-700 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center overflow-hidden"
            >
              <span className="relative z-10">Découvrez nos services</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="absolute inset-0 bg-white group-hover:bg-transparent transition-colors duration-300"></span>
            </a>
            <a 
              href="/inscription" 
              className="group inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto justify-center"
            >
              <span>S&apos;inscrire maintenant</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .delay-200 { animation-delay: 0.2s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
        .delay-400 { animation-delay: 0.4s; opacity: 0; }
        .delay-500 { animation-delay: 0.5s; opacity: 0; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  );
}