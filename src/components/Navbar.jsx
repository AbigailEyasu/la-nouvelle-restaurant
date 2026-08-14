import { useState, useEffect } from 'react';

const Navbar = ({ lang, setLang, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.menu, href: '#menu' },
    { name: t.nav.reviews, href: '#reviews' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLang(lang === 'am' ? 'en' : 'am');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-burgundy/95 backdrop-blur-md shadow-lg py-4 border-b border-gold/15' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#home" className="text-2xl font-display font-bold text-cream tracking-wider drop-shadow-md">
          La Nouvelle
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-cream/90 hover:text-gold transition-colors drop-shadow">
              {link.name}
            </a>
          ))}
          <button onClick={toggleLanguage} className="text-sm font-bold tracking-widest text-gold hover:text-cream transition-colors">
            {lang === 'am' ? 'EN' : 'አማ'}
          </button>
          <a href="#contact" className="btn-primary bg-gold text-espresso border-none hover:bg-gold/90 text-sm font-semibold px-5 py-2.5 rounded shadow">
            {t.hero.reserveBtn}
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleLanguage} className="text-sm font-bold tracking-widest text-gold hover:text-cream">
            {lang === 'am' ? 'EN' : 'አማ'}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none text-cream" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-burgundy/98 border-b border-gold/20 shadow-2xl absolute top-full left-0 w-full flex flex-col py-5 px-6 space-y-4 text-cream">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-cream text-lg font-medium hover:text-gold transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary bg-gold text-espresso text-center mt-4 font-semibold py-3 rounded">
            {t.hero.reserveBtn}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
