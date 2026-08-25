export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
  description: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  iconName: string;
  description: string;
  category: "programming" | "ai" | "tools";
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface DomainItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  gradient: string;
  tags: string[];
}

export interface InternshipItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  skillsLearned: string[];
  role: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  year: string;
  description: string;
  overview: string;
  objective: string;
  technologies: string[];
  features: string[];
  contribution: string;
  category: string;
}

export interface CertificationItem {
  id: string;
  number: number;
  title: string;
  organization: string;
  date: string;
  badge: string;
  description?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: "award" | "leadership" | "competition" | "sports";
  year?: string;
  organization?: string;
  badge: string;
}

export interface WorkshopItem {
  id: string;
  title: string;
  institution: string;
  year: string;
  description: string;
  topics: string[];
}

export interface ContactInfo {
  name: string;
  phone: string;
  email: string;
  receiverEmail: string;
  github: string;
  linkedin: string;
  location: string;
  role: string;
}

export interface CvReviewResult {
  estimatedScore: number;
  summary: string;
  profileCompleteness: { score: number; feedback: string };
  skillsVisibility: { score: number; feedback: string };
  projectPresentation: { score: number; feedback: string };
  educationClarity: { score: number; feedback: string };
  experienceClarity: { score: number; feedback: string };
  atsFriendlySuggestions: string[];
  missingSections: string[];
  formattingSuggestions: string[];
  keyStrengths: string[];
  topActionItems: string[];
}
