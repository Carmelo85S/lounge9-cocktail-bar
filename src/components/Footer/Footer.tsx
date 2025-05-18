const Footer = () => {
  return (
    <footer className="bg-night text-cream pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand / Logo / Descrizione */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-amber-dark mb-4">Velvet Hour</h3>
          <p className="text-sm font-sans text-gray-300 leading-relaxed">
            A refined space for cocktails, conversations, and timeless evenings. <br />
            Join us for unforgettable nights in the heart of the city.
          </p>
        </div>

        {/* Navigazione */}
        <div>
          <h4 className="text-lg font-serif font-semibold text-amber mb-4">Explore</h4>
          <ul className="space-y-2 text-sm font-sans text-gray-300">
            <li><a href="#about" className="hover:text-amber-light transition">About</a></li>
            <li><a href="#menu" className="hover:text-amber-light transition">Menu</a></li>
            <li><a href="#events" className="hover:text-amber-light transition">Events</a></li>
            <li><a href="#contact" className="hover:text-amber-light transition">Contact</a></li>
          </ul>
        </div>

        {/* Contatti / Social */}
        <div>
          <h4 className="text-lg font-serif font-semibold text-amber mb-4">Get in Touch</h4>
          <ul className="text-sm font-sans text-gray-300 space-y-2">
            <li>Email: <a href="mailto:reservations@velvethour.com" className="hover:text-amber-light transition">reservations@velvethour.com</a></li>
            <li>Phone: <span className="text-gray-400">(555) 123-4567</span></li>
            <li>42 Park Avenue, City Center</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-amber-light transition">Instagram</a>
            <a href="#" className="text-gray-300 hover:text-amber-light transition">Facebook</a>
            <a href="#" className="text-gray-300 hover:text-amber-light transition">Maps</a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-xs text-gray-500 font-sans">
        © {new Date().getFullYear()} Velvet Hour. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
