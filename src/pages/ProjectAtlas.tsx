// src/pages/ConsultingPage.tsx
import React from 'react';
import Doa from '../assets/Doa.png'; // Corrected import
import { Link } from 'react-router-dom'; // Ensure this is imported

const  ProjectAtlas: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen pt-20">
            {/* Hero Section */}
            <section
                className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black"
                style={{
                    backgroundImage: `url(${Doa})`, // Set the background image here
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black opacity-60"></div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
                        Winner-Takes-All DAO for Community Grants
                    </h1>
                </div>
            </section>

      {/* NEW: Challenge Section - Reduced top padding (py-16 to py-8) */}
      <section className="py-8 bg-gray-900"> {/* Reduced padding-y */}
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">The Challenge</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              Decentralized grant allocation is often slow, opaque, and suffers from low engagement. Many DAOs face fragmented tools, unclear incentives, and decision fatigue, which reduce proposal quality and community involvement.

            </p>
          </div>
        </div>
      </section>

      {/* NEW: Solution Section - Reduced top padding (py-16 to py-8) */}
      <section className="py-8 bg-black"> {/* Reduced padding-y */}
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">Our Solution</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              Our platform features a gamified, epoch-based governance system with:
              Onchain proposal submission and ERC-20 token voting
              Automatic finalization of the top-voted proposal each epoch
              Treasury distribution via revenue splitter contracts, removing manual friction
              A React-based dashboard for real-time voting, proposal details, and funding transparency
</p>

          </div>
        </div>
      </section>

      {/* NEW: Outcome Section */}
      <section className="py-8 bg-gray-900"> {/* Consistent padding and background */}
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">The Outcome</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              Stronger Incentives & Better Proposals
 The winner-take-all approach drives higher-quality, more competitive proposals.
Frictionless Treasury Distribution
 Automated payments improve speed and reduce operational overhead.
Full Transparency
 Every step is auditable onchain, building trust and accountability.
Community Engagement
 Interactive UI elements and clear feedback loops increase participation and enthusiasm.
            </p>
          </div>
        </div>
      </section>
      
<section className="py-10 bg-gray-900">
  <div className="container mx-auto px-6 max-w-5xl">
    {/* Main Card Container */}
    {/* This container defines the overall shape and border */}
    <div className="bg-gray-800/50 border border-gray-700 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between"> {/* Removed p-0, removed overflow-hidden - it's handled by image rounding */}

      {/* Content Block (left side) */}
      <div className="flex-1 p-8 md:p-12 text-center md:text-left">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Winner-Takes-All DAO for Community Grants
        </h3>
        <p className="text-gray-300 text-lg mb-8">
          We built a decentralized application (dApp) that enables communities to run
          transparent, competitive funding rounds. Using a winner-take-all voting model,
          the top proposal each epoch receives the entire treasury allocation,
          encouraging bold ideas and active participation.
        </p>
      </div>

      {/* Image Block (right side) */}
      {/* This div acts as a wrapper for the image */}
      <div className="w-full md:w-1/2 h-64 md:h-auto"> {/* Removed flex-1 here as the image will dictate its own size within the flex container, removed overflow-hidden and rounded classes */}
        <img
          src={Doa} // Your image source
          alt="Strategic Insights"
          // Apply rounding directly to the image, and object-cover to make it fit
          // The overflow-hidden on the parent is enough to crop any excess, but explicit rounding helps visual fidelity
          className="w-full h-full object-cover rounded-tr-3xl rounded-br-3xl md:rounded-l-none"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://placehold.co/800x600/6A0DAD/ffffff?text=Image+Not+Found";
          }}
        />
      </div>
    </div>
  </div>
</section>

      </div>
  );
};

export default ProjectAtlas;
