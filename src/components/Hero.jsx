const Hero = ({ t }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/assets/interior.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-black/55 to-espresso/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center">
        {/* Eyebrow — brand name */}
        <span className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-gold mb-5 md:mb-6">
          {t.hero.eyebrow}
        </span>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-cream mb-4 md:mb-5 drop-shadow-lg leading-[1.15]">
          {t.hero.headline}
        </h1>

        {/* Supporting text */}
        <p className="text-[15px] sm:text-base md:text-lg lg:text-xl text-cream/90 mb-8 md:mb-10 max-w-xl font-light leading-relaxed">
          {t.hero.subline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href="#contact"
            className="btn-primary bg-gold hover:bg-gold/90 text-espresso border-none text-[15px] md:text-base px-8 py-3.5 rounded font-semibold shadow-lg"
          >
            {t.hero.reserveBtn}
          </a>
          <a
            href="#menu"
            className="btn-secondary border-cream/50 text-cream hover:bg-cream hover:text-espresso text-[15px] md:text-base px-8 py-3.5 rounded font-medium"
          >
            {t.hero.menuBtn}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
