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
            <p className="text-gray-300 text-lg leading-relaxed">
For independent professionals and small businesses, WhatsApp is a primary client communication channel. However, managing the constant flow of messages manually was leading to significant business challenges. The team needed a solution to:
              <br />
              <br />
- Eliminate slow response times and missed messages
              <br />
- Prevent lost business opportunities due to delayed replies
                <br />
- Streamline the disorganised and time-consuming manual booking process
                <br />
- Provide 24/7 customer service without being tied to a phone

            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">Our Solution</h2>
<div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              We developed an AI-powered WhatsApp agent that acts as a real-time assistant, automating conversations and managing client interactions. Key features include:
              <br />
              <br />
              - Automated Appointment Booking: The agent intelligently captures necessary booking details, such as service type, preferred time/date, location and contact information.
              <br />
              - Instant FAQ Answering: Responds to common inquiries such as availability, services offered, working hours, and more.

              <br />
              - 24/7 Availability: The assistant operates around the clock, ensuring every customer inquiry receives an instant, professional response.
              <br />
              - Follow-Ups & Reminders: Automatically follows up with leads who haven’t responded and sends appointment reminders when needed.
            </p>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-white">The Outcome</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              - 10+ Weekly Manpower Hours Saved: Frees up significant time by automating the back-and-forth conversations required for bookings and inquiries.
              <br />
              - Improved Customer Experience: Fast, consistent responses lead to smoother communication and stronger relationships.
              <br />
              - Fewer Missed Messages: 24/7 uptime means leads and appointment requests are handled instantly, reducing response time and preventing lost opportunities.
            </p>
          </div>
        </div>
      </section>

     
     
      
    </div>
  );
};

export default AIWhatsAppInteractorPage;