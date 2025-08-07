// src/pages/MaintenancePage.tsx
import React from 'react';
// import { Link } from 'react-router-dom';
import toucanboxImage from '../assets/toucanbox-detail.png';

const MaintenancePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black"
        style={{
          backgroundImage: `url(${toucanboxImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
            Optimizing Sign-Up and Homepage for Parents
          </h1>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-[#BBFEFF]">The Challenge</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              ToucanBox, a children's craft subscription service, found its initial digital touchpoints were creating a barrier for its target audience: busy parents. The original user flow suffered from critical issues that led to high drop-off rates:
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed list-disc pl-8 space-y-2">
              <li>
                <span className="font-semibold">Unclear Value Proposition:</span> The homepage failed to instantly communicate their unique benefits
              </li>
              <li>
                <span className="font-semibold">High-Friction Sign-Up:</span> A long, multi-field form felt overwhelming for parents, causing many to abandon the process
              </li>
              <li>
                <span className="font-semibold">Poor Mobile Experience:</span> The flow was poorly optimized for mobile devices, frustrating users trying to sign up on the go
              </li>
              <li>
                <span className="font-semibold">Lack of Trust Signals:</span> Inconsistent design and weak CTAs failed to build the confidence needed for parents to commit
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-[#BBFEFF]">Our Solution</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              We conducted in-depth usability testing and rapid prototyping to redesign the entire onboarding experience with a parent-first mindset. The solution focused on clarity, convenience, and trust:
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed list-disc pl-8 space-y-2">
              <li>
                <span className="font-semibold">Value-Focused Homepage:</span> Clear, benefit-oriented headlines and visuals of children engaged with kits that immediately communicate "What is ToucanBox?" and "Why will my child love it?"
              </li>
              <li>
                <span className="font-semibold">Simplified, Chunked Sign-Up:</span> Replaced the long form with a multi-step journey using a visual progress bar to minimize cognitive load
              </li>
              <li>
                <span className="font-semibold">Mobile-First Design:</span> Re-engineered for seamless mobile experience with large tap targets, readable fonts, and intuitive layout
              </li>
              <li>
                <span className="font-semibold">Emotional & Trust-Building Design:</span> Introduced warm visuals and prominent trust signals like parent testimonials and "cancel anytime" reassurances
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
              The redesigned flow delivered measurable improvements in user conversion and satisfaction:
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed list-disc pl-8 space-y-2">
              <li>
                <span className="font-semibold">22% Reduction in Form Abandonment:</span> A/B testing confirmed the simplified sign-up significantly lowered drop-off rates
              </li>
              <li>
                <span className="font-semibold">Higher Subscriber Conversion:</span> More parents who visited the new homepage successfully completed sign-up
              </li>
              <li>
                <span className="font-semibold">Significant Increase in Mobile Sign-Ups:</span> Mobile-first approach led to higher conversion among core parent demographic
              </li>
              <li>
                <span className="font-semibold">Overwhelmingly Positive Feedback:</span> Parents described the new experience as "friendly," "simple," and "welcoming"
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaintenancePage;