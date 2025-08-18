import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Expertise from './pages/Expertise';
import AIAgentBuilder from './pages/aiagentbuilder';
import Contact from './pages/Contact';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ProjectAtlas from './pages/ProjectAtlas';
import AIPoweredTriage from './pages/AIPoweredTriage';
import ConsultingPage from './pages/ConsultingPage';
import MaintenancePage from './pages/MaintenancePage';
import AIWhatsAppInteractorPage from './pages/AIWhatsAppInteractorPage';
import ScrollToTop from './components/ScrollToTop';
import AdminPanel from './pages/AdminPanel';
import AdminLogin from './pages/AdminLogin';
import PageNotFound from './components/PageNotFound/PageNotFound';
// import AboutPage from './pages/About';


const SafeFooter = (props: any) => {
  const { jsx, ...rest } = props;
  return <Footer {...rest} />;
};

// Layout component that includes Header and Footer
const MainLayout: React.FC = () => (
  <div className="App">
    <Header />
    <Outlet /> {/* This renders the matched child route */}
    <SafeFooter />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Routes that use the MainLayout (with Header/Footer) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pastprojects" element={<Home scrollTo="past-projects" />} />
          <Route path="/contact" element={<Home scrollTo="contact" />} />
          <Route path="/expertise" element={<Home scrollTo="expertise" />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/expertise" element={<Expertise />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies/aiagentbuilder" element={<AIAgentBuilder />} />
          <Route path="/case-studies/project-atlas" element={<ProjectAtlas />} />
          <Route path="/case-studies/ai-powered-triage" element={<AIPoweredTriage />} />
          <Route path="/case-studies/ai-whatsapp-interactor" element={<AIWhatsAppInteractorPage />} />
          <Route path="/case-studies/consulting" element={<ConsultingPage />} />
          <Route path="/case-studies/maintenance" element={<MaintenancePage />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Route>
        
        {/* 404 Page - outside the MainLayout */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;