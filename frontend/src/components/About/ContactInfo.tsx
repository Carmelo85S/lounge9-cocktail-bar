import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';

const ContactInfo = () => (
  <motion.div 
    className="container mt-24 pt-16 border-t border-amber-light"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h3 className="text-3xl font-serif font-bold text-amber-dark mb-10 text-center">
      Opening Hours & Location
    </h3>
    <div className="flex flex-col md:flex-row justify-center items-start text-lg font-sans gap-8">
      <div className="flex items-start w-full gap-5">
        <Clock className="w-8 h-6 text-amber-dark mt-1" />
        <div className="flex flex-col w-full">
          <p className="font-semibold">Opening</p>
          <p>Mon - Sun</p>
          <p>16:00 - 1:00</p>
        </div>
      </div>
      <div className="flex items-start w-full gap-4">
        <MapPin className="w-6 h-6 text-amber-dark mt-1" />
        <div>
          <p className="font-semibold">Location</p>
          <p>Grand Plaza Hotel</p>
          <p>42 Park Avenue</p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ContactInfo;
