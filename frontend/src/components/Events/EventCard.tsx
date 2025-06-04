import { motion } from "framer-motion";

interface EventCardProps {
  img: string;
  name: string;
  time: string;
  description: string;
  onClick: () => void;
}

const EventCard = ({ img, name, time, description, onClick }: EventCardProps) => (
  <motion.div
    className="bg-white rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <img src={img} alt={name} className="h-56 w-full object-cover" />
    <div className="p-6 space-y-4 flex flex-col h-full justify-between">
      <div>
        <h3 className="text-2xl font-serif font-bold text-amber-dark">{name}</h3>
        <p className="text-sm text-gray-500 font-semibold">{time}</p>
        <p className="text-sm text-night mt-1">{description}</p>
        <button
          onClick={onClick}
          className="mt-4 self-start px-5 py-2 bg-amber-dark text-white rounded-full text-sm font-semibold hover:bg-amber hover:shadow transition"
        >
          Book a Table
        </button>
      </div>
    </div>
  </motion.div>
);

export default EventCard;
