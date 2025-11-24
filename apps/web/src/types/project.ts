export type ProjectStatus = 'in-progress' | 'not-started' | 'completed';

export type ScenarioType = 'System Design' | 'Leadership' | 'Technical';

export type DifficultyLevel = 'Difficult' | 'Complex' | 'Technical';

export type SeniorityLevel = 'STAFF' | 'SENIOR' | 'PRINCIPAL';

export interface Project {
  id: string;
  name: string;
  scenarioType: ScenarioType;
  status: ProjectStatus;
  tags?: string[];
  difficulty?: DifficultyLevel;
  seniorityLevel?: SeniorityLevel;
  nextTask?: string;
  progress?: number;
  aiMentorReady: boolean;
  allMentorsReady?: boolean;
}

export interface Story {
  id: string;
  title: string;
  tags: string[];
  completed?: boolean;
}

export interface DashboardStats {
  storiesCaptured: number;
  projectsCompleted: number;
  weeklyStreak: number;
}
