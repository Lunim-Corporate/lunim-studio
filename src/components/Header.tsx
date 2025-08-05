// src/components/Header.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Previous Work', path: '/#past-projects' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' && location.hash === '';
    }
    if (path === '/#past-projects') {
      return location.pathname === '/' && location.hash === '#past-projects';
    }
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header Content Container */}
        <div className="flex items-center justify-between h-16">

          {/* Left Group: Logo and Desktop Navigation */}
          {/* This new div will hold the logo and menu items together on the left */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex-shrink-0">
                <img
                  src="../src/assets/Lunim Logo.png" // Verify this path from Header.tsx
                  alt="Lunim Logo"
                  className="h-12 w-auto hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Desktop Navigation (moved to be next to logo) */}
            {/* Removed flex-grow and justify-center to make it align left */}
            <nav className="hidden md:flex space-x-8 ml-8"> {/* Added ml-8 for spacing */}
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                    isActive(item.path)
                      ? 'text-white'
                      : 'text-white hover:text-white'
                  }`}
                  onClick={() => { setIsMenuOpen(false); }}
                >
                  {item.name}
                  <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-white transform transition-transform duration-200 ${
                    isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Group: Get In Touch button and Mobile menu button */}
          <div className="flex items-center flex-shrink-0"> {/* New container for right-aligned items */}
            {/* Desktop Button (remains as is) */}
            <div className="hidden md:flex">
              <Link
                to="#innovateForm"
                className="px-4 py-2 rounded-md text-black bg-[#BBFEFF] hover:bg-cyan-300 transition-colors duration-300 font-semibold"
              >
                Get In Touch
              </Link>
            </div>

            {/* Mobile menu button (remains as is and available on mobile) */}
            <div className="md:hidden ml-4"> {/* Added ml-4 for spacing */}
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
              </button>
            </div>
          </div>

        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 border-t border-gray-200">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-white bg-gray-700'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile version of the "Get In Touch" button - this ensures it's available on mobile too */}
              <Link
                to="#innovateForm"
                className="block px-3 py-2 text-base font-medium bg-[#BBFEFF] text-black rounded-md text-center hover:bg-cyan-300 transition-colors duration-300 mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;