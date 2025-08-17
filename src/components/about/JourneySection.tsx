// src/components/about/JourneySection.tsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { journeyData } from '../../utils/aboutData';

const JourneySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px", once: true });

  return (
    <section className="py-28 relative overflow-hidden bg-gray-700 " ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 30
          }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Our Journey Through Time</h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Milestones that shaped our story of innovation
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-600 transform -translate-x-1/2" />
          
          {/* Animated progress indicator */}
          <motion.div 
            className="absolute left-1/2 top-0 w-3 h-3 rounded-full bg-blue-500 transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg"
            animate={{ 
              y: inView ? "100%" : "0%",
            }}
            transition={{ 
              duration: 5,
              ease: "easeInOut"
            }}
          />
          
          <div className="space-y-28">
            {journeyData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={item.year}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ 
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : 50
                  }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.7 }}
                >
                  {/* Year marker */}
                  <div className={`absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg border-4 border-white`}>
                    {item.year}
                  </div>
                  
                  {/* Content card - alternates sides */}
                  <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 pt-12`}>
                    <motion.div 
                      className="flex-1 bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
                      whileHover={{ 
                        y: -10,
                      }}
                    >
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mr-4`}>
                          <Icon size={24} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6">{item.description}</p>
                      
                      <div className="space-y-3">
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                              <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            </div>
                            <p className="text-gray-700">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                    
                    {/* Visual element */}
                    <motion.div 
                      className="flex-1 flex justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: inView ? 1 : 0,
                        scale: inView ? 1 : 0.8
                      }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                    >
                      <div className="relative w-full max-w-xs">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
                        <div className="absolute -inset-4 rounded-xl border-2 border-dashed border-gray-300 animate-pulse" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;