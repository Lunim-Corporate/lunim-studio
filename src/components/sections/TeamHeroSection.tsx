import React from 'react';
import { Content } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';
import { asText } from '@prismicio/helpers';

interface TeamHeroSectionProps {
  slice: Content.TeamHeroSlice;
}

const TeamHeroSection: React.FC<TeamHeroSectionProps> = ({ slice }) => {
  return (
    <header className="text-center mb-12 px-4">
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent mb-4">
        {asText(slice.primary.title)}
      </h1>
      <div className="text-slate-400 max-w-2xl mx-auto text-lg">
        <PrismicRichText field={slice.primary.description} />
      </div>
    </header>
  );
};

export default TeamHeroSection;
