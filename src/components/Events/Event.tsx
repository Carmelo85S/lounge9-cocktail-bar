import React from "react";
import { motion } from "framer-motion";
import { EventData } from "../../types/types";

const Events: React.FC = () => {
  const eventData: EventData = {
    Events: [
      {
        img: "https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg",
        name: "Afterwork Fridays",
        time: "17:00 - 21:00",
        description: "Start your weekend with curated cocktails and relaxing beats.",
        onClick: () => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        },
      },
      {
        img: "https://images.pexels.com/photos/1049690/pexels-photo-1049690.jpeg",
        name: "Live Jazz Nights",
        time: "Every Thursday",
        description: "Enjoy deep house and lounge music in a luxurious setting.",
        onClick: () => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        },
      },
      {
        img: "https://images.pexels.com/photos/11522840/pexels-photo-11522840.jpeg",
        name: "Sunset Aperitivo",
        time: "Sundays 16:00 - 20:00",
        description: "Unwind with spritzes and tapas during golden hour.",
        onClick: () => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        },
      },
    ],
  };

  return (
    <section id="event" className="container py-16">
      {Object.entries(eventData).map(([category, events]) => (
        <div key={category}>
          {/* Section Title */}
          <motion.div
            className="flex flex-col justify-between items-center text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
              Our Events
            </h2>
            <p className="text-lg font-serif font-bold">
              Join us for our regular weekly happenings and special occasions.
            </p>
          </motion.div>

          {/* Events Grid */}
          <motion.div
            className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            viewport={{ once: true }}
          >
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={event.img}
                  alt={event.name}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6 space-y-4 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-amber-dark">
                      {event.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-semibold">{event.time}</p>
                    <p className="text-sm text-night mt-1">{event.description}</p>
                    <button
                      onClick={event.onClick}
                      className="mt-4 self-start px-5 py-2 bg-amber-dark text-white rounded-full text-sm font-semibold hover:bg-amber hover:shadow transition"
                    >
                      Book a Table
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}

      {/* CTA Section */}
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
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-block px-6 py-3 bg-amber-dark text-white rounded-full text-sm sm:text-base font-semibold hover:bg-amber hover:shadow-lg transition"
        >
          Inquire for Private Events
        </button>
      </motion.div>
    </section>
  );
};

export default Events;
