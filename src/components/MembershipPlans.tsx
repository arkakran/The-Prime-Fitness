import React from 'react';
import { Check, Star, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const MembershipPlans = () => {
  const plans = [
    {
      name: "1 Month",
      price: "₹2,000",
      originalPrice: "₹2,000",
      discount: "0%",
      features: [
        "Full gym access",
        "Basic equipment usage",
        "Locker facility",
        "Shower access"
      ],
      popular: false,
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "3 Months",
      price: "₹5,400",
      originalPrice: "₹6,000",
      discount: "10% OFF",
      features: [
        "Full gym access",
        "Equipment training session",
        "Locker facility",
        "Shower access",
      ],
      popular: false,
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "6 Months",
      price: "₹10,000",
      originalPrice: "₹12,000",
      discount: "20%+ OFF",
      features: [
        "Full gym access",
        "Locker facility",
        "Equipment training session",
        "Shower access",
      ],
      popular: true,
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "1 Year",
      price: "₹19,000",
      originalPrice: "₹24,000",
      discount: "30%+ OFF + Free Nutrition Guide",
      features: [
        "Full gym access",
        "Personal training",
        "Locker facility",
        "Shower access",
      ],
      popular: false,
      icon: <Star className="w-6 h-6" />
    }
  ];

  const specialPlans = [
    {
      name: "Student Plan",
      price: "₹1,700",
      originalPrice: "₹2,000",
      discount: "15% OFF",
      description: "Valid student ID required",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      color: "blue"
    },
    {
      name: "Corporate Plan",
      price: "₹1,700",
      originalPrice: "₹2,000",
      discount: "15% OFF",
      description: "Minimum 5 employees",
      icon: <Briefcase className="w-8 h-8 text-green-500" />,
      color: "green"
    }
  ];

  return (
    <section id="membership" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Membership <span className="text-red-500">Plans</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your fitness journey. Save more with longer commitments 
            and get exclusive benefits.
          </p>
        </div>

        {/* Main Plans */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-900 rounded-2xl p-6 ${
                plan.popular 
                  ? 'ring-2 ring-red-500 transform scale-105 shadow-2xl' 
                  : 'hover:bg-gray-850 hover:shadow-xl'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="flex justify-center mb-3">
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                {plan.discount && (
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                    {plan.discount}
                  </div>
                )}
                <div className="mb-2">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-gray-500 line-through ml-2">{plan.originalPrice}</span>
                  )}
                </div>
                <p className="text-gray-400 text-sm"></p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-full font-semibold transition-all duration-200 ${
                plan.popular
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-gray-700 hover:bg-red-500 text-white'
              }`}>
                <Link to="/contact-us">Join Now</Link>
              </button>
            </div>
          ))}
        </div>

        {/* Special Plans */}
        <div className="grid md:grid-cols-2 gap-6">
          {specialPlans.map((plan, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-850 transition-colors duration-300">
              <div className="flex items-center mb-4">
                {plan.icon}
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-500 line-through ml-2">{plan.originalPrice}</span>
                  <div className={`inline-block ml-3 px-3 py-1 rounded-full text-sm font-semibold ${
                    plan.color === 'blue' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-green-500 text-white'
                  }`}>
                    {plan.discount}
                  </div>
                </div>
                <button className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                  plan.color === 'blue'
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}>
                  <Link to="/contact-us">Join Now</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;