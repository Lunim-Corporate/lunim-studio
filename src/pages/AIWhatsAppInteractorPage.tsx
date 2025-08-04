// src/pages/AIWhatsAppInteractorPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import aiwhatsappImage from '../assets/aiwhatsapp.png'; // Import your image, ensure path is correct

const AIWhatsAppInteractorPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen pt-20">
      {/* Hero Section - Image as background with dark overlay */}
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${aiwhatsappImage})` }} // Use the imported image as background
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
            Automated Assistant for Managing Bookings and Answering Questions
          </h1>
          
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">The Challenge</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              For many small business owners and independent professionals, WhatsApp is the main channel for customer communication—but keeping up with every message is difficult when you're on the job or off the clock.
              Late replies, missed messages, and lack of follow-up can result in lost opportunities, frustrated clients, and disorganized bookings.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">Our Solution</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <ul className="text-gray-300 text-lg leading-relaxed list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold text-white">Collects Appointment Details:</span> Gathers key information like service type, location, preferred time/date, and contact info.
              </li>
              <li>
                <span className="font-semibold text-white">Answers Frequently Asked Questions:</span> Responds to common inquiries such as availability, services offered, working hours, and more.
              </li>
              <li>
                <span className="font-semibold text-white">Sends Reminders & Follows Up:</span> Automatically follows up with leads who haven’t responded and sends appointment reminders when needed.
              </li>
              <li>
                <span className="font-semibold text-white">Real-Time Assistant:</span> The AI agent acts as a real-time assistant to manage WhatsApp messages and keep customer communication seamless.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">The Outcome</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <ul className="text-gray-300 text-lg leading-relaxed list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold text-white">Saves 10+ Hours Weekly:</span> Frees up time by automating back-and-forth conversations during peak hours or off-days.
              </li>
              <li>
                <span className="font-semibold text-white">Improved Customer Experience:</span> Fast, consistent responses lead to smoother communication and stronger relationships.
              </li>
              <li>
                <span className="font-semibold text-white">Fewer Missed Messages:</span> Leads and appointment requests are handled instantly, reducing response time and boosting engagement.
              </li>
              <li>
                <span className="font-semibold text-white">Always Available:</span> The agent responds 24/7, so you never miss a message—even outside working hours.
              </li>
            </ul>
          </div>
        </div>
      </section>

     
     
      
    </div>
  );
};

export default AIWhatsAppInteractorPage;