import React from 'react';
import { Check, Star, Zap, Shield, Rocket } from 'lucide-react';

const Packages: React.FC = () => {
  const packages = [
    {
      name: 'Creative Discovery',
      price: '$5,000',
      period: '/month',
      description: 'Unleash creative potential through design thinking workshops and innovation sessions',
      features: [
        'Creative ideation workshops',
        'Design thinking methodology',
        'Brand identity exploration',
        'Visual concept development',
        'Creative brief documentation',
      ],
      icon: Zap,
      popular: false,
    },
    {
      name: 'AI Strategy Discovery',
      price: '$7,500',
      period: '/month',
      description: 'Identify AI opportunities and create intelligent solution roadmaps',
      features: [
        'AI readiness assessment',
        'Machine learning feasibility study',
        'Data architecture planning',
        'AI implementation roadmap',
        'ROI projections and metrics',
      ],
      icon: Rocket,
      popular: true, // This one remains popular
    },
    {
      name: 'Web3 Research Sprint',
      price: '$8,500',
      period: '/month',
      description: 'Explore blockchain opportunities and decentralized solution strategies',
      features: [
        'Blockchain technology assessment',
        'Token economics research',
        'Smart contract planning',
        'DeFi integration analysis',
        'Web3 user experience mapping',
      ],
      icon: Shield,
      popular: false,
    },
  ];

  // Define data for the new sets of cards
  const newPackagesSet1 = [
    {
      name: 'UX Prototype Sprint',
      price: '$12,000',
      period: '/month',
      description: 'Build interactive prototypes with user-centered design principles',
      features: [
        'Interactive wireframe creation',
        'User journey mapping',
        'Prototype development',
        'Usability testing sessions',
        'Design system foundation',
      ],
      icon: Rocket, // Rocket icon as requested
      popular: false, // Not popular
    },
    {
      name: 'AI-Powered Prototype',
      price: '$14,000',
      period: '/month',
      description: 'Develop intelligent prototypes with machine learning capabilities',
      features: [
        'ML model development',
        'AI feature integration',
        'Data pipeline setup',
        'Algorithm optimization',
        'Performance testing',
      ],
      icon: Rocket, // Rocket icon as requested
      popular: false, // Not popular
    },
    {
      name: 'Web3 dApp Prototype',
      price: '$22,000',
      period: '/month',
      description: 'Create decentralized application prototypes with blockchain integration',
      features: [
        'Smart contract prototyping',
        'Blockchain integration',
        'Wallet connectivity',
        'Token functionality',
        'Security audit preparation',
      ],
      icon: Rocket, // Rocket icon as requested
      popular: false, // Not popular
    },
  ];

  const newPackagesSet2 = [
    {
      name: 'Creative MVP Launch',
      price: '$10,000',
      period: '/month',
      description: 'Build bespoke software tailored to your unique business requirements.',
      features: [
        'Requirements gathering',
        'Architecture design',
        'Full-stack development',
        'Quality assurance testing',
        'Deployment and support',
      ],
      icon: Rocket, // Rocket icon as requested
      popular: false,
    },
    {
      name: 'Creative MVP Launch',
      price: '$35,000',
      period: '/month',
      description: 'Launch market-ready creative solutions with full user experience',
      features: [
        'Full product development',
        'Creative asset production',
        'User interface implementation',
        'Performance optimization',
        'Launch strategy execution',
      ],
      icon: Rocket, // Rocket icon as requested
      popular: false,
    },
    {
      name: 'AI-Driven MVP',
      price: '$55,000',
      period: '/month',
      description: 'Deploy intelligent applications with production-ready AI features',
      features: [
        'Production ML models',
        'Scalable AI infrastructure',
        'Real-time analytics',
        'User feedback loops',
        'Continuous learning setup',
      ],
      icon: Rocket, // Rocket icon as requested
      popular: false,
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sprint Packages
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Choose from our expertly crafted sprint packages, each designed to leverage our core competencies.
          </p>
        </div>

        {/* First set of 3 cards (Original) */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-black rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white ${
                pkg.popular ? 'transform scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-900 rounded-xl mb-6">
                  <pkg.icon className="w-6 h-6 text-blue-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-300 mb-6">{pkg.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{pkg.price}</span>
                  <span className="text-gray-400">{pkg.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transform hover:scale-105'
                      : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- New Set 1 --- */}
        <div className="text-center mb-16 mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prototype Sprint</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
                Explore additional specialized packages tailored to specific business needs.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {newPackagesSet1.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-black rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white`}
            >
              {/* No popular banner for these new cards */}
              <div className="p-8">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-900 rounded-xl mb-6">
                  <pkg.icon className="w-6 h-6 text-blue-400" />
                </div>
                
                {/* --- New Headings Start --- */}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-300 mb-6">{pkg.description}</p>
                
                <h4 className="text-xl font-bold text-white mb-1">Buy Now</h4>
                <p className="text-gray-400 text-sm mb-6">Now</p>
                {/* --- New Headings End --- */}

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{pkg.price}</span>
                  <span className="text-gray-400">{pkg.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-200 bg-gray-700 text-gray-200 hover:bg-gray-600`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- New Set 2 --- */}
        <div className="text-center mb-16 mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">MVP Sprint</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
                Dive deeper into our specialized areas with these targeted sprint packages.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {newPackagesSet2.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-black rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white`}
            >
              {/* No popular banner for these new cards */}
              <div className="p-8">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-900 rounded-xl mb-6">
                  <pkg.icon className="w-6 h-6 text-blue-400" />
                </div>
                
                {/* --- New Headings Start --- */}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-300 mb-6">{pkg.description}</p>
                
                <h4 className="text-xl font-bold text-white mb-1">Buy Now</h4>
                <p className="text-gray-400 text-sm mb-6">Now</p>
                {/* --- New Headings End --- */}

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{pkg.price}</span>
                  <span className="text-gray-400">{pkg.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-200 bg-gray-700 text-gray-200 hover:bg-gray-600`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-black-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-2">Can I change my plan later?</h3>
              <p className="text-gray-300 text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Is there a free trial?</h3>
              <p className="text-gray-300 text-sm">We offer a 14-day free trial for all plans. No credit card required to start.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-300 text-sm">We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Do you offer refunds?</h3>
              <p className="text-gray-300 text-sm">Yes, we offer a 30-day money-back guarantee for all plans.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;