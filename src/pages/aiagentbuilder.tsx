// src/pages/ConsultingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is imported

// Import the new images
import n8n6Image from '../assets/n8n6.png'; // For the hero section
import n8n5Image from '../assets/n8n5.png'; // For the bottom card section

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
            Automated Personal Profiles Built from Web Data
          </h1>
          {/* Add a descriptive paragraph here for better hero section content */}
          
        </div>
      </section>

      {/* NEW: Challenge Section */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">The Challenge</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              We developed an AI-powered onboarding agent that builds a user’s profile
              automatically upon sign-up by scraping publicly available information
              from sites like LinkedIn, IMDb, and personal websites.
              This dramatically reduces onboarding friction and enhances user engagement from day one.
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
              We built an autonomous AI agent that activates immediately after sign-up. It uses user-provided info (e.g., name, email, profession) to:
              Crawl Public Sources — Searches LinkedIn, IMDb, GitHub, personal websites, etc.
              Extract Key Data — Gathers roles, credits, projects, bios, links, and media
              Generate Clean Profiles — Auto-populates a clean, editable profile with relevant experience, achievements, and social links
              Ask for Gaps — If information is missing, the agent prompts the user with smart, minimal questions to complete their profile.
            </p>
          </div>
        </div>
      </section>

      {/* NEW: Outcome Section */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">The Outcome</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <ul className="text-gray-300 text-lg leading-relaxed list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold text-white">Frictionless Onboarding:</span> Users start with 70–90% of their profile already built, reducing drop-off during registration.
              </li>
              <li>
                <span className="font-semibold text-white">Higher-Quality Data:</span> Profiles feel complete and authentic, improving search, matching, and discovery on the platform.
              </li>
              <li>
                <span className="font-semibold text-white">Better UX and Retention:</span> Users are impressed by how fast and accurate their profile appears—driving engagement and trust.
              </li>
              <li>
                <span className="font-semibold text-white">Customizable for Niche Use Cases:</span> Adapted easily for actors (IMDb), developers (GitHub), and professionals (LinkedIn), making it usable across industries.
              </li>
            </ul>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default aiagentbuilder;