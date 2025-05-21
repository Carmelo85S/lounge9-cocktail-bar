import { Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import image1 from '../../assets/cocktails.webp';
import image2 from '../../assets/drinks-on-table.webp';
import image3 from '../../assets/drinks-top.webp';
import image4 from '../../assets/pouring.webp';

const About = () => {
  return (
    <section id="about" className="bg-cream text-night py-24">
      {/* Hero */}
      <motion.div 
        className="container text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">
          Welcome to Lounge<span className="text-amber">9</span>
        </h2>
        <p className="text-xl font-sans">
          Where every moment is crafted to perfection
        </p>
      </motion.div>

      {/* Main Content: Text Left, Images Right */}
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left column - Text */}
        <motion.div 
          className="lg:col-span-5 flex flex-col justify-center space-y-8 font-sans text-base leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-serif font-semibold text-amber-dark">About Us</h3>
          <p>
            Nestled within the elegant Grand Plaza Hotel, Lounge<span className="text-amber">9</span> Hour offers a sophisticated 
            yet relaxed atmosphere for both hotel guests and locals alike. Our bar combines 
            classic charm with contemporary style, creating the perfect setting for any occasion.
          </p>
          <p>
            Whether you're unwinding after a day of meetings with our signature cocktails, enjoying artisanal 
            pizzas with friends, or experiencing one of our vibrant DJ nights, 
            Lounge<span className="text-amber">9</span> Hour promises an unforgettable experience.
          </p>

          {/* Opening Hours & Location */}
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
              {/* Hours */}
              <div className="flex items-start w-full gap-5">
                <Clock className="w-8 h-6 text-amber-dark mt-1" />
                <div className="flex flex-col w-full">
                  <p className="font-semibold">Opening</p>
                  <p>Mon - Sun</p>
                  <p>16:00 - 1:00</p>
                </div>
              </div>

              {/* Location */}
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
        </motion.div>

        {/* Right column - Images */}
        <motion.div 
          className="lg:col-span-7 grid grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          viewport={{ once: true }}
        >
          {[image2, image3, image1, image4].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`drink-img-${i}`}
              className="w-full rounded-xl shadow-md object-cover h-[300px]"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: i * 0.9 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
