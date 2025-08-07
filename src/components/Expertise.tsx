import React from 'react';
import { Code, Database, Cloud, File as Mobile, Palette, BarChart3 } from 'lucide-react';

const Expertise: React.FC = () => {
  const expertiseAreas = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and technologies',
      icon: Code,
      color: 'blue',
    },
    {
      title: 'Database Design',
      description: 'Scalable database architecture and optimization for peak performance',
      icon: Database,
      color: 'green',
    },
    {
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure setup and management for reliable operations',
      icon: Cloud,
      color: 'purple',
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      icon: Mobile,
      color: 'orange',
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that creates engaging and intuitive experiences',
      icon: Palette,
      color: 'pink',
    },
    {
      title: 'Data Analytics',
      description: 'Business intelligence and data visualization for informed decisions',
      icon: BarChart3,
      color: 'cyan',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      pink: 'bg-pink-100 text-pink-600',
      cyan: 'bg-cyan-100 text-cyan-600',
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Areas of Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bring deep expertise across multiple domains to deliver comprehensive solutions that drive your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area) => (
            <div
              key={area.title}
              className="group p-8 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${getColorClasses(area.color)} mb-6`}>
                <area.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {area.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to leverage our expertise?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how our skills can help achieve your business goals.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;