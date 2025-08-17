// src/components/about/ValuesSection.tsx
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Lightbulb, 
  HeartPulse, 
  Globe,
  LucideIcon
} from 'lucide-react';
import { coreValues } from '../../utils/aboutData';

interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const ValuesSection = () => {
  const values = coreValues;

  const colorMap: Record<string, [string, string]> = {
    "from-blue-500 to-cyan-500": ["#3b82f6", "#06b6d4"],
    "from-purple-500 to-indigo-500": ["#a855f7", "#6366f1"],
    "from-pink-500 to-rose-500": ["#ec4899", "#f43f5e"],
    "from-green-500 to-emerald-500": ["#22c55e", "#10b981"]
  };

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 z-0"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we create
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            const [startColor, endColor] = colorMap[value.color] || ["#e5e7eb", "#e5e7eb"];
            return (
              <motion.div
                key={value.title}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.2, duration: 0.7 } 
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-white rounded-2xl p-8 h-full shadow-xl border border-gray-100 flex flex-col"
                  whileHover={{ 
                    y: -15,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600 flex-grow">{value.description}</p>
                  
                  {/* Animated underline */}
                  <motion.div 
                    className="mt-6 h-1 w-24 bg-gradient-to-r from-gray-200 to-gray-200 rounded-full"
                    animate={{
                      background: [
                        "linear-gradient(to right, #e5e7eb, #e5e7eb)",
                        `linear-gradient(to right, ${startColor}, ${endColor})`,
                        `linear-gradient(to right, ${startColor}, ${endColor})`
                      ],
                      width: ["6rem", "10rem", "6rem"]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;