const Hero = ({ t }) => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-16 bg-cream text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left: Text & CTA */}
          <div className="flex flex-col items-start text-left">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-gold mb-3 md:mb-4">
              {t.hero.eyebrow}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-espresso mb-4 md:mb-6 leading-[1.15]">
              {t.hero.headline}
            </h1>

            <p className="text-base sm:text-lg text-charcoal/80 mb-6 md:mb-8 max-w-xl font-normal leading-relaxed">
              {t.hero.subline}
            </p>

            <div className="flex flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="btn-primary bg-gold hover:bg-gold/90 text-espresso border-none text-sm md:text-base px-6 py-3 rounded font-semibold shadow-md"
              >
                {t.hero.reserveBtn}
              </a>
              <a
                href="#menu"
                className="btn-secondary border-espresso/40 text-espresso hover:bg-espresso hover:text-cream text-sm md:text-base px-6 py-3 rounded font-medium"
              >
                {t.hero.menuBtn}
              </a>
            </div>
          </div>

          {/* Right: High Quality Crisp Showcase Image */}
          <div className="relative w-full">
            <div className="absolute inset-0 bg-gold/20 transform translate-x-3 translate-y-3 rounded-2xl"></div>
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl border border-espresso/10 aspect-[4/3]">
              <img
                src="/assets/hero.webp"
                alt="La Nouvelle Culinary Experience"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
