// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import backgroundImageSrc from "../assets/background.png"; // Your default background image
import { supabase } from '../supabaseClient';
import axios from 'axios';

// Import all Lucide React icons you are using, including new ones
import {
  FileDown, Search, Rocket, Target, ArrowRight, Star, Palette, Users, Brain, Coins, Zap, Timer,
  ChevronDown, ChevronUp, Clock, Mail, Phone, Loader2, // Add Loader2
  Rocket as RocketIcon,
  Target as TargetIcon,
  Brain as BrainIcon,
  Users as UsersIcon
} from 'lucide-react';

import Chatbot from '../components/Chatbot';
import LeadGenForm from '../components/LeadGenForm';

// Define the type for your hero section content
interface HeroContent {
  id: number;
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

  // ADDED: State for the Lead Generation Form Modal
  const [showLeadGenModal, setShowLeadGenModal] = useState(false);
  // const HAS_VISITED_KEY = 'hasVisitedLunimStudio'; // Key for localStorage - Commented out


  // Get the current location object from react-router-dom
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

  // ADDED: Lead Generation Modal Logic - MODIFIED TO ALWAYS SHOW LOCALLY ---
  useEffect(() => {
    // This setTimeout will force the modal to pop up after 2 seconds
    // every time this component mounts (e.g., on page refresh).
    console.log('Setting timeout to show LeadGenForm...');
    const timer = setTimeout(() => {
      setShowLeadGenModal(true); // <--- This line forces the modal to show
      console.log('LeadGenForm should now be visible.');
    }, 2000); // 2-second delay

    // Cleanup the timer if the component unmounts before the timeout fires
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once on component mount
  // --- END: Lead Generation Modal Logic ---


  // ADDED: Functions for LeadGenForm callbacks
  const handleLeadGenClose = () => {
    setShowLeadGenModal(false);
  };

  const handleLeadGenSuccess = () => {
    // Optionally, you can do something here after successful subscription
    console.log('Lead generation form submitted successfully!');
    // The modal will close automatically after success (see LeadGenForm.tsx)
  };


  // --- START: Hero Section Data Fetching (NEW) ---
  useEffect(() => {
    const fetchHeroContent = async () => {
      setLoadingHero(true);
      setErrorHero(null);
      try {
        const { data, error } = await supabase
          .from('hero_section_content')
          .select('*')
          .order('created_at', { ascending: false }) // Get the latest entry
          .limit(1)
          .single(); // Expect one row for hero content

        if (error && error.code !== 'PGRST116') { // PGRST116 means no rows found (which is fine)
          throw error;
        }

        if (data) {
          setHeroContent(data);
        } else {
          // Fallback to default if no data found in Supabase
          setHeroContent({
            id: 0, // Dummy ID
            hero_title_part1: 'Light the Way',
            hero_title_part2: 'To Your Next Moonshot',
            hero_description: 'We specialise in short burst collaborations that harness design thinking, AI integration, and Web 3.0 to power your next giant leap in digital innovation.',
            background_image_url: backgroundImageSrc, // Your default local image
          });
        }
      } catch (error: any) {
        console.error('Error fetching hero content:', error);
        setErrorHero(`Failed to load hero content: ${error.message}`);
        // Fallback to default on error as well
        setHeroContent({
          id: 0, // Dummy ID
          hero_title_part1: 'Light the Way',
          hero_title_part2: 'To Your Next Moonshot',
          hero_description: 'We specialise in short burst collaborations that harness design thinking, AI integration, and Web 3.0 to power your next giant leap in digital innovation.',
          background_image_url: backgroundImageSrc, // Your default local image
        });
      } finally {
        setLoadingHero(false);
      }
    };

    fetchHeroContent();
  }, []); // Empty dependency array means this runs once on mount
  // --- END: Hero Section Data Fetching ---


  // --- START: Your existing data arrays (sprintPackages, expertiseAreas, devProcess, ourServices, faqData) ---
  const sprintPackages = [
    {
      icon: Search,
      title: 'Discovery Sprint',
      duration: '1-2 weeks',
      description: 'Validate ideas and define project scope through research and strategic planning',
      borderColor: 'from-cyan-400 to-cyan-600',
      iconBg: 'from-cyan-400 to-cyan-600'
    },
    {
      icon: Rocket,
      title: 'Prototype Sprint',
      duration: '2-4 weeks',
      description: 'Build interactive prototypes and test the experience with target users',
      borderColor: 'from-purple-400 to-purple-600',
      iconBg: 'from-purple-400 to-purple-600'
    },
    {
      icon: Target,
      title: 'PoC Sprint',
      duration: '4-8 weeks',
      description: 'Develop a fully functioning proof of concept tested with real users',
      borderColor: 'from-pink-400 to-pink-600',
      iconBg: 'from-pink-400 to-pink-600'
    }
  ];

  const expertiseAreas = [
    {
      icon: TargetIcon,
      title: 'Design Thinking',
      description: 'Human-centered approach to innovation',
      bgColor: 'from-blue-400 to-blue-600',
      iconBg: 'bg-blue-500'
    },
    {
      icon: Timer,
      title: 'AI Integration',
      description: 'Cutting-edge artificial intelligence solutions',
      bgColor: 'from-purple-400 to-purple-600',
      iconBg: 'bg-purple-500'
    },
    {
      icon: BrainIcon,
      title: 'Web 3.0',
      description: 'Decentralized web technologies',
      bgColor: 'from-pink-400 to-pink-600',
      iconBg: 'bg-pink-500'
    },
    {
      icon: RocketIcon,
      title: 'UX/UI Design',
      description: 'Beautiful, intuitive user experiences',
      bgColor: 'from-yellow-400 to-orange-500',
      iconBg: 'bg-yellow-500'
    }
  ];

  const devProcess = [
    {
      icon: 1,
      title: 'Kickoff Meeting',
      description: 'Define goals and align expectations',
      bgColor: 'from-blue-400 to-blue-600',
      iconBg: 'bg-blue-500'
    },
    {
      icon: 2,
      title: 'Design Sprint',
      description: 'CIntensive 5-day innovation workshop',
      bgColor: 'from-purple-400 to-purple-600',
      iconBg: 'bg-purple-500'
    },
    {
      icon: 3,
      title: 'Rapid Prototyping',
      description: 'Build and test your solution quickly',
      bgColor: 'from-pink-400 to-pink-600',
      iconBg: 'bg-pink-500'
    },
    {
      icon: 4,
      title: 'MVP Handoff & Strategy',
      description: 'Deliver your validated product and roadmap',
      bgColor: 'from-yellow-400 to-orange-500',
      iconBg: 'bg-yellow-500'
    }
  ];

  const ourServices = [
    {
      icon: 1,
      title: 'Winner-Takes-All DAO for Community Grants',
      description: 'We built a decentralized application (dApp) that enables communities to run transparent, competitive funding rounds. ',
      tags: ['Web 3.0', 'UI/UX Design'],
      bgColor: 'bg-indigo-700',
      path: '/case-studies/project-atlas'
    },
    {
      icon: 2,
      title: 'Home of Stacks’ First Curated Multimedia NFT Collections',
      description: 'ThisIsNumberOne is a pioneering multimedia NFT contract on the Stacks Network',
      tags: ['AI Integration', 'Design thinking'],
      bgColor: 'bg-emerald-700',
      path: '/case-studies/ai-powered-triage'
    },
    {
      icon: 3,
      title: ' Pizza Hut: Checkout Redesign Streamlining Checkout for Returning Customers ',
      description: 'Expert guidance to navigate complex technical challenges.',
      tags: ['Tech Stack Audit', 'Scalability', 'Security'],
      bgColor: 'bg-rose-700',
      path: '/services/consulting'
    },
    {
      icon: 4,
      title: 'Optimising Sign-Up and Homepage for Parents',
      description: 'ToucanBox is a subscription-based activity box for children aged 3–8.',
      tags: ['Bug Fixing', 'Updates', 'Performance Monitoring'],
      bgColor: 'bg-cyan-700',
      path: '/services/maintenance'
    },
    {
      icon: 5,
      title: 'AI Agent Portfolio Builder',
      description: 'We developed an AI-powered onboarding agent that builds a user’s profile automatically upon sign-up by scraping publicly available information from sites like LinkedIn, IMDb, and personal websites..',
      tags: ['Bug Fixing', 'Updates', 'Performance Monitoring'],
      bgColor: 'bg-orange-700',
      path: '/aiagentbuilder'
    },
    {
      icon: 6,
      title: 'AI WhatsApp Interactor',
      description: 'We developed an AI-powered WhatsApp agent that helps professionals and service providers handle incoming messages—automating appointment bookings and answering customer questions in real time.',
      tags: ['Bug Fixing', 'Updates', 'Performance Monitoring'],
      bgColor: 'bg-pink-700',
      path: '/case-studies/ai-whatsapp-interactor'
    },
  ];

  // Data for the FAQ section
  const faqData = [
    {
      question: ' I’ve already completed part of this process- can you just help me with a specific section?',
      answer: 'Modularity is at the heart of our process. Our kickoff workshop will assess the stage you are currently at, and to discover where you want to be. We will always tailor our services to provide help only in the necessary and relevant areas to add maximum value and avoid retreading old ground.',
    },
    {
      question: 'How much is it going to cost?',
      answer: 'Project costs vary based on the scope, duration, and team required. A one-week Design Sprint has a different cost than a multi-week full process prototype & build engagement. We provide a detailed, fixed-price proposal after our initial workshop so there are no surprises.',
    },
    {
      question: 'Who from my team needs to be involved in the Design Sprint?',
      answer: 'Our philosophy is simple: you are the experts in your business, we are the experts in the process. You will provide the primary decision-maker. Beyond that, we encourage bringing team members from relevant departments to participate in the process alongside us. Your team’s deep knowledge can be invaluable to fuel the sprint, and to understand and take over the process after we finish our collaboration.',
    },
    {
      question: 'What do we receive at the end of the sprint?',
      answer: 'At the end of a Design Sprint, you typically receive a validated prototype, user feedback, a clear understanding of your solution\'s viability, and a roadmap for next steps.',
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
                <p className="text-xl text-gray-400">Loading hero content...</p>
              </div>
            ) : errorHero ? (
              <div className="text-red-500 text-lg">
                <p>Error loading hero content: {errorHero}</p>
                <p>Displaying default content.</p>
              </div>
            ) : (
              <>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  {heroContent?.hero_title_part1} <br />
                  <span className="bg-gradient-to-r from-[#BBFEFF] to-cyan-500 bg-clip-text text-transparent">
                    {heroContent?.hero_title_part2}
                  </span>
                </h1>

                <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
                  {heroContent?.hero_description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-[#BBFEFF] to-[#BBFEFF] text-black px-8 py-4 rounded-[0.3rem] font-semibold hover:from-[#BBFEFF] hover:to-[#BBFEFF] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <span>Get In Touch</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/about"
                    className="bg-gradient-to-r from-[#BBFEFF] to-[#BBFEFF] text-black px-8 py-4 rounded-[0.3rem] font-semibold hover:from-[#BBFEFF] hover:to-[#BBFEFF] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <span>Our Expertise</span>
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
                className="bg-black rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 border border-white border-opacity-20 hover:border-opacity-100 hover:shadow-2xl hover:shadow-white/20"
              >
                <div className={`${area.iconBg} text-white w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  <area.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                <p className="text-gray-300 text-sm">{area.description}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
                 Innovation Opportunities: Everywhere, For Everyone.
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Our team of experts in emerging tech work closely with businesses and individuals to identify and implement custom innovation strategies.
             <br></br>
              We combine creativity, cutting-edge technology, and agile practices to help you deliver solutions that not only meet today's needs but anticipate tomorrow's opportunities. 
             </p>
            
          </div>
        </div>
      </section>

      {/* New Expertise Cards Section */}
      <section className="bg-[#0f172a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Our Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {expertiseAreas.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105"
                >
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 transform transition-transform duration-300 group-hover:scale-125">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm max-w-xs">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rapid Prototype Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="bg-[#1e293b] rounded-lg w-full md:w-1/2 flex justify-center items-center h-64">
            <Users className="text-blue-500 w-20 h-20" />
          </div>
          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-4">
              From Idea to Validated Prototype in 2 Weeks
            </h2>
            <p className="text-blue-500 font-medium mb-4">
              Discover hidden opportunities in your business and have a working prototype ready in just two weeks.
            </p>
            <p className="text-white-400">
              Our experts will collaborate with your team to uncover high-potential ideas.
              Within the following week, we'll assess and then transform these ideas into
              working prototypes. Let's build the future of your business together.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0f172a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">A Development Process That Delivers Results in Weeks, Not Years</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {devProcess.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105"
              >
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 transform transition-transform duration-300 group-hover:scale-125">
                  <span className="text-white text-2xl font-bold">{item.icon}</span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm max-w-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Services Section - Changed to 'Past Projects' and added ID */}
      <section id="past-projects" className="bg-[#0f172a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Past Projects</h2>
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
                    p-8 h-35 flex items-center justify-center
                  `}
                >
                  <span className="text-white text-6xl font-extrabold">
                    {service.icon}
                  </span>
                </div>

                <div className="bg-[#1f2937] p-6 text-left flex flex-col justify-between h-35">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Questions That Make Sense</h2>

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

      {/* START: Contact Form Section */}
      <section className="bg-[#0f172a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Contact Us</h2>
          <p className="text-lg text-gray-300 mb-12 text-center">
            Book a free consultation with our innovation experts. Let's discuss your project idea and how a design sprint can bring it to life.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column: Why Contact Us? and Office Hours */}
            <div className="space-y-8">
              {/* Why Contact Us? Section */}
              <div className="bg-[#1a202c] p-8 rounded-lg shadow-xl border border-white">
                <h3 className="text-xl font-bold text-white mb-6">Why Contact Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">Quick Response</p>
                      <p className="text-gray-400 text-sm">We respond to all inquiries within 24 hours.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Mail className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">Expert Consultation</p>
                      <p className="text-gray-400 text-sm">Get advice from our experienced team.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Phone className="w-6 h-6 text-purple-400 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">Dedicated Support</p>
                      <p className="text-gray-400 text-sm">Personal attention for every client.</p>
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
                    <span>9:00 AM - 6:00 PM EST</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-semibold">Saturday</span>
                    <span>10:00 AM - 4:00 PM EST</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-semibold">Sunday</span>
                    <span className="text-red-400">Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-[#1a202c] p-8 rounded-lg shadow-xl border border-white">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Ready to Innovate?</h3>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-gray-300 text-sm font-semibold mb-2">
                    Your full name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-3 rounded-lg bg-[#1f2937] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Work Email */}
                <div>
                  <label htmlFor="workEmail" className="block text-gray-300 text-sm font-semibold mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    placeholder="your@company.com"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    className="w-full p-3 rounded-lg bg-[#1f2937] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-gray-300 text-sm font-semibold mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full p-3 rounded-lg bg-[#1f2937] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Project Budget */}
                <div>
                  <label htmlFor="projectBudget" className="block text-gray-300 text-sm font-semibold mb-2">
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
                      <option value="">Select budget range</option>
                      <option value="<10k">Less than $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value=">100k">More than $100,000</option>
                    </select>
                    {/* Custom arrow for select */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Project Goals */}
                <div className="md:col-span-2">
                  <label htmlFor="projectGoals" className="block text-gray-300 text-sm font-semibold mb-2">
                    Project Goals
                  </label>
                  <textarea
                    id="projectGoals"
                    name="projectGoals"
                    rows={5}
                    placeholder="Tell us about your project goals and what you'd like to achieve."
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
                  <p className="md:col-span-2 text-center text-green-400">Form submitted successfully!</p>
                )}
                {formStatus === 'error' && (
                  <p className="md:col-span-2 text-center text-red-400">{errorMessage}</p>
                )}

                {/* Submit Button */}
                <div className="md:col-span-2 text-center">
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl
                               inline-flex items-center justify-center space-x-2" // Added space-x-2 for icon
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* END: Contact Form Section */}

      {/* Chatbot and LeadGenForm outside main content div */}
      <Chatbot />
      {showLeadGenModal && (
        <LeadGenForm
          onClose={handleLeadGenClose}
          onSuccess={handleLeadGenSuccess}
        />
      )}
    </div>
  );
};

export default App;