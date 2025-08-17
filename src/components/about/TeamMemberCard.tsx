import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, Globe } from 'lucide-react';
import { useState } from 'react';
import Avatar from 'boring-avatars';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    behance?: string;
  };
}

interface TeamMemberCardProps {
  member: TeamMember;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const TeamMemberCard = ({ 
  member, 
  isHovered,
  onHoverStart,
  onHoverEnd
}: TeamMemberCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      className="relative group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900 to-black shadow-2xl"
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      animate={{
        scale: isHovered ? 1.03 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ zIndex: isHovered ? 20 : 1 }}
    >
      {/* Glow effect - only shown on hover */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Avatar with boring-avatars fallback */}
      <div className="relative h-full w-full">
        {!imageError ? (
          <>
            <motion.img
              src={member.avatar}
              alt={member.name}
              className={`w-full h-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              initial={{ scale: 1 }}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <div className="animate-pulse bg-gray-800 w-full h-full" />
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-800">
            <Avatar
              size="80%"
              name={member.name}
              variant="beam"
              colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
            />
          </div>
        )}
        
        {/* Overlay gradient - only on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Name and role overlay - always visible and centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-end z-10 p-4 mb-4">

        <motion.div
          className="text-center"
          animate={{ 
            y: isHovered ? -10 : 0,
            opacity: isHovered ? 0 : 1 // Fade out on hover
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {member.name}
          </h3>
          <p className="mt-1 text-gray-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {member.role}
          </p>
        </motion.div>
      </div>

      {/* Content area - only visible on hover */}
      <motion.div 
        className="p-6 relative z-10"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          height: isHovered ? 'auto' : 0
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Name and role in content area - visible only on hover */}
        <motion.div
          className="text-center"
          animate={{ y: isHovered ? -10 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400">
            {member.name}
          </h3>
          <p className="mt-1 text-indigo-200/80">
            {member.role}
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p 
          className="mt-4 text-gray-300 text-center"
        >
          {member.bio}
        </motion.p>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center gap-4 mt-6"
          animate={{ y: isHovered ? -10 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {member.socials.linkedin && (
            <a href={member.socials.linkedin} className="p-2 rounded-full bg-indigo-900/50 hover:bg-indigo-700 transition-colors hover:-translate-y-1">
              <Linkedin className="text-indigo-300" size={20} />
            </a>
          )}
          {member.socials.github && (
            <a href={member.socials.github} className="p-2 rounded-full bg-indigo-900/50 hover:bg-indigo-700 transition-colors hover:-translate-y-1">
              <Github className="text-indigo-300" size={20} />
            </a>
          )}
          {member.socials.twitter && (
            <a href={member.socials.twitter} className="p-2 rounded-full bg-indigo-900/50 hover:bg-indigo-700 transition-colors hover:-translate-y-1">
              <Twitter className="text-indigo-300" size={20} />
            </a>
          )}
          {member.socials.behance && (
            <a href={member.socials.behance} className="p-2 rounded-full bg-indigo-900/50 hover:bg-indigo-700 transition-colors hover:-translate-y-1">
              <Globe className="text-indigo-300" size={20} />
            </a>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TeamMemberCard;