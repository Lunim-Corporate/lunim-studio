// src/pages/AIWhatsAppInteractorPage.tsx
import React from 'react';
// import { Link } from 'react-router-dom';
import aiwhatsappImage from '../assets/ai-whatsapp-detail.png';

const AIWhatsAppInteractorPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${aiwhatsappImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
            AI WhatsApp Assistant
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-300">
            Automated Assistant for Managing Bookings and Answering Questions 24/7
          </h2>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">The Challenge</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              For independent professionals and small businesses, WhatsApp is a primary client communication channel. However, managing the constant flow of messages manually was leading to significant business challenges.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              The team needed a solution to:
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed list-disc pl-8 space-y-2">
              <li>Eliminate slow response times and missed messages</li>
              <li>Prevent lost business opportunities due to delayed replies</li>
              <li>Streamline the disorganized and time-consuming manual booking process</li>
              <li>Provide 24/7 customer service without being tied to a phone</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">Our Solution</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              We developed an AI-powered WhatsApp agent that acts as a real-time assistant, automating conversations and managing client interactions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Key features include:
            </p>
            <ul className="text-gray-300 text-lg leading-relaxed list-disc pl-8 space-y-2">
              <li>
                <span className="font-semibold">Automated Appointment Booking:</span> Intelligently captures booking details like service type, preferred time/date, location, and contact information
              </li>
              <li>
                <span className="font-semibold">Instant FAQ Answering:</span> Responds to common inquiries about availability, services, working hours, and more
              </li>
              <li>
                <span className="font-semibold">24/7 Availability:</span> Operates around the clock to ensure every inquiry receives an instant, professional response
              </li>
              <li>
                <span className="font-semibold">Follow-Ups & Reminders:</span> Automatically follows up with leads and sends appointment reminders
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
            <ul className="text-gray-300 text-lg leading-relaxed list-disc pl-8 space-y-2">
              <li>
                <span className="font-semibold">10+ Weekly Manpower Hours Saved:</span> Frees up significant time by automating booking conversations and inquiries
              </li>
              <li>
                <span className="font-semibold">Improved Customer Experience:</span> Fast, consistent responses lead to smoother communication and stronger relationships
              </li>
              <li>
                <span className="font-semibold">Fewer Missed Messages:</span> 24/7 uptime ensures leads and appointment requests are handled instantly, reducing response time
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIWhatsAppInteractorPage;