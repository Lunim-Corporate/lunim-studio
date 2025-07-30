// src/pages/ConsultingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is imported

const  ConsultingPage: React.FC = () => {
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
            Pizza Hut: Checkout Redesign

          </h1>
          </div>
      </section>

      {/* NEW: Challenge Section - Reduced top padding (py-16 to py-8) */}
      <section className="py-8 bg-gray-900"> {/* Reduced padding-y */}
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
      <section className="py-8 bg-black"> {/* Reduced padding-y */}
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
      <section className="py-8 bg-gray-900"> {/* Consistent padding and background */}
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
        <div className="container mx-auto px-6 max-w-5xl"> {/* Increased max-w for the whole container */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row items-center justify-between p-4 md:p-0"> {/* Added flex for side-by-side layout, rounded-3xl for the whole card */}
            {/* Content Block (left side) */}
            <div className="flex-1 p-8 md:p-12 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Pizza Hut: Checkout Redesigna
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                The original Pizza Hut checkout process presented too many steps and friction points, particularly for returning users.
 Repetitive inputs, unclear progress indicators, and poorly optimized mobile layouts led to drop-offs and frustrated users.

              </p>
              <Link
                to="https://gofundmedao.netlify.app" // Assuming a demo page path
                className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-lg text-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 inline-block"
              >
                Try Demo
              </Link>
            </div>

            {/* Image Block (right side) */}
            <div className="flex-1 w-full md:w-1/2 h-64 md:h-auto overflow-hidden rounded-2xl md:rounded-l-none"> {/* Adjusted sizing for image, rounded on its own */}
              <img
                src="data:image/png;base64,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" // Placeholder image for a landscape aspect
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

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-purple-800 to-indigo-800 py-20 px-4 md:px-8 text-center">
        <h2 className="text-5xl font-bold mb-6">BE THE NEXT: GET YOUR IDEA DEVELOPED BY EXPERTS</h2>
        <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
          Partner with Lunim Studio to unlock your full potential. Our strategic consulting
          ensures your projects are not just built, but built for success.
        </p>
        <Link
          to="/contact"
          className="px-10 py-4 bg-white text-indigo-700 font-semibold rounded-full shadow-lg text-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
        >SHARE YOUR IDEA WITH US.
        </Link>
      </section>

      {/* Optional: Back to Home Button */}
      <div className="py-10 text-center">
        <Link
          to="/"
          className="inline-flex items-center text-white-400 hover:text-white transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          See More Demos
        </Link>
      </div>
    </div>
  );
};

export default ConsultingPage;
