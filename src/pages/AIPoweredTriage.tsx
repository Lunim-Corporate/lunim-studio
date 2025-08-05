// src/pages/ConsultingPage.tsx
import React from 'react';
import thisIsNumber from '../assets/thisIsNumber.png'; // Corrected import and now used for Hero background
import { Link } from 'react-router-dom'; // Ensure this is imported

const AIPoweredTriage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black"
        style={{
          backgroundImage: `url(${thisIsNumber})`, // Use the imported image here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* This provides the dark shade */}

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
            Home of Stacks’ First Curated Multimedia NFT Collections
          </h1>
          {/* Add a descriptive paragraph here for better hero section content if desired */}
          
        </div>
      </section>

      {/* NEW: Challenge Section - Reduced top padding (py-16 to py-8) */}
      <section className="py-8 bg-gray-900"> {/* Reduced padding-y */}
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">The Challenge</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              In early 2021, the NFT ecosystem on the Stacks network was in its infancy. The underlying technology and standards were still evolving, and there were significant bottlenecks for artists. Key limitations included:
              <br />
              <br />
              - No Multimedia Support: Existing contracts could not handle music, audio, or mixed-media files, restricting artists to static images.
              <br />
              - Lack of Generative Art Capability: There was no way for artists to launch algorithmically generated art collections native to Stacks and Bitcoin.
              <br />
              - Primitive Editioning: The standards for creating and managing complex, multi-edition collections were not yet established.
              <br />
              <br />
              These technical gaps stifled creative expression and limited the growth of the digital arts community on Stacks.
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
              Instead of waiting for official network standards (SIPs) to be developed and approved, we created ThisIsNumberOne, the first-ever multimedia NFT contract on the Stacks network. This custom-built solution was engineered from the ground up to provide the infrastructure that artists needed, enabling:
              <br />
              <br />
              - Music and Mixed-Media Integration: The contract was designed to embed audio and other file types directly into the NFT.
              <br />
              - Native Generative Art: It provided a framework for deploying collections created with algorithmic processes.
              <br />
              - Complex Edition Releases: The platform supported multi-edition mints, giving artists more flexibility and control over their work.
            </p>
          </div>
        </div>
      </section>

      {/* NEW: Outcome Section */}
      <section className="py-8 bg-gray-900"> {/* Consistent padding and background */}
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">The Impact</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              ThisIsNumberOne successfully launched several of the most iconic and groundbreaking NFT collections in the history of the Stacks network:
              <br />
              <br />
- Launching Stacks’ First-Ever NFT Collection: The "Genesis Collection" marked the beginning of the NFT ecosystem on the network.
              <br />
- Pioneering Music NFTs: The "No. 1 Smileys" became the first music NFT collection on Stacks, featuring exclusive tracks from world-renowned artists Fatboy Slim and Chemical X.
              <br />
- Native Generative Art: The "Hash Ones" collection was the first algorithmically generated art native to Bitcoin and Stacks.
              <br />
              <br />
These collections set a precedent and provided a working model for multimedia NFTs long before official standards were ratified, paving the way for future creators and ecosystem growth.

            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default AIPoweredTriage;