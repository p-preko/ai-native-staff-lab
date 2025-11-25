import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function WorkspaceProjectCardSkeleton() {
  return (
    <Card className="w-full h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-4">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-5 w-16 shrink-0" />
        </div>
        <Skeleton className="h-4 w-full mt-2" />
      </CardHeader>
      <CardContent className="mt-auto pt-0">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-3 w-8" />
            </div>
            <Skeleton className="h-2 w-full rounded-full" />
          </div>

          <div className="flex items-center justify-between pt-2 border-t">
            <div className="flex -space-x-2">
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="h-6 w-6 rounded-full" />
            </div>
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function WorkspaceListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <WorkspaceProjectCardSkeleton key={i} />
      ))}
    </div>
  );
}
