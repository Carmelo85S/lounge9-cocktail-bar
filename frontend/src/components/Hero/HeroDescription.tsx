import { motion } from 'framer-motion';

const HeroDescription = () => (
  <motion.div
    className="w-5/6 mx-auto mb-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.7 }}
  >
    <p className="text-xs sm:text-sm md:text-lg mb-8">
      Experience the perfect blend of casual elegance, exquisite cocktails, and delicious cuisine in the heart of the city.
    </p>
  </motion.div>
);

export default HeroDescription;
