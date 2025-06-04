import React from "react";
import { motion } from "framer-motion";
import { EventData } from "../../types/types";
import EventSectionHeader from "./EventSectionHeader";
import EventCard from "./EventCard";
import EventsCTA from "./EventsCTA";

const Events: React.FC = () => {
  const eventData: EventData = {
    Events: [
      {
        img: "https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg",
        name: "Afterwork Fridays",
        time: "17:00 - 21:00",
        description: "Start your weekend with curated cocktails and relaxing beats.",
        onClick: () => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        },
      },
      {
        img: "https://images.pexels.com/photos/1049690/pexels-photo-1049690.jpeg",
        name: "Live Jazz Nights",
        time: "Every Thursday",
        description: "Enjoy deep house and lounge music in a luxurious setting.",
        onClick: () => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        },
      },
      {
        img: "https://images.pexels.com/photos/11522840/pexels-photo-11522840.jpeg",
        name: "Sunset Aperitivo",
        time: "Sundays 16:00 - 20:00",
        description: "Unwind with spritzes and tapas during golden hour.",
        onClick: () => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        },
      },
    ],
  };

  return (
    <section id="event" className="container py-16">
      {Object.entries(eventData).map(([category, events]) => (
        <div key={category}>
          <EventSectionHeader />

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
              <EventCard key={index} {...event} />
            ))}
          </motion.div>
        </div>
      ))}

      <EventsCTA />
    </section>
  );
};

export default Events;
