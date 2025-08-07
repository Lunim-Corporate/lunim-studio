import React from 'react';
import { ServiceItem } from '../../utils/homeData';

interface ExpertiseAreasSectionProps {
  items: ServiceItem[];
}

const ExpertiseAreasSection: React.FC<ExpertiseAreasSectionProps> = ({ items }) => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((area, index) => {
            const Icon = area.icon as React.ComponentType<{ className?: string }>;

            return (
              <div
                key={index}
                className="bg-black rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-20 hover:border-opacity-100 hover:shadow-2xl hover:shadow-white/20"
              >
                <div className={`${area.iconBg} text-black w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                <p className="text-gray-300 text-sm">{area.description}</p>
              </div>
            );
          })}
        </div>

        <div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Innovation Opportunities: Everywhere, For Everyone.
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Our team of experts in emerging tech will work closely with you to identify and implement custom strategies.
            <br />
            We combine creativity, cutting-edge technology, and agile practices to help you not only meet today's needs but also anticipate tomorrow's opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseAreasSection;