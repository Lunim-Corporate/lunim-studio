// src/components/Header.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    // Changed 'Case Studies' to 'Past Projects' and updated its path to scroll to the section on Home page
    { name: 'Past Projects', path: '/#past-projects' }, // UPDATED PATH HERE
  ];

  const isActive = (path: string) => {
    // For home page, we check both the path and if the hash matches (for #past-projects)
    if (path === '/') {
      return location.pathname === '/' && location.hash === '';
    }
    // For the #past-projects link, we check if we are on the home page AND the hash matches
    if (path === '/#past-projects') {
      return location.pathname === '/' && location.hash === '#past-projects';
    }
    // For other paths, standard matching
    return location.pathname === path;
  };


  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                src="/src/assets/Lunim Logo.png"
                alt="Lunim Logo"
                className="h-12 w-auto hover:scale-105 transition-transform duration-300">
              </img>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                  isActive(item.path)
                    ? 'text-white' // Active state for text
                    : 'text-white hover:text-white' // Inactive state
                }`}
                 onClick={() => { // Close mobile menu if it were open (doesn't hurt on desktop)
                   setIsMenuOpen(false);
                 }}
              >
                {item.name}
                <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-white transform transition-transform duration-200 ${
                  isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Get Started Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#BBFEFF] to-[#BBFEFF] text-black px-6 py-2 rounded-[0.5rem] font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>Get InTouch</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />} {/* Adjusted icon colors for mobile */}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 border-t border-gray-200"> {/* Changed background to match header */}
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-white bg-gray-700' // Active state for mobile
                      : 'text-gray-300 hover:text-white hover:bg-gray-700' // Inactive state for mobile
                  }`}
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="w-full bg-[#BBFEFF] text-black px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center justify-center space-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Get Started</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;