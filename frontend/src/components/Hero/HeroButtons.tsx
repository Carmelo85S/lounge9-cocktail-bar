import { motion } from 'framer-motion';

const HeroButtons = () => (
  <motion.div
    className="flex flex-col sm:flex-row justify-center w-5/6 mx-auto mb-4 gap-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.9 }}
  >
    <button
      className="bg-amber text-night px-4 py-2 rounded-full font-semibold text-lg hover:bg-amber-dark transition"
      onClick={() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }}
      aria-label="Book a Table"
    >
      Book a Table
    </button>
    <button
      className="text-amber-light hover:text-night px-4 py-2 border border-amber rounded-full font-semibold text-lg hover:bg-amber-dark transition"
      onClick={() => {
        document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
      }}
      aria-label="View the Menu"
    >
      View Menu
    </button>
  </motion.div>
);

export default HeroButtons;
