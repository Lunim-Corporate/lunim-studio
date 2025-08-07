import React from 'react';
import { Clock, Mail, Phone } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactSection = () => (
  <section id="contact-form" className="bg-[#0f172a] py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white mb-4 text-center">Ready to Innovate?</h2>
      <p className="text-lg text-gray-300 mb-12 text-center">
        Let's discuss your project and how we can bring it to life.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-8">
          <ContactInfo />
          <OfficeHours />
        </div>
        <ContactForm />
      </div>
    </div>
  </section>
);

const ContactInfo = () => (
  <div className="bg-[#1a202c] p-8 rounded-lg shadow-xl border border-white">
    <h3 className="text-xl font-bold text-white mb-6">Why Contact Us?</h3>
    <ul className="space-y-4">
      <InfoItem 
        icon={Clock} 
        title="Quick Response" 
        description="We respond to all inquiries within 24 hours." 
      />
      <InfoItem 
        icon={Mail} 
        title="Drop Us An Email" 
        description="hello@lunim.io" 
      />
      <InfoItem 
        icon={Phone} 
        title="Give Us A Bell" 
        description="020 3051 9057" 
      />
    </ul>
  </div>
);

const InfoItem: React.FC<{ icon: React.ComponentType<{ className?: string }>, title: string, description: string }> = ({ 
  icon: Icon, 
  title, 
  description 
}) => (
  <li className="flex items-start space-x-3">
    <Icon className="w-6 h-6 text-[#BBFEFF] flex-shrink-0" />
    <div>
      <p className="text-white font-semibold">{title}</p>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </li>
);

const OfficeHours = () => (
  <div className="bg-[#1a202c] p-8 rounded-lg shadow-xl border border-white">
    <h3 className="text-xl font-bold text-white mb-6">Office Hours</h3>
    <ul className="space-y-3 text-gray-300">
      <OfficeHourItem days="Monday - Friday" hours="9:00 AM - 6:00 PM BST" />
      <OfficeHourItem days="Saturday" hours="10:00 AM - 4:00 PM BST" />
      <OfficeHourItem days="Sunday" hours="Closed" isClosed />
    </ul>
  </div>
);

const OfficeHourItem: React.FC<{ days: string; hours: string; isClosed?: boolean }> = ({ 
  days, 
  hours, 
  isClosed = false 
}) => (
  <li className="flex justify-between items-center">
    <span className="font-semibold">{days}</span>
    {isClosed ? (
      <span className="text-red-400">{hours}</span>
    ) : (
      <span>{hours}</span>
    )}
  </li>
);

export default ContactSection;