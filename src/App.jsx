import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuExperience from './components/MenuExperience';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { content } from './data/content';

function App() {
  const [lang, setLang] = useState('am'); // Default to Amharic

  useEffect(() => {
    document.documentElement.setAttribute('data-lang', lang);
  }, [lang]);

  const t = content[lang];

  return (
    <div className="min-h-screen bg-cream text-charcoal flex flex-col font-sans transition-colors duration-300">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main className="flex-grow">
        <Hero t={t} />
        <About t={t} />
        <MenuExperience t={t} />
        <Reviews t={t} />
        <Gallery t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} lang={lang} setLang={setLang} />
    </div>
  );
}

export default App;
