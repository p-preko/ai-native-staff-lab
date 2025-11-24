import { StatsCard } from './stats-card';
import { StoryItem } from './story-item';
import { DashboardStats, Story } from '@/types/project';

interface StoryVaultSectionProps {
  stats: DashboardStats;
  stories: Story[];
}

export function StoryVaultSection({ stats, stories }: StoryVaultSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">STORY VAULT & STATS</h2>

      <div className="grid grid-cols-3 gap-3">
        <StatsCard label="Stories Captured" value={stats.storiesCaptured} />
        <StatsCard label="Projects Completed" value={stats.projectsCompleted} />
        <StatsCard label="Weekly Streak" value={stats.weeklyStreak} />
      </div>

      <div className="pt-2 space-y-4">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Recent Stories
        </h3>
        <div className="space-y-0 divide-y divide-border">
          {stories.map((story) => (
            <StoryItem key={story.id} story={story} />
          ))}
        </div>
      </div>
    </div>
  );
}
