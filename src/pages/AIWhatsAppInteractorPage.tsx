// src/pages/AIWhatsAppInteractorPage.tsx (Suggested new filename)
import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is imported

const AIWhatsAppInteractorPage: React.FC = () => { // Renamed component
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
            Whatsapp AI Agent Interactor.
          </h1>
        </div>
      </section>

      {/* Challenge Section */}
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

      {/* Solution Section - Now with Unordered List */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">Our Solution</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <ul className="text-gray-300 text-lg leading-relaxed list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold text-white">Autonomous AI Agent:</span> Activates immediately after sign-up.
              </li>
              <li>
                <span className="font-semibold text-white">Crawl Public Sources:</span> Searches LinkedIn, IMDb, GitHub, personal websites, etc.
              </li>
              <li>
                <span className="font-semibold text-white">Extract Key Data:</span> Gathers roles, credits, projects, bios, links, and media.
              </li>
              <li>
                <span className="font-semibold text-white">Generate Clean Profiles:</span> Auto-populates a clean, editable profile with relevant experience, achievements, and social links.
              </li>
              <li>
                <span className="font-semibold text-white">Ask for Gaps:</span> If information is missing, the agent prompts the user with smart, minimal questions to complete their profile.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
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

      {/* UPDATED: Image and Content Section (Hero-like) */}
      <section className="py-10 bg-gray-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-gray-800/50 border border-gray-700 rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row items-center justify-between p-4 md:p-0">
            {/* Content Block (left side) */}
            <div className="flex-1 p-8 md:p-12 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Automated Personal Profiles Built from Web Data
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                We developed an AI-powered onboarding agent that builds a
                user’s profile automatically upon sign-up by scraping publicly
                available information from sites like LinkedIn, IMDb, and personal websites.
              </p>
              <Link
                to="https://gofundmedao.netlify.app" // Assuming a demo page path (keep as is for now)
                className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-lg text-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 inline-block"
              >
                Try Demo
              </Link>
            </div>

            {/* Image Block (right side) */}
            <div className="flex-1 w-full md:w-1/2 h-64 md:h-auto overflow-hidden rounded-2xl md:rounded-l-none">
              <img
                src="data:image/jpeg;base64,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"
                alt="Strategic Insights"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://placehold.co/800x600/6A0DAD/ffffff?text=Image+Not+Found";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-purple-800 to-indigo-800 py-20 px-4 md:px-8 text-center">
        <h2 className="text-5xl font-bold mb-6">BE THE NEXT: GET YOUR IDEA DEVELOPED BY EXPERTS</h2>
        <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
          Partner with Lunim Studio to unlock your full potential. Our strategic consulting
          ensures your projects are not just built, but built for success.
        </p>
        <Link
          to="/contact"
          className="px-10 py-4 bg-white text-indigo-700 font-semibold rounded-full shadow-lg text-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
        >SHARE YOUR IDEA WITH US.
        </Link>
      </section>

      {/* Optional: Back to Home Button */}
      <div className="py-10 text-center">
        <Link
          to="/"
          className="inline-flex items-center text-white-400 hover:text-white transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          See More Demos
        </Link>
      </div>
    </div>
  );
};

export default AIWhatsAppInteractorPage; // Exporting the renamed component
