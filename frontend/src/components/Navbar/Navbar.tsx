import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NavLink {
  name: string;
  id: string;
}

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  const scrollTo = (id: string): void => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close mobile menu on click
    }
  };

  const navLinks: NavLink[] = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Menu', id: 'menu' },
    { name: 'Events', id: 'event' },
    { name: 'Gallery', id: 'gallery' }
  ];

  const handleAuthClick = (): void => {
    if (isAuthenticated) {
      localStorage.removeItem('isAuthenticated');
      navigate('/');
    } else {
      navigate('/login');
    }
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl font-serif font-bold text-night cursor-pointer"
          onClick={() => scrollTo('home')}
        >
          Lounge<span className="text-amber text-4xl">9</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 items-center font-sans text-night text-base">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button onClick={() => scrollTo(link.id)} className="hover:text-amber transition">
                {link.name}
              </button>
            </li>
          ))}
          <li className="flex space-x-2">
            <button
              onClick={() => scrollTo('contact')}
              className="bg-night text-cream px-4 py-2 rounded-lg hover:bg-amber transition"
            >
              Book a Table
            </button>
            <button
              onClick={handleAuthClick}
              className={`${
                isAuthenticated ? 'bg-red-600' : 'bg-night'
              } text-cream px-4 py-2 rounded-lg hover:bg-amber transition`}
            >
              {isAuthenticated ? 'Logout' : 'Login'}
            </button>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-cream/90 backdrop-blur-sm border-t border-night/10 animate-slideDown">
          <ul className="space-y-4 font-sans text-night text-base pt-4">
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
            <hr className="border-t border-night/10" />
            <li>
              <button
                onClick={() => scrollTo('contact')}
                className="w-full text-left bg-night text-cream px-4 py-2 rounded-lg hover:bg-amber transition"
              >
                Book a Table
              </button>
            </li>
            <li>
              <button
                onClick={handleAuthClick}
                className={`w-full text-left ${
                  isAuthenticated ? 'bg-red-600' : 'bg-night'
                } text-cream px-4 py-2 rounded-lg hover:bg-amber transition`}
              >
                {isAuthenticated ? 'Logout' : 'Login'}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
