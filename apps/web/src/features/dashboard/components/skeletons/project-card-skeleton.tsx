import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function ProjectCardSkeleton() {
  return (
    <Card className="w-full">
      <CardHeader className="space-y-3 pb-4">
        <div className="flex items-start justify-between gap-2">
          <Skeleton className="h-7 w-48" />
          <Skeleton className="h-5 w-16 shrink-0" />
        </div>

        <Skeleton className="h-4 w-64" />
        <Skeleton className="h-4 w-24" />

        <div className="flex gap-2 pt-1">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-24" />
        </div>
      </CardHeader>

      <CardContent className="space-y-5 pt-0">
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-28" />
        </div>

        <div className="space-y-3 pt-2">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-3 w-8" />
            </div>
            <Skeleton className="h-3 w-full" />
          </div>
          <div className="pt-2 border-t space-y-2">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
