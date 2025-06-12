import { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
    message: "",
    type: "All"
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: id === "guests" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Reservation submitted successfully!");
        setFormData({
          name: "",
          email: "",
          date: "",
          time: "",
          guests: 1,
          message: "",
          type:""
        });
      } else {
        alert("Failed to submit reservation. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting reservation:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-amber-light/10 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">
            Contact & Reservations
          </h2>
          <p className="text-base text-night/70 font-sans">
            We recommend reservations for groups of 6 or more.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
