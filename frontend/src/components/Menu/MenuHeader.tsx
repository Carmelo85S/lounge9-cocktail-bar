import { motion } from "framer-motion";

const MenuHeader = () => (
  <motion.div
    className="flex flex-col justify-between items-center mb-8"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">
      Our Menu
    </h2>
    <p className="text-lg font-serif font-bold">
      Carefully crafted cocktails and delicious bites
    </p>
  </motion.div>
);

export default MenuHeader;
