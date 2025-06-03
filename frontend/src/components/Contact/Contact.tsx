import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: id === "guests" ? Number(value) : value,
    }));
  };

  const handleSubmit =  async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/booking", {
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if(response.ok) {
        alert("Reservation submitted successfully!");
        setFormData({
          name:"",
          email:"",
          date: "",
          time:"",
          guests: 1,
          message:"",
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
          {/* FORM */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-md"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif text-amber-dark font-semibold mb-6">
              Make a Reservation
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-night font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    aria-label="Name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-amber-dark"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-night font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    aria-label="Email"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-amber-dark"
                  />
                </div>
              </div>

              {/* Date + Time */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm text-night font-medium mb-1"
                  >
                    Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    aria-label="Date"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-amber-dark"
                  />
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm text-night font-medium mb-1"
                  >
                    Time
                  </label>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    aria-label="Time"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-amber-dark"
                  />
                </div>
              </div>

              {/* Guests */}
              <div>
                <label
                  htmlFor="guests"
                  className="block text-sm text-night font-medium mb-1"
                >
                  Number of Guests
                </label>
                <input
                  id="guests"
                  name="guests"
                  type="number"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder="e.g. 4"
                  min={1}
                  max={20}
                  required
                  aria-label="Number of guests"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-amber-dark"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-night font-medium mb-1"
                >
                  Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any special requests or dietary requirements?"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm h-28 resize-none focus:outline-none focus:ring-amber-dark"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-amber text-white font-semibold py-3 rounded-md hover:bg-amber-dark transition"
              >
                Request Reservation
              </button>
            </form>
          </motion.div>

          {/* Info + Map */}
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
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
