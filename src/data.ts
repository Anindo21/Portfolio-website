import { ExperienceItem, ProjectItem, EducationItem, SkillCategory, CertificateItem } from './types';
// @ts-ignore
import avatarImg from '../Gemini_Generated_Image_8roosd8roosd8roo.png';

export const portfolioMetadata = {
  name: "Rezaul Hoque",
  avatar: avatarImg,
  title: {
    en: "AI, Automation & Product Strategy",
    de: "KI, Automatisierung & Produktstrategie"
  },
  location: {
    en: "Düsseldorf, Germany",
    de: "Düsseldorf, Deutschland"
  },
  status: {
    en: "Open to work in Germany",
    de: "Offen für Angebote in Deutschland"
  },
  currentRole: {
    en: "Data & Automation (Working Student)",
    de: "Daten & Automatisierung (Werkstudent)"
  },
  email: "anindo21@gmail.com",
  phone: "+49 17621490166",
  github: "https://github.com/anindo21",
  linkedin: "https://linkedin.com/in/anindo21"
};

export const aboutContent = {
  bio: {
    en: [
      "I combine data analytics, cloud technologies, AI and automation to help organizations make better decisions and improve business processes. My core focus lies at the intersection of technology and business strategy - building intelligent solutions, managing digital transformation and owning AI product lifecycles.",
      "Currently working at Uniper, I deliver interactive Power BI dashboards, automate reporting processes and support AI-driven initiatives for Market Risk and Finance. This allows me to apply advanced analytics to high-impact financial environments on a daily basis.",
      "Previously, I worked as a DevOps Engineer, gaining hands-on experience with Microsoft Azure, Azure Monitor, Azure DevOps, CI/CD and application monitoring. My academic background in Software Engineering and Information Systems (Wirtschaftsinformatik) complements my practical experience, enabling me to combine technical expertise with strategic business understanding."
    ],
    de: [
      "Ich kombiniere Datenanalyse, Cloud-Technologien, KI und Automatisierung, um Unternehmen dabei zu helfen, bessere Entscheidungen zu treffen und Geschäftsprozesse zu optimieren. Mein Kernfokus liegt an der Schnittstelle von Technologie und Geschäftsstrategie – der Entwicklung intelligenter Lösungen, der Steuerung der digitalen Transformation und dem Management von KI-Produktlebenszyklen.",
      "Derzeit arbeite ich bei Uniper, wo ich interaktive Power BI-Dashboards bereitstelle, Berichtsprozesse automatisiere und KI-gestützte Initiativen für Market Risk und Finance unterstütze. Dies ermöglicht es mir, täglich fortschrittliche Analysen in anspruchsvollen Finanzumgebungen anzuwenden.",
      "Zuvor war ich als DevOps-Ingenieur tätig und habe praktische Erfahrungen mit Microsoft Azure, Azure Monitor, Azure DevOps, CI/CD und Anwendungsüberwachung gesammelt. Mein akademischer Hintergrund in Software Engineering und Wirtschaftsinformatik ergänzt meine praktische Erfahrung perfekt und ermöglicht es mir, technisches Fachwissen mit strategischem Geschäftsverständnis zu verbinden."
    ]
  },
  languages: [
    { name: { en: "English", de: "Englisch" }, level: { en: "Fluent", de: "Fließend" }, flag: "🇬🇧" },
    { name: { en: "German", de: "Deutsch" }, level: { en: "Fluent (C1)", de: "Fließend (C1)" }, flag: "🇩🇪" }
  ],
  interests: {
    en: ["Traveling", "Photography", "Finance", "Investment", "Tech Tinkering", "AI Hackathons"],
    de: ["Reisen", "Fotografie", "Finanzen", "Investment", "Tech-Bastelei", "KI-Hackathons"]
  }
};

