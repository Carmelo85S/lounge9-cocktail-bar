import { motion } from 'framer-motion';
import heroBg from '../../assets/hero.webp';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4 py-16"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-2xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Lounge<span className="text-amber">9</span>
        </motion.h1>

        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Bar & Lounge
        </motion.h2>

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

        {/* Button Container */}
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
      </motion.div>
    </section>
  );
};

export default Hero;
