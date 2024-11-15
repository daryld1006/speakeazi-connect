import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-primary">
            SpeakEazi
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="nav-link">Services</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4 p-6">
              <a href="#services" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a href="#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;