import { WorkspaceProject } from '@/types/workspace';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const MOCK_PROJECTS: WorkspaceProject[] = [
  {
    id: 'proj-1',
    title: 'Q4 Technical Roadmap',
    description:
      'Defining key engineering initiatives and architectural milestones for Q4.',
    status: 'active',
    priority: 'high',
    lastUpdated: '2025-11-24T10:30:00Z',
    collaborators: ['Alice', 'Bob'],
    documentsCount: 4,
    progress: 35,
  },
  {
    id: 'proj-2',
    title: 'Incident Report: Payment Gateway Outage',
    description:
      'Root cause analysis and remediation plan for the Nov 20 outage.',
    status: 'active',
    priority: 'high',
    lastUpdated: '2025-11-23T16:45:00Z',
    collaborators: ['Charlie'],
    documentsCount: 1,
    progress: 80,
  },
  {
    id: 'proj-3',
    title: 'Team Reorganization Proposal',
    description:
      'Drafting the new squad structure for the Platform Engineering department.',
    status: 'active',
    priority: 'medium',
    lastUpdated: '2025-11-20T09:15:00Z',
    collaborators: ['David', 'Eve'],
    documentsCount: 2,
    progress: 10,
  },
  {
    id: 'proj-4',
    title: 'Legacy Auth Service Migration',
    description: 'Migration strategy from Auth0 to internal identity provider.',
    status: 'completed',
    priority: 'medium',
    lastUpdated: '2025-10-15T14:20:00Z',
    collaborators: ['Alice'],
    documentsCount: 12,
    progress: 100,
  },
  {
    id: 'proj-5',
    title: 'Frontend Performance Audit',
    description:
      'Comprehensive review of Core Web Vitals across all landing pages.',
    status: 'archived',
    priority: 'low',
    lastUpdated: '2025-09-01T11:00:00Z',
    collaborators: ['Bob', 'Charlie'],
    documentsCount: 1,
    progress: 100,
  },
];

export async function getWorkspaceProjects(
  query?: string,
  status?: string,
): Promise<WorkspaceProject[]> {
  // Realistic network delay
  await delay(150);

  let filtered = [...MOCK_PROJECTS];

  if (status && status !== 'all') {
    const statuses = status.split(',');
    filtered = filtered.filter((p) => statuses.includes(p.status));
  }

  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q),
    );
  }

  return filtered;
}

export async function getWorkspaceProjectById(
  id: string,
): Promise<WorkspaceProject | null> {
  await delay(100);
  return MOCK_PROJECTS.find((p) => p.id === id) || null;
}
