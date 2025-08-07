// src/pages/ProjectAtlas.tsx
import React from 'react';
import Doa from '../assets/winner-takes-all-detail.png';
// import { Link } from 'react-router-dom';

const ProjectAtlas: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black"
        style={{
          backgroundImage: `url(${Doa})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
            Winner-Takes-All DAO for Community Grants
          </h1>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-[#BBFEFF]">The Challenge</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              Decentralised Autonomous Organisation (DAO) platforms were struggling with grant allocation processes that were slow and opaque, with low community engagement. The reliance on fragmented tools, combined with voter fatigue and unclear incentives, resulted in mediocre proposals and inefficient use of community funds. The core challenge was to create a system that encouraged high-quality submissions and active participation.
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
              We designed and built a fully automated, on-chain governance platform that transforms grant allocation into a competitive, transparent, and engaging process. The system uses an epoch-based, winner-takes-all model to drive excellence.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Key features include:
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed list-disc pl-8 space-y-2">
              <li>Onchain proposal submission and ERC-20 token voting</li>
              <li>Automatic finalization of the top-voted proposal each epoch</li>
              <li>Treasury distribution via revenue splitter contracts, removing manual friction</li>
              <li>React-based dashboard for real-time voting, proposal details, and funding transparency</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-[#BBFEFF]">The Outcome</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <ul className="text-gray-300 text-lg leading-relaxed list-disc pl-8 space-y-2">
              <li>
                <span className="font-semibold">Drastically Improved Proposal Quality:</span> The competitive model motivated teams to submit more ambitious and well-researched proposals
              </li>
              <li>
                <span className="font-semibold">Zero-Friction Payouts:</span> Automated treasury distribution eliminated manual workload and payment delays
              </li>
              <li>
                <span className="font-semibold">Enhanced Trust and Accountability:</span> Every step auditable on-chain fostered confidence in the fairness of the process
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectAtlas;