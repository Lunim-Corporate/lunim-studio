import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PrismicLink } from '@prismicio/react';
import { Menu, X } from 'lucide-react';
import { useLayoutData } from '../contexts/LayoutContext';
import logo from '../assets/lunim-logo.png'; // Fallback logo

const Header: React.FC = () => {
  const layout = useLayoutData(); // Get layout data from context
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // All existing useEffect hooks for scroll and click outside remain the same
  useEffect(() => {
    const handleScroll = () => setIsAtTop(window.scrollY < 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // The menuItems are now generated from Prismic data, with a fallback
  const menuItems = layout?.data.header_navigation || [];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/' && location.hash === '';
    if (path === '/case-studies') return location.pathname.startsWith('/case-studies');
    return location.pathname === path;
  };

  if (!layout) {
    return null; // Or a loading skeleton while layout data is fetched
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isAtTop 
          ? 'bg-transparent py-2' 
          : 'bg-[#0a0a1a] py-2 shadow-2xl shadow-cyan-500/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="relative z-10">
            <img
              src={layout.data.header_logo.url || logo}
              alt={layout.data.header_logo.alt || "Lunim Logo"}
              className="h-12 w-auto transition-all duration-500"
            />
          </Link>

          <div className="hidden md:flex relative" ref={navRef}>
            <div className="flex space-x-1">
              {menuItems.map((item, index) => (
                <PrismicLink
                  key={index}
                  field={item.link_object}
                  className={`relative z-10 px-6 py-3 font-medium text-lg transition-all duration-300 ${
                    isActive((item.link_object as any)?.url || '') 
                      ? 'text-cyan-300' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.link_label}</span>
                  {isActive((item.link_object as any)?.url || '') && (
                    <span className="absolute bottom-1 left-1/2 w-4 h-1 bg-cyan-400 rounded-full -translate-x-1/2 animate-pulse"></span>
                  )}
                  <span className="absolute inset-0 bg-cyan-500/10 rounded-full scale-90 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                </PrismicLink>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <PrismicLink
              field={layout.data.header_cta_link}
              className="hidden md:block relative overflow-hidden group px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-500 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40"
            >
              <span className="relative z-10 font-bold text-black">{layout.data.header_cta_label}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12"></div>
            </PrismicLink>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden ml-4 relative z-50 p-3 rounded-full bg-black/30 backdrop-blur border border-cyan-500/30"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6 text-cyan-400" />}
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={menuRef}
        className={`md:hidden fixed inset-0 bg-[#0a0a1a]/90 backdrop-blur-lg pt-24 pb-12 z-40 flex flex-col items-center transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <PrismicLink
          field={layout.data.header_cta_link}
          className="w-full max-w-xs mb-8 text-center ... "
          onClick={() => setIsMenuOpen(false)}
        >
          {layout.data.header_cta_label}
        </PrismicLink>
        <div className="w-full max-w-xs space-y-2 relative z-10">
          {menuItems.map((item, index) => (
            <PrismicLink
              key={index}
              field={item.link_object}
              className={`block px-6 py-5 text-xl ...`}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <span>{item.link_label}</span>
              </div>
            </PrismicLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;