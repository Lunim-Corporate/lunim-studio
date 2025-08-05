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
              Decentralised Autonomous Organisation (DAO) platforms were struggling with grant allocation processes that were slow and opaque, with low community engagement. The reliance on fragmented tools, combined with voter fatigue and unclear incentives, resulted in mediocre proposals and inefficient use of community funds. The core challenge was to create a system that encouraged high-quality submissions and active participation.
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
              We designed and built a fully automated, on-chain governance platform that transforms grant allocation into a competitive, transparent, and engaging process. The system uses an epoch-based, winner-takes-all model to drive excellence. Key features include:
              <br />
              <br />
              - Onchain proposal submission and ERC-20 token voting
              <br />
              - Automatic finalization of the top-voted proposal each epoch
              <br />
              - Treasury distribution via revenue splitter contracts, removing manual friction
              <br />
              - A React-based dashboard for real-time voting, proposal details, and funding transparency
            </p>

          </div>
        </div>
      </section>

      {/* NEW: Outcome Section */}
      <section className="py-8 bg-gray-900"> {/* Consistent padding and background */}
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">The </h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              - Drastically Improved Proposal Quality: The competitive, high-stakes model motivated teams to submit significantly more ambitious and well-researched proposals.
              <br />
              - Zero-Friction Payouts: Automated treasury distribution via smart contracts eliminated manual workload and payment delays that plagued previous systems.
              <br />
              - Enhanced Trust and Accountability: With every step auditable on-chain, the platform fostered confidence in the fairness and integrity of the grant allocation process.
            </p>
          </div>
        </div>
      </section>
      


      </div>
  );
};

export default ProjectAtlas;
