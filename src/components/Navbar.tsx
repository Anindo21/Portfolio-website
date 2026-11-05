import { useState, useEffect } from 'react';
import { Sun, Moon, Languages, Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Language, Theme } from '../types';
import { portfolioMetadata } from '../data';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
}

export default function Navbar({ language, setLanguage, theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Intersection observer for section tracking
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -40% 0px',
      threshold: 0.15,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'certificates', 'education', 'contact'];
    
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const navLinks = [
    { id: 'about', label: { en: 'About', de: 'Über mich' } },
    { id: 'skills', label: { en: 'Skills', de: 'Fähigkeiten' } },
    { id: 'experience', label: { en: 'Experience', de: 'Erfahrung' } },
    { id: 'projects', label: { en: 'Projects', de: 'Projekte' } },
    { id: 'certificates', label: { en: 'Certificates', de: 'Zertifikate' } },
    { id: 'education', label: { en: 'Education', de: 'Ausbildung' } },
    { id: 'contact', label: { en: 'Contact', de: 'Kontakt' } },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-sky-500 to-indigo-500 origin-left z-[100]"
        style={{ scaleX }}
      />
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-black/90 backdrop-blur-md border-b border-slate-200 dark:border-white/5 shadow-lg'
            : 'bg-transparent'
        }`}
      >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 font-sans text-lg font-black tracking-tighter uppercase text-slate-900 dark:text-white hover:text-sky-500 dark:hover:text-sky-400 transition-colors cursor-pointer"
        >
          <img
            src={portfolioMetadata.avatar}
            alt={portfolioMetadata.name}
            referrerPolicy="no-referrer"
            className="w-7 h-7 rounded-full object-cover border border-slate-200 dark:border-white/20 shadow-sm"
          />
          <span>{portfolioMetadata.name.toUpperCase()}</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <div className="flex space-x-3 xl:space-x-6 text-[10px] uppercase tracking-[0.15em] font-bold text-slate-500 dark:text-slate-400">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className={`relative py-1.5 transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-sky-600 dark:text-sky-400 font-extrabold'
                      : 'hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span>{link.label[language]}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-sky-500 dark:bg-sky-400 rounded-full animate-fadeIn" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="h-4 w-px bg-slate-200/10" />

          {/* Controls */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="px-3 py-1.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded flex items-center gap-2 transition duration-200 cursor-pointer"
              title="Toggle theme"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-bold tracking-wider text-[10px]">LIGHT</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-sky-500" />
                  <span className="font-bold tracking-wider text-[10px]">DARK</span>
                </>
              )}
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
              className="px-3 py-1.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded flex items-center gap-2 transition duration-200 cursor-pointer"
              title={language === 'en' ? 'Auf Deutsch umstellen' : 'Switch to English'}
            >
              <Languages className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-bold tracking-wider text-[10px]">
                {language === 'en' ? 'DE 🇩🇪' : 'EN 🇬🇧'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Theme Toggle Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 rounded"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-sky-500" />}
          </button>

          {/* Language Toggle Mobile */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
            className="p-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 rounded text-xs font-bold font-mono"
          >
            {language === 'en' ? 'DE' : 'EN'}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 rounded"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-white/5 py-4 px-6 md:hidden flex flex-col gap-3 shadow-xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`w-full text-left py-2 text-sm font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'text-sky-600 dark:text-sky-400 border-l-2 border-sky-500 pl-2'
                    : 'text-slate-700 dark:text-slate-300 hover:text-sky-500'
                }`}
              >
                {link.label[language]}
              </button>
            );
          })}
        </div>
      )}
    </nav>
   </>
  );
}
