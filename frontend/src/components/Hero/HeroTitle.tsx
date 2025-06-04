import { motion } from 'framer-motion';

const HeroTitle = () => (
  <motion.h1
    className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
  >
    Lounge<span className="text-amber">9</span>
  </motion.h1>
);

export default HeroTitle;
