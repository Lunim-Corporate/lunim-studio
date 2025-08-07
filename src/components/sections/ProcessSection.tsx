import React from 'react';
import { ProcessItem } from '../../utils/homeData';

interface ProcessSectionProps {
  items: ProcessItem[];
  title: string;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ 
  items,
  title 
}) => (
  <section className="bg-[#0f172a] py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-12">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {items.map((item, index) => {
          const Icon = item.icon as React.ComponentType<{ className?: string }>;
          
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-[#BBFEFF] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {typeof item.icon === 'number' ? (
                  <span className="text-black text-2xl font-bold">{item.icon}</span>
                ) : (
                  <Icon className="w-7 h-7 text-black" />
                )}
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-gray-200 text-base max-w-xs">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProcessSection;