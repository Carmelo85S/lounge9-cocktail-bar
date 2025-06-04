import { motion } from "framer-motion";

const MenuQuote = () => (
  <motion.section
    className="text-center mt-16 max-w-3xl mx-auto"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <p className="italic text-night text-lg sm:text-xl font-serif font-medium px-6">
      “Whether you're looking for an expertly made classic or something more adventurous, our skilled mixologists are ready to create the perfect drink for you.”
    </p>
  </motion.section>
);

export default MenuQuote;
