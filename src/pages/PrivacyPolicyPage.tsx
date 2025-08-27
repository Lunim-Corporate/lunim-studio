import React, { useState, useEffect } from 'react';
import { Content } from '@prismicio/client';
import { client } from '../prismic';
import { PrismicRichText } from '@prismicio/react';

const PrivacyPolicyPage: React.FC = () => {
  const [document, setDocument] = useState<Content.PrivacyPolicyDocument | null>(null);

  useEffect(() => {
    const fetchPageData = async () => {
      // Fetch the singleton "privacy_policy" document
      const doc = await client.getSingle('privacy_policy');
      if (doc) {
        setDocument(doc);
      }
    };
    fetchPageData();
  }, []);

  if (!document) {
    return (
      <div className="pt-24 md:pt-16 bg-[#0f172a] text-white min-h-screen p-8 flex justify-center items-center">
         
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-16 bg-[#0f172a] text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-4xl font-bold mb-8 text-center" style={{ color: '#BBFEFF' }}>
          <PrismicRichText field={document.data.title} />
        </div>

        {/* This single component will render all your headings, paragraphs, and lists */}
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <PrismicRichText field={document.data.page_content} />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;