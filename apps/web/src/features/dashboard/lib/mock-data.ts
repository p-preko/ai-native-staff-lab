import { Project, Story, DashboardStats } from '@/types/project';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const MOCK_DATA = {
  activeProjects: [
    {
      id: '1',
      name: 'Project Comet',
      scenarioType: 'System Design' as const,
      status: 'in-progress' as const,
      tags: ['Architecture', 'Leadership'],
      aiMentorReady: true,
      progress: 45,
      nextTask: 'Define microservices interface',
    },
    {
      id: '2',
      name: 'Project Alpha',
      scenarioType: 'System Design' as const,
      status: 'in-progress' as const,
      tags: ['Leadership'],
      seniorityLevel: 'STAFF' as const,
      aiMentorReady: true,
      allMentorsReady: true,
    },
  ],
  queueProjects: [
    {
      id: '3',
      name: 'Project Alpha',
      scenarioType: 'System Design' as const,
      status: 'in-progress' as const,
      difficulty: 'Difficult' as const,
      seniorityLevel: 'STAFF' as const,
      aiMentorReady: true,
      allMentorsReady: true,
    },
    {
      id: '4',
      name: 'Project Beta',
      scenarioType: 'Leadership' as const,
      status: 'not-started' as const,
      difficulty: 'Complex' as const,
      seniorityLevel: 'SENIOR' as const,
      aiMentorReady: true,
      allMentorsReady: true,
    },
    {
      id: '5',
      name: 'Project Gamma',
      scenarioType: 'System Design' as const,
      status: 'not-started' as const,
      difficulty: 'Technical' as const,
      seniorityLevel: 'PRINCIPAL' as const,
      aiMentorReady: true,
    },
  ] as Project[],
  todayFocus: ['AI pairing', 'System design', 'Feedback'],
  recentStories: [
    {
      id: '1',
      title: 'Refactored payment flow',
      tags: ['Code', 'Optimization'],
      completed: true,
    },
    {
      id: '2',
      title: 'Implemented session management',
      tags: ['Optimization'],
      completed: true,
    },
    {
      id: '3',
      title: 'Mentored junior engineer',
      tags: ['Leadership'],
    },
    {
      id: '4',
      title: 'Designed data replication strategy',
      tags: ['Cloud', 'Architecture'],
      completed: true,
    },
    {
      id: '5',
      title: 'Designed data pipeline',
      tags: ['Infrastructure'],
    },
  ],
  dashboardStats: {
    storiesCaptured: 25,
    projectsCompleted: 0,
    weeklyStreak: 3,
  },
};

export async function getActiveProjects(): Promise<Project[]> {
  await delay(100);
  return MOCK_DATA.activeProjects;
}

export async function getQueueProjects(): Promise<Project[]> {
  await delay(120);
  return MOCK_DATA.queueProjects;
}

export async function getTodayFocus(): Promise<string[]> {
  await delay(80);
  return MOCK_DATA.todayFocus;
}

export async function getRecentStories(): Promise<Story[]> {
  await delay(150);
  return MOCK_DATA.recentStories;
}

export async function getDashboardStats(): Promise<DashboardStats> {
  await delay(90);
  return MOCK_DATA.dashboardStats;
}

export async function getDashboardData() {
  await delay(200);
  return {
    activeProjects: MOCK_DATA.activeProjects,
    queueProjects: MOCK_DATA.queueProjects,
    todayFocus: MOCK_DATA.todayFocus,
    recentStories: MOCK_DATA.recentStories,
    dashboardStats: MOCK_DATA.dashboardStats,
  };
}
