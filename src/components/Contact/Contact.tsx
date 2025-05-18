const Contact = () => {
  return (
    <section id="contact" className="bg-amber-light/10 py-16">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">
            Contact & Reservations
          </h2>
          <p className="text-base text-night/70 font-sans">
            We recommend reservations for groups of 6 or more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* FORM */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-serif text-amber-dark font-semibold mb-6">
              Make a Reservation
            </h3>
            <form className="space-y-6">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-night font-medium mb-1">Name</label>
                  <input
                    id="name"
                    placeholder="Your name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-amber-dark"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-night font-medium mb-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-amber-dark"
                  />
                </div>
              </div>

              {/* Date + Time */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm text-night font-medium mb-1">Date</label>
                  <input
                    id="date"
                    type="date"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-amber-dark"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm text-night font-medium mb-1">Time</label>
                  <input
                    id="time"
                    type="time"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-amber-dark"
                  />
                </div>
              </div>

              {/* Guests */}
              <div>
                <label htmlFor="guests" className="block text-sm text-night font-medium mb-1">Number of Guests</label>
                <input
                  id="guests"
                  type="number"
                  placeholder="e.g. 4"
                  min="1"
                  max="20"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-amber-dark"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm text-night font-medium mb-1">Special Requests</label>
                <textarea
                  id="message"
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
          </div>

          {/* Info + Map */}
          <div className="flex flex-col gap-8">
            {/* Contact Info */}
            <div className="bg-white p-8 rounded-2xl shadow-md space-y-6">
              <h3 className="text-2xl font-serif text-amber-dark font-semibold">Find Us</h3>

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

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-md h-64">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
