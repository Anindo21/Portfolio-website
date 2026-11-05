import { useState } from 'react';
import { motion } from 'motion/react';
import { BrainCircuit, Database, Code, Sparkles, ExternalLink, X, Award, Cpu, Shield, Terminal, Calculator, CheckSquare, Compass, GraduationCap, ChevronDown } from 'lucide-react';
import { Language, ProjectItem } from '../types';
import { projectsData } from '../data';

interface ProjectsProps {
  language: Language;
}

export default function Projects({ language }: ProjectsProps) {
  const [filter, setFilter] = useState<'all' | 'ai' | 'web' | 'java'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleSkipSection = () => {
    const nextElem = document.getElementById('certificates');
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filterButtons = [
    { id: 'all', label: { en: 'All', de: 'Alle' } },
    { id: 'ai', label: { en: 'AI & Automation', de: 'KI & Automation' } },
    { id: 'web', label: { en: 'Cloud & Data', de: 'Cloud & Daten' } },
    { id: 'java', label: { en: 'Software Engineering', de: 'Software-Entwicklung' } },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  const getCategoryIcon = (category: string, className: string) => {
    switch (category) {
      case 'ai':
        return <BrainCircuit className={className} />;
      case 'web':
        return <Database className={className} />;
      case 'java':
        return <Code className={className} />;
      default:
        return <Code className={className} />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'ai':
        return language === 'en' ? 'AI & Automation' : 'KI & Automation';
      case 'web':
        return language === 'en' ? 'Cloud & Data' : 'Cloud & Daten';
      case 'java':
        return language === 'en' ? 'Software Eng.' : 'Software-Entw.';
      default:
        return category;
    }
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400 font-bold">
            {language === 'en' ? '04 — PORTFOLIO' : '04 — PORTFOLIO'}
          </span>
          <h2 className="font-sans text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900 dark:text-white mt-1">
            {language === 'en' ? 'SELECTED PROJECTS' : 'PROJEKTE'}
          </h2>
        </div>

        {/* Skip Section Quick Action */}
        <button
          onClick={handleSkipSection}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg transition-all duration-300 cursor-pointer hover:border-sky-500/30 shrink-0 self-start md:self-auto"
          title={language === 'en' ? 'Skip to Certificates section' : 'Zum Abschnitt Zertifikate springen'}
        >
          <span>{language === 'en' ? 'Skip Section' : 'Abschnitt überspringen'}</span>
          <ChevronDown className="w-4 h-4 text-sky-500 animate-bounce" />
        </button>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="flex flex-wrap gap-2 justify-center mb-6"
      >
        {filterButtons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id as any)}
            className={`px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider rounded transition-all duration-300 cursor-pointer ${
              filter === btn.id
                ? 'bg-sky-600 dark:bg-white text-white dark:text-black scale-105 shadow-md'
                : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {btn.label[language]}
          </button>
        ))}
      </motion.div>

      {/* Helper cue bar */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3 px-1 font-mono">
        <span className="flex items-center gap-1.5">
          <Code className="w-3.5 h-3.5 text-sky-500" />
          {filteredProjects.length} {language === 'en' ? 'Featured Case Studies' : 'Ausgewählte Fallstudien'}
        </span>
        <span className="hidden sm:inline-block text-[11px] text-slate-400 dark:text-slate-500">
          {language === 'en' ? 'Scroll inside box or click Skip Section' : 'In der Box scrollen oder Überspringen nutzen'}
        </span>
      </div>

      {/* Scrollable Projects Container */}
      <div className="relative border border-slate-200 dark:border-white/10 rounded-2xl bg-slate-50/50 dark:bg-[#07090e]/50 backdrop-blur-sm p-4 md:p-6 shadow-inner">
        <div className="max-h-[620px] overflow-y-auto px-1 py-1 custom-scrollbar">
          {/* Bento-like Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4), ease: "easeOut" }}
                className={`group bg-white dark:bg-[#0c0c0c] border p-6 rounded-xl flex flex-col justify-between hover:border-sky-500/30 dark:hover:border-white/20 hover:shadow-2xl hover:shadow-sky-500/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                  project.featured
                    ? 'md:col-span-2 lg:col-span-3 border-sky-500/20 dark:border-sky-500/30 bg-gradient-to-br from-white dark:from-[#0a0f18]/90 via-white dark:via-[#050505] to-white dark:to-[#050505]'
                    : 'border-slate-200 dark:border-white/5'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4 gap-2">
                    <div className="flex flex-wrap items-center gap-2 max-w-full">
                      <div className="p-2 dark:p-2.5 bg-slate-200/50 dark:bg-white/5 rounded border border-slate-350 dark:border-white/10 shrink-0">
                        {getCategoryIcon(project.category, "w-4 h-4 text-sky-600 dark:text-sky-400")}
                      </div>
                      {project.badge && (
                        <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 px-2 py-0.5 rounded break-words max-w-full">
                          <Sparkles className="w-2.5 h-2.5 text-sky-500 shrink-0" />
                          <span>{project.badge[language]}</span>
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider bg-slate-200/50 dark:bg-white/5 px-2.5 py-1 rounded border border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400 shrink-0">
                      #{getCategoryLabel(project.category)}
                    </span>
                  </div>

                  {project.featured ? (
                    <div className="grid lg:grid-cols-12 gap-6 items-start">
                      <div className="lg:col-span-8">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300 text-xl md:text-2xl break-words [overflow-wrap:anywhere]">
                          {project.title[language]}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4">
                          {project.description[language]}
                        </p>
                      </div>
                      {(project.impact || project.innovation) && (
                        <div className="lg:col-span-4 space-y-3 bg-slate-100 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 p-4 rounded mt-2 lg:mt-0 font-sans">
                          {project.impact && (
                            <div>
                              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 block mb-1">
                                {language === 'en' ? 'Impact' : 'Auswirkung'}
                              </span>
                              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                {project.impact[language]}
                              </p>
                            </div>
                          )}
                          {project.innovation && (
                            <div>
                              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 block mb-1">
                                {language === 'en' ? 'Innovation' : 'Innovation'}
                              </span>
                              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                {project.innovation[language]}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <h3 className="font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300 text-lg">
                        {project.title[language]}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4">
                        {project.description[language]}
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-white/5 mt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 bg-slate-200/50 dark:bg-black border border-slate-250 dark:border-white/5 text-slate-600 dark:text-slate-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-200/50 dark:bg-black text-sky-600 dark:text-sky-400 font-bold rounded">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 group-hover:underline gap-1.5 cursor-pointer">
                    <span>{language === 'en' ? 'VIEW DETAILS' : 'DETAILS ANZEIGEN'}</span>
                    <ExternalLink className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Jump Button inside container */}
        <div className="pt-4 border-t border-slate-200/60 dark:border-white/5 mt-4 flex justify-center">
          <button
            onClick={handleSkipSection}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
          >
            <span>{language === 'en' ? 'Next Section: Certificates' : 'Nächster Abschnitt: Zertifikate'}</span>
            <ChevronDown className="w-3.5 h-3.5 text-sky-500" />
          </button>
        </div>
      </div>

      {/* Project Details Modal Popup */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div
            className={`bg-white dark:bg-[#09090b] border border-slate-200 dark:border-white/10 rounded-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative transition-all duration-300 cursor-default ${
              selectedProject.customDetails ? 'max-w-4xl' : 'max-w-2xl'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {selectedProject.customDetails ? (
              /* High-fidelity Custom Portfolio View for Submissions (ProcureFlow AI) */
              <div className="p-6 md:p-8 space-y-8 font-sans text-left">
                {/* Header Metadata */}
                <div className="space-y-2 pt-2">
                  {selectedProject.customDetails.subtitle && (
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-500 dark:text-sky-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{selectedProject.customDetails.subtitle[language]}</span>
                    </div>
                  )}
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight uppercase font-sans tracking-tight break-words [overflow-wrap:anywhere]">
                    {selectedProject.title[language]}
                  </h3>
                </div>

                {/* THE VISION & RELEVANZ */}
                {selectedProject.customDetails.vision && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      <Sparkles className="w-4 h-4 text-sky-500" />
                      <span>{language === 'en' ? 'The Vision & Relevanz' : 'Vision & Relevanz'}</span>
                    </div>
                    <div className="whitespace-pre-line bg-slate-50 dark:bg-white/[0.01] border border-slate-150 dark:border-white/5 p-5 rounded-xl text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                      {selectedProject.customDetails.vision[language]}
                    </div>
                  </div>
                )}

                {/* PARTICIPATED ALLIANCE UNIVERSITIES */}
                {selectedProject.customDetails.universities && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      <GraduationCap className="w-4 h-4 text-sky-500" />
                      <span>{language === 'en' ? 'Participating Alliance Universities' : 'Beteiligte Allianz-Universitäten'}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-slate-50 dark:bg-white/[0.01] border border-slate-150 dark:border-white/5 p-5 rounded-xl">
                      {selectedProject.customDetails.universities.map((uni) => (
                        <div
                          key={uni}
                          className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition duration-150"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500/50" />
                          <span>{uni}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {/* DECOUPLED SPECIALIST AGENTS / SOCIOTECHNICAL ASSESSMENT */}
                {selectedProject.customDetails.agents && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      <Cpu className="w-4 h-4 text-pink-500" />
                      <span>
                        {selectedProject.id === 'essen-gpt-resilience'
                          ? (language === 'en' ? 'Four-Dimension Sociotechnical Assessment' : 'Vier-Dimensionen Soziotechnische Analyse')
                          : selectedProject.id === 'tuv-nord-consulting'
                            ? (language === 'en' ? '3-Pillar Scoring Architecture & Ecosystem' : '3-Säulen-Scoring-Architektur & Ökosystem')
                            : selectedProject.id === 'metis-uniper-risk'
                              ? (language === 'en' ? 'Solution Architecture & Multi-Agent Design' : 'Lösungsarchitektur & Multi-Agenten-Design')
                              : selectedProject.id === 'ai-financial-analyst'
                                ? (language === 'en' ? 'System Architecture & Functional Modules' : 'Systemarchitektur & Funktionsmodule')
                                : (language === 'en' ? 'Decoupled Specialist Agents' : 'Entkoppelte Spezialisten-Agenten')}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.customDetails.agents.map((agent) => (
                        <div
                          key={agent.name}
                          className="bg-slate-50 dark:bg-white/[0.01] border border-slate-150 dark:border-white/5 p-4 rounded-xl space-y-2 hover:border-slate-200 dark:hover:border-white/10 transition"
                        >
                          <div className="flex items-center gap-2">
                            <span className={`w-2.5 h-2.5 rounded-full ${
                              agent.color === 'sky' ? 'bg-sky-500' :
                              agent.color === 'pink' ? 'bg-pink-500' :
                              agent.color === 'emerald' ? 'bg-emerald-500' : 'bg-purple-500'
                            }`} />
                            <h5 className="font-bold text-sm text-slate-900 dark:text-white">
                              {agent.name}
                            </h5>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                            {agent.description[language]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                 {/* ARCHITECTURAL INNOVATIONS */}
                {selectedProject.customDetails.architecturalInnovations && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      <Terminal className="w-4 h-4 text-purple-500" />
                      <span>
                        {selectedProject.id === 'essen-gpt-resilience'
                          ? (language === 'en' ? 'Analytical Innovations' : 'Analytische Innovationen')
                          : selectedProject.id === 'tuv-nord-consulting'
                            ? (language === 'en' ? 'Strategic Frameworks & Methodology' : 'Strategische Frameworks & Methodik')
                            : selectedProject.id === 'metis-uniper-risk'
                              ? (language === 'en' ? 'Strategic Pillars & Framing' : 'Strategische Säulen & Framing')
                              : selectedProject.id === 'ai-financial-analyst'
                                ? (language === 'en' ? 'Strategic Framing & Architectural Choices' : 'Strategisches Framing & Architektur-Entscheidungen')
                                : (language === 'en' ? 'Architectural Innovations' : 'Architektonische Innovationen')}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedProject.customDetails.architecturalInnovations.map((innovation) => {
                        const titleKey = typeof innovation.title === 'string' ? innovation.title : innovation.title.en;
                        const titleText = typeof innovation.title === 'string' ? innovation.title : innovation.title[language];
                        return (
                          <div
                            key={titleKey}
                            className="bg-slate-50 dark:bg-white/[0.01] border border-slate-150 dark:border-white/5 p-4 rounded-xl space-y-3"
                          >
                            <div className="flex items-center gap-2">
                              {innovation.color === 'sky' && <Shield className="w-5 h-5 text-sky-500" />}
                              {innovation.color === 'purple' && <Database className="w-5 h-5 text-purple-500" />}
                              {innovation.color === 'pink' && <Database className="w-5 h-5 text-pink-500" />}
                              <h5 className="font-bold text-[11px] uppercase tracking-wider text-slate-900 dark:text-white leading-tight">
                                {titleText}
                              </h5>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                              {innovation.description[language]}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
 
                 {/* MATHEMATICAL FORMULATIONS & LOGIC */}
                {selectedProject.customDetails.mathFormulations && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      <Calculator className="w-4 h-4 text-emerald-500" />
                      <span>
                        {selectedProject.id === 'essen-gpt-resilience'
                          ? (language === 'en' ? 'Assessment Framework & Logic' : 'Bewertungsrahmen & Logik')
                          : (language === 'en' ? 'Mathematical Formulations & Logic' : 'Mathematische Formulierungen & Logik')}
                      </span>
                    </div>
                    {selectedProject.customDetails.scoringMethodology && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed bg-slate-50/50 dark:bg-white/[0.01] border border-slate-150 dark:border-white/5 p-4 rounded-xl">
                        {selectedProject.customDetails.scoringMethodology[language]}
                      </p>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.customDetails.mathFormulations.map((formulation) => (
                        <div
                          key={formulation.title}
                          className="bg-slate-50 dark:bg-white/[0.01] border border-slate-150 dark:border-white/5 p-5 rounded-xl space-y-4"
                        >
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                            {formulation.title}
                          </span>
                          <div className="bg-slate-100 dark:bg-black/40 border border-slate-200/50 dark:border-white/5 p-4 rounded-lg font-mono text-xs text-slate-800 dark:text-slate-300 space-y-1.5 leading-relaxed">
                            {formulation.formulas.map((formula, idx) => {
                              const parts = formula.split(' = ');
                              if (parts.length === 2) {
                                  return (
                                    <div key={idx}>
                                      <span className={formulation.color === 'sky' ? 'text-sky-600 dark:text-sky-400' : 'text-pink-600 dark:text-pink-400'}>{parts[0]}</span>
                                      <span> = </span>
                                      <span className="text-slate-700 dark:text-slate-300">{parts[1]}</span>
                                    </div>
                                  );
                              }
                              // Handle multiplication symbol gracefully
                              const multiParts = formula.split(' = ');
                              return <div key={idx}>{formula}</div>;
                            })}
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed font-medium">
                            {formulation.notes[language]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* EVALUATION RESULTS & IMPACT */}
                {selectedProject.customDetails.evaluations && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      <CheckSquare className="w-4 h-4 text-sky-500" />
                      <span>{language === 'en' ? 'Evaluation Results & Impact' : 'Evaluationsergebnisse & Auswirkung'}</span>
                    </div>
                    <div className="border border-slate-200 dark:border-white/5 rounded-xl overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs min-w-[500px]">
                        <thead>
                          <tr className="bg-slate-50 dark:bg-white/[0.02] border-b border-slate-200 dark:border-white/5 text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                            <th className="py-3 px-4">{language === 'en' ? 'Evaluation Dimension' : 'Evaluationsdimension'}</th>
                            <th className="py-3 px-4">{language === 'en' ? 'Verification Output' : 'Verifikations-Output'}</th>
                            <th className="py-3 px-4 text-right">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-150 dark:divide-white/5 text-slate-700 dark:text-slate-300">
                          {selectedProject.customDetails.evaluations.map((evalItem) => {
                            const evalDimensionText = typeof evalItem.dimension === 'string' ? evalItem.dimension : evalItem.dimension[language];
                            const evalDimensionKey = typeof evalItem.dimension === 'string' ? evalItem.dimension : evalItem.dimension.en;
                            const evalOutputText = typeof evalItem.output === 'string' ? evalItem.output : evalItem.output[language];
                            return (
                              <tr key={evalDimensionKey} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.01]">
                                <td className="py-3 px-4 font-bold">{evalDimensionText}</td>
                                <td className="py-3 px-4 text-slate-500 dark:text-slate-400 leading-relaxed">{evalOutputText}</td>
                                <td className="py-3 px-4 text-right">
                                  <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                                    {evalItem.status}
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                 {/* ENTERPRISE PRODUCTION ROADMAP & LIMITATIONS / RECOMMENDATIONS & LIMITATIONS */}
                {selectedProject.customDetails.roadmap && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      <Compass className="w-4 h-4 text-sky-500" />
                      <span>
                        {selectedProject.id === 'essen-gpt-resilience'
                          ? (language === 'en' ? 'Recommendations & Limitations' : 'Empfehlungen & Einschränkungen')
                          : selectedProject.id === 'tuv-nord-consulting'
                            ? (language === 'en' ? '10-Year Strategic Roadmap (OKRs)' : '10-Jahres-Strategie-Roadmap (OKRs)')
                            : selectedProject.id === 'metis-uniper-risk'
                              ? (language === 'en' ? 'Product Strategy & Execution Roadmap' : 'Produktstrategie & Umsetzungs-Roadmap')
                              : selectedProject.id === 'ai-financial-analyst'
                                ? (language === 'en' ? 'Product Contribution & Execution Steps' : 'Produktbeitrag & Umsetzungsschritte')
                                : (language === 'en' ? 'Enterprise Production Roadmap & Limitations' : 'Enterprise-Produktions-Roadmap & Einschränkungen')}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.customDetails.roadmap.map((roadmapItem) => {
                        const roadmapTitleKey = typeof roadmapItem.title === 'string' ? roadmapItem.title : roadmapItem.title.en;
                        const roadmapTitleText = typeof roadmapItem.title === 'string' ? roadmapItem.title : roadmapItem.title[language];
                        return (
                          <div
                            key={roadmapTitleKey}
                            className="bg-slate-50 dark:bg-white/[0.01] border border-slate-150 dark:border-white/5 p-4 rounded-xl space-y-1.5"
                          >
                            <h5 className="font-bold text-sm text-slate-900 dark:text-white">
                              {roadmapTitleText}
                            </h5>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                              {roadmapItem.description[language]}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Technology Ecosystem */}
                <div className="space-y-2 border-t border-slate-200 dark:border-white/5 pt-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {language === 'en' ? 'Technology Ecosystem' : 'Technologie-Ökosystem'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 bg-slate-100 dark:bg-black border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row gap-3">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition duration-200 cursor-pointer border border-sky-600 flex items-center justify-center gap-1.5"
                    >
                      <span>{language === 'en' ? 'View Kaggle Writeup' : 'Kaggle Writeup ansehen'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 font-bold rounded-lg text-xs uppercase tracking-wider transition duration-200 cursor-pointer border border-slate-200 dark:border-white/10"
                  >
                    {language === 'en' ? 'Close' : 'Schließen'}
                  </button>
                </div>
              </div>
            ) : (
              /* Standard Details View for other projects */
              <div className="p-6 md:p-8 space-y-6 text-left">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-mono uppercase tracking-wider bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/25 px-2.5 py-1 rounded">
                    #{getCategoryLabel(selectedProject.category)}
                  </span>
                  {selectedProject.featured && (
                    <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 px-2.5 py-1 rounded">
                      <Award className="w-3 h-3" />
                      {language === 'en' ? 'Featured Project' : 'Hervorgehobenes Projekt'}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight break-words [overflow-wrap:anywhere]">
                    {selectedProject.title[language]}
                  </h3>
                </div>

                <div className="border-t border-slate-200 dark:border-white/5 pt-4 space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
                      {language === 'en' ? 'Project Description' : 'Projektbeschreibung'}
                    </h4>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {selectedProject.description[language]}
                    </p>
                  </div>

                  {selectedProject.impact && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
                        {language === 'en' ? 'Core Performance & Impact' : 'Kernleistung & Auswirkung'}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-semibold bg-slate-50 dark:bg-white/[0.01] p-3 rounded-lg border border-slate-150 dark:border-white/5">
                        {selectedProject.impact[language]}
                      </p>
                    </div>
                  )}

                  {selectedProject.innovation && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
                        {language === 'en' ? 'Architectural Innovation' : 'Architektonische Innovation'}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {selectedProject.innovation[language]}
                      </p>
                    </div>
                  )}

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                      {language === 'en' ? 'Technology Ecosystem' : 'Technologie-Ökosystem'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-3 py-1 bg-slate-100 dark:bg-black border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row gap-3">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-lg text-xs uppercase tracking-wider transition duration-200 cursor-pointer border border-sky-600 flex items-center justify-center gap-1.5"
                    >
                      <span>{language === 'en' ? 'View Kaggle Writeup' : 'Kaggle Writeup ansehen'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 font-bold rounded-lg text-xs uppercase tracking-wider transition duration-200 cursor-pointer border border-slate-200 dark:border-white/10"
                  >
                    {language === 'en' ? 'Close' : 'Schließen'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
