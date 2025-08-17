// src/components/about/ImpactSection.tsx
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { 
  CircleDashed, 
  HeartPulse, 
  Globe, 
  Award,
  LucideIcon
} from 'lucide-react';
import { impactStats } from '../../utils/aboutData';

interface ImpactStat {
  value: number;
  label: string;
  icon: LucideIcon;
  unit?: string;
  color: string;
}

const ImpactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  
  const stats = impactStats;

  return (
    <section className="py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Our Impact</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Creating meaningful change through our work
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ImpactCard key={stat.label} stat={stat} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Impact Card Component
const ImpactCard = ({ stat, index, inView }: { stat: ImpactStat, index: number, inView: boolean }) => {
  const [count, setCount] = useState(0);
  const Icon = stat.icon;
  
  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const increment = Math.ceil(stat.value / (duration / 16));
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCount(stat.value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [inView, stat.value]);

  return (
    <motion.div
      className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: inView ? 1 : 0, 
        y: inView ? 0 : 50
      }}
      transition={{ delay: index * 0.2, duration: 0.7 }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
      }}
    >
      <div className="flex items-center mb-6">
        <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center`}>
          <Icon className="text-white" size={24} />
        </div>
      </div>
      
      <div className="text-5xl font-bold text-gray-900 mb-2">
        {count}{stat.unit || '+'}
      </div>
      <div className="text-gray-600">{stat.label}</div>
      
      <div className="mt-6 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-blue-500" // Simplified class
          initial={{ width: 0 }}
          animate={{ width: inView ? '100%' : 0 }}
          transition={{ delay: index * 0.2 + 0.3, duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

export default ImpactSection;