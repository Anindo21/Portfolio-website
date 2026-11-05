import { GraduationCap, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { educationData } from '../data';

interface EducationProps {
  language: Language;
}

export default function Education({ language }: EducationProps) {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400 font-bold">
          {language === 'en' ? '06 - ACADEMIC' : '06 - AKADEMISCH'}
        </span>
        <h2 className="font-sans text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white mt-1">
          {language === 'en' ? 'EDUCATION' : 'AUSBILDUNG'}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            id={`edu-card-${edu.id === 'edu-msc' ? 'rwth' : 'ude'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            className="bg-slate-50 dark:bg-[#0c0c0c] border border-slate-200 dark:border-white/5 p-6 md:p-8 rounded-xl flex flex-col justify-between hover:shadow-xl transition-all duration-300"
          >
            <div>
              <div className="flex justify-between items-start gap-4 mb-4">
                <span className="text-[10px] font-mono font-bold text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded">
                  {edu.period}
                </span>
                <GraduationCap className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              </div>

              <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {edu.degree[language]}
              </h3>

              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1.5 flex items-center gap-1.5">
                <span className="text-sky-600 dark:text-sky-400">{edu.institution}</span>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <span className="text-slate-400 dark:text-slate-500 font-normal text-xs">
                  {edu.location[language]}
                </span>
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                {edu.details[language]}
              </p>
            </div>

            {edu.specialization && (
              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/5 flex items-center gap-2 text-[10px] text-sky-600 dark:text-sky-400 font-mono uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{edu.specialization[language]}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
