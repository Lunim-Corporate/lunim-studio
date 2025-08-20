import React from 'react';
import { Clock, Mail, Phone } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactSection = () => (
  <section className="bg-[#0f172a] py-20">
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
        isEmail={true}
      />
      <InfoItem 
        icon={Phone} 
        title="Give Us A Bell" 
        description="020 3051 9057"
        isPhone={true}
      />
    </ul>
  </div>
);

interface InfoItemProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  isEmail?: boolean;
  isPhone?: boolean;
}

const InfoItem: React.FC<InfoItemProps> = ({ 
  icon: Icon, 
  title, 
  description,
  isEmail = false,
  isPhone = false
}) => {
  let href = '';
  let linkProps = {};
  
  if (isEmail) {
    href = `mailto:${description}`;
    linkProps = {
      href,
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        window.location.href = href;
      }
    };
  } else if (isPhone) {
    // Format phone number for tel: link (remove spaces and add country code)
    const formattedPhone = description.replace(/\s/g, '');
    href = `tel:+44${formattedPhone.substring(1)}`;
    linkProps = {
      href,
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        window.location.href = href;
      }
    };
  }

  return (
    <li className="flex items-start space-x-3">
      <Icon className="w-6 h-6 text-[#BBFEFF] flex-shrink-0" />
      <div>
        <p className="text-white font-semibold">{title}</p>
        {isEmail || isPhone ? (
          <a 
            {...linkProps}
            className="text-gray-200 text-base hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
          >
            {description}
          </a>
        ) : (
          <p className="text-gray-200 text-base">{description}</p>
        )}
      </div>
    </li>
  );
};

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