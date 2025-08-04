// src/pages/MaintenancePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

// Import the image for this page
import toucanboxImage from '../assets/Toucanbox.png';
import Toucanbox1 from '../assets/Toucanbox1.png'; // Make sure this path is correct based on your project structure

const MaintenancePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black"
        style={{
          backgroundImage: `url(${Toucanbox1})`, // Use Toucanbox.png for hero background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
            Optimising Sign-Up and Homepage for Parents
          </h1>
          {/* Add a descriptive paragraph for the hero section */}
       
        </div>
      </section>

      {/* NEW: Challenge Section */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">The Challenge</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              The original user flow had friction points that caused drop-offs during sign-up, especially on mobile. Parents struggled with:
              Long forms with unclear expectations
              A homepage that didn’t clearly communicate value
              Poor visual hierarchy and inconsistent CTAs
              The experience needed to better support parents who were short on time and not always tech-savvy.
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
              Through usability testing and rapid prototyping, we identified pain points and redesigned the key flows with a parent-first mindset:
              Simplified Sign-Up Journey
              Shorter steps, real-time validation, and visual progress indicators
              Value-Focused Homepage
              Clear explanation of how the box works, what’s inside, and benefits for kids
              Mobile-Optimized Layouts
              Prioritized readability and ease of tapping on small devices
              Emotional Design Cues
              Used warm visuals, playful copy, and trust signals to connect with parents emotionally
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
                <span className="font-semibold text-white">Lower Drop-Off Rates:</span> Form abandonment reduced by 22% in A/B testing.
              </li>
              <li>
                <span className="font-semibold text-white">Higher Conversion:</span> More users completed the sign-up process after viewing the new homepage.
              </li>
              <li>
                <span className="font-semibold text-white">Positive User Feedback:</span> Parents described the flow as “friendly,” “simple,” and “welcoming.”
              </li>
              <li>
                <span className="font-semibold text-white">Improved Cross-Device Experience:</span> Mobile sign-ups increased significantly following the redesign.
              </li>
            </ul>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default MaintenancePage;