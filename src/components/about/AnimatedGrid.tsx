import { motion } from 'framer-motion';

const AnimatedGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedGrid;