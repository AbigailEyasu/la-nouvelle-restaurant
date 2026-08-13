const About = ({ t }) => {
  return (
    <section id="about" className="py-10 md:py-16 bg-cream text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Video Side - Showcasing the Inside */}
          <div className="relative">
            <div className="absolute inset-0 bg-gold/20 transform -translate-x-3 translate-y-3 rounded-2xl"></div>
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl border border-espresso/10 aspect-video lg:aspect-[4/3]">
              <video 
                src="/assets/interior.mp4" 
                className="w-full h-full object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
                controls
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 sm:p-5 text-cream pointer-events-none">
                <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-0.5">Interior Experience</p>
                <p className="text-xs sm:text-sm text-cream/90 font-light">Take a virtual tour of our beautiful indoor seating and cozy ambience.</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex flex-col space-y-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-espresso mb-4 leading-tight">
                {t.about.heading}
              </h2>
              <p className="text-base md:text-lg text-charcoal/80 leading-relaxed">
                {t.about.description}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-espresso/10">
              {t.about.features.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <h3 className="text-lg font-bold text-espresso mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-charcoal/70">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
