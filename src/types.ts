export type Language = 'en' | 'de';
export type Theme = 'light' | 'dark';

export interface ExperienceItem {
  id: string;
  title: { en: string; de: string };
  company: string;
  location: { en: string; de: string };
  period: string;
  bulletPoints: { en: string[]; de: string[] };
  technologies: string[];
  latest?: boolean;
}

export interface ProjectItem {
  id: string;
  title: { en: string; de: string };
  description: { en: string; de: string };
  impact?: { en: string; de: string };
  innovation?: { en: string; de: string };
  category: 'ai' | 'web' | 'java';
  technologies: string[];
  featured?: boolean;
  link?: string;
  badge?: {
    en: string;
    de: string;
  };
  customDetails?: {
    subtitle?: { en: string; de: string };
    vision?: { en: string; de: string };
    agents?: {
      name: string;
      color: string;
      description: { en: string; de: string };
    }[];
    architecturalInnovations?: {
      title: string | { en: string; de: string };
      color: string;
      description: { en: string; de: string };
    }[];
    mathFormulations?: {
      title: string;
      color: string;
      formulas: string[];
      notes: { en: string; de: string };
    }[];
    evaluations?: {
      dimension: string | { en: string; de: string };
      output: string | { en: string; de: string };
      status: string;
    }[];
    roadmap?: {
      title: string | { en: string; de: string };
      description: { en: string; de: string };
    }[];
    universities?: string[];
    scoringMethodology?: { en: string; de: string };
  };
}

export interface EducationItem {
  id: string;
  degree: { en: string; de: string };
  institution: string;
  location: { en: string; de: string };
  period: string;
  details: { en: string; de: string };
  specialization?: { en: string; de: string };
}

export interface SkillItem {
  name: string;
  association?: { en: string; de: string };
}

export interface SkillCategory {
  category: { en: string; de: string };
  icon: string;
  color: string;
  skills: SkillItem[];
}

export interface CertificateItem {
  id: string;
  title: { en: string; de: string };
  issuer: string;
  year: string;
  description: { en: string; de: string };
  credentialUrl?: string;
}
