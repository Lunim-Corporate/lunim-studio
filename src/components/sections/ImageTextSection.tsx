import React from 'react';
import creativityimage from '../../assets/creativityimage.jpg';

interface ImageTextSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

const ImageTextSection: React.FC<ImageTextSectionProps> = ({ 
  title,
  subtitle,
  description
}) => (
  <section className="bg-black py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start gap-10">
      <div className="bg-[#1e293b] rounded-lg w-full md:w-1/2 flex justify-center items-center h-64 overflow-hidden">
        <img
          src={creativityimage}
          alt="Rapid Prototype Illustration"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 text-white">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-xl font-medium mb-4">{subtitle}</p>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  </section>
);

export default ImageTextSection;