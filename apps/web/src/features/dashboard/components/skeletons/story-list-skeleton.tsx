import { Skeleton } from '@/components/ui/skeleton';

export function StoryItemSkeleton() {
  return (
    <div className="flex items-center justify-between gap-4 py-4 first:pt-0">
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-48" />
        <div className="flex gap-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-20" />
        </div>
      </div>
      <Skeleton className="h-8 w-14 shrink-0" />
    </div>
  );
}

export function StoryListSkeleton() {
  return (
    <div className="space-y-0 divide-y divide-border">
      <StoryItemSkeleton />
      <StoryItemSkeleton />
      <StoryItemSkeleton />
      <StoryItemSkeleton />
      <StoryItemSkeleton />
    </div>
  );
}
