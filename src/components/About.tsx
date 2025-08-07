import React from 'react';
import { Users, Award, Clock, Target } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '10+', label: 'Years Experience', icon: Clock },
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '25+', label: 'Awards Won', icon: Award },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Our Company
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are passionate innovators committed to delivering exceptional solutions that transform businesses and drive growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We believe in the power of technology to transform businesses and improve lives. Our mission is to 
              provide cutting-edge solutions that help our clients achieve their goals while maintaining the highest 
              standards of quality and innovation.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between complex technology and business needs, we've grown 
              into a trusted partner for organizations across various industries. Our team of experts brings 
              diverse backgrounds and deep expertise to every project.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-base font-medium">
                Innovation
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-base font-medium">
                Quality
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-base font-medium">
                Collaboration
              </span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-base font-medium">
                Growth
              </span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-2xl">
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Us?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Proven Excellence</h4>
              <p className="text-gray-600 text-base">
                Our track record speaks for itself with hundreds of successful projects and satisfied clients.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h4>
              <p className="text-gray-600 text-base">
                Our skilled professionals bring years of experience and cutting-edge expertise to every project.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Results-Driven</h4>
              <p className="text-gray-600 text-base">
                We focus on delivering measurable results that drive your business forward and exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;