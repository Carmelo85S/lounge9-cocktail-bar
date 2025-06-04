import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <motion.div 
    className="container text-center mb-20"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">{title}</h2>
    {subtitle && <p className="text-xl font-sans">{subtitle}</p>}
  </motion.div>
);

export default SectionHeader;
