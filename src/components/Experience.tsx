import { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { experienceData } from '../data';

interface ExperienceProps {
  language: Language;
}

export default function Experience({ language }: ExperienceProps) {
  // Uniper Data & Automation is expanded by default on first load
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    'uniper-data': true,
  });

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400 font-bold">
          {language === 'en' ? '03 - JOURNEY' : '03 - WERDEGANG'}
        </span>
        <h2 className="font-sans text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white mt-1">
          {language === 'en' ? 'WORK EXPERIENCE' : 'BERUFSERFAHRUNG'}
        </h2>
      </motion.div>

      <div className="space-y-8">
        <div className="relative border-l-2 border-slate-200 dark:border-white/5 ml-4 md:ml-6 pl-6 md:pl-8 space-y-12">
          {experienceData.map((item, index) => {
            const isExpanded = !!expanded[item.id];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="relative"
              >
                {/* Timeline Node Icon */}
                <div
                  className={`absolute w-5 h-5 rounded-full -left-[37px] md:-left-[43px] top-1.5 flex items-center justify-center transition-all duration-300 ring-4 ring-white dark:ring-black z-10 ${
                    item.latest
                      ? 'bg-sky-500 text-white shadow-lg'
                      : 'bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-white/10 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <Briefcase className="w-2.5 h-2.5" />
                </div>

                {/* Experience Card */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  id={`exp-card-${item.id}`}
                  className={`p-5 md:p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isExpanded
                      ? 'bg-slate-50 dark:bg-[#0c0c0c] border-sky-500/30 dark:border-sky-500/40 shadow-xl'
                      : 'bg-white/40 dark:bg-[#0c0c0c]/40 border-slate-200 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-[#0c0c0c]/80 hover:border-slate-300 dark:hover:border-white/20'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                          {item.title[language]}
                        </h3>
                        {item.latest && (
                          <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded">
                            <Sparkles className="w-2.5 h-2.5" /> {language === 'en' ? 'Latest' : 'Aktuell'}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <span className="text-sky-600 dark:text-sky-400">{item.company}</span>
                        <span className="text-slate-300 dark:text-slate-600">•</span>
                        <span className="flex items-center gap-1 font-normal text-slate-400 dark:text-slate-500 text-xs font-mono">
                          <MapPin className="w-3 h-3" /> {item.location[language]}
                        </span>
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono font-medium text-sky-600 dark:text-sky-400 bg-sky-500/5 dark:bg-sky-500/10 border border-sky-500/10 dark:border-sky-500/20 px-2.5 py-1 rounded flex items-center gap-1.5 self-start md:self-auto uppercase tracking-wider">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      <button className="text-slate-400 dark:text-slate-500 hover:text-sky-600 dark:hover:text-sky-400 p-1 rounded-full transition-colors hidden md:block">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Collapsible Details */}
                  {isExpanded && (
                    <div className="pt-5 mt-4 border-t border-slate-200/60 dark:border-white/5 space-y-4">
                      <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-2.5 leading-relaxed">
                        {item.bulletPoints[language].map((bullet, idx) => (
                          <li key={idx} className="marker:text-sky-600 dark:marker:text-sky-400 pl-1">
                            <span className="relative -left-1 text-slate-700 dark:text-slate-300">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-3">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                          {language === 'en' ? 'Key Technologies:' : 'Technologien:'}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] px-2.5 py-1 bg-white dark:bg-white/[0.02] hover:bg-sky-500/5 dark:hover:bg-sky-500/10 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 border border-slate-200 dark:border-white/5 hover:border-sky-500/20 rounded transition-colors duration-200 font-medium font-sans"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mobile expansion indicator */}
                  <div className="flex justify-center mt-3 pt-2 border-t border-slate-100 dark:border-white/5 md:hidden text-slate-400 dark:text-slate-500 text-xs">
                    <span className="flex items-center gap-1 uppercase tracking-wider text-[10px]">
                      {isExpanded ? (
                        <>
                          {language === 'en' ? 'Close details' : 'Details schließen'} <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          {language === 'en' ? 'View details' : 'Details anzeigen'} <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
