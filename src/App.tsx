import { useState, useEffect } from 'react';
import { Language, Theme } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language | null;
      if (savedLanguage) return savedLanguage;
      
      const browserLang = navigator.language || '';
      if (browserLang.toLowerCase().startsWith('de')) {
        return 'de';
      }
    }
    return 'en';
  });

  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      if (savedTheme) return savedTheme;
      
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'dark';
  });

  // Sync preference changes and initial state to localStorage + update SEO title/meta
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    
    // Dynamic titles and descriptions tailored to current language
    if (language === 'de') {
      document.title = "Rezaul Hoque | KI-, Automatisierungs- & Produktstrategie-Portfolio";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Portfolio von Rezaul Hoque: KI- & Automatisierungs-Ingenieur, Produktmanager und Cloud-Spezialist in Düsseldorf. Spezialisiert auf Agentic AI, Copilot Studio, Azure und Datenstrategie.'
        );
      }
    } else {
      document.title = "Rezaul Hoque | AI, Automation & Product Strategy Portfolio";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Portfolio of Rezaul Hoque: AI & Automation Engineer, Product Manager, and Cloud Specialist in Düsseldorf, Germany. Specializing in Agentic AI, Copilot Studio, Azure, and Data Strategy.'
        );
      }
    }
  }, [language]);

  // Set html element class for Tailwind dark mode
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-slate-50 text-slate-800 dark:bg-[#050505] dark:text-slate-200 font-sans selection:bg-sky-500/30 selection:text-white relative overflow-hidden">
      {/* Grid overlay background */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Glow Blurs */}
      <div className="fixed top-[-10%] left-[20%] w-[500px] h-[500px] bg-sky-500/10 dark:bg-sky-500/10 blur-[100px] rounded-full pointer-events-none z-0 transition-all duration-500" />
      <div className="fixed bottom-[-10%] right-[15%] w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 blur-[120px] rounded-full pointer-events-none z-0 transition-all duration-500" />

      {/* Content wrapper */}
      <div className="relative z-10">
        <Navbar
          language={language}
          setLanguage={handleSetLanguage}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <Hero language={language} />

        <div className="max-w-6xl mx-auto px-6">
          <hr className="border-slate-200 dark:border-white/5" />
        </div>

        <About language={language} />

        <div className="max-w-6xl mx-auto px-6">
          <hr className="border-slate-200 dark:border-white/5" />
        </div>

        <Skills language={language} />

        <div className="max-w-6xl mx-auto px-6">
          <hr className="border-slate-200 dark:border-white/5" />
        </div>

        <Experience language={language} />

        <div className="max-w-6xl mx-auto px-6">
          <hr className="border-slate-200 dark:border-white/5" />
        </div>

        <Projects language={language} />

        <div className="max-w-6xl mx-auto px-6">
          <hr className="border-slate-200 dark:border-white/5" />
        </div>

        <Certificates language={language} />

        <div className="max-w-6xl mx-auto px-6">
          <hr className="border-slate-200 dark:border-white/5" />
        </div>

        <Education language={language} />

        <div className="max-w-6xl mx-auto px-6">
          <hr className="border-slate-200 dark:border-white/5" />
        </div>

        <Contact language={language} />

        <Footer language={language} />
        <ScrollToTop />
      </div>
    </div>
  );
}
