import React, { useState, useEffect } from 'react';
import { SliceZone } from '@prismicio/react';
import { Content } from '@prismicio/client';
import { useLocation } from 'react-router-dom';
import { client } from '../prismic';

// Section components that will act as slice renderers
import HeroSection from '../components/sections/HeroSection';
import ExpertiseAreasSection from '../components/sections/ExpertiseAreasSection';
import ServiceGridSection from '../components/sections/ServiceGridSection';
import ImageTextSection from '../components/sections/ImageTextSection';
import ProcessSection from '../components/sections/ProcessSection';
import ProjectShowcaseSection from '../components/sections/ProjectShowcaseSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';
import ContactForm from '../components/sections/ContactForm';

interface HomeProps {
  scrollTo?: string;
}

// Map Slice API IDs from JSON to React components
const components = {
  herosection: HeroSection,
  expertiseareas: ExpertiseAreasSection, 
  service_grid: ServiceGridSection,
  imageandtext: ImageTextSection,
  process: ProcessSection,
  project_showcase: ProjectShowcaseSection,
  faq: FAQSection,
  contact: ContactSection,
  contact_form: ContactForm,
};


const Home: React.FC<HomeProps> = ({ scrollTo }) => {
  const [homepage, setHomepage] = useState<Content.HomepageDocument | null>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash || (scrollTo ? `#${scrollTo}` : '');

    if (hash && homepage) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location, homepage, scrollTo]);

  useEffect(() => {
    const fetchHomepageData = async () => {
      try {
        console.log("FETCHING DATA...");
        const document = await client.getSingle('homepage');
        console.log("FETCH COMPLETE:", document);
        
        // Check for 'body' from Prismic
        if (document && document.data.body.length > 0) {
          console.log("SUCCESS: Document has", document.data.body.length, "slices.");
        } else {
          console.warn("WARNING: Fetched document is null or has no slices in the 'body' field.");
        }
        setHomepage(document);
      } catch (error) {
        console.error("FETCH ERROR:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHomepageData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-2xl bg-black">
        Loading ...
      </div>
    );
  }

  // Check for 'body' from Prismic
  if (!homepage || homepage.data.body.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-yellow-400 text-2xl bg-black text-center p-8">
        Content Loaded, but no slices found.
        <br />
        Please check your Prismic repository.
      </div>
    );
  }

  return (
    <div className="bg-black">
      {/* Pass homepage.data.body to the SliceZone */}
      <SliceZone slices={homepage.data.body} components={components} />
    </div>
  );
};

export default Home;