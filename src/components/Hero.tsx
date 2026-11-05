import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { Language } from '../types';
import { portfolioMetadata } from '../data';
import Terminal from './Terminal';

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const handleContactScroll = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
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
    <header id="hero" className="relative pt-32 pb-20 px-6 max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center z-10 overflow-hidden">
      {/* Visual background text */}
      <div className="absolute left-4 top-16 opacity-[0.02] dark:opacity-[0.03] select-none pointer-events-none hidden md:block">
        <span className="text-[180px] leading-none font-sans font-black tracking-tighter uppercase">
          PORTFOLIO
        </span>
      </div>

      <div className="lg:col-span-7 space-y-6 z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/10 dark:border-emerald-500/20 rounded">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            {portfolioMetadata.status[language]}
          </span>
        </div>

        {/* Dynamic Name and Title */}
        <div className="space-y-4">
          <h1 className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[0.85] font-black tracking-tighter uppercase text-slate-950 dark:text-white">
            {portfolioMetadata.name}
            <br />
            <span className="text-sky-600 dark:text-sky-400 font-black">
              {portfolioMetadata.title[language]}
            </span>
          </h1>
        </div>

        {/* Short Bio Summary */}
        <div className="flex flex-wrap items-start gap-8 md:gap-12 pt-6 border-t border-slate-200/10 dark:border-white/5">
          <p className="max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            {language === 'en'
              ? "M.Sc. Information Systems student combining technical expertise in Cloud & AI Automation with product strategy, owning AI solutions and agile project management."
              : "M.Sc. Wirtschaftsinformatik-Student, der technisches Fachwissen in Cloud & KI-Automatisierung mit Produktstrategie, der Verantwortung für KI-Lösungen und agilem Projektmanagement verbindet."}
          </p>

          <div className="flex flex-col gap-1.5">
            <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500 font-bold">
              {language === 'en' ? 'CURRENT ROLE' : 'AKTUELLE ROLLE'}
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                {portfolioMetadata.currentRole[language]}
              </span>
              {portfolioMetadata.currentRoleType && (
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">
                  • {portfolioMetadata.currentRoleType[language]}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500 font-bold">
              {language === 'en' ? 'BASED IN' : 'STANDORT'}
            </span>
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {portfolioMetadata.location[language]}
            </span>
          </div>
        </div>

        {/* Action Triggers */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
          <button
            onClick={handleContactScroll}
            className="w-full sm:w-auto min-h-[44px] px-6 py-3 bg-sky-600 dark:bg-white hover:bg-sky-700 dark:hover:bg-sky-400 text-white dark:text-black font-bold rounded transition-all duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer"
          >
            <span>{language === 'en' ? 'Get in touch' : 'Kontakt aufnehmen'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={portfolioMetadata.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[44px] px-6 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-white/10 text-slate-700 dark:text-slate-200 font-bold rounded flex items-center justify-center gap-2 transition duration-300 text-xs uppercase tracking-wider"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={portfolioMetadata.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[44px] px-6 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-white/10 text-slate-700 dark:text-slate-200 font-bold rounded flex items-center justify-center gap-2 transition duration-300 text-xs uppercase tracking-wider"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Terminal Column */}
      <div className="lg:col-span-5">
        <Terminal language={language} />
      </div>
    </header>
  );
}
