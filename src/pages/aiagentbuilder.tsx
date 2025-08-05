// src/pages/ConsultingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is imported

// Import the new images
import n8n5Image from '../assets/ai-agent-detail.png'; // For the hero section

const aiagentbuilder: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black"
        style={{
          backgroundImage: `url(${n8n5Image})`, // Use n8n6.png for hero background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
            AI Agent Portfolio Builder
          </h1>
        </div>
      </section>

      {/* NEW: Challenge Section */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">The Challenge</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              Traditional, manual profile creation process is often a major source of user friction. Forcing new users to fill out extensive forms from scratch results in high drop-off rates and incomplete data, which can undermine a platform's core value. The client wanted a new onboarding system that would:
              <br />
              <br />
              - Drastically reduce the time and effort required to create a profile
              <br />
              - Increase user completion rates during sign-up
              <br />
              - Improve the quality and depth of user data from day one
              <br />
              - Boost initial user engagement and trust
            </p>
          </div>
        </div>
      </section>

      {/* NEW: Solution Section */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">Our Solution</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
We built an autonomous AI agent that activates immediately upon sign-up, using publicly available information to automatically construct a user's profile. Key features of the solution include:
              <br />
              <br />    
- Autonomous Web Crawling: The agent uses initial user info (name, email) to scan public sources across the web.
            <br />  
- Intelligent Data Extraction: It identifies and extracts key professional data, including roles, projects, biographies, and media links.
            <br />  
- Automated Profile Generation: The system auto-populates a clean, editable profile, leaving it 70–90% complete before the user takes any action.
            <br />  
- Smart Gap Identification: If critical information is missing, the agent prompts the user with minimal, targeted questions to ensure the profile is complete.
</p>
          </div>
        </div>
      </section>

      {/* NEW: Outcome Section */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">The Impact</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              <br />
              - Frictionless Onboarding: Users sign up and find the majority of their profile already built, making for a delightful onboarding experience.
              <br />
              - Higher-Quality Profile Data: Automated data sourcing resulted in richer, more authentic profiles, which significantly improved search and discovery on the platform.
              <br />
              - Proven Cross-Industry Versatility: The agent was easily adapted for niche industries, successfully sourcing data for actors (IMDb), developers (GitHub), and business professionals (LinkedIn).
            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default aiagentbuilder;