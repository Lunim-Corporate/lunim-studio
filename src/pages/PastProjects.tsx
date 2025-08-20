import React from 'react';
import ProjectShowcaseSection from '../components/sections/ProjectShowcaseSection';
import { ourServices } from '../utils/homeData';

const PastProjects: React.FC = () => {
  return (
    
      <ProjectShowcaseSection 
        title="Case Studies" 
        items={ourServices} 
      />
  );
};

export default PastProjects;