export type ProjectStatus =
  | "active-development"
  | "research-prototype"
  | "in-progress"
  | "archived";

export type ProjectVisibility = "published" | "experimental" | "archived";

export type EvidenceStatus = "measured" | "implemented" | "in-progress" | "planned";

export interface ProjectEvidence {
  label: string;
  value: string;
  context: string;
  status: EvidenceStatus;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  description: string;
  category: "input" | "process" | "validation" | "output" | "storage" | "adapter";
}

export interface ArchitectureEdge {
  from: string;
  to: string;
  label?: string;
}

export interface TechnicalDecision {
  decision: string;
  rationale: string;
  tradeoff: string;
}

export interface WorkflowStep {
  stepNumber: number;
  title: string;
  description: string;
  detail?: string;
}

export interface CaseStudySection {
  problem: string;
  constraints: string[];
  solutionSummary: string;
  architecture: {
    title: string;
    summary: string;
    statusNote?: string;
    nodes: ArchitectureNode[];
    edges: ArchitectureEdge[];
  };
  workflowSteps: WorkflowStep[];
  technicalDecisions: TechnicalDecision[];
  evidence: ProjectEvidence[];
  limitations: string[];
  nextSteps: string[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  visibility: ProjectVisibility;
  featured: boolean;
  caseStudyReady: boolean;
  role: string;
  primaryDomain: string;
  tags: string[];
  stack: string[];
  repositoryUrl?: string;
  liveUrl?: string;
  problemSummary: string;
  approachSummary: string;
  benchmarkContext?: string;
  highlights: string[];
  caseStudy?: CaseStudySection;
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
