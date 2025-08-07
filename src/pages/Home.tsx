// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import backgroundImageSrc from "../assets/background.png"; // Your default background image
import { supabase } from '../supabaseClient';
// import axios from 'axios';
import creativityimage from '../assets/creativityimage.jpg'; // Assuming it's in the assets folder and has no file extension in its name, which is unusual for image files.
import aiAgentImage from '../assets/ai-agent-listing.png'; // Assuming it's in the assets folder and has no file extension in its name, which is unusual for image files.
import aiWhatsAppImage from '../assets/ai-whatsapp-listing.png'; // Assuming it's in the assets folder and has no file extension in its name, which is unusual for image files.
import nftCollectionImage from '../assets/nft-collection-listing.png'; // Assuming it's in the assets folder and has no file extension in its name, which is unusual for image files.
import pizzaHutImage from '../assets/pizza-hut-listing.png'; // Assuming it's in the assets folder and has no file extension in its name, which is unusual for image files.
import toucanBoxImage from '../assets/toucanbox-listing.png'; // Assuming it's in the assets folder and has no file extension in its name, which is unusual for image files.
import winnerTakesAllImage from '../assets/winner-takes-all-listing.png'; // Assuming it's in the assets folder and has no file extension in its name, which is unusual for image files.

// Import all Lucide React icons you are using, including new ones
import {
  Search, Rocket, Target, ArrowRight,
  ChevronDown, Clock, Mail, Phone, Loader2, PersonStanding, UserStar, Cpu, Kanban, Images, 
  Network as NetworkIcon,
  Telescope as TelescopeIcon,
  Brain as BrainIcon,
  
} from 'lucide-react';


// Define the type for your hero section content
interface HeroContent {
 //add ID if you are retriving from database formerly superbase for this project. 
  hero_title_part1: string;
  hero_title_part2: string;
  hero_description: string;
  background_image_url: string | null;
}

const App: React.FC = () => {

  // --- Hero Section State (NEW) ---
  const [heroContent, setHeroContent] = useState<HeroContent | null>(null);
  const [loadingHero, setLoadingHero] = useState(true);
  const [errorHero, setErrorHero] = useState<string | null>(null);


  // State for the contact form fields
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [company, setCompany] = useState('');
  const [projectBudget, setProjectBudget] = useState('');
  const [projectGoals, setProjectGoals] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation();

  // --- START: Scroll to hash logic ---
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); // Remove '#'
      if (element) {
        // Use smooth scroll behavior
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]); // Re-run when location changes
  // --- END: Scroll to hash logic ---


  // --- START: Hero Section Data Fetching (NEW) ---not fetching from database any longer, still kept database for future use.
  //try catch methos will normally assume and call most data from superbase. 
  useEffect(() => {
    const fetchHeroContent = async () => {
      setLoadingHero(false);
      setErrorHero(null);
      try {
        setHeroContent({
         
          hero_title_part1: 'Light the Way',
          hero_title_part2: 'To Your Next Moonshot',
          hero_description: 'We specialise in design thinking, AI integration, and Web3 to power your next giant leap in digital innovation.',
          background_image_url: backgroundImageSrc, // default local image
        });
      } catch (error: any) {
        setHeroContent({
    
          hero_title_part1: 'Light the Way',
          hero_title_part2: 'To Your Next Moonshot',
          hero_description: 'We specialise in design thinking, AI integration, and Web3 to power your next giant leap in digital innovation.',
          background_image_url: backgroundImageSrc, //  default local image
        });
      } finally {
        setLoadingHero(false);
      }
    };

    fetchHeroContent();
  }, []); 
  // Empty dependency array means this runs once on mount
  // --- END: Hero Section Data Fetching ---


  // --- START: Your existing data arrays (sprintPackages, expertiseAreas, devProcess, ourServices, faqData) ---
  const sprintPackages = [
  {
    icon: Search,
    title: 'Discovery Sprint',
    duration: '1-2 weeks',
    description: 'Validate ideas and define project scope through research and strategic planning',
    borderColor: 'from-cyan-400 to-cyan-600', // You might want to adjust this too if it's a background border
    iconBg: 'bg-[#BBFEFF]' // Changed to your desired background color
  },
  {
    icon: Rocket,
    title: 'Prototype Sprint',
    duration: '2-4 weeks',
    description: 'Build interactive prototypes and test the experience with target users',
    borderColor: 'from-purple-400 to-purple-600', // You might want to adjust this too
    iconBg: 'bg-[#BBFEFF]' // Changed
  },
  {
    icon: Target,
    title: 'PoC Sprint',
    duration: '4-8 weeks',
    description: 'Develop a fully functioning proof of concept tested with real users',
    borderColor: 'from-pink-400 to-pink-600', // You might want to adjust this too
    iconBg: 'bg-[#BBFEFF]' // Changed
  }
];

