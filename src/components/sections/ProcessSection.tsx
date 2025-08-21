import React, { useState, useEffect } from 'react';
import Xarrow, { Xwrapper } from 'react-xarrows';
import { ProcessItem } from '../../utils/homeData';

interface ProcessSectionProps {
  items: ProcessItem[];
  title: string;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ items, title }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <section className="bg-[#0f172a] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-12">{title}</h2>

        <Xwrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative">
            {items.map((item, index) => {
              const Icon = item.icon as React.ComponentType<{ className?: string }>;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center relative"
                >
                  {/* Circle wrapper with unique ID for arrows */}
                  <div
                    id={`process-circle-${index}`}
                    className="bg-[#BBFEFF] w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-xl"
                  >
                    {typeof item.icon === 'number' ? (
                      <span className="text-black text-xl md:text-2xl font-bold">
                        {item.icon}
                      </span>
                    ) : (
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-black" />
                    )}
                  </div>

                  <h3 className="text-[#BBFEFF] font-semibold text-lg mt-4 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base max-w-xs">{item.weeks}</p>
                  <p className="text-gray-200 text-sm md:text-base max-w-xs mt-2">{item.description}</p>
                </div>
              );
            })}

            {/* Connectors (only show on larger screens) */}
            {!isMobile && items.map((_, index) =>
              index < items.length - 1 ? (
                <Xarrow
                  key={index}
                  start={`process-circle-${index}`}
                  end={`process-circle-${index + 1}`}
                  strokeWidth={2.5}
                  color="#BBFEFF"
                  headSize={6}
                  curveness={0.4}   
                  path="smooth"     
                  animateDrawing={1.5}
                />
              ) : null
            )}
          </div>
        </Xwrapper>
      </div>
    </section>
  );
};

export default ProcessSection;