import React from 'react';
import { PrismicLink, PrismicRichText } from '@prismicio/react';
import { Mail, Phone, MapPin, ArrowUp, ExternalLink } from 'lucide-react';
import { useLayoutData } from '../contexts/LayoutContext';
import { asText } from '@prismicio/helpers';

const Footer: React.FC = () => {
  const layout = useLayoutData(); // Get layout data from context
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Decorative bubbles logic remains unchanged
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 10,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    x: Math.random() * 100,
  }));

  // Render a loading state or null if the layout data hasn't been fetched yet
  if (!layout) {
    return null; 
  }

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden pt-16 pb-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-cyan-500/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-t from-purple-500/5 to-transparent"></div>
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
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main Footer Content - dynamic */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              <PrismicRichText field={layout.data.footer_company_name} />
            </div>
            <div className="text-gray-400 mb-6 max-w-xs">
              <PrismicRichText field={layout.data.footer_tagline} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-lg font-semibold mb-4 text-cyan-400">
              <PrismicRichText field={layout.data.footer_quick_links_title} />
            </div>
            <ul className="space-y-3">
              {layout.data.footer_quick_links.map((item, index) => (
                <li key={index}>
                  <PrismicLink 
                    field={item.link_object} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item.link_label}
                  </PrismicLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="text-lg font-semibold mb-4 text-cyan-400">
              <PrismicRichText field={layout.data.footer_contact_title} />
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                <a href={`mailto:${layout.data.footer_email}`} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  {layout.data.footer_email}
                </a>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                <a href={`tel:${layout.data.footer_phone}`} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  {layout.data.footer_phone}
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  {asText(layout.data.footer_address)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            <PrismicRichText field={layout.data.footer_copyright_text} />
          </div>
          <div className="flex items-center space-x-6">
            <PrismicLink 
              field={layout.data.footer_privacy_policy_link} 
              className="text-gray-500 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center"
            >
              Privacy Policy <ExternalLink className="w-3 h-3 ml-1" />
            </PrismicLink>
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
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-20px) rotate(10deg); opacity: 0.9; }
        }
        .animate-float { animation: float 15s ease-in-out infinite; }
      `}</style>
    </footer>
  );
};

export default Footer;