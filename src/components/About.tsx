import { Compass, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { aboutContent } from '../data';

interface AboutProps {
  language: Language;
}

export default function About({ language }: AboutProps) {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400 font-bold">
          {language === 'en' ? '01 - ABOUT ME' : '01 - ÜBER MICH'}
        </span>
        <h2 className="font-sans text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white mt-1">
          {language === 'en' ? 'BACKGROUND' : 'HINTERGRUND'}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="md:col-span-7 space-y-5 text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed"
        >
          {aboutContent.bio[language].map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>

        {/* Info card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="md:col-span-5 space-y-6"
        >
          <div className="bg-slate-50 dark:bg-[#0c0c0c] border border-slate-200 dark:border-white/5 p-5 md:p-6 rounded-2xl space-y-4 shadow-sm dark:shadow-none">
            <h3 className="text-slate-800 dark:text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
              <Compass className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span>{language === 'en' ? 'Languages' : 'Sprachen'}</span>
            </h3>

            <div className="space-y-3 pt-1">
              {aboutContent.languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center text-sm border-b border-slate-200 dark:border-slate-800/40 pb-2 last:border-0 last:pb-0"
                >
                  <span className="text-slate-700 dark:text-slate-300 font-semibold flex items-center gap-2">
                    <span className="text-base select-none">{lang.flag}</span>
                    <span>{lang.name[language]}</span>
                  </span>
                  <span className="text-xs font-mono font-medium text-sky-600 dark:text-sky-400">
                    {lang.level[language]}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                <span>{language === 'en' ? 'Interests' : 'Interessen'}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {aboutContent.interests[language].map((interest, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/85 rounded-full text-slate-700 dark:text-slate-300 font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
