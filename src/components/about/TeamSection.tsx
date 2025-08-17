import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from './TeamMemberCard';
import { teamMembers } from '../../utils/aboutData';
import FloatingBackground from './FloatingBackground';

const TeamSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [columnCount, setColumnCount] = useState(3);
  
  // Track window resize to update column count
  useEffect(() => {
    const updateColumnCount = () => {
      if (window.innerWidth < 768) setColumnCount(1);
      else if (window.innerWidth < 1024) setColumnCount(2);
      else setColumnCount(3);
    };
    
    updateColumnCount();
    window.addEventListener('resize', updateColumnCount);
    return () => window.removeEventListener('resize', updateColumnCount);
  }, []);

  // Calculate which card should move down based on hover
  const getCardToMoveDown = (hoveredId: number) => {
    const hoveredIndex = teamMembers.findIndex(m => m.id === hoveredId);
    const row = Math.floor(hoveredIndex / columnCount);
    const column = hoveredIndex % columnCount;
    const cardBelowIndex = hoveredIndex + columnCount;
    
    if (cardBelowIndex < teamMembers.length) {
      const belowCard = teamMembers[cardBelowIndex];
      // Only move if it's in the same column
      return (cardBelowIndex % columnCount) === column ? belowCard.id : null;
    }
    return null;
  };

  const cardToMoveDown = hoveredId ? getCardToMoveDown(hoveredId) : null;

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <FloatingBackground/>
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-white ">
            Our Dream Team
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Visionaries, creators, and problem solvers redefining what's possible
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
          {teamMembers.map((member) => {
            const shouldMoveDown = cardToMoveDown === member.id;
            
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" } 
                }}
                whileHover={{ zIndex: 10 }}
                className="relative"
              >
                <motion.div
                  animate={{
                    y: shouldMoveDown ? 100 : 0,
                    transition: { 
                      duration: 0.4, 
                      ease: "easeInOut",
                      delay: shouldMoveDown ? 0.1 : 0 
                    }
                  }}
                >
                  <TeamMemberCard 
                    member={{
                      id: member.id,
                      name: member.name,
                      role: member.role,
                      bio: member.bio,
                      avatar: member.image,
                      socials: member.social
                    }}
                    isHovered={hoveredId === member.id}
                    onHoverStart={() => setHoveredId(member.id)}
                    onHoverEnd={() => setHoveredId(null)}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;