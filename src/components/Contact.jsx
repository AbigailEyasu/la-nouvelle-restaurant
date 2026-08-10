const Contact = ({ t }) => {
  return (
    <section id="contact" className="py-24 bg-espresso text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 drop-shadow-md">
          {t.contact.heading}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Location */}
          <a 
            href="https://maps.app.goo.gl/bKZQNMn8PPbeP1rt6?g_st=atm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10 group"
          >
            <svg className="w-10 h-10 mb-4 text-gold group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-cream/80 text-center">{t.contact.location}</p>
          </a>

          {/* Phone */}
          <a 
            href="tel:+251929930200" 
            className="flex flex-col items-center p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10 group"
          >
            <svg className="w-10 h-10 mb-4 text-gold group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-cream/80 text-center">{t.contact.phone}</p>
          </a>

          {/* Instagram */}
          <a 
            href="https://www.instagram.com/la_nouvelle_addis" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10 group"
          >
            <svg className="w-10 h-10 mb-4 text-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <h3 className="text-xl font-bold mb-2">Instagram</h3>
            <p className="text-cream/80 text-center">{t.contact.instagram}</p>
          </a>
        </div>

        <a href="tel:+251929930200" className="btn-primary bg-gold text-espresso border-none hover:bg-gold/90 text-lg shadow-lg">
          {t.hero.reserveBtn}
        </a>

      </div>
    </section>
  );
};

export default Contact;
