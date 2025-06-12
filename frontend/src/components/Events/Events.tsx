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
        name: "Afterwork",
        time: "Every day 17:00 - 20:00",
        description: "Start your weekend with curated cocktails and relaxing beats.",
        onClick: () => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        },
      },
      {
        img: "https://images.pexels.com/photos/1049690/pexels-photo-1049690.jpeg",
        name: "Live Jazz Nights",
        time: "Every day 20:00 - 23:00",
        description: "Enjoy deep house and lounge music in a luxurious setting.",
        onClick: () => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        },
      },
      {
        img: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Dinner",
        time: "Every day 19:00 - 22:00",
        description: "Savor a hearty meal of classic dishes served warm and fresh for the perfect end to your day.",
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
