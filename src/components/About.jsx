const About = ({ t }) => {
  return (
    <section id="about" className="py-24 bg-cream text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-gold transform translate-x-4 translate-y-4 rounded-sm"></div>
            <img 
              src="/assets/about.webp" 
              alt="La Nouvelle Interior" 
              className="relative z-10 w-full h-auto object-cover rounded-sm shadow-xl"
              loading="lazy"
            />
          </div>

          {/* Text Side */}
          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-espresso mb-6 leading-tight">
                {t.about.heading}
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                {t.about.description}
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-espresso/10">
              {t.about.features.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <h3 className="text-xl font-bold text-espresso mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-charcoal/70">
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
