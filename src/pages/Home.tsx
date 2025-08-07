import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';
import ServiceGridSection from '../components/sections/ServiceGridSection';
import ProjectShowcaseSection from '../components/sections/ProjectShowcaseSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';
import ExpertiseAreasSection from '../components/sections/ExpertiseAreasSection';
import ImageTextSection from '../components/sections/ImageTextSection';
import ProcessSection from '../components/sections/ProcessSection';
import {
  heroContent,
  expertiseAreas,
  expertiseSection,
  devProcess,
  ourServices,
  faqData
} from '../utils/homeData';
import backgroundImageSrc from "../assets/background.png";

const App: React.FC = () => {
  const location = useLocation();

  // Handle scroll to hash
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <div className="pt-16 bg-black">
      <HeroSection 
        content={heroContent} 
        backgroundImage={backgroundImageSrc} 
      />
      
      <ExpertiseAreasSection items={expertiseAreas} />
      
      <ServiceGridSection 
        title="Core Expertise"
        items={expertiseSection}
        columns={4}
        id="expertiseSection"
      />
      
      <ImageTextSection 
        title="Clarity in Days. Confidence for Years"
        subtitle="Intensive design sprints to turn vision into reality."
        description="We don't just innovate for you, we equip you with the tools to do so yourself. By the end of our process, you will have more than just a product; you'll have a unified team, a validated concept, and a clear strategic plan to take your moonshot idea to market."
      />
      
      <ProcessSection 
        items={devProcess}
        title="The Framework for Your Next Breakthrough"
      />
      
      <ProjectShowcaseSection 
        title="Previous Work"
        items={ourServices}
      />
      
      <FAQSection 
        title="Frequently Asked Questions"
        items={faqData}
      />
      
      <ContactSection />
    </div>
  );
};

export default App;