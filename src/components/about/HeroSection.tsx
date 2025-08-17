import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-50%", once: true });

  return (
    <motion.section 
      ref={ref}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20"
    >
       {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-soft-light opacity-20 filter blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-soft-light opacity-30 filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-soft-light opacity-25 filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 30
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-white"
            initial={{ letterSpacing: "0.5em", opacity: 0 }}
            animate={{ 
              letterSpacing: "0.05em",
              opacity: 1
            }}
            transition={{ 
              duration: 1.2,
              ease: "easeOut"
            }}
          >
            <span className="block">Crafting Digital</span>
            <motion.span 
              className="relative inline-block mt-2"
              animate={{
                textShadow: [
                  "0 0 10px rgba(187, 254, 255, 0.5)",
                  "0 0 20px rgba(187, 254, 255, 0.8)",
                  "0 0 10px rgba(187, 254, 255, 0.5)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            >
              Masterpieces
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#BBFEFF] to-[#FFC412]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              />
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-[#BFC8CA]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 20
            }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            We transform visionary ideas into immersive digital experiences that captivate audiences and drive results.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 30
            }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="relative z-10 font-bold">Begin Your Journey</Link>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      {/* Floating elements */}
      <motion.div 
        className="absolute bottom-20 left-1/4 w-4 h-4 bg-blue-500 rounded-full"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/3 w-6 h-6 bg-purple-500 rounded-full"
        animate={{
          y: [0, -40, 0],
          x: [0, -25, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.section>
  );
};

export default HeroSection;