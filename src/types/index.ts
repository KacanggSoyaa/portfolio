export type AppId = 'about' | 'projects' | 'services' | 'contact' | 'terminal' | 'resume';

export interface WindowState {
  id: AppId;
  title: string;
  icon: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Full-Stack' | 'Frontend' | 'Web Dev' | 'IT Systems';
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  problem: string;
  solution: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: string;
  startingPrice?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
}
