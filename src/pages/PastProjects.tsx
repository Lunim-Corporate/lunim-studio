import React from 'react';
import ProjectShowcaseSection from '../components/sections/ProjectShowcaseSection';
import { ourServices } from '../utils/homeData';

const PastProjects: React.FC = () => {
  return (
    
      <ProjectShowcaseSection 
        title="Previous Work" 
        items={ourServices} 
      />
  );
};

export default PastProjects;