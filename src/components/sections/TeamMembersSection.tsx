import React, { useState, useEffect } from 'react';
import { Content } from '@prismicio/client';
import TeamMember from '../about/TeamCard';

interface TeamMembersSectionProps {
  slice: Content.TeamMembersSlice;
}

// Transform Prismic team member data to match our existing TeamMember interface
const transformPrismicTeamMember = (prismicMember: any) => {
  return {
    name: prismicMember.name || '',
    role: prismicMember.role || '',
    image: prismicMember.image?.url || '',
    bio: prismicMember.bio || '',
    details: prismicMember.details ? prismicMember.details.split('\n').filter((detail: string) => detail.trim()) : [],
    social: [
      ...(prismicMember.linkedin_url ? [{ icon: 'linkedin', url: prismicMember.linkedin_url }] : []),
      ...(prismicMember.twitter_url ? [{ icon: 'twitter', url: prismicMember.twitter_url }] : []),
      ...(prismicMember.github_url ? [{ icon: 'github', url: prismicMember.github_url }] : []),
    ]
  };
};

const TeamMembersSection: React.FC<TeamMembersSectionProps> = ({ slice }) => {
  const [active, setActive] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Transform Prismic team members data
  const teamMembers = slice.items.map(transformPrismicTeamMember);

  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className={`transition duration-300 ${
              active && active !== member.name && !isMobile ? "blur-sm opacity-70" : ""
            }`}
          >
            <TeamMember
              member={member}
              isActive={active === member.name}
              setActive={setActive}
              isMobile={isMobile}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembersSection;
