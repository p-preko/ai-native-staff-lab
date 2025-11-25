import { Skeleton } from '@/components/ui/skeleton';
import { ScenariosListSkeleton } from '@/features/scenarios/components/skeletons/scenarios-list-skeleton';

export default function Loading() {
  return (
    <div className="container mx-auto p-6 max-w-[1800px]">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">
            Scenario Library
          </h1>
          <div className="relative w-full max-w-md">
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        </div>

        <div className="space-y-6 pb-6 border-b">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Skeleton className="h-4 w-16" />
              <div className="flex gap-2">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-24 rounded-full" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
            </div>
            <div className="space-y-3">
              <Skeleton className="h-4 w-20" />
              <div className="flex gap-2">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-24 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <ScenariosListSkeleton />
      </div>
    </div>
  );
}
