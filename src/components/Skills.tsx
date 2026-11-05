import { useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Cloud, Code, Database, Users, Award, Search, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { skillsData } from '../data';

interface SkillsProps {
  language: Language;
}

export default function Skills({ language }: SkillsProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className={className} />;
      case 'Cloud':
        return <Cloud className={className} />;
      case 'Code':
        return <Code className={className} />;
      case 'Chart':
        return <Database className={className} />; // Fallback to database or bar chart
      case 'Users':
        return <Users className={className} />;
      case 'Award':
        return <Award className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      default:
        return <Code className={className} />;
    }
  };

  const filteredSkills = skillsData.map(category => {
    const matchedSkills = category.skills.filter(skill =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...category,
      matchedSkills,
      hasMatch: matchedSkills.length > 0 || category.category[language].toLowerCase().includes(searchQuery.toLowerCase())
    };
  }).filter(cat => cat.hasMatch);

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
      >
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400 font-bold">
            {language === 'en' ? '02 - EXPERTISE' : '02 - EXPERTISE'}
          </span>
          <h2 className="font-sans text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white mt-1">
            {language === 'en' ? 'SKILLS' : 'FÄHIGKEITEN'}
          </h2>
          <p className="text-xs text-slate-500 mt-1.5">
            {language === 'en' ? 'Interactive overview of my technical expertise and soft skills' : 'Interaktive Übersicht meiner technischen Fähigkeiten und Soft Skills'}
          </p>
        </div>

        {/* Filter Input */}
        <div className="relative max-w-xs w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 pointer-events-none">
            <Search className="w-3.5 h-3.5" />
          </span>
          <input
            id="skill-search"
            type="text"
            placeholder={language === 'en' ? "Filter skills..." : "Fähigkeiten filtern..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded text-xs text-slate-950 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-650 focus:outline-none focus:border-sky-500 transition-all duration-200"
          />
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((category, catIndex) => {
          const isSearching = searchQuery.length > 0;
          return (
            <motion.div
              key={catIndex}
              id={`skill-cat-${catIndex}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.08, ease: "easeOut" }}
              className="bg-slate-50 dark:bg-[#0c0c0c] border border-slate-200 dark:border-white/5 p-6 rounded-xl hover:border-sky-500/20 dark:hover:border-white/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-200 dark:border-white/5">
                  <div className="p-1.5 bg-slate-200/50 dark:bg-white/5 rounded">
                    {getIcon(category.icon, `w-5 h-5 ${category.color}`)}
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-sm tracking-tight uppercase">
                    {category.category[language]}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => {
                    const isMatched = isSearching && skill.name.toLowerCase().includes(searchQuery.toLowerCase());
                    return (
                      <span
                        key={index}
                        className={`text-xs px-2.5 py-1.5 rounded-md border font-medium transition-all duration-300 ${
                          isMatched
                            ? 'bg-sky-500/10 dark:bg-sky-500/20 border-sky-500/30 dark:border-sky-500/20 text-sky-600 dark:text-sky-400 font-semibold'
                            : 'bg-white dark:bg-white/[0.01] border-slate-250 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20'
                        }`}
                      >
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
