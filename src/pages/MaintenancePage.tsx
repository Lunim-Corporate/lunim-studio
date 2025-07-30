// src/pages/ConsultingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is imported

const  MaintenancePage: React.FC = () => {
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
           Optimising Sign-Up and Homepage for Parents
          </h1>
          </div>
      </section>

      {/* NEW: Challenge Section - Reduced top padding (py-16 to py-8) */}
      <section className="py-8 bg-gray-900"> {/* Reduced padding-y */}
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

      {/* NEW: Solution Section - Reduced top padding (py-16 to py-8) */}
      <section className="py-8 bg-black"> {/* Reduced padding-y */}
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
      <section className="py-8 bg-gray-900"> {/* Consistent padding and background */}
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

      {/* UPDATED: Image and Content Section (Hero-like) */}
      <section className="py-10 bg-gray-900">
        <div className="container mx-auto px-6 max-w-5xl"> {/* Increased max-w for the whole container */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row items-center justify-between p-4 md:p-0"> {/* Added flex for side-by-side layout, rounded-3xl for the whole card */}
            {/* Content Block (left side) */}
            <div className="flex-1 p-8 md:p-12 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Optimising Sign-Up and Homepage for Parents
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                The original user flow had friction points that caused drop-offs during sign-up, 
                especially on mobile. 
                Parents struggled with: Long forms with unclear expectations
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
                src="https://miro.medium.com/v2/resize:fit:1080/1*TfDwpwIEVhWfib_4cNV-Rg.jpeg"
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

export default MaintenancePage;
