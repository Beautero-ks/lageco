"use client";
import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Search } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here, e.g., redirect to search page
    console.log('Searching for:', searchQuery);
  };

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/courses", label: "Cours" }, // Added inspired by education platforms
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-gradient-to-r from-indigo-600 to-purple-600 py-4"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center gap-2 text-xl sm:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-indigo-700" : "text-white"
            }`}
          >
            <BookOpen className="w-6 h-6 sm:w-7 sm:h-7" />
            <span>LAGECO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative font-medium transition-colors duration-300 group ${
                      isScrolled
                        ? "text-gray-700 hover:text-indigo-600"
                        : "text-white hover:text-indigo-100"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                        isScrolled ? "bg-indigo-600" : "bg-white"
                      }`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Search Bar - Inspired by Khan Academy and Coursera */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="search"
                placeholder="Rechercher des cours..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`pl-10 pr-4 py-2 rounded-full transition-colors duration-300 ${
                  isScrolled
                    ? "bg-gray-100 text-gray-700 placeholder-gray-500"
                    : "bg-white/20 text-white placeholder-white/70"
                } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </form>

            {/* Auth Buttons */}
            <div className="flex space-x-4">
              <Link
                href="/login"
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  isScrolled
                    ? "bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                Connexion
              </Link>
              <Link
                href="/signup"
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  isScrolled
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg"
                    : "bg-white text-indigo-600 hover:bg-indigo-50 hover:shadow-lg"
                }`}
              >
                S&apos;inscrire
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-screen mt-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col space-y-3 pb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                    isScrolled
                      ? "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                      : "text-white hover:bg-white/10"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="relative mb-4">
            <input
              type="search"
              placeholder="Rechercher des cours..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-full transition-colors duration-300 ${
                isScrolled
                  ? "bg-gray-100 text-gray-700 placeholder-gray-500"
                  : "bg-white/20 text-white placeholder-white/70"
              } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </form>

          {/* Mobile Auth */}
          <div className="flex flex-col space-y-3">
            <Link
              href="/login"
              className={`block text-center px-4 py-2 rounded-lg font-medium transition-colors ${
                isScrolled
                  ? "bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Connexion
            </Link>
            <Link
              href="/inscription"
              className={`block text-center px-4 py-2 rounded-lg font-medium transition-colors ${
                isScrolled
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-white text-indigo-600 hover:bg-indigo-50"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              S&apos;inscrire
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}