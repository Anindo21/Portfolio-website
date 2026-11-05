import { Language } from '../types';
import { portfolioMetadata } from '../data';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-black relative z-10 text-center text-xs text-slate-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] uppercase tracking-wider font-medium text-slate-600 dark:text-slate-500">
          © {currentYear} {portfolioMetadata.name}. {language === 'en' ? 'All rights reserved.' : 'Alle Rechte vorbehalten.'}
        </p>
        <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-400 dark:text-slate-600 uppercase tracking-widest">
          <span>{language === 'en' ? 'Built with' : 'Erstellt mit'}</span>
          <span className="text-sky-600 dark:text-sky-400 font-bold">React</span>
          <span>&</span>
          <span className="text-sky-600 dark:text-sky-400 font-bold">Tailwind v4</span>
        </div>
      </div>
    </footer>
  );
}
