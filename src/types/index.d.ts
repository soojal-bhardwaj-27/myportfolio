// Type definitions for custom types used throughout the application

export interface NavItem {
  id: string;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  links: {
    demo?: string;
    github?: string;
  };
}

export interface Skill {
  name: string;
  level: number; // 0-100
  color: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  isLeft?: boolean;
}