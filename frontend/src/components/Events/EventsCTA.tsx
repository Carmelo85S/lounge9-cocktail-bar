import { motion } from "framer-motion";

const EventsCTA = () => (
  <motion.div
    className="bg-cream py-16 px-4 sm:px-8 lg:px-24 text-center mt-24"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-dark mb-6">
      Looking for a Venue?
    </h2>
    <p className="text-sm font-sans text-night max-w-2xl mx-auto mb-8">
      Lounge9 can be reserved for private events, corporate gatherings, and special celebrations.
      Contact our events team to discuss your requirements.
    </p>
    <button
      onClick={() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }}
      className="inline-block px-6 py-3 bg-amber-dark text-white rounded-full text-sm sm:text-base font-semibold hover:bg-amber hover:shadow-lg transition"
    >
      Inquire for Private Events
    </button>
  </motion.div>
);

export default EventsCTA;
