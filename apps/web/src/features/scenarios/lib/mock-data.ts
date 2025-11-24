import { Scenario } from '@/types/scenario';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const MOCK_SCENARIOS: Scenario[] = [
  {
    id: '1',
    title: 'Design a Rate Limiting System',
    description:
      'Build a distributed rate limiter for a high-traffic API gateway serving 100K requests/second',
    skills: ['Architecture', 'System Design'],
    difficulty: 'Staff',
    durationMin: 60,
    durationMax: 90,
    problemOverview:
      'Design a rate limiting system that can handle 100,000 requests per second across multiple data centers. The system must prevent abuse while maintaining low latency (<5ms p99) and high availability (99.99%).',
    constraints: [
      'Must support multiple rate limiting strategies (fixed window, sliding window, token bucket)',
      'Distributed coordination required across 5 data centers',
      'Sub-5ms p99 latency requirement',
      'Cannot use third-party rate limiting services',
    ],
    stakeholders: [
      'API Platform Team - needs reliable rate limiting',
      'Security Team - requires abuse prevention',
      'Customer Success - concerned about false positives',
    ],
    completed: false,
    inProgress: false,
  },
  {
    id: '2',
    title: 'Lead Technical Migration Planning',
    description:
      'Plan and execute migration from monolith to microservices for a 50-person engineering org',
    skills: ['Leadership', 'Technical Strategy'],
    difficulty: 'Principal',
    durationMin: 90,
    durationMax: 120,
    problemOverview:
      'You are leading the migration of a 10-year-old monolithic application to microservices. The system serves 10M users and generates $100M ARR. You need to plan the migration without disrupting the business.',
    constraints: [
      'Zero downtime migration required',
      'Must maintain feature velocity during transition',
      '50 engineers across 8 teams need coordination',
      '18-month timeline from leadership',
    ],
    stakeholders: [
      'CTO - wants technical debt addressed',
      'VP Engineering - concerned about team productivity',
      'Product - needs continued feature delivery',
      'Customer Success - worried about stability',
    ],
    completed: false,
    inProgress: true,
  },
  {
    id: '3',
    title: 'Build Team Onboarding Program',
    description:
      'Create a comprehensive onboarding experience for new senior engineers joining your team',
    skills: ['Leadership', 'Team Building'],
    difficulty: 'Senior+',
    durationMin: 45,
    durationMax: 60,
    problemOverview:
      'Your team has grown from 5 to 15 engineers in 6 months. New hires are struggling to ramp up quickly. Design an onboarding program that gets senior engineers productive within 2 weeks.',
    constraints: [
      'Limited mentorship bandwidth from existing team',
      'Distributed team across 4 time zones',
      'Complex legacy codebase with minimal documentation',
      'Need to scale to 10 new hires over next quarter',
    ],
    stakeholders: [
      'Engineering Manager - needs faster ramp-up time',
      'New hires - want clear learning path',
      'Senior engineers - have limited time for mentoring',
    ],
    completed: true,
    inProgress: false,
  },
  {
    id: '4',
    title: 'Design Observability Strategy',
    description:
      'Build observability infrastructure for microservices architecture serving 50M requests/day',
    skills: ['Architecture', 'System Design'],
    difficulty: 'Staff',
    durationMin: 75,
    durationMax: 90,
    problemOverview:
      'Design an observability system (metrics, logs, traces) for 40 microservices. Current mean time to detection (MTTD) is 45 minutes. Goal is to reduce it to under 5 minutes.',
    constraints: [
      'Budget limit of $50K/month for tooling',
      'Must work with existing Kubernetes infrastructure',
      'Need to handle 2TB of logs per day',
      'Some services are in languages without good instrumentation libraries',
    ],
    stakeholders: [
      'SRE Team - needs actionable alerts',
      'Engineering Teams - want easy debugging',
      'Finance - concerned about costs',
    ],
    completed: false,
    inProgress: false,
  },
  {
    id: '5',
    title: 'Code Review Culture Assessment',
    description:
      'Evaluate and improve code review practices across a 30-person engineering organization',
    skills: ['Leadership', 'Code Review'],
    difficulty: 'Senior+',
    durationMin: 60,
    durationMax: 75,
    problemOverview:
      'Code reviews are taking 2-3 days on average, blocking deploys. Some PRs get rubber-stamped, others get bikeshedded endlessly. Design a better process and cultural practices.',
    constraints: [
      'Cannot mandate specific review times (team autonomy valued)',
      'Mix of senior and junior engineers',
      'Some teams are remote, others co-located',
      'Need metrics to track improvement',
    ],
    stakeholders: [
      'Engineering teams - frustrated with current process',
      'Product - wants faster iteration',
      'CTO - concerned about code quality',
    ],
    completed: false,
    inProgress: false,
  },
  {
    id: '6',
    title: 'Data Pipeline Reliability',
    description:
      'Fix a critical data pipeline that processes $10M in financial transactions daily',
    skills: ['System Design', 'Architecture'],
    difficulty: 'Staff',
    durationMin: 90,
    durationMax: 120,
    problemOverview:
      'A critical ETL pipeline is failing 2-3 times per week, requiring manual intervention. Each failure delays financial reporting by 6-8 hours. Make it reliable.',
    constraints: [
      'Cannot replace the system (business dependency)',
      'Data volume growing 20% per month',
      'Must maintain data consistency guarantees',
      'Team has limited data engineering expertise',
    ],
    stakeholders: [
      'Finance Team - needs timely reports for compliance',
      'Data Team - handles incident firefighting',
      'Leadership - concerned about regulatory risk',
    ],
    completed: false,
    inProgress: false,
  },
  {
    id: '7',
    title: 'Product Roadmap Alignment',
    description:
      'Align technical strategy with product goals for next 2 quarters across 4 engineering teams',
    skills: ['Leadership', 'Product thinking'],
    difficulty: 'Principal',
    durationMin: 60,
    durationMax: 90,
    problemOverview:
      'Product wants to launch 5 major features next quarter, but engineering has 3 quarters of tech debt backlog. Navigate the tradeoffs and build a realistic roadmap.',
    constraints: [
      'CEO has committed features to customers',
      'Technical platform is blocking scale',
      'Team morale is low due to constant firefighting',
      'Cannot hire more engineers this year',
    ],
    stakeholders: [
      'VP Product - needs features delivered',
      'Engineering Teams - want time for tech debt',
      'CEO - committed to customer promises',
      'CTO - concerned about platform stability',
    ],
    completed: false,
    inProgress: false,
  },
  {
    id: '8',
    title: 'Performance Optimization Sprint',
    description:
      'Reduce page load times from 4s to <1s for your core product experience',
    skills: ['System Design', 'Technical Strategy'],
    difficulty: 'Senior+',
    durationMin: 45,
    durationMax: 60,
    problemOverview:
      'User research shows page load time is the #1 complaint. Current p95 is 4 seconds. Product wants it under 1 second. Plan and execute the optimization.',
    constraints: [
      'Cannot do a full rewrite (time constraint)',
      'Must maintain feature parity',
      'Some third-party dependencies are slow',
      '2-week timeline from product',
    ],
    stakeholders: [
      'Product - needs user satisfaction improvement',
      'Design - wants animations to feel smooth',
      'Engineering - limited time for investigation',
    ],
    completed: true,
    inProgress: false,
  },
  {
    id: '9',
    title: 'Incident Response Framework',
    description:
      'Design an incident management process for a high-growth startup moving from 10 to 100 engineers',
    skills: ['Leadership', 'System Design'],
    difficulty: 'Staff',
    durationMin: 60,
    durationMax: 75,
    problemOverview:
      'Incidents are chaotic - no clear ownership, poor communication, and minimal learning. Build a framework that scales as the team grows.',
    constraints: [
      'Cannot hire dedicated SRE team yet',
      'Need to work with existing on-call rotation',
      'Must integrate with Slack, PagerDuty, and Jira',
      'Process should feel lightweight, not bureaucratic',
    ],
    stakeholders: [
      'On-call engineers - need clear runbooks',
      'Customer Success - needs communication templates',
      'Leadership - wants transparency and learning',
    ],
    completed: false,
    inProgress: false,
  },
];

export async function getScenarios(): Promise<Scenario[]> {
  await delay(150);
  return MOCK_SCENARIOS;
}

export async function getScenarioById(id: string): Promise<Scenario | null> {
  await delay(80);
  return MOCK_SCENARIOS.find((s) => s.id === id) || null;
}

export async function getScenariosByFilters(filters: {
  skills?: string[];
  difficulty?: string[];
  showOnlyUnfinished?: boolean;
  searchQuery?: string;
}): Promise<Scenario[]> {
  await delay(120);

  let filtered = [...MOCK_SCENARIOS];

  if (filters.showOnlyUnfinished) {
    filtered = filtered.filter((s) => !s.completed);
  }

  if (filters.skills && filters.skills.length > 0) {
    filtered = filtered.filter((s) =>
      filters.skills!.some((skill) => s.skills.includes(skill as any)),
    );
  }

  if (filters.difficulty && filters.difficulty.length > 0) {
    filtered = filtered.filter((s) =>
      filters.difficulty!.includes(s.difficulty),
    );
  }

  if (filters.searchQuery) {
    const query = filters.searchQuery.toLowerCase();
    filtered = filtered.filter(
      (s) =>
        s.title.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query),
    );
  }

  return filtered;
}
