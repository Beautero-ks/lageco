"use client"
import Image from "next/image";
import { ArrowRight, BookOpen, Users, Globe, Award } from 'lucide-react';
import HeroSection from './components/shared/Hero';
import ServicesSection from './components/shared/Services';
import TestimonialsSection from './components/Testimonials';
import WhyChooseUsSection from "./components/WhyChoseUs";
import QuickContactSection from "./components/QuickContact";


export default function Home() {
  const features = [
    { icon: BookOpen, text: "Cours du soir" },
    { icon: Users, text: "Répétitions à domicile" },
    { icon: Globe, text: "Langues étrangères" },
    { icon: Award, text: "Accompagnement visa" }
  ];

  return (
    <div className="mx-auto py-8">
      
<HeroSection />

    <ServicesSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <QuickContactSection />
      {/* Section Contact Rapide */}
      {/* <section className="bg-gray-100 py-12 px-6 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Contactez-nous</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Nom" className="w-full p-3 border rounded-md" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-md" />
          <textarea placeholder="Message" className="w-full p-3 border rounded-md h-32"></textarea>
          <button type="submit" className="bg-blue-700 text-white px-6 py-3 rounded-md w-full font-semibold hover:bg-blue-800">Envoyer</button>
        </form>
      </section> */}
    </div>
  );
}
