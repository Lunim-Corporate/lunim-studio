// src/components/about/CallToActionSection.tsx
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto">
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8 } 
          }}
          viewport={{ once: true }}
        >
          {/* Floating elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full animate-blob"></div>
            <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-white/15 rounded-full animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-white/20 rounded-full animate-blob animation-delay-4000"></div>
          </div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-10 bg-grid-white/[0.05]"></div>
          
          <motion.div
            className="relative z-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              animate={{
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.3)",
                  "0 0 20px rgba(255,255,255,0.4)",
                  "0 0 10px rgba(255,255,255,0.3)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            >
              Ready to Create Something Extraordinary?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              Let's collaborate to bring your vision to life with our expertise and passion.
            </motion.p>
            
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.button
                className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full flex items-center space-x-3 text-lg shadow-lg group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">Start Your Project</Link>

                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity
                  }}
                >
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;