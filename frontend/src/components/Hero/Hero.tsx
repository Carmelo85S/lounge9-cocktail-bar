import { motion } from 'framer-motion';
import heroBg from '../../assets/hero.webp';
import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';
import HeroDescription from './HeroDescription';
import HeroButtons from './HeroButtons';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4 py-16"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-2xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <HeroTitle />
        <HeroSubtitle />
        <HeroDescription />
        <HeroButtons />
      </motion.div>
    </section>
  );
};

export default Hero;
