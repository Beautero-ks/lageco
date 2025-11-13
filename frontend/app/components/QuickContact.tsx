// /components/QuickContactSection.tsx
import { Send, Phone, Mail, Globe } from 'lucide-react';
import { Roboto } from 'next/font/google';
import Link from 'next/link';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-roboto',
});

export default function QuickContactSection() {
  return (
    <div className={`bg-gray-100 py-16 sm:py-20 lg:py-24 ${roboto.variable} font-sans`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <Send className="w-4 h-4" />
            Contactez-nous
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Une question ? Nous sommes là !
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Remplissez le formulaire ou contactez-nous directement pour commencer votre parcours avec LAGECO.
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm p-8 animate-slide-up">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600 transition-all duration-300"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600 transition-all duration-300"
                  placeholder="Votre email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-blue-600 focus:border-blue-600 transition-all duration-300 h-32"
                  placeholder="Votre message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
              >
                Envoyer
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-900">Téléphone</p>
                <p className="text-gray-600">+123 456 789</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-600">info@lageco.edu</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Globe className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-900">Site Web</p>
                <Link href="/" className="text-blue-600 hover:underline">www.lageco.edu</Link>
              </div>
            </div>
          </div>
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