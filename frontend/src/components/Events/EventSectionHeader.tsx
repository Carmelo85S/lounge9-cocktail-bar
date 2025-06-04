import { motion } from "framer-motion";

const EventSectionHeader = () => (
  <motion.div
    className="flex flex-col justify-between items-center text-center mb-12"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Our Events</h2>
    <p className="text-lg font-serif font-bold">
      Join us for our regular weekly happenings and special occasions.
    </p>
  </motion.div>
);

export default EventSectionHeader;
