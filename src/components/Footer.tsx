import React from 'react';
// Removed: import { Twitter, Facebook, Linkedin, Instagram, Bot, Users, Monitor, Cpu, Brain, Code } from 'lucide-react';
// Removed: import LunimLogo from '../assets/Lunim Logo.png'; // Adjust path as necessary
import { Link } from 'react-router-dom'; // ADD: Import Link for internal routing

const Footer: React.FC = () => {
  // Removed: const socialLinks = [
  // Removed:   { icon: Twitter, href: '#', label: 'Twitter' },
  // Removed:   { icon: Facebook, href: '#', label: 'Facebook' },
  // Removed:   { icon: Linkedin, href: '#', label: 'LinkedIn' },
  // Removed:   { icon: Instagram, href: '#', label: 'Instagram' },
  // Removed: ];

  const bubbles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    x: Math.random() * 100,
  }));

  // Removed: const techIcons = [Bot, Users, Monitor, Cpu, Brain, Code];

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

        {/* Floating tech icons - Removed this block */}
        {/* {techIcons.map((Icon, index) => (
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
        ))} */}

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
      {/* REDUCED vertical padding here from py-16 to py-4 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10"> {/* Adjusted py- value */}
        {/* Adjusted content flex container to center remaining items if logo/socials are gone */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8"> {/* Changed justify-between to justify-center */}
          {/* Logo - Removed this block */}
          {/* <div className="flex-shrink-0 mb-6 md:mb-0">
            <img
              src={LunimLogo}
              alt="Lunim Logo"
              className="h-12 w-auto hover:scale-105 transition-transform duration-300"
            />
          </div> */}

          {/* Social Icons - Removed this block */}
          {/* <div className="flex space-x-4 mb-6 md:mb-0">
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
          </div> */}
        </div>

        {/* Bottom Section */}
        {/* REDUCED mt-12 pt-8 to mt-4 pt-4 for less vertical space */}
        <div className="border-t border-gray-700 mt-4 pt-4"> {/* Adjusted margin-top and padding-top */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-200 text-base mb-4 md:mb-0">
              Risidio Ltd. T/A Lunim Innovation Studio
            </p>
            <div className="flex flex-col md:flex-row flex-wrap justify-center space-x-0 md:space-x-6 space-y-2 md:space-y-0"> {/* Adjusted spacing for vertical on small screens */}
              {/* Phone Number */}
              <a
                href="tel:+442030519057" // 'tel:' for phone numbers
                className="text-gray-200 hover:text-cyan-400 text-base transition-colors duration-300"
              >
                020 3051 9057
              </a>
              {/* Email */}
              <a
                href="mailto:hello@lunim.io" // 'mailto:' for email addresses
                className="text-gray-200 hover:text-cyan-400 text-base transition-colors duration-300"
              >
              hello@lunim.io
              </a>
              {/* Privacy Policy link */}
              <Link
                to="/privacy-policy"
                className="text-gray-200 hover:text-cyan-400 text-base transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Styles (kept as is) */}
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