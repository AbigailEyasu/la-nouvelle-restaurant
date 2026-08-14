const Reviews = ({ t }) => {
  return (
    <section id="reviews" className="py-12 md:py-20 bg-burgundy text-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Google Reviews Badge */}
        <div className="mb-8 p-6 sm:p-8 bg-espresso/40 shadow-xl rounded-2xl border border-gold/20 inline-block backdrop-blur-md">
          <div className="flex justify-center items-center space-x-1.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-7 h-7 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
          <div className="text-3xl sm:text-4xl font-display font-bold text-gold mb-1">
            {t.reviews.rating}
          </div>
          <div className="text-cream/70 text-sm font-medium">
            {t.reviews.count}
          </div>
        </div>

        {/* Real Review CTA */}
        <p className="text-base sm:text-lg text-cream/80 mb-6 max-w-2xl">
          {t.reviews.description}
        </p>

        <a 
          href="https://maps.app.goo.gl/bKZQNMn8PPbeP1rt6?g_st=atm" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary bg-gold text-espresso border-none hover:bg-gold/90 flex items-center space-x-2 text-sm sm:text-base px-6 py-3 rounded font-semibold shadow-lg"
        >
          <span>{t.reviews.btn}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>

      </div>
    </section>
  );
};

export default Reviews;
