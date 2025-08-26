import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToMembership = () => {
    const element = document.getElementById('membership');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      ></div>
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Start Your Journey with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            THE PRIME FITNESS
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Your body can stand almost anything. It's your mind you have to convince. 
          At THE PRIME FITNESS, we provide everything you need to transform your lifestyle.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToMembership}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Join Now
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105">
            <Link to="/contact-us">Book a Free Trial</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;