import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface InfoBlockProps {
  title: string;
  children: ReactNode;
}

const InfoBlock = ({ title, children }: InfoBlockProps) => (
  <motion.div 
    className="space-y-8 font-sans text-base leading-relaxed"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h3 className="text-2xl font-serif font-semibold text-amber-dark">{title}</h3>
    {children}
  </motion.div>
);

export default InfoBlock;
