import { Skeleton } from '@/components/ui/skeleton';
import { ProjectCardSkeleton } from './project-card-skeleton';

export function TodaySkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-9 w-32" />
      <div className="space-y-5">
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
        <div className="pt-4 space-y-4 border-t">
          <Skeleton className="h-4 w-28" />
          <div className="flex gap-2">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 w-28" />
            <Skeleton className="h-8 w-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
