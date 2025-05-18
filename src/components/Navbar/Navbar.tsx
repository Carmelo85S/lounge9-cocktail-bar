import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Menu', id: 'menu' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-serif font-bold text-night cursor-pointer" onClick={() => scrollTo('home')}>
          Lounge<span className="text-amber text-4xl">9</span>
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex space-x-6 items-center font-sans text-night text-base">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button onClick={() => scrollTo(link.id)} className="hover:text-amber transition">
                {link.name}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollTo('contact')}
              className="bg-night text-cream px-4 py-2 rounded-lg hover:bg-amber transition"
            >
              Book a Table
            </button>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-cream/90 backdrop-blur-sm border-t border-night/10">
          <ul className="space-y-4 font-sans text-night text-base">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="block w-full text-left hover:text-amber transition"
                >
                  {link.name}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => scrollTo('booking')}
                className="w-full text-left bg-night text-cream px-4 py-2 rounded-lg hover:bg-amber transition"
              >
                Book a Table
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
