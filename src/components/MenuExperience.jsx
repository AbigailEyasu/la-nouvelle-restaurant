import { useState } from 'react';

const MenuExperience = ({ t }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const currentCat = t.menu.categories[activeCategory];
  const currentItems = t.menu.items[currentCat.key];

  const getCategoryNote = () => {
    if (currentCat.key === 'pasta') return t.menu.pastaNote;
    if (currentCat.key === 'wraps') return t.menu.wrapsNote;
    return null;
  };

  return (
    <section id="menu" className="py-16 md:py-24 bg-cream text-charcoal">
      <div className="max-w-2xl lg:max-w-3xl mx-auto px-5 sm:px-6">
        {/* ── Section header ── */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-espresso mb-2 md:mb-3">
            {t.menu.heading}
          </h2>
          <p className="text-charcoal/50 text-sm md:text-base">
            {t.menu.subheading}
          </p>
        </div>

        {/* ── Category tabs ── */}
        <nav className="flex justify-start sm:justify-center gap-1 mb-8 md:mb-10 border-b border-espresso/10 overflow-x-auto scrollbar-hide -mx-5 px-5 sm:mx-0 sm:px-0">
          {t.menu.categories.map((cat, idx) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(idx)}
              className={`px-3 sm:px-5 py-2.5 text-[13px] sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 border-b-2 -mb-px ${
                activeCategory === idx
                  ? 'border-gold text-espresso'
                  : 'border-transparent text-charcoal/40 hover:text-charcoal/70'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </nav>

        {/* ── Category-specific note ── */}
        {getCategoryNote() && (
          <p className="text-center text-xs sm:text-sm text-charcoal/40 italic mb-6 -mt-2">
            {getCategoryNote()}
          </p>
        )}

        {/* ── Menu items ── */}
        <ul className="divide-y divide-espresso/8">
          {currentItems.map((item, idx) => (
            <li key={idx} className="flex items-baseline justify-between py-4 md:py-5 gap-4">
              {/* Name + description */}
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] md:text-base font-semibold text-espresso leading-snug">
                  {item.name}
                </h3>
                <p className="text-xs md:text-sm text-charcoal/45 mt-0.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              {/* Price */}
              <span className="text-[15px] md:text-base font-display font-semibold text-gold tabular-nums flex-shrink-0">
                {item.price.toLocaleString()}
              </span>
            </li>
          ))}
        </ul>

        {/* ── Price note ── */}
        <p className="text-center text-[11px] md:text-xs text-charcoal/35 mt-8 tracking-wide">
          {t.menu.note}
        </p>

        {/* ── CTA ── */}
        <div className="text-center mt-6 md:mt-8">
          <a href="#contact" className="btn-secondary text-sm">
            {t.menu.viewFullMenu}
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuExperience;
