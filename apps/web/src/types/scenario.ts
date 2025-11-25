export type SkillTag =
  | 'Architecture'
  | 'Leadership'
  | 'Product thinking'
  | 'System Design'
  | 'Code Review'
  | 'Team Building'
  | 'Technical Strategy';

export type DifficultyLevel = 'Warm-up' | 'Senior+' | 'Staff' | 'Principal';

export interface Scenario {
  id: string;
  title: string;
  description: string;
  skills: SkillTag[];
  difficulty: DifficultyLevel;
  durationMin: number;
  durationMax: number;
  problemOverview: string;
  constraints: string[];
  stakeholders: string[];
  completed?: boolean;
  inProgress?: boolean;
}

export interface ScenarioFilters {
  skills: SkillTag[];
  difficulty: DifficultyLevel[];
  showOnlyUnfinished: boolean;
  searchQuery: string;
}
