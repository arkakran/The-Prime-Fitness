import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Dumbbell, Settings, Activity } from 'lucide-react';

const Equipment = () => {
  const categories = [
    {
      title: "Machines",
      description: "Professional-grade cardio and strength machines",
      icon: <Settings className="w-12 h-12 text-red-500" />,
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/machines",
      count: "20+ Machine"
    },
    {
      title: "Dumbbells",
      description: "Complete range from 1kg to 40kg",
      icon: <Dumbbell className="w-12 h-12 text-red-500" />,
      image: "https://media.istockphoto.com/id/625739874/photo/heavy-weight-exercise.jpg?s=612x612&w=0&k=20&c=B1uzJW1DBei2Rx5hnt139tt9dt3L7TbKrpgwbMR-LrI=",
      link: "/dumbbells",
      count: "1kg - 40kg"
    },
    {
      title: "Other Equipment",
      description: "Resistance bands, kettlebells, and accessories",
      icon: <Activity className="w-12 h-12 text-red-500" />,
      image:"https://static.vecteezy.com/system/resources/previews/048/838/498/non_2x/different-sports-equipment-and-fitness-ball-in-gym-photo.jpeg",
      link: "/other-equipment",
      count: "20+ Items"
    }
  ];

  return (
    <section id="equipment" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-red-500">Equipment</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            State-of-the-art machines, weights, and accessories for every workout need. 
            Experience professional-grade equipment designed for optimal performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-750 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  {category.icon}
                </div>
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {category.count}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-200">
                  {category.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-red-500 font-semibold group-hover:text-red-400 transition-colors duration-200">
                  Explore {category.title}
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;