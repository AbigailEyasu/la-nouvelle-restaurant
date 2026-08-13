const Footer = ({ t, lang, setLang }) => {
  return (
    <footer className="bg-charcoal text-cream py-8 border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand & Motto */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-display font-bold text-gold tracking-wider mb-1">
              La Nouvelle Cafe & Restaurant
            </h2>
            <p className="text-cream/70 text-xs italic">
              {t.footer.motto}
            </p>
          </div>

          {/* Quick Info & Language */}
          <div className="flex items-center gap-6 text-xs text-cream/70">
            <a href="tel:+251929930200" className="hover:text-gold transition-colors">
              +251 92 993 0200
            </a>
            <span>•</span>
            <a href="https://www.instagram.com/la_nouvelle_addis" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              @la_nouvelle_addis
            </a>
            <span>•</span>
            <button 
              onClick={() => setLang(lang === 'am' ? 'en' : 'am')}
              className="font-bold tracking-wider border border-cream/30 px-3 py-1 rounded hover:border-gold hover:text-gold transition-colors text-cream"
            >
              {lang === 'am' ? 'EN' : 'አማ'}
            </button>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-6 pt-4 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center text-[11px] text-cream/40">
          <p>&copy; {new Date().getFullYear()} La Nouvelle Cafe & Restaurant. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 opacity-70">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
