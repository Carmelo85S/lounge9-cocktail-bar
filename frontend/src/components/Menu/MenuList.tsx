import { motion, AnimatePresence } from "framer-motion";
import { MenuItem } from "../../types/types";

type Props = {
  items: MenuItem[];
  keyId: string;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const MenuList = ({ items, keyId }: Props) => (
  <AnimatePresence mode="wait">
    <motion.section
      key={keyId}
      className="grid gap-6 grid-cols-1 sm:grid-cols-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300"
          variants={itemVariants}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-serif font-bold text-amber-dark">{item.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            </div>
            <span className="text-amber-dark font-semibold text-sm whitespace-nowrap mt-1">
              {item.price}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.section>
  </AnimatePresence>
);

export default MenuList;