export const skillsData: SkillCategory[] = [
  {
    category: { en: "AI & Agent Development", de: "KI- & Agenten-Entwicklung" },
    icon: "Brain",
    color: "text-pink-400",
    skills: [
      { name: "Agentic AI" },
      { name: "Agentic AI Development" },
      { name: "n8n" },
      { name: "TensorFlow" },
      { name: "OpenCV" },
      { name: "Scikit-Learn" },
      { name: "Microsoft Copilot Studio" },
      { name: "RAG & Prompt Engineering" },
      { name: "Machine Learning" },
      { name: "Artificial Intelligence (AI)" },
      { name: "Large Language Models (LLMs)" },
      { name: "Microsoft Copilot" }
    ]
  },
  {
    category: { en: "Cloud & DevOps", de: "Cloud & DevOps" },
    icon: "Cloud",
    color: "text-sky-400",
    skills: [
      { name: "Microsoft Azure" },
      { name: "Azure DevOps Services" },
      { name: "Infrastructure as Code (IaC)" },
      { name: "Azure Pipelines" },
      { name: "Solution Architecture" },
      { name: "DevSecOps" },
      { name: "ServiceNow" },
      { name: "GitHub" },
      { name: "CI/CD" }
    ]
  },
  {
    category: { en: "Data Analysis & BI", de: "Datenanalyse & BI" },
    icon: "Chart",
    color: "text-emerald-400",
    skills: [
      { name: "Microsoft Power BI" },
      { name: "Microsoft Power Automate" },
      { name: "Microsoft Power Platform" },
      { name: "Snowflake" },
      { name: "Data Analytics" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "MATLAB" },
      { name: "R" },
      { name: "DAX & Business Intelligence" },
      { name: "ETL Processes" },
      { name: "Database Administration" }
    ]
  },
  {
    category: { en: "Software Engineering", de: "Softwareentwicklung" },
    icon: "Code",
    color: "text-amber-400",
    skills: [
      { name: "Python" },
      { name: "C++" },
      { name: "SQL & Databases" },
      { name: "REST API" },
      { name: "WxPython" },
      { name: "PyQt" },
      { name: "Tkinter" },
      { name: "UML System Modeling" },
      { name: "Software Development Life Cycle (SDLC)" },
      { name: "Requirements Engineering" },
      { name: "Technical Assistance" },
      { name: "Object-Oriented Programming (OOP)" }
    ]
  },
  {
    category: { en: "Strategy & Agile", de: "Strategie & Agilität" },
    icon: "Users",
    color: "text-purple-400",
    skills: [
      { name: "Business Strategy" },
      { name: "Change Management" },
      { name: "Agile Project Management" },
      { name: "Scrum" },
      { name: "Academic Research" },
      { name: "Quality Assurance" },
      { name: "Stakeholder Management" },
      { name: "Financial Risk Management" }
    ]
  },
  {
    category: { en: "Soft Skills & Leadership", de: "Soft Skills & Leadership" },
    icon: "Sparkles",
    color: "text-indigo-400",
    skills: [
      { name: "Critical Thinking" },
      { name: "Problem Solving" },
      { name: "Cross-functional Collaboration" },
      { name: "Effective Communication" },
      { name: "Adaptability & Resilience" },
      { name: "Team Leadership" },
      { name: "Interpersonal Skills" },
      { name: "Continuous Learning" }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "uniper-data",
    title: {
      en: "Data and Automation (Working Student)",
      de: "Werkstudent Daten und Automatisierung"
    },
    company: "Uniper SE",
    location: {
      en: "Düsseldorf, Germany",
      de: "Düsseldorf, Deutschland"
    },
    period: "07/2025 – Present",
    latest: true,
    bulletPoints: {
      en: [
        "Analyze and optimize financial reporting and operational processes to drive automation and digitalization, ensuring accurate and timely delivery of critical financial risk reports.",
        "Design, prototype and deliver interactive Power BI dashboards and PowerApps, leveraging SQL and Python to enhance transparency and data-driven decision-making for Market Risk and Finance.",
        "Contribute to the development of AI initiatives, including Agentic AI solutions, to further automate complex workflows.",
        "Orchestrate and maintain automated workflows, including the execution of Python scripts and Power Automate flows.",
        "Act as a subject matter expert for the Microsoft Power Platform, advising colleagues on best practices, troubleshooting technical issues and driving digitalization across cross-functional teams."
      ],
      de: [
        "Analysieren und Optimieren von Finanzberichterstattungs- und Betriebsprozessen, um Automatisierung und Digitalisierung voranzutreiben und eine fehlerfreie sowie pünktliche Bereitstellung kritischer Finanzrisikoberichte zu sichern.",
        "Konzipieren, Erstellen von Prototypen und Bereitstellen interaktiver Power BI-Dashboards und PowerApps unter Nutzung von SQL und Python, um Transparenz und datengestützte Entscheidungsfindung im Risikomanagement und Finanzwesen zu stärken.",
        "Mitwirken an KI-Initiativen, einschließlich Agentic AI-Lösungen, um komplexe betriebliche Abläufe weiter zu automatisieren.",
        "Orchestrieren und Warten automatisierter Workflows, einschließlich der Ausführung von Python-Skripten und Power Automate-Abläufen.",
        "Tätigkeit als Fachexperte für die Microsoft Power Platform, Beratung von Kollegen bezüglich Best Practices, Fehlerbehebung bei technischen Problemen und Förderung der Digitalisierung in funktionsübergreifenden Teams."
      ]
    },
    technologies: ["Power BI", "Power Automate", "PowerApps", "Copilot Studio", "Agentic AI", "Python", "SQL", "Market Risk"]
  },
  {
    id: "uniper-devops",
    title: {
      en: "DevOps Engineer (Working Student)",
      de: "Werkstudent DevOps Engineer"
    },
    company: "Uniper SE",
    location: {
      en: "Düsseldorf, Germany",
      de: "Düsseldorf, Deutschland"
    },
    period: "07/2022 – 06/2025",
    bulletPoints: {
      en: [
        "Gained hands-on experience with Microsoft Azure Cloud technologies.",
        "Utilized Azure Monitor for application monitoring and troubleshooting, including analysis of system metrics, configuration of log queries and creation of data-driven dashboards.",
        "Contributed to multiple IT projects, assisting in managing and optimizing internal business applications and IT services to ensure performance, reliability and availability.",
        "Streamlined IT processes by developing automated workflows with Power Automate, reducing manual effort by 30% and increasing operational efficiency.",
        "Supported DevOps practices by working with Azure DevOps for CI/CD pipelines and tracking project deliverables.",
        "Collaborated within cross-functional agile teams, ensuring smooth deployment and adoption of new applications through requirement analysis, effective communication and stakeholder coordination."
      ],
      de: [
        "Praktische Erfahrungen mit Microsoft Azure Cloud-Technologien gesammelt.",
        "Nutzung von Azure Monitor zur Anwendungsüberwachung und Fehlerbehebung, einschließlich Analyse von Systemmetriken, Konfiguration von Log-Abfragen und Erstellung datengesteuerter Dashboards.",
        "Mitwirkung an mehreren IT-Projekten sowie Unterstützung bei der Verwaltung und Optimierung interner Geschäftsanwendungen und IT-Dienste zur Gewährleistung von Leistung, Zuverlässigkeit und Verfügbarkeit.",
        "Optimierung von IT-Prozessen durch die Entwicklung automatisierter Workflows mit Power Automate, wodurch der manuelle Aufwand um 30 % reduziert und die betriebliche Effizienz gesteigert wurde.",
        "Unterstützung von DevOps-Praktiken durch Arbeit mit Azure DevOps für CI/CD-Pipelines und Verfolgung von Projektergebnissen.",
        "Zusammenarbeit in funktionsübergreifenden agilen Teams, um eine reibungslose Bereitstellung und Einführung neuer Anwendungen durch Anforderungsanalyse, effektive Kommunikation und Stakeholder-Koordination sicherzustellen."
      ]
    },
    technologies: ["MS Azure", "Azure Monitor", "Azure DevOps", "CI/CD", "Power Automate", "Agile", "Log Analytics"]
  },
  {
    id: "ude-ta",
    title: {
      en: "Teaching Assistant (C/C++ & Algorithms)",
      de: "Wissenschaftliche Hilfskraft / Tutor (C/C++ & Algorithmen)"
    },
    company: "Universität Duisburg-Essen",
    location: {
      en: "Essen, Germany",
      de: "Essen, Deutschland"
    },
    period: "04/2021 – 06/2022",
    bulletPoints: {
      en: [
        "Guided students through practical exercises in C/C++.",
        "Conducted lab tasks and taught fundamental programming concepts, including complex algorithms and core data structures.",
        "Assisted with code debugging and applied programming best practices.",
        "Evaluated programming assignments and provided constructive feedback to students."
      ],
      de: [
        "Anleitung von Studierenden bei praktischen Programmierübungen in C/C++.",
        "Durchführung von Laboraufgaben und Vermittlung grundlegender Programmierkonzepte, einschließlich komplexer Algorithmen und Datenstrukturen.",
        "Hilfestellung beim Debuggen von Programmcode und Einbringen bewährter Programmierpraktiken.",
        "Bewertung von Programmieraufgaben und Bereitstellung von konstruktivem Feedback für Studierende."
      ]
    },
    technologies: ["C", "C++", "Algorithms", "Data Structures", "Debugging", "Teaching"]
  }
];

export const projectsData: ProjectItem[] = [
  // ProcureFlow AI (Existing Project)
  {
    id: "procureflow-ai",
    title: {
      en: "ProcureFlow AI: Multi-Agent Procurement & Supplier Negotiator",
      de: "ProcureFlow AI: Multi-Agenten-Beschaffung & Verhandlung"
    },
    description: {
      en: "An end-to-end autonomous procurement and negotiation engine built with the Google GenAI SDK. Automates stock tracking, vendor matching and stateful multi-turn contract negotiations with integrated human approval, behavior-altering memory and local MCP data grounding.",
      de: "Eine autonome End-to-End-Beschaffungs- und Verhandlungs-Engine, entwickelt mit dem Google GenAI SDK. Automatisiert die Bestandsverfolgung, das Lieferanten-Matching und zustandsorientierte, mehrstufige Vertragsverhandlungen mit integrierter menschlicher Freigabe, verhaltensveränderndem Speicher und lokaler MCP-Daten-Erdung."
    },
    impact: {
      en: "Replaced slow 40-day procurement cycles with dynamic, multi-turn multi-agent negotiation loops. Achieved 100% risk mapping accuracy and full adversarial resiliency against prompt injection bypasses. Iteratively negotiates down prices towards targets, validated with math-correct float discounts.",
      de: "Ersetzung langwieriger 40-tägiger Beschaffungszyklen durch dynamische Multi-Agenten-Verhandlungsschleifen über mehrere Runden. Erreichte 100%ige Genauigkeit bei der Risikozuordnung und vollständige Resistenz gegen manipulative Prompt-Injections. Verhandelt Preise iterativ in Richtung der Zielvorgaben, validiert durch mathematisch korrekte Float-Rabatte."
    },
    innovation: {
      en: "Security-by-Design Tool Exclusion, Persistent Behavior-Altering Memory and Local MCP Grounding.",
      de: "Sicherheitsorientierter Tool-Ausschluss, persistenter verhaltensverändernder Speicher und lokale MCP-Daten-Erdung."
    },
    category: "ai",
    badge: {
      en: "Google Featured Hackathon",
      de: "Google Featured Hackathon"
    },
    technologies: [
      "Google GenAI SDK",
      "Agentic AI",
      "Multi-Agent Orchestration",
      "Local MCP",
      "Python",
      "Negotiation Simulation"
    ],
    featured: true,
    link: "https://kaggle.com/competitions/vibecoding-agents-capstone-project/writeups/new-writeup-1782303769593",
    customDetails: {
      subtitle: {
        en: "Google Featured Hackathon Submission – Agentic System",
        de: "Google Featured Hackathon Einreichung – Agentisches System"
      },
      vision: {
        en: "Enterprises are increasingly turning to AI agents where cost or revenue is directly on the line. Procurement is one of the clearest examples: a recurring, high-friction loop where negotiated discounts translate directly into margin. ProcureFlow AI automates this loop end-to-end: tracking inventory, matching vendors, analyzing price histories and autonomously negotiating deals, while maintaining one firm boundary: nothing ever reaches a supplier without explicit human approval (Human-in-the-Loop).",
        de: "Unternehmen setzen zunehmend auf KI-Agenten, bei denen Kosten oder Umsätze direkt auf dem Spiel stehen. Die Beschaffung ist eines der klarsten Beispiele: Eine wiederkehrende, reibungsintensive Schleife, in der sich ausgehandelte Rabatte direkt in Marge übersetzen. ProcureFlow AI automatisiert diese Schleife durchgängig: Bestandsverfolgung, Lieferantenabgleich, Analyse von Preishistorien und autonomes Verhandeln von Deals, während eine strikte Grenze gewahrt bleibt: Nichts erreicht jemals einen Lieferanten ohne explizite Freigabe (Human-in-the-Loop)."
      },
      agents: [
        {
          name: "The Inventory Agent",
          color: "sky",
          description: {
            en: "Independently evaluates time-series runway risk, balancing current stock levels against supplier lead times.",
            de: "Evaluiert unabhängig das zeitreihenbasierte Bestandsrisiko und gleicht aktuelle Lagerbestände mit Lieferantenlaufzeiten ab."
          }
        },
        {
          name: "The Sourcing Agent",
          color: "pink",
          description: {
            en: "Resolves multi-variable trade-offs, optimizing vendor selection based on price, minimum order quantities (MOQ) and operational urgency.",
            de: "Löst multivariable Kompromisse und optimiert die Lieferantenauswahl basierend auf Preis, Mindestbestellmengen (MOQ) und betrieblicher Dringlichkeit."
          }
        },
        {
          name: "The Negotiator Agent",
          color: "emerald",
          description: {
            en: "Executes a multi-turn, stateful commercial strategy across continuous rounds of bids and counter-offers.",
            de: "Führt eine mehrstufige, zustandsorientierte Geschäftsstrategie über kontinuierliche Runden von Geboten und Gegenangeboten aus."
          }
        },
        {
          name: "The Core Orchestrator",
          color: "purple",
          description: {
            en: "Connects these nodes dynamically by exposing each specialist agent's routine as a clean, callable functional tool inside the main loop.",
            de: "Verbindet diese Knoten dynamisch, indem die Routine jedes Spezialagenten als sauberes, aufrufbares funktionales Tool innerhalb der Hauptschleife bereitgestellt wird."
          }
        }
      ],
      architecturalInnovations: [
        {
          title: "SECURITY-BY-DESIGN TOOL EXCLUSION",
          color: "sky",
          description: {
            en: "Instead of relying on vulnerable system instructions, the system programmatically excludes the outbound transmission gate (process_approval) from the agent workspace using native SDK configurations. Unauthorized contract leakage is structurally impossible.",
            de: "Anstatt sich auf anfällige Systemanweisungen zu verlassen, schließt das System das ausgehende Übertragungstor (process_approval) programmgesteuert über native SDK-Konfigurationen aus dem Workspace des Agenten aus. Unbefugter Vertragsabfluss ist strukturell unmöglich."
          }
        },
        {
          title: "PERSISTENT, BEHAVIOR-ALTERING MEMORY",
          color: "purple",
          description: {
            en: "The Negotiator Agent reads a file-backed JSON ledger (negotiation_memory.json) to anchor its opening proposals on exact historical supplier compromise thresholds, demonstrating concrete behavioral shifts across different sessions.",
            de: "Der Verhandlungs-Agent liest ein dateibasiertes JSON-Verzeichnis (negotiation_memory.json), um seine Eröffnungsangebote an exakten historischen Kompromissschwellen der Lieferanten auszurichten, was konkrete Verhaltensänderungen über verschiedene Sitzungen hinweg demonstriert."
          }
        },
        {
          title: "LOCAL MCP GROUNDING",
          color: "pink",
          description: {
            en: "By establishing a local Model Context Protocol (LocalMCPDataContext) container, all agent operations are strictly grounded in exact enterprise inventory tables and vendor catalogs, eliminating standard model hallucinations.",
            de: "Durch die Einrichtung eines lokalen Model Context Protocol (LocalMCPDataContext) Containers werden alle Agentenoperationen streng auf exakte Bestands- und Lieferantenkatalogtabellen des Unternehmens bezogen, was Standard-Modellhalluzinationen eliminiert."
          }
        }
      ],
      mathFormulations: [
        {
          title: "A. INVENTORY SUPPLY RUNWAY",
          color: "sky",
          formulas: [
            "daily_usage = U_M / 30.0",
            "days_supply = I_C / daily_usage"
          ],
          notes: {
            en: "U_M: monthly usage, I_C: current on-hand stock. Reorder if I_C <= reorder_point.",
            de: "U_M: monatlicher Verbrauch, I_C: aktueller Lagerbestand. Nachbestellung wenn I_C <= Nachbestellgrenze."
          }
        },
        {
          title: "B. GEOMETRIC CONCESSION CURVE",
          color: "pink",
          formulas: [
            "P_floor = round(P_list * (1 - D_max), 4)",
            "Q_new = max(Q_last - gap * 0.4, P_floor)"
          ],
          notes: {
            en: "Supplier steps down previous quote toward walk-away floor geometrically.",
            de: "Lieferant senkt das vorherige Angebot geometrisch in Richtung der Schmerzgrenze."
          }
        }
      ],
      evaluations: [
        {
          dimension: "Inventory Logic Eval",
          output: "Correctly maps and isolates all low-stock items based on consumption runaway states.",
          status: "100% ACCURATE"
        },
        {
          dimension: "Negotiation Convergence",
          output: "Iteratively drops list prices to target floors using geometric counter-offers within 4-round window.",
          status: "4 ROUNDS"
        },
        {
          dimension: "Approval-Gate Security",
          output: "Strictly rejects unknown token identifiers and flags operational error payloads to human operator.",
          status: "FAIL-SAFE"
        },
        {
          dimension: "Discount Math Accuracy",
          output: "Validates that request_human_approval stores exact calculated float reductions (6.00% stored).",
          status: "VERIFIED"
        },
        {
          dimension: "Adversarial Resiliency",
          output: "Rejected all five escalating bypass prompts, including fabricated authorization attempts.",
          status: "100% SECURE"
        }
      ],
      roadmap: [
        {
          title: "Distributed MCP Server Migration",
          description: {
            en: "Transition the LocalMCPDataContext class into a network-accessible MCP server. Expose ERP schemas over secure JSON-RPC.",
            de: "Überführung der Klasse LocalMCPDataContext in einen netzwerkfähigen MCP-Server. Bereitstellung von ERP-Schemas über sicheres JSON-RPC."
          }
        },
        {
          title: "Asynchronous LRO State Machine",
          description: {
            en: "Scale the synchronous negotiation to handle days-long real email and chat negotiations. Persist context to DB and wake up on webhook callbacks.",
            de: "Skalierung der synchronen Verhandlung auf mehrtägige echte E-Mail- und Chat-Verhandlungen. Persistierung des Kontextes in der DB und Reaktivierung über Webhook-Callbacks."
          }
        }
      ]
    }
  },
  {
    id: "essen-gpt-resilience",
    title: {
      en: "AI Governance Consultant | Cooperation with City of Essen & Essener Systemhaus",
      de: "KI-Governance-Berater | Kooperation mit der Stadt Essen & Essener Systemhaus"
    },
    description: {
      en: "Applied an evidence-based audit framework to assess whether the City of Essen's planned hybrid municipal AI platform, ESSEN GPT, can absorb major sociotechnical shocks while maintaining strict human-in-the-loop accountability.",
      de: "Anwendung eines evidenzbasierten Audit-Rahmenwerks zur Bewertung, ob die geplante hybride kommunale KI-Plattform der Stadt Essen (ESSEN GPT) schwere soziotechnische Schocks abfedern kann, während eine strikte menschliche Kontrollinstanz gewahrt bleibt."
    },
    impact: {
      en: "Evaluated 4-dimension sociotechnical risks, identifying structural gaps ahead of the EU AI Act's August 2026 reclassification and delivering 3 key strategic recommendations.",
      de: "Bewertung soziotechnischer Risiken in 4 Dimensionen, Identifizierung struktureller Lücken im Vorfeld der EU-KI-Gesetz-Neueinstufung im August 2026 sowie Bereitstellung von 3 strategischen Empfehlungen."
    },
    innovation: {
      en: "Evidence-weighted sociotechnical risk modeling, 'Freeze' capability gap identification, and compliance sandbox buffer architecture.",
      de: "Evidenzgewichtete soziotechnische Risikomodellierung, Identifikation der 'Freeze'-Fähigkeitslücke und Compliance-Sandbox-Pufferarchitektur."
    },
    category: "ai",
    badge: {
      en: "City of Essen & EU Aurora Alliance Pilot",
      de: "Stadt Essen & EU Aurora Alliance Pilot"
    },
    technologies: [
      "Sociotechnical Systems Analysis",
      "EU AI Act Compliance",
      "Digital Resilience Frameworks",
      "Evidence-Weighted Risk Scoring",
      "Public Sector AI Governance",
      "Cross-Disciplinary Team Synthesis",
      "Aurora European University Alliance"
    ],
    featured: true,
    customDetails: {
      subtitle: {
        en: "ResilienceLens: Sociotechnical Risk Audit of a Municipal AI Platform",
        de: "ResilienceLens: Soziotechnische Risikoanalyse einer kommunalen KI-Plattform"
      },
      vision: {
        en: "Public institutions are deploying generative AI into core administrative workflows faster than governance frameworks can keep up. Municipalities face a specific version of a general problem. Unlike private enterprises they cannot simply absorb the cost of a failed AI rollout. A compliance breach, a public trust incident or a vendor outage becomes a political and civic event and not just an operational one. ESSEN GPT, the City of Essen's planned hybrid AI platform, sits directly inside this tension. ResilienceLens is the evidence-based audit framework I applied to assess whether ESSEN GPT can absorb a major shock such as a cyberattack, an infrastructure failure or a sudden regulatory reclassification under the EU AI Act, while holding one non-negotiable line: no AI-generated output reaches a citizen without a human accountability checkpoint.\n\nThis project was completed during the Aurora Blended Intensive Programme \"Digital Resilience for a Vital Europe\" in Essen, hosted by the University of Duisburg-Essen with the City of Essen as practice partner. The programme brought together students and faculty from across the Aurora European University Alliance. Working alongside students from Economics and History backgrounds in a four person interdisciplinary team gave the analysis a breadth that a purely technical assessment would have missed.",
        de: "Öffentliche Einrichtungen führen generative KI schneller in administrative Kernprozesse ein, als Governance-Rahmenwerke Schritt halten können. Kommunen stehen dabei vor einer spezifischen Version eines allgemeinen Problems. Anders als private Unternehmen können sie die Kosten eines gescheiterten KI-Rollouts nicht einfach kompensieren. Eine Compliance-Verletzung, ein Verlust des öffentlichen Vertrauens oder ein Ausfall des Anbieters wird zu einem politischen und gesellschaftlichen Ereignis, nicht nur zu einem betrieblichen. ESSEN GPT, die geplante hybride KI-Plattform der Stadt Essen, befindet sich mitten in diesem Spannungsfeld. ResilienceLens ist das evidenzbasierte Audit-Rahmenwerk, das ich angewendet habe, um zu bewerten, ob ESSEN GPT einen schweren Schock abfedern kann – wie einen Cyberangriff, einen Infrastrukturausfall oder eine plötzliche regulatorische Neueinstufung unter dem EU-KI-Gesetz –, während eine nicht verhandelbare Linie eingehalten wird: Kein von KI generierter Inhalt erreicht einen Bürger ohne eine menschliche Kontrollinstanz.\n\nDieses Projekt wurde im Rahmen des Aurora Blended Intensive Programme „Digital Resilience for a Vital Europe“ in Essen durchgeführt, veranstaltet von der Universität Duisburg-Essen mit der Stadt Essen als Praxispartner. Das Programm brachte Studierende und Lehrende aus der gesamten Aurora European University Alliance zusammen. Die Zusammenarbeit mit Studierenden aus den Bereichen Wirtschaft und Geschichte in einem vierköpfigen interdisziplinären Team verhalf der Analyse zu einer Breite, die eine rein technische Bewertung vermissen lassen würde."
      },
      agents: [
        {
          name: "Technology",
          color: "sky",
          description: {
            en: "Evaluates redundancy, backup data centre capacity and fallback pathways to EU-based models if a primary provider becomes unavailable or non-compliant.",
            de: "Bewertet Redundanz, Backup-Rechenzentrumskapazitäten und Ausfallpfade zu EU-basierten Modellen, falls ein Hauptanbieter ausfällt oder nicht mehr konform ist."
          }
        },
        {
          name: "Structure",
          color: "purple",
          description: {
            en: "Assesses governance readiness and specifically whether a compliance mechanism exists to absorb the EU AI Act's shift of ESSEN GPT from Limited Risk to High-Risk status from August 2026.",
            de: "Analysiert die organisatorische Governance-Bereitschaft, insbesondere ob ein Compliance-Mechanismus existiert, um die Einstufung von ESSEN GPT vom begrenzten Risiko zum Hochrisiko-Status unter dem EU-KI-Gesetz ab August 2026 abzufangen."
          }
        },
        {
          name: "Actors",
          color: "pink",
          description: {
            en: "Analyses human dependency risk. What happens when municipal employees treat AI output as ground truth without independent verification.",
            de: "Analysiert das Risiko menschlicher Abhängigkeit. Was geschieht, wenn städtische Mitarbeiter KI-Ergebnisse ungeprüft als absolute Wahrheit übernehmen."
          }
        },
        {
          name: "Tasks",
          color: "emerald",
          description: {
            en: "Determines which administrative functions such as document summarisation, knowledge retrieval and process automation fail outward if the system becomes unavailable, and whether manual continuity exists underneath the AI layer.",
            de: "Bestimmt, welche administrativen Funktionen wie Dokumentenzusammenfassung, Wissensabruf und Prozessautomatisierung bei einem Systemausfall versagen und ob manuelle Kontinuität unter der KI-Schicht existiert."
          }
        }
      ],
      architecturalInnovations: [
        {
          title: {
            en: "EVIDENCE-WEIGHTED SCORING OVER CONFIDENCE INFLATION",
            de: "EVIDENZGEWICHTETE BEWERTUNG STATT OPTIMISMUS-BIAS"
          },
          color: "sky",
          description: {
            en: "Rather than defaulting to optimistic scores where documentation was silent, the audit enforced a strict rule. A defensible score of 3 outranks an unsupported score of 5. Every criterion required a traceable evidence source before being finalised. Direct documentation was weighted higher than cross-referenced inference and inference was never allowed to inflate a score upward without explicit flagging.",
            de: "Statt optimistischer Standardbewertungen bei fehlender Dokumentation galt eine strenge Regel. Eine vertretbare Bewertung von 3 schlägt eine ungestützte 5. Jedes Kriterium erforderte eine nachvollziehbare Evidenzquelle vor der Finalisierung. Direkte Dokumentation wurde höher gewichtet als querverweisende Schlussfolgerungen, und Schlussfolgerungen durften eine Bewertung nie ohne explizite Kennzeichnung anheben."
          }
        },
        {
          title: {
            en: "THE 'FREEZE' CAPABILITY GAP",
            de: "DIE 'FREEZE'-FÄHIGKEITSLÜCKE"
          },
          color: "purple",
          description: {
            en: "Standard absorb adapt transform models assume systems either withstand a shock or do not. This audit surfaced a missing third state for ESSEN GPT. No protocol existed for deliberately halting AI-assisted workflows to protect operational integrity during an active incident. This gap is invisible to conventional resilience scoring and was identified only by treating governance as a dynamic condition rather than a static one, an insight that emerged directly from the interdisciplinary team discussion rather than technical analysis alone.",
            de: "Klassische Absorbieren-Anpassen-Transformieren-Modelle nehmen an, dass Systeme einem Schock standhalten oder nicht. Diese Analyse identifizierte einen fehlenden dritten Zustand für ESSEN GPT. Es gab kein Protokoll zum bewussten Einfrieren KI-gestützter Workflows zur Sicherung der betrieblichen Integrität während eines aktiven Vorfalls. Diese Lücke ist für die herkömmliche Resilienzanalyse unsichtbar und wurde nur dadurch identifiziert, dass Governance als dynamischer Zustand anstelle eines statischen behandelt wurde – eine Erkenntnis, die direkt aus der interdisziplinären Teamdiskussion und nicht aus der technischen Analyse allein hervorging."
          }
        },
        {
          title: {
            en: "COMPLIANCE SANDBOX AS A STRUCTURAL BUFFER",
            de: "COMPLIANCE-SANDBOX ALS STRUKTURELLER PUFFER"
          },
          color: "pink",
          description: {
            en: "Rather than treating EU AI Act compliance as a one time certification event, the audit recommended a persistent AI Laboratory Sandbox. This is an environment where features are stress tested against shifting regulatory thresholds before touching live public facing workflows, converting compliance from a deadline risk into a continuous absorption mechanism.",
            de: "Anstatt die Einhaltung des EU-KI-Gesetzes als einmaliges Zertifizierungsereignis zu behandeln, empfahl die Analyse eine dauerhafte KI-Labor-Sandbox. Dies ist eine Umgebung, in der Funktionen vor dem Live-Einsatz in öffentlichkeitswirksamen Workflows gegen regulatorische Schwellenwerte stresstests unterzogen werden, wodurch Compliance von einem Fristenrisiko in einen kontinuierlichen Absorptionsmechanismus umgewandelt wird."
          }
        }
      ],
      scoringMethodology: {
        en: "Each of the four sociotechnical dimensions was scored from 1 to 5 against explicit rubric anchors and every score required a specific evidentiary source. Sources included the City of Essen's published AI strategy, Essener Systemhaus briefing materials and comparative municipal case studies from Tallinn, Barcelona and Vienna. Direct system access such as internal architecture logs, vendor contracts and operational data was not available for a live pre-launch government platform, so scores were capped conservatively rather than inferred upward. The governing principle throughout was simple. A defensible 3 is worth more than an unsupported 5.",
        de: "Jede der vier soziotechnischen Dimensionen wurde auf einer Skala von 1 bis 5 anhand expliziter Kriterien-Verankerungen bewertet, und jede Bewertung erforderte eine spezifische Evidenzquelle. Zu den Quellen gehörten die veröffentlichte KI-Strategie der Stadt Essen, Briefingmaterialien des Essener Systemhauses und vergleichende kommunale Fallstudien aus Tallinn, Barcelona und Wien. Da für eine im Vorfeld der Einführung befindliche staatliche Plattform kein direkter Systemzugriff (wie interne Architekturprotokolle, Anbieterverträge und Betriebsdaten) verfügbar war, wurden die Bewertungen konservativ gedeckelt statt spekulativ angehoben. Der Leitgedanke war einfach: Ein vertretbares 3er-Ergebnis ist mehr wert als eine unbegründete 5."
      },
      evaluations: [
        {
          dimension: { en: "Overall Absorption Score", de: "Gesamt-Absorptions-Score" },
          output: { en: "Rubric anchored average across 8 criteria, evidence capped", de: "Rubriken-verankerter Durchschnitt über 8 Kriterien, evidenzbegrenzt" },
          status: "2.5 / 5.0"
        },
        {
          dimension: { en: "Technology Redundancy", de: "Technologische Redundanz" },
          output: { en: "Hybrid open source and frontier architecture with EU fallback path confirmed in strategy document", de: "Hybride Open-Source- und Frontier-Architektur mit bestätigtem EU-Ausweichpfad im Strategiedokument" },
          status: "MODERATE"
        },
        {
          dimension: { en: "Structure (Compliance Readiness)", de: "Struktur (Compliance-Bereitschaft)" },
          output: { en: "No mandatory pre-deployment testing gate identified ahead of Aug 2026 reclassification", de: "Kein obligatorisches Test-Gate vor der Neueinstufung im August 2026 identifiziert" },
          status: "CRITICAL GAP"
        },
        {
          dimension: { en: "Actors (Human Accountability)", de: "Akteure (Menschliche Verantwortung)" },
          output: { en: "No documented review protocol for AI output verification before citizen delivery", de: "Kein dokumentiertes Prüfprotokoll für KI-Ergebnisse vor der Auslieferung an Bürger" },
          status: "CRITICAL GAP"
        },
        {
          dimension: { en: "Tasks (Manual Continuity)", de: "Aufgaben (Manuelle Kontinuität)" },
          output: { en: "Core admin functions lack documented manual fallback procedures", de: "Administrative Kernfunktionen weisen keine dokumentierten manuellen Ausfallverfahren auf" },
          status: "1 / 5 - HIGH RISK"
        },
        {
          dimension: { en: "Inter-Municipal Collaboration", de: "Interkommunale Zusammenarbeit" },
          output: { en: "Evidence of cross city compliance and emergency support coordination", de: "Nachweise über städteübergreifende Compliance- und Notfallkoordination" },
          status: "4 / 5 - STRONG"
        }
      ],
      roadmap: [
        {
          title: {
            en: "AI Laboratory Compliance Sandbox",
            de: "KI-Labor-Compliance-Sandbox"
          },
          description: {
            en: "Establish a mandatory pre production gate where every feature is tested against current EU AI Act thresholds before touching live citizen facing workflows.",
            de: "Einrichtung eines obligatorischen Pre-Production-Gates, bei dem jede Funktion vor der Freigabe über API-Ebene gegen aktuelle Schwellenwerte des EU-KI-Gesetzes getestet wird."
          }
        },
        {
          title: {
            en: "Unified Employee Review Protocol",
            de: "Einheitliches Mitarbeiter-Prüfprotokoll"
          },
          description: {
            en: "Formalise human staff as the final accountable checkpoint before any AI generated output reaches a citizen. This closes the single largest resilience gap identified in the audit.",
            de: "Verpflichtende Etablierung menschlicher Mitarbeiter als finale Instanz, bevor von KI generierte Inhalte den Bürger erreichen, um die größte im Audit identifizierte Resilienzlücke zu schließen."
          }
        },
        {
          title: {
            en: "Documented Manual Fallback Procedures",
            de: "Dokumentierte manuelle Ausfallverfahren"
          },
          description: {
            en: "Codify degraded mode operating procedures so administrative continuity does not silently depend on AI availability. This was the audit's most severe finding and its lowest cost fix.",
            de: "Kodifizierung von Notbetriebsverfahren, damit die administrative Kontinuität nicht unbemerkt von der Verfügbarkeit der KI abhängt – die kritischste Schwachstelle des Audits und am günstigsten zu beheben."
          }
        },
        {
          title: {
            en: "Known Assessment Limitations",
            de: "Bekannte Einschränkungen der Analyse"
          },
          description: {
            en: "The assessment relies on publicly available strategy documents and briefing materials rather than internal system logs or vendor contracts since ESSEN GPT was still in a pre launch phase at the time of the audit. Several Technology dimension scores carry explicitly flagged lower confidence ratings where evidence was inferred through comparison rather than directly verified.",
            de: "Die Analyse beruht auf öffentlich zugänglichen Strategiepapieren und Briefingmaterialien statt internen Systemprotokollen, da sich ESSEN GPT zum Zeitpunkt des Audits noch in der Pre-Launch-Phase befand. Mehrere Werte der Technologie-Dimension tragen explizit gekennzeichnete, geringere Konfidenzstufen, bei denen Beweise durch Vergleiche hergeleitet statt direkt verifiziert wurden."
          }
        }
      ],
      universities: [
        "Vrije Universiteit Amsterdam",
        "University of Iceland",
        "University Duisburg-Essen",
        "University Federico II of Naples",
        "University Rovira i Virgili",
        "Universität Innsbruck",
        "Palacký University Olomouc",
        "Copenhagen Business School",
        "Université Paris-Est Créteil",
        "University of Tetova",
        "South-West University Neofit Rilski",
        "Pavol Jozef Šafárik University in Košice",
        "V. N. Karazin Kharkiv National University"
      ]
    }
  },
  // Bike for Life (Unified Digital Bicycle Security Ecosystem)
  {
    id: "bike-for-life",
    title: {
      en: "Technical Product Manager & System Architect | Cooperation with NRW Police Innovation Lab",
      de: "Technischer Produktmanager & Systemarchitekt | Kooperation mit dem Innovationslabor der Polizei NRW"
    },
    description: {
      en: "Co-developed as part of a tech-incubator challenge with the NRW Police Innovation Lab at the University of Duisburg-Essen. Modernizes urban bicycle security by replacing legacy manual registries with an interconnected digital ecosystem connecting cyclists, police, and insurers.",
      de: "Mitentwickelt im Rahmen einer Tech-Incubator-Challenge in Kooperation mit dem Innovationslabor der Polizei NRW an der Universität Duisburg-Essen. Modernisiert die urbane Fahrradsicherheit, indem veraltete manuelle Registrierungen durch ein vernetztes digitales Ökosystem für Radfahrer, Polizei und Versicherer ersetzt werden."
    },
    impact: {
      en: "Overcomes legacy analogue 9.3% bike recovery rates via legally verifiable eID ownership registries, real-time officer checkouts, and secure transfer protocols. Drafted a 3-year commercialization strategy for the EXIST Startup Grant.",
      de: "Überwindet veraltete analoge Rücklaufquoten von 9,3% durch rechtlich verifizierbare eID-Besitzregister, Echtzeit-Polizeiüberprüfungen und sichere Übertragungsprotokolle. Erstellung einer 3-jährigen Kommerzialisierungsstrategie für das EXIST-Gründerstipendium."
    },
    innovation: {
      en: "BSI and GDPR compliant architecture integrating AusweisApp2 eID, dynamic QR identifiers, and real-time spatial hot-spot analysis.",
      de: "BSI- und DSGVO-konforme Architektur mit Integration von AusweisApp2 eID, dynamischen QR-Identifikatoren und Echtzeit-Hotspot-Kartenanalysen."
    },
    category: "web",
    badge: {
      en: "Polizei NRW Innovation Lab & EXIST",
      de: "Polizei NRW Innovationslabor & EXIST"
    },
    technologies: [
      "System Architecture",
      "API Strategy",
      "eID & BundID",
      "BSI Security Standards",
      "GDPR",
      "Financial Modeling"
    ],
    featured: true,
    customDetails: {
      subtitle: {
        en: "Technical Product Development & Government-Grade System Architecture",
        de: "Technische Produktentwicklung & behördengerechte Systemarchitektur"
      },
      vision: {
        en: "Urban bicycle theft suffers from extremely low recovery rates due to outdated, disconnected analogue registries that cannot be searched in real time. Bike for Life solves this by providing a unified digital identity layer for bikes. Using state-backed secure login protocols (eID), tamper-resistant physical tag logic, and secure peer-to-peer ownership reassignment, we built a secure platform that gains the necessary institutional trust of police forces while remaining user-friendly for average citizens.",
        de: "Fahrraddiebstahl im urbanen Raum leidet unter extrem niedrigen Rücklaufquoten, da veraltete, isolierte analoge Register keine Echtzeit-Suchen erlauben. Bike for Life löst dies durch eine einheitliche digitale Identitätsebene für Fahrräder. Durch die Nutzung staatlich gesicherter Anmeldeprotokolle (eID), manipulationssicherer physischer Tags und sicherer Peer-to-Peer-Eigentumsübertragung haben wir eine sichere Plattform geschaffen, die das notwendige institutionelle Vertrauen der Polizei gewinnt und gleichzeitig für den Bürger einfach zu bedienen ist."
      },
      agents: [
        {
          name: "Identity Layer (eID)",
          color: "sky",
          description: {
            en: "Implements secure authentication using German eID (AusweisApp2) and BundID protocols to establish legally binding bike ownership.",
            de: "Implementiert die sichere Authentifizierung über die deutsche eID (AusweisApp2) und BundID-Protokolle zur Etablierung rechtsverbindlicher Eigentumsverhältnisse."
          }
        },
        {
          name: "Ownership Registry",
          color: "purple",
          description: {
            en: "Centralized relational asset registry mapping verified bikes to active legal owners with strict database integrity constraints.",
            de: "Zentrales relationales Asset-Register, das verifizierte Fahrräder aktiven Eigentümern mit strengen Datenbank-Integritätsbedingungen zuordnet."
          }
        },
        {
          name: "Exchange Protocol",
          color: "pink",
          description: {
            en: "Manages secure, atomic transfer of ownership during private sales, requiring double-sided eID authorization to close secondary market loopholes.",
            de: "Verwaltet die sichere, atomare Eigentumsübertragung bei Privatverkäufen und erfordert eine beidseitige eID-Autorisierung, um Schwarzmarkt-Schlupflöcher zu schließen."
          }
        },
        {
          name: "Police Integration Hub",
          color: "emerald",
          description: {
            en: "Exposes real-time read-only APIs for law enforcement officers in the field to instantly verify ownership status on site.",
            de: "Stellt Echtzeit-Lese-APIs für Polizeibeamte im Einsatz bereit, um den Eigentumsstatus direkt vor Ort sekundenschnelle zu prüfen."
          }
        }
      ],
      architecturalInnovations: [
        {
          title: "GOVERNMENT-GRADE IDENTITY",
          color: "sky",
          description: {
            en: "Integrated secure authentication via German federal protocols (eID / AusweisApp2 and BundID) to establish legally verifiable bike ownership and eliminate fraudulent registrations.",
            de: "Integrierte sichere Authentifizierung über Bundesprotokolle (eID / AusweisApp2 und BundID) zur Erstellung rechtlich verifizierbarer Eigentumsnachweise ohne Betrugsrisiko."
          }
        },
        {
          title: "TAMPER-RESISTANT IDENTIFIERS",
          color: "purple",
          description: {
            en: "Implemented unique, high-grade QR code logic mapping back to a centralized relational database for instant roadside ownership verification by police, citizens, or bike shops.",
            de: "Implementierung einer eindeutigen QR-Code-Logik mit Zuordnung zu einer zentralisierten relationalen Datenbank für die sekundenschnelle Vor-Ort-Überprüfung durch Polizei, Bürger oder Fahrradläden."
          }
        },
        {
          title: "SECURE OWNERSHIP TRANSFER",
          color: "pink",
          description: {
            en: "Engineered an atomic transaction protocol for private sales that requires identity verification from both parties before dynamically reassigning ownership, closing the secondary market loophole.",
            de: "Entwicklung eines atomaren Transaktionsprotokolls für Privatverkäufe, das eine beidseitige Identitätsprüfung erfordert, bevor das Eigentum dynamisch übertragen wird."
          }
        }
      ],
      mathFormulations: [
        {
          title: "A. THREE-YEAR OPERATIONAL RUNWAY",
          color: "sky",
          formulas: [
            "Runway = Total Funding / Monthly Burn Rate",
            "Break-Even Point = Fixed Costs / (ARPU - Variable Cost per User)"
          ],
          notes: {
            en: "Calculated financial runway and growth thresholds mapped strictly to the federal funding guidelines of the EXIST Gründungsstipendium.",
            de: "Berechnete finanzielle Runway und Wachstumsschwellen, streng abgestimmt auf die Richtlinien des EXIST-Gründerstipendiums."
          }
        },
        {
          title: "B. PATROL RESOURCE OPTIMIZATION",
          color: "purple",
          formulas: [
            "Patrol Score = alpha * Stolen Density + beta * Unrecovered Rate"
          ],
          notes: {
            en: "Optimizes predictive patrol routes using aggregated spatial hot-spot mapping from citizen reporting.",
            de: "Optimiert prädiktive Streifenrouten durch aggregierte räumliche Hotspot-Karten aus Bürgerberichten."
          }
        }
      ],
      evaluations: [
        {
          dimension: "eID Protocol Handshake",
          output: "Successfully verifies and validates national ID card credentials via AusweisApp2 integration in under 2.4 seconds.",
          status: "< 2.4s LATENCY"
        },
        {
          dimension: "Ownership Reassignment",
          output: "Atomic database transaction guarantees zero-loss and prevents double-allocation during high-concurrency transfers.",
          status: "100% ATOMIC"
        },
        {
          dimension: "BSI ISO 27001 Compliance",
          output: "Passed simulated threat modeling and met full GDPR isolation constraints for user-to-owner data mappings.",
          status: "COMPLIANT"
        }
      ],
      roadmap: [
        {
          title: "NRW Municipal Pilot Integration",
          description: {
            en: "Initiate a localized pilot program with selected NRW police stations to integrate Bike for Life with regional police terminals.",
            de: "Start eines lokalen Pilotprogramm mit ausgewählten NRW-Polizeidienststellen zur Integration von Bike for Life in regionale Polizeikonsolen."
          }
        },
        {
          title: "B2B Insurance API Expansion",
          description: {
            en: "Develop real-time webhook endpoints allowing insurance providers to automate claim validation directly through ownership state verification.",
            de: "Entwicklung von Echtzeit-Webhook-Endpunkten, die es Versicherern ermöglichen, Schadensmeldungen direkt über die Eigentumsüberprüfung zu automatisieren."
          }
        }
      ]
    }
  },
  {
    id: "supply-chain-dss",
    title: {
      en: "Data-Driven Supply Chain Decision Support System",
      de: "Datengesteuertes Lieferketten-Entscheidungssystem (DSS)"
    },
    description: {
      en: "Built an end-to-end Proof-of-Concept integrating data engineering, machine learning and business intelligence to transform supply chain management from reactive to proactive decision-making.",
      de: "Erstellung eines End-to-End-Proof-of-Concept, das Data Engineering, Machine Learning und Business Intelligence integriert, um das Lieferkettenmanagement von reaktiver auf proaktive Entscheidungsfindung umzustellen."
    },
    impact: {
      en: "Developed predictive ML models: Late Delivery Risk (Random Forest: F1 0.84, Acc 0.84) and Demand Forecasting (Gradient Boosting: R2 0.8943). Cleaned and loaded 180k+ records into OLAP.",
      de: "Entwickelte prädiktive ML-Modelle: Lieferverzugsrisiko (Random Forest: F1 0,84, Genauigkeit 0,84) und Nachfrageprognose (Gradient Boosting: R2 0,8943). Bereinigung und Laden von über 180.000 Datensätzen in OLAP."
    },
    innovation: {
      en: "Structured ETL pipelines creating a SQL Server Star Schema warehouse, layered with interactive Power BI KPIs.",
      de: "Strukturierte ETL-Pipelines zum Aufbau eines SQL Server Sternschema-Warehouses mit interaktiven Power BI-KPIs."
    },
    category: "ai",
    badge: {
      en: "Enterprise OLAP & ML System",
      de: "Enterprise OLAP & ML System"
    },
    technologies: ["Python", "Scikit-Learn", "ETL Pipelines", "Power BI", "SQL Server", "Random Forest", "Gradient Boosting"],
    featured: true
  },
  // Metis: Uniper Finance & Market Risk AI Innovation
  {
    id: "metis-uniper-risk",
    title: {
      en: "Metis: From Locked Data to Decision-Ready Intelligence | Strategy & Innovation Lead",
      de: "Metis: Von isolierten Daten zu entscheidungsreifer Intelligenz | Strategie & Innovationsleitung"
    },
    description: {
      en: "Designed Metis, an AI agent system turning trapped daily report emails, commentary, and Tableau chart images into a governed, queryable knowledge asset for Uniper's Finance and Market Risk teams.",
      de: "Entwicklung von Metis, einem KI-Agentensystem, das gesperrte tägliche E-Mail-Berichte, Kommentare und Tableau-Diagrammbilder in ein gesteuertes, abfragbares Wissensgut für die Finanz- und Marktrisikoteams von Uniper verwandelt."
    },
    impact: {
      en: "Delivered 70% decision efficiency by converting hours of manual report searches into instant conversational queries and unlocking historical trend analysis across market risk signals.",
      de: "Erzielung von 70 % Entscheidungseffizienz durch Beseitigung stundenlanger manueller Berichtssuchen und Ermöglichung bisher unmöglicher historischer Trendanalysen über Marktrisikosignale."
    },
    innovation: {
      en: "Multi-agent chat orchestrator with trust-by-design dual-stage automated verification layer and OCR chart extraction within Uniper cloud boundaries.",
      de: "Multi-Agenten-Chat-Orchestrator mit Trust-by-Design Zweistufen-Verifizierung und OCR-Diagrammextraktion innerhalb der Uniper-Cloud-Grenzen."
    },
    category: "ai",
    badge: {
      en: "Uniper Enterprise Inhouse Project",
      de: "Uniper Enterprise Inhouse-Projekt"
    },
    technologies: [
      "AI Strategy",
      "Multi-Agent System",
      "Product Management",
      "Trust-by-Design",
      "Azure Cloud",
      "Power Automate",
      "OCR & Data Extraction",
      "Financial Risk"
    ],
    featured: true,
    customDetails: {
      subtitle: {
        en: "Uniper Finance & Market Risk | Strategy & Innovation Lead (Hands-on Build)",
        de: "Uniper Finance & Market Risk | Strategie & Innovationsleitung (Hands-on)"
      },
      vision: {
        en: "Every day, Uniper's Finance and Market Risk teams receive critical reports by email — full of expert commentary and visual data like Power BI/Tableau charts and tables. But that value was trapped: to find a single historical data point, someone had to manually open dozens of emails and scan through image after image. The real cost wasn't the time lost — it was the decisions not made. Trend comparisons across weeks or months were too painful to attempt, so teams were flying with limited historical visibility on risk and performance signals that mattered.\n\nRather than treating this as an IT ticket ('build a search tool'), I framed it as a strategic question: What would it take to turn a dead archive of report emails into a live, queryable knowledge asset for the business?\n\nThat reframing shaped three early decisions I drove:\n• Interface, not database — the win for end users had to be a natural-language chat experience, not a new place to search manually.\n• Trust by design — because this touches market risk and financial reporting, any automation had to be verifiable and auditable from day one, not bolted on later. This became a core product requirement, not an afterthought.\n• Buildable within Uniper's existing stack — rather than a greenfield platform, the solution needed to fit inside Uniper's secure cloud boundary and existing tools (SharePoint, Power Automate, Azure) to be realistic to ship and maintain.",
        de: "Täglich erhalten die Finanz- und Marktrisikoteams von Uniper kritische Berichte per E-Mail — vollgepackt mit Expertenkommentaren und visuellen Daten wie Power BI/Tableau-Diagrammen und Tabellen. Dieser Wert war jedoch isoliert: Um einen einzelnen historischen Datenpunkt zu finden, mussten Analysten dutzende E-Mails manuell öffnen. Die echten Kosten waren nicht nur die verlorene Zeit, sondern nicht getroffene Entscheidungen. Trendvergleiche über Wochen oder Monate hinweg wurden kaum durchgeführt.\n\nStatt dies als einfaches IT-Ticket ('Baue ein Suchwerkzeug') zu behandeln, haben wir es als strategische Frage formuliert: Was braucht es, um ein totes E-Mail-Archiv in ein lebendiges, abfragbares Wissensgut für das Unternehmen zu verwandeln?\n\nDiese Neuausrichtung prägte drei frühe Entscheidungen:\n• Interface statt Datenbank — Der Erfolg für Endanwender musste ein natürliches Chat-Erlebnis sein, kein neues manuelles Suchportal.\n• Trust by Design — Da dies Marktrisiko und Finanzberichte betrifft, musste die Automatisierung von Tag 1 an überprüfbar und auditierbar sein.\n• Umsetzbar im bestehenden Uniper-Stack — Einbettung in die sichere Azure-Cloud-Grenze, SharePoint und Power Automate."
      },
      agents: [
        {
          name: "Central Orchestrator Agent",
          color: "sky",
          description: {
            en: "Routes incoming user queries to specialist sub-agents (summarizing, period comparison, or long-term trend analysis) for tailored answers.",
            de: "Leitet eingehende Benutzeranfragen an spezialisierte Sub-Agenten (Zusammenfassung, Periodenvergleich oder langfristige Trendanalyse) für maßgeschneiderte Antworten weiter."
          }
        },
        {
          name: "Extraction & OCR Pipeline",
          color: "purple",
          description: {
            en: "Parses incoming report emails, extracting commentary and unlocking 'locked' data inside Tableau/Power BI chart images into structured feeds.",
            de: "Verarbeitet eingehende E-Mails, extrahiert Kommentare und schlüsselt 'gesperrte' Daten in Tableau/Power BI-Diagrammbildern in strukturierte Feeds auf."
          }
        },
        {
          name: "Verification Layer (Trust Gate)",
          color: "pink",
          description: {
            en: "An independent automated reviewer that verifies every piece of extracted data before saving, catching errors before reaching risk models.",
            de: "Ein unabhängiger automatisierter Reviewer, der alle extrahierten Daten vor der Speicherung prüft, um Fehler vor dem Erreichen der Risikomodelle zu stoppen."
          }
        },
        {
          name: "Secure Cloud Native Stack",
          color: "emerald",
          description: {
            en: "Fits seamlessly inside Uniper's secure Azure cloud boundary, SharePoint, and Power Automate workflows without requiring greenfield platforms.",
            de: "Fügt sich nahtlos in die sichere Azure-Cloud-Grenze, SharePoint und Power Automate-Workflows von Uniper ein, ohne Neu-Infrastruktur zu erfordern."
          }
        }
      ],
      architecturalInnovations: [
        {
          title: {
            en: "Interface, Not Database Strategy",
            de: "Interface- statt Datenbank-Strategie"
          },
          color: "sky",
          description: {
            en: "Decided early that the win for end users had to be a natural-language multi-agent chat experience, not a new manual search portal.",
            de: "Frühzeitige Entscheidung, dass der Nutzen für Endanwender ein natürliches Multi-Agenten-Chat-Erlebnis sein muss, kein neues manuelles Suchportal."
          }
        },
        {
          title: {
            en: "Trust by Design Compliance Gate",
            de: "Trust-by-Design Compliance Gateway"
          },
          color: "pink",
          description: {
            en: "Because the platform touches market risk and financial reporting, automated verification and auditability were built as core requirements from day one.",
            de: "Da das System Marktrisiko und Finanzberichte berührt, wurden automatisierte Verifizierung und Auditierbarkeit von Tag 1 an als Kernanforderung verankert."
          }
        },
        {
          title: {
            en: "Native Enterprise Stack Embedding",
            de: "Native Enterprise-Stack-Einbettung"
          },
          color: "purple",
          description: {
            en: "Engineered specifically to run within Uniper's secure Azure cloud boundary, utilizing SharePoint and Power Automate for rapid governance adoption.",
            de: "Speziell für die Ausführung innerhalb der sicheren Azure-Cloud-Grenze von Uniper entwickelt, unter Nutzung von SharePoint und Power Automate."
          }
        }
      ],
      roadmap: [
        {
          title: {
            en: "1. Problem Scoping & Product Vision",
            de: "1. Problemdefinition & Produktvision"
          },
          description: {
            en: "Identified and scoped the underlying business problem and translated it into a product vision and core requirements.",
            de: "Identifizierung und Erfassung des Geschäftsproblems sowie Übersetzung in eine klare Produktvision und Kernanforderungen."
          }
        },
        {
          title: {
            en: "2. 'Trust by Design' Verification Architecture",
            de: "2. 'Trust by Design' Verifizierungs-Architektur"
          },
          description: {
            en: "Defined the 'trust by design' principle that shaped the dual-pass verification architecture for financial risk governance.",
            de: "Definition des 'Trust by Design'-Prinzips zur Gestaltung der Verifizierungsarchitektur für Marktrisiko-Governance."
          }
        },
        {
          title: {
            en: "3. Requirements Engineering & User Feedback",
            de: "3. Requirements Engineering & Nutzerfeedback"
          },
          description: {
            en: "Ran requirement engineering and gathered feedback from Finance and Market Risk users, translating their workflow into product requirements.",
            de: "Durchführung von Requirements Engineering und Erfassung von Nutzerfeedback aus den Finanz- und Marktrisikoteams zur Übersetzung von Arbeitsabläufen in Produktanforderungen."
          }
        },
        {
          title: {
            en: "4. Technical Team Communication & Design Intent",
            de: "4. Technische Kommunikation & Designabsicht"
          },
          description: {
            en: "Communicated requirements and design intent to the technical team throughout the build.",
            de: "Kontinuierliche Vermittlung der Anforderungen und der Designabsicht an das Entwicklungsteam während des gesamten Aufbaus."
          }
        },
        {
          title: {
            en: "5. Hands-on Implementation & Realism",
            de: "5. Hands-on Umsetzung & Realismus"
          },
          description: {
            en: "Worked hands-on with the implementation to ensure the solution stayed both realistic to build and aligned with the original business intent.",
            de: "Hands-on-Zusammenarbeit bei der Umsetzung, um eine realistische Implementierung im Einklang mit der ursprünglichen Geschäftsvision zu garantieren."
          }
        },
        {
          title: {
            en: "6. Complexity vs. Value Tradeoff Evaluation",
            de: "6. Tradeoff-Bewertung von Komplexität & Nutzwert"
          },
          description: {
            en: "Evaluated tradeoffs between build complexity and user value at each stage of the design.",
            de: "Bewertung von Zielkonflikten zwischen Entwicklungskomplexität und Nutzwert in jeder Designphase."
          }
        }
      ],
      evaluations: [
        {
          dimension: {
            en: "Decision Efficiency",
            de: "Entscheidungseffizienz"
          },
          output: {
            en: "Achieved 70% efficiency gain in decision-making by converting hours of manual report image searches into instant conversational answers.",
            de: "Erreichte 70 % Effizienzsteigerung bei Entscheidungen durch Umwandlung stundenlanger manueller Suchen in sofortige Konversationsantworten."
          },
          status: "70% FASTER"
        },
        {
          dimension: {
            en: "Data Accessibility & Intelligence",
            de: "Datenzugänglichkeit & Intelligenz"
          },
          output: {
            en: "Unlocks trapped commentary and chart image data into structured, queryable risk intelligence across weekly and monthly horizons.",
            de: "Ermöglicht den Zugriff auf isolierte Kommentare und Diagrammdaten als strukturierte, abfragbare Risikointelligenz."
          },
          status: "100% UNLOCKED"
        },
        {
          dimension: {
            en: "Verification & Trust",
            de: "Verifizierung & Vertrauen"
          },
          output: {
            en: "Automated second-pass reviewer checks extracted financial/risk data before saving, ensuring zero unverified data reaches decision pipelines.",
            de: "Automatische Zweitprüfung verifiziert extrahierte Finanz- und Risikodaten vor der Speicherung für maximale Datenintegrität."
          },
          status: "AUDITABLE"
        },
        {
          dimension: {
            en: "Enterprise Boundary Security",
            de: "Enterprise Cloud-Sicherheit"
          },
          output: {
            en: "Runs 100% inside Uniper's secure cloud boundary with role-based report security filtering and native Azure integration.",
            de: "Läuft zu 100 % innerhalb der sicheren Cloud-Grenze von Uniper mit rollenbasierter Berichtssicherheitsfilterung."
          },
          status: "ENTERPRISE READY"
        }
      ]
    }
  },
  // AI Financial Analyst Project
  {
    id: "ai-financial-analyst",
    title: {
      en: "AI Financial Analyst: Turning Variance Data into Audit-Ready Narratives | Strategy & Innovation Contributor",
      de: "KI-Finanzanalyst: Abweichungsdaten in prüfungsfähige Berichte verwandeln | Strategy & Innovation Contributor"
    },
    description: {
      en: "Designed an AI financial analyst workstation converting complex EBIT and Mark-to-Market (M2M) variance data into audit-ready financial narratives with 100% reconciled numbers.",
      de: "Entwicklung einer KI-Finanzanalysten-Workstation, die komplexe EBIT- und Mark-to-Market (M2M)-Abweichungsdaten in prüfungsfähige Finanzberichte mit 100 % abgestimmten Zahlen verwandelt."
    },
    impact: {
      en: "Cuts manual variance investigation down to a few clicks, producing executive-ready narratives that reconcile exactly with underlying cloud data warehouse numbers.",
      de: "Reduziert die manuelle Abweichungsanalyse auf wenige Klicks und erstellt führungsgerechte Berichte, die exakt mit den zugrundeliegenden Cloud Data Warehouse-Zahlen übereinstimmen."
    },
    innovation: {
      en: "Two-stage decoupled architecture: deterministic rule-based financial hierarchy retrieval combined with reasoning-only AI narrative generation.",
      de: "Zweistufig entkoppelte Architektur: Deterministische regelbasierte Datenabfrage der Finanzhierarchie kombiniert mit reiner KI-Begründungsebene."
    },
    category: "ai",
    badge: {
      en: "Enterprise Financial AI Case Study",
      de: "Enterprise Finanzen KI-Fallstudie"
    },
    technologies: [
      "AI Strategy",
      "Financial Analytics",
      "Deterministic Retrieval",
      "Data Warehouse",
      "EBIT & M2M Analysis",
      "Product Architecture",
      "Requirements Engineering"
    ],
    featured: true,
    customDetails: {
      subtitle: {
        en: "Financial Reporting & Variance Intelligence | Strategy & Innovation Contributor (Hands-on Build)",
        de: "Finanzberichterstattung & Abweichungs-Intelligenz | Strategy & Innovation Contributor (Hands-on)"
      },
      vision: {
        en: "Explaining multi-million dollar EBIT and Mark-to-Market (M2M) variances is one of the most time-consuming, high-stakes tasks in financial reporting. Analysts had to manually trace variances back through trading books, hedging structures, and controller commentary scattered across systems — then write up a narrative that had to reconcile perfectly with the numbers. It was slow, repetitive, and left little room for the deeper analysis that actually informs decisions.\n\nThe obvious approach would have been 'let's use AI to summarize the numbers.' I pushed the framing further: in a regulated financial context, an AI-generated narrative is worthless if it can't be trusted down to the last decimal. That became the central product constraint for the entire system.\n\nThis shaped key strategic decisions:\n• Accuracy over convenience — rejected a standard AI search approach because it cannot guarantee that every number ties back correctly, which is non-negotiable in audit-ready financial reporting.\n• Two distinct jobs, two distinct engines — separated the work into a strictly rule-based data retrieval step and a separate reasoning step for narrative writing, so the numbers are never left to AI interpretation.\n• Built for the end user's actual workflow — through direct requirement gathering and feedback sessions with financial controllers, the tool was shaped around how they actually investigate a variance (by indicator, profit center, time period).",
        de: "Die Erklärung von EBIT- und Mark-to-Market (M2M)-Abweichungen in Millionenhöhe gehört zu den zeitaufwendigsten Aufgaben in der Finanzberichterstattung. Analysten mussten Abweichungen manuell über Handelsbücher, Absicherungsstrukturen und Controller-Kommentare hinweg zurückverfolgen — und anschließend einen Bericht verfassen, der perfekt mit den Zahlen übereinstimmt.\n\nDer naheliegende Ansatz wäre gewesen: 'Lassen Sie uns KI nutzen, um Zahlen zusammenzufassen.' Ich habe die Fragestellung weitergetrieben: In einem regulierten Finanzkontext ist ein KI-generierter Text wertlos, wenn er nicht bis auf die letzte Nachkommastelle verlässlich ist. Das wurde zur zentralen Produktbedingung.\n\nDies prägte die Kernentscheidungen:\n• Genauigkeit vor Bequemlichkeit — Ablehnung einer Standard-KI-Suche, da diese keine exakte Zahlenabstimmung garantieren kann.\n• Zwei Aufgaben, zwei Systeme — Trennung in eine strikt regelbasierte Datenabfrage und eine separate KI-Begründungsebene für das Schreiben.\n• Orientiert am echten Controller-Arbeitsablauf — Entwickelt entlang der tatsächlichen Untersuchung von Abweichungen (nach Indikator, Profit Center, Zeitraum)."
      },
      agents: [
        {
          name: "Deterministic Retrieval Layer",
          color: "sky",
          description: {
            en: "Queries the cloud data warehouse and reconstructs the full parent-to-child financial hierarchy (trading book → hedging framework → profit center total) with zero numerical guesswork.",
            de: "Fragt das Cloud Data Warehouse ab und rekonstruiert die vollständige Finanzhierarchie (Handelsbuch → Absicherungsrahmen → Profit Center Summe) ohne Schätzungsfehler."
          }
        },
        {
          name: "Hierarchical Data Format Engine",
          color: "purple",
          description: {
            en: "Preserves complete trading book and hedging relationships while compressing processing payload by ~75%, accelerating analysis while cutting costs.",
            de: "Bewahrt vollständige Handelsbuch- und Absicherungsbeziehungen bei einer Komprimierung der Datenlast um ca. 75 % zur Kosten- und Latenzsenkung."
          }
        },
        {
          name: "Reasoning & Narrative Layer",
          color: "pink",
          description: {
            en: "Synthesizes executive summaries and variance commentary strictly over verified, reconciled data retrieved from the deterministic layer.",
            de: "Erstellt Management-Zusammenfassungen und Abweichungskommentare ausschließlich auf Basis verifizierter, abgestimmter Daten."
          }
        },
        {
          name: "Desktop Controller Workstation",
          color: "emerald",
          description: {
            en: "Empowers financial controllers to filter by year, profit center, and indicator for instant, audit-ready variance reports.",
            de: "Ermöglicht Controllern das Filtern nach Jahr, Profit Center und Indikator für sofortige, prüfungsfähige Abweichungsberichte."
          }
        }
      ],
      architecturalInnovations: [
        {
          title: {
            en: "Accuracy-First Architecture",
            de: "Accuracy-First Architektur"
          },
          color: "sky",
          description: {
            en: "Decoupled rule-based financial data retrieval from AI narrative generation to eliminate numerical hallucinations in audit-regulated reporting.",
            de: "Entkopplung regelbasierter Finanzdatenabfrage von KI-Textgenerierung zum vollständigen Ausschluss nummerischer Halluzinationen."
          }
        },
        {
          title: {
            en: "Two Jobs, Two Engines Strategy",
            de: "Zwei Aufgaben, zwei Systeme"
          },
          color: "pink",
          description: {
            en: "Separated work into deterministic data retrieval and reasoning-only AI commentary writing so numbers are never left to AI interpretation.",
            de: "Strikte Trennung in deterministische Datenabfrage und reines KI-Schreiben, damit Zahlen niemals der KI-Interpretation überlassen werden."
          }
        },
        {
          title: {
            en: "Workflow-Driven Controller Design",
            de: "Workflow-orientiertes Controller-Design"
          },
          color: "purple",
          description: {
            en: "Shaped around how controllers actually investigate variances (by indicator, profit center, time period) via direct requirement gathering.",
            de: "Gestaltet entlang der tatsächlichen Untersuchungspfade von Controllern basierend auf direktem Requirements Engineering."
          }
        }
      ],
      roadmap: [
        {
          title: {
            en: "1. Core Risk Identification & Strategic Framing",
            de: "1. Risikoidentifikation & Strategisches Framing"
          },
          description: {
            en: "Identified the core risk in applying generic AI to regulated financial reporting, defining the accuracy-first architecture constraint for the system.",
            de: "Identifikation des Kernrisikos bei generischer KI im Finanzwesen und Definition des Prinzips 'Genauigkeit an erster Stelle'."
          }
        },
        {
          title: {
            en: "2. Controller Requirement Engineering & Feedback",
            de: "2. Controller Requirements Engineering & Feedback"
          },
          description: {
            en: "Ran requirement engineering and feedback sessions with financial controllers, translating their investigative workflow into product requirements.",
            de: "Durchführung von Requirements Engineering und Feedback-Sitzungen mit Finanz-Controllern zur Übersetzung von Arbeitsabläufen in Produktanforderungen."
          }
        },
        {
          title: {
            en: "3. Technical Alignment & Implementation Involvement",
            de: "3. Technische Abstimmung & Einbindung in Umsetzung"
          },
          description: {
            en: "Communicated requirements and design intent to the technical team throughout the build, staying directly involved in implementation.",
            de: "Kontinuierliche Vermittlung der Anforderungen und der Designabsicht an das Entwicklungsteam und direkte Mitwirkung bei der Umsetzung."
          }
        },
        {
          title: {
            en: "4. Depth, Cost & Speed Tradeoff Evaluation",
            de: "4. Tradeoff-Bewertung von Tiefe, Kosten & Tempo"
          },
          description: {
            en: "Evaluated tradeoffs between analytical depth, cost, and speed at each stage of the design to deliver instant audit-ready variance narratives.",
            de: "Bewertung von Zielkonflikten zwischen Analysetiefe, Kosten und Tempo in allen Phasen zur Bereitstellung prüfungsfähiger Abweichungsberichte."
          }
        }
      ],
      evaluations: [
        {
          dimension: {
            en: "Investigation Efficiency",
            de: "Untersuchungseffizienz"
          },
          output: {
            en: "Cuts manual variance investigation from a multi-step, cross-system process down to a few clicks.",
            de: "Reduziert die manuelle Abweichungsanalyse von einem mehrstufigen systemübergreifenden Prozess auf wenige Klicks."
          },
          status: "FEW CLICKS"
        },
        {
          dimension: {
            en: "Audit Reconcilability",
            de: "Prüfungsfähigkeit & Abstimmung"
          },
          output: {
            en: "Produces executive-ready narratives that reconcile exactly with underlying numbers, removing manual QA effort.",
            de: "Erstellt führungsgerechte Berichte, die exakt mit den zugrundeliegenden Zahlen übereinstimmen und manuellen QS-Aufwand eliminieren."
          },
          status: "100% RECONCILED"
        },
        {
          dimension: {
            en: "Data Payload Efficiency",
            de: "Datenlast-Effizienz"
          },
          output: {
            en: "Compact structured data format preserves financial hierarchy while reducing AI payload by ~75% for faster, cheaper execution.",
            de: "Kompaktes Datenformat bewahrt die Finanzhierarchie bei einer Reduzierung der KI-Datenlast um ca. 75 %."
          },
          status: "75% PAYLOAD REDUCTION"
        },
        {
          dimension: {
            en: "Analyst Value Focus",
            de: "Fokus auf Analystenmehrwert"
          },
          output: {
            en: "Frees financial analysts to spend time on high-value judgment and follow-up rather than repetitive data assembly.",
            de: "Ermöglicht Analysten die Konzentration auf wertschöpfende Beurteilungen statt auf repetitive Datenzusammenstellung."
          },
          status: "HIGH VALUE FOCUS"
        }
      ]
    }
  },
  // Innovation Strategy (Rezaul's Project)
  {
    id: "tuv-nord-consulting",
    title: {
      en: "Innovation Strategy Consultant | Cooperation with TÜV NORD Group",
      de: "Innovationsstrategie-Beratung | Kooperation mit TÜV NORD Group"
    },
    description: {
      en: "Developed a 10-year AI innovation strategy to transition TÜV NORD's manual auditing processes to AI-driven quality assurance in adult education, creating a three-phase roadmap.",
      de: "Entwicklung einer 10-jährigen KI-Innovationsstrategie zur Überführung manueller Auditierungsprozesse von TÜV NORD in eine KI-gestützte Qualitätssicherung in der Erwachsenenbildung."
    },
    impact: {
      en: "Designed a scalable '3-Pillar-Scoring-Architecture' ensuring EU AI Act compliance and reducing certification cycle times by 40% using OKR and PESTLE frameworks.",
      de: "Entwurf einer skalierbaren '3-Säulen-Scoring-Architektur' zur Gewährleistung der EU AI Act-Konformität und Reduzierung der Zertifizierungszyklen um 40 % mittels OKR- und PESTLE-Frameworks."
    },
    innovation: {
      en: "Compliance-by-Design scoring methodology for third-party educational content evaluation.",
      de: "Compliance-by-Design-Scoring-Methodik für die Bewertung von Bildungsinhalten von Drittanbietern."
    },
    category: "ai",
    badge: {
      en: "TÜV NORD Group Strategic Pilot",
      de: "TÜV NORD Group Strategie-Pilot"
    },
    technologies: [
      "AI Strategy",
      "Platform Governance",
      "EU AI Act Compliance",
      "OKR Roadmap",
      "PESTLE Analysis",
      "Quality Assurance",
      "Change Management",
      "Risk Management"
    ],
    featured: true,
    customDetails: {
      subtitle: {
        en: "Cooperation with TÜV NORD Group | Disruptive Innovation & Moonshot Design",
        de: "Kooperation mit der TÜV NORD Group | Disruptive Innovation & Moonshot Design"
      },
      vision: {
        en: "As the adult education market shifts toward decentralized, platform-based digital learning (utilizing Extended Reality and adaptive AI), traditional manual quality auditing processes fail to scale. TÜV NORD needed a disruptive mechanism to eliminate manual audit bottlenecks for third-party educational content providers, ensure continuous quality assurance at near-zero marginal cost, and establish an unshakeable benchmark of trust for digital, lifelong learning credentials. Our visionary 10-year strategy addresses these challenges by replacing expensive linear human resource models with an exponential, data-driven hybrid platform model.",
        de: "Da sich der Markt für Erwachsenenbildung hin zu dezentralem, plattformbasiertem digitalem Lernen (unter Nutzung von Extended Reality und adaptiver KI) verschiebt, stoßen traditionelle manuelle Qualitätsprüfungsprozesse an ihre Skalierungsgrenzen. TÜV NORD benötigte einen disruptiven Mechanismus, um manuelle Audit-Engpässe für Drittanbieter von Bildungsinhalten zu beseitigen, eine kontinuierliche Qualitätssicherung zu Grenzkosten von nahezu Null zu gewährleisten und einen unerschütterlichen Vertrauensmaßstab für digitale Zertifikate unter dem EU-KI-Gesetz und strengen Datenschutzbestimmungen zu etablieren. Unsere visionäre 10-Jahres-Strategie löst diese Herausforderungen, indem sie teure lineare Personalmodelle durch ein exponentielles, datengesteuertes hybrides Plattformmodell ersetzt."
      },
      agents: [
        {
          name: "Technical & Structural Quality",
          color: "sky",
          description: {
            en: "AI-driven automated scanning of code infrastructure, platform compatibility, and UX stability to ensure technical soundness.",
            de: "KI-gestützte automatisierte Überprüfung der Code-Infrastruktur, Plattformkompatibilität und UX-Stabilität zur Gewährleistung der technischen Zuverlässigkeit."
          }
        },
        {
          name: "Didactic & Pedagogical Value",
          color: "pink",
          description: {
            en: "LLM-powered semantic analysis of learning materials, assessment integrity, and close alignment with certified course syllabi.",
            de: "LLM-gestützte semantische Analyse von Lernmaterialien, Bewertungsintegrität und enge Ausrichtung auf zertifizierte Lehrpläne."
          }
        },
        {
          name: "Outcome & Engagement Metrics",
          color: "emerald",
          description: {
            en: "Real-time feedback loops monitoring course completion rates, user satisfaction metrics, and knowledge-retention data dynamically.",
            de: "Echtzeit-Feedbackschleifen zur dynamischen Überwachung von Kursabschlussquoten, Nutzerzufriedenheit und Wissensretention."
          }
        },
        {
          name: "Hybrid Human-Machine Ecosystem",
          color: "purple",
          description: {
            en: "Human-in-the-loop validation where AI serves as an automated triage layer, maximizing human expertise on complex boundary cases.",
            de: "Mensch-Maschine-Kollaboration (Human-in-the-Loop), bei der die KI als automatisierte Triage-Ebene dient und menschliche Expertise für komplexe Grenzzustände maximiert."
          }
        }
      ],
      architecturalInnovations: [
        {
          title: {
            en: "PESTLE Environmental Scan",
            de: "PESTLE-Umfeldanalyse"
          },
          color: "sky",
          description: {
            en: "Conducted a rigorous scan evaluating Political ('Bildungsoffensive'), Technological (LLMs, adaptive learning, XR), and Legal (EU AI Act, GDPR, copyright) boundaries.",
            de: "Durchführung einer präzisen Analyse zur Bewertung politischer ('Bildungsoffensive'), technologischer (LLMs, adaptives Lernen, XR) und rechtlicher Grenzen (EU-KI-Gesetz, DSGVO, Urheberrecht)."
          }
        },
        {
          title: {
            en: "Strategy for Change & Moonshot Design",
            de: "Strategy for Change & Moonshot-Design"
          },
          color: "purple",
          description: {
            en: "Applied strategic visioning frameworks to construct a 2035 market-leader blueprint and align current capabilities with the long-term disruptive goal.",
            de: "Anwendung strategischer Visionierungs-Frameworks, um einen Marktführer-Blueprint für 2035 zu entwerfen und aktuelle Fähigkeiten mit dem disruptiven Ziel abzugleichen."
          }
        },
        {
          title: {
            en: "Scenario & Gap Analysis",
            de: "Szenario- & Gap-Analyse"
          },
          color: "pink",
          description: {
            en: "Dissected existing certification standards (such as AZAV and ISO 21001) to pinpoint optimization bottlenecks and define AI validation sandboxes.",
            de: "Detaillierte Analyse bestehender Zertifizierungsstandards (wie AZAV und ISO 21001), um Optimierungsengpässe zu identifizieren und KI-Validierungs-Sandboxes zu definieren."
          }
        }
      ],
      roadmap: [
        {
          title: {
            en: "Phase 1 (2025–2028): Technological Foundations",
            de: "Phase 1 (2025–2028): Technologische Grundlagen"
          },
          description: {
            en: "Strategic Focus: Establish data infrastructure, build baseline models, and define preliminary AI governance. Pilot the ingestion pipeline to attain a 90% accuracy match between AI quality pre-scoring and manual expert audits.",
            de: "Strategischer Fokus: Aufbau der Dateninfrastruktur, Erstellung von Basismodellen und Definition vorläufiger KI-Governance. Pilotierung der Pipeline zur Erreichung einer 90%igen Übereinstimmung zwischen KI-Vorbewertung und Expertenaudits."
          }
        },
        {
          title: {
            en: "Phase 2 (2029–2032): Scaling Hybrid Quality Assurance",
            de: "Phase 2 (2029–2032): Skalierung der hybriden Qualitätssicherung"
          },
          description: {
            en: "Strategic Focus: Roll out the automated 'TÜV Learning Quality Score' to integrated platforms. Move to architectural innovation by launching a human-in-the-loop hybrid validation system, reducing certification times by 40% while handling 5x volume.",
            de: "Strategischer Fokus: Einführung des automatisierten 'TÜV Learning Quality Score' auf integrierten Plattformen. Übergang zur architektonischen Innovation durch ein Human-in-the-Loop-System zur Reduzierung der Zertifizierungszeit um 40 % bei 5-fachem Volumen."
          }
        },
        {
          title: {
            en: "Phase 3 (2033–2035): Autonomous AI-Certification Ecosystem",
            de: "Phase 3 (2033–2035): Autonomes KI-Zertifizierungs-Ökosystem"
          },
          description: {
            en: "Strategic Focus: Realize the Moonshot. Position TÜV NORD as Europe's primary autonomous authority for digital platform auditing, scaling to dynamically audit millions of continuous micro-credentials across international borders.",
            de: "Strategischer Fokus: Realisierung des Moonshots. Positionierung von TÜV NORD als Europas führende autonome Instanz für digitale Plattformprüfungen, skalierbar für das dynamische Auditieren von Millionen kontinuierlicher Mikro-Zertifikate."
          }
        },
        {
          title: {
            en: "Ecological Sustainability Insights",
            de: "Ökologische Nachhaltigkeit"
          },
          description: {
            en: "Integrated carbon-tracking metrics (utilizing frameworks like CodeCarbon.io) into the platform architecture to actively monitor and optimize the ecological footprint of large-scale AI model inference.",
            de: "Integration von CO2-Tracking-Metriken (unter Verwendung von Frameworks wie CodeCarbon.io) in die Plattformarchitektur zur aktiven Überwachung und Optimierung des ökologischen Fußabdrucks von groß angelegten KI-Modell-Inferenzen."
          }
        }
      ],
      evaluations: [
        {
          dimension: {
            en: "Scalability Model",
            de: "Skalierungsmodell"
          },
          output: {
            en: "Transitioned quality assurance from expensive, linear human-resource auditing to an exponential, automated platform model.",
            de: "Überführung der Qualitätssicherung von einer teuren, linearen personalgestützten Prüfung in ein exponentielles, automatisiertes Plattformmodell."
          },
          status: "EXPONENTIAL"
        },
        {
          dimension: {
            en: "Trust & Compliance Safeguards",
            de: "Vertrauen & Compliance-Schutz"
          },
          output: {
            en: "Embedded architectural filters to proactively satisfy high-risk AI classification criteria under the upcoming EU AI Act.",
            de: "Integrierte architektonische Filter zur proaktiven Erfüllung der Kriterien für Hochrisiko-KI-Einstufungen unter dem kommenden EU-KI-Gesetz."
          },
          status: "EU AI ACT READY"
        },
        {
          dimension: {
            en: "Ecological Footprint Optimization",
            de: "Optimierung des ökologischen Fußabdrucks"
          },
          output: {
            en: "Designed sustainable inference tracking using CodeCarbon.io frameworks to measure model computation greenhouse impacts.",
            de: "Entwurf einer nachhaltigen Inferenz-Verfolgung mittels CodeCarbon.io-Frameworks zur Messung der Treibhausgasbelastung durch Modellberechnungen."
          },
          status: "CARBON TRACKED"
        },
        {
          dimension: {
            en: "Executive Board Defense",
            de: "Präsentation vor dem Vorstand"
          },
          output: {
            en: "Successfully pitched a 25-page strategic brief to TÜV NORD Group stakeholders, receiving excellent commendations for visionary design.",
            de: "Erfolgreiche Verteidigung eines 25-seitigen Strategiepapiers vor Stakeholdern der TÜV NORD Group mit hervorragendem Lob für das visionäre Design."
          },
          status: "APPROVED"
        }
      ]
    }
  },
  // Web Application (Rezaul's Project)
  {
    id: "web-app-testing",
    title: {
      en: "Web Application with Comprehensive Automated Testing Lifecycle",
      de: "Webanwendung mit umfassendem automatisierten Test-Lebenszyklus"
    },
    description: {
      en: "Requirement gathering, UML architectural designing, developing secure backend systems and executing rigorous verification cycles.",
      de: "Anforderungsanalyse, Entwurf der UML-Architektur, Entwicklung sicherer Backend-Systeme und Durchführung strenger Verifizierungszyklen."
    },
    impact: {
      en: "Implemented a fully test-covered web application, performing complete unit, component, system and user acceptance tests.",
      de: "Implementierung einer vollständig testabgedeckten Webanwendung mit vollständigen Unit-, Komponenten-, System- und Abnahmetests."
    },
    innovation: {
      en: "Integrated strict test-driven engineering workflow with end-to-end trace mapping from requirements to tests.",
      de: "Integration eines strengen testgetriebenen Engineering-Workflows mit End-to-End-Rückverfolgbarkeit von Anforderungen bis zu Tests."
    },
    category: "java",
    badge: {
      en: "Full-Cycle SQA & Testing Architecture",
      de: "Vollständige SQA- & Test-Architektur"
    },
    technologies: ["Java", "SQL Server", "UML Modeling", "Unit Testing", "System Testing", "Software Quality Assurance"]
  },
  // Predictive Analytics & ML Pipeline (Existing Project)
  {
    id: "predictive-analytics",
    title: {
      en: "Predictive Analytics & ML Pipeline",
      de: "Prädiktive Analytik & ML-Pipeline"
    },
    description: {
      en: "Development of various end-to-end Machine Learning projects, including House Price Prediction (Regression), Customer Churn Prediction (Classification) and Dogs vs. Cats Image Classification (CNN).",
      de: "Entwicklung verschiedener End-to-End Machine Learning-Projekte, einschließlich Hauspreisvorhersage (Regression), Kundenabwanderungsprognose (Klassifizierung) und Hunde-vs.-Katzen-Bildklassifizierung (CNN)."
    },
    category: "ai",
    badge: {
      en: "Multi-Model ML Pipeline",
      de: "Multi-Modell ML-Pipeline"
    },
    technologies: ["Python", "PyTorch", "TensorFlow", "Scikit-Learn", "CNN", "Regression", "Data Pipelines"]
  },
  // Crowdfunding Platform (Existing Project)
  {
    id: "project-funder",
    title: {
      en: "Crowdfunding Platform 'ProjectFunder'",
      de: "Crowdfunding-Plattform 'ProjectFunder'"
    },
    description: {
      en: "Modeling and implementation of a relational database architecture with Entity Relationship Diagrams (ERD) for a student platform project.",
      de: "Modellierung und Implementierung einer relationalen Datenbankarchitektur mit Entity Relationship Diagrams (ERD) für ein studentisches Plattformprojekt."
    },
    category: "web",
    badge: {
      en: "Relational DB & System Modeling",
      de: "Relationales DB- & Systemmodell"
    },
    technologies: ["Python-Flask", "MySQL", "DB2", "SQL", "ERD Modeling"]
  },
  // Java Web App ADIT (Existing Project)
  {
    id: "java-adit-process",
    title: {
      en: "Java Web Application (ADIT Process)",
      de: "Java-Webanwendung (ADIT-Prozess)"
    },
    description: {
      en: "Development of a web application as a project team member at the Faculty of Engineering. Structured workflow according to the ADIT development process.",
      de: "Entwicklung einer Webanwendung als Mitglied eines Projektteams an der Fakultät für Ingenieurwissenschaften. Strukturierter Workflow nach dem ADIT-Entwicklungsprozess."
    },
    category: "java",
    badge: {
      en: "Faculty Engineering Application",
      de: "Fakultätsanwendung Ingenieurwissenschaften"
    },
    technologies: ["Java", "SQL", "Unit-Testing", "ADIT Process", "Agile Workflow"]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "edu-msc",
    degree: {
      en: "M.Sc. Information Systems (Wirtschaftsinformatik)",
      de: "M.Sc. Wirtschaftsinformatik (Information Systems)"
    },
    institution: "Universität Duisburg-Essen",
    location: {
      en: "Duisburg-Essen, Germany",
      de: "Duisburg-Essen, Deutschland"
    },
    period: "04/2024 - Current",
    details: {
      en: "Interdisciplinary program bridging advanced technology, management and digital strategy. Curricular focus includes IT consulting, entrepreneurship, corporate finance, predictive modeling and developing enterprise systems using AI.",
      de: "Interdisziplinärer Studiengang an der Schnittstelle von moderner Technologie, Management und digitaler Strategie. Zu den Studienschwerpunkten gehören IT-Beratung, Entrepreneurship, Corporate Finance, prädiktive Modellierung und die Entwicklung von Enterprise-Systemen mittels KI."
    },
    specialization: {
      en: "Specialization: Digital Strategy, IT Consulting, AI Systems Development • Focus Areas: Data Science & AI-Driven Decision Making, Sustainable Digital Innovation & Entrepreneurship, Responsible AI & Tech Governance",
      de: "Spezialisierung: Digitale Strategie, IT-Consulting, KI-Systementwicklung • Schwerpunkte: Data Science & KI-gestützte Entscheidungsfindung, Sustainable Digital Innovation & Entrepreneurship, Responsible AI & Tech Governance"
    }
  },
  {
    id: "edu-bsc",
    degree: {
      en: "B.Sc. Computer Engineering (Software Focus)",
      de: "B.Sc. Technische Informatik / Computer Engineering (Software-Fokus)"
    },
    institution: "Universität Duisburg-Essen",
    location: {
      en: "Duisburg-Essen, Germany",
      de: "Duisburg-Essen, Deutschland"
    },
    period: "10/2018 – 03/2024",
    details: {
      en: "Comprehensive engineering foundation in digital systems, computer networks, and databases. Focused heavily on software system architecture, automated verification pipelines, and agile software development.",
      de: "Umfassende ingenieurwissenschaftliche Grundlagen in digitalen Systemen, Rechnernetzen und Datenbanken. Starke Fokussierung auf Softwaresystemarchitektur, automatisierte Verifikations-Pipelines und agile Softwareentwicklung."
    },
    specialization: {
      en: "Thesis: A Comprehensive Study of Cloud Hosting Strategies and Microsoft Azure Monitoring (12/2023 – 03/2024)",
      de: "Thesis: Eine umfassende Studie über Cloud-Hosting-Strategien und Microsoft Azure Monitoring (12/2023 – 03/2024)"
    }
  }
];

export const certificatesData: CertificateItem[] = [
  {
    id: "cert-copilot-studio",
    title: {
      en: "Copilot Studio Agent in a Day",
      de: "Copilot Studio Agent in a Day"
    },
    issuer: "Microsoft / Uniper SE",
    year: "2026",
    description: {
      en: "Hands-on certification covering the design, creation and deployment of autonomous AI agents and custom copilots using Microsoft Power Platform.",
      de: "Praktische Zertifizierung für das Design, die Erstellung und Bereitstellung autonomer KI-Agenten und benutzerdefinierter Copilots mit der Microsoft Power Platform."
    },
    credentialUrl: "/certificates/Agent in a Day.pdf"
  },
  {
    id: "cert-data-learning",
    title: {
      en: "Data Learning Journey Certified - Developing Level",
      de: "Data Learning Journey Certified - Developing Level"
    },
    issuer: "Uniper SE",
    year: "2025",
    description: {
      en: "Certification for advanced data analysis, dashboard reporting and business process automation within the finance and risk landscape.",
      de: "Zertifizierung für fortgeschrittene Datenanalyse, Dashboard-Berichterstattung und Geschäftsprozessautomatisierung im Finanz- und Risikoumfeld."
    },
    credentialUrl: "/certificates/Agent in a Day-1.pdf"
  },
  {
    id: "cert-ude-quality-management",
    title: {
      en: "Student Engagement in Quality Management",
      de: "Studentisches Engagement im Qualitätsmanagement"
    },
    issuer: "Universität Duisburg-Essen",
    year: "2025",
    description: {
      en: "Official recognition for contributing to the continuous quality assurance of teaching units, study programs, and institutional evaluations within a system-accredited quality management framework.",
      de: "Offizielle Bescheinigung für die Mitwirkung bei der kontinuierlichen Qualitätssicherung von Lehreinheiten, Studiengängen und institutionellen Evaluationen im Rahmen eines systemakkreditierten Qualitätsmanagementsystems."
    },
    credentialUrl: "/certificates/Qualitätsmanagement.pdf"
  },
  {
    id: "cert-brainbirds-scrum-master",
    title: {
      en: "Agile Scrum Master Training",
      de: "Agile Scrum Master Ausbildung"
    },
    issuer: "Brainbirds",
    year: "2025",
    description: {
      en: "Intensive professional development focusing on Scrum principles, Agile project delivery framework, sprint facilitation, and leadership strategies to build and scale high-performing, self-organizing teams.",
      de: "Intensives Fachtraining zu Scrum-Prinzipien, agilen Projektframeworks, Sprint-Moderation und Führungsstrategien zum Aufbau und zur Skalierung leistungsstarker, selbstorganisierter Teams."
    },
    credentialUrl: "/certificates/brainbirds-zertifikat-Rezaul-Hoque.pdf"
  },
  {
    id: "cert-duesseldorf-marathon",
    title: {
      en: "Düsseldorf Marathon Volunteer Certificate",
      de: "Düsseldorf Marathon Helfer-Zertifikat"
    },
    issuer: "Düsseldorf Marathon",
    year: "2026",
    description: {
      en: "Recognition for volunteer service, logistics coordination and operational support during the Düsseldorf Marathon.",
      de: "Anerkennung für ehrenamtlichen Einsatz, Logistikkoordination und betriebliche Unterstützung während des Düsseldorf Marathons."
    },
    credentialUrl: "/certificates/Agent in a Day-2.pdf"
  },
  {
    id: "cert-mckinsey-forward",
    title: {
      en: "McKinsey Forward Program",
      de: "McKinsey Forward-Programm"
    },
    issuer: "McKinsey & Company",
    year: "2026",
    description: {
      en: "A selective three-stage learning journey focused on leadership, business, digital and emotional intelligence skills to thrive in future workplace environments.",
      de: "Eine selektive, dreistufige Lernreise mit Fokus auf Führung, Business-Kompetenzen, Digitalisierung und emotionale Intelligenz für die zukünftige Arbeitswelt."
    },
    credentialUrl: "https://www.credly.com/badges/6067e4a8-0272-4571-ad20-661e94d7d2cc"
  },
  {
    id: "cert-psm-i",
    title: {
      en: "Professional Scrum Master I (PSM I)",
      de: "Professional Scrum Master I (PSM I)"
    },
    issuer: "Scrum.org",
    year: "2025",
    description: {
      en: "Validation of fundamental understanding of the Scrum framework, roles and agile product development.",
      de: "Validierung des grundlegenden Verständnisses des Scrum-Frameworks, der Rollen und der agilen Produktentwicklung."
    },
    credentialUrl: "https://www.credly.com/badges/fc690750-25af-4073-94b3-0601c2439ec0/public_url"
  },
  {
    id: "cert-az-400",
    title: {
      en: "AZ-400: Enterprise DevOps Expert",
      de: "AZ-400: Enterprise DevOps Expert"
    },
    issuer: "Microsoft",
    year: "2024",
    description: {
      en: "Expertise in designing and implementing DevOps practices, version control, compliance, CI/CD and monitoring.",
      de: "Expertise im Entwurf und der Implementierung von DevOps-Praktiken, Versionsverwaltung, Compliance, CI/CD und Monitoring."
    },
    credentialUrl: "/certificates/AZ-400.pdf"
  },
  {
    id: "cert-az-305",
    title: {
      en: "AZ-305: Azure Solutions Architect",
      de: "AZ-305: Azure Solutions Architect"
    },
    issuer: "Microsoft",
    year: "2024",
    description: {
      en: "Designing cloud and hybrid solutions running on Microsoft Azure, including compute, network, storage, security and monitoring.",
      de: "Entwerfen von Cloud- und Hybridlösungen auf Microsoft Azure, einschließlich Compute, Netzwerk, Speicher, Sicherheit und Monitoring."
    },
    credentialUrl: "/certificates/AZ-305.pdf"
  },
  {
    id: "cert-databricks-ai-agent-fundamentals",
    title: {
      en: "AI Agent Fundamentals",
      de: "AI Agent Fundamentals"
    },
    issuer: "Databricks",
    year: "2025",
    description: {
      en: "Covers the fundamental principles of building, evaluating and deploying production-quality AI agents and agentic systems using Databricks.",
      de: "Deckt die grundlegenden Prinzipien für den Aufbau, die Evaluierung und die Bereitstellung von produktionsreifen KI-Agenten und agentischen Systemen mit Databricks ab."
    },
    credentialUrl: "https://credentials.databricks.com/a96e0d67-ce09-40f0-883a-247840e91239#acc.RTUHy90G"
  },
  {
    id: "cert-databricks-fundamentals",
    title: {
      en: "Databricks Fundamentals",
      de: "Databricks Fundamentals"
    },
    issuer: "Databricks",
    year: "2025",
    description: {
      en: "Foundation-level certification covering lakehouse architecture, data warehousing, data engineering and machine learning concepts on the Databricks platform.",
      de: "Grundlagen-Zertifizierung, die Lakehouse-Architektur, Data Warehousing, Data Engineering und Konzepte des maschinellen Lernens auf der Databricks-Plattform abdeckt."
    },
    credentialUrl: "https://credentials.databricks.com/67f3ef6d-eff9-497d-a7c5-e28bb7bbd019#acc.EQOKUyu3"
  },
  {
    id: "cert-mastering-bi-dax-powerbi",
    title: {
      en: "Mastering Business Intelligence with DAX, Power BI, and Excel",
      de: "Mastering Business Intelligence mit DAX, Power BI und Excel"
    },
    issuer: "Microsoft Press",
    year: "2025",
    description: {
      en: "Advanced training on data modeling, DAX calculations, interactive Power BI report design and Excel business intelligence integration.",
      de: "Fortgeschrittene Schulung zu Datenmodellierung, DAX-Berechnungen, interaktivem Power-BI-Berichtsdesign und Excel-Business-Intelligence-Integration."
    },
    credentialUrl: "https://www.linkedin.com/learning/certificates/e7fae9c6cd94accb8aa36d06014b318c5ed5f77c5a63d642947e7a4c5e177bf9?u=80731522"
  },
  {
    id: "cert-az-900-prep",
    title: {
      en: "Microsoft Azure Fundamentals (AZ-900) Cert Prep",
      de: "Microsoft Azure Fundamentals (AZ-900) Zertifikatsvorbereitung"
    },
    issuer: "Microsoft Press",
    year: "2025",
    description: {
      en: "Comprehensive preparation covering core cloud concepts, Azure architecture and services, and Azure management and governance.",
      de: "Umfassende Vorbereitung auf grundlegende Cloud-Konzepte, Azure-Architektur und -Dienste sowie Azure-Management und -Governance."
    },
    credentialUrl: "/certificates/Microsoft Azure Fundamentals AZ900 Cert Prep by Microsoft Press.pdf"
  }
];

