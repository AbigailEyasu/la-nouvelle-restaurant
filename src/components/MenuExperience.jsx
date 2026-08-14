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
    <section id="menu" className="py-12 md:py-20 bg-burgundy text-cream">
      <div className="max-w-2xl lg:max-w-3xl mx-auto px-5 sm:px-6">
        {/* ── Section header ── */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gold mb-2">
            {t.menu.heading}
          </h2>
          <p className="text-cream/70 text-sm md:text-base">
            {t.menu.subheading}
          </p>
        </div>

        {/* ── Category tabs ── */}
        <nav className="flex justify-start sm:justify-center gap-1 mb-6 md:mb-8 border-b border-gold/20 overflow-x-auto scrollbar-hide -mx-5 px-5 sm:mx-0 sm:px-0">
          {t.menu.categories.map((cat, idx) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(idx)}
              className={`px-3 sm:px-5 py-2.5 text-[13px] sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 border-b-2 -mb-px ${
                activeCategory === idx
                  ? 'border-gold text-gold font-semibold'
                  : 'border-transparent text-cream/50 hover:text-cream/80'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </nav>

        {/* ── Category-specific note ── */}
        {getCategoryNote() && (
          <p className="text-center text-xs sm:text-sm text-cream/60 italic mb-5 -mt-2">
            {getCategoryNote()}
          </p>
        )}

        {/* ── Menu items ── */}
        <ul className="divide-y divide-gold/15">
          {currentItems.map((item, idx) => (
            <li key={idx} className="flex items-baseline justify-between py-3.5 md:py-4 gap-4">
              {/* Name + description */}
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] md:text-base font-semibold text-cream leading-snug">
                  {item.name}
                </h3>
                <p className="text-xs md:text-sm text-cream/60 mt-0.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              {/* Price */}
              <span className="text-[15px] md:text-base font-display font-semibold text-gold tabular-nums flex-shrink-0">
                {item.price.toLocaleString()} ETB
              </span>
            </li>
          ))}
        </ul>

        {/* ── Price note ── */}
        <p className="text-center text-[11px] md:text-xs text-cream/40 mt-6 tracking-wide">
          {t.menu.note}
        </p>
      </div>
    </section>
  );
};

export default MenuExperience;
