import { Skeleton } from '@/components/ui/skeleton';
import { ProjectCardSkeleton } from './project-card-skeleton';

export function WorkQueueSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-9 w-40" />
      <div className="space-y-5">
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </div>
    </div>
  );
}
