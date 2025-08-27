import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Content } from '@prismicio/client';
import { client } from '../prismic';
import { PrismicRichText } from '@prismicio/react';
import { asText } from '@prismicio/helpers';

const CaseStudyPage: React.FC = () => {
  // Get the unique ID from the URL (e.g., "project-atlas")
  const { uid } = useParams();
  const [document, setDocument] = useState<Content.CaseStudyDocument | null>(null);

  // Fetch the correct document from Prismic based on the URL's UID
  useEffect(() => {
    const fetchCaseStudyData = async () => {
      if (uid) {
        const doc = await client.getByUID('case_study', uid);
        setDocument(doc);
      }
    };
    fetchCaseStudyData();
  }, [uid]);

  // Show a loading state while fetching
  if (!document) {
    return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>;
  }

  // Render the page using the fetched data
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen pt-20">
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black"
        style={{
          backgroundImage: `url(${document.data.hero_image.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
            {asText(document.data.hero_title)}
          </h1>
        </div>
      </section>

      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-3xl font-bold mb-8 text-[#BBFEFF]">
             <PrismicRichText field={document.data.challenge_title} />
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed">
            <PrismicRichText field={document.data.challenge_content} />
          </div>
        </div>
      </section>

      <section className="py-8 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-3xl font-bold mb-8 text-[#BBFEFF]">
            <PrismicRichText field={document.data.solution_title} />
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed">
            <PrismicRichText field={document.data.solution_content} />
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-3xl font-bold mb-8 text-[#BBFEFF]">
            <PrismicRichText field={document.data.impact_title} />
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed">
            <PrismicRichText field={document.data.impact_content} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;