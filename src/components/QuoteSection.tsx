import React from 'react';

const QuoteSection = () => {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
        }}
      ></div>
      
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <blockquote className="text-4xl md:text-6xl font-bold text-white leading-tight">
          "Push yourself because{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            no one else
          </span>{' '}
          is going to do it for you."
        </blockquote>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mt-8"></div>
      </div>
    </section>
  );
};

export default QuoteSection;