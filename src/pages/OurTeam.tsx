import React from 'react';
import TeamSection from '../components/about/TeamSection';
import HeroIntro from '../components/about/HeroIntro';

const OurTeam: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-200">
      <div className="w-full max-w-6xl px-4 mx-auto py-16">
        <div className="mb-12 mt-12 text-center">
          <HeroIntro />
        </div>

        <TeamSection />
      </div>
    </div>
  );
};

export default OurTeam;
