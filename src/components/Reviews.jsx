const Reviews = ({ t }) => {
  return (
    <section id="reviews" className="py-24 bg-cream text-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Google Reviews Badge */}
        <div className="mb-10 p-8 bg-white shadow-xl rounded-lg border border-espresso/10 inline-block">
          <div className="flex justify-center items-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-8 h-8 ${i < 4 ? 'text-yellow-400' : 'text-yellow-400'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                {/* Simplified star using fill for 4.1 rating representation */}
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
          <div className="text-4xl font-display font-bold text-espresso mb-2">
            {t.reviews.rating}
          </div>
          <div className="text-charcoal/70 font-medium">
            {t.reviews.count}
          </div>
        </div>

        {/* Real Review CTA */}
        <p className="text-lg text-charcoal/80 mb-8 max-w-2xl">
          We pride ourselves on providing an exceptional dining experience. See what our guests have to say about La Nouvelle Cafe & Restaurant.
        </p>

        <a 
          href="https://maps.app.goo.gl/bKZQNMn8PPbeP1rt6?g_st=atm" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary flex items-center space-x-2"
        >
          <span>{t.reviews.btn}</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>

      </div>
    </section>
  );
};

export default Reviews;
