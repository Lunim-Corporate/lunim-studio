import React from 'react';
import { ServiceItem } from '../../utils/homeData';

interface ServiceGridSectionProps {
  title: string;
  items: ServiceItem[];
  columns: number;
  id?: string;
}

const ServiceGridSection: React.FC<ServiceGridSectionProps> = ({ 
  title, 
  items, 
  columns,
  id 
}) => {
  const gridClass = `grid grid-cols-1 sm:grid-cols-2 ${columns === 4 ? 'md:grid-cols-4' : ''} gap-10`;
  
  return (
    <section id={id} className="py-20 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-12">{title}</h2>
        <div className={gridClass}>
          {items.map((item, index) => {
            const Icon = item.icon as React.ComponentType<{ className?: string }>;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105"
              >
                <div className={`${item.iconBg || 'bg-[#BBFEFF]'} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
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
};

export default ServiceGridSection;