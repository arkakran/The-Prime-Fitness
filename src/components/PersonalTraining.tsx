import React from 'react';
import { Users, Target, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const PersonalTraining = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: "Goal-Oriented Training",
      description: "Customized programs tailored to your specific fitness goals"
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Expert Trainers",
      description: "Certified professionals with exprience."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-500" />,
      title: "Progress Tracking",
      description: "Monitor your improvement with detailed analytics"
    },
    {
      icon: <Award className="w-8 h-8 text-red-500" />,
      title: "Proven Results",
      description: "Join hundreds who've achieved their transformation"
    }
  ];

  return (
    <section id="personal-training" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Personal <span className="text-red-500">Training</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get customized fitness programs with expert trainers who focus on your goals – 
              strength, fat loss, or overall fitness. Our certified professionals will guide 
              you every step of the way to ensure maximum results.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  {feature.icon}
                  <div>
                    <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link 
              to="/contact-us"
              className="inline-block bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Meet Our Trainers
            </Link>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Personal Training"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalTraining;