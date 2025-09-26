import peterPonton from "../assets/Peter-headshot.png";
import peteFrancomb from "../assets/pete-headshot.png";
import nickCurum from "../assets/nick-headshot.png";

export interface SocialLink {
  icon: string;
  url: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  details: string[];
  social: SocialLink[];
}
export const team: TeamMember[] = [
  {
    name: "Peter Ponton",
    role: "Chief Executive: Operations",
    image: peterPonton,
    bio: "Peter brings over 30 years of high-tech leadership, with extensive expertise in launching and transforming businesses within the digital landscape.",
    details: [
      "Peter brings over 30 years of high-tech leadership, with extensive expertise in launching and transforming businesses within the digital landscape.",
      "He is a pioneer in sustainable applications using blockchain and NFT technology.",
      "His work empowers creative and indigenous communities, aiming to build a more equitable and decentralised digital future."
    ],
    social: [
      { icon: "linkedin", url: "#" },
      { icon: "twitter", url: "#" }
    ]
  },
  {
    name: "Pete Francomb",
    role: "Chief Executive: Creative",
    image: peteFrancomb,
    bio: "Pete is a visionary entrepreneur dedicated to building sustainable ventures where commercial success and human flourishing converge.",
    details: [
      "Pete is a an entrepreneur and designer with a background in media and tech, dedicated to running businesses where commercial success and human flourishing go hand in hand.",
      "His core passion is helping creatives make their projects happen.",
      "Pete's deep understanding of design thinking and user experience are central to our crafting of human-centric solutions."
    ],
    social: [
      { icon: "linkedin", url: "#" },
      { icon: "twitter", url: "#" }
    ]
  },
  {
    name: "Nick Curum",
    role: "Chief Operating Officer (COO)",
    image: nickCurum,
    bio: "A seasoned energy executive with over two decades of global experience, Nick is dedicated to advancing the energy sector through practical AI and intelligent workflows.",
    details: [
      "A seasoned energy executive with over two decades of global experience, Nick is dedicated to advancing business processes through practical AI and intelligent workflows.",
      "He is founder of The AI Energy Think Tank, advising industry leaders on modernising operations.",
      "Nick is a vocal advocate for industry professionals driving a more sustainable energy future."
    ],
    social: [
      { icon: "linkedin", url: "#" },
      { icon: "twitter", url: "#" }
    ]
  }
];
