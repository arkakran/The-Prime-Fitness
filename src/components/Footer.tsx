import React from 'react';
import { Instagram, Facebook, Youtube, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="about" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Us */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              THE <span className="text-red-500">PRIME</span> FITNESS
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              THE PRIME FITNESS is your partner in health and transformation. We combine 
              modern equipment, expert trainers, and a supportive community to help you 
              achieve your fitness goals. Join thousands of satisfied members who have 
              transformed their lives with us.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/theprimefitnesss/" className="bg-gray-800 hover:bg-red-500 p-3 rounded-full transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-500 p-3 rounded-full transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-500 p-3 rounded-full transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-500 p-3 rounded-full transition-colors duration-200">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('personal-training')}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Personal Training
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('equipment')}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Equipment
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('membership')}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Membership Plans
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-red-500 mr-3" />
                <span className="text-gray-400">+91 95368 44029</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-red-500 mr-3" />
                <span className="text-gray-400">info@theprimefitness.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-red-500 mr-3 mt-1" />
                <span className="text-gray-400">
                  2nd Floor, Mavi plaza, GP Pocket, Ganga Nagar<br />
                  Meerut, Uttar Pradesh, 250001, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 THE PRIME FITNESS. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;