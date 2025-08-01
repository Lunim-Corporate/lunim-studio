// src/pages/ConsultingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

// Import the new images
import pizzaHutImage from '../assets/pizzahut.jpeg'; // Main hero background image
// IMPORTANT: This import expects the file to be named Pizzahut2.png now
 // Image for the lower content section (renamed in assets)
import Pizzahut2 from '../assets/pizzahut2.png'; // Note the lowercase 'p'
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
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
            Pizza Hut: Checkout Redesign
          </h1>

        </div>
      </section>

      {/* NEW: Challenge Section - Reduced top padding (py-16 to py-8) */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">The Challenge</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              The original Pizza Hut checkout process presented too many steps and friction points, particularly for returning users.
              Repetitive inputs, unclear progress indicators, and poorly optimized mobile layouts led to drop-offs and frustrated users.
              The team needed a new design that would:
              Speed up repeat orders
              Minimize cognitive load
              Improve mobile usability
              Streamline data input (delivery info, payment, order review)
            </p>
          </div>
        </div>
      </section>

      {/* NEW: Solution Section - Reduced top padding (py-16 to py-8) */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">Our Solution</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              Using rapid prototyping and usability testing, we redesigned the checkout flow with a mobile-first, user-centered approach. Key improvements included:
              Returning User Recognition
              Saved user data and preferences streamline reorders
              Progressive Disclosure
              Cleaner step-by-step layout showing clear order stages
              Optimized Mobile Inputs
              Autofill, smart defaults, and chunked sections reduce errors
              Visual Feedback & Confirmation
              Inline validation, confirmation screens, and clearer CTA buttons enhance confidence
            </p>
          </div>
        </div>
      </section>

      {/* NEW: Outcome Section */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">The Outcome</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              Faster Checkout Times
              Returning users completed checkout 28% faster in testing
              Higher Task Success Rate
              Usability tests showed 93% task completion with the new design vs. 68% with the original
              Improved User Satisfaction
              Positive feedback highlighted reduced frustration and improved ease-of-use
              Stakeholder Alignment
              Interactive prototype helped communicate design rationale and gain buy-in across teams
            </p>
          </div>
        </div>
      </section>

      {/* UPDATED: Image and Content Section (Hero-like) */}
      <section className="py-10 bg-gray-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-gray-800/50 border border-gray-700 rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row items-center justify-between p-4 md:p-0">
            {/* Content Block (left side) */}
            <div className="flex-1 p-8 md:p-12 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Pizza Hut: Checkout Redesign
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                The original Pizza Hut checkout process presented too many steps and friction points, particularly for returning users.
                Repetitive inputs, unclear progress indicators, and poorly optimized mobile layouts led to drop-offs and frustrated users.
              </p>
            </div>

            {/* Image Block (right side) */}
            {/* Reduced height for the image to h-48 on mobile and md:h-80 on desktop */}
            <div className="flex-1 w-full md:w-1/2 h-48 md:h-80 overflow-hidden rounded-2xl md:rounded-l-none">
              <img
                src={Pizzahut2} // IMPORTANT: Using Pizzahut2 now, assuming you renamed the file
                alt="Pizza Hut Checkout Redesign"
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

export default ConsultingPage;