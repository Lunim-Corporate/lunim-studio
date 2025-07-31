// Footer.tsx or Footer.jsx

import React from 'react';
import { Twitter, Facebook, Linkedin, Instagram, Bot, Users, Monitor, Cpu, Brain, Code } from 'lucide-react';
import LunimLogo from '../assets/Lunim Logo.png'; // Adjust path as necessary

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const bubbles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    x: Math.random() * 100,
  }));

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

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <img
              src={LunimLogo}
              alt="Lunim Logo"
              className="h-12 w-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-6 md:mb-0">
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

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Lunim. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-6">
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
    </footer>
  );
};

export default Footer;
