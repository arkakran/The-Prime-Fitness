import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const MachinesPage = () => {
  const machines = [
    {
      name: "Treadmill",
      image: "https://m.media-amazon.com/images/I/51EN04NQ6JL.jpg",
      description: "Commercial-grade treadmill with advanced shock absorption and heart rate monitoring."
    },
    {
      name: "Elliptical Cross Trainer",
      image: "https://www.viva-fitness.in/cdn/shop/files/KH753_608x608.jpg?v=1708945817",
      description: "Full-body low-impact cardio machine with adjustable resistance levels."
    },
    {
      name: "Group Bikes",
      image: "https://www.vivafitness.net/wp-content/uploads/KH-153-1024x1024.jpg",
      description: "Low-impact cardio bikes with adjustable resistance for group training."
    },
    {
      name: "Stepmill",
      image: "https://www.vivafitness.net/wp-content/uploads/kh4040-500x500.jpg",
      description: "Stair-climbing cardio machine with adjustable speed and resistance."
    },
    {
      name: "Leg Press Machine",
      image: "https://www.vivafitness.net/wp-content/uploads/PC1116-1024x1024.jpg",
      description: "Heavy-duty leg press with smooth linear bearings and safety features."
    },
    {
      name: "Chest Press Machine",
      image: "https://www.vivafitness.net/wp-content/uploads/E5008-1-1024x1024.jpg",
      description: "Pneumatic chest press with ergonomic design and multiple grip positions."
    },
    {
      name: "Lat Pulldown",
      image: "https://www.vivafitness.net/wp-content/uploads/PC2102-1024x1024.jpg",
      description: "Cable-operated lat pulldown with adjustable thigh pads and multiple attachments."
    },
    {
      name: "Rowing Machine",
      image: "https://www.vivafitness.net/wp-content/uploads/AR500-500x500.jpg",
      description: "Air resistance rowing machine for full-body cardiovascular and strength training."
    },
    {
      name: "Smith Machine",
      image: "https://www.vivafitness.net/wp-content/uploads/jpl328-1024x1024.jpg",
      description: "Guided barbell system with safety hooks and adjustable bench attachment."
    },
    {
      name: "Cable Crossover Machine",
      image: "https://www.vivafitness.net/wp-content/uploads/pc2230-picture-500x500.jpg",
      description: "Dual cable system with adjustable pulleys for versatile strength training."
    },
    {
      name: "Leg Extension Machine",
      image: "https://www.vivafitness.net/wp-content/uploads/PC2105-1024x1024.jpg",
      description: "Isolated leg extension with adjustable weight stack and comfortable padding."
    },
    {
      name: "Leg Curl Machine",
      image: "https://www.vivafitness.net/wp-content/uploads/PC2105-1024x1024.jpg",
      description: "Isolated leg curl with adjustable weight stack and comfortable padding."
    },

    {
      name: "Hack/Power Squat Machine",
      image: "https://www.vivafitness.net/wp-content/uploads/PC1018-1024x1024.jpg",
      description: "Angled leg press platform with safety locks and plate loading system."
    },
    {
      name: "Pec Fly Machine",
      image: "https://www.vivafitness.net/wp-content/uploads/E5008-1-1024x1024.jpg",
      description: "Chest isolation machine with smooth cam action and adjustable seat."
    },
    {
      name: "Preacher Curl Bench",
      image: "https://www.vivafitness.net/wp-content/uploads/beast-38-3-1024x1024.jpg",
      description: "Angled bicep curl station with EZ curl bar and adjustable height."
    },
    {
      name: "Calf Raise Machine",
      image: "https://m.media-amazon.com/images/I/61zRGHxcrfL.jpg",
      description: "Standing calf raise with shoulder pads and non-slip foot platform."
    },
    
    {
      name: "Incline Bench Press",
      image: "https://www.vivafitness.net/wp-content/uploads/pl4029-1024x1024.jpg",
      description: "Adjustable incline bench with spotter platforms and barbell rest."
    },
    {
      name: "Decline Bench Press",
      image: "https://www.vivafitness.net/wp-content/uploads/pl4030-1024x1024.jpg",
      description: "Adjustable decline bench with spotter platforms and barbell rest."
    },
    {
      name: "Flat Bench Press",
      image: "https://www.vivafitness.net/wp-content/uploads/pl4028-1024x1024.jpg",
      description: "Adjustable flat bench with spotter platforms and barbell rest."
    },
    {
      name: "Deadlift Platform",
      image: "https://www.vivafitness.net/wp-content/uploads/WLP-JUNIOR-500x500.jpg",
      description: "Durable platform with barbell rest and spotter-friendly flat bench.."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center mb-8">
          <Link 
            to="/" 
            className="flex items-center text-red-500 hover:text-red-400 transition-colors duration-200 mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-red-500">Machines</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional-grade equipment from VIVA FITNESS designed for optimal performance and safety. 
            Each machine is regularly maintained and sanitized for your comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {machines.map((machine, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-full object-contain bg-white group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-200">
                  {machine.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {machine.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MachinesPage;