const expertiseAreas = [
  {
    icon: TelescopeIcon,
    title: 'Innovation Discovery',
    description: 'Our discovery process cuts through the noise to uncover and adapt to high-impact opportunities, ensuring we\'re solving the right problems from day one.',
    bgColor: 'bg-[#BBFEFF]', // Changed to your desired background color
    iconBg: 'bg-[#BBFEFF]' // Changed
  },
  {
    icon: PersonStanding,
    title: 'Human-Centric Design',
    description: 'Powerful technology is nothing without a flawless user experience. We help you deliver products that are not only functional but also beautiful, intuitive, and a delight to use.',
    bgColor: 'bg-[#BBFEFF]', // Changed
    iconBg: 'bg-[#BBFEFF]' // Changed
  },
  {
    icon: BrainIcon,
    title: 'AI Implementations',
    description: 'Seamlessly integrate the power of AI into your workflows. Your unique challenges require a custom-fit solution. We build bespoke intelligent systems to level up your team’s capabilities - in days, not months.',
    bgColor: 'bg-[#BBFEFF]', // Changed
    iconBg: 'bg-[#BBFEFF]' // Changed
  },
  {
    icon: NetworkIcon,
    title: 'Web3 & Decentralised Solutions',
    description: 'Build the next generation of the internet. Our experts can guide you through the complexities of blockchain, smart contracts, and tokenisation to create novel, community-owned experiences.',
    bgColor: 'bg-[#BBFEFF]', // Changed
    iconBg: 'bg-[#BBFEFF]' // Changed
  }
];

  const expertiseSection = [
    {
      icon: UserStar,
      title: 'Design Thinking',
      description: 'Deep empathy and human-centered approach to innovation',
      bgColor: 'bg-[#BBFEFF]', // Changed
    iconBg: 'bg-[#BBFEFF]' // Changed
    },
    {
      icon: Cpu,
      title: 'Emerging Tech',
      description: 'Our home is the cutting edge. We learn quickly, and powerfully',
       bgColor: 'bg-[#BBFEFF]', // Changed
    iconBg: 'bg-[#BBFEFF]' // Changed
    },
    {
      icon: Kanban,
      title: 'Agile Methodologies',
      description: 'Fast value, high adaptability, and reduced waste',
       bgColor: 'bg-[#BBFEFF]', // Changed
    iconBg: 'bg-[#BBFEFF]' // Changed
    },
    {
      icon: Images,
      title: 'UX/UI',
      description: 'Beautiful, intuitive user experiences are at the core of everything we do',
       bgColor: 'bg-[#BBFEFF]', // Changed
    iconBg: 'bg-[#BBFEFF]' // Changed
    }
  ];

  const devProcess = [
    {
      icon: 1,
      title: 'FREE Introductory Session',
      duration: '1 hour',
      description: 'A brief but intensive session to clarify your business goals, define the problem you’re solving, and align on your next steps.',
      bgColor: 'from-blue-400 to-blue-600',
      iconBg: 'bg-blue-500'
    },
    {
      icon: 2,
      title: 'Discovery Sprint',
      duration: '1 - 2 weeks',
      description: 'An immersive and collaborative process where our teams ideate solutions and create the blueprint for your prototype.',
      bgColor: 'from-purple-400 to-purple-600',
      iconBg: 'bg-purple-500'
    },
    {
      icon: 3,
      title: 'Prototype Sprint',
      duration: '2 - 4 weeks',
      description: 'Rapidly develop a clickable prototype that you can use to test your core assumptions with real users and stakeholders.',
      bgColor: 'from-pink-400 to-pink-600',
      iconBg: 'bg-pink-500'
    },
    {
      icon: 4,
      title: 'Build Sprint',
      duration: '3 - 6 weeks',
      description: 'Build the core functional product, and outline the strategy and timeline of a successful launch.',
      bgColor: 'from-yellow-400 to-orange-500',
      iconBg: 'bg-yellow-500'
    }
  ];

  const ourServices = [
    {
      title: 'Winner-Takes-All DAO for Community Grants',
      description: 'A decentralised application (dApp) that enables communities to run transparent, competitive funding rounds.',
      tags: ['Web 3.0', 'UI/UX Design'],
      bgColor: 'bg-indigo-700',
      path: '/case-studies/project-atlas',
      image: winnerTakesAllImage
    },
    {
      title: 'Stacks’ First Curated Multimedia NFT Collection',
      description: 'Launching the network’s first music, generative, and mixed-media collections.',
      tags: ['AI Integration', 'Design thinking'],
      bgColor: 'bg-emerald-700',
      path: '/case-studies/ai-powered-triage',
      image: nftCollectionImage
    },
    {
      title: 'Pizza Hut: Checkout Redesign',
      description: 'Expert guidance to navigate complex technical challenges.',
      tags: ['Tech Stack Audit', 'Scalability', 'Security'],
      bgColor: 'bg-rose-700',
      path: '/services/consulting',
      image: pizzaHutImage
    },
    {
      title: 'ToucanBox: Redesigning Sign-Up for Busy Parents',
      description: 'How a user-centric overhaul reduced friction and boosted subscriber conversion.',
      tags: ['Bug Fixing', 'Updates', 'Performance Monitoring'],
      bgColor: 'bg-cyan-700',
      path: '/services/maintenance',
      image: toucanBoxImage
    },
    {
      title: 'AI Agent Portfolio Builder',
      description: 'Slashing Onboarding friction with AI-powered data sourcing.',
      tags: ['Bug Fixing', 'Updates', 'Performance Monitoring'],
      bgColor: 'bg-orange-700',
      path: '/aiagentbuilder',
      image: aiAgentImage
    },
    {
      title: 'AI WhatsApp Assistant',
      description: 'Automated assistant for managing bookings and answering questions 24/7.',
      tags: ['Bug Fixing', 'Updates', 'Performance Monitoring'],
      bgColor: 'bg-pink-700',
      path: '/ai-whatsapp-interactor',
      image: aiWhatsAppImage
    },
  ];

  // Data for the FAQ section
  const faqData = [
    {
      question: 'I’ve already completed part of this process - can you just help me with a specific section?',
      answer: 'Modularity is at the heart of our process. Our kickoff meeting will assess the stage you are currently at, and discover where you want to be. We will always tailor our services to provide help only in the necessary and relevant areas that add maximum value, and avoid retreading old ground.',
    },
    {
      question: 'How much is it going to cost?',
      answer: 'Project costs vary based on the scope, duration, and team required. A one-week Discovery Sprint has a different cost than a multi-week full process prototype & build engagement. We provide a detailed, fixed-price proposal after the initial session so there are no surprises.',
    },
    {
      question: 'Who from my team needs to be involved in a Sprint?',
      answer: 'Our philosophy is simple; you are the experts in your business, we are the experts in the process.\nYou will provide the primary decision-maker. Beyond that, we encourage you to bring relevant team members to participate alongside us. Your team’s deep knowledge can be invaluable fuel for the sprint, and allow you to more effectively take the process forward after we finish working together.',
    },
  ];
  // --- END: of existing data arrays ---


  // This is the function that handles form submission and interacts with Supabase 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior
    setFormStatus('submitting');
    setErrorMessage(''); // Clear previous errors

    // Basic validation: Check if required fields are filled
    if (!fullName || !workEmail || !projectGoals) {
      setErrorMessage('Please fill in all required fields (Full Name, Work Email, Project Goals).');
      setFormStatus('error');
      return; // Stop the submission
    }

    try {
      // Insert data into the 'contacts' table in Supabase
      const { data, error } = await supabase
        .from('contacts') // Name of your table in Supabase
        .insert([
          {
            full_name: fullName,
            work_email: workEmail,
            company: company,
            project_budget: projectBudget,
            project_goals: projectGoals,
          },
        ])
        .select(); // Use .select() to return the inserted data (optional, but good for debugging)

      if (error) {
        throw error; // Throw error to be caught by the catch block
      }

      console.log('Contact form submitted successfully:', data);
      setFormStatus('success');
      // Clear form fields after successful submission
      setFullName('');
      setWorkEmail('');
      setCompany('');
      setProjectBudget('');
      setProjectGoals('');
    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      // Display a user-friendly error message
      setErrorMessage(`Failed to submit form: ${error.message || 'Unknown error occurred.'}`);
      setFormStatus('error');
    }
  };

  return (
    
    <div className="pt-16 bg-black">
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center relative overflow-hidden bg-black transition-all duration-500" // Added transition
        style={{
          backgroundImage: loadingHero
            ? `url(${backgroundImageSrc})` // Show default while loading
            : heroContent?.background_image_url
              ? `url(${heroContent.background_image_url})`
              : `url(${backgroundImageSrc})`, // Fallback to local default if no URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10"> {/* Added relative z-10 */}
          <div className="text-center">
            {loadingHero ? (
              <div className="flex flex-col justify-center items-center h-64"> {/* Increased height for loader */}
                <Loader2 className="animate-spin h-12 w-12 text-blue-500 mb-4" /> {/* Larger loader */}
                <p className="text-xl text-gray-200">Loading hero content...</p>
              </div>
            ) : errorHero ? (
              <div className="text-red-500 text-lg">
                <p>Error loading hero content: {errorHero}</p>
                <p>Displaying default content.</p>
              </div>
            ) : (
              <>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center ">
                  {heroContent?.hero_title_part1} <br />
                  <span className="bg-gradient-to-r from-[#BBFEFF] to-cyan-500 bg-clip-text text-transparent px-4 ">
                    {heroContent?.hero_title_part2}
                  </span>
                </h1>

                <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
                  {heroContent?.hero_description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                 <Link
                   to="#contact-form" // Changed to point to the ID
                   className="bg-gradient-to-r from-[#BBFEFF] to-[#BBFEFF] text-black px-8 py-4 rounded-[0.3rem] font-semibold hover:from-[#BBFEFF] hover:to-[#BBFEFF] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
>
  <span>Get In Touch</span>
  <ArrowRight className="w-5 h-5" />
</Link>
                  <Link
                    to="#expertiseSection"
                    className="bg-gradient-to-r from-[#BBFEFF] to-[#BBFEFF] text-black px-8 py-4 rounded-[0.3rem] font-semibold hover:from-[#BBFEFF] hover:to-[#BBFEFF] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <span>Core Expertise</span>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {expertiseAreas.slice(0, 4).map((area, index) => (
              <div
                key={index}
                className="bg-black rounded-2xl p-6 border border-white border-opacity-20"
              >
                <div className={`${area.iconBg} text-black w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  <area.icon className="w-7 h-7" />
                </div>
                <h3 className="text-[#BBFEFF] text-xl font-bold mb-2">{area.title}</h3>
                <p className="text-gray-300 text-base">{area.description}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
                 Innovation Opportunities, Everywhere, For Everyone
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Our team of experts in emerging tech will work closely with you to identify and implement custom strategies.
             <br></br>
              We combine creativity, cutting-edge technology, and agile practices to help you not only meet today's needs but also anticipate tomorrow's opportunities. 
             </p>
            
          </div>
        </div>
      </section>

      {/*Expertise Section */}
      <section id="expertiseSection" className="bg-[#0f172a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Core Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {expertiseSection.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="bg-[#BBFEFF] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-[#BBFEFF] font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-200 text-base max-w-xs">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

       <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* This div held the icon, now it will hold the image */}
        <div className="bg-[#1e293b] rounded-lg w-full md:w-1/2 flex justify-center items-center h-64 overflow-hidden"> {/* Added overflow-hidden */}
  {/* REPLACE ICON WITH IMAGE */}
  <img
    src={creativityimage}
    alt="Rapid Prototype Illustration"
    className="w-full h-full object-cover rounded-lg" // Changed object-contain to object-cover, removed p-4, added rounded-lg
  />
</div>
        <div className="w-full md:w-1/2 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Clarity in Days, Confidence for Years
          </h2>
          <p className="text- font-medium mb-4">
            Intensive design sprints to turn vision into reality.
          </p>
          <p className="text-white-400">
            We don’t just innovate for you, we equip you with the tools to do so yourself. By the end of our process, you will have more than just a product; you'll have a unified team, a validated concept, and a clear strategic plan to take your moonshot idea to market.
          </p>
        </div>
      </div>
    </section>

      <section className="bg-[#0f172a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">The Framework for Your Next Breakthrough</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {devProcess.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group transition-transform duration-300 hover-disabled"
              >
                <div className="bg-[#BBFEFF] w-16 h-16 rounded-full flex items-center justify-center mb-4 transform transition-transform duration-300 group-hover-disabled">
                  <span className="text-black text-2xl font-bold">{item.icon}</span>
                </div>
                <h3 className="text-[#BBFEFF] font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-400 text-base max-w-xs">{item.duration}</p>
                <p className="text-gray-200 text-base max-w-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Services Section - Changed to 'Past Projects' and added ID */}
      <section id="past-projects" className="bg-[#0f172a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Previous Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {ourServices.map((service, index) => (
              <Link
                to={service.path}
                key={index}
                className="block rounded-lg shadow-lg overflow-hidden
                           transform transition-transform duration-300 hover:scale-105"
              >
                <div
                  className={`
                    ${service.bgColor}
                    p-14 h-35 flex items-center justify-center
                  `}
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                </div>

                <div className="bg-[#1f2937] p-6 text-left flex flex-col justify-between h-35">
                  <div>
                    <h3 className="text-[#BBFEFF] font-bold text-xl mb-2">{service.title}</h3>
                    <p className="text-gray-200 text-base">{service.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* START: FAQ Section (Simplified with <details>) */}
      <section className="bg-[#0f172a] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-[#1f2937] rounded-lg shadow-md overflow-hidden">
                <details className="group">
                  <summary className="w-full flex justify-between items-center p-6 text-left cursor-pointer focus:outline-none">
                    <h3 className="text-lg font-semibold text-white">
                      {item.question}
                    </h3>
                    <ChevronDown className="w-6 h-6 text-white transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="p-6 pt-0 text-gray-300 opacity-100 transition-opacity duration-300 ease-in-out">
                    {item.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END: FAQ Section */}

  
    <section id="contact-form" className="bg-[#0f172a] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Ready to Innovate?</h2>
        <p className="text-lg text-gray-300 mb-12 text-center">
          Let's discuss your project and how we can bring it to life.
        </p>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
  {/* Left Column: Why Contact Us? and Office Hours */}
  <div className="space-y-8">
    {/* Why Contact Us? Section */}
    <div className="bg-[#1a202c] p-8 rounded-lg shadow-xl border border-white">
      <h3 className="text-xl font-bold text-white mb-6">Why Contact Us?</h3>
      <ul className="space-y-4">
        <li className="flex items-start space-x-3">
          {/* Changed text-blue-400 to text-[#BBFEFF] */}
          <Clock className="w-6 h-6 text-[#BBFEFF] flex-shrink-0" />
          <div>
            <p className="text-white font-semibold">Quick Response</p>
            <p className="text-gray-200 text-base">We respond to all inquiries within 24 hours. </p>
          </div>
        </li>
        <li className="flex items-start space-x-3">
          {/* Changed text-blue-400 to text-[#BBFEFF] */}
          <Mail className="w-6 h-6 text-[#BBFEFF] flex-shrink-0" />
          <div>
            <p className="text-white font-semibold">Drop Us An Email</p>
            <p className="text-gray-200 text-base">hello@lunim.io</p>
          </div>
        </li>
        <li className="flex items-start space-x-3">
          {/* Changed text-blue-400 to text-[#BBFEFF] */}
          <Phone className="w-6 h-6 text-[#BBFEFF] flex-shrink-0" />
          <div>
            <p className="text-white font-semibold">Give Us A Bell</p>
            <p className="text-gray-200 text-base">020 3051 9057 </p>
          </div>
        </li>
      </ul>
    </div>
   


              {/* Office Hours Section */}
              <div className="bg-[#1a202c] p-8 rounded-lg shadow-xl border border-white">
                <h3 className="text-xl font-bold text-white mb-6">Office Hours</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex justify-between items-center">
                    <span className="font-semibold">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM BST</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-semibold">Saturday</span>
                    <span>10:00 AM - 4:00 PM BST</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-semibold">Sunday</span>
                    <span className="text-red-400">Closed</span>
                  </li>
                </ul>
              </div>
            </div>

           {/* Right Column: Contact Form */}
          <div id="innovateForm" className="bg-[#1a202c] p-8 rounded-lg shadow-xl border border-white">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"> {/* <--- Added id="innovateForm" here */}
              {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-gray-300 text-base font-semibold mb-2">
                    Your full name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Your Full Name"
                    value={fullName}
                    required
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-3 rounded-lg bg-[#1f2937] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Work Email */}
                <div>
                  <label htmlFor="workEmail" className="block text-gray-300 text-base font-semibold mb-2">
                   Your Email *
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    placeholder="Your Email Address"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    className="w-full p-3 rounded-lg bg-[#1f2937] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                 

                 {/* Company Name*/}
                <div>
                  <label htmlFor="workEmail" className="block text-gray-300 text-base font-semibold mb-2">
                   Company Name*
                  </label>
                  <input
                    type="name"
                    id="companyname"
                    name="companyname"
                    placeholder="Your Company Name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full p-3 rounded-lg bg-[#1f2937] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Project Budget */}
                <div>
                  <label htmlFor="projectBudget" className="block text-gray-300 text-base font-semibold mb-2">
                    Project Budget 
                  </label>
                  <div className="relative">
                    <select
                      id="projectBudget"
                      name="projectBudget"
                      value={projectBudget}
                      onChange={(e) => setProjectBudget(e.target.value)}
                      className="w-full p-3 rounded-lg bg-[#1f2937] border border-gray-700 text-white appearance-none focus:outline-none focus:border-blue-500"
                    >

                      <option value="">Estimated Budget </option>
                      <option value=" ">I don’t know yet</option>
                      <option value=" ">I’d rather not say</option>
                      <option value="<£500">Less than £500</option>
                      <option value="£1000 - £5000">£1000 - £5000</option>
                      <option value="£5000-£10000 ">£5000 - £10000</option>
                      <option value=">10000 ">Above £10000</option>
                
                    </select>
                    {/* Custom arrow for select */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-200">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg> 
                    </div>
                  </div>
                </div>

                {/* Project Goals */}
                <div className="md:col-span-2">
                  <label htmlFor="projectGoals" className="block text-gray-300 text-base font-semibold mb-2">
                    Project Goals *
                  </label>
                  <textarea
                    id="projectGoals"
                    name="projectGoals"
                    rows={5}
                    placeholder="Tell us about your idea…"
                    value={projectGoals}
                    onChange={(e) => setProjectGoals(e.target.value)}
                    className="w-full p-3 rounded-lg bg-[#1f2937] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>

                {/* Form Status Messages */}
                {formStatus === 'submitting' && (
                  <p className="md:col-span-2 text-center text-blue-400">Submitting...</p>
                )}
                {formStatus === 'success' && (
                  <p className="md:col-span-2 text-center text-green-400"> Submitted! </p>
                )}
                {formStatus === 'error' && (
                  <p className="md:col-span-2 text-center text-red-400">{errorMessage}</p>
                )}

                {/* Submit Button */}
                <div className="md:col-span-2 text-center">
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="bg-[#BBFEFF] text-black px-8 py-4 rounded-lg font-semibold 
           transition-all duration-200 transform hover:scale-105 
           shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
                      </>
                    ) : (
                      'Send Enquiry'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* END: Contact Form Section */}

      
    </div>
  );
};

export default App;