// src/components/about/BehindTheScenesSection.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const BehindTheScenesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const categories = [
    { name: "Workspace", color: "bg-blue-500" },
    { name: "Design Process", color: "bg-purple-500" },
    { name: "Team Culture", color: "bg-pink-500" },
    { name: "Events", color: "bg-indigo-500" }
  ];
  
  // Define images for each category
  const galleryImages = {
    "Workspace": [
      "/img/workspace1.jpg",
      "/img/workspace2.jpg",
      "/img/workspace3.jpg"
    ],
    "Design Process": [
      "/img/design1.jpg",
      "/img/design2.jpg",
      "/img/design3.jpg"
    ],
    "Team Culture": [
      "/img/culture1.jpg",
      "/img/culture2.jpg",
      "/img/culture3.jpg"
    ],
    "Events": [
      "/img/events1.jpg",
      "/img/events2.jpg",
      "/img/events3.jpg"
    ]
  };

  // Get images for the active category
  const activeCategory = categories[activeIndex].name;
  const imagesToShow = galleryImages[activeCategory as keyof typeof galleryImages];

  return (
    <section className="py-28 py-28 bg-gradient-to-b from-indigo-100 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-black">Inside Our Studio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A glimpse into our creative process and culture
          </p>
        </motion.div>
        
        {/* Category selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 rounded-xl">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                className={`px-6 py-3 rounded-xl relative z-10 ${activeIndex === index ? 'text-white' : 'text-gray-600'}`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.05 }}
              >
                {activeIndex === index && (
                  <motion.div 
                    className={`absolute inset-0 rounded-xl ${category.color} z-0`}
                    layoutId="activeCategory"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 font-medium">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Gallery grid - shows images for active category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {imagesToShow.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl aspect-square"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Actual image element */}
              <img 
                src={img} 
                alt={`${activeCategory} image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#141420]/90 to-transparent flex items-end p-6 opacity-0 hover:opacity-100 transition-opacity">
                <div className="text-white">
                  <h3 className="font-bold">{activeCategory} Moment</h3>
                  <p className="text-sm opacity-80">Behind the scenes</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "20+", label: "Team Members" },
            { value: "5", label: "Countries" },
            { value: "150+", label: "Projects" },
            { value: "24/7", label: "Creativity" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white p-6 rounded-2xl border border-gray-100 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: index * 0.2, duration: 0.5 } 
              }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BehindTheScenesSection;