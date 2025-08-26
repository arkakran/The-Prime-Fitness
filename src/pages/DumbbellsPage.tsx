import React from 'react';
import { ArrowLeft, Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';

const DumbbellsPage = () => {
  const dumbbells = [
    { weight: "1kg",pairs: 2, image: "https://www.vivafitness.net/wp-content/uploads/POWER1.jpg" },
    { weight: "2.5kg",pairs: 2, image: "https://www.vivafitness.net/wp-content/uploads/POWER1.jpg" },
    { weight: "5kg",pairs: 2, image: "https://www.vivafitness.net/wp-content/uploads/POWER1.jpg" },
    { weight: "7.5kg",pairs: 2, image: "https://www.vivafitness.net/wp-content/uploads/POWER1.jpg" },
    { weight: "10kg",pairs: 2, image: "https://www.vivafitness.net/wp-content/uploads/POWER1.jpg" },
    { weight: "12.5kg",pairs: 2, image: "https://www.vivafitness.net/wp-content/uploads/POWER1.jpg" },
    { weight: "15kg",pairs: 2, image: "https://www.vivafitness.net/wp-content/uploads/POWER1.jpg" },
    { weight: "17.5kg",pairs: 2, image: "https://www.vivafitness.net/wp-content/uploads/POWER1.jpg" },
    { weight: "20kg",pairs: 2, image: "https://www.vivafitness.net/wp-content/uploads/POWER1.jpg" },
    { weight: "22.5kg",pairs: 2, image: "https://www.vivafitness.net/wp-content/uploads/POWER1.jpg" },
    { weight: "25kg",pairs: 2, image: "https://www.vivafitness.net/wp-content/uploads/POWER1.jpg" },
    { weight: "27.5kg",pairs: 2, image: "https://www.vivafitness.net/wp-content/uploads/POWER1.jpg" },
    { weight: "30kg",pairs: 2, image: "https://www.vivafitness.net/wp-content/uploads/POWER1.jpg" },
    { weight: "35kg",pairs: 2, image: "https://www.vivafitness.net/wp-content/uploads/POWER1.jpg" },
    { weight: "40kg",pairs: 2, image: "https://www.vivafitness.net/wp-content/uploads/POWER1.jpg" }
  ];

  const getColorByWeight = (weight: string) => {
    const num = parseInt(weight);
    if (num <= 5) return 'from-green-500 to-green-600';
    if (num <= 10) return 'from-blue-500 to-blue-600';
    if (num <= 20) return 'from-yellow-500 to-yellow-600';
    if (num <= 30) return 'from-orange-500 to-orange-600';
    return 'from-red-500 to-red-600';
  };

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
            <span className="text-red-500">Dumbbells</span> Collection
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Complete range of premium dumbbells from 1kg to 40kg by VIVA FITNESS. All weights are available 
            in multiple pairs to ensure you never have to wait for your preferred weight.
          </p>
          <div className="inline-flex items-center bg-gray-800 rounded-full px-6 py-3">
            <Dumbbell className="w-6 h-6 text-red-500 mr-3" />
            <span className="text-white font-semibold">Total: {dumbbells.reduce((sum, db) => sum + db.pairs, 0)} Pairs Available</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {dumbbells.map((dumbbell, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden text-center hover:bg-gray-750 transition-all duration-300 group hover:shadow-xl"
            >
              <div className="relative h-32 overflow-hidden">
                <img
                  src={dumbbell.image}
                  alt={`${dumbbell.weight} dumbbell`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className={`absolute top-2 right-2 w-8 h-8 rounded-full bg-gradient-to-br ${getColorByWeight(dumbbell.weight)} flex items-center justify-center`}>
                  <Dumbbell className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-200">
                  {dumbbell.weight}
                </h3>
                
                <div className="bg-gray-700 rounded-full px-3 py-1 inline-block">
                  <span className="text-sm text-gray-300">
                    {dumbbell.pairs} pair{dumbbell.pairs > 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Weight Categories
          </h3>
          <div className="grid md:grid-cols-5 gap-4 text-center">
            <div className="p-4 rounded-xl bg-gradient-to-br from-green-500 to-green-600">
              <h4 className="font-bold text-white mb-2">Light Weight</h4>
              <p className="text-sm text-green-100">1kg - 5kg</p>
              <p className="text-xs text-green-200 mt-1">Perfect for beginners</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
              <h4 className="font-bold text-white mb-2">Medium Light</h4>
              <p className="text-sm text-blue-100">6kg - 10kg</p>
              <p className="text-xs text-blue-200 mt-1">Intermediate training</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600">
              <h4 className="font-bold text-white mb-2">Medium</h4>
              <p className="text-sm text-yellow-100">12kg - 20kg</p>
              <p className="text-xs text-yellow-200 mt-1">Strength building</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600">
              <h4 className="font-bold text-white mb-2">Heavy</h4>
              <p className="text-sm text-orange-100">22kg - 30kg</p>
              <p className="text-xs text-orange-200 mt-1">Advanced training</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-red-500 to-red-600">
              <h4 className="font-bold text-white mb-2">Very Heavy</h4>
              <p className="text-sm text-red-100">32kg - 40kg</p>
              <p className="text-xs text-red-200 mt-1">Expert level</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DumbbellsPage;