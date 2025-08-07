import React from 'react';
import { HeroContent } from '../../utils/homeData';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  content: HeroContent;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ content, backgroundImage }) => (
  <section
    className="min-h-screen flex items-center relative overflow-hidden bg-black"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-black opacity-60"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {content.hero_title_part1} <br />
          <span className="bg-gradient-to-r from-[#BBFEFF] to-cyan-500 bg-clip-text text-transparent px-4">
            {content.hero_title_part2}
          </span>
        </h1>
        <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
          {content.hero_description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            to="#contact-form"
            className="bg-gradient-to-r bg-[#BBFEFF] text-black px-8 py-4 rounded-[0.3rem] font-semibold hover:bg-cyan-300 transition-colors duration-300 shadow-lg flex items-center justify-center space-x-2"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="#expertiseSection"
            className="bg-gradient-to-r bg-[#BBFEFF] text-black px-8 py-4 rounded-[0.3rem] font-semibold hover:bg-cyan-300 transition-colors duration-300 shadow-lg flex items-center justify-center space-x-2"
          >
            <span>Our Expertise</span>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;