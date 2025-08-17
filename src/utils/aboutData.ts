// src/utils/aboutData.ts
import { 
   Rocket, 
  Users, 
  Globe, 
  Code, 
  Layout, 
  Award,
  Lightbulb,
  BookOpen,
  Handshake,
  BarChart3,
  CircleDashed,
  HeartPulse,
  Sparkles
} from 'lucide-react';

import { LucideIcon } from 'lucide-react';

export interface JourneyItem {
  year: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  achievements: string[];
}

export const journeyData: JourneyItem[] = [
  {
    year: 2018,
    title: "The Beginning",
    description: "Founded with a vision to revolutionize digital experiences",
    icon: Rocket,
    color: "bg-blue-500",
    achievements: [
      "First client project launched",
      "Core team established",
      "Initial design system created"
    ]
  },
  {
    year: 2020,
    title: "Expanding Horizons",
    description: "Pivoted to AI and emerging technologies",
    icon: Lightbulb,
    color: "bg-purple-500",
    achievements: [
      "AI research division formed",
      "First Web3 project delivered",
      "Team doubled in size"
    ]
  },
  {
    year: 2022,
    title: "Breakthrough Year",
    description: "Landmark projects and industry recognition",
    icon: Award,
    color: "bg-yellow-500",
    achievements: [
      "Won 3 industry awards",
      "Partnered with Fortune 500 clients",
      "Opened second studio location"
    ]
  },
  {
    year: 2024,
    title: "Global Presence",
    description: "Expanded operations internationally",
    icon: Globe,
    color: "bg-green-500",
    achievements: [
      "Launched Asia-Pacific division",
      "100+ projects delivered",
      "Recognized as top innovator"
    ]
  },
  {
    year: 2025,
    title: "The Future",
    description: "Pioneering the next generation of digital experiences",
    icon: BookOpen,
    color: "bg-pink-500",
    achievements: [
      "Developing quantum computing solutions",
      "Exploring immersive metaverse experiences",
      "Building sustainable tech initiatives"
    ]
  }
];


export const teamMembers = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Lead Designer",
    bio: "With over 10 years of experience in UX/UI design, Alex creates intuitive interfaces that users love. Passionate about design systems and accessibility.",
    image: "/team/alex.jpg",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 2,
    name: "Jamila Chen",
    role: "Frontend Developer",
    bio: "Jamila specializes in building performant, accessible web applications with React and TypeScript. She's passionate about animation and user interactions.",
    image: "/team/jamila.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    id: 3,
    name: "Marcus Rivera",
    role: "Backend Engineer",
    bio: "Marcus architects scalable backend systems that power our applications. He's an expert in distributed systems and database optimization.",
    image: "/team/marcus.jpg",
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 4,
    name: "Zara Petrova",
    role: "Product Manager",
    bio: "Zara bridges the gap between business goals and technical implementation. She ensures we build products that solve real user problems.",
    image: "/team/zara.jpg",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 5,
    name: "Kenji Tanaka",
    role: "UX Researcher",
    bio: "Kenji uncovers user insights through rigorous research and testing. His findings shape our product strategy and design decisions.",
    image: "/team/kenji.jpg",
    social: {
      linkedin: "#"
    }
  },
  {
    id: 6,
    name: "Nia Dubois",
    role: "Creative Director",
    bio: "Nia leads our creative vision and ensures brand consistency across all touchpoints. She brings ideas to life with her exceptional visual storytelling.",
    image: "/team/nia.jpg",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

export const impactStats = [
  { 
    value: 150, 
    label: "Projects Completed", 
    icon: CircleDashed,
    color: "bg-gradient-to-br from-blue-500 to-cyan-500"
  },
  { 
    value: 98, 
    label: "Client Satisfaction", 
    icon: HeartPulse,
    unit: "%",
    color: "bg-gradient-to-br from-purple-500 to-indigo-500"
  },
  { 
    value: 50, 
    label: "Users Impacted", 
    icon: Globe,
    unit: "M+",
    color: "bg-gradient-to-br from-green-500 to-emerald-500"
  },
  { 
    value: 25, 
    label: "Industry Awards", 
    icon: Award,
    color: "bg-gradient-to-br from-yellow-500 to-amber-500"
  }
];

export const coreValues = [
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We push boundaries to create what doesn't exist yet",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "Finding novel solutions to complex problems",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: HeartPulse,
    title: "Passion",
    description: "Loving what we do and doing it exceptionally",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Globe,
    title: "Impact",
    description: "Creating work that matters to the world",
    color: "from-green-500 to-emerald-500"
  }
];