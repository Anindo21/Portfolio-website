import { useState, useRef, useEffect, FormEvent } from 'react';
import { Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { portfolioMetadata } from '../data';

interface TerminalProps {
  language: Language;
}

interface CommandOutput {
  text: string;
  type: 'input' | 'system' | 'output' | 'error' | 'success' | 'info';
}

export default function Terminal({ language }: TerminalProps) {
  const [currentTyped, setCurrentTyped] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [stages, setStages] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [sessionStartTime] = useState(Date.now());

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll terminal container ONLY (does not scroll browser window)
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history, stages, currentTyped, isDone]);

  // Handle typing and load stages simulation on mount
  useEffect(() => {
    let active = true;
    setCurrentTyped('');
    setStages([]);
    setIsDone(false);
    setHistory([]);

    const commandText = "python whoami.py";
    
    // 1. Initial boot delay before typing
    const startTimeout = setTimeout(() => {
      if (!active) return;
      
      let index = 0;
      const typeInterval = setInterval(() => {
        if (!active) {
          clearInterval(typeInterval);
          return;
        }
        
        if (index < commandText.length) {
          setCurrentTyped(prev => prev + commandText[index]);
          index++;
        } else {
          clearInterval(typeInterval);
          
          // 2. Cursor pause before execution
          setTimeout(() => {
            if (!active) return;
            
            const logs = [
              {
                delay: 200,
                text: language === 'en'
                  ? "⚡ Booting virtual environment (Python 3.11.4)..."
                  : "⚡ Virtuelle Umgebung wird gestartet (Python 3.11.4)..."
              },
              {
                delay: 550,
                text: language === 'en'
                  ? "⚡ Importing analytics, automation, and AI submodules..."
                  : "⚡ Analyse-, Automatisierungs- und KI-Submodule werden geladen..."
              },
              {
                delay: 900,
                text: language === 'en'
                  ? "⚡ Establishing connection to localized portfolio db..."
                  : "⚡ Verbindung zur lokalen Portfolio-Datenbank wird hergestellt..."
              },
              {
                delay: 1200,
                text: "✔ Compiled & executed whoami.py with status code 0."
              }
            ];

            logs.forEach((log) => {
              setTimeout(() => {
                if (active) {
                  setStages(prev => [...prev, log.text]);
                }
              }, log.delay);
            });

            // 3. Final visual profile card reveal
            setTimeout(() => {
              if (active) {
                setIsDone(true);
              }
            }, 1500);

          }, 450);
        }
      }, 55); // Highly realistic typing speed

    }, 400);

    // Flashing input cursor
    const cursorInterval = setInterval(() => {
      if (active) setShowCursor(prev => !prev);
    }, 530);

    return () => {
      active = false;
      clearTimeout(startTimeout);
      clearInterval(cursorInterval);
    };
  }, [language]);

  const handleVariableClick = (name: string, value: string) => {
    if (!isDone) return;
    setHistory((prev) => [
      ...prev,
      { text: `whoami.get_attribute('${name}')`, type: 'input' },
      { 
        text: language === 'en' 
          ? `>>> Querying attributes for: ${name}\nResult: ${value} (Type: String)`
          : `>>> Attribute werden abgefragt für: ${name}\nErgebnis: ${value} (Typ: String)`, 
        type: 'success' 
      },
    ]);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  };

  const handleCommandSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    setInputVal('');
    
    const formattedCmd = cmd.toLowerCase();
    let replyText = '';
    let replyType: 'output' | 'error' | 'success' | 'info' = 'output';

    if (formattedCmd === 'clear' || formattedCmd === 'cls' || formattedCmd === 'leeren') {
      setHistory([]);
      setStages([]);
      return;
    }

    if (formattedCmd === 'help' || formattedCmd === 'hilfe' || formattedCmd === '?') {
      replyText = language === 'en'
        ? `Available Commands:
  • help      :: Display available console instructions
  • neofetch  :: Fetch visual container info and tech specifications
  • whoami    :: Print Rezaul Hoque's specialized professional profile
  • skills    :: Print technical skills and methodologies
  • projects  :: Display details about key portfolio projects
  • contact   :: Fetch professional contact credentials
  • clear     :: Flush terminal screen history`
        : `Verfügbare Befehle:
  • help      :: Zeigt verfügbare Konsolenanweisungen an
  • neofetch  :: Ruft visuelle Container- und System-Spezifikationen ab
  • whoami    :: Gibt Rezaul Hoques fachliches Profil aus
  • skills    :: Listet technische Fähigkeiten und Methoden auf
  • projects  :: Zeigt Details zu Hauptprojekten des Portfolios
  • contact   :: Zeigt geschäftliche Kontaktdaten an
  • clear     :: Leert den Konsolenbildschirm`;
      replyType = 'info';
    } else if (formattedCmd === 'neofetch') {
      const uptimeSec = Math.floor((Date.now() - sessionStartTime) / 1000);
      replyText = `   .---.     OS: portfolio-container 2026.1
  /     \\    Shell: Interactive Vite Client Shell
  \\.---./    Host: Rezaul Hoque Portfolio Platform
  |  _  |    Uptime: ${uptimeSec}s
  | (_) |    CPU: Gemini Cognitive Processors
  '.___.'    Engine: React 18 / Tailwind CSS
             Rolle: AI, Automation & Product Strategy
             Status: Open to Full-time & Freelance`;
      replyType = 'success';
    } else if (formattedCmd === 'whoami') {
      replyText = language === 'en'
        ? `Rezaul Hoque - M.Sc. Information Systems Student & AI Automation Specialist.
An engineer dedicated to bridging advanced technology with product strategy.
Expertise in deploying AI agents, automated enterprise pipelines, and robust cloud architectures.`
        : `Rezaul Hoque - M.Sc. Wirtschaftsinformatik-Student & KI-Automatisierungsspezialist.
Ein Entwickler, der hochentwickelte Technologie mit Produktstrategie verbindet.
Expertise in der Bereitstellung von KI-Agenten, automatisierten Pipelines und Cloud-Architekturen.`;
      replyType = 'success';
    } else if (formattedCmd === 'skills' || formattedCmd === 'faehigkeiten') {
      replyText = language === 'en'
        ? `TECHNICAL SKILLS:
  • AI & Automation  :: OpenAI, MS Azure AI, Agentic Workflows, n8n, CrewAI
  • Cloud & DevOps   :: Microsoft Azure, Docker, Git, CI/CD, Linux Systems
  • Languages        :: Python, TypeScript, SQL, JavaScript, HTML5/CSS3
  • Methodologies    :: Agile Product Management, IT Consulting, Scrum`
        : `TECHNISCHE FÄHIGKEITEN:
  • KI & Automation  :: OpenAI, MS Azure AI, Agentic Workflows, n8n, CrewAI
  • Cloud & DevOps   :: Microsoft Azure, Docker, Git, CI/CD, Linux-Systeme
  • Sprachen         :: Python, TypeScript, SQL, JavaScript, HTML5/CSS3
  • Methoden         :: Agiles Produktmanagement, IT-Consulting, Scrum`;
      replyType = 'info';
    } else if (formattedCmd === 'projects' || formattedCmd === 'projekte') {
      replyText = language === 'en'
        ? `KEY PORTFOLIO PROJECTS:
  1. ProcureFlow AI  :: Multi-Agent AI system automating public tenders. (Won Google Hackathon)
  2. LLM Evaluation  :: Benchmarking suite evaluating prompt reliability and accuracy.
  3. Portfolio Shell :: Live sandboxed interactive developer portlet (This CLI tool!)`
        : `PORTFOLIO-HAUPTPROJEKTE:
  1. ProcureFlow AI  :: Multi-Agenten-KI-System zur Automatisierung öffentlicher Ausschreibungen.
  2. LLM Evaluation  :: Benchmarking-Suite zur Bewertung von Prompt-Zuverlässigkeit.
  3. Portfolio Shell :: Interaktive Entwicklerkonsole (Dieses CLI-Tool!)`;
      replyType = 'info';
    } else if (formattedCmd === 'contact' || formattedCmd === 'kontakt') {
      replyText = `CONTACT DETAILS:
  • Email    :: anindo21@gmail.com
  • Phone    :: +49 176 8344 6563
  • Location :: Düsseldorf, Germany
  • GitHub   :: github.com/Rezaul-Anindo
  • LinkedIn :: linkedin.com/in/rezaulhoqueanindo`;
      replyType = 'success';
    } else {
      replyText = language === 'en'
        ? `Command not found: "${cmd}". Type "help" to list available instructions.`
        : `Befehl nicht gefunden: "${cmd}". Geben Sie "help" für eine Übersicht ein.`;
      replyType = 'error';
    }

    setHistory(prev => [
      ...prev,
      { text: cmd, type: 'input' },
      { text: replyText, type: replyType }
    ]);
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="bg-slate-950 dark:bg-[#0c0c0c] rounded-xl border border-slate-800 dark:border-white/5 shadow-2xl overflow-hidden flex flex-col h-[480px] cursor-text"
    >
      {/* Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/40 dark:bg-[#050505] border-b border-slate-800 dark:border-white/5 font-mono text-xs text-slate-400 select-none">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
          </div>
          <span className="text-slate-200/10 pl-2">|</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" /> whoami.py
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
          <span>Local Python Env</span>
        </div>
      </div>

      {/* Script Variables Representation */}
      <div className="p-4 font-mono text-[11px] bg-slate-900/10 dark:bg-[#050505]/40 text-slate-300 border-b border-slate-800 dark:border-white/5 select-none">
        <div className="flex items-center gap-1.5 text-slate-500 mb-2.5">
          <Sparkles className="w-3 h-3 text-sky-400 animate-pulse" />
          <span>{language === 'en' ? 'Click variables below to query them in the console:' : 'Klicken Sie Variablen an, um sie abzufragen:'}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 max-w-lg">
          <div className="flex items-center gap-1">
            <span
              onClick={(e) => {
                e.stopPropagation();
                handleVariableClick('name', `"${portfolioMetadata.name}"`);
              }}
              className="text-sky-400 hover:text-sky-300 hover:underline cursor-pointer font-semibold bg-sky-500/5 hover:bg-sky-500/15 px-1.5 py-0.5 rounded border border-sky-400/10 transition"
            >
              name
            </span>
            <span className="text-slate-500">=</span>
            <span className="text-emerald-400 text-[10px] truncate">"{portfolioMetadata.name}"</span>
          </div>

          <div className="flex items-center gap-1">
            <span
              onClick={(e) => {
                e.stopPropagation();
                handleVariableClick('roles', '["AI Engineer", "IT Consultant", "Product Strategy"]');
              }}
              className="text-sky-400 hover:text-sky-300 hover:underline cursor-pointer font-semibold bg-sky-500/5 hover:bg-sky-500/15 px-1.5 py-0.5 rounded border border-sky-400/10 transition"
            >
              roles
            </span>
            <span className="text-slate-500">=</span>
            <span className="text-emerald-400 text-[10px] truncate">["AI", "IT", "Strategy"]</span>
          </div>

          <div className="flex items-center gap-1">
            <span
              onClick={(e) => {
                e.stopPropagation();
                handleVariableClick('location', `"${portfolioMetadata.location[language]}"`);
              }}
              className="text-sky-400 hover:text-sky-300 hover:underline cursor-pointer font-semibold bg-sky-500/5 hover:bg-sky-500/15 px-1.5 py-0.5 rounded border border-sky-400/10 transition"
            >
              location
            </span>
            <span className="text-slate-500">=</span>
            <span className="text-emerald-400 text-[10px] truncate">"Düsseldorf"</span>
          </div>

          <div className="flex items-center gap-1">
            <span
              onClick={(e) => {
                e.stopPropagation();
                handleVariableClick('stack', '["Python", "Agentic AI", "MS Azure", "n8n"]');
              }}
              className="text-sky-400 hover:text-sky-300 hover:underline cursor-pointer font-semibold bg-sky-500/5 hover:bg-sky-500/15 px-1.5 py-0.5 rounded border border-sky-400/10 transition"
            >
              stack
            </span>
            <span className="text-slate-500">=</span>
            <span className="text-emerald-400 text-[10px] truncate">["Python", "AI", "Azure"]</span>
          </div>
        </div>
      </div>

      {/* Terminal History and Prompt */}
      <div 
        ref={containerRef}
        className="flex-1 p-4 overflow-y-auto font-mono text-xs bg-slate-950 dark:bg-[#050505] text-slate-300 space-y-2 select-text selection:bg-emerald-500/20"
      >
        <div className="text-slate-500 text-[10px] tracking-wide border-b border-slate-900 pb-1.5 select-none">
          [System Online. Environment pre-loaded successfully]
        </div>
        
        {/* Dynamic Typing Row */}
        <div className="flex items-center text-slate-300 select-none">
          <span className="text-sky-400 font-bold mr-2">$</span>
          <span className="text-emerald-400 font-medium">{currentTyped}</span>
          {showCursor && !isDone && (
            <span className="w-1.5 h-3.5 bg-emerald-400 ml-0.5 inline-block animate-pulse" />
          )}
        </div>

        {/* Loading logs / stages */}
        {stages.map((stage, idx) => (
          <div key={idx} className={`${stage.startsWith('✔') ? 'text-emerald-400 font-semibold' : 'text-slate-500 text-[11px]'} select-none`}>
            {stage}
          </div>
        ))}

        {/* Profile Output Reveal */}
        {isDone && (
          <div className="space-y-3 animate-fadeIn">
            <pre className="text-emerald-400 font-semibold text-[11px] leading-tight select-all overflow-x-auto bg-slate-900/10 p-2.5 rounded border border-emerald-500/10 max-w-full select-none">
              {language === 'en' ? `┌──────────────────────────────────────────────┐
│                 REZAUL HOQUE                 │
├──────────────────────────────────────────────┤
│  • Status   :: Open to Full-time & Freelance │
│  • Role     :: AI, Automation & Strategy     │
│  • Location :: Düsseldorf, Germany           │
│  • Email    :: anindo21@gmail.com            │
│  • Stack    :: Python, Agentic AI, MS Azure  │
│  • Degree   :: M.Sc. Information Systems     │
└──────────────────────────────────────────────┘` : `┌──────────────────────────────────────────────┐
│                 REZAUL HOQUE                 │
├──────────────────────────────────────────────┤
│  • Status   :: Offen für Vollzeit & Projekte │
│  • Rolle    :: KI, Automatisierung & Strat.  │
│  • Ort      :: Düsseldorf, Deutschland       │
│  • E-Mail   :: anindo21@gmail.com            │
│  • Stack    :: Python, Agentic AI, MS Azure  │
│  • Studium  :: M.Sc. Wirtschaftsinformatik   │
└──────────────────────────────────────────────┘`}
            </pre>

            {/* Click interactive records history */}
            {history.length > 0 && (
              <div className="pt-2 border-t border-slate-900/40 space-y-2.5">
                {history.map((item, index) => (
                  <div key={index} className="space-y-1">
                    {item.type === 'input' ? (
                      <div className="flex items-center text-slate-400 select-none">
                        <span className="text-sky-400 font-bold mr-2">»</span>
                        <span className="text-cyan-450 font-semibold text-[11px]">{item.text}</span>
                      </div>
                    ) : (
                      <div className={`pl-3.5 border-l-2 ${
                        item.type === 'error' ? 'border-red-500/60 text-red-400' :
                        item.type === 'success' ? 'border-emerald-500/60 text-emerald-400' :
                        item.type === 'info' ? 'border-sky-500/60 text-sky-400' :
                        'border-slate-700 text-slate-300'
                      } whitespace-pre-wrap font-mono text-[11px] leading-relaxed`}>
                        {item.text}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Interactive Prompt Line */}
            <form onSubmit={handleCommandSubmit} className="flex items-center text-slate-300 pt-2 border-t border-slate-900/40 select-none">
              <span className="text-emerald-400 font-bold mr-1.5">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="bg-transparent text-emerald-450 font-mono outline-none border-none p-0 flex-1 caret-emerald-400 text-xs focus:ring-0 focus:outline-none"
                disabled={!isDone}
                placeholder={language === 'en' ? "Type command (e.g., 'help', 'neofetch')..." : "Befehl eingeben (z.B. 'help', 'neofetch')..."}
              />
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
