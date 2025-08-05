// src/pages/ConsultingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

// Import the images with the corrected lowercase 'p' for pizzahut2.png
import pizzaHutImage from '../assets/pizzahut.jpeg'; // Main hero background image
import pizzahut2 from '../assets/pizzahut2.png'; // Image for the lower content section (now using lowercase 'p')

const ConsultingPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black"
        style={{
          backgroundImage: `url(${pizzaHutImage})`, // Uses pizzahut.jpeg for hero background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay for text readability */}

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
            Pizza Hut: Checkout Redesign
          </h1>
          {/* Descriptive paragraph can be added here if desired */}
        </div>
      </section>

      {/* NEW: Challenge Section */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">The Challenge</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
The original Pizza Hut checkout process presented too many steps and friction points, particularly for returning users. Repetitive inputs, unclear progress indicators, and poorly optimised mobile layouts led to drop-offs and frustrated users. The team needed a new design that would: 
              <br />
              <br />
              - Speed up repeat orders
              <br />
              - Minimise cognitive load
              <br />
              - Improve mobile usability
              <br />
              - Streamline data input (delivery info, payment, order review)
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
Using rapid prototyping and usability testing, we redesigned the checkout flow with a mobile-first, user-centered approach. Key improvements included: 
              <br />
              <br />
              - Returning User Recognition: Saved user data and preferences streamline reorders
              <br />
              - Progressive Disclosure: Cleaner step-by-step layout showing clear order stages 
              <br />
              - Optimised Mobile Inputs: Autofill, smart defaults, and chunked sections reduce errors 
              <br />
              - Visual Feedback & Confirmation: Inline validation, confirmation screens, and clearer CTA buttons enhance confidence
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
              - Faster Checkout Times: Returning users completed checkout 28% faster in testing
              <br />
              - Higher Task Success Rate: Usability tests showed 93% task completion with the new design vs 68% with the original
              <br />
              - Improved User Satisfaction: Positive feedback highlighted reduced frustration and improved ease-of-use
              <br />
              - Stakeholder Alignment: Interactive prototype helped communicate design rationale and gain buy-in across teams
            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ConsultingPage;