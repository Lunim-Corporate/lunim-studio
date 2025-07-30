import React from 'react';
import { Sparkles, Code, Database, Cloud, Smartphone, BarChart3, Palette, Monitor, Brain, Blocks, Zap, Timer } from 'lucide-react';

const Expertise: React.FC = () => {
  // Define the data for all six large expertise cards
  const expertiseAreas = [
    {
      title: 'Creative Design',
      description: 'Innovation Through Design Thinking',
      subheading: 'We harness the power of creative thinking to solve complex problems and generate breakthrough solutions. Our approach combines artistic vision with strategic thinking.', 
      icon: Palette,
      color: 'pink',
      coreCapabilities: [
        'Design thinking workshops and facilitation',
        'Creative ideation and brainstorming sessions',
        'Visual storytelling and brand narrative development',
        'Innovation strategy and creative problem-solving',
        'Art direction and creative campaign development',
      ],
    },
    {
      title: 'UX Design',
      description: 'Human-Centred Digital Experiences',
      subheading: 'User experience is at the heart of everything we create. We design intuitive, accessible, and delightful interfaces that users love to interact with.',
      icon: Code,
      color: 'blue',
      coreCapabilities: [
        'User research and persona development',
        'Information architecture and user journey mapping',
        'Wireframing and interactive prototyping',
        'Usability testing and accessibility auditing',
        'Design system creation and maintenance',
      ],
    },
    {
      title: 'AI Integration',
      description: 'Intelligent Solutions for Tomorrow',
      subheading: 'We integrate cutting-edge artificial intelligence to create smarter, more efficient solutions that learn and adapt to user needs.',
      icon: Brain,
      color: 'purple',
      coreCapabilities: [
        'Machine learning model development and deployment',
         'Natural language processing and chatbot creation',
         'Computer vision and image recognition systems',
         'Predictive analytics and recommendation engines',
         'AI strategy consulting and implementation',
      ],
    },
    {
      title: 'Web3',
      description: 'Decentralised Future Technologies',
      subheading: 'Building the decentralised web with blockchain technology, smart contracts, and innovative tokenomics for next-generation applications.',
      icon: Blocks,
      color: 'orange',
      coreCapabilities: [
       'Smart contract development and auditing',
       'DeFi protocol design and implementation',
       'NFT marketplace and collection creation',
       'DAO governance system development',
       'Multi-chain integration and interoperability',
      ],
    },
    {
      title: 'Agile Methods',
      description: 'Flexible and Adaptive Development',
      subheading: 'We embrace agile methodologies to deliver value quickly and adapt to changing requirements throughout the development process.',
      icon: Zap,
      color: 'green',
      coreCapabilities: [
        'Scrum and Kanban implementation',
        'Sprint planning and retrospective facilitation',
        'Continuous integration and deployment',
        'Cross-functional team collaboration',
        'Agile transformation consulting',
      ],
    },
    {
      title: 'Sprint Process',
      description: 'Rapid Innovation Cycles',
      subheading: 'Our sprint methodology ensures rapid prototyping, quick validation, and iterative improvement to get products to market faster.',
      icon: Timer,
      color: 'blue',
      coreCapabilities: [
       'Design sprint facilitation and execution',
       'Rapid prototyping and validation',
       'Time-boxed development cycles',
      'Stakeholder alignment and communication',
       'Risk mitigation through iterative testing',
      ],
    },
  ];

  // Helper function for dynamic icon background and text colors (adjusted for dark theme)
  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-600 text-white',
      green: 'bg-green-600 text-white',
      purple: 'bg-purple-600 text-white',
      orange: 'bg-orange-600 text-white',
      pink: 'bg-pink-600 text-white',
      cyan: 'bg-cyan-600 text-white',
    };
    return colors[color as keyof typeof colors] || 'bg-gray-800 text-gray-400';
  };

  return (
    <div className="min-h-screen bg-black text-white pt-16 relative overflow-hidden">
      {/* Neon Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Floating neon lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-pulse"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-pulse delay-1000"></div>
        
        {/* Corner accent glows */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-pink-500/20 to-transparent rounded-full blur-2xl"></div>
        
        {/* Floating neon icons */}
        <div className="absolute top-32 right-1/4 text-blue-500/30 animate-pulse">
          <Code className="w-8 h-8" />
        </div>
        <div className="absolute top-1/3 left-1/4 text-purple-500/25 animate-pulse delay-1000">
          <BarChart3 className="w-10 h-10" />
        </div>
        <div className="absolute top-2/3 right-1/3 text-cyan-500/30 animate-pulse delay-2000">
          <Smartphone className="w-6 h-6" />
        </div>
        <div className="absolute bottom-1/3 left-1/5 text-pink-500/25 animate-pulse">
          <Sparkles className="w-7 h-7" />
        </div>
        <div className="absolute top-1/2 right-1/6 text-green-500/30 animate-pulse delay-1000">
          <Database className="w-9 h-9" />
        </div>
        <div className="absolute bottom-1/4 right-2/3 text-orange-500/25 animate-pulse delay-2000">
          <Cloud className="w-8 h-8" />
        </div>
        
        {/* Additional smaller accent icons */}
        <div className="absolute top-1/4 left-2/3 text-blue-400/20 animate-pulse delay-500">
          <Code className="w-4 h-4" />
        </div>
        <div className="absolute bottom-1/2 left-1/6 text-purple-400/20 animate-pulse delay-1500">
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="absolute top-3/4 left-1/2 text-cyan-400/25 animate-pulse delay-3000">
          <BarChart3 className="w-6 h-6" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
            Our Areas of Expertise
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We bring deep expertise across multiple domains to deliver comprehensive solutions that drive your success.
          </p>
        </div>

        <div className="space-y-16">
          {expertiseAreas.map((expertise, index) => (
            <div
              key={index}
              className="bg-black backdrop-blur-sm rounded-xl shadow-lg p-8 md:p-12 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 relative group"
            >
              {/* Card neon accent */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                expertise.color === 'pink' ? 'bg-gradient-to-r from-pink-500/10 to-transparent' :
                expertise.color === 'blue' ? 'bg-gradient-to-r from-blue-500/10 to-transparent' :
                expertise.color === 'purple' ? 'bg-gradient-to-r from-purple-500/10 to-transparent' :
                expertise.color === 'orange' ? 'bg-gradient-to-r from-orange-500/10 to-transparent' :
                expertise.color === 'green' ? 'bg-gradient-to-r from-green-500/10 to-transparent' :
                expertise.color === 'cyan' ? 'bg-gradient-to-r from-cyan-500/10 to-transparent' : 'bg-gradient-to-r from-gray-500/10 to-transparent'
              }`}></div>
              
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
                {/* Left side of the card: Icon, Title, Description */}
                <div className="flex flex-col justify-center relative">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-xl mb-6 ${getColorClasses(expertise.color)} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>
                    <expertise.icon className="w-10 h-10 text-white relative z-10" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
                    {expertise.title}
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {expertise.description}
                  </p>
                  
                  {/* Vertical neon divider - only visible on md+ screens */}
                  <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-3/4 hidden md:block ${
                    expertise.color === 'pink' ? 'bg-gradient-to-b from-transparent via-pink-500/60 to-transparent shadow-lg shadow-pink-500/30' :
                    expertise.color === 'blue' ? 'bg-gradient-to-b from-transparent via-blue-500/60 to-transparent shadow-lg shadow-blue-500/30' :
                    expertise.color === 'purple' ? 'bg-gradient-to-b from-transparent via-purple-500/60 to-transparent shadow-lg shadow-purple-500/30' :
                    expertise.color === 'orange' ? 'bg-gradient-to-b from-transparent via-orange-500/60 to-transparent shadow-lg shadow-orange-500/30' :
                    expertise.color === 'green' ? 'bg-gradient-to-b from-transparent via-green-500/60 to-transparent shadow-lg shadow-green-500/30' :
                    expertise.color === 'cyan' ? 'bg-gradient-to-b from-transparent via-cyan-500/60 to-transparent shadow-lg shadow-cyan-500/30' : 
                    'bg-gradient-to-b from-transparent via-gray-500/60 to-transparent shadow-lg shadow-gray-500/30'
                  }`}>
                    {/* Glowing effect */}
                    <div className={`absolute inset-0 w-px ${
                      expertise.color === 'pink' ? 'bg-pink-500/40 blur-sm' :
                      expertise.color === 'blue' ? 'bg-blue-500/40 blur-sm' :
                      expertise.color === 'purple' ? 'bg-purple-500/40 blur-sm' :
                      expertise.color === 'orange' ? 'bg-orange-500/40 blur-sm' :
                      expertise.color === 'green' ? 'bg-green-500/40 blur-sm' :
                      expertise.color === 'cyan' ? 'bg-cyan-500/40 blur-sm' : 
                      'bg-gray-500/40 blur-sm'
                    }`}></div>
                  </div>
                </div>

                {/* Right side of the card: Core Capabilities heading, NEW line of text, and list */}
                <div className="mt-8 md:mt-0">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Core Capabilities
                  </h3>
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    {expertise.subheading}
                  </p>
                  <ul className="space-y-4 text-lg">
                    {expertise.coreCapabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-start space-x-3">
                        <span className={`mt-2 block w-2.5 h-2.5 rounded-full flex-shrink-0 ${expertise.color === 'pink' ? 'bg-pink-500' :
                           expertise.color === 'blue' ? 'bg-blue-500' :
                           expertise.color === 'purple' ? 'bg-purple-500' :
                           expertise.color === 'orange' ? 'bg-orange-500' :
                           expertise.color === 'green' ? 'bg-green-500' :
                           expertise.color === 'cyan' ? 'bg-cyan-500' : 'bg-gray-500'} shadow-lg shadow-current/50`}></span>
                        <p className="text-gray-300 leading-relaxed">{capability}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

function App() {
  return <Expertise />;
}

export default App;