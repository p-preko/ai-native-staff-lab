import { Skeleton } from '@/components/ui/skeleton';
import { WorkspaceListSkeleton } from '@/features/workspace/components/skeletons/workspace-list-skeleton';

export default function Loading() {
  return (
    <div className="container mx-auto p-6 max-w-[1800px]">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Workspace</h1>
          <Skeleton className="h-10 w-32" />
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b pb-6">
          <div className="flex gap-2">
            <Skeleton className="h-10 w-64 rounded-md" />
          </div>

          <div className="relative w-full sm:w-72">
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        </div>

        <WorkspaceListSkeleton />
      </div>
    </div>
  );
}
