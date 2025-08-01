// src/pages/ConsultingPage.tsx
import React from 'react';
import thisIsNumber from '../assets/thisIsNumber.png'; // Corrected import
import { Link } from 'react-router-dom'; // Ensure this is imported

const AIPoweredTriage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black"> {/* Changed background to solid black */}
        {/* Background Overlays - Removed gradient, kept solid black for consistency */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        {/* Removed: <div className="absolute inset-0 bg-gradient-to-t from-black-900 to-transparent"></div> */}

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
            Home of Stacks’ First Curated Multimedia NFT Collections
          </h1>
          </div>
      </section>

      {/* NEW: Challenge Section - Reduced top padding (py-16 to py-8) */}
      <section className="py-8 bg-gray-900"> {/* Reduced padding-y */}
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">The Challenge</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              ThisIsNumberOne is a pioneering multimedia NFT contract on the Stacks Network, launched in early 2021.
               It houses multiple iconic collections that 
              broke ground in Stacks and Bitcoin’s NFT space—blending art, music, and generative creativity.
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
              In early 2021, Stacks NFTs were limited by evolving standards 
              and lacked native support for multimedia and generative art. 
              Artists had no platform for music NFTs, mixed media, or complex editions—hindering 
              creative expression and community growth.</p>

          </div>
        </div>
      </section>

      {/* NEW: Outcome Section */}
      <section className="py-8 bg-gray-900"> {/* Consistent padding and background */}
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">The Outcome</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              ThisIsNumberOne created the first multimedia NFT contract on Stacks, enabling:
The Genesis Collection — the very first NFT collection on Stacks
The No. 1 Smileys — Stacks’ first music NFT collection, featuring exclusive tracks by Fatboy Slim and Chemical X
Hash Ones — the first algorithmically generated NFT art native to Bitcoin and Stacks
These collections pioneered multi-edition releases, music integration, and generative art before NFT improvement proposals (SIPs) existed.
 The platform also supports a broader artistic ecosystem with collections like Apillforeveryill(andthrill),
  MicroDots&JellyTots, and Love Hirsts (MDMA)—bringing culturally rich, unique digital art and music experiences to the blockchain.

            </p>
          </div>
        </div>
      </section>

      {/* UPDATED: Image and Content Section (Hero-like) */}
      <section className="py-10 bg-gray-900">
        <div className="container mx-auto px-6 max-w-5xl"> {/* Increased max-w for the whole container */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row items-center justify-between p-4 md:p-0"> {/* Added flex for side-by-side layout, rounded-3xl for the whole card */}
            {/* Content Block (left side) */}
            <div className="flex-1 p-8 md:p-12 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
               ThisIsNumberOne
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                ThisIsNumberOne is a pioneering multimedia NFT contract on the Stacks Network
              </p>
            </div>

            {/* Image Block (right side) */}
            <div className="flex-1 w-full md:w-1/2 h-64 md:h-auto overflow-hidden rounded-2xl md:rounded-l-none"> {/* Adjusted sizing for image, rounded on its own */}
              <img
               src={thisIsNumber} // Change this line from "thisNumber1.png" to {thisNumber1}
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
    </div>
  );
};

export default AIPoweredTriage;
