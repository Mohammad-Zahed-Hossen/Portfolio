export type ProjectStatus =
  | "active-development"
  | "research-prototype"
  | "in-progress"
  | "archived";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  role: string;
  primaryDomain: string;
  tags: string[];
  stack: string[];
  repositoryUrl?: string;
  liveUrl?: string;
  featured: boolean;
  problemSummary: string;
  approachSummary: string;
  benchmarkContext?: string;
  highlights: string[];
}

export interface ResearchArea {
  id: string;
  title: string;
  status: string;
  summary: string;
  focusTopics: string[];
  notes: string;
  methodology?: string[];
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  institution: string;
  scholarship: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  positioningStatement: string;
  researchPositioning: string;
  focusAreas: string[];
  navItems: NavItem[];
}
