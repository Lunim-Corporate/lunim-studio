// File: TeamMember.tsx
import { TeamMember as Member } from "../../utils/teamData";
import BioCard from "./BioCard";
import { useState } from "react";
import Avatar from "boring-avatars";

interface Props {
  member: Member;
  isActive: boolean;
  setActive: (name: string | null) => void;
}

export default function TeamMember({ member, isActive, setActive }: Props) {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div
      className={`relative rounded-xl shadow-xl overflow-hidden transition-all duration-500 
        ${isActive ? "z-10 scale-[1.02]" : "hover:scale-[1.01]"}
        ${!isActive ? "hover:z-5" : ""}`}
      onMouseEnter={() => setActive(member.name)}
      onMouseLeave={() => setActive(null)}
    >
      {/* Background Image */}
      <div className="h-80 sm:h-96 relative">
        {imageError ? (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <Avatar
              size={300}
              name={member.name}
              variant="beam"
              colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
            />
          </div>
        ) : (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        )}

        {/* Overlay with Name (fades out when active) */}
        <div
          className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 
          transition-all duration-500 ease-in-out
          ${isActive ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
        >
          <h3 className="text-lg font-semibold text-white">{member.name}</h3>
        </div>
      </div>

      {/* Expandable Bio Section */}
      <BioCard member={member} expanded={isActive} />
    </div>
  );
}