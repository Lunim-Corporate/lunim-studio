import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { PrismicProvider } from "@prismicio/react";
import { linkResolver } from "./prismicLinkResolver";
import { LayoutProvider } from './contexts/LayoutContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Expertise from './pages/Expertise';
// import AIAgentBuilder from './pages/aiagentbuilder';
import Contact from './pages/Contact';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
// import ProjectAtlas from './pages/ProjectAtlas';
// import AIPoweredTriage from './pages/AIPoweredTriage';
// import ConsultingPage from './pages/ConsultingPage';
// import MaintenancePage from './pages/MaintenancePage';
// import AIWhatsAppInteractorPage from './pages/AIWhatsAppInteractorPage';
import CaseStudyPage from './pages/CaseStudyPage';
import ScrollToTop from './components/ScrollToTop';
import AdminPanel from './pages/AdminPanel';
import AdminLogin from './pages/AdminLogin';
import PageNotFound from './components/PageNotFound/PageNotFound';
import OurTeam from './pages/OurTeam';
// import AboutPage from './pages/About';


const SafeFooter = (props: any) => {
  const { jsx, ...rest } = props;
  return <Footer {...rest} />;
};

// Layout component that includes Header and Footer
const MainLayout: React.FC = () => (
  <LayoutProvider>
  <div className="App">
    <Header />
    <Outlet /> {/* This renders the matched child route */}
    <SafeFooter />
  </div>
  </LayoutProvider>
);

function App() {
  return (
    <Router>
      <PrismicProvider linkResolver={linkResolver}>
      <ScrollToTop />
      <Routes>
        {/* Routes that use the MainLayout (with Header/Footer) */}
        <Route element={<MainLayout />}>
          {/* Main Homepage Route */}
          <Route path="/" element={<Home />} />

          {/* Routes that render the homepage and scroll to a section */}
          <Route path="/case-studies" element={<Home scrollTo="case-studies" />} />
          <Route path="/get-in-touch" element={<Home scrollTo="contact" />} />
          <Route path="/expertise" element={<Home scrollTo="expertise" />} />

          {/* Dynamic route for individual case study pages */}
          <Route path="/case-studies/:uid" element={<CaseStudyPage />} />
          
          {/* Other distinct pages */}
          <Route path="/packages" element={<Packages />} />
          <Route path="/expertise" element={<Expertise />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/case-studies/auto-portfolio-builder" element={<AIAgentBuilder />} />
          <Route path="/case-studies/winner-takes-all-dao" element={<ProjectAtlas />} />
          <Route path="/case-studies/stacks-nft-collection" element={<AIPoweredTriage />} />
          <Route path="/case-studies/ai-whatsapp-assistant" element={<AIWhatsAppInteractorPage />} />
          <Route path="/case-studies/pizza-hut-redesign" element={<ConsultingPage />} />
          <Route path="/case-studies/toucanbox-sign-up" element={<MaintenancePage />} /> */}
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Route>
        
        {/* 404 Page - outside the MainLayout */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </PrismicProvider>
    </Router>
  );
}

export default App;