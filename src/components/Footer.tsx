// File: src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Case Studies', path: '/case-studies' },
    /*{ name: 'Our Team', path: '/our-team' },*/
    { name: 'Get In Touch', path: '/get-in-touch' },
  ];

  // const serviceItems = [
  //   'AI Solutions',
  //   'Web Development',
  //   'Mobile Apps',
  //   'UX/UI Design',
  //   'Cloud Infrastructure',
  //   'Data Analytics'
  // ];

  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 10,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    x: Math.random() * 100,
  }));

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden pt-16 pb-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-cyan-500/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-t from-purple-500/5 to-transparent"></div>
        
        {/* Animated bubbles */}
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute rounded-full bg-gradient-to-br from-cyan-400/10 to-purple-500/5 animate-float"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.x}%`,
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${bubble.delay}s`,
              bottom: '-30px',
            }}
          />
        ))}

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Lunim Studio
            </h3>
            <p className="text-gray-400 mb-6 max-w-xs">
              Light the way to your next moonshot.
              We specialise in design thinking, AI integration, and Web3 to power your next giant leap in digital innovation.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h4>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Our Services</h4>
            <ul className="space-y-3">
              {serviceItems.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                <a
                  href="mailto:hello@lunim.io"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  hello@lunim.io
                </a>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                <a
                  href="tel:+442030519057"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  +44 20 3051 9057
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  London, United Kingdom
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Risidio Ltd. T/A Lunim Innovation Studio. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <Link
              to="/privacy-policy"
              className="text-gray-500 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center"
            >
              Privacy Policy <ExternalLink className="w-3 h-3 ml-1" />
            </Link>
            
            <button
              onClick={scrollToTop}
              className="text-gray-500 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
              aria-label="Scroll to top"
            >
              Back to top
              <ArrowUp className="w-4 h-4 ml-2 group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Styles for animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
            opacity: 0.9;
          }
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;