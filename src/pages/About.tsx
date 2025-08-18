import { motion } from 'framer-motion';
import HeroSection from '../components/about/HeroSection';
import JourneySection from '../components/about/JourneySection';
import ValuesSection from '../components/about/ValuesSection';
import TeamSection from '../components/about/TeamSection';
import BehindTheScenesSection from '../components/about/BehindTheScenesSection';
import ImpactSection from '../components/about/ImpactSection';
import CallToActionSection from '../components/about/CallToActionSection';
import FloatingBackground from '../components/about/FloatingBackground';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen bg-[#141420]"
    >
      <FloatingBackground />
      
      <div className="relative z-10">
        {/* <HeroSection />
        <JourneySection />
        <ValuesSection /> */}
        <TeamSection />
        {/* <BehindTheScenesSection />
        <ImpactSection />
        <CallToActionSection /> */}
      </div>
    </motion.div>
  );
};

export default AboutPage;