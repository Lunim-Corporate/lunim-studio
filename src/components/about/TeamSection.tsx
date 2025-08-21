// File: Team.tsx
import { useState, useEffect } from "react";
import { team } from "../../utils/teamData";
import TeamMember from "./TeamCard";

export default function Team() {
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

  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, i) => (
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
}