import { motion } from 'framer-motion';

const HeroSubtitle = () => (
  <motion.h2
    className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
  >
    Bar & Lounge
  </motion.h2>
);

export default HeroSubtitle;
