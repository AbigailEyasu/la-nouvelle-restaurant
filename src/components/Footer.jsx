const Footer = ({ t, lang, setLang }) => {
  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.menu, href: '#menu' },
    { name: t.nav.reviews, href: '#reviews' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="bg-charcoal text-cream py-16 border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-display font-bold text-gold mb-4 tracking-wider">
              La Nouvelle
            </h2>
            <p className="text-cream/70 text-sm">
              {t.hero.subline}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-cream/70 hover:text-gold transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-cream/70 text-sm">
              <li>{t.contact.location}</li>
              <li>
                <a href="tel:+251929930200" className="hover:text-gold transition-colors">
                  {t.contact.phone}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/la_nouvelle_addis" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  {t.contact.instagram}
                </a>
              </li>
            </ul>
          </div>

          {/* Language / Actions */}
          <div>
            <h3 className="text-lg font-bold mb-4">Language</h3>
            <button 
              onClick={() => setLang(lang === 'am' ? 'en' : 'am')}
              className="text-sm font-bold tracking-widest border border-cream/30 px-4 py-2 rounded hover:border-gold hover:text-gold transition-colors mb-4 inline-block"
            >
              አማ | EN
            </button>
          </div>

        </div>

        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center text-sm text-cream/50">
          <p>&copy; {new Date().getFullYear()} La Nouvelle Cafe & Restaurant. All rights reserved.</p>
          <p className="mt-4 md:mt-0 italic opacity-70">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
