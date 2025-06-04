import { motion } from "framer-motion";

const ContactInfo = () => (
  <motion.div
    className="flex flex-col gap-8"
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
  >
    {/* Contact Info */}
    <div className="bg-white p-8 rounded-2xl shadow-md space-y-6">
      <h3 className="text-2xl font-serif text-amber-dark font-semibold">
        Find Us
      </h3>

      <div className="space-y-4 text-sm text-night/80">
        <div>
          <p className="font-semibold text-night">Address</p>
          <p>Ground Floor, Grand Plaza Hotel</p>
          <p>42 Park Avenue, City Center</p>
        </div>

        <div>
          <p className="font-semibold text-night">Phone</p>
          <p>Bar: (555) 123-4567</p>
          <p>Hotel: (555) 765-4321</p>
        </div>

        <div>
          <p className="font-semibold text-night">Email</p>
          <p>reservations@velvethour.com</p>
          <p>events@velvethour.com</p>
        </div>
      </div>
    </div>

    {/* Responsive Map */}
    <div className="rounded-2xl overflow-hidden shadow-md aspect-[16/9]">
      <iframe
        title="Map to Velvet Hour"
        src="https://maps.google.com/maps?q=Eiffel%20Tower&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        className="border-0"
        loading="lazy"
        allowFullScreen
      />
    </div>
  </motion.div>
);

export default ContactInfo;
