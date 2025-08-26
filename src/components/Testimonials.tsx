import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Piyush Rana",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      text: "THE PRIME FITNESS transformed my life! The trainers are incredibly supportive and the equipment is top-notch. I've lost 15kg in 6 months and gained so much confidence.",
      rating: 5,
      achievement: "Lost 15kg in 6 months"
    },
    {
      name: "Anshul Aditya",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      text: "Best gym in Ganga Nagar,Meerut! The personal training sessions helped me build muscle and improve my overall fitness. The atmosphere is motivating and the staff is professional.",
      rating: 5,
      achievement: "Gained 8kg muscle mass"
    },
    {
      name: "Harsh Aditya",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      text: "I've been a member for over a year now and I absolutely love it here. The variety of equipment and classes keeps my workouts exciting. Highly recommended!",
      rating: 5,
      achievement: "Member for 1+ year"
    },
    {
      name: "Aryan Kakran",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      text: "THE PRIME FITNESS has everything I need for my fitness journey. The modern equipment and expert guidance helped me achieve my strength goals faster than expected.",
      rating: 5,
      achievement: "Increased bench press by 40kg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-red-500">Members</span> Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from real people who transformed their lives at THE PRIME FITNESS
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-8 md:p-12 text-center">
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>

            <div className="mb-4">
              <h4 className="text-xl font-bold text-white mb-1">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-red-500 font-semibold">
                {testimonials[currentIndex].achievement}
              </p>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-red-500' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;