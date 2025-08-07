// src/pages/ConsultingPage.tsx
import React from 'react';
import thisIsNumber from '../assets/nft-collection-detail.png';
// import { Link } from 'react-router-dom';

const AIPoweredTriage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black"
        style={{
          backgroundImage: `url(${thisIsNumber})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
            Stacks' First Curated Multimedia NFT Collection
          </h1>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-[#BBFEFF]">The Challenge</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              In early 2021, the NFT ecosystem on the Stacks network was in its infancy. The underlying technology and standards were still evolving, and there were significant bottlenecks for artists.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Key limitations included:
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed list-disc pl-8 space-y-2">
              <li>
                <span className="font-semibold">No Multimedia Support:</span> Existing contracts could not handle music, audio, or mixed-media files, restricting artists to static images
              </li>
              <li>
                <span className="font-semibold">Lack of Generative Art Capability:</span> There was no way for artists to launch algorithmically generated art collections native to Stacks and Bitcoin
              </li>
              <li>
                <span className="font-semibold">Primitive Editioning:</span> The standards for creating and managing complex, multi-edition collections were not yet established
              </li>
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              These technical gaps stifled creative expression and limited the growth of the digital arts community on Stacks.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-[#BBFEFF]">Our Solution</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Instead of waiting for official network standards (SIPs) to be developed and approved, we created ThisIsNumberOne, the first-ever multimedia NFT contract on the Stacks network. This custom-built solution was engineered from the ground up to provide the infrastructure that artists needed, enabling:
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed list-disc pl-8 space-y-2">
              <li>
                <span className="font-semibold">Music and Mixed-Media Integration:</span> The contract was designed to embed audio and other file types directly into the NFT
              </li>
              <li>
                <span className="font-semibold">Native Generative Art:</span> It provided a framework for deploying collections created with algorithmic processes
              </li>
              <li>
                <span className="font-semibold">Complex Edition Releases:</span> The platform supported multi-edition mints, giving artists more flexibility and control over their work
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-[#BBFEFF]">The Impact</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              ThisIsNumberOne successfully launched several of the most iconic and groundbreaking NFT collections in the history of the Stacks network:
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed list-disc pl-8 space-y-2 mb-4">
              <li>
                <span className="font-semibold">Launching Stacks' First-Ever NFT Collection:</span> The "Genesis Collection" marked the beginning of the NFT ecosystem on the network
              </li>
              <li>
                <span className="font-semibold">Pioneering Music NFTs:</span> The "No. 1 Smileys" became the first music NFT collection on Stacks, featuring exclusive tracks from world-renowned artists Fatboy Slim and Chemical X
              </li>
              <li>
                <span className="font-semibold">Native Generative Art:</span> The "Hash Ones" collection was the first algorithmically generated art native to Bitcoin and Stacks
              </li>
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed">
              These collections set a precedent and provided a working model for multimedia NFTs long before official standards were ratified, paving the way for future creators and ecosystem growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredTriage;