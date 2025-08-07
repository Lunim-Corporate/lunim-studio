import React from 'react';
import { Heart, Globe, Lightbulb, Shield, Timer,Users, Award, Clock, Globe as GlobeIcon } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon:Lightbulb,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology trends, ensuring our clients benefit from the latest innovations in AI, Web3, and digital design.'
    },
    {
      icon: Timer,
      title: 'Sprint Methodology',
      description: 'Our time-boxed approach ensures rapid progress, clear milestones, and continuous stakeholder engagement throughout every project.'
    },
    {
      icon: Users,
      title: 'Human-Centred',
      description: 'Every solution we create puts users first, ensuring intuitive experiences that drive engagement and deliver real business value.'
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Lunim Studio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a team of innovators, designers, and developers passionate about transforming ideas into reality through sprint-based methodologies.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              At Lunim Studio, we believe in the power of rapid iteration and focused execution.
                Our mission is to help businesses and entrepreneurs bring their most ambitious
                ideas to life through our proven sprint methodology.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We combine creativity, cutting-edge technology, and agile practices to deliver
              solutions that not only meet today's needs but anticipate tomorrow's opportunities.
            </p>
          </div>
          <div className="bg-black rounded-2xl p-8 border border-white">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8" style={{ color: '#BBFEFF' }} />
                </div>
                <div className="text-3xl font-bold text-white mb-1">25+</div>
                <div className="text-gray-200 text-base">Expert Team Members</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8" style={{ color: '#BBFEFF' }} />
                </div>
                <div className="text-3xl font-bold text-white mb-1">200+</div>
                <div className="text-gray-200 text-base">Successful Projects</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="w-8 h-8" style={{ color: '#BBFEFF' }} />
                </div>
                <div className="text-3xl font-bold text-white mb-1">8+</div>
                <div className="text-gray-200 text-base">Years of Experience</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <GlobeIcon className="w-8 h-8" style={{ color: '#BBFEFF' }} />
                </div>
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-gray-200 text-base">Countries Served</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="flex justify-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 bg-black rounded-2xl border border-white hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-black text-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 border border-white">
                    <value.icon className="w-6 h-6" style={{ color: '#BBFEFF' }} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300 text-base">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-black to-black-900 rounded-2xl p-8 text-center text-white border border-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our expertise and innovative solutions.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;