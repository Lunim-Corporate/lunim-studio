// src/components/Header.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/lunim-logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Our Team', path: '/our-team' },

  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' && location.hash === '';
    }
    if (path === '/case-studies') {
      return location.pathname === '/case-studies' || 
             (location.pathname === '/' && location.hash === '#case-studies');
    }
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isAtTop 
          ? 'bg-transparent py-4' 
          : 'bg-transparent backdrop-blur-xl py-4 shadow-2xl shadow-cyan-500/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo without glow */}
          <Link 
            to="/" 
            className="relative z-10"
          >
            <img
              src={logo}
              alt="Lunim Logo"
              className="h-12 w-auto transition-all duration-500"
            />
          </Link>

          {/* Desktop navigation with fixed hover effect */}
          <div className="hidden md:flex relative" ref={navRef}>
            <div className="flex space-x-1">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative z-10 px-6 py-3 font-medium text-lg transition-all duration-300 ${
                    isActive(item.path) 
                      ? 'text-cyan-300' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive(item.path) && (
                    <span className="absolute bottom-1 left-1/2 w-4 h-1 bg-cyan-400 rounded-full -translate-x-1/2 animate-pulse"></span>
                  )}
                  <span className="absolute inset-0 bg-cyan-500/10 rounded-full scale-90 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Get in touch button */}
          <div className="flex items-center">
            <Link
              to="/get-in-touch"
              className="hidden md:block relative overflow-hidden group px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-500 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40"
            >
              <span className="relative z-10 font-bold text-black">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12"></div>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden ml-4 relative z-50 p-3 rounded-full bg-black/30 backdrop-blur border border-cyan-500/30"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-cyan-400" />
              ) : (
                <Menu className="w-6 h-6 text-cyan-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with fixed close functionality */}
      <div 
        ref={menuRef}
        className={`md:hidden fixed inset-0 bg-[#0a0a1a]/95 backdrop-blur-3xl pt-24 pb-12 z-40 flex flex-col items-center transition-all duration-500 ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="w-full max-w-xs space-y-2 relative z-10">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-6 py-5 text-xl font-medium rounded-xl backdrop-blur-lg border ${
                isActive(item.path)
                  ? 'text-cyan-300 bg-cyan-500/10 border-cyan-500/30'
                  : 'text-white/90 bg-white/5 border-white/10 hover:border-cyan-500/50'
              } transition-all duration-300`}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <span>{item.name}</span>
                {isActive(item.path) && (
                  <div className="ml-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                )}
              </div>
            </Link>
          ))}
        </div>
        
        <Link
          to="/getintouch"
          className="mt-8 relative z-10 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-bold text-black"
          onClick={() => setIsMenuOpen(false)}
        >
          Get In Touch
        </Link>
      </div>
    </header>
  );
};

export default Header;