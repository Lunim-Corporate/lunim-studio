// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Expertise from './pages/Expertise';
import About from './pages/About';
import AIAgentBuilder from './pages/aiagentbuilder';
import Contact from './pages/Contact';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'; // Correct import for PrivacyPolicyPage

// Import your project pages
import ProjectAtlas from './pages/ProjectAtlas';
import AIPoweredTriage from './pages/AIPoweredTriage';
// Import the new pages for Consulting and Maintenance
import ConsultingPage from './pages/ConsultingPage'; // Make sure this matches your filename
import MaintenancePage from './pages/MaintenancePage'; // Make sure this matches your filename

import AIWhatsAppInteractorPage from './pages/AIWhatsAppInteractorPage'; // Import the new AI WhatsApp Interactor page
import ScrollToTop from './components/ScrollToTop'; // Import the new ScrollToTop component

// --- IMPORTS FOR ADMIN PANEL ---
import AdminPanel from './pages/AdminPanel';
import AdminLogin from './pages/AdminLogin';
// --- END ADMIN IMPORTS ---

function App() {
  return (
    <Router>
      {/* Place ScrollToTop directly inside Router, so it can listen to route changes */}
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Routes for your specific case studies */}
          <Route path="/aiagentbuilder" element={<AIAgentBuilder />} />
          <Route path="/case-studies/aiagentbuilder" element={<AIAgentBuilder />} />
          <Route path="/case-studies/project-atlas" element={<ProjectAtlas />} />
          <Route path="/case-studies/ai-powered-triage" element={<AIPoweredTriage />} />

          {/* Route for AI WhatsApp Interactor Page */}
          <Route path="/ai-whatsapp-interactor" element={<AIWhatsAppInteractorPage />} />

          {/* Routes for Consulting and Maintenance services */}
          <Route path="/services/consulting" element={<ConsultingPage />} />
          <Route path="/services/maintenance" element={<MaintenancePage />} />

          {/* --- ADMIN ROUTES --- */}
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          {/* --- END ADMIN ROUTES --- */}

          {/* ADDED: Route for the Privacy Policy page */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

          {/* Optional: Add a catch-all route for 404 Not Found */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
