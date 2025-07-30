import React from 'react';
import { Mail, Phone, MapPin, Twitter, Facebook, Linkedin, Instagram, Bot, Users, Monitor, Cpu, Brain, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    services: [
      { name: 'Creative Design', href: '#' },
      { name: 'UX Design', href: '#' },
      { name: 'AI Integration', href: '#' },
      { name: 'Web3', href: '#' },
      { name: 'Agile Methods', href: '#' },
      { name: 'Sprint Process', href: '#' },
    ],
    company: [
      { name: 'Home', href: '#about' },
      { name: 'About Us', href: '#' },
      { name: 'Packages', href: '#' },
      { name: 'Expertise', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  // Animated bubble data
  const bubbles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    x: Math.random() * 100,
  }));

  // AI/Tech icons for floating elements
  const techIcons = [Bot, Users, Monitor, Cpu, Brain, Code];

  return (
    <footer className="bg-[#212121] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"></div>
        
        {/* Animated bubbles */}
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute rounded-full bg-gradient-to-br from-cyan-400/10 to-cyan-600/5 animate-float"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.x}%`,
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${bubble.delay}s`,
              bottom: '-50px',
            }}
          />
        ))}

        {/* Floating tech icons */}
        {techIcons.map((Icon, index) => (
          <div
            key={index}
            className="absolute animate-float-slow opacity-5"
            style={{
              left: `${(index * 15 + 10) % 90}%`,
              top: `${20 + (index * 10) % 60}%`,
              animationDelay: `${index * 2}s`,
              animationDuration: `${15 + index * 2}s`,
            }}
          >
            <Icon className="w-12 h-12 text-cyan-400" />
          </div>
        ))}

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/src/assets/Lunim Logo.png" 
                alt="Lunim Logo" 
                className="h-12 w-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We transform businesses through innovative technology solutions, 
              helping our clients achieve their goals with cutting-edge expertise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4 text-cyan-400">Services</h4>
                <ul className="space-y-2">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4 text-cyan-400">Company</h4>
                <ul className="space-y-2">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4 text-cyan-400">Resources</h4>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-lg mb-4 text-cyan-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">lunim@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <MapPin className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                  123 England <br />
                  United Kingdom
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Lunim. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(10deg);
          }
        }
        
        .animate-float {
          animation: float infinite ease-in-out;
        }
        
        .animate-float-slow {
          animation: float-slow infinite ease-in-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;