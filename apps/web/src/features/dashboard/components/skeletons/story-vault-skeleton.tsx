import { Skeleton } from '@/components/ui/skeleton';
import { StatsSkeleton } from './stats-skeleton';
import { StoryListSkeleton } from './story-list-skeleton';

export function StoryVaultSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-9 w-56" />
      <StatsSkeleton />
      <div className="pt-2 space-y-4">
        <Skeleton className="h-4 w-32" />
        <StoryListSkeleton />
      </div>
    </div>
  );
}
