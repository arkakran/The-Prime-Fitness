import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', action: () => scrollToSection('hero') },
    { name: 'Personal Training', action: () => scrollToSection('personal-training') },
    { name: 'Our Equipment', action: () => scrollToSection('equipment') },
    { name: 'Membership Plans', action: () => scrollToSection('membership') },
    { name: 'Inquiry/Feedback', action: () => scrollToSection('contact') },
    { name: 'About Us', action: () => scrollToSection('about') },
    { name: 'Contact', action: () => scrollToSection('contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              THE <span className="text-red-500">PRIME</span> FITNESS
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="text-gray-300 hover:text-red-500 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            className="hidden lg:block"
          >
            <Link 
              to="/contact-us"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-200"
            >
              Join Now
            </Link>
          </button>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="block text-gray-300 hover:text-red-500 px-3 py-2 text-base font-medium w-full text-left"
                >
                  {item.name}
                </button>
              ))}
              <button
                className="block mt-4 w-full"
              >
                <Link 
                  to="/contact-us"
                  className="block bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md font-semibold text-center"
                >
                  Join Now
                </Link>
              </button> 
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;