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
  ToucanBox, a children's craft subscription service, found its initial digital touchpoints were creating a barrier for its target audience: busy parents. The original user flow suffered from critical issues that led to high drop-off rates:
              <br />
              <br />
              - Unclear Value Proposition: The homepage failed to instantly communicate their unique benefits
              <br />
              - High-Friction Sign-Up: A long, multi-field form felt overwhelming for parents, causing many to abandon the process.
              <br />
              - Poor Mobile Experience: The flow was poorly optimised for mobile devices, frustrating users trying to sign up on the go.
              <br />
              - Lack of Trust Signals: Inconsistent design and weak CTAs failed to build the confidence needed for a parent to commit to a subscription.
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
We conducted in-depth usability testing and rapid prototyping to redesign the entire onboarding experience with a parent-first mindset. The solution focused on clarity, convenience, and trust:
              <br />
              <br />
              - Value-Focused Homepage: We used clear, benefit-oriented headlines and visuals of children joyfully engaged with the kits. The new homepage immediately answers "What is ToucanBox?" and "Why will my child love it?". 
              <br />
              - Simplified, Chunked Sign-Up: We replaced the long form with a multi-step journey, breaking it into small, logical sections with a visual progress bar. This minimised cognitive load and made the process feel faster and less tiresome.
              <br />
              - Mobile-First Design: The entire flow was re-engineered for a seamless mobile experience, featuring large tap targets, readable fonts, and an intuitive layout.
              <br />
              - Emotional & Trust-Building Design: We introduced warm visuals and prominent trust signals (like parent testimonials and "cancel anytime" reassurances) to create a welcoming and credible experience.
            </p>
          </div>
        </div>
      </section>

      {/* NEW: Outcome Section */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">The Impact</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
The redesigned flow delivered measurable improvements in user conversion and satisfaction:
              <br />
              <br />
              - 22% Reduction in Form Abandonment: A/B testing confirmed that the simplified sign-up process significantly lowered drop-off rates.
              <br />
              - Higher Subscriber Conversion: More parents who visited the new homepage successfully completed the entire sign-up process.
              <br />
              - Significant Increase in Mobile Sign-Ups: The mobile-first approach directly led to a higher conversion rate among the core parent demographic.
              <br />
              - Overwhelmingly Positive User Feedback: In post-launch surveys, parents consistently described the new experience as “friendly,” “simple,” and “welcoming.”
            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default MaintenancePage;