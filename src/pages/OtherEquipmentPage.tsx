import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const OtherEquipmentPage = () => {
  const equipment = [
    {
      name: "Skipping Ropes",
      image: "https://i.pinimg.com/originals/94/bc/8a/94bc8a5320212780f6a6e5ce164fdd74.gif",
      description: "Professional speed ropes with adjustable length and ball bearing system.",
      quantity: "2 pieces",
      category: "Cardio"
    },
    {
      name: "Resistance Bands Set",
      image: "https://img.freepik.com/premium-photo/resistance-training-really-works-studio-shot-young-man-working-out-with-resistance-band-against-white-background_590464-28183.jpg",
      description: "Complete set with light, medium, and heavy resistance levels.",
      quantity: "2 sets",
      category: "Strength"
    },
    {
      name: "Kettlebells",
      image: "https://nwscdn.com/media/catalog/product/cache/h900xw900/g/y/gym-kettlebells_2.jpg",
      description: "Cast iron kettlebells ranging from 8kg to 32kg.",
      quantity: "12-32kg available",
      category: "Functional"
    },
    {
      name: "Weight Plates",
      image: "https://m.media-amazon.com/images/I/61iaT17HNbL._UF894,1000_QL80_.jpg",
      description: "Weight plates from 1.25kg to 25kg.",
      quantity: "Complete set",
      category: "Strength"
    },
    {
      name: "Medicine Balls",
      image: "https://contents.mediadecathlon.com/p2250055/k$b8ff6a444c62fa85ebd6ffd83d33a4f7/5-kg-rubber-medicine-ball-black-blue-domyos-8754988.jpg",
      description: "Textured medicine balls for functional training.",
      quantity: "2kg-5kg available",
      category: "Functional"
    },
    {
      name: "Yoga Mats",
      image: "https://t4.ftcdn.net/jpg/02/29/87/77/360_F_229877777_bzG90o7VLTrCZx3AYhjiX4baGQNp3ebU.jpg",
      description: "Non-slip yoga mats with excellent cushioning.",
      quantity: "4 pieces",
      category: "Recovery"
    },
    {
      name: "Foam Rollers",
      image: "https://rukminim2.flixcart.com/image/1200/1200/xif0q/foam-roller/e/n/p/14-33-fitness-grid-foam-roller-exercise-back-pain-deep-tissue-original-imagumjzy6payxap.jpeg",
      description: "High-density foam rollers for muscle recovery.",
      quantity: "15 pieces",
      category: "Recovery"
    },
    {
      name: "Battle Ropes",
      image: "https://www.marcypro.com/cdn/shop/files/9_M_30_ft_Battle_Ropes_38mm_1.5_Inch_Diamater_Heavy_Exercise_Rope_ProIron_PRO-ZS01-1_-_In_Use_by_Model_2__48270.1688679249.1280.1280.jpg?v=1739773259&width=1445",
      description: "Heavy duty battle ropes for high-intensity training.",
      quantity: "4 pieces",
      category: "Cardio"
    },
    {
      name: "Stability Balls",
      image: "https://www.healthywomen.org/media-library/stability-ball-exercises.jpg?id=23507884&width=1200&height=800&quality=85&coordinates=127%2C0%2C127%2C0",
      description: "Anti-burst stability balls for core strengthening.",
      quantity: "55cm-75cm sizes",
      category: "Functional"
    },
    {
      name: "Adjustable Benches",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHP8JGGSE1Ssrzfzj8_gnPzDNMApWuxsJt9Q&s",
      description: "Multi-angle adjustable workout benches.",
      quantity: "3 pieces",
      category: "Strength"
    },
    {
      name: "Cable Attachments",
      image: "https://rukminim2.flixcart.com/image/704/844/xif0q/bar/q/x/j/cable-machine-accessories-for-home-gym-cable-attachments-for-gym-original-imagvuzsbhqcgcpn.jpeg?q=90&crop=false",
      description: "Various cable machine attachments and handles.",
      quantity: "Complete set",
      category: "Strength"
    },
    {
      name: "Ab Wheels",
      image: "https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt946c950efa76636a/67fd0ba989c4f97ddcc176be/ab-wheel-kneeling-partial-rollout.jpg?format=pjpg&auto=webp&fit=crop&quality=76&width=undefined&height=undefined",
      description: "Heavy-duty ab wheels with knee pads.",
      quantity: "2 pieces",
      category: "Strength"
    },
    {
      name: "Weightlifting Belts",
      image: "https://cdn.shopify.com/s/files/1/1497/9682/files/image4.gif?v=1722265695",
      description: "Leather weightlifting belts for heavy lifting support.",
      quantity: "Various sizes",
      category: "Accessories"
    },
    {
      name: "Grip Strengtheners",
      image: "https://m.media-amazon.com/images/I/71rnjOkkJZL._UF894,1000_QL80_.jpg",
      description: "Adjustable grip strengtheners and hand exercisers.",
      quantity: "3 pieces",
      category: "Accessories"
    }
  ];

  const categories = ['All', 'Cardio', 'Strength', 'Functional', 'Recovery', 'Accessories'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredEquipment = selectedCategory === 'All' 
    ? equipment 
    : equipment.filter(item => item.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Cardio': 'bg-red-500',
      'Strength': 'bg-blue-500',
      'Functional': 'bg-green-500',
      'Recovery': 'bg-purple-500',
      'Accessories': 'bg-yellow-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
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
            Other <span className="text-red-500">Equipment</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Complete your workout with our extensive collection of accessories, functional training tools, 
            and specialized equipment for every fitness goal.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEquipment.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-colors duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain bg-white group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className={`absolute top-3 right-3 ${getCategoryColor(item.category)} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
                  {item.category}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-200">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {item.description}
                </p>
                <div className="bg-gray-700 rounded-full px-3 py-1 inline-block">
                  <span className="text-xs text-gray-300 font-medium">
                    {item.quantity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEquipment.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No equipment found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OtherEquipmentPage;