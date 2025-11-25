export type ProjectStatus = 'active' | 'completed' | 'archived';
export type ProjectPriority = 'high' | 'medium' | 'low';

export interface WorkspaceProject {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  priority: ProjectPriority;
  lastUpdated: string;
  collaborators: string[]; // Avatar URLs or names
  documentsCount: number;
  progress: number; // 0-100
}

export interface WorkspaceFilters {
  searchQuery: string;
  status: ProjectStatus[];
}
